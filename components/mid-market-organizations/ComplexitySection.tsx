import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const drivers = [
  {
    title: "Multiple payroll groups",
    description: "Different frequencies, calendars, deadlines and owners, with central visibility.",
    image: "/images/mid-market-organizations/payroll-groups.png",
    alt: "A payroll calendar marked up beside cash",
  },
  {
    title: "More legal entities",
    description: "Records, approvals and reconciliation need scoped entity/payroll-group structure.",
    image: "/images/mid-market-organizations/legal-entities.png",
    alt: "Two colleagues reviewing an entity payroll statement",
  },
  {
    title: "Dedicated payroll/finance/HR roles",
    description: "Role-based preparation, review, approval and finance/HR access.",
    image: "/images/mid-market-organizations/roles.png",
    alt: "A payroll team working together in an office",
  },
  {
    title: "Higher change volume",
    description: "Effective-dated changes and corrections stay trackable with configured approval.",
    image: "/images/mid-market-organizations/change-volume.png",
    alt: "An approver signing off a change on a tablet",
  },
  {
    title: "More connected systems",
    description: "HR, finance, time, identity and payment connections with visible health.",
    image: "/images/mid-market-organizations/connected-systems.png",
    alt: "Financial dashboards open on a laptop",
  },
  {
    title: "More assurance expectations",
    description: "Trust controls, audit records and recurring access reviews.",
    image: "/images/mid-market-organizations/assurance.png",
    alt: "A manager reviewing audit records with a colleague",
  },
];

export default function ComplexitySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Recognize mid-market payroll complexity"
            title="An operating-complexity problem, not a headcount category"
            description="Workforce range is only one input to the guided route — never a badge that defines this page."
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {drivers.map((driver) => (
              <div
                key={driver.title}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200"
              >
                <img src={driver.image} alt={driver.alt} className="aspect-[352/376] w-full object-cover" />
                <div className="flex-1 bg-sky-100/80 px-5 py-4">
                  <h3 className="text-base font-bold leading-5 text-sky-950">
                    {driver.title} <span aria-hidden="true">→</span>
                  </h3>
                  <p className="mt-2 text-sm leading-5 text-zinc-600">{driver.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-7">
          <p className="rounded-lg bg-sky-100 px-5 py-4 text-sm leading-5 text-sky-900">
            Mid-market coordinates repeatable controls across teams, entities and payroll groups — it
            doesn&apos;t add enterprise-scale procurement or governance complexity on its own.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
