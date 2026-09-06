"use client";

import React from "react";

export default function ProcurementEvidenceSection() {
  const classificationBadges = [
    { label: "Public", bg: "bg-[#E3F0E7]", text: "text-[#20502F]" },
    {
      label: "Controlled / Trust Center",
      bg: "bg-[#E4F1FA]",
      text: "text-[#0A78C3]",
    },
    {
      label: "Customer-controlled",
      bg: "bg-[#F1EAD8]",
      text: "text-[#6B5A20]",
    },
    { label: "Contract-specific", bg: "bg-[#F1F5F9]", text: "text-[#475569]" },
  ] as const;

  const requestDetails = [
    { label: "DOCUMENT", value: "DR Executive Summary" },
    { label: "SCOPE", value: "Core payroll platform" },
    { label: "OWNER", value: "Trust & Risk Team" },
    { label: "REVIEWED", value: "Jun 2026" },
  ] as const;

  return (
    <div className="flex bg-[#F9FAFB] items-center justify-center py-12 md:py-20 text-[#0F172A]">
      <div className="max-w-6xl w-full flex flex-col px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content Side */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Category Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#0A78C3]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0A78C3] uppercase">
                PROCUREMENT &amp; CONTROLLED EVIDENCE
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0B192C] tracking-tight leading-tight mb-4">
              The evidence path, not a marketing claim
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
              Continuity summaries, DR executive summaries, RTO/RPO information,
              exercise attestations and questionnaires — routed through a
              minimal request flow with appropriate access classification.
            </p>

            {/* Classification Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {classificationBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E4E9EF] ${badge.text} text-[11px] sm:text-xs font-medium`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Alert Banner */}
            <div className="w-full bg-[#E7EDFD] border-l-4 border-l-[#0A78C3] rounded-r-md p-4 sm:p-5">
              <p className="text-xs sm:text-[13px] text-[#334155] leading-relaxed">
                Standard buyer due diligence is never forced into a sales call.
              </p>
            </div>
          </div>

          {/* Right Mock Modal / Request Form Side */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl border border-[#E2E8F0] shadow-xl overflow-hidden">
              {/* Window Header */}
              <div className="px-5 py-3 bg-[#F5F8FA] border-b border-[#E2E8F0] flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
                </div>
                <span className="text-xs font-medium text-[#64748B] ml-2">
                  Continuity Evidence Request
                </span>
              </div>

              {/* Form Body */}
              <div className="p-6 flex flex-col divide-y divide-[#E2E8F0]/70">
                {requestDetails.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-3.5 first:pt-0 flex items-center justify-between text-xs sm:text-[13px]"
                  >
                    <span className="font-semibold text-[#64748B] tracking-wider text-[11px]">
                      {item.label}
                    </span>
                    <span className="font-bold text-[#0F172A]">
                      {item.value}
                    </span>
                  </div>
                ))}

                {/* Status Row */}
                <div className="py-3.5 flex items-center justify-between text-xs sm:text-[13px]">
                  <span className="font-semibold text-[#64748B] tracking-wider text-[11px]">
                    STATUS
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#E7EDFD] text-[#3355D6]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E7EDFD]" />
                    Controlled / Trust Center
                  </span>
                </div>

                {/* Submit Action Button */}
                <div className="pt-5">
                  <button
                    type="button"
                    className="w-full bg-gradient-to-r from-[#0A78C3] to-[#035999] hover:from-[#0863A1] hover:to-[#024478] text-white font-semibold text-xs sm:text-sm py-3 rounded-xl transition-all shadow-xs cursor-pointer active:scale-[0.99]"
                  >
                    Request access
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
