"use client";

/* eslint-disable @next/next/no-img-element -- small static brand icons inside a portal; next/image adds nothing here */
import {
  forwardRef,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
  type RefObject,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  ExternalLink,
  FileText,
  Globe,
  Headphones,
  Landmark,
  LayoutGrid,
  Loader2,
  Lock,
  LogIn,
  Minus,
  RotateCcw,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  Square,
  Tag,
  TriangleAlert,
  Users,
  X,
} from "lucide-react";
import type { CapabilityValue, PublicCountriesFeed, PublicCountry, PublicSource } from "@/lib/assist";
import {
  CAPABILITY_LABELS,
  COPY,
  isExternalLink,
  isSafeLink,
  liveCountFromFeed,
  matchesCountry,
  type ActionKey,
  type Links,
  type LocaleOption,
  type PopularQuestion,
  type Topic,
  type TopicPrompt,
} from "./concierge-content";

export type HealthState = "available" | "degraded" | "unavailable" | "checking";
export type FeedState = "loading" | "ready" | "error";
export type ConciergeMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  status?: "sending" | "sent" | "failed";
  kind?: "answer" | "insufficient";
  sources?: PublicSource[];
  actions?: ActionKey[];
  topicId?: string;
  countryCode?: string;
};
type IconType = ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean | "true" }>;
type UnknownCountry = { unknown: true; name: string };

// Building blocks for the website's Global Payroll AI Concierge panel —
// the same design as the payroll platform's widget, on this site's brand.
// Zones follow wireframe §03: A header → B welcome → C topics → D country
// check → E popular questions → F CTAs → G composer.

export const FOCUS_RING =
  "outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white";

// Mobile ≤767px: full-screen drawer with safe-area insets. Tablet/desktop:
// floating panel, 480px (≤90vw), max-height min(780px, 90dvh) (§09).
export const PANEL_CLASS =
  "fixed inset-0 z-[9998] flex flex-col overflow-hidden bg-white pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] md:inset-auto md:bottom-24 md:right-5 md:h-[min(780px,calc(100dvh-7.5rem))] md:w-[min(520px,92vw)] md:rounded-[20px] md:border md:border-[#D5E4F4] md:pt-0 md:pb-0 md:shadow-[0_24px_64px_rgba(7,28,70,0.22)]";

const TOPIC_ICONS: Record<Topic["icon"], IconType> = {
  globe: Globe,
  payslip: FileText,
  taxes: Landmark,
  features: Settings,
  pricing: Tag,
  security: ShieldCheck,
};

const TONES: Record<Topic["tone"], string> = {
  blue: "bg-brand/10 text-brand",
  green: "bg-emerald-500/10 text-emerald-600",
  purple: "bg-violet-500/10 text-violet-600",
  orange: "bg-orange-500/10 text-orange-600",
  rose: "bg-rose-500/10 text-rose-600",
  sky: "bg-blue-500/10 text-blue-600",
};

function useDebouncedValue<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

function useDismiss(open: boolean, onDismiss: () => void, refs: RefObject<HTMLElement | null>[]) {
  useEffect(() => {
    if (!open) return undefined;
    function onPointer(e: MouseEvent) {
      if (refs.every((r) => !r.current || !r.current.contains(e.target as Node))) onDismiss();
    }
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [open, onDismiss, refs]);
}

export function formatVerifiedDate(iso?: string | null): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(date);
}

// ── Launcher ─────────────────────────────────────────────────────────────

export const ConciergeLauncher = forwardRef<
  HTMLButtonElement,
  { open: boolean; onToggle: () => void; iconSrc: string; label: string }
>(function ConciergeLauncher({ open, onToggle, iconSrc, label }, ref) {
  return (
    <>
      <style>{`
        @keyframes conciergeGlow {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.12); }
        }
        .concierge-glow { animation: conciergeGlow 2.8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .concierge-glow { animation: none; }
        }
      `}</style>
      <div className={`fixed bottom-6 right-6 z-[9997] h-14 w-14 ${open ? "max-md:hidden" : ""}`}>
        <div
          aria-hidden="true"
          className={`concierge-glow pointer-events-none absolute inset-0 rounded-2xl bg-brand blur-xl transition-opacity duration-300 ${
            open ? "opacity-80" : "opacity-55"
          }`}
        />
        <button
          ref={ref}
          type="button"
          onClick={onToggle}
          aria-label={label}
          aria-expanded={open}
          className={`relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_32%_26%,var(--brand-light)_0%,var(--brand)_55%,var(--brand-dark)_100%)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-8px_14px_-6px_rgba(0,0,0,0.4),0_16px_30px_-8px_rgba(0,0,0,0.45)] transition-all duration-200 hover:-translate-y-[3px] hover:scale-[1.04] active:translate-y-0 active:scale-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 ${FOCUS_RING} ${
            open ? "text-white" : ""
          }`}
        >
          {open ? <X size={22} /> : <img src={iconSrc} alt="" className="h-full w-full object-cover" />}
        </button>
      </div>
    </>
  );
});

// ── Zone A: header ───────────────────────────────────────────────────────

