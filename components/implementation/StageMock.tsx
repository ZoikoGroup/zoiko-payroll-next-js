import type { StageMock as StageMockData, StatusTone } from "./stages-data";

const statusDot: Record<StatusTone, string> = {
  ok: "bg-emerald-600",
  warn: "bg-amber-600",
};

const statusPill: Record<StatusTone, string> = {
  ok: "bg-emerald-50 text-emerald-600",
  warn: "bg-amber-50 text-amber-600",
};

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_24px_-12px_rgba(10,27,51,0.12)]">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-3.5 py-3">
        <span className="text-xs font-bold uppercase tracking-wide text-slate-600">{title}</span>
        <span className="flex gap-[5px]" aria-hidden="true">
          <span className="h-2 w-2 rounded-xs bg-slate-200" />
          <span className="h-2 w-2 rounded-xs bg-slate-200" />
          <span className="h-2 w-2 rounded-xs bg-slate-200" />
        </span>
      </div>
      {children}
    </div>
  );
}

export default function StageMock({ mock }: { mock: StageMockData }) {
  if (mock.kind === "table") {
    return (
      <Panel title={mock.title}>
        <div className="overflow-x-auto p-4">
          <table className="w-full min-w-[320px] border-collapse text-left">
            <thead>
              <tr>
                {mock.columns.map((column) => (
                  <th
                    key={column}
                    className="px-2 pb-2 text-xs font-bold uppercase tracking-wide text-slate-400"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mock.rows.map((row) => (
                <tr key={row.cells[0]}>
                  {row.cells.map((cell) => (
                    <td
                      key={cell}
                      className="border-t border-slate-200 px-2 py-2.5 text-xs text-slate-900"
                    >
                      {cell}
                    </td>
                  ))}
                  <td className="border-t border-slate-200 px-2 py-2.5">
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-xs ${statusDot[row.tone]}`}
                        aria-hidden="true"
                      />
                      <span className="text-xs font-semibold text-slate-900">{row.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    );
  }

  if (mock.kind === "toggles") {
    return (
      <Panel title={mock.title}>
        <div className="p-4">
          {mock.rows.map((row, index) => (
            <div
              key={row.label}
              className={`flex items-center justify-between gap-4 px-1 py-2 ${
                index > 0 ? "border-t border-slate-200" : ""
              }`}
            >
              <span className="text-sm text-slate-900">{row.label}</span>
              <span
                className={`flex h-4 w-8 shrink-0 items-center rounded-full p-0.5 ${
                  row.on ? "justify-end bg-emerald-600" : "justify-start border border-slate-200 bg-slate-100"
                }`}
                aria-hidden="true"
              >
                <span className={`h-3 w-3 rounded-full ${row.on ? "bg-white" : "bg-slate-300"}`} />
              </span>
            </div>
          ))}
        </div>
      </Panel>
    );
  }

  if (mock.kind === "chart") {
    return (
      <Panel title={mock.title}>
        <div className="p-5">
          <div className="flex h-32 items-end justify-between gap-4">
            {mock.bars.map((bar) => (
              <div
                key={bar.label}
                className={`flex-1 rounded-md ${
                  bar.muted ? "bg-indigo-50" : "bg-linear-to-b from-blue-400 to-blue-600"
                }`}
                style={{ height: `${bar.height}%` }}
              />
            ))}
          </div>
          <div className="mt-2.5 flex justify-between gap-4">
            {mock.bars.map((bar) => (
              <span key={bar.label} className="flex-1 text-center text-[10px] text-slate-400">
                {bar.label}
              </span>
            ))}
          </div>
        </div>
      </Panel>
    );
  }

  if (mock.kind === "comparison") {
    return (
      <Panel title={mock.title}>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            {mock.columns.map((column, columnIndex) => (
              <div key={column}>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{column}</p>
                <dl className="mt-2">
                  {mock.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-2 border-t border-slate-200 py-2 text-xs"
                    >
                      <dt className="text-slate-600">{row.label}</dt>
                      <dd className="font-semibold text-slate-900">
                        {columnIndex === 0 ? row.left : row.right}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
            {mock.note}
          </p>
        </div>
      </Panel>
    );
  }

  if (mock.kind === "gantt") {
    return (
      <Panel title={mock.title}>
        <div className="p-4">
          <div className="space-y-2">
            {mock.rows.map((row) => (
              <div key={row.label} className="flex items-center gap-3">
                <span className="w-20 shrink-0 text-[10px] text-slate-600">{row.label}</span>
                <span className="relative h-2 flex-1 rounded-full bg-slate-100">
                  <span
                    className={`absolute top-0 h-2 rounded-full ${
                      row.tone === "blue" ? "bg-blue-600" : "bg-emerald-600"
                    }`}
                    style={{ left: `${row.start}%`, width: `${row.width}%` }}
                  />
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-900">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
            {mock.note}
          </p>
        </div>
      </Panel>
    );
  }

  return (
    <Panel title={mock.title}>
      <div className="space-y-3 p-5">
        {mock.rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-4">
            <span className="text-xs text-slate-900">{row.label}</span>
            <span
              className={`shrink-0 rounded-md px-2 py-1 text-[11px] font-semibold ${statusPill[row.tone]}`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </Panel>
  );
}
