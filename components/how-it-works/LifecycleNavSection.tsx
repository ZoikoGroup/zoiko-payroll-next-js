import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { lifecycleStages } from "./lifecycle-data";

export default function LifecycleNavSection() {
  return (
    <section id="six-stage-lifecycle" className="scroll-mt-24 border-b border-[#DCE6EC] bg-[#F4F8FB] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Six-stage lifecycle</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Select a stage to see how it actually works.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Every stage exposes its purpose, inputs, current state, responsible role, evidence and exit
            condition — never a hidden automatic step.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <nav
            aria-label="Payroll lifecycle stages"
            className="grid grid-cols-2 gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm sm:grid-cols-3 lg:grid-cols-6"
          >
            {lifecycleStages.map((stage) => (
              <span key={stage.id} className="rounded-lg px-2 py-2.5 text-center">
                <span className="block text-[10px] font-semibold text-slate-400">{stage.number}</span>
                <span className="mt-0.5 block text-sm font-semibold text-slate-600">{stage.label}</span>
              </span>
            ))}
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