export function StatusIndicator({ status }: { status: HealthState }) {
  const map: Record<HealthState, { dot: string; label: string }> = {
    available: { dot: "bg-[#0B8F7E]", label: COPY.statusAvailable },
    degraded: { dot: "bg-[#B7791F]", label: COPY.statusDegraded },
    unavailable: { dot: "bg-[#9AAAB7]", label: COPY.statusUnavailable },
    checking: { dot: "bg-[#9AAAB7] animate-pulse motion-reduce:animate-none", label: COPY.statusChecking },
  };
  const current = map[status] || map.checking;
  return (
    <p className="flex items-center gap-1.5 text-[12px] text-[#4A5B72]" role="status">
      <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${current.dot}`} />
      {current.label}
    </p>
  );
}

export function LanguageMenu({
  locales,
  value,
  onChange,
}: {
  locales: LocaleOption[];
  value: string;
  onChange?: (code: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const refs = useMemo(() => [buttonRef, menuRef], []);
  useDismiss(open, () => setOpen(false), refs);
  const current = locales.find((l) => l.code === value) || locales[0];

  useEffect(() => {
    if (open) menuRef.current?.querySelector<HTMLButtonElement>("[aria-checked='true'], button")?.focus();
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Language: ${current?.label || "English"}`}
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex h-9 items-center gap-1 rounded-full border border-[#D5E4F4] bg-white px-2.5 text-[13px] font-semibold text-[#1C2B42] transition hover:border-brand hover:text-brand ${FOCUS_RING}`}
      >
        <Globe size={16} aria-hidden="true" />
        <span>{(current?.code || "en").toUpperCase()}</span>
        <ChevronDown size={14} aria-hidden="true" />
      </button>
      {open ? (
        <div
          ref={menuRef}
          role="menu"
          aria-label="Language"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.stopPropagation();
              setOpen(false);
              buttonRef.current?.focus();
            }
          }}
          className="absolute right-0 top-10 z-30 min-w-[150px] rounded-[12px] border border-[#D5E4F4] bg-white p-1 shadow-[0_12px_32px_rgba(7,28,70,0.16)]"
        >
          {locales.map((l) => (
            <button
              key={l.code}
              type="button"
              role="menuitemradio"
              aria-checked={l.code === current?.code}
              lang={l.code}
              onClick={() => {
                onChange?.(l.code);
                setOpen(false);
                buttonRef.current?.focus();
              }}
              className={`flex w-full items-center justify-between gap-3 rounded-[8px] px-3 py-2 text-left text-[13px] text-[#1C2B42] transition hover:bg-[#EEF4FB] ${FOCUS_RING}`}
            >
              {l.label}
              {l.code === current?.code ? <Check size={14} className="text-brand" aria-hidden="true" /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function HeaderIconButton({
  label,
  onClick,
  children,
  pressed,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
  pressed?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      aria-pressed={pressed}
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#EEF4FB] text-[#1C2B42] transition hover:bg-brand/10 hover:text-brand ${
        pressed ? "bg-brand/10 text-brand" : ""
      } ${FOCUS_RING}`}
    >
      {children}
    </button>
  );
}

export function ConciergeHeader({
  logoSrc,
  headingId,
  headingRef,
  status,
  locales,
  locale,
  onLocaleChange,
  onMinimize,
  onClose,
  extraActions = null,
}: {
  logoSrc: string;
  headingId: string;
  headingRef: RefObject<HTMLHeadingElement | null>;
  status: HealthState;
  locales?: LocaleOption[];
  locale: string;
  onLocaleChange?: (code: string) => void;
  onMinimize: () => void;
  onClose: () => void;
  extraActions?: ReactNode;
}) {
  return (
    <div className="flex items-start gap-2.5 border-b border-[#D5E4F4] bg-white px-4 py-3 md:px-5">
      <img src={logoSrc} alt="Zoiko Payroll" className="mt-0.5 h-7 w-auto shrink-0 max-sm:hidden" />
      <div aria-hidden="true" className="h-10 w-px shrink-0 self-center max-sm:hidden bg-[#D5E4F4]" />
      <div className="min-w-0 flex-1">
        <h2
          id={headingId}
          ref={headingRef}
          tabIndex={-1}
          className="text-[15px] font-bold leading-tight text-[#1C2B42] outline-none"
        >
          {COPY.title}
        </h2>
        <p className="mt-0.5 truncate text-[12px] text-[#4A5B72] max-sm:hidden">{COPY.subtitle}</p>
        <div className="mt-0.5">
          <StatusIndicator status={status} />
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-1">
        {locales?.length ? <LanguageMenu locales={locales} value={locale} onChange={onLocaleChange} /> : null}
        {extraActions}
        <HeaderIconButton label="Minimize" onClick={onMinimize}>
          <Minus size={18} aria-hidden="true" />
        </HeaderIconButton>
        <HeaderIconButton label="Close" onClick={onClose}>
          <X size={18} aria-hidden="true" />
        </HeaderIconButton>
      </div>
    </div>
  );
}

// ── Zone B: welcome ──────────────────────────────────────────────────────

export function WelcomeBlock({
  iconSrc,
  compact = false,
  body = COPY.welcomeBody,
}: {
  iconSrc: string;
  compact?: boolean;
  body?: string;
}) {
  if (compact) {
    return (
      <div className="flex items-center gap-2.5 rounded-[14px] bg-[#E7F1FD] px-3 py-2">
        <img src={iconSrc} alt="" className="h-7 w-7 shrink-0 rounded-full" />
        <p className="text-[13px] font-semibold text-[#1C2B42]">{COPY.welcomeSubtitle}</p>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-3">
      <img src={iconSrc} alt="" className="h-11 w-11 shrink-0 rounded-full ring-4 ring-[#071C46] max-[359px]:hidden" />
      <div className="min-w-0 flex-1 rounded-[18px] bg-[#E7F1FD] px-4 py-3.5">
        <h3 className="text-[18px] font-bold leading-snug text-[#1C2B42]">{COPY.welcomeTitle}</h3>
        <p className="mt-1 text-[14px] text-[#4A5B72]">{COPY.welcomeSubtitle}</p>
        <p className="mt-2 text-[13px] leading-relaxed text-[#4A5B72]">{body}</p>
      </div>
    </div>
  );
}

// ── Zone C: topics ───────────────────────────────────────────────────────

export function TopicGrid({
  topics,
  activeTopicId,
  onSelectTopic,
  onBack,
  onPrompt,
  disabled,
}: {
  topics: Topic[];
  activeTopicId: string | null;
  onSelectTopic: (id: string) => void;
  onBack: () => void;
  onPrompt: (prompt: TopicPrompt, topic: Topic) => void;
  disabled?: boolean;
}) {
  const active = topics.find((t) => t.id === activeTopicId);
  const backRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (active) backRef.current?.focus();
  }, [active]);

  if (active) {
    const Icon = TOPIC_ICONS[active.icon] || Globe;
    return (
      <section aria-labelledby={`topic-${active.id}`} className="rounded-[16px] border border-[#D5E4F4] bg-white p-4">
        <button
          ref={backRef}
          type="button"
          onClick={onBack}
          className={`mb-3 inline-flex items-center gap-1.5 rounded-[8px] text-[12px] font-semibold text-brand hover:underline ${FOCUS_RING}`}
        >
          <ArrowLeft size={14} aria-hidden="true" /> Back to topics
        </button>
        <div className="flex items-center gap-3">
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${TONES[active.tone]}`}>
            <Icon size={20} aria-hidden="true" />
          </span>
          <div>
            <h3 id={`topic-${active.id}`} className="text-[15px] font-bold text-[#1C2B42]">
              {active.title}
            </h3>
            <p className="text-[12px] text-[#4A5B72]">{active.description}</p>
          </div>
        </div>
        {active.requiresCountry ? (
          <p className="mt-3 rounded-[10px] bg-[#EEF4FB] px-3 py-2 text-[12px] text-[#4A5B72]">
            Country-specific rules depend on the jurisdiction — include the country in your question.
          </p>
        ) : null}
        <ul className="mt-3 space-y-2">
          {active.prompts.map((p) => (
            <li key={p.label}>
              <button
                type="button"
                disabled={disabled && p.mode !== "prefill"}
                onClick={() => onPrompt(p, active)}
                className={`flex w-full items-center gap-2.5 rounded-[12px] border border-[#D5E4F4] bg-[#F6FAFE] px-3 py-2.5 text-left text-[13px] text-[#1C2B42] transition hover:border-brand hover:text-brand disabled:opacity-50 ${FOCUS_RING}`}
              >
                <Search size={15} className="shrink-0 text-brand" aria-hidden="true" />
                <span className="flex-1">{p.label}</span>
                <ChevronRight size={15} className="shrink-0 text-[#6B7A90]" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section aria-label="Topics">
      <ul className="grid grid-cols-1 gap-2.5 min-[480px]:grid-cols-2">
        {topics.map((topic) => {
          const Icon = TOPIC_ICONS[topic.icon] || Globe;
          return (
            <li key={topic.id}>
              <button
                type="button"
                onClick={() => onSelectTopic(topic.id)}
                className={`group flex h-full w-full items-center gap-2.5 rounded-[14px] border border-[#D5E4F4] bg-white p-3 text-left transition hover:border-brand hover:shadow-[0_6px_18px_rgba(10,120,194,0.10)] ${FOCUS_RING}`}
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${TONES[topic.tone]}`}>
                  <Icon size={19} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] font-bold leading-tight text-[#1C2B42]">{topic.title}</span>
                  <span className="mt-0.5 block text-[11.5px] leading-snug text-[#4A5B72]">
                    {topic.description}
                  </span>
                </span>
                <ChevronRight
                  size={16}
                  className="shrink-0 text-[#6B7A90] transition group-hover:translate-x-0.5 group-hover:text-brand motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// ── Zone D: country check ────────────────────────────────────────────────

const STATUS_CHIPS: Record<string, { label: string; className: string }> = {
  live: { label: "Available", className: "bg-[#E0F4F1] text-[#0B8F7E]" },
  planned: { label: "Planned", className: "bg-[#FBF0DE] text-[#9A6412]" },
  unavailable: { label: "Not listed", className: "bg-[#EEF4FB] text-[#6B7A90]" },
};

function statusChip(status: string) {
  return STATUS_CHIPS[status] || STATUS_CHIPS.unavailable;
}

function normalizeCapability(value: CapabilityValue | undefined) {
  if (value === true) return "verified";
  if (value === false) return "unsupported";
  const s = typeof value === "object" && value ? value.status : value;
  if (s === "verified" || s === "supported" || s === "live") return "verified";
  if (s === "unsupported" || s === "not_supported") return "unsupported";
  return "unconfirmed";
}

function ActionLink({
  href,
  links,
  children,
  variant = "outline",
  icon: Icon,
}: {
  href?: string;
  links: Links;
  children: ReactNode;
  variant?: "brand" | "outline";
  icon?: IconType;
}) {
  if (!href || !isSafeLink(href, links)) return null;
  const external = isExternalLink(href);
  const styles =
    variant === "brand"
      ? "bg-brand text-white hover:bg-[#0866ab] border-transparent"
      : "border-[#D5E4F4] bg-white text-[#1C2B42] hover:border-brand hover:text-brand";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center gap-1.5 rounded-[10px] border px-3 py-2 text-[12px] font-semibold transition ${styles} ${FOCUS_RING}`}
    >
      {Icon ? <Icon size={14} aria-hidden="true" /> : null}
      {children}
      {external ? <ExternalLink size={12} aria-hidden="true" /> : null}
      {external ? <span className="sr-only">(opens in a new tab)</span> : null}
    </a>
  );
}

function CountryDetail({
  country,
  links,
  onAsk,
  disabled,
}: {
  country: PublicCountry | UnknownCountry;
  links: Links;
  onAsk?: (country: PublicCountry) => void;
  disabled?: boolean;
}) {
  if ("unknown" in country) {
    return (
      <div className="mt-3 rounded-[12px] border border-[#D5E4F4] bg-white p-3" role="status">
        <p className="text-[13px] font-semibold text-[#1C2B42]">{country.name}</p>
        <p className="mt-1 text-[12px] text-[#4A5B72]">
          Not currently listed as available. Talk to Sales to confirm options.
        </p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          <ActionLink href={links.talkToSales} links={links} icon={Users}>
            Talk to Sales
          </ActionLink>
        </div>
      </div>
    );
  }

  const chip = statusChip(country.launch_status);
  const capabilityEntries = Object.entries(country.capabilities || {});
  const verified = formatVerifiedDate(country.verified_at);

  return (
    <div className="mt-3 rounded-[12px] border border-[#D5E4F4] bg-white p-3" role="status">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-[14px] font-bold text-[#1C2B42]">
          {country.name} <span className="font-normal text-[#6B7A90]">({country.code})</span>
        </p>
        <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${chip.className}`}>{chip.label}</span>
      </div>

      {country.launch_status === "live" ? (
        <>
          {capabilityEntries.length ? (
            <ul className="mt-2.5 space-y-1.5">
              {capabilityEntries.map(([key, value]) => {
                const state = normalizeCapability(value);
                return (
                  <li key={key} className="flex items-center justify-between gap-3 text-[12px]">
                    <span className="text-[#1C2B42]">{CAPABILITY_LABELS[key] || key.replace(/_/g, " ")}</span>
                    <span
                      className={
                        state === "verified"
                          ? "font-semibold text-[#0B8F7E]"
                          : state === "unsupported"
                            ? "text-[#6B7A90]"
                            : "text-[#9A6412]"
                      }
                    >
                      {state === "verified" ? "Confirmed" : state === "unsupported" ? "Not supported" : "Not confirmed"}
                    </span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="mt-2 text-[12px] text-[#4A5B72]">
              Capability details for this country haven&apos;t been published yet. Talk to Sales for specifics.
            </p>
          )}
          {verified ? <p className="mt-2 text-[11px] text-[#6B7A90]">Last verified {verified}</p> : null}
        </>
      ) : country.launch_status === "planned" ? (
        <p className="mt-2 text-[12px] text-[#4A5B72]">
          {country.public_launch_date
            ? `Planned — expected ${formatVerifiedDate(country.public_launch_date)}`
            : "Planned — date not announced"}
        </p>
      ) : (
        <p className="mt-2 text-[12px] text-[#4A5B72]">
          Not currently listed as available. Talk to Sales to confirm options.
        </p>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        {country.launch_status === "live" && onAsk ? (
          <button
            type="button"
            disabled={disabled}
            onClick={() => onAsk(country)}
            className={`inline-flex items-center gap-1.5 rounded-[10px] bg-brand px-3 py-2 text-[12px] font-semibold text-white transition hover:bg-[#0866ab] disabled:opacity-50 ${FOCUS_RING}`}
          >
            Ask about payroll in {country.name}
          </button>
        ) : null}
        <ActionLink href={country.source_url} links={links}>
          Learn more
        </ActionLink>
        <ActionLink href={links.talkToSales} links={links} icon={Users}>
          Talk to Sales
        </ActionLink>
      </div>
    </div>
  );
}

export const CountryCheck = forwardRef<
  HTMLInputElement,
  {
    feed: PublicCountriesFeed | null;
    feedState: FeedState;
    links: Links;
    roadmapNote?: string;
    onAsk?: (country: PublicCountry) => void;
    disabled?: boolean;
  }
>(function CountryCheck({ feed, feedState, links, roadmapNote, onAsk, disabled }, inputRef) {
  const baseId = useId();
  const listId = `${baseId}-list`;
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [selected, setSelected] = useState<PublicCountry | UnknownCountry | null>(null);
  const debouncedQuery = useDebouncedValue(query, 300);
  const wrapRef = useRef<HTMLDivElement>(null);
  const refs = useMemo(() => [wrapRef], []);
  useDismiss(open, () => setOpen(false), refs);

  const countries = useMemo(() => {
    const list = (feed?.countries || []).filter((c) => matchesCountry(c, debouncedQuery));
    const rank: Record<string, number> = { live: 0, planned: 1 };
    return list
      .slice()
      .sort((a, b) => (rank[a.launch_status] ?? 2) - (rank[b.launch_status] ?? 2) || a.name.localeCompare(b.name))
      .slice(0, 50);
  }, [feed, debouncedQuery]);

  const liveCount = useMemo(() => liveCountFromFeed(feed), [feed]);

  function choose(country: PublicCountry) {
    setSelected(country);
    setQuery(country.name);
    setOpen(false);
    setActiveIndex(-1);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActiveIndex((i) => Math.min(i + 1, countries.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (open && activeIndex >= 0 && countries[activeIndex]) choose(countries[activeIndex]);
      else if (query.trim() && countries.length === 0) {
        setSelected({ unknown: true, name: query.trim() });
        setOpen(false);
      } else if (countries.length === 1) choose(countries[0]);
    } else if (e.key === "Escape" && open) {
      e.stopPropagation();
      setOpen(false);
      setActiveIndex(-1);
    }
  }

  const unavailable = feedState === "error";
  const loading = feedState === "loading";

  return (
    <section
      aria-labelledby={`${baseId}-title`}
      className="rounded-[16px] border border-[#D5E4F4] bg-[#F6FAFE] p-4"
    >
      <div className="flex items-start gap-3">
        <Globe size={30} className="mt-0.5 shrink-0 text-brand max-[359px]:hidden" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <h3 id={`${baseId}-title`} className="text-[15px] font-bold text-[#1C2B42]">
            Check your country
          </h3>
          <p className="mt-0.5 text-[12px] leading-relaxed text-[#4A5B72]">
            See if your country is supported and view local payroll and compliance information.
          </p>
        </div>
      </div>

      <div ref={wrapRef} className="relative mt-3">
        <label htmlFor={`${baseId}-input`} className="sr-only">
          Check your country
        </label>
        <Search
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7A90]"
          aria-hidden="true"
        />
        <input
          ref={inputRef}
          id={`${baseId}-input`}
          type="text"
          role="combobox"
          autoComplete="off"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls={listId}
          aria-activedescendant={open && activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined}
          disabled={unavailable || loading}
          placeholder={loading ? "Loading countries…" : "Search a country…"}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelected(null);
            setOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => !unavailable && setOpen(true)}
          onKeyDown={onKeyDown}
          className="h-11 w-full rounded-[12px] border border-[#D5E4F4] bg-white pl-9 pr-9 text-[13px] text-[#1C2B42] placeholder-[#6B7A90] outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 disabled:cursor-not-allowed disabled:opacity-60"
        />
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7A90]"
          aria-hidden="true"
        />
        {open && !unavailable && !loading ? (
          <ul
            id={listId}
            role="listbox"
            aria-label="Countries"
            className="absolute left-0 right-0 top-12 z-20 max-h-56 overflow-y-auto rounded-[12px] border border-[#D5E4F4] bg-white p-1 shadow-[0_12px_32px_rgba(7,28,70,0.16)]"
          >
            {countries.length === 0 ? (
              <li className="px-3 py-2 text-[12px] text-[#4A5B72]" role="option" aria-selected="false" aria-disabled="true">
                {query.trim() ? "No listed match — press Enter to check this country." : "Start typing a country name or code."}
              </li>
            ) : (
              countries.map((c, i) => {
                const chip = statusChip(c.launch_status);
                return (
                  <li
                    key={c.code}
                    id={`${listId}-${i}`}
                    role="option"
                    aria-selected={i === activeIndex}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => choose(c)}
                    className={`flex cursor-pointer items-center justify-between gap-2 rounded-[8px] px-3 py-2 text-[13px] text-[#1C2B42] ${
                      i === activeIndex ? "bg-brand/10" : "hover:bg-[#EEF4FB]"
                    }`}
                  >
                    <span>
                      {c.name} <span className="text-[#6B7A90]">{c.code}</span>
                    </span>
                    <span className={`rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${chip.className}`}>
                      {chip.label}
                    </span>
                  </li>
                );
              })
            )}
          </ul>
        ) : null}
      </div>

      <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px]">
        {unavailable ? (
          <span className="flex items-center gap-1.5 text-[#4A5B72]">
            <Clock size={14} aria-hidden="true" /> Check country availability
          </span>
        ) : liveCount !== null ? (
          <span className="flex items-center gap-1.5 font-semibold text-[#1C2B42]">
            <CheckCircle2 size={15} className="text-[#0B8F7E]" aria-hidden="true" />
            {liveCount} {liveCount === 1 ? "jurisdiction" : "jurisdictions"} live
          </span>
        ) : null}
        {roadmapNote && !unavailable ? (
          <>
            <span aria-hidden="true" className="h-3.5 w-px bg-[#D5E4F4]" />
            <span className="flex items-center gap-1.5 text-[#4A5B72]">
              <Clock size={14} aria-hidden="true" /> {roadmapNote}
            </span>
          </>
        ) : null}
      </div>

      {unavailable ? (
        <div className="mt-2.5 flex flex-wrap gap-2">
          <ActionLink href={links.countryCoverage} links={links} icon={Globe}>
            View country coverage
          </ActionLink>
          <ActionLink href={links.talkToSales} links={links} icon={Users}>
            Talk to Sales
          </ActionLink>
        </div>
      ) : null}

      {selected ? <CountryDetail country={selected} links={links} onAsk={onAsk} disabled={disabled} /> : null}
    </section>
  );
});

// ── Zone E: popular questions ────────────────────────────────────────────

export function PopularQuestions({
  questions,
  onPick,
  disabled,
  faqUrl,
  links,
  title = "Popular questions",
}: {
  questions: PopularQuestion[];
  onPick: (q: PopularQuestion) => void;
  disabled?: boolean;
  faqUrl?: string;
  links: Links;
  title?: string;
}) {
  if (!questions.length) return null;
  return (
    <section aria-labelledby="concierge-popular-title">
      <div className="mb-2.5 flex items-center justify-between gap-3">
        <h3 id="concierge-popular-title" className="text-[15px] font-bold text-[#1C2B42]">
          {title}
        </h3>
        {faqUrl && isSafeLink(faqUrl, links) ? (
          <a
            href={faqUrl}
            {...(isExternalLink(faqUrl) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`inline-flex items-center gap-1 rounded-[6px] text-[12px] font-semibold text-brand hover:underline ${FOCUS_RING}`}
          >
            View all questions <ArrowRight size={13} aria-hidden="true" />
          </a>
        ) : null}
      </div>
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {questions.map((q) => (
          <li key={q.id}>
            <button
              type="button"
              disabled={disabled}
              onClick={() => onPick(q)}
              className={`flex h-full w-full items-center gap-2.5 rounded-[12px] border border-[#D5E4F4] bg-[#F6FAFE] px-3 py-2.5 text-left text-[12.5px] text-[#1C2B42] transition hover:border-brand hover:text-brand disabled:opacity-50 ${FOCUS_RING}`}
            >
              <Search size={15} className="shrink-0 text-brand" aria-hidden="true" />
              <span>{q.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ── Zone F: commercial & support actions ─────────────────────────────────

export function CtaRow({
  links,
  onSupport,
  supportExpanded,
}: {
  links: Partial<Links>;
  onSupport: () => void;
  supportExpanded?: boolean;
}) {
  const demo = isSafeLink(links.bookDemo, links) ? links.bookDemo : null;
  const sales = isSafeLink(links.talkToSales, links) ? links.talkToSales : null;
  const btn = `flex min-h-11 flex-1 basis-[140px] items-center justify-center gap-1.5 whitespace-nowrap rounded-[12px] border px-2 py-2.5 text-[13px] font-bold transition ${FOCUS_RING}`;
  const linkProps = (href: string) => (isExternalLink(href) ? { target: "_blank", rel: "noopener noreferrer" } : {});
  return (
    <div className="flex flex-wrap gap-2">
      {demo ? (
        <a href={demo} {...linkProps(demo)} className={`${btn} border-transparent bg-brand text-white hover:bg-[#0866ab]`}>
          <CalendarDays size={17} aria-hidden="true" /> Book a Demo <ChevronRight size={15} aria-hidden="true" />
        </a>
      ) : null}
      {sales ? (
        <a href={sales} {...linkProps(sales)} className={`${btn} border-brand/40 bg-white text-[#1C2B42] hover:border-brand hover:text-brand`}>
          <Users size={17} aria-hidden="true" /> Talk to Sales <ChevronRight size={15} aria-hidden="true" />
        </a>
      ) : null}
      <button
        type="button"
        onClick={onSupport}
        aria-expanded={supportExpanded}
        className={`${btn} border-brand/40 bg-white text-[#1C2B42] hover:border-brand hover:text-brand`}
      >
        <Headphones size={17} aria-hidden="true" /> Speak to Support <ChevronRight size={15} aria-hidden="true" />
      </button>
    </div>
  );
}

// Two honest support paths (§07). Live chat only when the server confirms a
// staffed channel; otherwise contact/ticket route — never an "agent online".
export function SupportChooser({
  links,
  liveSupportAvailable,
  onClose,
}: {
  links: Links;
  liveSupportAvailable?: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <section
      ref={ref}
      tabIndex={-1}
      aria-label="Support options"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          onClose();
        }
      }}
      className="rounded-[16px] border border-[#D5E4F4] bg-white p-4 outline-none"
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-[14px] font-bold text-[#1C2B42]">How can we help?</h3>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close support options"
          className={`rounded-[8px] p-1 text-[#6B7A90] hover:text-brand ${FOCUS_RING}`}
        >
          <X size={15} aria-hidden="true" />
        </button>
      </div>
      <ul className="mt-3 space-y-2">
        {links.signIn && isSafeLink(links.signIn, links) ? (
          <li>
            <a
              href={links.signIn}
              className={`flex items-center gap-3 rounded-[12px] border border-[#D5E4F4] px-3 py-2.5 text-[13px] text-[#1C2B42] transition hover:border-brand ${FOCUS_RING}`}
            >
              <LogIn size={17} className="shrink-0 text-brand" aria-hidden="true" />
              <span className="flex-1">
                <span className="block font-semibold">I&apos;m a customer</span>
                <span className="block text-[12px] text-[#4A5B72]">Sign in for account support</span>
              </span>
              <ChevronRight size={15} className="text-[#6B7A90]" aria-hidden="true" />
            </a>
          </li>
        ) : null}
        <li>
          {links.contactSupport && isSafeLink(links.contactSupport, links) ? (
            <a
              href={links.contactSupport}
              {...(isExternalLink(links.contactSupport) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`flex items-center gap-3 rounded-[12px] border border-[#D5E4F4] px-3 py-2.5 text-[13px] text-[#1C2B42] transition hover:border-brand ${FOCUS_RING}`}
            >
              <Headphones size={17} className="shrink-0 text-brand" aria-hidden="true" />
              <span className="flex-1">
                <span className="block font-semibold">General website or product question</span>
                <span className="block text-[12px] text-[#4A5B72]">
                  {liveSupportAvailable ? "Chat with our support team" : "Contact support"}
                </span>
              </span>
              <ChevronRight size={15} className="text-[#6B7A90]" aria-hidden="true" />
            </a>
          ) : (
            <p className="rounded-[12px] bg-[#EEF4FB] px-3 py-2.5 text-[12px] text-[#4A5B72]">
              For general questions, ask here — or check our help resources on the Zoiko Payroll website.
            </p>
          )}
        </li>
      </ul>
    </section>
  );
}

// ── Answer follow-up actions ─────────────────────────────────────────────

type AnswerActionItem = {
  key: ActionKey;
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
  brand?: boolean;
};

export function AnswerActions({
  actions,
  links,
  onCheckCountry,
}: {
  actions?: ActionKey[];
  links: Links;
  onCheckCountry?: () => void;
}) {
  if (!actions?.length) return null;
  const items = actions
    .map((a): AnswerActionItem | null => {
      switch (a) {
        case "signIn":
          return links.signIn ? { key: a, href: links.signIn, label: "Sign in", icon: LogIn } : null;
        case "bookDemo":
          return links.bookDemo ? { key: a, href: links.bookDemo, label: "Book a Demo", icon: CalendarDays, brand: true } : null;
        case "talkToSales":
          return links.talkToSales ? { key: a, href: links.talkToSales, label: "Talk to Sales", icon: Users } : null;
        case "privacy":
          return links.privacy ? { key: a, href: links.privacy, label: "Privacy & trust", icon: ShieldCheck } : null;
        case "checkCountry":
          return onCheckCountry ? { key: a, onClick: onCheckCountry, label: "Check your country", icon: Globe } : null;
        default:
          return null;
      }
    })
    .filter((item): item is AnswerActionItem => item !== null);
  if (!items.length) return null;
  return (
    <div className="mt-2.5 flex flex-wrap gap-2">
      {items.map((item) =>
        item.onClick ? (
          <button
            key={item.key}
            type="button"
            onClick={item.onClick}
            className={`inline-flex items-center gap-1.5 rounded-[10px] border border-[#D5E4F4] bg-white px-3 py-2 text-[12px] font-semibold text-[#1C2B42] transition hover:border-brand hover:text-brand ${FOCUS_RING}`}
          >
            <item.icon size={14} aria-hidden="true" /> {item.label}
          </button>
        ) : (
          <ActionLink key={item.key} href={item.href} links={links} icon={item.icon} variant={item.brand ? "brand" : "outline"}>
            {item.label}
          </ActionLink>
        )
      )}
    </div>
  );
}

// ── Public conversation bubbles ──────────────────────────────────────────

export function PublicMessageBubble({
  message,
  links,
  iconSrc,
  onRetry,
  onCheckCountry,
  retryDisabled,
}: {
  message: ConciergeMessage;
  links: Links;
  iconSrc: string;
  onRetry: (message: ConciergeMessage) => void;
  onCheckCountry?: () => void;
  retryDisabled?: boolean;
}) {
  if (message.role === "user") {
    return (
      <div className="flex flex-col items-end">
        <div className="max-w-[85%] whitespace-pre-wrap break-words rounded-[16px] rounded-br-[4px] bg-brand px-3.5 py-2.5 text-[13px] leading-relaxed text-white">
          {message.content}
        </div>
        {message.status === "failed" ? (
          <p className="mt-1 flex items-center gap-2 text-[11.5px] text-[#C53030]">
            <TriangleAlert size={13} aria-hidden="true" /> Not sent.
            <button
              type="button"
              disabled={retryDisabled}
              onClick={() => onRetry(message)}
              className={`inline-flex items-center gap-1 font-semibold underline disabled:opacity-50 ${FOCUS_RING}`}
            >
              <RotateCcw size={12} aria-hidden="true" /> Retry
            </button>
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex items-start gap-2">
      <img src={iconSrc} alt="" className="mt-0.5 h-7 w-7 shrink-0 rounded-full" />
      <div
        className={`max-w-[85%] rounded-[16px] rounded-bl-[4px] border px-3.5 py-2.5 text-[13px] leading-relaxed ${
          "border-[#D5E4F4] bg-white text-[#1C2B42]"
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{message.content}</p>
        {message.sources?.length ? (
          <div className="mt-2.5 border-t border-[#E6EEF8] pt-2">
            <p className="text-[10.5px] font-semibold uppercase tracking-wide text-[#6B7A90]">Sources</p>
            <ul className="mt-1 space-y-1">
              {message.sources.map((s, i) => {
                const href = s.approved_url || s.url;
                const verified = formatVerifiedDate(s.verified_at);
                return (
                  <li key={`${s.title}-${i}`} className="text-[11.5px] text-[#4A5B72]">
                    {href && isSafeLink(href, links) ? (
                      <a
                        href={href}
                        {...(isExternalLink(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={`font-semibold text-brand hover:underline ${FOCUS_RING}`}
                      >
                        {s.title} — Learn more
                      </a>
                    ) : (
                      <span className="font-semibold text-[#1C2B42]">{s.title}</span>
                    )}
                    {verified ? <span className="text-[#6B7A90]"> · Last verified {verified}</span> : null}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
        <AnswerActions actions={message.actions} links={links} onCheckCountry={onCheckCountry} />
      </div>
    </div>
  );
}

export function ThinkingBubble({ iconSrc }: { iconSrc: string }) {
  return (
    <div className="flex items-start gap-2">
      <img src={iconSrc} alt="" className="mt-0.5 h-7 w-7 shrink-0 rounded-full" />
      <div className="flex items-center gap-2 rounded-[16px] rounded-bl-[4px] border border-[#D5E4F4] bg-white px-3.5 py-2.5 text-[12px] text-[#6B7A90]">
        <Loader2 size={14} className="animate-spin text-brand motion-reduce:animate-none" aria-hidden="true" />
        Thinking…
      </div>
    </div>
  );
}

// ── Zone G: composer ─────────────────────────────────────────────────────

export const ConciergeComposer = forwardRef<
  HTMLTextAreaElement,
  {
    value: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
    sending: boolean;
    disabled?: boolean;
    maxLength: number;
    notice?: string;
    warning?: string;
    onStop?: () => void;
    onShowTopics?: () => void;
    showTopicsButton?: boolean;
  }
>(function ConciergeComposer(
  { value, onChange, onSubmit, sending, disabled, maxLength, notice, warning, onStop, onShowTopics, showTopicsButton },
  textareaRef
) {
  const length = value.length;
  const tooLong = length > maxLength;
  const nearLimit = length >= Math.floor(maxLength * 0.8);
  const canSend = !disabled && !sending && value.trim().length > 0 && !tooLong;
  const counterId = useId();

  return (
    <div className="border-t border-[#D5E4F4] bg-white px-4 pb-3 pt-3 md:px-5">
      {showTopicsButton ? (
        <button
          type="button"
          onClick={onShowTopics}
          className={`mb-2 inline-flex items-center gap-1.5 rounded-[8px] text-[12px] font-semibold text-brand hover:underline ${FOCUS_RING}`}
        >
          <LayoutGrid size={13} aria-hidden="true" /> Topics
        </button>
      ) : null}
      {warning ? (
        <p role="alert" className="mb-2 flex items-start gap-2 rounded-[10px] bg-[#FBF0DE] px-3 py-2 text-[12px] text-[#1C2B42]">
          <TriangleAlert size={14} className="mt-0.5 shrink-0 text-[#9A6412]" aria-hidden="true" />
          {warning}
        </p>
      ) : null}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (canSend) onSubmit();
        }}
        className="flex items-end gap-2.5"
      >
        <div className="relative flex min-w-0 flex-1 items-end rounded-[16px] border border-[#D5E4F4] bg-white transition focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20">
          <Sparkles size={18} className="pointer-events-none absolute left-3.5 top-3.5 max-sm:hidden text-brand" aria-hidden="true" />
          <label htmlFor={`${counterId}-input`} className="sr-only">
            {COPY.placeholder}
          </label>
          <textarea
            ref={textareaRef}
            id={`${counterId}-input`}
            value={value}
            disabled={disabled}
            aria-invalid={tooLong}
            aria-describedby={nearLimit ? counterId : undefined}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                e.preventDefault();
                if (canSend) onSubmit();
              }
            }}
            rows={1}
            placeholder={COPY.placeholder}
            className="max-h-32 min-h-[48px] w-full resize-none bg-transparent py-3 pl-3.5 pr-3 text-[14px] sm:pl-11 text-[#1C2B42] placeholder-[#6B7A90] outline-none disabled:cursor-not-allowed"
          />
        </div>
        {sending && onStop ? (
          <button
            type="button"
            onClick={onStop}
            aria-label="Stop response"
            title="Stop response"
            className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D5E4F4] bg-white text-[#6B7A90] transition hover:border-[#C53030] hover:text-[#C53030] ${FOCUS_RING}`}
          >
            <Square size={15} aria-hidden="true" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!canSend}
            aria-label={sending ? "Sending…" : "Send message"}
            className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-[0_8px_18px_rgba(10,120,194,0.35)] transition hover:bg-[#0866ab] disabled:opacity-40 disabled:shadow-none ${FOCUS_RING}`}
          >
            {sending ? (
              <Loader2 size={18} className="animate-spin motion-reduce:animate-none" aria-hidden="true" />
            ) : (
              <Send size={18} aria-hidden="true" />
            )}
          </button>
        )}
      </form>
      <div className="mt-2 flex items-start justify-between gap-3">
        {notice ? (
          <p className="flex items-start gap-1.5 text-[11px] leading-snug text-[#6B7A90]">
            <Lock size={12} className="mt-px shrink-0" aria-hidden="true" />
            {notice}
          </p>
        ) : (
          <span />
        )}
        {nearLimit ? (
          <p id={counterId} className={`shrink-0 text-[11px] tabular-nums ${tooLong ? "font-semibold text-[#C53030]" : "text-[#6B7A90]"}`}>
            {length}/{maxLength}
          </p>
        ) : null}
      </div>
      {tooLong ? (
        <p role="alert" className="mt-1 text-[11.5px] text-[#C53030]">
          Message is too long (max {maxLength} characters).
        </p>
      ) : null}
    </div>
  );
});
