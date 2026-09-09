import Image from "next/image";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Severity pill (Blocker / Warning / Information / Quarantine)        */
/* ------------------------------------------------------------------ */

export type SeverityVariant = "blocker" | "warning" | "information" | "quarantine";

const severityStyles: Record<
  SeverityVariant,
  { badge: string; dot: string; label: string }
> = {
  blocker: {
    badge: "bg-rose-100",
    dot: "bg-red-700",
    label: "text-red-700",
  },
  warning: {
    badge: "bg-orange-100",
    dot: "bg-yellow-700",
    label: "text-yellow-700",
  },
  information: {
    badge: "bg-violet-100",
    dot: "bg-sky-600",
    label: "text-sky-600",
  },
  quarantine: {
    badge: "bg-slate-100",
    dot: "bg-gray-400",
    label: "text-slate-600",
  },
};

export function SeverityPill({
  variant,
  label,
  size = "sm",
}: {
  variant: SeverityVariant;
  label: string;
  size?: "sm" | "xs";
}) {
  const styles = severityStyles[variant];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${styles.badge} py-1 pl-1.5 pr-2`}
    >
      <span className={`size-1.5 rounded-[3px] ${styles.dot}`} />
      <span
        className={`font-semibold leading-4 tracking-tight ${styles.label} ${
          size === "sm" ? "text-xs" : "text-[11px]"
        }`}
      >
        {label}
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Checklist card (checkmark + title + description)                    */
/* ------------------------------------------------------------------ */

export function CheckCard({
  title,
  description,
  dark = false,
}: {
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-[2.75px] rounded-[10px] px-3.5 py-3 ${
        dark
          ? "bg-white/5 outline outline-1 outline-offset-[-1px] outline-white/10"
          : "bg-white outline outline-1 outline-offset-[-1px] outline-slate-200"
      }`}
    >
      <div className="flex items-center gap-1.5">
        <span className="w-3 text-xs font-bold leading-4 text-sky-600">✓</span>
        <span
          className={`text-sm font-semibold leading-5 ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </span>
      </div>
      <p
        className={`text-xs font-normal leading-5 ${
          dark ? "text-white/60" : "text-gray-500"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Note callout (violet-100 + sky left border)                         */
/* ------------------------------------------------------------------ */

export function NoteCallout({
  children,
  center = false,
  className = "",
}: {
  children: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-r-lg border-l-[3px] border-sky-600 bg-violet-100 px-4 py-2.5 ${
        center ? "flex justify-center" : ""
      } ${className}`}
    >
      <p
        className={`text-sm font-normal leading-5 text-slate-900 ${
          center ? "text-center" : ""
        }`}
      >
        {children}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Window chrome (title bar with three dots)                           */
/* ------------------------------------------------------------------ */

export function WindowChrome({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-white shadow-[0px_20px_60px_0px_rgba(8,21,44,0.18)] outline outline-1 outline-offset-[-1px] outline-slate-200 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-gray-100 bg-slate-50 px-4 py-3">
        <div className="flex items-start gap-1.5">
          <span className="size-2 rounded-sm bg-slate-200" />
          <span className="size-2 rounded-sm bg-slate-200" />
          <span className="size-2 rounded-sm bg-slate-200" />
        </div>
        <span className="pl-1.5 text-xs font-normal leading-4 text-gray-400">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Image frame with gradient overlay + optional floating badges        */
/* ------------------------------------------------------------------ */

export function ImageFrame({
  src,
  alt,
  gradient = "bg-gradient-to-tr from-slate-900/60 via-cyan-900/40 to-slate-900/20",
  className = "",
  children,
}: {
  src: string;
  alt: string;
  gradient?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`relative min-h-96 overflow-hidden rounded-[20px] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
      <div className={`absolute inset-0 ${gradient}`} />
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Floating status badge on top of an image                            */
/* ------------------------------------------------------------------ */

export function FloatingBadge({
  label,
  dotClass = "bg-emerald-800",
  badgeClass = "bg-slate-200",
  className = "",
}: {
  label: string;
  dotClass?: string;
  badgeClass?: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute flex items-center gap-2 rounded-[10px] bg-white px-3.5 py-2 shadow-[0px_6px_20px_0px_rgba(15,23,42,0.08)] outline outline-1 outline-offset-[-1px] outline-slate-200 ${className}`}
    >
      <span className="text-xs font-semibold leading-5 text-slate-900">
        {label}
      </span>
      <span
        className={`inline-flex items-center rounded-full ${badgeClass} py-1 pl-1.5 pr-2`}
      >
        <span className={`size-1.5 rounded-[3px] ${dotClass}`} />
      </span>
    </div>
  );
}