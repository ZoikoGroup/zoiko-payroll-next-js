"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function ContinuityLifecycleSection() {
  const steps = [
    {
      stepNumber: 1,
      title: "Prevent / Absorb",
      description:
        "Reduce single points of failure and absorb expected faults before they become incidents.",
    },
    {
      stepNumber: 2,
      title: "Continue",
      description:
        "Keep the highest-priority capabilities operating at an acceptable predefined capacity where feasible.",
    },
    {
      stepNumber: 3,
      title: "Recover",
      description:
        "Restore affected technology, data, integrations and operating processes in a controlled order.",
    },
    {
      stepNumber: 4,
      title: "Learn",
      description:
        "Review exercises and incidents, remediate gaps, update plans and reassess priorities.",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-18 md:py-24 text-[#111827]">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Subtitle / Category Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#0082CA]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0082CA] uppercase">
            CONTINUITY LIFECYCLE
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0B192C] text-center tracking-tight mb-3">
          Prevent, continue, recover, learn
        </h2>

        {/* Description Subtitle */}
        <p className="text-xs sm:text-sm text-[#64748B] text-center max-w-xl leading-relaxed mb-12">
          Continuity is a standing discipline before, during and after
          disruption — not a single failover switch.
        </p>

        {/* Cards Grid with Interstitial Arrows */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 relative items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.stepNumber}>
              {/* Card Item */}
              <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] bg-white shadow-xs hover:shadow-md transition-shadow h-full justify-start">
                {/* Number Badge */}
                <div className="w-9 h-9 rounded-full bg-[#E7EDFD] text-[#0A78C3] text-[15px] font-extrabold flex items-center justify-center mb-6">
                  {step.stepNumber}
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-[#0F172A] mb-3">
                  {step.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Arrow for Desktop (Rendered between cards) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none text-[#94A3B8]"
                  style={{ left: `calc(${(index + 1) * 25}% - 12px)` }}
                >
                  <ArrowRight className="w-5 h-5 stroke-[1.5]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
