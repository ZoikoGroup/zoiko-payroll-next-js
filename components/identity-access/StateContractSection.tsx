"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface FlowStep {
  label: string;
  isPrimary?: boolean;
}

interface SecondaryBadge {
  label: string;
  dotColor: string;
  textColor: string;
  bgColor: string;
}

const primaryFlow: FlowStep[] = [
  { label: "DISCOVERED" },
  { label: "PROVISIONED" },
  { label: "ACTIVATED" },
  { label: "AUTHENTICATED" },
  { label: "AUTHORIZED", isPrimary: true },
];

const secondaryBadges: SecondaryBadge[] = [
  {
    label: "REVIEW_REQUIRED",
    dotColor: "bg-amber-600",
    textColor: "text-amber-700",
    bgColor: "bg-[#FEF6E6]",
  },
  {
    label: "SUSPENDED",
    dotColor: "bg-red-500",
    textColor: "text-red-600",
    bgColor: "bg-[#FEEFC3]",
  },
  {
    label: "DEPROVISION_PENDING",
    dotColor: "bg-red-500",
    textColor: "text-red-600",
    bgColor: "bg-[#FEEFC3]",
  },
  {
    label: "DEPROVISIONED",
    dotColor: "bg-slate-400",
    textColor: "text-slate-600",
    bgColor: "bg-[#E8EAED]",
  },
  {
    label: "REACTIVATED",
    dotColor: "bg-[#0A8FD0]",
    textColor: "text-[#0A8FD0]",
    bgColor: "bg-[#E8F0FE]",
  },
  {
    label: "ERROR",
    dotColor: "bg-red-500",
    textColor: "text-red-600",
    bgColor: "bg-[#FEEFC3]",
  },
];

export default function StateContractSection() {
  return (
    <section className="w-full bg-[#08152C] py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Header Block */}
        <div className="space-y-3 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#38BDF8] uppercase">
            <span className="w-4 h-[2px] bg-[#38BDF8] inline-block" />
            <span>STATE CONTRACT</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[38px] font-bold tracking-tight text-white leading-tight">
            Provisioned does not mean authorized
          </h2>

          {/* Subtitle / Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
            Authenticated does not mean privileged. Ambiguous data defaults to
            no additional access.
          </p>
        </div>

        {/* State Flow Controls */}
        <div className="space-y-6 pt-2">
          {/* Primary Lifecycle Step Flow */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {primaryFlow.map((step, idx) => (
              <React.Fragment key={idx}>
                {step.isPrimary ? (
                  <div className="px-5 py-2 rounded-full bg-[#163B72] border border-[#2563EB] text-[11px] sm:text-xs font-bold tracking-wide text-white shadow-md">
                    {step.label}
                  </div>
                ) : (
                  <div className="px-4 py-2 rounded-full bg-slate-800/40 border border-slate-700/60 text-[11px] sm:text-xs font-bold tracking-wide text-slate-300">
                    {step.label}
                  </div>
                )}

                {/* Arrow Connector (Show for all except last item) */}
                {idx < primaryFlow.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Secondary State Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
            {secondaryBadges.map((badge, idx) => (
              <div
                key={idx}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wide ${badge.bgColor} ${badge.textColor}`}
              >
                <span className={`w-2 h-2 rounded-full ${badge.dotColor}`} />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
