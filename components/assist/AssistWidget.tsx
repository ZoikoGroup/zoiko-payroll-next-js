"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { CloseIcon, SendIcon } from "../ui/icons";
import Logo from "../layout/Logo";
import {
  createPublicSession,
  isAssistConfigured,
  listPublicMessages,
  submitPublicMessage,
  type PublicSource,
} from "@/lib/assist";

// Anonymous-visitor Assist widget for the public marketing site. Mirrors the
// payroll app's own public-mode widget (same backend, same /assist/public/*
// endpoints, same safety scope: global knowledge-base answers only, no
// account or payroll data ever reachable from this surface) but restyled to
// this site's own blue brand rather than the payroll app's purple.
const SESSION_KEY = "zoiko_marketing_assist_session";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: PublicSource[];
};

const emptySubscribe = () => () => {};

// createPortal needs `document`, which doesn't exist during this Client
// Component's server render — this reports false on the server and true
// once hydrated on the client, with no effect/setState round trip (avoids
// react-hooks/set-state-in-effect entirely, unlike the common
// useState+useEffect "mounted" gate).
function useIsClient(): boolean {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

export default function AssistWidget() {
  const isClient = useIsClient();
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bootStarted = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || sessionId !== null || bootStarted.current) return;
    bootStarted.current = true;
    (async () => {
      try {
        const existing = sessionStorage.getItem(SESSION_KEY);
        if (existing) {
          const id = Number(existing);
          const history = await listPublicMessages(id);
          setSessionId(id);
          setMessages(history.map((m) => ({ id: `h-${m.id}`, role: m.role, content: m.content })));
        } else {
          const session = await createPublicSession("en");
          sessionStorage.setItem(SESSION_KEY, String(session.id));
          setSessionId(session.id);
        }
      } catch {
        setError("Assist is temporarily unavailable. Please try again shortly.");
        bootStarted.current = false;
      }
    })();
  }, [open, sessionId]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending]);

  async function sendMessage(text?: string) {
    const content = (text ?? input).trim();
    if (!content || sending || !sessionId) return;
    setInput("");
    setError(null);
    setMessages((prev) => [...prev, { id: `u-${Date.now()}`, role: "user", content }]);
    setSending(true);
    try {
      const result = await submitPublicMessage(sessionId, content);
      setMessages((prev) => [
        ...prev,
        { id: `a-${Date.now()}`, role: "assistant", content: result.answer, sources: result.sources },
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong sending that message.");
    } finally {
      setSending(false);
    }
  }

  // Rendered only on the client (createPortal needs `document`, which
  // doesn't exist during this component's server render) and only when a
  // backend URL is actually configured — until then the widget stays
  // invisible rather than pointing at a broken endpoint.
  if (!isClient || !isAssistConfigured()) return null;

  return createPortal(
    <>
      <style>{`
        @keyframes zoikoAssistGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.1); }
        }
        .zoiko-assist-glow { animation: zoikoAssistGlow 2.8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .zoiko-assist-glow { animation: none; }
        }
      `}</style>

      <div className="fixed bottom-6 right-6 z-[9997] h-14 w-14">
        {/* Ambient glow halo — sits behind the button, pulses gently, same
            technique as the payroll platform's own launcher. */}
        <div
          aria-hidden="true"
          className={`zoiko-assist-glow pointer-events-none absolute inset-0 rounded-2xl bg-brand blur-xl transition-opacity duration-300 ${
            open ? "opacity-80" : "opacity-55"
          }`}
        />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close Assist" : "Open Zoiko Payroll Assist"}
          className={`relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_32%_26%,var(--brand-light)_0%,var(--brand)_55%,var(--brand-dark)_100%)] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-8px_14px_-6px_rgba(0,0,0,0.4),0_16px_30px_-8px_rgba(0,0,0,0.45)] transition-all duration-200 hover:-translate-y-[3px] hover:scale-[1.04] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-8px_14px_-6px_rgba(0,0,0,0.4),0_20px_36px_-8px_rgba(0,0,0,0.5)] active:translate-y-0 active:scale-100 ${
            open ? "rotate-90" : ""
          }`}
        >
          {open ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <Image src="/zoikopayroll-icon.png" alt="" fill sizes="56px" className="object-cover" priority />
          )}
        </button>
      </div>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Zoiko Payroll Assist"
          className="fixed inset-0 z-[9997] flex flex-col overflow-hidden bg-background sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[560px] sm:max-h-[calc(100dvh-8rem)] sm:w-[min(400px,calc(100vw-2rem))] sm:max-w-[calc(100vw-2rem)] sm:rounded-[22px] sm:border sm:border-black/10 sm:shadow-[0_24px_64px_rgba(0,0,0,0.18)]"
        >
          <div className="flex items-center justify-between border-b border-black/10 bg-background px-4 py-3">
            <div className="flex items-center gap-2.5">
              <Logo sizeClassName="h-6 w-auto" />
              <div className="h-5 w-px shrink-0 bg-black/10" />
              <p className="text-[13px] font-bold tracking-wide text-brand">Assist</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="rounded-[10px] p-1.5 text-foreground/60 transition hover:bg-black/5 hover:text-brand"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col">
            {sessionId === null && !error ? (
              <div className="flex flex-1 items-center justify-center">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand border-t-transparent" />
              </div>
            ) : (
              <>
                <div ref={scrollRef} className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-black/[0.02] p-4">
                  {error ? (
                    <p className="rounded-[12px] bg-red-50 px-3 py-2 text-[12px] font-medium text-red-700">{error}</p>
                  ) : null}
                  {messages.length === 0 ? (
                    <div className="rounded-[16px] rounded-bl-[4px] border border-black/10 bg-white px-3.5 py-2.5 text-[13px] leading-relaxed text-foreground">
                      <p>
                        Hi! I&rsquo;m Zoiko Payroll Assist. Ask me general questions about payroll, payslips,
                        taxes, or how Zoiko Payroll works. For account-specific help, sign in to the platform.
                      </p>
                    </div>
                  ) : (
                    messages.map((m) => (
                      <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[85%] whitespace-pre-wrap rounded-[16px] px-3.5 py-2.5 text-[13px] leading-relaxed ${
                            m.role === "user"
                              ? "rounded-br-[4px] bg-brand text-white"
                              : "rounded-bl-[4px] border border-black/10 bg-white text-foreground"
                          }`}
                        >
                          {m.content}
                          {m.sources?.length ? (
                            <div className="mt-2 flex flex-wrap gap-1">
                              {m.sources.map((s, i) => (
                                <span key={i} className="rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-semibold text-brand">
                                  {s.title}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ))
                  )}
                  {sending ? (
                    <div className="flex justify-start">
                      <div className="flex items-center gap-2 rounded-[16px] rounded-bl-[4px] border border-black/10 bg-white px-3.5 py-2.5 text-[12px] text-foreground/60">
                        <div className="h-3 w-3 animate-spin rounded-full border-2 border-brand border-t-transparent" />
                        Thinking&hellip;
                      </div>
                    </div>
                  ) : null}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage();
                  }}
                  className="flex items-end gap-2 border-t border-black/10 p-3"
                >
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                    rows={1}
                    placeholder="Ask a question&hellip;"
                    className="max-h-28 flex-1 resize-none rounded-[12px] border border-black/10 bg-white px-3 py-2.5 text-[13px] text-foreground outline-none transition focus:border-brand"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || sending}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-brand text-white transition hover:bg-brand-dark disabled:opacity-40"
                  >
                    <SendIcon className="h-4 w-4" />
                  </button>
                </form>
                <p className="px-3 pb-3 text-[10px] text-foreground/50">
                  General information only &mdash; sign in to the platform for account-specific help.
                </p>
              </>
            )}
          </div>
        </div>
      ) : null}
    </>,
    document.body
  );
}
