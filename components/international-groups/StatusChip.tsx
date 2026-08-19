import type { ReactNode } from "react";

export type ChipTone = "ok" | "warn" | "blocked" | "info" | "neutral";

const toneStyles: Record<ChipTone, string> = {
  ok: "bg-emerald-50 text-green-600",
  warn: "bg-orange-100 text-yellow-700",
  blocked: "bg-rose-100 text-red-600",
  info: "bg-indigo-50 text-blue-600",
  neutral: "bg-slate-50 text-gray-700 ring-1 ring-slate-200",
};

/** Rounded status pill used across every table on the international-groups page. */
export default function StatusChip({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: ChipTone;
}) {
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold leading-4 ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
}
