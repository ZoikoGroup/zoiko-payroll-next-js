"use client";

import React from "react";

export default function RecoveryObjectivesSection() {
  const disclosureTags = [
    { label: "Public verified", bg: "bg-[#E3F0E7]", text: "text-[#20502F]" },
    {
      label: "Customer-controlled",
      bg: "bg-[#E4F1FA]",
      text: "text-[#0A78C3]",
    },
    { label: "Contract-specific", bg: "bg-[#F1EAD8]", text: "text-[#6B5A20]" },
    { label: "In validation", bg: "bg-[#F1F5F9]", text: "text-[#475569]" },
    {
      label: "Not publicly disclosed",
      bg: "bg-[#F1F5F9]",
      text: "text-[#475569]",
    },
  ] as const;

  const tableRows = [
    {
      service: "Authorized access",
      criticality: "Tier 1",
      rto: "< 4 hours",
      rpo: "< 1 hour",
      lastValidated: "Jun 2026",
      disclosure: {
        label: "Public verified",
        bg: "bg-[#E3F0E7]",
        text: "text-[#20502F]",
      },
    },
    {
      service: "Payroll calculation / run state",
      criticality: "Tier 1",
      rto: "< 8 hours",
      rpo: "< 1 hour",
      lastValidated: "May 2026",
      disclosure: {
        label: "Customer-controlled",
        bg: "bg-[#E4F1FA]",
        text: "text-[#0A78C3]",
      },
    },
    {
      service: "Payments orchestration",
      criticality: "Tier 1",
      rto: "< 8 hours",
      rpo: "< 1 hour",
      lastValidated: "Jun 2026",
      disclosure: {
        label: "Contract-specific",
        bg: "bg-[#F1EAD8]",
        text: "text-[#6B5A20]",
      },
    },
    {
      service: "Records / exports",
      criticality: "Tier 2",
      rto: "< 24 hours",
      rpo: "< 4 hours",
      lastValidated: "Apr 2026",
      disclosure: {
        label: "In validation",
        bg: "bg-[#E9D9C9]",
        text: "text-[#D57A1F]",
      },
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4">
        {/* Category Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#0A78C3]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0A78C3] uppercase">
            RECOVERY OBJECTIVES
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0B192C] text-center tracking-tight mb-3">
          Recovery objectives by service, not slogans
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#64748B] text-center max-w-2xl leading-relaxed mb-8">
          Each service carries its own criticality tier, RTO, RPO, measurement
          basis and disclosure state — never one blended number for the whole
          platform.
        </p>

        {/* Top Filter / Legend Badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {disclosureTags.map((tag, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${tag.bg} ${tag.text} text-[11px] sm:text-xs font-medium`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              <span>{tag.label}</span>
            </div>
          ))}
        </div>

        {/* Synthetic Registry Container */}
        <div className="w-full bg-white rounded-2xl border border-[#E2E8F0] shadow-md overflow-hidden mb-8">
          {/* Mock Browser/Registry Header */}
          <div className="px-6 py-3 border-b border-[#E2E8F0] bg-[#F5F8FA] flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
            </div>
            <span className="text-xs font-medium text-[#64748B] ml-2">
              Recovery Objectives Registry — synthetic
            </span>
          </div>

          {/* Table Area */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-[13px]">
              <thead>
                <tr className="border-b border-[#E2E8F0] text-[#64748B] uppercase tracking-wider font-semibold">
                  <th className="py-3.5 px-6">SERVICE / CAPABILITY</th>
                  <th className="py-3.5 px-4">CRITICALITY</th>
                  <th className="py-3.5 px-4">RTO</th>
                  <th className="py-3.5 px-4">RPO</th>
                  <th className="py-3.5 px-4">LAST VALIDATED</th>
                  <th className="py-3.5 px-6">DISCLOSURE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-[#1E293B]">
                {tableRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-[#0F172A]">
                      {row.service}
                    </td>
                    <td className="py-4 px-4 text-[#64748B]">
                      {row.criticality}
                    </td>
                    <td className="py-4 px-4 text-[#64748B]">{row.rto}</td>
                    <td className="py-4 px-4 text-[#64748B]">{row.rpo}</td>
                    <td className="py-4 px-4 text-[#64748B]">
                      {row.lastValidated}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${row.disclosure.bg} ${row.disclosure.text}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {row.disclosure.label}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Alert Banner */}
        <div className="w-full max-w-4xl mx-auto bg-[#E7EDFD] border-l-4 border-l-[#0A78C3] rounded-[6px] p-4 sm:p-5">
          <p className="text-xs sm:text-[13px] text-[#334155] leading-relaxed">
            RTO and RPO values are never calculated, inferred or averaged from
            uptime, backup intervals or provider defaults. One universal global
            figure is prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
