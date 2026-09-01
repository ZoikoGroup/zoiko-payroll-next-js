"use client";

import React from "react";

interface HierarchyStep {
  number: number;
  title: string;
  description: string;
  badgeBg: string;
}

const hierarchySteps: HierarchyStep[] = [
  {
    number: 1,
    title: "Internal",
    description:
      "Instruction prepared, approved and released inside Zoiko Payroll",
    badgeBg: "bg-gradient-to-r from-[#2C90D0] to-[#117DC5]",
  },
  {
    number: 2,
    title: "Transport",
    description:
      "Delivered to the provider's API, file gateway or host-to-host channel",
    badgeBg: "bg-gradient-to-r from-[#2C90D0] to-[#117DC5]",
  },
  {
    number: 3,
    title: "Provider",
    description: "Provider acknowledges receipt and returns an initial status",
    badgeBg: "bg-gradient-to-r from-[#2C90D0] to-[#117DC5]",
  },
  {
    number: 4,
    title: "Bank / rail",
    description:
      "The underlying bank or payment rail processes the instruction",
    badgeBg: "bg-gradient-to-r from-[#2C90D0] to-[#117DC5]",
  },
  {
    number: 5,
    title: "Beneficiary credit",
    description:
      "Confirmed funds arrival, where the rail supports that evidence",
    badgeBg: "bg-gradient-to-r from-[#2C90D0] to-[#117DC5]",
  },
  {
    number: 6,
    title: "Reconciliation",
    description: "Internal and external records are matched and closed out",
    badgeBg: "bg-gradient-to-r from-[#3F9A66] to-[#2F7A52]",
  },
];

interface ExceptionCard {
  title: string;
  description: string;
}

const exceptionCards: ExceptionCard[] = [
  {
    title: "Rejected before processing",
    description:
      "Remains unpaid. The instruction never reached irreversible processing.",
  },
  {
    title: "Returned after processing",
    description:
      "Becomes current RETURNED, while the full prior history stays visible.",
  },
  {
    title: "Reversal",
    description:
      "Always links back to the original instruction — nothing is erased.",
  },
];

export default function ExternalEvidenceHierarchySection() {
  return (
    <section className="w-full bg-[#0A3554] py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>EXTERNAL EVIDENCE</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-white leading-tight">
              Evidence has a hierarchy — and delivery isn't success.
            </h2>
          </div>

          {/* Subtext */}
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
            Transport delivery or an API acknowledgement is not financial
            success. Stale or unknown external evidence always routes to review
            — the system never infers success.
          </p>
        </div>

        {/* Vertical Hierarchy Steps Container */}
        <div className="space-y-3">
          {hierarchySteps.map((step) => (
            <div
              key={step.number}
              className="bg-[#FFFFFF0F] border border-slate-700/50 rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-colors hover:bg-[#0F324E]/90"
            >
              {/* Step Circle Badge */}
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${step.badgeBg} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs`}
              >
                {step.number}
              </div>

              {/* Step Info */}
              <div className="space-y-0.5">
                <h3 className="text-sm font-bold text-white leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 3-Column Exception Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {exceptionCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF0F] border border-slate-700/50 rounded-2xl p-6 space-y-2 transition-colors hover:bg-[#0F324E]/90"
            >
              <h3 className="text-sm font-bold text-white">{card.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
