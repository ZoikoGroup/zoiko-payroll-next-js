import type { ReactNode } from "react";

export type ChipTone = "ok" | "warn" | "info" | "neutral" | "fail";

const toneStyles: Record<ChipTone, string> = {
  ok: "bg-green-100 text-green-700",
  warn: "bg-orange-100 text-yellow-700",
  info: "bg-sky-100 text-sky-700",
  neutral: "bg-slate-100 text-gray-600",
  fail: "bg-rose-100 text-red-600",
};

/** Status pill used in every table and record row on the hr-teams page. */
export default function StatusChip({
  tone = "neutral",
  children,
}: {
  tone?: ChipTone;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-2 py-0.5 text-[0.625rem] font-bold leading-4 ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
}
