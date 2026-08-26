import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const modules = [
  {
    title: "Market overview",
    description:
      "Terminology, operating environment, common parties/systems and questions to investigate.",
    handoff: "Coverage / Directory",
    href: "/global-payroll/jurisdiction-coverage",
  },
  {
    title: "Calendars / pay frequency",
    description: "Educational context on pay periods, cutoffs, dates and exceptions.",
    handoff: "Local Payroll Requirements",
    href: "/global-payroll/payroll-requirements",
  },
  {
    title: "Worker / payroll inputs",
    description: "Categories of identity, employment, compensation and change inputs.",
    handoff: "Product Documentation",
    href: "/resources/documentation",
  },
  {
    title: "Calculations / earnings / deductions",
    description: "Concept categories and review questions.",
    handoff: "Local Payroll Requirements",
    href: "/global-payroll/payroll-requirements",
  },
  {
    title: "Adjustments / retroactivity",
    description: "Operational questions and control considerations.",
    handoff: "Docs / Compliance",
    href: "/global-payroll/compliance-workflows",
  },
  {
    title: "Documents / reporting / filings",
    description: "Educational context and evidence questions.",
    handoff: "Local Requirements / Docs",
    href: "/global-payroll/payroll-requirements",
  },
  {
    title: "Payments / currency",
    description: "Operational considerations and roles.",
    handoff: "Authoritative product/coverage source",
    href: "/global-payroll/jurisdiction-coverage",
  },
  {
    title: "Records / evidence / retention",
    description: "Documentation categories, traceability and review considerations.",
    handoff: "Local Requirements / Compliance / Trust",
    href: "/global-payroll/compliance-workflows",
  },
  {
    title: "Approvals / roles",
    description: "Operating-model questions, separation of duties and local ownership.",
    handoff: "Multi-Entity Payroll",
    href: "/global-payroll/multi-entity-payroll",
  },
  {
    title: "Reporting / reconciliation",
    description: "Concepts, variance questions and review patterns.",
    handoff: "Reporting / Docs",
    href: "/product/reporting",
  },
];

export default function ModulesSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Market context &amp; payroll topic modules</Eyebrow>
            <h2 className="mt-3.5 max-w-[480px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
              Ten modules. Each explains, then hands off.
            </h2>
          </Reveal>

          <Reveal
            delay={120}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <img
              src="/images/global-payroll-jurisdiction-guides/modules.png"
              alt="An overhead view of a team working across several laptops"
              loading="lazy"
              className="h-44 w-full object-cover"
            />
            <div className="px-5 py-5">
              <p className="text-sm font-extrabold leading-5 text-brand-dark">
                Explain, never conclude
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                Every module hands the live answer to its authoritative source.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {modules.map((module, index) => (
            <Reveal
              key={module.title}
              delay={index * 40}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-base font-bold leading-6 text-brand-dark">{module.title}</p>
              <p className="mt-2 text-xs leading-5 text-slate-600">{module.description}</p>
              <Link
                href={module.href}
                className="group mt-auto inline-flex w-fit items-center gap-1.5 rounded-[20px] bg-sky-100 px-3 py-1.5 text-xs font-bold leading-4 text-sky-800 transition-colors duration-200 hover:bg-sky-200"
              >
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
                {module.handoff}
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={200}
          className="mt-6 rounded-[10px] border border-l-[3px] border-slate-200 border-l-brand bg-sky-50 px-6 py-5"
        >
          <p className="text-sm leading-6 text-brand-dark">
            Guides do not publish exact rates, thresholds, deadlines, filing obligations or legal
            conclusions unless a governed process establishes source, scope, effective date and
            review rule.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
