"use client";

import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, RotateCcw, TriangleAlert } from "lucide-react";
import {
  AssistApiError,
  createPublicSession,
  getPublicAssistConfig,
  getPublicAssistHealth,
  getPublicPayrollCountries,
  isAssistConfigured,
  submitPublicMessage,
  type PublicCountriesFeed,
} from "@/lib/assist";
import {
  COPY,
  POPULAR_QUESTIONS,
  PUBLIC_ANSWER_INTENTS,
  REQUEST_TIMEOUT_MS,
  TOPICS,
  containsSensitiveData,
  mergeConfig,
  type ActionKey,
  type Topic,
  type TopicPrompt,
} from "./concierge-content";
import {
  ConciergeComposer,
  ConciergeHeader,
  ConciergeLauncher,
  CountryCheck,
  CtaRow,
  FOCUS_RING,
  PANEL_CLASS,
  PopularQuestions,
  PublicMessageBubble,
  SupportChooser,
  ThinkingBubble,
  TopicGrid,
  WelcomeBlock,
  type ConciergeMessage,
  type FeedState,
  type HealthState,
} from "./ConciergeUI";

// Anonymous-visitor Global Payroll AI Concierge for the public marketing
// site (wireframe ZP-PUB-AI-UX-001). Same backend, same /assist/public/*
// endpoints and safety scope as the payroll app's public widget: global
// knowledge-base answers only, no account or payroll data reachable from
// this surface, no attachments. The session id lives in memory only — a
// reload or Close starts fresh, with no silent retrieval of an earlier
// anonymous transcript (§08).
const LOGO_SRC = "/logo.png";
const ICON_SRC = "/zoikopayroll-icon.png";

type Banner = { kind: "expired" | "rateLimited" | "connectivity" | "invalid"; text: string };

type SendOptions = {
  actions?: ActionKey[];
  topicId?: string;
  countryCode?: string;
  retryId?: string;
  fromComposer?: boolean;
};

function classifyError(e: unknown): Banner {
  if (e instanceof DOMException && e.name === "AbortError") return { kind: "connectivity", text: COPY.connectivity };
  const status = e instanceof AssistApiError ? e.status : undefined;
  const message = e instanceof Error ? e.message : "";
  if (status === 404 || status === 410) return { kind: "expired", text: COPY.sessionExpired };
  if (status === 429) return { kind: "rateLimited", text: COPY.rateLimited };
  if (status === 400 && /message limit|new session/i.test(message)) {
    return { kind: "expired", text: "This conversation has reached its message limit. Start a new conversation." };
  }
  if (status === 400 || status === 422) {
    return { kind: "invalid", text: message || "That message couldn't be sent. Please rephrase and try again." };
  }
  return { kind: "connectivity", text: COPY.connectivity };
}

let messageCounter = 0;
const nextId = (prefix: string) => `${prefix}-${Date.now()}-${++messageCounter}`;

const emptySubscribe = () => () => {};

