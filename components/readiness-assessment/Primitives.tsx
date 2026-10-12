import React from "react";

/** Blue dot + label sitting above every section heading on this page. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-[3px] bg-blue-400" />
      <span className="text-sm font-semibold tracking-tight text-blue-600">
        {children}
      </span>
    </div>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
}

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="text-base leading-7 text-slate-500">{body}</p>
      ) : null}
    </div>
  );
}

/** White card with the soft border used across the feature grids. */
export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white ${className}`}>
      {children}
    </div>
  );
}

/** Rounded tile holding a blue icon, with the Figma's subtle gradient wash. */
export function IconTile({
  children,
  solid = false,
}: {
  children: React.ReactNode;
  solid?: boolean;
}) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
        solid
          ? "bg-blue-600 text-white"
          : "bg-linear-to-br from-blue-600/10 to-blue-400/10 text-blue-600"
      }`}
    >
      {children}
    </div>
  );
}

/**
 * The four readiness verdicts used throughout the page. Colour carries
 * meaning here, so each status also keeps its own wording.
 */
export type ReadinessStatus =
  | "ready"
  | "preparation"
  | "gap"
  | "unassessed"
  | "p1";

const statusStyles: Record<ReadinessStatus, string> = {
  ready: "bg-green-600/10 text-green-700",
  preparation: "bg-blue-400/15 text-blue-700",
  gap: "bg-red-500/10 text-red-600",
  unassessed: "bg-slate-500/10 text-slate-500",
  p1: "bg-amber-500/10 text-amber-700",
};

export function StatusPill({
  children,
  status = "preparation",
  className = "",
}: {
  children: React.ReactNode;
  status?: ReadinessStatus;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-[5px] text-xs font-semibold ${statusStyles[status]} ${className}`}
    >
      {children}
    </span>
  );
}

/** The dark "app window" chrome: three dots on the left, a label on the right. */
export function WindowBar({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="flex gap-1.5" aria-hidden="true">
        <span className="h-2 w-2 rounded-sm bg-slate-200" />
        <span className="h-2 w-2 rounded-sm bg-slate-200" />
        <span className="h-2 w-2 rounded-sm bg-slate-200" />
      </span>
      <span className="text-sm text-slate-500">{label}</span>
    </div>
  );
}
