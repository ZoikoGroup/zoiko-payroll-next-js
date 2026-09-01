"use client";

import React from "react";

interface HealthStatusBadge {
  label: string;
  badgeBg: string;
  textColor: string;
  border?: string;
}

const statusBadges: HealthStatusBadge[] = [
  {
    label: "Connected",
    badgeBg: "bg-emerald-100/80",
    textColor: "text-emerald-800",
  },
  {
    label: "Setup incomplete",
    badgeBg: "bg-white",
    textColor: "text-slate-700",
    border: "border border-slate-200",
  },
  {
    label: "Attention needed",
    badgeBg: "bg-amber-100/70",
    textColor: "text-amber-800",
  },
  {
    label: "Paused",
    badgeBg: "bg-white",
    textColor: "text-slate-700",
    border: "border border-slate-200",
  },
  {
    label: "Disconnected",
    badgeBg: "bg-rose-100/60",
    textColor: "text-rose-800",
  },
  {
    label: "Target rejection",
    badgeBg: "bg-rose-100/60",
    textColor: "text-rose-800",
  },
  {
    label: "Reconciliation variance",
    badgeBg: "bg-amber-100/70",
    textColor: "text-amber-800",
  },
  {
    label: "Stale evidence",
    badgeBg: "bg-amber-100/70",
    textColor: "text-amber-800",
  },
];

export default function SecurityConnectionHealthSection() {
  return (
    <section className="w-full bg-[#F4F8FC] py-12 px-4 sm:px-6 sm:py-20 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Eyebrow Label: #0A8FD0 */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
          <span className="text-base leading-none">/</span>
          <span>SECURITY & CONNECTION HEALTH</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight leading-snug text-[#0F172A] max-w-2xl mx-auto">
          Only the accounting data your approved scope requires
        </h2>

        {/* Paragraph */}
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
          Zoiko Payroll never assumes employee-level journal detail is required,
          and public fit forms never collect credentials, tokens, bank details,
          payroll files or GL extracts. Security, storage, transport,
          role-control and retention claims come only from current approved
          evidence.
        </p>

        {/* Status Badges Container (Flex Wrap with centered alignment) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-2 sm:pt-4 max-w-6xl mx-auto">
          {statusBadges.map((badge, idx) => (
            <span
              key={idx}
              className={`inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-colors ${badge.badgeBg} ${badge.textColor} ${
                badge.border || ""
              }`}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
