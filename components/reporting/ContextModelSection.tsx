import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const metricChips = ["Aug 1–15, 2026", "USD", "v14", "Refreshed 6m ago"];

const contextParts = [
  {
    step: "01",
    title: "Definition",
    detail: "What the metric includes and excludes, in plain language.",
  },
  {
    step: "02",
    title: "Period & scope",
    detail: "The exact reporting period and authorized organizational scope.",
  },
  {
    step: "03",
    title: "Currency & source",
    detail: "Local currency by default; source run and version referenced.",
  },
  {
    step: "04",
    title: "Freshness & evidence",
    detail: "Last refresh timestamp with a link to the permitted evidence path.",
  },
];

export default function ContextModelSection() {
  return (
    <section className="bg-[#F7FBFD] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Metric &amp; report context model</Eyebrow>
          <h2 className="mt-2.5 text-3xl font-extrabold leading-9 text-slate-900">
            No number appears without its context.
          </h2>
          <p className="mt-2.5 text-base leading-6 text-gray-700">
            Every metric carries its definition, period, scope, currency, source, version, freshness and
            evidence path.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid-cols-2">
            <div className="flex items-center bg-slate-900 p-8">
              <div className="w-full rounded-xl border border-white/20 bg-white/5 px-5 py-5">
                <p className="text-xs leading-4 text-white/40">Net payroll — Zoiko US Inc.</p>
                <p className="mt-1 font-mono text-2xl font-bold leading-10 text-white">$1.86M</p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {metricChips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-xl border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] leading-4 text-white/60"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3.5 p-8">
              {contextParts.map((part) => (
                <div key={part.step} className="flex gap-3">
                  <span className="w-5 shrink-0 font-mono text-xs font-bold leading-5 text-blue-600">
                    {part.step}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold leading-5 text-slate-900">{part.title}</h3>
                    <p className="mt-0.5 text-xs leading-5 text-slate-500">{part.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
