"use client";

import React from "react";

interface StatusCardItem {
  badgeText: string;
  badgeStyle: string;
  description: string;
}

const statusCards: StatusCardItem[] = [
  {
    badgeText: "Available",
    badgeStyle: "bg-emerald-100/80 text-emerald-800",
    description: "Confirmed current evidence for this time system.",
  },
  {
    badgeText: "Available with implementation",
    badgeStyle: "bg-amber-100/70 text-amber-800",
    description: "Requires scoped implementation before production activation.",
  },
  {
    badgeText: "API-supported",
    badgeStyle: "bg-[#E0F2FE] text-[#0284C7]",
    description: "Connects via approved API — exact scope confirmed during fit validation.",
  },
  {
    badgeText: "Managed / file exchange",
    badgeStyle: "bg-[#E0F2FE] text-[#0284C7]",
    description: "Available via approved managed or file exchange method.",
  },
  {
    badgeText: "Validation required",
    badgeStyle: "bg-amber-100/70 text-amber-800",
    description: "Fit is not yet confirmed for your time domains and source state.",
  },
  {
    badgeText: "Not listed",
    badgeStyle: "bg-slate-200/70 text-slate-700",
    description: "Route to fit validation — never assumed unsupported.",
  },
  {
    badgeText: "Temporarily unavailable / stale",
    badgeStyle: "bg-rose-100/70 text-rose-800",
    description: "Stale evidence downgrades a strong claim to validation required.",
  },
];

interface ConfidenceBadge {
  label: string;
  badgeStyle: string;
}

const confidenceBadges: ConfidenceBadge[] = [
  {
    label: "Confirmed",
    badgeStyle: "bg-emerald-100/80 text-emerald-800",
  },
  {
    label: "Likely — validation needed",
    badgeStyle: "bg-amber-100/70 text-amber-800",
  },
  {
    label: "Partial",
    badgeStyle: "bg-amber-100/70 text-amber-800",
  },
  {
    label: "Unknown",
    badgeStyle: "bg-white text-slate-800 border border-slate-200",
  },
  {
    label: "Unavailable",
    badgeStyle: "bg-rose-100/70 text-rose-800",
  },
];

export default function FitAndAvailabilitySection() {
  return (
    <section className="w-full bg-[#E9F0F8] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>FIT & AVAILABILITY</span>
          </div>

          <h2 className="text-3xl sm:text-[36px] font-bold text-[#0F172A] tracking-tight leading-tight mx-auto">
            System availability is separate from domain capability.
          </h2>
        </div>

        {/* Status Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statusCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/60 flex flex-col justify-start space-y-3"
            >
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${card.badgeStyle}`}
                >
                  {card.badgeText}
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section: Fit Confidence */}
        <div className="pt-8 text-center space-y-6">
          <h3 className="text-base font-bold text-[#0F172A]">
            Fit confidence
          </h3>

          {/* Confidence Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {confidenceBadges.map((badge, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold ${badge.badgeStyle}`}
              >
                {badge.label}
              </span>
            ))}
          </div>

          {/* Subtext Disclaimer */}
          <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Coverage, accepted source state, direction and classification ownership are separate facts from system availability — confirming one never implies the others.
          </p>
        </div>
      </div>
    </section>
  );
}