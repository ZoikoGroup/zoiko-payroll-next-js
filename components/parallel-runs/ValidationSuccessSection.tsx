"use client";

import React from "react";

export default function ValidationSuccessSection() {
  const steps = [
    { label: "Validation Exit" },
    { label: "Governance Review" },
    { label: "Executive Approval" },
    { label: "Go-Live" },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Main Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] text-center tracking-tight leading-tight mb-3 max-w-2xl">
          Validation success does not automatically mean go-live.
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#64748B] text-center max-w-xl leading-relaxed mb-16 font-normal">
          Each checkpoint is a recorded decision, not an assumption — payroll
          only moves forward once it is explicitly approved.
        </p>

        {/* Horizontal Process Steps Timeline */}
        <div className="w-full max-w-4xl relative">
          {/* Horizontal Connecting Line */}
          <div className="absolute top-2.5 left-8 right-8 h-[1px] bg-[#3B82F6]/30" />

          {/* Step Items Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                {/* Circle Marker */}
                <div className="w-4 h-4 rounded-full bg-white border-2 border-[#2563EB] shadow-2xs mb-3 flex items-center justify-center" />

                {/* Label */}
                <span className="text-xs sm:text-[13px] font-bold text-[#0B192C] tracking-tight">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
