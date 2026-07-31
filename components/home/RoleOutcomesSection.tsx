"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import ArrowLink from "../ui/ArrowLink";
import Eyebrow from "./Eyebrow";

const roleTabs = [
  {
    key: "payroll-teams",
    label: "Payroll teams",
    title: "Control the complete payroll cycle.",
    description:
      "Prepare payroll, review calculations, resolve exceptions, coordinate approvals, complete processing and maintain clear records.",
    image: "/images/home/payroll-teams.png",
    badges: ["Approved", "Exception"],
  },
  {
    key: "finance-teams",
    label: "Finance teams",
    title: "Get reconciliation-ready payroll costs.",
    description:
      "Review payroll cost summaries, cross-entity exports and reconciliation support without waiting on manual reporting cycles.",
    image: "/images/home/finance-teams.png",
    badges: ["Reconciled", "Exported"],
  },
  {
    key: "hr-teams",
    label: "HR teams",
    title: "Keep employee data payroll-ready.",
    description:
      "Coordinate employee records, absence and time inputs feeding payroll, with clear visibility into what's pending each cycle.",
    image: "/images/home/hr-teams.png",
    badges: ["Synced", "Pending"],
  },
  {
    key: "business-leaders",
    label: "Business leaders",
    title: "See payroll status without chasing updates.",
    description:
      "Get a consistent, cross-jurisdiction view of payroll status, controls and outstanding approvals across the organization.",
    image: "/images/home/business-leaders.png",
    badges: ["On track", "Reviewed"],
  },
  {
    key: "employees",
    label: "Employees",
    title: "Give employees secure self-service.",
    description: "Let employees securely access applicable payslips, payroll history and payroll documents on their own.",
    image: "/images/home/employees.png",
    badges: ["Payslip ready", "Available"],
  },
];

export default function RoleOutcomesSection() {
  const [activeKey, setActiveKey] = useState(roleTabs[0].key);
  const active = roleTabs.find((tab) => tab.key === activeKey) ?? roleTabs[0];

  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Role-based outcomes</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Clearer payroll operations for every authorized stakeholder.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-slate-200" role="tablist">
            {roleTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={activeKey === tab.key}
                onClick={() => setActiveKey(tab.key)}
                className={`relative -mb-px border-b-2 px-1 pb-3 text-sm font-medium transition-colors duration-200 ${
                  activeKey === tab.key
                    ? "border-brand text-brand-dark"
                    : "border-transparent text-slate-500 hover:text-brand-dark"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div key={active.key} className="mt-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-brand-dark">{active.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">{active.description}</p>
              <ArrowLink href="/solutions" className="mt-5">
                Explore solutions by role
              </ArrowLink>
            </div>

            <div className="relative">
              <img src={active.image} alt={active.title} loading="lazy" className="h-auto w-full rounded-xl" />
              <div className="absolute bottom-3 left-3 flex gap-2">
                {active.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-brand-dark shadow-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
