"use client";

import React from "react";
import Image from "next/image";

export default function ConfigurationHierarchySection() {
  const tableData = [
    {
      scopeLevel: "Global / tenant",
      typicalDecisions:
        "Shared naming, general processing conventions, security framework, common reference objects, enterprise defaults where supported.",
    },
    {
      scopeLevel: "Jurisdiction / country",
      typicalDecisions:
        "Statutory/tax rules, required outputs, local calendars/parameters, country-specific payroll behavior.",
    },
    {
      scopeLevel: "Legal entity",
      typicalDecisions:
        "Employer registrations/references, entity-specific payroll/ accounting/payment context, local ownership.",
    },
    {
      scopeLevel: "Payroll / pay group",
      typicalDecisions:
        "Frequency, period schedule, worker population, run categories, processing cutoff, payroll-specific controls.",
    },
    {
      scopeLevel: "Worker population",
      typicalDecisions:
        "Who receives a pay component or rule, based on supported eligibility attributes.",
    },
    {
      scopeLevel: "Pay component",
      typicalDecisions:
        "Earning, deduction, benefit, employer cost, adjustment, input, calculation/ order, accounting, payslip/report behavior.",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Category Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#0A78C3] font-bold text-sm">/</span>
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0A78C3] uppercase">
            CONFIGURATION HIERARCHY
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0B192C] text-center tracking-tight mb-3">
          Every decision has a scope — global, local, or
          <br className="hidden sm:inline" /> somewhere between.
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#64748B] text-center max-w-3xl leading-relaxed mb-12">
          The interface always makes inheritance explicit: whether a value is
          inherited, locally overridden, system/statutory controlled, or not
          applicable — never implied by visual proximity alone.
        </p>

        {/* Main Content Grid: Left Image Box + Right Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 w-full items-center">
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full h-[320px] sm:h-[320px] lg:h-[342px] rounded-2xl overflow-hidden">
              <Image
                src="/images/configuration/1.png"
                alt="Presentation board showing business analytics in a corporate meeting"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Right Column: Hierarchy Table */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2E8F0] shadow-xs p-6">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E2E8F0] text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase">
                    <th className="pb-4 pr-4 font-semibold w-1/5">
                      SCOPE LEVEL
                    </th>
                    <th className="pb-4 font-semibold w-4/5">
                      TYPICAL DECISIONS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]/70 text-xs sm:text-[13px]">
                  {tableData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-4 pr-4 font-bold text-[#0F172A] align-top whitespace-nowrap">
                        {row.scopeLevel}
                      </td>
                      <td className="py-4 text-[#64748B] leading-relaxed align-top">
                        {row.typicalDecisions}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
