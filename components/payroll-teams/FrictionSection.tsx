import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const frictions = [
  {
    label: "Inputs from many owners",
    description: "Employee, time and deduction data arrive from different systems.",
    shows: "Shows: source, owner, effective date",
  },
  {
    label: "Late-surfacing issues",
    description: "Validation problems appear after preparation feels done.",
    shows: "Shows: early issue visibility",
  },
  {
    label: "Unowned exceptions",
    description: "Issues sit without a clear next owner.",
    shows: "Shows: neutral queue with owner & due date",
  },
  {
    label: "Review/approval conflation",
    description: "It's unclear who reviewed vs. who approved.",
    shows: "Shows: explicit role stages",
  },
  {
    label: "Corrections invalidate decisions",
    description: "A late fix can quietly outdate an earlier approval.",
    shows: "Shows: version history & reapproval",
  },
  {
    label: "Ambiguous completion",
    description: '"Calculated" gets treated as "done."',
    shows: "Shows: readiness conditions & downstream state",
  },
];

const stages = [
  { title: "Preparation", description: "Gathers inputs" },
  { title: "Validation", description: "Checks completeness" },
  { title: "Review", description: "Inspects current version" },
  { title: "Approval", description: "Authorizes decision" },
  { title: "Completion / Audit", description: "Finalizes & records" },
];

export default function FrictionSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/payroll-teams/friction.png"
              alt="A payroll team reviewing friction points against controls"
              className="aspect-[501/322] w-full rounded-2xl object-cover shadow-[0_18px_44px_-18px_rgba(8,19,43,0.22)]"
            />
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading
              wrap
              eyebrow="Payroll-team operating reality"
              title="Recognizable friction — never worker blame."
              description="Each friction point connects to a specific control, and the responsibility model keeps every stage distinct."
            />
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {frictions.map((friction) => (
              <div
                key={friction.label}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <h3 className="text-xs font-bold uppercase leading-4 tracking-wide text-yellow-700">
                  {friction.label}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{friction.description}</p>
                <p className="mt-2 text-xs font-semibold leading-4 text-green-600">
                  {friction.shows}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180} className="mt-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {stages.map((stage) => (
              <div
                key={stage.title}
                className="rounded-[10px] border border-slate-200 bg-white p-3.5 text-center"
              >
                <p className="text-xs font-bold leading-5 text-slate-900">{stage.title}</p>
                <p className="text-xs leading-4 text-slate-500">{stage.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
