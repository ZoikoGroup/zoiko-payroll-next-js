import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  { step: "01", title: "Discover", description: "Entities, groups, calendars, roles." },
  { step: "02", title: "Design", description: "Target model, shared standards." },
  { step: "03", title: "Prepare data", description: "Migration readiness plan." },
  { step: "04", title: "Configure", description: "Configured environment." },
  { step: "05", title: "Validate", description: "Acceptance evidence." },
  { step: "06", title: "Parallel run", description: "Variance sign-off." },
  { step: "07", title: "Launch by wave", description: "Go / hold / rollback." },
  { step: "08", title: "Stabilize", description: "Hypercare, access checks." },
  { step: "09", title: "Operate", description: "Recurring close & review." },
];

export default function ImplementationSection() {
  return (
    <section className="bg-linear-to-b from-[#0A2E47] to-[#071E30] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Implementation, by entity & wave"
            title="Staged and controlled — never instant"
            description="A staged rollout that moves each entity from discovery to operation with clear validation and control at every wave."
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-5"
              >
                <p className="text-xs font-bold leading-4 text-blue-300">{step.step}</p>
                <h3 className="mt-3 text-sm font-bold leading-5 text-white">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
