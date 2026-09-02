"use client";

import React from "react";
import Image from "next/image";

interface ComparisonRow {
  category: string;
  standardizable: string;
  localSpecific: string;
}

const comparisonData: ComparisonRow[] = [
  {
    category: "Identity",
    standardizable: "Common entity IDs, status, roles, data contracts",
    localSpecific: "Local employer registrations",
  },
  {
    category: "Workflow",
    standardizable:
      "Common stages, exception severity, evidence, approval framework",
    localSpecific: "Local cutoffs, frequencies, operational steps",
  },
  {
    category: "Rules",
    standardizable: "Version control, provenance, testing, effective dating",
    localSpecific: "Local tax / social / wage / benefit rules where supported",
  },
  {
    category: "Approvals",
    standardizable: "Shared policy & escalation logic",
    localSpecific: "Named approvers, thresholds, signatory requirements",
  },
  {
    category: "Payments",
    standardizable: "Common orchestration states",
    localSpecific: "Entity funding account, currency, provider/rail",
  },
  {
    category: "Accounting",
    standardizable: "Canonical dimensions, journal schema",
    localSpecific: "Entity chart of accounts, ERP mapping",
  },
  {
    category: "Reporting",
    standardizable: "Shared definitions, group views",
    localSpecific: "Local statutory outputs, retention obligations",
  },
];

export default function StandardizeVsLocalizeSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Split Layout: Content & Hero Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-6 space-y-4">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span className="text-[#0A8FD0] font-bold">|</span>
              <span>STANDARDIZE VS. LOCALIZE</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
              Standardize the control model. Never the law.
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
              Common workflow, evidence and approval logic create leverage
              across entities. Local tax rules, registrations, signatories and
              statutory outputs stay entity-specific — because they have to.
            </p>
          </div>

          {/* Right Column: Hero Image Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full h-[280px] sm:h-[420px] rounded-3xl overflow-hidden">
              <Image
                src="/images/multi-entity/3.png"
                alt="Global team collaborating around a table with laptops"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#082F49] text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                  <th className="py-4 px-6 w-1/4"></th>
                  <th className="py-4 px-6 w-3/8 text-white">
                    GROUP-STANDARDIZABLE
                  </th>
                  <th className="py-4 px-6 w-3/8 text-white">
                    ENTITY / LOCAL-SPECIFIC
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-[#07243B] bg-[#F5F8FA]">
                      {row.category}
                    </td>
                    <td className="py-4 px-6 font-medium text-[#0A8FD0]">
                      {row.standardizable}
                    </td>
                    <td className="py-4 px-6 font-medium text-slate-500">
                      {row.localSpecific}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
