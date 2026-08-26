import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { ArrowRightIcon } from "../ui/icons";

const areas = [
  {
    title: "Payroll Processing",
    description: "Cycles, calculations, calendars.",
    count: "38 releases",
    href: "/product/payroll-processing",
  },
  {
    title: "Approvals",
    description: "Workflow, delegation, sign-off changes.",
    count: "21 releases",
    href: "/product/payroll-approvals",
  },
  {
    title: "Deductions & Adjustments",
    description: "Recurring/one-time change handling.",
    count: "14 releases",
    href: "/product/deductions",
  },
  {
    title: "Employee Payroll Records",
    description: "Payslips, history, self-service.",
    count: "17 releases",
    href: "/product/employee-payroll-records",
  },
  {
    title: "Reporting & Analytics",
    description: "Exports, reconciliation, insights.",
    count: "26 releases",
    href: "/product/reporting",
    authority: { label: "Current Reporting", href: "/product/reporting" },
  },
  {
    title: "Integrations",
    description: "HRIS, finance, identity, API.",
    count: "33 releases",
    href: "/product/integrations",
  },
  {
    title: "Security & Trust",
    description: "Access, MFA, audit changes.",
    count: "12 releases",
    href: "/product/security",
    authority: { label: "Security & Trust evidence", href: "/product/security" },
  },
  {
    title: "Implementation",
    description: "Migration, testing, launch tooling.",
    count: "9 releases",
    href: "/product/implementation",
    authority: { label: "Current Implementation", href: "/product/implementation" },
  },
  {
    title: "Global Payroll",
    description: "Verified jurisdiction scope only — never inferred availability.",
    count: "15 releases",
    href: "/global-payroll",
  },
];

export default function ProductAreasSection() {
  return (
    <section className="border-t border-[#DCE6EC] bg-[#F8FAFC] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Product-area collections</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-tight sm:text-3xl tracking-tight text-brand-dark">
              Release history per area — authority boundaries preserved
            </h2>
          </Reveal>

          <Reveal delay={100} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/images/release-notes/product-areas.png"
              alt="Reviewing changes organized by product area"
              loading="lazy"
              className="h-44 w-full object-cover"
            />
            <div className="px-5 pb-5 pt-4">
              <p className="text-sm font-extrabold text-brand-dark">Nine areas, no fake categories</p>
              <p className="mt-0.5 text-xs leading-5 text-slate-600">
                Every count shown is authoritative — empty areas aren&apos;t padded.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <Reveal key={area.title} delay={(index % 3) * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-colors duration-200 hover:border-brand/30">
                <Link href={area.href} className="text-base font-bold text-brand-dark transition-colors duration-200 hover:text-brand">
                  {area.title}
                </Link>
                <p className="mt-1.5 text-sm leading-5 text-slate-600">
                  {area.description}
                  {area.authority ? (
                    <>
                      {" "}
                      <Link
                        href={area.authority.href}
                        className="group inline-flex items-center gap-1 text-xs font-bold text-brand transition-colors duration-200 hover:text-brand-dark"
                      >
                        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                        {area.authority.label}
                      </Link>
                    </>
                  ) : null}
                </p>
                <span className="mt-4 inline-flex w-fit rounded-full bg-[#E4EFF7] px-2.5 py-1 text-xs font-semibold text-brand-dark">
                  {area.count}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
