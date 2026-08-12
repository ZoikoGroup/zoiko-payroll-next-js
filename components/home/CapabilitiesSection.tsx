import Reveal from "../ui/Reveal";
import ArrowLink from "../ui/ArrowLink";
import Eyebrow from "./Eyebrow";

const capabilities = [
  {
    title: "Payroll calculation and processing",
    description:
      "Manage payroll periods, earnings, deductions, adjustments, calculations, reviews, approvals and completion in one controlled workflow.",
    tags: ["Structured cycles", "Configurable inputs"],
    linkLabel: "Payroll processing",
    href: "/payroll-processing",
    image: "/images/home/payroll-processing.png",
  },
  {
    title: "Reviews and approvals",
    description: "Establish clear review responsibilities so payroll does not progress without required authorization.",
    tags: ["Role-based stages", "Recorded history"],
    linkLabel: "Payroll approvals",
    href: "/payroll-approvals",
    image: "/images/home/approvals-2.png",
  },
  {
    title: "Deductions and adjustments",
    description: "Manage recurring and one-time deductions, reimbursements, corrections and approved payroll changes.",
    tags: ["Effective dates", "Change history"],
    linkLabel: "Deductions and adjustments",
    href: "/product/deductions",
    image: "/images/home/deductions.png",
  },
  {
    title: "Employee records and self-service",
    description:
      "Give authorized teams and employees secure access to applicable payslips, payroll history and payroll documents.",
    tags: ["Payslips", "Secure self-service"],
    linkLabel: "Employee self-service",
    href: "/employee-payroll-records",
    image: "/images/home/employee-records.png",
  },
  {
    title: "Reporting and operational visibility",
    description:
      "Review payroll summaries, cross-entity and jurisdiction views, exports, reconciliation support and audit records.",
    tags: ["Summaries", "Exports"],
    linkLabel: "Payroll reporting",
    href: "/product/reporting",
    image: "/images/home/reporting.png",
  },
  {
    title: "Compliance workflows",
    description: "Coordinate jurisdiction-specific configurations, review processes, documentation and traceable decisions.",
    tags: ["Local workflows", "Evidence records"],
    linkLabel: "Compliance workflows",
    href: "/product/compliance",
    image: "/images/home/compliance.png",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Core platform capabilities</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            The controls required to run payroll with confidence.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 60}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10 sm:flex-row">
                <img
                  src={capability.image}
                  alt={capability.title}
                  loading="lazy"
                  className="h-48 w-full shrink-0 object-cover sm:h-auto sm:w-50"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold text-brand-dark">{capability.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{capability.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {capability.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowLink href={capability.href} className="mt-3">
                    {capability.linkLabel}
                  </ArrowLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 border-t border-slate-200 pt-8">
          <ArrowLink href="/product">Explore all capabilities</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
