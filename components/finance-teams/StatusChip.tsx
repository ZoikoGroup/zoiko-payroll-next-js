import type { ReactNode } from "react";

export type ChipTone = "ok" | "warn" | "info" | "neutral" | "fail";

const toneStyles: Record<ChipTone, { pill: string; dot: string }> = {
  ok: { pill: "bg-green-100 text-green-700", dot: "bg-green-700" },
  warn: { pill: "bg-orange-100 text-yellow-700", dot: "bg-yellow-700" },
  info: { pill: "bg-sky-100 text-sky-700", dot: "bg-sky-700" },
  neutral: { pill: "bg-slate-100 text-gray-600", dot: "bg-gray-600" },
  fail: { pill: "bg-rose-100 text-red-600", dot: "bg-red-600" },
};

/** Dot + label pill used for every status on the finance-teams page. */
export default function StatusChip({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: ChipTone;
}) {
  const style = toneStyles[tone];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold leading-4 ${style.pill}`}
    >
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`} aria-hidden="true" />
      {children}
    </span>
  );
}
