"use client";

import React from "react";

export default function GovernedSuccessHandoverSection() {
  const steps = [
    {
      step: 1,
      title: "Go-live",
      description: "Production complete for the defined scope.",
    },
    {
      step: 2,
      title: "Handover",
      description: "Decisions, defects and contacts transfer with owners.",
    },
    {
      step: 3,
      title: "Stabilization",
      description: "Open risks stay visible until exit criteria are met.",
    },
    {
      step: 4,
      title: "Ownership",
      description: "Stakeholders and success goals are confirmed.",
    },
    {
      step: 5,
      title: "Success planning",
      description: "Outcomes, actions and review cadence begin.",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Category Label */}
        <p className="text-xs font-semibold text-[#3B82F6] tracking-wide mb-3">
          Handover
        </p>

        {/* Main Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] text-center tracking-tight leading-tight mb-12 max-w-xl">
          From go-live to a governed success state.
        </h2>

        {/* 5 Cards Row Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          {steps.map((item, idx) => (
            <React.Fragment key={idx}>
              {/* Step Card */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xs flex flex-col items-center text-center w-full min-h-[190px] justify-center transition-all hover:shadow-md">
                {/* Step Number Badge */}
                <span className="w-7 h-7 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#2563EB] text-xs font-bold flex items-center justify-center mb-4">
                  {item.step}
                </span>

                {/* Step Title */}
                <h3 className="text-sm font-bold text-[#0B192C] mb-2">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-[#64748B] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Arrow Indicator (Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center shrink-0 px-1 text-[#93C5FD]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              )}

              {/* Arrow Indicator (Mobile) */}
              {idx < steps.length - 1 && (
                <div className="flex md:hidden items-center justify-center text-[#93C5FD] my-1">
                  <svg
                    className="w-5 h-5 rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
