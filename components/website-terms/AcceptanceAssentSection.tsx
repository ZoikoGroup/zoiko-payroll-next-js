"use client";

import React from "react";

interface StatusBadge {
  label: string;
  dotColor: string;
  bgColor: string;
  textColor: string;
}

const assentBadges: StatusBadge[] = [
  {
    label: "No-assent — current state",
    dotColor: "bg-emerald-500",
    bgColor: "bg-emerald-100/70",
    textColor: "text-emerald-800",
  },
  {
    label: "Browsewrap-style, source-backed",
    dotColor: "bg-gray-400",
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
  },
  {
    label: "Clickwrap, when legally authorized",
    dotColor: "bg-gray-400",
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
  },
];

export default function AcceptanceAssentSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header Section */}
        <div className="space-y-3 max-w-3xl">
          {/* Category Tag */}
          <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            <span className="font-bold">/</span>
            <span>ACCEPTANCE / ASSENT</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-[32px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Acceptance is legal behavior, not UI decoration.
          </h2>
        </div>

        {/* Informational Callout Card */}
        <div className="bg-white rounded-2xl border border-gray-100/80 shadow-sm p-6 sm:p-7">
          <p className="text-[13px] text-[#64748B] leading-relaxed">
            This page does not display an "I agree" button, a pre-checked box,
            or acceptance logging, because no approved AcceptanceMechanismRecord
            currently authorizes one for the public website. Where a governed
            mechanism is approved, it will appear here — separate from any
            marketing consent or cookie preference control.
          </p>
        </div>

        {/* Status Badges Row */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {assentBadges.map((badge, idx) => (
            <span
              key={idx}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${badge.bgColor} ${badge.textColor}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${badge.dotColor}`} />
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
