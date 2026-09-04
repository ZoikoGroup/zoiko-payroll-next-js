import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stages = [
  {
    number: "1",
    title: "Prepare",
    description: "Data readiness, change collection, ownership, cutoffs, source checks.",
    note: "No current field/config details unless linked to Docs.",
  },
  {
    number: "2",
    title: "Calculate",
    description: "Calculation process concepts, input completeness, controlled reruns.",
    note: "No invented calculation rules or statutory formulas.",
  },
  {
    number: "3",
    title: "Validate",
    description: "Variance review, exception triage, source/evidence questions.",
    note: "No opaque compliance or risk score.",
  },
  {
    number: "4",
    title: "Review",
    description: "Material-change review, peer/manager review, evidence expectations.",
    note: "Role design only; permissions live elsewhere.",
  },
  {
    number: "5",
    title: "Approve",
    description: "Decision rights, segregation of duties, sign-off evidence.",
    note: "No assumption every org needs the same model.",
  },
  {
    number: "6",
    title: "Complete",
    description: "Completion criteria, records, handoffs, payment/reporting questions.",
    note: "No promise of statutory or banking outcome.",
  },
  {
    number: "7",
    title: "Post-payroll",
    description:
      "Reconciliation, reporting, corrections, evidence retention, retrospective.",
    note: "Exports/retention rules stay specialist authority.",
  },
];

export default function LifecycleSection() {
  return (
    <section className="bg-[#E9F0F8] border-t border-slate-200 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow className="text-[#0A8FD0]">Browse by payroll lifecycle</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold font-jakarta text-[#0A2E4B] leading-9">
            Map learning to the stage you&apos;re operating in.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {stages.map((stage, i) => (
            <Reveal key={stage.number} delay={i * 60}>
              <div className="flex h-full flex-col rounded-xl bg-white p-4 outline outline-1 outline-offset-[-1px] outline-slate-200">
                <div className="flex h-6 w-6 items-center justify-center rounded-xl bg-[#0A2E4B]">
                  <span className="text-xs font-extrabold font-jakarta text-white leading-4">
                    {stage.number}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-bold font-jakarta text-[#0A2E4B] leading-5">
                  {stage.title}
                </h3>
                <p className="mt-2 text-xs font-jakarta text-[#4E6172] leading-4 flex-1">
                  {stage.description}
                </p>
                <div className="mt-3 border-t border-slate-200 pt-3">
                  <p className="text-xs font-jakarta text-[#959595] leading-4">
                    {stage.note}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
