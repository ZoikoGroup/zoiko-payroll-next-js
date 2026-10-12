import React from "react";
import Link from "next/link";
import { Layers, Globe, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./Primitives";

const solutions = [
  {
    icon: Layers,
    title: "Core payroll processing",
    description:
      "Automate calculations, approvals, and payouts for salaried and hourly teams in a single pay run.",
    href: "/product/payroll-processing",
  },
  {
    icon: Globe,
    title: "Multi-country payroll",
    description:
      "Run payroll across markets from one place, with local tax and statutory logic applied automatically.",
    href: "/solutions/multi-jurisdiction",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & filing",
    description:
      "Stay current on statutory deductions and filings as regulation changes, with a clear audit trail.",
    href: "/global-payroll/compliance-workflows",
  },
] as const;

export default function SolutionsSection() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:gap-12">
        <SectionHeading
          eyebrow="Solutions"
          title="Explore how Zoiko Payroll can support your team"
          body="Whether you're running payroll in one country or a dozen, Zoiko Payroll adapts to how your organization is actually structured."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ icon: Icon, title, description, href }) => (
            <div
              key={title}
              className="flex flex-col gap-3.5 rounded-2xl border border-neutral-200 bg-white px-6 py-7 shadow-[0px_12px_32px_0px_rgba(15,30,46,0.06)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-100">
                <Icon className="h-5 w-5 text-sky-500" strokeWidth={1.6} />
              </span>
              <h3 className="text-base font-extrabold text-slate-900">
                {title}
              </h3>
              <p className="text-sm leading-6 text-gray-500">{description}</p>
              <Link
                href={href}
                className="text-sm font-bold text-sky-700 hover:text-sky-800"
              >
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
