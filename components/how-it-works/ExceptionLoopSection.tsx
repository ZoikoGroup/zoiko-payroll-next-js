import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { RefreshIcon } from "../ui/icons";
import { lifecycleStages } from "./lifecycle-data";

const loops = [
  { trigger: "Missing or conflicting input", outcome: "returns to Prepare for correction." },
  { trigger: "Calculation error", outcome: "correct, recalculate, then back to Validate." },
  {
    trigger: "Reviewer requests a change",
    outcome: "correction path → recalculate/revalidate → Review.",
  },
  {
    trigger: "Material change after approval",
    outcome: "approval is superseded → required revalidation, review, reapproval.",
  },
  {
    trigger: "Late change after completion",
    outcome: "governed reopen/adjustment on a new version.",
  },
  {
    trigger: "Integration partial failure",
    outcome: "affected records retry or reconcile without duplicating completed scope.",
  },
];

/** The stage the illustrative run has been returned to. */
const returnedStageId = "validate";

export default function ExceptionLoopSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#F4F8FB] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Exception &amp; material-change loop</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Payroll is not a one-way conveyor belt.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Issues and material changes pause the run and return it to the right control point for
            renewed validation, review or approval — never a silent override.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <ol className="flex flex-wrap items-center gap-2">
            {lifecycleStages.map((stage, index) => (
              <li key={stage.id} className="flex items-center gap-2">
                <span
                  className={`rounded-lg border px-4 py-2.5 text-sm font-semibold ${
                    stage.id === returnedStageId
                      ? "border-amber-300 bg-amber-50 text-amber-700"
                      : "border-slate-200 bg-white text-brand-dark"
                  }`}
                >
                  {stage.label}
                </span>
                {index < lifecycleStages.length - 1 && (
                  <span className="text-slate-400" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>

          <div className="mt-6 grid grid-cols-1 gap-3 lg:grid-cols-2">
            {loops.map((loop) => (
              <div key={loop.trigger} className="flex gap-3 rounded-lg bg-[#EAF1F6] px-4 py-3">
                <RefreshIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-brand-dark">{loop.trigger}</span> → {loop.outcome}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
