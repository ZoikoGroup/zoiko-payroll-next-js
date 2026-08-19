import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const conditions = [
  {
    label: "Multiple markets",
    description: "Different calendars, local requirements and delivery models.",
    shows: "Shows: market readiness & authority links",
  },
  {
    label: "Multiple legal entities",
    description: "Ownership, records, approvals and accounting scope differ.",
    shows: "Shows: explicit entity hierarchy",
  },
  {
    label: "Regional teams",
    description: "Coordination sits above local execution.",
    shows: "Shows: regional queues, not override",
  },
  {
    label: "Local providers",
    description: "Responsibility and delivery windows vary by market.",
    shows: "Shows: provider register & support owner",
  },
  {
    label: "Different currencies",
    description: "Group reporting needs a declared basis.",
    shows: "Shows: local, reporting & FX metadata",
  },
  {
    label: "Acquisitions / new entities",
    description: "Scope changes over time.",
    shows: "Shows: onboarding & historical continuity",
  },
];

export default function ConditionsSection() {
  return (
    <section className="border-t border-[#E3E7F0] bg-[#F5F8FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeading
              wrap
              eyebrow="Recognize international group payroll conditions"
              title="The signals that mean you're coordinating a group, not running one payroll"
              description="Each condition is shown as what the platform surfaces — never as a flag or a fixed employee threshold."
            />
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/international-groups/conditions.png"
              alt="A group payroll team reviewing market plans together"
              className="aspect-[520/403] w-full rounded-2xl object-cover shadow-[0_18px_44px_-18px_rgba(8,19,43,0.22)]"
            />
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-11">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {conditions.map((condition) => (
              <div
                key={condition.label}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-5"
              >
                <h3 className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                  {condition.label}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{condition.description}</p>
                <p className="mt-2 text-xs font-semibold leading-4 text-green-600">
                  {condition.shows}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
