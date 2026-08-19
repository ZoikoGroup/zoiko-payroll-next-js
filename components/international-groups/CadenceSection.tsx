import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const cadences = [
  {
    label: "Each cycle",
    description: "Readiness, exceptions, approvals, provider/export state, completion and reconciliation.",
  },
  {
    label: "Weekly / during close",
    description: "Blockers, provider incidents, approver coverage and dependencies.",
  },
  {
    label: "Monthly",
    description: "Reconciliation trends, recurring exceptions and connector health.",
  },
  {
    label: "Quarterly",
    description: "Privileged access, provider review, evidence freshness and coverage changes.",
  },
];

export default function CadenceSection() {
  return (
    <section className="border-t border-[#E3E7F0] bg-[#F5F8FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/international-groups/cadence.png"
              alt="A group payroll review meeting in progress"
              className="aspect-[420/325] w-full rounded-2xl object-cover shadow-[0_18px_44px_-18px_rgba(8,19,43,0.22)]"
            />
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading
              wrap
              eyebrow="Operating cadence"
              title="What gets reviewed, and how often"
              description="A defined review rhythm keeps payroll readiness, exceptions, approvals, controls, and evidence visible at every stage"
            />
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cadences.map((cadence) => (
              <div
                key={cadence.label}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-5"
              >
                <h3 className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                  {cadence.label}
                </h3>
                <p className="mt-3 text-sm leading-5 text-slate-500">{cadence.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
