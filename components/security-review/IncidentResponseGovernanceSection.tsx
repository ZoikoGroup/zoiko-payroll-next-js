"use client";

import React from "react";

interface GovernanceCategory {
  title: string;
  items: string[];
}

const governanceCategories: GovernanceCategory[] = [
  {
    title: "Incident response",
    items: [
      "Governed triage, containment and recovery process",
      "Legally required notifications follow contractual/privacy terms",
      "Live availability incidents publish on System Status",
    ],
  },
  {
    title: "Business continuity & DR",
    items: [
      "Documented resilience governance and recovery approach",
      "RTO/RPO disclosed only where approved for external sharing",
      "Backup encryption follows the approved control model",
    ],
  },
  {
    title: "Third parties & AI governance",
    items: [
      "Connected/Partner-Supported providers retain explicit responsibility",
      "AI feature boundaries and data controls disclosed where approved",
      "Customer payroll data is never sent to unapproved AI tools",
    ],
  },
];

export default function IncidentResponseGovernanceSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF4F7] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              INCIDENT RESPONSE, RESILIENCE & GOVERNANCE
            </span>
          </div>

          {/* Title (31px) */}
          <h2 className="text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight max-w-xl">
            Preparedness you can verify, not just promises.
          </h2>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {governanceCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-6 hover:border-slate-300 transition-colors"
            >
              {/* Category Title */}
              <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
                {category.title}
              </h3>

              {/* List Items separated by subtle lines */}
              <div className="flex-1 flex flex-col justify-between">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="pb-1 border-b border-slate-100 last:border-none last:pb-0"
                  >
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
