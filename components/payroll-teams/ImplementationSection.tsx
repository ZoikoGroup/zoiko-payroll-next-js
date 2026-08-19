import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  { title: "Discovery", description: "Payroll groups, calendars, roles, sources, approvals and reports." },
  {
    title: "Workflow design",
    description: "Lifecycle stages, rights, issue states and completion conditions.",
  },
  {
    title: "Data & integration",
    description: "Inputs, identifiers, effective dates and reconciliation mapping.",
  },
  { title: "Configuration", description: "Groups, roles, permissions, workflow and controls." },
  {
    title: "Validation / parallel run",
    description: "Test calculations, exceptions, approvals and reconciliation.",
  },
  { title: "Training", description: "Role-based enablement before go-live." },
  { title: "Cutover", description: "Controlled GO/HOLD with authorized activation and hypercare." },
  { title: "Operate", description: "Recurring close review, issue themes and improvement backlog." },
];

export default function ImplementationSection() {
  return (
    <section className="border-t border-slate-200 bg-[#F6F8FC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            wide
            eyebrow="Implementation & adoption"
            title="A structured rollout that moves from discovery to operation with every stage validated, prepared, and ready for controlled cutover."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <ol className="relative border-l border-slate-200 pl-8">
              {steps.map((step) => (
                <li key={step.title} className="relative pb-7 last:pb-0">
                  <span
                    className="absolute -left-[2.4rem] top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-blue-600 bg-white"
                    aria-hidden="true"
                  />
                  <h3 className="text-sm font-bold leading-5 text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{step.description}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/payroll-teams/implementation.png"
              alt="Implementation progress tracked across every stage"
              className="aspect-[559/438] w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
