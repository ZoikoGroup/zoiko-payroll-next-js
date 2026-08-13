import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

/** `height` is the bar's share of the plot area; `corrected` marks a restated period. */
const trend = [
  { period: "Mar", height: 66 },
  { period: "Apr", height: 74 },
  { period: "May*", height: 58, corrected: true },
  { period: "Jun", height: 78 },
  { period: "Jul", height: 84 },
  { period: "Aug", height: 92 },
];

const explanation = [
  { label: "Metric", value: "Gross payroll" },
  { label: "Prior version", value: "calc-v09" },
  { label: "Current version", value: "calc-v11" },
  { label: "Scope change", value: "None" },
  { label: "Material change", value: "Retro rate correction" },
];

export default function TrendsSection() {
  return (
    <section className="bg-[#F7FBFD] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Period trends · why did this change?</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold leading-8 text-slate-900">
              Corrected periods stay visible — never silently restated.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/reporting/trends.png"
              alt="Finance reviewer checking period figures against a calculator"
              className="h-72 w-full rounded-2xl object-cover shadow-[0px_18px_44px_-18px_rgba(8,19,43,0.22)] sm:h-80"
            />
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-11">
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid-cols-5">
            <div className="p-6 lg:col-span-3">
              <p className="text-xs leading-4 text-slate-500">Gross payroll — Zoiko US Inc. · USD</p>
              <div className="mt-6 flex h-32 items-end gap-3">
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
              <div className="mt-1.5 flex gap-3">
                {trend.map((bar) => (
                  <span
                    key={bar.period}
                    className="flex-1 text-center font-mono text-[10px] leading-4 text-slate-500"
                  >
                    {bar.period}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">
                * May marked as corrected — see explanation.
              </p>
            </div>

            <div className="bg-slate-900 p-6 lg:col-span-2">
              <h3 className="text-sm font-bold leading-6 text-white">Why changed? — May 2026</h3>
              <dl className="mt-3">
                {explanation.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-3 border-b border-white/10 py-2.5"
                  >
                    <dt className="text-xs leading-4 text-white/60">{row.label}</dt>
                    <dd className="text-right font-mono text-xs leading-4 text-white">{row.value}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-3 py-2.5">
                  <dt className="text-xs leading-4 text-white/60">Evidence</dt>
                  <dd className="text-right text-xs font-semibold leading-4 text-blue-300">
                    View version history &rarr;
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
