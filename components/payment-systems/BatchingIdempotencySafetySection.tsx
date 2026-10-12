"use client";

import React from "react";
import { Grid, Repeat, Compass, AlignLeft, Info } from "lucide-react";

interface SafetyFeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const safetyFeatures: SafetyFeatureCard[] = [
  {
    icon: <Grid className="w-5 h-5 text-[#0A8FD0]" />,
    title: "Stable IDs",
    description:
      "Batch, instruction and version identifiers are preserved across the full lifecycle.",
  },
  {
    icon: <Repeat className="w-5 h-5 text-[#0A8FD0]" />,
    title: "Method-specific idempotency",
    description:
      "Retries only proceed when provider semantics establish it's safe to do so.",
  },
  {
    icon: <Compass className="w-5 h-5 text-[#0A8FD0]" />,
    title: "UNKNOWN_REVIEW",
    description:
      "An ambiguous external outcome is investigated before any retry — never assumed safe.",
  },
  {
    icon: <AlignLeft className="w-5 h-5 text-[#0A8FD0]" />,
    title: "Partial acceptance",
    description:
      "Batch splits preserve parent lineage; acceptance is shown per instruction, never as a misleading all-green batch.",
  },
];

export default function BatchingIdempotencySafetySection() {
  return (
    <section className="w-full bg-[#f5f8fa] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>BATCHING, IDEMPOTENCY & SAFETY</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Every instruction has a stable identity.
          </h2>
        </div>

        {/* 4-Column Grid of Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyFeatures.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/70 shadow-xs flex flex-col space-y-4"
            >
              {/* Circular Icon Container */}
              <div className="w-10 h-10 rounded-full border border-[#3A9AD6] flex items-center justify-center shrink-0">
                {card.icon}
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-[19px] font-extrabold text-[#0F172A] leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="bg-[#E2F0FB]/60 border border-[#BDE0FE]/50 rounded-2xl p-4 sm:p-5 flex items-start sm:items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
            <Info className="w-3.5 h-3.5 text-[#0A8FD0]" />
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Generic exponential backoff is not a payment policy. Every unknown
            outcome is reconciled before any resend that could risk duplicating
            funds.
          </p>
        </div>
      </div>
    </section>
  );
}
