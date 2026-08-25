"use client";

import React from "react";

// Top Metrics Bar Data
const SUMMARY_METRICS = [
  { value: "6", label: "Entities in scope" },
  { value: "6", label: "Cycles open" },
  { value: "2", label: "Cutoffs in 7 days" },
  { value: "2", label: "Needs attention" },
  { value: "3", label: "Awaiting approval" },
  { value: "1", label: "Integration issues" },
  { value: "1", label: "Migrating / onboarding" },
];

// Filter Pills Data
const FILTERS = [
  "Region: All",
  "Jurisdiction: All",
  "Service model: All",
  "Readiness: All states",
  "Owner: All",
];

// Entity Dashboard Cards Data
const ENTITY_CARDS = [
  {
    name: "Zoiko US, Inc.",
    badgeText: "Ready",
    badgeStyles: "bg-[#DCFCE7] text-[#15803D]",
    badgeDot: "bg-[#16A34A]",
    details: "US · Direct, self-managed",
    cutoff: "Aug 24",
    owner: "J. Park",
  },
  {
    name: "Zoiko GmbH",
    badgeText: "Needs review",
    badgeStyles: "bg-[#FEF3C7] text-[#B45309]",
    badgeDot: "bg-[#D97706]",
    details: "DE · Direct, self-managed",
    cutoff: "Aug 23",
    owner: "K. Fischer",
  },
  {
    name: "Zoiko Ltda.",
    badgeText: "Blocked",
    badgeStyles: "bg-[#FEE2E2] text-[#B91C1C]",
    badgeDot: "bg-[#DC2626]",
    details: "BR · Partner-supported",
    cutoff: "Aug 25",
    owner: "M. Alves",
  },
  {
    name: "Zoiko Pte. Ltd.",
    badgeText: "Ready",
    badgeStyles: "bg-[#DCFCE7] text-[#15803D]",
    badgeDot: "bg-[#16A34A]",
    details: "SG · Direct, self-managed",
    cutoff: "Aug 26",
    owner: "Payroll Ops APAC",
  },
  {
    name: "Zoiko UK Ltd.",
    badgeText: "Awaiting approval",
    badgeStyles: "bg-[#E0F2FE] text-[#0369A1]",
    badgeDot: "bg-[#0284C7]",
    details: "UK · Direct, self-managed",
    cutoff: "Aug 22",
    owner: "R. Adeyemi",
  },
  {
    name: "Zoiko India Pvt.",
    badgeText: "Migrating",
    badgeStyles: "bg-[#F3E8FF] text-[#6B21A8]",
    badgeDot: "bg-[#9333EA]",
    details: "IN · Onboarding",
    cutoff: "—",
    owner: "Payroll Ops APAC",
  },
];

export default function MultiEntityControlCenterSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>MULTI-ENTITY CONTROL CENTER</span>
          </div>

          <h2 className="text-3xl md:text-[32px] font-bold text-[#0A1928] leading-tight">
            The strongest product-proof section on this page
          </h2>

          <p className="text-sm sm:text-base text-[#5C6E7E]">
            A dense, real enterprise workspace &mdash; never a decorative
            dashboard. All data shown is synthetic, for illustration only.
          </p>
        </div>

        {/* Dashboard Workspace Main Div with bg-[#082F49] */}
        <div className="bg-[#082F49] rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-[#0A3A5C]">
          {/* Top Metrics Summary Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {SUMMARY_METRICS.map((metric, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF0F] border border-white/10 rounded-xl p-3.5 space-y-1"
              >
                <div className="text-xl sm:text-2xl font-bold text-white">
                  {metric.value}
                </div>
                <div className="text-[11px] text-white/60 leading-tight">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Filter Pills Row */}
          <div className="flex flex-wrap gap-2 pt-1">
            {FILTERS.map((filter, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-[#FFFFFF0F] border border-white/10 text-xs text-white/80 font-medium hover:bg-white/15 cursor-pointer transition-colors"
              >
                {filter}
              </span>
            ))}
          </div>

          {/* 6 Entity Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {ENTITY_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF0F] border border-white/10 rounded-2xl p-5 space-y-4 text-white"
              >
                {/* Entity Name & Status Badge */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {card.name}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold shrink-0 ${card.badgeStyles}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${card.badgeDot}`}
                    />
                    {card.badgeText}
                  </span>
                </div>

                {/* Region & Management details */}
                <div className="text-xs text-white/50">{card.details}</div>

                {/* Divider Line inside card */}
                <div className="border-t border-white/10 pt-3 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/50">Cutoff</span>
                    <span className="font-semibold text-white/90">
                      {card.cutoff}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/50">Owner</span>
                    <span className="font-semibold text-white/90">
                      {card.owner}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Rule Statement */}
        <p className="text-xs text-[#5C6E7E]">
          Rule: every attention state maps to a visible reason code. Zoiko never
          shows a composite &quot;global compliance/health&quot; score.
        </p>
      </div>
    </section>
  );
}
