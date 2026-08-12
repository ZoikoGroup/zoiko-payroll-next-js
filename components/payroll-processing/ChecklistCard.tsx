type RowStatus = "ok" | "warn" | "error";

type ChecklistRow = {
  status: RowStatus;
  label: string;
  meta: string;
};

type ChecklistCardProps = {
  title: string;
  badge: string;
  badgeClass: string;
  rows: ChecklistRow[];
};

const markClass: Record<RowStatus, string> = {
  ok: "bg-green-100 text-green-700",
  warn: "bg-amber-100 text-yellow-700",
  error: "bg-rose-100 text-red-600",
};

const markGlyph: Record<RowStatus, string> = {
  ok: "✓",
  warn: "!",
  error: "✕",
};

/** Card with a titled header and a list of checked / flagged / blocked rows. */
export default function ChecklistCard({ title, badge, badgeClass, rows }: ChecklistCardProps) {
  return (
    <div className="h-full overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-gray-50 px-5 py-4">
        <h3 className="text-sm font-bold text-slate-900">{title}</h3>
        <span className={`rounded-[20px] px-2 py-0.75 text-xs font-semibold leading-4 ${badgeClass}`}>
          {badge}
        </span>
      </div>

      <ul>
        {rows.map((row, index) => (
          <li
            key={row.label}
            className={`flex items-center justify-between gap-4 px-5 py-3 ${
              index < rows.length - 1 ? "border-b border-slate-200" : ""
            }`}
          >
            <span className="flex items-center gap-3">
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${markClass[row.status]}`}
                aria-hidden="true"
              >
                {markGlyph[row.status]}
              </span>
              <span className="text-sm leading-5 text-slate-900">{row.label}</span>
            </span>
            <span className="shrink-0 text-right font-mono text-xs leading-4 text-slate-500">
              {row.meta}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
