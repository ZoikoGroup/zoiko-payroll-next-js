"use client";

import React from "react";

export default function RequirementsTraceabilitySection() {
  const detailsRow1 = [
    {
      label: "REQUIREMENT",
      value: "Eligible hourly workers receive overtime at the approved rule.",
      width: "col-span-12 lg:col-span-6",
    },
    {
      label: "EARNING",
      value: "Overtime",
      width: "col-span-12 sm:col-span-4 lg:col-span-2",
    },
    {
      label: "ELIGIBILITY",
      value: "Hourly population",
      width: "col-span-12 sm:col-span-4 lg:col-span-2",
    },
    {
      label: "PRIORITY / ORDER",
      value: "Approved Sequence",
      width: "col-span-12 sm:col-span-4 lg:col-span-2",
    },
  ] as const;

  const detailsRow2 = [
    {
      label: "SOURCE / AUTHORITY",
      value: "Customer policy + applicable payroll rule review.",
      width: "col-span-12 lg:col-span-6",
    },
    {
      label: "OWNER",
      value: "UK Payroll Lead",
      width: "col-span-12 sm:col-span-4 lg:col-span-2",
    },
    {
      label: "VERSION",
      value: "v3 - reconstructable",
      width: "col-span-12 sm:col-span-4 lg:col-span-4",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 border border-[#E2E8F0] text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Category Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#0A78C3] font-bold text-sm">/</span>
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0A78C3] uppercase">
            REQUIREMENTS-TO-CONFIGURATION TRACEABILITY
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0B192C] text-center tracking-tight mb-10">
          Every configuration decision links back to an
          <br className="hidden sm:inline" /> approved requirement.
        </h2>

        {/* Traceability Card Container */}
        <div className="w-full bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
          {/* Card Header Bar */}
          <div className="bg-[#EEF3F9] px-6 sm:px-8 py-4 border-b border-[#E2E8F0] flex items-center justify-between">
            <div className="flex flex-col sm:items-start gap-1">
              <span className="text-xs sm:text-sm font-bold text-[#0C4773]">
                REQ-UK-0142
              </span>
              <span className="text-xs text-[#64748B]">
                UK · Monthly Payroll
              </span>
            </div>

            {/* Approved Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4F0FA] text-[#124E7C] text-[11px] sm:text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E4F0FA]" />
              <span>Approved</span>
            </div>
          </div>

          {/* Card Body - Details Grid */}
          <div className="p-6 sm:p-8 flex flex-col gap-4">
            {/* Upper Fields Row */}
            <div className="grid grid-cols-12 gap-y-2 gap-x-6">
              {detailsRow1.map((item, idx) => (
                <div key={idx} className={item.width}>
                  <p className="text-[10px] sm:text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs sm:text-[13px] font-bold text-[#0F172A] leading-relaxed">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Lower Fields Row */}
            <div className="grid grid-cols-12 gap-y-4 gap-x-6 pt-2">
              {detailsRow2.map((item, idx) => (
                <div key={idx} className={item.width}>
                  <p className="text-[10px] sm:text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs sm:text-[13px] font-bold text-[#0F172A] leading-relaxed">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Badges / Tags */}
            <div className="pt-4 flex flex-wrap items-center gap-2 border-t border-[#E2E8F0]/60">
              <span className="px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white text-[#0F172A] text-xs font-semibold shadow-2xs">
                Validation case linked
              </span>
              <span className="px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white text-[#0F172A] text-xs font-semibold shadow-2xs">
                Dependency: GL mapping
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
