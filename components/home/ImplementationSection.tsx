import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const implementationSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Scope entities, jurisdictions, payroll calendars, users, controls and integrations.",
  },
  {
    number: "02",
    title: "Configure",
    description: "Set approved payroll rules, workflows, roles, access and jurisdiction settings.",
  },
  {
    number: "03",
    title: "Prepare data",
    description: "Map, validate, cleanse and securely transfer required information.",
  },
  {
    number: "04",
    title: "Validate",
    description: "Test calculations, records, workflows, reports, access and integrations.",
  },
  {
    number: "05",
    title: "Parallel test",
    description: "Compare approved outputs with the existing payroll process where appropriate.",
  },
  {
    number: "06",
    title: "Launch",
    description: "Complete controlled cutover, authorization, user activation and production monitoring.",
  },
  {
    number: "07",
    title: "Optimize",
    description: "Review outcomes, exceptions, support demand and workflow improvements.",
  },
];

export default function ImplementationSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Implementation and migration</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Move to Zoiko Payroll through a controlled implementation.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Every implementation is scoped around workforce structure, payroll data, jurisdictions,
            approval responsibilities, integrations, reporting requirements, testing and cutover
            controls.
          </p>
        </Reveal>

        <div className="mt-12 rounded-2xl border border-[#DCE6EC] bg-white p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-7 lg:gap-0">
            {implementationSteps.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 50}
                className="lg:px-6 lg:first:pl-0 lg:last:pr-0 lg:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-[#DCE6EC]"
              >
                <span className="text-xs font-semibold text-brand">{step.number}</span>
                <h3 className="mt-2 text-sm font-semibold text-brand-dark">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
