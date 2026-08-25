import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { ArrowRightIcon } from "../ui/icons";

const areas = [
  { label: "Users / employee records", href: "/resources/help-center/users" },
  { label: "Payroll runs", href: "/resources/help-center/payroll-runs" },
  { label: "Approvals", href: "/resources/help-center/approvals" },
  { label: "Adjustments", href: "/resources/help-center/adjustments" },
  { label: "Integrations", href: "/resources/help-center/integrations" },
  { label: "Reporting", href: "/resources/help-center/reporting" },
  { label: "Global Payroll", href: "/resources/help-center/global-payroll" },
  { label: "Implementation", href: "/resources/help-center/implementation" },
];

const featured = [
  { caption: "Resolving a validation blocker", image: "/images/help-center/validation-blocker.png" },
  { caption: "Setting up an approval role", image: "/images/help-center/approval-role.png" },
  { caption: "Reading a reconciliation report", image: "/images/help-center/reconciliation-report.png" },
];

export default function BrowseByAreaSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Browse by product area</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Routed to the surface you actually work with.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, index) => (
            <Reveal key={area.href} delay={index * 40}>
              <Link
                href={area.href}
                className="group flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10"
              >
                {area.label}
                <ArrowRightIcon className="h-4 w-4 shrink-0 text-brand transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {featured.map((item, index) => (
            <Reveal key={item.caption} delay={index * 60}>
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <p className="absolute bottom-3 left-4 text-sm font-medium text-white">{item.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
