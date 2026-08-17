import type { ReactNode } from "react";

export type ControlRow = {
  item: string;
  tag: string;
  /** ok = met, warn = needs attention, error = blocking */
  state?: "ok" | "warn" | "error";
};

const stateStyles = {
  ok: { glyph: "✓", className: "bg-emerald-50 text-green-600" },
  warn: { glyph: "!", className: "bg-orange-100 text-yellow-700" },
  error: { glyph: "×", className: "bg-rose-100 text-red-600" },
};

type ControlListProps = {
  title: string;
  rows: ControlRow[];
  /** Optional status pill rendered on the right of the card header. */
  badge?: ReactNode;
};

/** Card of readiness rows — used by the inputs, review/approval and security sections. */
export default function ControlList({ title, rows, badge }: ControlListProps) {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-gray-50 px-5 py-4">
        <h3 className="text-sm font-bold leading-6 text-slate-900">{title}</h3>
        {badge}
      </div>

      <div className="px-5 py-4">
        {rows.map((row, index) => {
          const state = stateStyles[row.state ?? "ok"];
          return (
            <div
              key={row.item}
              className={`flex flex-wrap items-center justify-between gap-x-2.5 gap-y-1 py-2 ${
                index < rows.length - 1 ? "border-b border-slate-200" : ""
              }`}
            >
              <span className="flex items-center gap-2.5 text-xs leading-5 text-slate-900">
                <span
                  aria-hidden="true"
                  className={`flex size-4 shrink-0 items-center justify-center rounded-[5px] text-xs font-bold leading-4 ${state.className}`}
                >
                  {state.glyph}
                </span>
                {row.item}
              </span>
              <span className="ml-auto font-mono text-xs leading-4 text-slate-500">{row.tag}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
