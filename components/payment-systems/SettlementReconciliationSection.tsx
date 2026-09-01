"use client";

import React from "react";

interface StatusRow {
  state: string;
  confirms: string;
}

const statusRows: StatusRow[] = [
  {
    state: "Released",
    confirms: "Instruction left internal approval and control",
  },
  {
    state: "Submitted",
    confirms: "Delivered to the provider or rail",
  },
  {
    state: "Accepted",
    confirms: "Provider confirmed receipt for processing",
  },
  {
    state: "Settled",
    confirms: "Backed by approved settlement evidence",
  },
  {
    state: "Beneficiary credit",
    confirms: "Confirmed where the rail evidences it",
  },
  {
    state: "Returned / rejected / reversed",
    confirms: "Exception path, with linked history",
  },
  {
    state: "Unresolved / unknown",
    confirms: "Held for review, never assumed resolved",
  },
  {
    state: "Variance",
    confirms: "Amount or timing mismatch flagged for finance",
  },
];

interface FeatureCard {
  title: string;
  badgeText: string;
  badgeStyle: string;
  description: string;
}

const sideCards: FeatureCard[] = [
  {
    title: "Reconciliation status",
    badgeText: "Balanced",
    badgeStyle: "bg-emerald-100 text-emerald-800",
    description:
      "All released instructions match external evidence with no open variance.",
  },
  {
    title: "Approved exceptions",
    badgeText: "Balanced w/ exceptions",
    badgeStyle: "bg-amber-100 text-amber-800",
    description:
      "Variance exists but has been reviewed and formally approved.",
  },
  {
    title: "Multi-entity / FX",
    badgeText: "Rail-specific",
    badgeStyle: "bg-slate-200 text-slate-700",
    description:
      "FX timing distinguishes indicative, locked and settlement-rate semantics — the rate source is never invented.",
  },
];

export default function SettlementReconciliationSection() {
  return (
    <section className="w-full bg-[#f5f8fa] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>SETTLEMENT & RECONCILIATION</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Reconciliation status, tracked in one place
          </h2>
        </div>

        {/* Content Layout: Left Table + Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          {/* Left Column: Table of Tracked States */}
          <div className="lg:col-span-7 space-y-2">
            {/* Table Header */}
            <div className="grid grid-cols-12 px-4 py-2 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
              <div className="col-span-4 sm:col-span-4">TRACKED STATE</div>
              <div className="col-span-8 sm:col-span-8">WHAT IT CONFIRMS</div>
            </div>

            {/* List Rows */}
            <div className="space-y-2">
              {statusRows.map((row, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs grid grid-cols-12 items-center gap-2"
                >
                  <div className="col-span-12 sm:col-span-4 font-bold text-xs sm:text-sm text-[#0F172A]">
                    {row.state}
                  </div>
                  <div className="col-span-12 sm:col-span-8 text-xs text-slate-500 leading-relaxed">
                    {row.confirms}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Status Summary Cards */}
          <div className="lg:col-span-5 space-y-4 pt-6 lg:pt-8">
            {sideCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-3"
              >
                {/* Header with Title & Badge */}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    {card.title}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium ${card.badgeStyle}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {card.badgeText}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}