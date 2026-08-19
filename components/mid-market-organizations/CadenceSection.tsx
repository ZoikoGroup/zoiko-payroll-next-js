import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const cadences = [
  { label: "Every cycle", description: "Readiness, exceptions, approval, completion." },
  { label: "Monthly", description: "Reconciliation, recurring exceptions." },
  { label: "Quarterly", description: "Privileged access, approver coverage." },
  { label: "Annual", description: "Operating model & expansion review." },
];

export default function CadenceSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Operating cadence"
            title="A rhythm matched to each responsibility"
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cadences.map((cadence) => (
              <div key={cadence.label} className="rounded-xl border border-slate-200 px-5 py-5">
                <h3 className="text-xs font-bold uppercase leading-4 tracking-wide text-sky-600">
                  {cadence.label}
                </h3>
                <p className="mt-3 text-sm leading-5 text-zinc-600">{cadence.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
