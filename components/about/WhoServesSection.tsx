"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { DatabaseIcon, ChartIcon, UserIcon, GridIcon, LockIcon, RefreshIcon } from "../ui/icons";

const audiences = [
  {
    key: "payroll-teams",
    icon: DatabaseIcon,
    title: "Payroll teams",
    description: "Prepare, review, resolve exceptions, complete cycles.",
    detailTitle: "Prepare payroll, review calculations, resolve exceptions",
    detailDescription: "Coordinate approvals, complete cycles, and maintain clear records.",
  },
  {
    key: "finance-teams",
    icon: ChartIcon,
    title: "Finance teams",
    description: "Structured oversight of totals and approvals.",
    detailTitle: "Strengthen totals, reconciliation and oversight",
    detailDescription: "Review payroll costs and reconcile against financial records with confidence.",
  },
  {
    key: "hr-teams",
    icon: UserIcon,
    title: "HR and people teams",
    description: "Coordinate authorized employee changes.",
    detailTitle: "Keep employee data payroll-ready",
    detailDescription: "Coordinate authorized employee changes so payroll records stay aligned.",
  },
  {
    key: "business-leaders",
    icon: GridIcon,
    title: "Business leaders",
    description: "See completion and material exceptions.",
    detailTitle: "See payroll status without chasing updates",
    detailDescription: "Understand completion, exceptions and risk without operational noise.",
  },
  {
    key: "it-security",
    icon: LockIcon,
    title: "IT, security and procurement",
    description: "Assess access, architecture, governance.",
    detailTitle: "Assess access, architecture and governance",
    detailDescription: "Review authentication, permissions, hosting and controls before approval.",
  },
  {
    key: "employees",
    icon: RefreshIcon,
    title: "Employees",
    description: "Access payslips and payroll history.",
    detailTitle: "Give employees secure self-service",
    detailDescription: "Let employees securely access applicable payslips and payroll history.",
  },
];

export default function WhoServesSection() {
  const [activeKey, setActiveKey] = useState(audiences[0].key);
  const active = audiences.find((a) => a.key === activeKey) ?? audiences[0];

  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Who Zoiko Payroll serves</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Built for the people accountable for payroll outcomes.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => {
            const isActive = audience.key === activeKey;
            return (
              <Reveal key={audience.key} delay={index * 60}>
                <button
                  type="button"
                  onClick={() => setActiveKey(audience.key)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                    isActive
                      ? "border-brand bg-brand/5 shadow-md shadow-brand/10"
                      : "border-slate-200 bg-white hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10"
                  }`}
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <audience.icon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-brand-dark">{audience.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{audience.description}</p>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100} className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold text-brand-dark">{active.detailTitle}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{active.detailDescription}</p>
        </Reveal>

        <Reveal delay={140} className="mt-6 text-sm leading-relaxed text-slate-500">
          Growing businesses formalizing payroll controls · Mid-market organizations consolidating
          expanding payroll operations · Enterprises requiring structured governance, roles,
          integrations, and assurance · Multi-entity and international groups · Organizations replacing
          fragmented, manual, or legacy payroll processes · Zoiko One customers and organizations
          seeking a standalone payroll platform.
        </Reveal>
      </div>
    </section>
  );
}
