"use client";

import React from "react";

interface StepItem {
  number: number;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const stepsData: StepItem[] = [
  {
    number: 1,
    title: "Receive access invitation",
    description: "Sent to the email or phone your employer has on file.",
  },
  {
    number: 2,
    title: "Open the trusted route",
    description:
      "Use the official link or method — never a forwarded or shared invitation.",
  },
  {
    number: 3,
    title: "Verify your identity",
    description:
      "Confirm identity through the approved verification method only.",
  },
  {
    number: 4,
    title: "Create or confirm authentication",
    description: "Set your password and/or confirm your employer's SSO.",
  },
  {
    number: 5,
    title: "Accept required notices",
    description: "Access is scoped to your current employer and role.",
  },
  {
    number: 6,
    title: "Enter your authorized workspace",
    description: "Access is scoped to your current employer and role.",
    isHighlighted: true,
  },
];

const statusBadges = [
  { label: "Valid invitation", bg: "bg-[#E6F4EA] text-[#137333]" },
  { label: "Expired invitation", bg: "bg-[#FEF7E0] text-[#B06000]" },
  {
    label: "Already activated",
    bg: "bg-white text-slate-700 border border-slate-200",
  },
  { label: "Not provisioned", bg: "bg-[#FCE8E6] text-[#C5221F]" },
  { label: "Access no longer active", bg: "bg-[#FCE8E6] text-[#C5221F]" },
];

export default function FirstTimeAccessSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>FIRST-TIME ACCESS & ACTIVATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B] leading-tight">
            Six steps to your first sign-in
          </h2>
        </div>

        {/* Timeline Flow */}
        <div className="relative my-8">
          {/* Central Line */}
          <div className="absolute left-1/2 top-4 bottom-12 w-[2px] bg-slate-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-6 md:space-y-4 relative">
            {stepsData.map((step) => {
              const isEven = step.number % 2 === 0;

              return (
                <div
                  key={step.number}
                  className="flex flex-col md:flex-row items-center relative"
                >
                  {/* Left Column */}
                  <div className="w-full md:w-1/2 md:pr-8 flex justify-end">
                    {!isEven ? (
                      <div className="w-full p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-[#0F172A]">
                        <h3 className="text-sm sm:text-base font-bold text-[#07243B] mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed font-medium text-slate-500">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  {/* Center Circle Badge */}
                  <div className="my-3 md:my-0 z-10 flex items-center justify-center shrink-0">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm border-2 shadow-xs ${
                        step.isHighlighted
                          ? "bg-[#0A2E4B] text-white border-white"
                          : "bg-white text-[#07243B] border-slate-300"
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="w-full md:w-1/2 md:pl-8 flex justify-start">
                    {isEven ? (
                      <div
                        className={`w-full p-5 sm:p-6 rounded-2xl border transition-all ${
                          step.isHighlighted
                            ? "bg-gradient-to-r from-[#0B4573] to-[#0A8FD0] text-white border-[#0A73B1] shadow-lg"
                            : "bg-white border-slate-200/80 shadow-2xs text-[#0F172A]"
                        }`}
                      >
                        <h3
                          className={`text-sm sm:text-base font-bold mb-1 ${
                            step.isHighlighted ? "text-white" : "text-[#07243B]"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`text-xs sm:text-sm leading-relaxed font-medium ${
                            step.isHighlighted
                              ? "text-blue-100"
                              : "text-slate-500"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Status Badges & Action CTA */}
        <div className="pt-4 space-y-6 text-center">
          {/* Status Badges Pill List */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {statusBadges.map((badge, idx) => (
              <span
                key={idx}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${badge.bg}`}
              >
                {badge.label}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <div>
            <button
              type="button"
              className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-[#07243B] font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl border border-slate-200 shadow-2xs transition-all"
            >
              Request approved reissue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
