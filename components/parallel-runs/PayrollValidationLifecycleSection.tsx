"use client";

import React from "react";

export default function PayrollValidationLifecycleSection() {
  const steps = [
    {
      title: "Prepare baseline",
      description: "Capture the trusted legacy payroll output for comparison.",
      dotBg: "bg-[#3B82F6]", // Blue
      align: "right",
    },
    {
      title: "Run parallel payroll",
      description: "Process the same population through Zoiko Payroll.",
      dotBg: "bg-[#22C55E]", // Green
      align: "left",
    },
    {
      title: "Compare results",
      description: "Match every component across both payrolls automatically.",
      dotBg: "bg-[#1E3A8A]", // Dark Blue
      align: "right",
    },
    {
      title: "Investigate variances",
      description: "Classify, assign and root-cause every difference found.",
      dotBg: "bg-[#F59E0B]", // Yellow/Orange
      align: "left",
    },
    {
      title: "Retest",
      description: "Confirm fixes hold across a fresh validation cycle.",
      dotBg: "bg-[#3B82F6]", // Blue
      align: "right",
    },
    {
      title: "Approve cycle",
      description: "Sign off the cycle against agreed acceptance criteria.",
      dotBg: "bg-[#22C55E]", // Green
      align: "left",
    },
    {
      title: "Go-live decision",
      description: "Move to production on a governed, evidenced approval.",
      dotBg: "bg-[#EAB308]", // Yellow
      align: "right",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-4xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Main Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] text-center tracking-tight mb-16">
          The payroll validation lifecycle.
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative w-full flex flex-col items-center">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-3 bottom-3 w-[1.5px] bg-[#94A3B8]/40" />

          {/* Timeline Steps */}
          <div className="w-full flex flex-col gap-10 sm:gap-12 relative z-10">
            {steps.map((step, idx) => {
              const isRight = step.align === "right";

              return (
                <div
                  key={idx}
                  className="relative flex items-center justify-center w-full min-h-[56px]"
                >
                  {/* Left Side Content Slot */}
                  <div className="w-1/2 pr-8 sm:pr-12 text-right">
                    {!isRight && (
                      <div className="flex flex-col items-end">
                        <h3 className="text-base sm:text-lg font-bold text-[#0B192C] leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed max-w-xs mt-0.5">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Dot Badge with White Ring */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white ring-2 ring-[#E2E8F0] shadow-2xs flex items-center justify-center">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${step.dotBg}`}
                      />
                    </div>
                  </div>

                  {/* Right Side Content Slot */}
                  <div className="w-1/2 pl-8 sm:pl-12 text-left">
                    {isRight && (
                      <div className="flex flex-col items-start">
                        <h3 className="text-base sm:text-lg font-bold text-[#0B192C] leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed max-w-xs mt-0.5">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
