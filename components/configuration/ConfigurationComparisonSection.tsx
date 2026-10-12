"use client";

import React from "react";

export default function ConfigurationComparisonSection() {
  const configurationIsPoints = [
    "Selecting and versioning supported payroll behavior within governed product/rule boundaries.",
    "A translation of approved business/statutory requirements into testable platform objects.",
    "Effective-dated and scope-aware.",
    "Reviewed for downstream payroll, integration, accounting, payment, security and reporting impact.",
    "Promoted through controlled implementation states.",
  ] as const;

  const configurationIsNotPoints = [
    "Unlimited source-code customization.",
    "A collection of undocumented administrator preferences.",
    "A one-time setup that never changes.",
    "An isolated activity with no effect on other workstreams.",
    "A change that becomes production-ready merely because it saves successfully.",
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4">
        {/* Category Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#0A78C3] font-bold text-sm">/</span>
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0A78C3] uppercase">
            WHAT CONFIGURATION MEANS
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0B192C] text-center tracking-tight mb-10">
          Governed setup, not free-form customization.
        </h2>

        {/* Two Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
          {/* Left Card: Configuration is */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#10B981] font-bold text-sm">✓</span>
              <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
                Configuration is
              </h3>
            </div>
            <div className="divide-y divide-[#E2E8F0]/70 flex-1">
              {configurationIsPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3"
                >
                  <span className="text-[#10B981] text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card: Configuration is not */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#B4444F] text-xs border border-[#B4444F] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                ✕
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
                Configuration is not
              </h3>
            </div>
            <div className="divide-y divide-[#E2E8F0]/70 flex-1">
              {configurationIsNotPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3"
                >
                  <span className="text-[#B4444F] text-[10px] border border-[#B4444F] rounded-full w-3.5 h-3.5 flex items-center justify-center font-bold shrink-0 mt-0.5">
                    ✕
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Alert Banner with Standing Line Div */}
        <div className="w-full max-w-5xl mx-auto bg-[#EEF3F9] rounded-xl p-4 sm:p-5 flex items-stretch gap-4">
          {/* Standing Line Div */}
          <div className="w-[3px] bg-[#1483CE] rounded-full shrink-0" />

          <p className="text-xs sm:text-[13px] text-[#334155] leading-relaxed py-0.5">
            Payroll configuration is the governed setup of payroll structures,
            schedules, pay components, statutory rules, inputs, integrations,
            security, accounting, payment behavior, outputs, and processing
            controls so the payroll engine can execute approved business and
            jurisdiction requirements consistently and reproducibly.
          </p>
        </div>
      </div>
    </div>
  );
}
