/** The seven availability states are a fixed contract — every surface renders them identically. */
export type AvailabilityState =
  | "available"
  | "limited"
  | "partner"
  | "planned"
  | "unavailable"
  | "review"
  | "na";

const styles: Record<AvailabilityState, { fill: string; text: string; dot: string }> = {
  available: { fill: "bg-emerald-50", text: "text-green-600", dot: "bg-green-600" },
  limited: { fill: "bg-orange-100", text: "text-yellow-700", dot: "bg-yellow-700" },
  partner: { fill: "bg-indigo-50", text: "text-blue-600", dot: "bg-blue-600" },
  planned: { fill: "bg-violet-100", text: "text-indigo-600", dot: "bg-indigo-600" },
  unavailable: { fill: "bg-red-50", text: "text-red-600", dot: "bg-red-600" },
  review: { fill: "bg-gray-100", text: "text-slate-500", dot: "bg-slate-500" },
  na: { fill: "bg-gray-100", text: "text-gray-400", dot: "bg-gray-400" },
};

export default function StatusPill({
  state,
  label,
}: {
  state: AvailabilityState;
  label: string;
}) {
  const style = styles[state];

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold leading-4 ${style.fill} ${style.text}`}
    >
      <span className={`size-1.5 shrink-0 rounded-sm ${style.dot}`} aria-hidden="true" />
      {label}
    </span>
  );
}
