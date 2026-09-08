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
  size = "md",
}: {
  children: React.ReactNode;
  size?: "sm" | "md";
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl bg-linear-to-br from-blue-600/10 to-blue-400/10 text-blue-600 ${
        size === "sm" ? "h-10 w-10" : "h-12 w-12"
      }`}
    >
      {children}
    </div>
  );
}

/**
 * Checklist row used by the hero card and the role learning paths — a filled
 * green tick when the step is done, a hollow grey ring when it is not.
 */
export function StepRow({
  label,
  done,
  first = false,
}: {
  label: string;
  done: boolean;
  first?: boolean;
}) {
  return (
    <li
      className={`flex items-center gap-3 py-2.5 ${
        first ? "" : "border-t border-slate-200"
      }`}
    >
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          done ? "bg-green-600/10" : "bg-slate-50"
        }`}
      >
        {done ? (
          <svg
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              d="M2 6.2L4.6 8.8L10 3.4"
              stroke="#15803D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <span className="h-2 w-2 rounded-full border-[1.5px] border-slate-400" />
        )}
      </span>
      <span className="text-sm font-medium text-slate-900">{label}</span>
    </li>
  );
}

/** Small status pill — colour keyed to the readiness wording in the Figma. */
export function StatusPill({
  children,
  tone = "blue",
}: {
  children: React.ReactNode;
  tone?: "blue" | "green" | "amber";
}) {
  const tones = {
    blue: "bg-blue-400/15 text-blue-700",
    green: "bg-green-600/10 text-green-700",
    amber: "bg-amber-500/10 text-amber-700",
  } as const;
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-[5px] text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
