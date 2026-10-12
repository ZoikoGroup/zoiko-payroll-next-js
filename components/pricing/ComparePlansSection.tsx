"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface ComparisonRow {
  capability: string;
  core: string;
  professional: string;
  business: string;
  enterprise: string;
}

const comparisonData: ComparisonRow[] = [
  {
    capability: "Monthly list price",
    core: "$8 / worker",
    professional: "$15 / worker",
    business: "$25 / worker",
    enterprise: "Custom",
  },
  {
    capability: "Annual prepaid",
    core: "$80 / worker / year",
    professional: "$150 / worker / year",
    business: "$250 / worker / year",
    enterprise: "Contracted",
  },
  {
    capability: "Workers",
    core: "Up to 50",
    professional: "Up to 250",
    business: "Up to 1,000",
    enterprise: "Contracted",
  },
  {
    capability: "Legal entities",
    core: "1",
    professional: "Up to 3",
    business: "Up to 10",
    enterprise: "Contracted",
  },
  {
    capability: "Production jurisdictions",
    core: "1",
    professional: "Up to 3",
    business: "Up to 10",
    enterprise: "Contracted",
  },
  {
    capability: "Advanced approvals",
    core: "—",
    professional: "Included",
    business: "Included",
    enterprise: "Included",
  },
  {
    capability: "Custom reports",
    core: "—",
    professional: "Limited",
    business: "Included",
    enterprise: "Included",
  },
  {
    capability: "Accounting integrations",
    core: "Export",
    professional: "Standard",
    business: "Advanced",
    enterprise: "Contracted",
  },
  {
    capability: "API",
    core: "—",
    professional: "Limited",
    business: "Full",
    enterprise: "Full + extensions",
  },
  {
    capability: "Webhooks",
    core: "—",
    professional: "—",
    business: "Included",
    enterprise: "Included",
  },
  {
    capability: "SAML SSO",
    core: "—",
    professional: "—",
    business: "Included",
    enterprise: "Included",
  },
  {
    capability: "SCIM",
    core: "—",
    professional: "—",
    business: "—",
    enterprise: "Included",
  },
  {
    capability: "Parallel runs",
    core: "—",
    professional: "1",
    business: "Multiple",
    enterprise: "Contracted",
  },
  {
    capability: "Support",
    core: "Standard",
    professional: "Priority",
    business: "Premium",
    enterprise: "Contracted SLA",
  },
];

const featureCategories = [
  "Payroll & Calculations",
  "Approvals & Governance",
  "Entities & Global Operations",
  "Reporting & Reconciliation",
  "Automation",
  "Integrations & API",
  "Security & Identity",
  "Zoiko Payroll Assist",
  "Testing & Parallel Runs",
  "Implementation, Support & Optional Services",
];

export default function ComparePlansSection() {
  const [openCategories, setOpenCategories] = useState<Record<number, boolean>>(
    {},
  );

  const toggleCategory = (idx: number) => {
    setOpenCategories((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const expandAll = () => {
    const all: Record<number, boolean> = {};
    featureCategories.forEach((_, idx) => {
      all[idx] = true;
    });
    setOpenCategories(all);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              COMPARE PLANS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            Quick comparison, then every detail.
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
            Start with the executive matrix. Expand any domain below for the
            full feature-by-feature breakdown.
          </p>
        </div>

        {/* Matrix Table Container */}
        <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#EFF4F7]/60 border-b border-slate-200/80 text-[11px] font-extrabold uppercase tracking-wider text-[#07243B]">
                  <th className="py-4 px-6">Capability</th>
                  <th className="py-4 px-6">Core</th>
                  <th className="py-4 px-6 text-[#0A78C3]">Professional</th>
                  <th className="py-4 px-6">Business</th>
                  <th className="py-4 px-6">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="py-3.5 px-6 font-bold text-[#07243B]">
                      {row.capability}
                    </td>
                    <td className="py-3.5 px-6 text-slate-600">{row.core}</td>
                    <td className="py-3.5 px-6 font-semibold text-[#07243B]">
                      {row.professional}
                    </td>
                    <td className="py-3.5 px-6 text-slate-600">
                      {row.business}
                    </td>
                    <td className="py-3.5 px-6 text-slate-600">
                      {row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* See Full Feature Comparison Link */}
        <div className="text-center pt-2">
          <button className="text-xs sm:text-sm font-bold text-[#0A78C3] hover:underline inline-flex items-center gap-1 cursor-pointer">
            See full feature comparison ↓
          </button>
        </div>

        {/* Full Feature Comparison Accordion Section */}
        <div className="space-y-4 pt-6">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
            <h3 className="text-sm sm:text-base font-extrabold text-[#07243B]">
              Full feature comparison
            </h3>
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded-lg border-2 border-[#DDE5EA] hover:bg-slate-200 text-[#07243B] text-xs font-bold transition-colors cursor-pointer"
            >
              Expand all
            </button>
          </div>

          <div className="space-y-3">
            {featureCategories.map((category, idx) => {
              const isOpen = openCategories[idx] || false;
              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-[#DDE5EA] rounded-2xl overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => toggleCategory(idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                      {category}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-0 border-t border-slate-100 mt-1">
                      <p className="text-xs text-slate-500 font-medium leading-relaxed pt-3">
                        Detailed breakdown and feature specifications for{" "}
                        {category.toLowerCase()} across Core, Professional,
                        Business, and Enterprise plans.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
