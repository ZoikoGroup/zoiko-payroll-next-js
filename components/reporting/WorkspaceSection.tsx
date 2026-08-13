import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const scopeChips = ["Aug 1–15, 2026", "Zoiko US Inc.", "USD"];

const metrics = [
  { label: "Gross payroll", value: "$2.41M" },
  { label: "Completed runs", value: "11 / 12" },
  { label: "Unresolved exceptions", value: "3" },
  { label: "Reconciliation", value: "1 diff" },
];

/** `height` is the bar's share of the plot area; `corrected` marks a restated period. */
const trend = [
  { period: "May-B", height: 62 },
  { period: "Jun-A", height: 72 },
  { period: "Jun-B*", height: 54, corrected: true },
  { period: "Jul-A", height: 74 },
  { period: "Jul-B", height: 80 },
  { period: "Aug-A", height: 88 },
];

const attention = [
  { item: "Missing routing detail", status: "Open", statusClass: "bg-orange-100 text-yellow-700" },
  { item: "Cost-center mapping", status: "Low", statusClass: "bg-gray-100 text-slate-500" },
  { item: "Recon: Finance vs Payroll", status: "Review", statusClass: "bg-indigo-50 text-blue-600" },
];

export default function WorkspaceSection() {
  return (
    <section id="reporting-workspace" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Payroll reporting workspace</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold leading-8 text-slate-900">
              The strongest product proof on this page
            </h2>
            <p className="mt-3.5 max-w-lg text-base leading-6 text-gray-700">
              Period and scope controls, verified totals, trend with correction markers, and unresolved
              attention items — together, not scattered across screens.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/reporting/workspace.png"
              alt="Zoiko Payroll reporting dashboard open on a laptop"
              className="h-72 w-full rounded-2xl object-cover object-top shadow-[0px_18px_44px_-18px_rgba(8,19,43,0.22)] sm:h-80"
            />
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-11">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-900 px-5 py-4">
            <div className="flex flex-wrap gap-2">
              {scopeChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs font-semibold leading-4 text-white/80"
                >
                  {chip}
                </span>
              ))}
            </div>
            <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs font-semibold leading-4 text-white/80">
              Refreshed 6m ago
            </span>
          </div>
        </Reveal>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 60}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white px-4 py-4">
                <p className="text-xs leading-4 text-slate-500">{metric.label}</p>
                <p className="mt-1.5 font-mono text-xl font-bold leading-8 text-slate-900">
                  {metric.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs leading-4 text-slate-500">Gross payroll — trailing 6 periods</p>
              <div className="mt-3.5 flex h-28 items-end gap-2">
                {trend.map((bar) => (
                  <div
                    key={bar.period}
                    className={`flex-1 rounded-t-[5px] bg-linear-to-b ${
                      bar.corrected ? "from-orange-300 to-yellow-700" : "from-blue-500 to-blue-600"
                    }`}
                    style={{ height: `${bar.height}%` }}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="mt-1.5 flex gap-2">
                {trend.map((bar) => (
                  <span
                    key={bar.period}
                    className="flex-1 text-center font-mono text-[10px] leading-4 text-slate-500"
                  >
                    {bar.period}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-slate-200 bg-white px-4 py-4">
              <p className="pb-2 text-xs leading-4 text-slate-500">Attention</p>
              {attention.map((row, index) => (
                <div
                  key={row.item}
                  className={`flex items-center justify-between gap-2 py-2 ${
                    index < attention.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <span className="text-xs leading-5 text-slate-900">{row.item}</span>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold leading-4 ${row.statusClass}`}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
