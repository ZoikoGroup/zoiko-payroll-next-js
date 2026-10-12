"use client";

import React from "react";

interface PlanRow {
  dimension: string;
  core: string;
  professional: string;
  business: string;
  enterprise: string;
}

const planData: PlanRow[] = [
  {
    dimension: "Support",
    core: "Standard",
    professional: "Priority",
    business: "Premium",
    enterprise: "Contracted SLA",
  },
  {
    dimension: "Parallel-run workspace",
    core: "Not standard",
    professional: "1 workspace",
    business: "Multiple workspaces",
    enterprise: "Contracted",
  },
  {
    dimension: "Managed Payroll Ops",
    core: "Optional / eligibility",
    professional: "Optional / jurisdiction dependent",
    business: "Optional / jurisdiction dependent",
    enterprise: "Contracted",
  },
  {
    dimension: "Filing & remittance",
    core: "Check availability",
    professional: "Check availability",
    business: "Check availability",
    enterprise: "Contracted / dependent",
  },
  {
    dimension: "Implementation",
    core: "Separately scoped",
    professional: "Separately scoped",
    business: "Separately scoped",
    enterprise: "Contracted program",
  },
];

export default function IncludedByPlanSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF4F7] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block with Right-aligned Subtext */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                INCLUDED-BY-PLAN
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
              How service depth changes across plans.
            </h2>
          </div>

          {/* Right Subtext */}
          <p className="text-xs text-slate-400 font-medium pb-1 max-w-xs md:text-right">
            A public orientation layer — the catalog remains authoritative.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xs overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#07243B] text-white text-[11px] font-bold uppercase tracking-wider">
                <th className="py-4 px-6 rounded-tl-2xl">Dimension</th>
                <th className="py-4 px-6">Core</th>
                <th className="py-4 px-6">Professional</th>
                <th className="py-4 px-6">Business</th>
                <th className="py-4 px-6 rounded-tr-2xl">Enterprise</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-100">
              {planData.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/50 transition-colors text-xs sm:text-sm"
                >
                  <td className="py-4 px-6 font-bold text-[#07243B]">
                    {row.dimension}
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-medium">
                    {row.core}
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-medium">
                    {row.professional}
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-medium">
                    {row.business}
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-medium">
                    {row.enterprise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
