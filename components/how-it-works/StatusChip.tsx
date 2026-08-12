export type Tone = "ok" | "warn" | "error" | "muted" | "brand";

const toneStyles: Record<Tone, { chip: string; dot: string }> = {
  ok: { chip: "bg-emerald-50 text-emerald-700", dot: "bg-emerald-600" },
  warn: { chip: "bg-amber-50 text-amber-700", dot: "bg-amber-600" },
  error: { chip: "bg-rose-50 text-rose-700", dot: "bg-rose-600" },
  muted: { chip: "bg-slate-100 text-slate-500", dot: "bg-slate-400" },
  brand: { chip: "bg-brand/10 text-brand", dot: "bg-brand" },
};

type StatusChipProps = {
  tone?: Tone;
  children: string;
  className?: string;
};

/** Dot + label pill used across the lifecycle mocks, stage states and boundary cards. */
export default function StatusChip({ tone = "muted", children, className = "" }: StatusChipProps) {
  const styles = toneStyles[tone];

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${styles.chip} ${className}`}
    >
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${styles.dot}`} aria-hidden="true" />
      {children}
    </span>
  );
}
