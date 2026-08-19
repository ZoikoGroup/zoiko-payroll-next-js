import type { ReactNode } from "react";

export type BadgeTone = "neutral" | "warn" | "ok";

/** Unaccented stages carry a dashed edge; the two accented ones are solid. */
const toneStyles: Record<BadgeTone, string> = {
  neutral: "text-slate-900 outline-dashed outline-slate-900",
  warn: "bg-orange-100 text-yellow-700 outline-yellow-700",
  ok: "bg-emerald-50 text-teal-800 outline-teal-800",
};

/**
 * Slightly rotated outline tag — the page uses it for both maturity stages and
 * role verbs so the two read as the same vocabulary.
 */
export default function StageBadge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: BadgeTone;
}) {
  return (
    <span
      className={`inline-flex -rotate-2 items-center rounded-[3px] px-3 py-1 text-xs font-semibold uppercase leading-4 tracking-wide outline outline-1 outline-offset-[-1px] ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
}
