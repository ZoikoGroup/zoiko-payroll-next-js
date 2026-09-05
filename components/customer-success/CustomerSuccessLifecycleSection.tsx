"use client";

import React from "react";

export default function CustomerSuccessLifecycleSection() {
  const steps = [
    {
      title: "Implementation",
      description: "Handover with owned risks and agreed goals.",
      active: true,
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
    {
      title: "Stabilize",
      description: "Confirm reliable production operations.",
      active: false,
      icon: (
        <svg
          className="w-5 h-5 text-[#3B82F6]"
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
      title: "Adopt",
      description: "Grow role and process readiness.",
      active: false,
      icon: (
        <svg
          className="w-5 h-5 text-[#3B82F6]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Optimize",
      description: "Reduce manual work and recurring friction.",
      active: false,
      icon: (
        <svg
          className="w-5 h-5 text-[#3B82F6]"
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
      title: "Evolve",
      description: "Adapt as countries and business needs change.",
      active: false,
      icon: (
        <svg
          className="w-5 h-5 text-[#3B82F6]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Category Label */}
        <p className="text-xs font-semibold text-[#3B82F6] tracking-wide mb-3">
          Customer success journey
        </p>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] text-center tracking-tight leading-tight mb-16 max-w-xl">
          One lifecycle, from handover to continuous evolution.
        </h2>

        {/* Horizontal Stepper Process Container */}
        <div className="w-full relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-7 left-[8%] right-[8%] h-[1px] bg-[#3B82F6]/30 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group"
              >
                {/* Circle Icon Badge */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all shadow-2xs ${
                    step.active
                      ? "bg-gradient-to-r from-[#2563EB] to-[#60A5FA] shadow-md"
                      : "bg-white border border-[#E2E8F0] hover:border-[#3B82F6]/50"
                  }`}
                >
                  {step.icon}
                </div>

                {/* Step Title */}
                <h3 className="text-sm font-bold text-[#0B192C] mb-1.5">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-[#64748B] leading-relaxed max-w-[180px]">
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
