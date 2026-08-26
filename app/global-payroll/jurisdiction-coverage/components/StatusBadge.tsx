const map: Record<
  string,
  { bg: string; dot: string; text: string; label: string }
> = {
  available: {
    bg: "bg-[#E3F0E7]",
    dot: "bg-green-700",
    text: "text-green-700",
    label: "Available",
  },
  limited: {
    bg: "bg-orange-100",
    dot: "bg-yellow-800",
    text: "text-yellow-800",
    label: "Limited",
  },
  partner: {
    bg: "bg-slate-200",
    dot: "bg-sky-700",
    text: "text-sky-700",
    label: "Partner-supported",
  },
  planned: {
    bg: "bg-slate-200",
    dot: "bg-slate-500",
    text: "text-slate-500",
    label: "Planned",
  },
  unavailable: {
    bg: "bg-rose-100",
    dot: "bg-red-600",
    text: "text-red-600",
    label: "Unavailable",
  },
  "needs-review": {
    bg: "bg-gray-100",
    dot: "bg-slate-500",
    text: "text-slate-500",
    label: "Needs review",
  },
};

export type StatusType = keyof typeof map;

export default function StatusBadge({ status, showDot = true }: { status: StatusType; showDot?: boolean }) {
  const s = map[status];
  return (
    <div
      className={`inline-flex items-center gap-[5px] rounded-[20px] px-2 py-1 ${s.bg}`}
    >
      {showDot && <div className={`h-1.5 w-1.5 rounded-[3px] ${s.dot}`} />}
      <span className={`text-[9.5px] font-extrabold leading-4 ${s.text}`}>
        {s.label}
      </span>
    </div>
  );
}
