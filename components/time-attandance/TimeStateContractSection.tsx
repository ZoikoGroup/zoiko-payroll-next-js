"use client";

import React from "react";

interface StateBadge {
  label: string;
  badgeBg: string;
  textColor: string;
  border?: string;
}

const topRowBadges: StateBadge[] = [
  {
    label: "Raw",
    badgeBg: "bg-white",
    textColor: "text-slate-700",
    border: "border border-slate-200/80",
  },
  {
    label: "Interpreted",
    badgeBg: "bg-white",
    textColor: "text-slate-700",
    border: "border border-slate-200/80",
  },
  {
    label: "Submitted",
    badgeBg: "bg-white",
    textColor: "text-slate-700",
    border: "border border-slate-200/80",
  },
  {
    label: "Approved",
    badgeBg: "bg-white",
    textColor: "text-slate-700",
    border: "border border-slate-200/80",
  },
  {
    label: "Finalized",
    badgeBg: "bg-white",
    textColor: "text-slate-700",
    border: "border border-slate-200/80",
  },
  {
    label: "Received",
    badgeBg: "bg-white",
    textColor: "text-slate-700",
    border: "border border-slate-200/80",
  },
  {
    label: "Validated",
    badgeBg: "bg-amber-100/80",
    textColor: "text-amber-800",
  },
  {
    label: "Review required",
    badgeBg: "bg-amber-100/80",
    textColor: "text-amber-800",
  },
  {
    label: "Payroll ready",
    badgeBg: "bg-emerald-100/80",
    textColor: "text-emerald-800",
  },
  {
    label: "Rejected",
    badgeBg: "bg-rose-100/70",
    textColor: "text-rose-800",
  },
];

const bottomRowBadges: StateBadge[] = [
  {
    label: "Superseded",
    badgeBg: "bg-white",
    textColor: "text-slate-700",
    border: "border border-slate-200/80",
  },
];

export default function TimeStateContractSection() {
  return (
    <section className="w-full bg-[#E9F0F8] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Eyebrow Label: #0A8FD0 */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
          <span className="text-base leading-none">/</span>
          <span>TIME-STATE CONTRACT</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#0F172A] leading-tight max-w-4xl mx-auto">
          Eleven states — "Synced" is never a synonym for payroll-ready
        </h2>

        {/* Main Paragraph Description */}
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
          RAW is uninterpreted source time. Approved or Finalized may still
          require validation. Received means received by Zoiko Payroll — not
          payroll-ready. Validated means technical and business checks passed,
          though review may still be required.
        </p>

        {/* State Badges Grid / Wrap Container */}
        <div className="space-y-3 pt-2">
          {/* Top Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {topRowBadges.map((badge, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold shadow-2xs ${
                  badge.badgeBg
                } ${badge.textColor} ${badge.border || ""}`}
              >
                {badge.label}
              </span>
            ))}
          </div>

          {/* Centered Superseded Badge Row */}
          <div className="flex justify-center">
            {bottomRowBadges.map((badge, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold shadow-2xs ${
                  badge.badgeBg
                } ${badge.textColor} ${badge.border || ""}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Disclaimer Subtext */}
        <p className="text-xs text-slate-400 leading-relaxed max-w-2xl mx-auto pt-2">
          Payroll Ready means configured downstream readiness conditions are
          met. Rejected is unsafe or invalid and requires correction. Superseded
          is historical, replaced by a newer accepted version.
        </p>
      </div>
    </section>
  );
}
