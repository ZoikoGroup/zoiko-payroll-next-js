"use client";

import React from "react";

const modelPills = [
  "System of record",
  "Derived in payroll",
  "Synchronized copy",
  "Not synchronized",
];

export default function SourceOfTruthSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Tag Line */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
            <span className="w-3 h-0.5 bg-[#2F6FED]" />
            <span>SOURCE-OF-TRUTH + DIRECTIONALITY MODEL</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-[26px] font-bold text-[#0F172A] tracking-tight max-w-2xl">
            Direction is defined per data domain — never a global
            "bi-directional" claim.
          </h2>
        </div>

        {/* Interactive / Visual Architecture Diagram Container */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
            {/* HRIS / HCM Box */}
            <div className="w-full lg:w-72 bg-[#F6F8FC] border border-slate-200/70 rounded-xl p-6 text-center space-y-2 shrink-0">
              <h3 className="text-sm font-bold text-[#0F172A]">HRIS / HCM</h3>
              <p className="text-[11px] text-[#5B646B] leading-relaxed">
                Worker identity, employment relationship, org context
              </p>
            </div>

            {/* Middle Flow Indicators */}
            <div className="flex flex-col items-center gap-2.5 w-full max-w-sm px-2">
              {/* Inbound Badge 1 */}
              <div className="w-full py-1.5 px-3 rounded-lg bg-[#E8F0FF] border border-[#BAE6FD] text-[11px] sm:text-xs font-mono font-medium text-[#2F6FED] text-center shadow-xs">
                &rarr; Worker identity (inbound)
              </div>

              {/* Inbound Badge 2 */}
              <div className="w-full py-1.5 px-3 rounded-lg bg-[#E8F0FF] border border-[#BAE6FD] text-[11px] sm:text-xs font-mono font-medium text-[#2F6FED] text-center shadow-xs">
                &rarr; Employment relationship (inbound)
              </div>

              {/* Outbound Badge */}
              <div className="w-full py-1.5 px-3 rounded-lg bg-[#E8F0FF] border border-[#BAE6FD] text-[11px] sm:text-xs font-mono font-medium text-[#2F6FED] text-center shadow-xs">
                &larr; Payroll result summary (outbound, selected)
              </div>
            </div>

            {/* Zoiko Payroll Box */}
            <div className="w-full lg:w-72 bg-[#F6F8FC] border border-slate-200/70 rounded-xl p-6 text-center space-y-2 shrink-0">
              <h3 className="text-sm font-bold text-[#0F172A]">
                Zoiko Payroll
              </h3>
              <p className="text-[11px] text-[#5B646B] leading-relaxed">
                Payroll calculation, deductions, completed results
              </p>
            </div>
          </div>
        </div>

        {/* Model Pills Row */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          {modelPills.map((pill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium text-[#0F172A] bg-white border border-slate-200/80 shadow-xs"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
