"use client";

import React from "react";

interface ConfidenceBadgeCard {
  label: string;
  badgeBg: string;
  textColor: string;
  dotColor: string;
  description: string;
  linkText: string;
}

const statusCards: ConfidenceBadgeCard[] = [
  {
    label: "Available",
    badgeBg: "bg-emerald-100/80",
    textColor: "text-emerald-800",
    dotColor: "bg-emerald-500",
    description: "Live coverage with current evidence.",
    linkText: "View payment details →",
  },
  {
    label: "Available with implementation",
    badgeBg: "bg-sky-100/80",
    textColor: "text-sky-800",
    dotColor: "bg-sky-500",
    description: "Supported, requires setup work.",
    linkText: "Plan implementation →",
  },
  {
    label: "API-supported",
    badgeBg: "bg-purple-100/80",
    textColor: "text-purple-800",
    dotColor: "bg-purple-500",
    description: "Direct API connectivity available.",
    linkText: "Validate API fit →",
  },
  {
    label: "File / host-to-host",
    badgeBg: "bg-slate-200/70",
    textColor: "text-slate-700",
    dotColor: "bg-slate-400",
    description: "Managed or file-based exchange.",
    linkText: "Review implementation →",
  },
  {
    label: "Validation required",
    badgeBg: "bg-amber-100/80",
    textColor: "text-amber-800",
    dotColor: "bg-amber-500",
    description: "Fit not yet confirmed by evidence.",
    linkText: "Request fit validation →",
  },
  {
    label: "Not listed",
    badgeBg: "bg-slate-200/70",
    textColor: "text-slate-700",
    dotColor: "bg-slate-400",
    description: "No registry entry currently exists.",
    linkText: "Talk to a specialist →",
  },
  {
    label: "Temporarily unavailable",
    badgeBg: "bg-rose-100/70",
    textColor: "text-rose-800",
    dotColor: "bg-rose-500",
    description: "Evidence is stale or paused.",
    linkText: "Get support →",
  },
];

interface RailDetailRow {
  label: string;
  value: string;
}

const railDetails: RailDetailRow[] = [
  { label: "Coverage", value: "United States" },
  { label: "Method", value: "Domestic bank transfer" },
  { label: "Currency / rail", value: "USD · ACH" },
  { label: "Status feedback", value: "API + webhook" },
  { label: "Settlement evidence", value: "Bank file, T+1" },
  { label: "Return support", value: "Standard NACHA returns" },
];

export default function FitAndAvailabilitySection() {
  return (
    <section className="w-full bg-[#EFF4F7] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>FIT & AVAILABILITY</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#0F172A] leading-tight">
              Fit confidence is explicit, not implied
            </h2>
          </div>

          {/* Top-Right Subtext */}
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
            Coverage, method, country/currency/rail, status feedback, settlement
            evidence and return support are tracked as separate facts — never
            bundled into one green checkmark.
          </p>
        </div>

        {/* 4x2 Grid of Status Cards + Dark Highlight Callout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statusCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/70 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Badge */}
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${card.badgeBg} ${card.textColor}`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${card.dotColor}`}
                  />
                  {card.label}
                </span>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Action Link */}
              <a
                href="#"
                className="text-xs font-semibold text-[#0A8FD0] hover:underline inline-block"
              >
                {card.linkText}
              </a>
            </div>
          ))}

          {/* Dark Accent Card */}
          <div className="bg-[#082F49] text-white rounded-2xl p-6 shadow-xs flex items-center">
            <p className="text-xs leading-relaxed text-[#C9DCEA]">
              <span className="font-semibold">Stale evidence</span>{" "}
              automatically downgrades a public claim to validation-required —
              never left showing "available."
            </p>
          </div>
        </div>

        {/* Bottom Split Proof & Guidance Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {/* Left Column: Example Details */}
            <div className="lg:col-span-6 p-6 sm:p-8 space-y-6">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                EXAMPLE — SANDBOX RAIL (ACH, US)
              </div>

              <div className="divide-y divide-slate-100">
                {railDetails.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-3 first:pt-0 last:pb-0 flex items-center justify-between text-xs"
                  >
                    <span className="text-slate-500 font-medium">
                      {item.label}
                    </span>
                    <span className="font-bold text-[#0F172A]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Reading Guidance */}
            <div className="lg:col-span-6 p-6 sm:p-8 space-y-4 bg-slate-50/40 flex flex-col justify-start">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                READING THIS CORRECTLY
              </div>

              <div className="space-y-3 text-xs text-slate-500 leading-relaxed">
                <p>
                  Each fact above is independently evidenced. A provider being
                  generally "available" says nothing about whether a specific
                  country, currency, rail or funding combination is supported
                  today.
                </p>
                <p>
                  Never generalize from a provider's name or brand recognition
                  alone — always confirm against the current registry entry
                  before relying on a route in production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
