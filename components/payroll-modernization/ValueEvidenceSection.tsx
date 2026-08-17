import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const metrics = [
  {
    label: "Exception aging",
    value: "3.2 days avg",
    tags: ["Wave 2", "Last 30d"],
  },
  {
    label: "Migration reconciliation",
    value: "87%",
    tags: ["US & GB", "Refreshed today"],
  },
  {
    label: "Parallel variance resolution",
    value: "94%",
    tags: ["Cycle 3 of 4", "Excl. intentional change"],
  },
];

export default function ValueEvidenceSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/payroll-modernization/evidence.png"
              alt="Finance reviewers checking a payroll reconciliation report"
              className="h-72 w-full rounded-2xl object-cover shadow-[0px_18px_44px_-18px_rgba(8,19,43,0.22)] sm:h-96"
            />
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>Value, reporting &amp; evidence</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-9 text-slate-900">
              Measurable outcomes, only with clear methodology.
            </h2>
            <p className="mt-3 max-w-lg text-base leading-6 text-gray-700">
              Every metric shows scope, period, denominator, exclusions and last refresh — no
              invented ROI or accuracy claims.
            </p>
          </Reveal>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 80}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white px-5 py-5">
                <p className="text-xs leading-4 text-slate-500">{metric.label}</p>
                <p className="mt-2 font-mono text-2xl font-bold leading-8 text-slate-900">
                  {metric.value}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {metric.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-xs leading-4 text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
