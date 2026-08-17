import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const steps = [
  { step: "01", title: "Detect" },
  { step: "02", title: "Classify" },
  { step: "03", title: "Assign" },
  { step: "04", title: "Correct / Accept" },
  { step: "05", title: "Retest" },
  { step: "06", title: "Sign-off" },
  { step: "07", title: "Preserve history" },
];

const varianceTypes = [
  "Data",
  "Configuration",
  "Timing",
  "Mapping",
  "Calculation",
  "Rounding",
  "Scope",
  "Intentional change",
];

export default function ValidationSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Validation &amp; parallel run</Eyebrow>
          <h2 className="mt-2.5 text-3xl font-extrabold leading-9 text-slate-900">
            Variance handled at every level — never a single total comparison
          </h2>
          <p className="mt-2.5 max-w-3xl text-base leading-6 text-gray-700">
            Legacy and target outcomes are compared at employee, payroll-group and aggregate levels.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-4 lg:grid-cols-7">
            {steps.map((step) => (
              <div key={step.step} className="bg-white px-4 py-5 text-center">
                <p className="font-mono text-xs leading-4 text-blue-600">{step.step}</p>
                <h3 className="mt-1.5 text-sm font-bold leading-5 text-slate-900">{step.title}</h3>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-4">
          <div className="flex flex-wrap gap-2">
            {varianceTypes.map((type) => (
              <span
                key={type}
                className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs leading-4 text-gray-700"
              >
                {type}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
