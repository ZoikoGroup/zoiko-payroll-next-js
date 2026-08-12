import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const phases = [
  { title: "Discovery", description: "Map current approval structure and pain points." },
  { title: "Role / Scope Design", description: "Define decision rights across entities and jurisdictions." },
  { title: "Policy Mapping", description: "Translate approval policy into configured stages and SoD rules." },
  { title: "Identity / Notifications", description: "Connect authentication and notification routing." },
  { title: "Workflow Testing", description: "Validate stages, delegation and version-binding behavior." },
  { title: "Pilot", description: "Run a limited scope live before full rollout." },
  { title: "Training", description: "Enable approvers, reviewers and administrators." },
  { title: "Operate", description: "Ongoing monitoring of queue health and SoD.", highlighted: true },
];

export default function ImplementationSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Implementation</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-9 text-sky-950">
            A rollout path, not a switch flip.
          </h2>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase, index) => (
            <Reveal key={phase.title} delay={index * 50}>
              <div
                className={`h-full rounded-xl border p-5 ${
                  phase.highlighted
                    ? "border-sky-950 bg-sky-950"
                    : "border-slate-200 bg-white"
                }`}
              >
                <h3
                  className={`text-sm font-bold ${phase.highlighted ? "text-white" : "text-sky-950"}`}
                >
                  {phase.title}
                </h3>
                <p
                  className={`mt-2 text-xs leading-5 ${
                    phase.highlighted ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {phase.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
