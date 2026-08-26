import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { ArrowRightIcon } from "../ui/icons";

const routes = [
  {
    trigger: "2+ jurisdictions, entities or payroll groups",
    label: "Global Implementation",
    href: "/product/implementation",
  },
  {
    trigger: "Market availability uncertainty",
    label: "Coverage / Directory",
    href: "/global-payroll/country-territory-directory",
  },
  {
    trigger: "Local requirement questions",
    label: "Local Requirements",
    href: "/global-payroll/compliance-workflows",
  },
  {
    trigger: "Cross-entity authority",
    label: "Multi-Entity Payroll",
    href: "/solutions/multi-jurisdiction",
  },
  {
    trigger: "Compliance review/evidence state",
    label: "Compliance Workflows",
    href: "/global-payroll/compliance-workflows",
  },
  {
    trigger: "Global reporting/variance",
    label: "Global Reporting",
    href: "/global-payroll/reporting",
  },
];

export default function GlobalImplementationSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Global &amp; multi-market implementation</Eyebrow>
          <h2 className="mt-3.5 max-w-[784px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            A planned wave never creates its own availability
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {routes.map((route, index) => (
              <div
                key={route.trigger}
                className={`flex flex-col items-start gap-2 border-slate-200 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${
                  index < routes.length - 1 ? "border-b" : ""
                } ${index % 2 === 0 ? "lg:border-r" : ""} ${
                  index >= routes.length - 2 ? "lg:border-b-0" : "lg:border-b"
                }`}
              >
                <span className="text-sm font-bold leading-5 text-[#0A2E4B]">{route.trigger}</span>
                <Link
                  href={route.href}
                  className="group inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-sky-700 transition-colors duration-200 hover:text-[#0A2E4B]"
                >
                  {route.label}
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-4 rounded-[10px] border border-orange-200 bg-orange-100 px-4 py-3.5">
          <p className="text-xs leading-5 text-yellow-800">
            <span className="font-bold text-yellow-900">Multi-market boundary:</span> a planned
            implementation wave cannot create jurisdiction availability, local legal authority,
            product capability or contractual support. The current-status route is exposed before
            any implementation assumption is relied on.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
