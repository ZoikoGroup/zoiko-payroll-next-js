"use client";

import React from "react";

export default function PayrollStructuresSection() {
  const calendarRows = [
    { label: "Period", value: "01 Oct – 31 Oct" },
    { label: "Input cutoff", value: "Customer-approved date" },
    { label: "Processing window", value: "Configured" },
    { label: "Approval", value: "Configured workflow" },
    { label: "Payment date", value: "31 Oct" },
  ] as const;

  const statusBadges = [
    {
      label: "System / statutory controlled",
      bg: "bg-white",
      text: "text-[#475569]",
    },
    { label: "Customer required", bg: "bg-[#F1EAD8]", text: "text-[#6B5A20]" },
    {
      label: "Customer configurable",
      bg: "bg-[#E4F1FA]",
      text: "text-[#0A78C3]",
    },
    { label: "Derived", bg: "bg-white", text: "text-[#475569]" },
    { label: "Not applicable", bg: "bg-white", text: "text-[#475569]" },
    { label: "Unsupported", bg: "bg-[#FCE8E6]", text: "text-[#A8221B]" },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Payroll Structures & Calendars Card */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#0A78C3] font-bold text-sm">/</span>
                <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0A78C3] uppercase">
                  PAYROLL STRUCTURES &amp; CALENDARS
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight leading-tight mb-8">
                Statutory dates and operational dates are never the same thing.
              </h2>
            </div>

            {/* Calendar Card */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xs p-6 sm:p-7 flex flex-col">
              {/* Sub-header */}
              <div className="text-[11px] font-bold tracking-wider text-[#94A3B8] uppercase mb-4">
                MONTHLY PAYROLL · ENTITY A
              </div>

              {/* Rows */}
              <div className="divide-y divide-[#E2E8F0]/70">
                {calendarRows.map((row, idx) => (
                  <div
                    key={idx}
                    className="py-3 first:pt-0 flex items-center justify-between text-xs sm:text-[13px]"
                  >
                    <span className="text-[#64748B] font-medium">
                      {row.label}
                    </span>
                    <span className="font-bold text-[#0F172A]">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Badges */}
              <div className="pt-5 mt-2 flex flex-wrap items-center gap-2 border-t border-[#E2E8F0]/70">
                <span className="px-3 py-1 rounded-full border border-[#E2E8F0] bg-white text-[#0F172A] text-[11px] font-semibold">
                  Inherited: Jurisdiction holiday calendar
                </span>
                <span className="px-3 py-1 rounded-full bg-[#E4F1FA] text-[#0A78C3] text-[11px] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A78C3]" />
                  Override: Entity A special date
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Blue Card + Standing Line Alert Banner */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            {/* Dark Blue Card */}
            <div className="bg-gradient-to-r from-[#0E2A47] to-[#16386A] rounded-2xl p-6 sm:p-8 text-white shadow-md flex flex-col justify-between flex-1">
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#0A78C3] font-bold text-sm">/</span>
                  <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0A78C3] uppercase">
                    JURISDICTION / STATUTORY CONFIGURATION
                  </span>
                </div>

                {/* Card Heading */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug mb-8 text-white">
                  Local rules change by effective date — configuration remembers
                  which one applied.
                </h3>
              </div>

              {/* Status Badges */}
              <div className="flex flex-wrap gap-2.5 pt-4">
                {statusBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${badge.bg} ${badge.text} text-[10px] font-medium`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Alert Banner with Standing Line Div */}
            <div className="w-full bg-[#E7EDFD] rounded-xl p-4 sm:p-5 flex items-stretch gap-4">
              {/* Standing Line Div */}
              <div className="w-[3px] bg-[#0A78C3] rounded-full shrink-0" />

              <p className="text-xs sm:text-[13px] text-[#334155] leading-relaxed py-0.5">
                This page explains jurisdiction-aware rule governance — it does
                not present a checklist as proof of legal compliance or expose
                unverified tax rates, thresholds, or country availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
