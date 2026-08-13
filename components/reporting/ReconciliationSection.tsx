import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const runChips = ["Aug 1–15, 2026", "Zoiko US Inc.", "run-v3"];

const timeline = [
  { event: "Flagged for review — finance-team", at: "Aug 15, 08:02 UTC" },
  { event: "Affected records inspected — 2 of 1,284", at: "Aug 15, 08:40 UTC" },
];

export default function ReconciliationSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/reporting/reconciliation.png"
              alt="Payroll specialist presenting a reconciliation view"
              className="h-72 w-full rounded-2xl object-cover shadow-[0px_18px_44px_-18px_rgba(8,19,43,0.22)] sm:h-96"
            />
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>Reconciliation &amp; variance review</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold leading-8 text-slate-900">
              Expected vs. observed, named explicitly
            </h2>
            <p className="mt-3.5 max-w-lg text-base leading-6 text-gray-700">
              A batch is never shown as fully reconciled while record-level failures remain.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-11">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
              <div className="flex flex-wrap gap-2">
                {runChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-xs leading-5 text-slate-500"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold leading-5 text-yellow-700">
                Needs review
              </span>
            </div>

            <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="px-5 py-6">
                <p className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                  Expected · Source A (Payroll)
                </p>
                <p className="mt-2.5 font-mono text-2xl font-bold leading-8 text-slate-900">
                  $2,410,000
                </p>
                <p className="mt-1.5 font-mono text-xs leading-4 text-slate-500">
                  payroll-control-center · v14
                </p>
              </div>

              <div className="flex flex-col items-center justify-center px-5 py-6">
                <p className="font-mono text-xl font-bold leading-8 text-red-600">+$3,120</p>
                <p className="mt-1 text-xs leading-4 text-slate-500">signed difference</p>
              </div>

              <div className="px-5 py-6">
                <p className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                  Observed · Source B (Finance)
                </p>
                <p className="mt-2.5 font-mono text-2xl font-bold leading-8 text-slate-900">
                  $2,406,880
                </p>
                <p className="mt-1.5 font-mono text-xs leading-4 text-slate-500">
                  finance-erp · batch-0815
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 px-5 py-2">
              {timeline.map((row, index) => (
                <div
                  key={row.event}
                  className={`flex flex-wrap items-center justify-between gap-2 py-2.5 ${
                    index < timeline.length - 1 ? "border-b border-dashed border-slate-200" : ""
                  }`}
                >
                  <span className="text-xs leading-5 text-slate-900">{row.event}</span>
                  <span className="font-mono text-xs leading-4 text-slate-500">{row.at}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
