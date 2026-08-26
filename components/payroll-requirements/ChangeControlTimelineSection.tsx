"use client";

import React from "react";
import { Check } from "lucide-react";

// Timeline step data representing the 7-step change control process
const TIMELINE_STEPS = [
  {
    stepNumber: 1,
    title: "Detect",
    badge: "Change candidate",
    side: "left",
    bullets: [
      "Created from approved source/owner input",
      "Never auto-activated",
    ],
    isHighlighted: false,
  },
  {
    stepNumber: 2,
    title: "Assess",
    badge: "Applicability review",
    side: "right",
    bullets: [
      "Affected entities/groups/modules identified",
      "Local SME/legal/compliance assesses applicability",
    ],
    isHighlighted: false,
  },
  {
    stepNumber: 3,
    title: "Configure",
    badge: "Versioned mapping",
    side: "left",
    bullets: ["Proposed configuration/workflow mapping created"],
    isHighlighted: false,
  },
  {
    stepNumber: 4,
    title: "Validate",
    badge: "Test evidence",
    side: "right",
    bullets: [
      "Synthetic/test/parallel checks where applicable",
      "Evidence, variance and defects recorded",
    ],
    isHighlighted: false,
  },
  {
    stepNumber: 5,
    title: "Approve",
    badge: "Authorized decision",
    side: "left",
    bullets: ["Authorized roles approve/reject with rationale"],
    isHighlighted: false,
  },
  {
    stepNumber: 6,
    title: "Activate",
    badge: "Effective date",
    side: "right",
    bullets: [
      "Approved version becomes current on effective date",
      "First affected cycle monitored",
    ],
    isHighlighted: false,
  },
  {
    stepNumber: 7,
    title: "Monitor",
    badge: "Ongoing evidence",
    side: "left",
    bullets: [
      "Exceptions and reconciliation issues surfaced",
      "Evidence refresh needs tracked",
    ],
    isHighlighted: true,
  },
];

export default function ChangeControlTimelineSection() {
  return (
    <section className="w-full bg-[#F4F8FB] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl mx-auto text-left md:text-center">
          <div className="flex items-center md:justify-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>Effective-Dated Change Control</span>
          </div>
          <h2 className="text-3xl md:text-[32px] font-bold text-[#0A1928] leading-tight">
            Future change never silently <br className="hidden md:inline" /> overwrites current payroll behavior.
          </h2>
        </div>

        {/* Central Alternating Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#CBD5E1] -translate-x-1/2 hidden md:block" />

          <div className="space-y-8 md:space-y-12 relative">
            {TIMELINE_STEPS.map((step) => {
              const isLeft = step.side === "left";
              const isDark = step.isHighlighted;

              return (
                <div
                  key={step.stepNumber}
                  className="relative flex items-center w-full"
                >
                  {/* Step Card Container */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isLeft
                        ? "md:pr-12 md:mr-auto"
                        : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <div
                      className={`p-6 rounded-2xl border transition-all shadow-xs ${
                        isDark
                          ? "bg-gradient-to-r from-[#0B4573] to-[#0A8FD0] border-[#0281D3] text-white"
                          : "bg-white border-[#E1E8ED] text-[#0A1928]"
                      }`}
                    >
                      {/* Card Header: Title + Badge */}
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <h3 className="text-lg font-bold">{step.title}</h3>
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-medium ${
                            isDark
                              ? "bg-white/20 text-white"
                              : "bg-[#EBF4FA] text-[#0281D3]"
                          }`}
                        >
                          {step.badge}
                        </span>
                      </div>

                      {/* Bulleted Points */}
                      <ul className="space-y-2">
                        {step.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start gap-2 text-xs sm:text-sm ${
                              isDark ? "text-white/90" : "text-[#5C6E7E]"
                            }`}
                          >
                            <Check
                              className={`w-4 h-4 mt-0.5 shrink-0 ${
                                isDark ? "text-white" : "text-[#0281D3]"
                              }`}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Numbered Circle Node */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm z-10 hidden md:flex ${
                      isDark
                        ? "bg-[#0A2E4B] text-white border-2 border-white"
                        : "bg-white text-[#0A1928] border-2 border-[#CBD5E1]"
                    }`}
                  >
                    {step.stepNumber}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}