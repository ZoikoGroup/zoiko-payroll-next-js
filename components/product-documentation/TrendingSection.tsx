import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { LockIcon, CheckSquareIcon, ChartIcon, DatabaseIcon, ClockIcon } from "../ui/icons";

const trending = [
  { icon: LockIcon, label: "Access & MFA activation", href: "/product/security" },
  { icon: CheckSquareIcon, label: "Approval delegation setup", href: "/product/payroll-approvals" },
  { icon: ChartIcon, label: "Reporting export changes", href: "/product/reporting" },
  { icon: DatabaseIcon, label: "Directory / HRIS sync", href: "/product/integrations" },
  { icon: ClockIcon, label: "Cycle stuck in Validating", href: "/resources/help-center/validate" },
  { icon: CheckSquareIcon, label: "API webhook retry policy", href: "/product/integrations" },
];

const trustFields = [
  { label: "Source owner", value: "Docs — Payroll Platform" },
  { label: "Content version", value: "v14.2" },
  { label: "Last verified", value: "Aug 12, 2026" },
  { label: "Review state", value: "Current" },
  { label: "Correction history", value: "Auditable" },
];

export default function TrendingSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Eyebrow>Trending in documentation</Eyebrow>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {trending.map((item, index) => (
              <Reveal key={item.label} delay={index * 40}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md hover:shadow-brand/10"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <item.icon className="h-4 w-4" />
                  </span>
                  {item.label}
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="rounded-2xl bg-brand-dark p-6 text-white">
            <h3 className="text-base font-semibold text-white">Documentation you can trust</h3>
            <dl className="mt-4 space-y-3">
              {trustFields.map((field) => (
                <div key={field.label} className="flex items-center justify-between gap-4 text-sm">
                  <dt className="text-slate-400">{field.label}</dt>
                  <dd className="font-medium text-white">{field.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
