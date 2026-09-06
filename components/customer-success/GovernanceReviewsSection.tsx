"use client";

import React from "react";

export default function GovernanceReviewsSection() {
  const steps = [
    {
      title: "Operational check-in",
      description: "Near-term risks, open actions and support patterns.",
      icon: (
        <svg
          className="w-5 h-5 text-[#2563EB]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ),
    },
    {
      title: "Success review",
      description: "Progress against objectives, health and priorities.",
      icon: (
        <svg
          className="w-5 h-5 text-[#2563EB]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Executive review",
      description: "Strategic outcomes, major risks and investment decisions.",
      icon: (
        <svg
          className="w-5 h-5 text-[#2563EB]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
    },
    {
      title: "Specialist review",
      description: "Focused integration, process or optimization workshops.",
      icon: (
        <svg
          className="w-5 h-5 text-[#2563EB]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Category Label */}
        <p className="text-xs font-semibold text-[#2563EB] tracking-wide mb-3">
          Governance
        </p>

        {/* Main Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] text-center tracking-tight leading-tight mb-16 max-w-2xl">
          Reviews generated from the success plan, not slide decks.
        </h2>

        {/* Timeline Row Container */}
        <div className="w-full relative">
          {/* Horizontal Line Connector (Desktop) */}
          <div className="hidden sm:block absolute top-7 left-[10%] right-[10%] h-[1px] bg-[#E2E8F0] z-0" />

          {/* Stepper Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group"
              >
                {/* Circle Icon Container */}
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#2563EB] flex items-center justify-center mb-4 shadow-2xs group-hover:border-[#2563EB] transition-colors">
                  {step.icon}
                </div>

                {/* Step Title */}
                <h3 className="text-sm font-bold text-[#0B192C] mb-1.5">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-[#64748B] leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
