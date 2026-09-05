"use client";

import React from "react";

export default function PayrollMaturitySection() {
  const steps = [
    {
      title: "Stabilize",
      description: "Reliable production operation with known ownership.",
    },
    {
      title: "Standardize",
      description: "Consistent processes, controls and country governance.",
    },
    {
      title: "Optimize",
      description: "Reduce manual work, defects and friction.",
    },
    {
      title: "Scale",
      description: "Add countries and complexity without added overhead.",
    },
    {
      title: "Evolve",
      description: "Continuously refine the operating model as needs change.",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center px-4 sm:px-6">
        {/* Left Side: Category Label & Heading */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <p className="text-xs font-semibold text-[#3B82F6] tracking-wide mb-3">
            Optimization & maturity
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] tracking-tight leading-[1.15] max-w-md">
            Payroll maturity is a path, not a milestone.
          </h2>
        </div>

        {/* Right Side: Vertical Timeline & Cards */}
        <div className="lg:col-span-7 relative flex pl-2 sm:pl-4">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[15px] sm:left-[19px] top-6 bottom-6 w-[8px] bg-gradient-to-b from-[#2563EB] to-[#60A5FA] rounded-full z-0" />

          {/* Steps List */}
          <div className="w-full space-y-4 relative z-10">
            {steps.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 sm:gap-6 group">
                {/* Timeline Capsule Node */}
                <div className="w-[14px] h-[24px] rounded-[12px] bg-white border-[3px] border-[#2563EB] shrink-0 flex items-center justify-center shadow-xs transition-transform group-hover:scale-105" />

                {/* Content Card */}
                <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5 sm:p-6 shadow-xs flex-1 transition-all hover:shadow-md">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B192C] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
