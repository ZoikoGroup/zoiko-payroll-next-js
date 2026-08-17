import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stages = [
  {
    step: "01",
    title: "Prepare",
    description: "Inputs, configuration and source readiness confirmed.",
  },
  { step: "02", title: "Calculate", description: "Approved configuration and version applied." },
  { step: "03", title: "Validate", description: "Rules, blockers, owners and resolution tracked." },
  {
    step: "04",
    title: "Review",
    description: "Totals, variances, changes and exceptions inspected.",
  },
  {
    step: "05",
    title: "Approve",
    description: "Authorized human decision bound to the eligible version.",
  },
  {
    step: "06",
    title: "Complete",
    description: "Records, reporting and downstream status preserved.",
  },
];

export default function LifecycleSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>End-to-end payroll lifecycle</Eyebrow>
          <h2 className="mt-2.5 max-w-4xl text-3xl font-extrabold leading-9 text-slate-900">
            Every payroll stage is validated, reviewed, and traceable from preparation through
            completion
          </h2>
          <p className="mt-2.5 max-w-3xl text-base leading-6 text-gray-700">
            Material changes after review or approval trigger recalculation, revalidation or
            reapproval — never a silent override.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3 lg:grid-cols-6">
            {stages.map((stage) => (
              <div key={stage.step} className="bg-white px-4 py-6">
                <p className="font-mono text-xs font-bold leading-4 text-blue-600">{stage.step}</p>
                <h3 className="mt-1 text-sm font-bold leading-5 text-slate-900">{stage.title}</h3>
                <p className="mt-1.5 text-xs leading-4 text-slate-500">{stage.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