// createPortal needs `document`, which doesn't exist during this Client
// Component's server render — this reports false on the server and true
// once hydrated on the client, with no effect/setState round trip.
function useIsClient(): boolean {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

export default function AssistWidget() {
  const isClient = useIsClient();
  const headingId = useId();
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [config, setConfig] = useState(() => mergeConfig(null));
  const [feed, setFeed] = useState<PublicCountriesFeed | null>(null);
  const [feedState, setFeedState] = useState<FeedState>("loading");
  const [health, setHealth] = useState<HealthState>("checking");
  const [locale, setLocale] = useState("en");
  const [sessionId, setSessionId] = useState<number | null>(null);
  const [messages, setMessages] = useState<ConciergeMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [warning, setWarning] = useState("");
  const [banner, setBanner] = useState<Banner | null>(null);
  const [view, setView] = useState<"home" | "chat">("home");
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [showSupport, setShowSupport] = useState(false);

  const launcherRef = useRef<HTMLButtonElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const countryInputRef = useRef<HTMLInputElement>(null);
  const inFlight = useRef(false);
  const pendingCountryFocus = useRef(false);

  // Config, country feed and health load once, on first open (never on
  // page load — the widget must not do work without a user gesture).
  function openPanel() {
    setOpen(true);
    if (!loaded) {
      setLoaded(true);
      getPublicAssistConfig(locale).then((c) => setConfig(mergeConfig(c)));
      getPublicPayrollCountries(locale).then((f) => {
        setFeed(f);
        setFeedState(f && Array.isArray(f.countries) ? "ready" : "error");
      });
      getPublicAssistHealth().then(setHealth);
    } else if (health === "unavailable") {
      // Re-check a failed probe on reopen so a transient outage doesn't
      // leave the composer locked for the whole visit.
      getPublicAssistHealth().then(setHealth);
    }
  }

  useEffect(() => {
    if (open) headingRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (view === "chat") scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending, view]);

  // A "Check your country" follow-up switches to the home view; focus the
  // country search once that view has mounted.
  useEffect(() => {
    if (!pendingCountryFocus.current || view !== "home") return;
    pendingCountryFocus.current = false;
    countryInputRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
    countryInputRef.current?.focus({ preventScroll: true });
  }, [view]);

  const minimize = useCallback(() => {
    setOpen(false);
    launcherRef.current?.focus();
  }, []);

  // Close ends the conversation; Minimize keeps it (wireframe §08).
  function resetConversation() {
    setSessionId(null);
    setMessages([]);
    setInput("");
    setWarning("");
    setBanner(null);
    setView("home");
    setActiveTopicId(null);
    setShowSupport(false);
  }

  function close() {
    resetConversation();
    minimize();
  }

  async function ensureSession(): Promise<number> {
    if (sessionId) return sessionId;
    const session = await createPublicSession(locale);
    setSessionId(session.id);
    return session.id;
  }

  async function sendMessage(text: string, { actions = [], topicId, countryCode, retryId, fromComposer = false }: SendOptions = {}) {
    const content = (text || "").trim();
    if (!content || inFlight.current) return;
    if (content.length > config.maxMessageLength) return;
    if (containsSensitiveData(content)) {
      setWarning(COPY.sensitiveWarning);
      return;
    }

    inFlight.current = true;
    setWarning("");
    setBanner(null);
    setView("chat");
    setShowSupport(false);
    if (fromComposer) setInput("");

    const userId = retryId || nextId("u");
    setMessages((prev) =>
      retryId
        ? prev.map((m) => (m.id === retryId ? { ...m, status: "sending" } : m))
        : [...prev, { id: userId, role: "user", content, status: "sending", actions, topicId, countryCode }]
    );
    setSending(true);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
      const sid = await ensureSession();
      const result = await submitPublicMessage(sid, content, { countryCode, topicId, signal: controller.signal });
      const sources = result.sources || [];
      let answer = result.answer;
      let answerActions = actions;
      let kind: ConciergeMessage["kind"] = "answer";
      if (!PUBLIC_ANSWER_INTENTS.has(result.intent_id)) {
        // Account/action-shaped request — the backend redirected it.
        answerActions = ["signIn"];
      } else if ((result.intent_id === "kb.answer" || result.intent_id === "explain.field") && sources.length === 0) {
        kind = "insufficient";
        answer = `${COPY.insufficientEvidence} You can check country coverage or talk to our Sales team for specifics.`;
        answerActions = ["checkCountry", "talkToSales"];
      }
      setMessages((prev) => [
        ...prev.map((m): ConciergeMessage => (m.id === userId ? { ...m, status: "sent" } : m)),
        { id: nextId("a"), role: "assistant", kind, content: answer, sources, actions: answerActions },
      ]);
      if (health === "unavailable" || health === "checking") setHealth("available");
    } catch (e) {
      const error = classifyError(e);
      setMessages((prev) => prev.map((m): ConciergeMessage => (m.id === userId ? { ...m, status: "failed" } : m)));
      setBanner(error);
      if (error.kind === "expired") setSessionId(null);
      if (error.kind === "connectivity" && !sessionId) setHealth("unavailable");
    } finally {
      clearTimeout(timer);
      inFlight.current = false;
      setSending(false);
    }
  }

  function handleTopicPrompt(prompt: TopicPrompt, topic: Topic) {
    if (prompt.mode === "prefill") {
      setInput(prompt.prefill || "");
      requestAnimationFrame(() => {
        const el = textareaRef.current;
        if (!el) return;
        el.focus();
        el.setSelectionRange(el.value.length, el.value.length);
      });
      return;
    }
    sendMessage(prompt.label, { actions: prompt.actions, topicId: topic.id });
  }

  function goToCountryCheck() {
    setView("home");
    setActiveTopicId(null);
    pendingCountryFocus.current = true;
  }

  // Rendered only on the client and only when a backend URL is actually
  // configured — until then the widget stays invisible rather than
  // pointing at a broken endpoint.
  if (!isClient || !isAssistConfigured()) return null;

  const hasConversation = messages.length > 0;
  const unavailable = health === "unavailable";

  return createPortal(
    <>
      <ConciergeLauncher
        ref={launcherRef}
        open={open}
        onToggle={() => (open ? minimize() : openPanel())}
        iconSrc={ICON_SRC}
        label={open ? "Minimize Global Payroll AI Concierge" : "Open Global Payroll AI Concierge"}
      />

      {open ? (
        <div
          role="dialog"
          aria-labelledby={headingId}
          lang={locale}
          className={PANEL_CLASS}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.preventDefault();
              minimize();
            }
          }}
        >
          <ConciergeHeader
            logoSrc={LOGO_SRC}
            headingId={headingId}
            headingRef={headingRef}
            status={health}
            locales={config.locales}
            locale={locale}
            onLocaleChange={setLocale}
            onMinimize={minimize}
            onClose={close}
          />

          <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-white">
            {view === "home" ? (
              <div className="space-y-4 px-4 py-4 md:px-5">
                {hasConversation ? (
                  <button
                    type="button"
                    onClick={() => setView("chat")}
                    className={`inline-flex items-center gap-1.5 rounded-[8px] text-[12px] font-semibold text-brand hover:underline ${FOCUS_RING}`}
                  >
                    <ArrowLeft size={14} aria-hidden="true" /> Back to conversation
                  </button>
                ) : null}
                <WelcomeBlock iconSrc={ICON_SRC} compact={hasConversation} />
                <TopicGrid
                  topics={TOPICS}
                  activeTopicId={activeTopicId}
                  onSelectTopic={setActiveTopicId}
                  onBack={() => setActiveTopicId(null)}
                  onPrompt={handleTopicPrompt}
                  disabled={sending || unavailable}
                />
                <CountryCheck
                  ref={countryInputRef}
                  feed={feed}
                  feedState={feedState}
                  links={config.links}
                  roadmapNote={config.roadmapNote}
                  disabled={sending || unavailable}
                  onAsk={(country) =>
                    sendMessage(`How does payroll work in ${country.name}?`, {
                      countryCode: country.code,
                      actions: ["talkToSales"],
                    })
                  }
                />
                <div className="border-t border-[#E6EEF8]" aria-hidden="true" />
                <PopularQuestions
                  questions={POPULAR_QUESTIONS}
                  disabled={sending || unavailable}
                  faqUrl={config.links.faq}
                  links={config.links}
                  onPick={(q) => sendMessage(q.label, { actions: q.actions })}
                />
                <CtaRow links={config.links} onSupport={() => setShowSupport((v) => !v)} supportExpanded={showSupport} />
                {showSupport ? (
                  <SupportChooser
                    links={config.links}
                    liveSupportAvailable={config.liveSupportAvailable}
                    onClose={() => setShowSupport(false)}
                  />
                ) : null}
              </div>
            ) : (
              <div className="space-y-3 px-4 py-4 md:px-5">
                <WelcomeBlock iconSrc={ICON_SRC} compact />
                <div role="log" aria-live="polite" aria-relevant="additions" aria-label="Conversation" className="space-y-3">
                  {messages.map((m) => (
                    <PublicMessageBubble
                      key={m.id}
                      message={m}
                      links={config.links}
                      iconSrc={ICON_SRC}
                      retryDisabled={sending}
                      onRetry={(msg) =>
                        sendMessage(msg.content, {
                          retryId: msg.id,
                          actions: msg.actions,
                          topicId: msg.topicId,
                          countryCode: msg.countryCode,
                        })
                      }
                      onCheckCountry={goToCountryCheck}
                    />
                  ))}
                </div>
                {sending ? <ThinkingBubble iconSrc={ICON_SRC} /> : null}
              </div>
            )}
          </div>

          {banner ? (
            <div
              role="alert"
              className="flex items-start gap-2 border-t border-[#B7791F]/30 bg-[#FBF0DE] px-4 py-2.5 text-[12px] text-[#1C2B42] md:px-5"
            >
              <TriangleAlert size={15} className="mt-0.5 shrink-0 text-[#9A6412]" aria-hidden="true" />
              <p className="flex-1">{banner.text}</p>
              {banner.kind === "expired" ? (
                <button
                  type="button"
                  onClick={resetConversation}
                  className={`inline-flex shrink-0 items-center gap-1 font-semibold text-brand underline ${FOCUS_RING}`}
                >
                  <RotateCcw size={12} aria-hidden="true" /> Start a new conversation
                </button>
              ) : null}
            </div>
          ) : null}

          <ConciergeComposer
            ref={textareaRef}
            value={input}
            onChange={(v) => {
              setInput(v);
              if (warning) setWarning("");
            }}
            onSubmit={() => sendMessage(input, { fromComposer: true })}
            sending={sending}
            disabled={unavailable}
            maxLength={config.maxMessageLength}
            notice={COPY.publicNotice}
            warning={warning}
            showTopicsButton={view === "chat"}
            onShowTopics={() => setView("home")}
          />
        </div>
      ) : null}
    </>,
    document.body
  );
}
