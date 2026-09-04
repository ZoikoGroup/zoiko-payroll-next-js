"use client";

import React from "react";

export default function DataLifecycleSection() {
  const steps = [
    {
      stepNumber: 1,
      title: "Ingest",
      description: "Securely receive and validate incoming payroll data.",
      align: "left",
      active: false,
    },
    {
      stepNumber: 2,
      title: "Operational processing",
      description: "Process payroll through controlled operational workflows.",
      align: "right",
      active: false,
    },
    {
      stepNumber: 3,
      title: "Storage & service processing",
      description: "Protect and manage data throughout service processing.",
      align: "left",
      active: false,
    },
    {
      stepNumber: 4,
      title: "Integration & payment flows",
      description: "Govern secure data exchange and payment-related flows.",
      align: "right",
      active: false,
    },
    {
      stepNumber: 5,
      title: "Exports",
      description: "Control and record access to exported payroll data.",
      align: "left",
      active: false,
    },
    {
      stepNumber: 6,
      title: "Backup & recovery",
      description: "Maintain reliable backups and tested recovery readiness.",
      align: "right",
      active: false,
    },
    {
      stepNumber: 7,
      title: "Stabilization",
      description: "Cycles monitored exceptions reviewed.",
      align: "left",
      active: true,
    },
  ] as const;

  return (
    <div className="flex bg-[#F9FAFB] items-center justify-center py-12 md:py-20 text-[#0F172A]">
      <div className="max-w-5xl w-full flex flex-col items-center px-4">
        {/* Subtitle / Category Header */}
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0082CA] uppercase mb-3 text-center">
          / DATA LIFECYCLE BY LOCATION
        </span>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0B192C] text-center tracking-tight mb-12 md:mb-16">
          Different stages, different boundaries
        </h2>

        {/* Vertical Timeline Wrapper */}
        <div className="relative w-full max-w-3xl flex flex-col items-center">
          {/* Central Vertical Line */}
          <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[2px] bg-[#CBD5E1] z-0" />

          {/* Timeline Nodes */}
          <div className="w-full flex flex-col gap-6 md:gap-8 z-10">
            {steps.map((step) => (
              <div
                key={step.stepNumber}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center relative"
              >
                {/* Left Side Content */}
                <div
                  className={`flex justify-end ${
                    step.align === "left"
                      ? "opacity-100"
                      : "opacity-0 hidden md:flex pointer-events-none"
                  }`}
                >
                  <div
                    className={`w-full max-w-sm p-5 sm:p-6 rounded-2xl border transition-all ${
                      step.active
                        ? "bg-gradient-to-r from-[#0B4573] to-[#0A8FD0] border-[#E1E8F0] text-white shadow-md"
                        : "bg-white border-[#E1E8F0] text-[#1E293B] shadow-xs"
                    }`}
                  >
                    <h3
                      className={`text-sm sm:text-base font-bold mb-1.5 ${
                        step.active ? "text-white" : "text-[#0F172A]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-[13px] leading-relaxed ${
                        step.active ? "text-[#ECF3F7]" : "text-[#64748B]"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Central Number Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors ${
                      step.active
                        ? "bg-[#0A2E4B] border-[#0A2E4B] text-white"
                        : "bg-white border-[#94A3B8] text-[#334155]"
                    }`}
                  >
                    {step.stepNumber}
                  </div>
                </div>

                {/* Right Side Content */}
                <div
                  className={`flex justify-start ${
                    step.align === "right"
                      ? "opacity-100"
                      : "opacity-0 hidden md:flex pointer-events-none"
                  }`}
                >
                  <div
                    className={`w-full max-w-sm p-5 sm:p-6 rounded-2xl border transition-all ${
                      step.active
                        ? "bg-[#0072CE] border-[#0072CE] text-white shadow-md"
                        : "bg-white border-[#E2E8F0] text-[#1E293B] shadow-xs"
                    }`}
                  >
                    <h3
                      className={`text-sm sm:text-base font-bold mb-1.5 ${
                        step.active ? "text-white" : "text-[#0F172A]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-[13px] leading-relaxed ${
                        step.active ? "text-white/90" : "text-[#64748B]"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-xs sm:text-[13px] text-[#64748B] text-center mt-12 sm:mt-16 leading-relaxed">
          Each stage may carry its own geographic or legal boundary — a single
          region claim never covers every stage.
        </p>
      </div>
    </div>
  );
}
