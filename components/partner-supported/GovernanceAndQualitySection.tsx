"use client";

import React from "react";

interface GovernanceCard {
  tag: string;
  description: string;
}

const governanceItems: GovernanceCard[] = [
  {
    tag: "DUE DILIGENCE",
    description:
      "Approved partners are assessed before onboarding to the delivery model.",
  },
  {
    tag: "SECURITY & PRIVACY",
    description:
      "Data handling requirements are defined through contractual and security controls.",
  },
  {
    tag: "SERVICE READINESS",
    description:
      "Country and service scope is activated only after implementation and readiness checks.",
  },
  {
    tag: "PERFORMANCE OVERSIGHT",
    description:
      "Service quality and incidents are monitored under the applicable operating agreement.",
  },
  {
    tag: "CHANGE GOVERNANCE",
    description:
      "Material service, regulatory and integration changes follow governed change control.",
  },
  {
    tag: "CONTINUITY",
    description:
      "Continuity and transition plans are maintained for critical payroll services.",
  },
];

export default function GovernanceAndQualitySection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>GOVERNANCE AND QUALITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] max-w-2xl font-bold tracking-tight text-[#07243B] leading-tight">
            Partners are qualified. Service is monitored.
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 max-w-xl font-medium leading-relaxed">
            Approved partners are assessed, onboarded and reviewed under a
            defined governance model — not selected informally per market.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {governanceItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-all space-y-3 flex flex-col justify-start"
            >
              <div className="text-[11px] font-bold text-[#1D74A2] tracking-wider font-mono uppercase">
                {item.tag}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
