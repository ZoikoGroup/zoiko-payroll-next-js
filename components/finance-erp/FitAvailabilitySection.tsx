"use client";

import React from "react";

interface StateCard {
  badgeText: string;
  badgeBg: string;
  badgeTextColor: string;
  description: string;
}

const sevenStates: StateCard[] = [
  {
    badgeText: "Available",
    badgeBg: "bg-emerald-100/70",
    badgeTextColor: "text-emerald-800",
    description:
      "Confirmed current evidence, but never a universal posting guarantee.",
  },
  {
    badgeText: "Available with implementation",
    badgeBg: "bg-amber-100/70",
    badgeTextColor: "text-amber-800",
    description:
      "Requires a scoped implementation before production activation.",
  },
  {
    badgeText: "API-supported",
    badgeBg: "bg-sky-100/70",
    badgeTextColor: "text-sky-800",
    description:
      "Connects via approved API — exact scope confirmed during fit validation.",
  },
  {
    badgeText: "File / managed exchange",
    badgeBg: "bg-slate-200/70",
    badgeTextColor: "text-slate-700",
    description: "Available via approved file or managed exchange method.",
  },
  {
    badgeText: "Validation required",
    badgeBg: "bg-amber-100/70",
    badgeTextColor: "text-amber-800",
    description:
      "Fit is not yet confirmed for your ledger, dimensions, version or entity scope.",
  },
  {
    badgeText: "Not currently listed",
    badgeBg: "bg-slate-200/70",
    badgeTextColor: "text-slate-700",
    description: "Route to fit validation — never assumed unsupported.",
  },
  {
    badgeText: "Temporarily unavailable / stale",
    badgeBg: "bg-rose-100/70",
    badgeTextColor: "text-rose-800",
    description:
      "Stale evidence downgrades a strong claim to validation required.",
  },
];

interface ConfidenceBadge {
  label: string;
  badgeBg: string;
  textColor: string;
  border?: string;
}

const confidenceBadges: ConfidenceBadge[] = [
  {
    label: "Confirmed",
    badgeBg: "bg-emerald-100/70",
    textColor: "text-emerald-800",
  },
  {
    label: "Likely — validation needed",
    badgeBg: "bg-amber-100/70",
    textColor: "text-amber-800",
  },
  {
    label: "Partial",
    badgeBg: "bg-amber-100/50",
    textColor: "text-amber-700",
  },
  {
    label: "Unknown",
    badgeBg: "bg-white",
    textColor: "text-slate-600",
    border: "border border-slate-200",
  },
  {
    label: "Unavailable",
    badgeBg: "bg-rose-100/70",
    textColor: "text-rose-800",
  },
];

export default function FitAvailabilitySection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>FIT & AVAILABILITY</span>
          </div>

          {/* Main Title: 36px */}
          <h2 className="text-2xl sm:text-[36px] font-bold text-[#0F172A] tracking-tight leading-snug max-w-2xl mx-auto">
            Seven states — never a blanket "we integrate with everything."
          </h2>
        </div>

        {/* Top 7 States Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sevenStates.map((state, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col justify-start space-y-3 hover:border-slate-300 transition-colors"
            >
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${state.badgeBg} ${state.badgeTextColor}`}
                >
                  {state.badgeText}
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {state.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section: Finance-fit confidence */}
        <div className="pt-6 space-y-6 text-center max-w-4xl mx-auto">
          <h3 className="text-sm font-bold text-[#0F172A]">
            Finance-fit confidence
          </h3>

          {/* Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {confidenceBadges.map((badge, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium ${badge.badgeBg} ${badge.textColor} ${
                  badge.border || ""
                }`}
              >
                {badge.label}
              </span>
            ))}
          </div>

          {/* Explanatory Footer Text */}
          <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed pt-1">
            Confirmed shows its evidence date but never a universal posting
            guarantee. Likely validates ledger, dimensions, version and entity
            scope. Partial splits supported from unconfirmed capability. Unknown
            routes directly to fit validation.
          </p>
        </div>
      </div>
    </section>
  );
}
