import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stages = [
  {
    title: "Discovery",
    detail: "Understand current reporting, reconciliation pain points and stakeholders.",
  },
  {
    title: "Metric definition",
    detail: "Agree definitions, inclusions and exclusions for each core metric.",
  },
  {
    title: "Scope & access",
    detail: "Configure roles, aggregate/detail boundaries and least privilege.",
  },
  {
    title: "Historical mapping",
    detail: "Map prior-period data into the new reporting model.",
  },
  {
    title: "Reconciliation design",
    detail: "Define expected/observed sources and match logic.",
  },
  {
    title: "Validation",
    detail: "Compare outputs against known-correct historical figures.",
  },
  {
    title: "Training & operate",
    detail: "Enable teams and move into standard reporting operation.",
  },
];

export default function ImplementationSection() {
  return (
    <section className="bg-[#F7FBFD] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Implementation</Eyebrow>
          <h2 className="mt-2.5 text-3xl font-extrabold leading-9 text-slate-900">
            From metric definition to a validated reporting operation.
          </h2>
        </Reveal>

        <div className="mt-10 max-w-3xl">
          {stages.map((stage, index) => (
            <Reveal key={stage.title} delay={index * 50}>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span
                    className="mt-1 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-blue-600 bg-white"
                    aria-hidden="true"
                  />
                  {index < stages.length - 1 ? (
                    <span className="w-px flex-1 bg-slate-300" aria-hidden="true" />
                  ) : null}
                </div>

                <div className={index < stages.length - 1 ? "pb-8" : ""}>
                  <h3 className="text-sm font-bold leading-5 text-slate-900">{stage.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{stage.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
