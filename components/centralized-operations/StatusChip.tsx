export type ChipTone = "ok" | "warn" | "blocked" | "neutral";

const toneStyles: Record<ChipTone, string> = {
  ok: "bg-[#E3F0E7] text-[#2F7A52]",
  warn: "bg-[#F1EAD8] text-[#9C7A1F]",
  blocked: "bg-[#F4E1DF] text-[#B23A34]",
  neutral: "bg-[#EAF1F6] text-[#4E6172]",
};

/** Mono status pill used across every table on the centralized-operations page. */
export default function StatusChip({ label, tone = "neutral" }: { label: string; tone?: ChipTone }) {
  return (
    <span
      className={`inline-block rounded-[5px] px-2 py-0.5 font-mono text-xs font-medium leading-4 ${toneStyles[tone]}`}
    >
      {label}
    </span>
  );
}
