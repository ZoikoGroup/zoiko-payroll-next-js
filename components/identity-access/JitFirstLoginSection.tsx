"use client";

import React from "react";

interface FlowStep {
  title: string;
  badgeLabel: string;
  badgeColor: string;
  dotColor: string;
  lineColor?: string;
}

const flowSteps: FlowStep[] = [
  {
    title: "Federated sign-in succeeds",
    badgeLabel: "Authenticated",
    badgeColor: "bg-[#E8F0FE] text-[#1A73E8]",
    dotColor: "bg-[#1A73E8]",
    lineColor: "bg-amber-600",
  },
  {
    title: "Identity validated",
    badgeLabel: "Checking attributes",
    badgeColor: "bg-[#FEF7E0] text-[#B06000]",
    dotColor: "bg-amber-600",
    lineColor: "bg-[#137333]",
  },
  {
    title: "Account created — minimal access",
    badgeLabel: "Provisioned",
    badgeColor: "bg-[#E6F4EA] text-[#137333]",
    dotColor: "bg-[#137333]",
    lineColor: "bg-slate-300",
  },
  {
    title: "Role mapping validated",
    badgeLabel: "Pending governance",
    badgeColor: "bg-[#F1F3F4] text-[#5F6368]",
    dotColor: "bg-slate-400",
  },
];

export default function JitFirstLoginSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Header Block */}
            <div className="space-y-3">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
                <span className="w-4 h-[2px] bg-[#0A8FD0] inline-block" />
                <span>JIT & FIRST-LOGIN</span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
                JIT-created identities default to minimal access
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              First-login success proves authentication only — never privilege.
            </p>

            {/* Comparison Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* JIT Unsupported */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#F1F3F4] text-[#5F6368]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F6368]" />
                  JIT unsupported
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  No account created on first SSO — provisioning requirement is
                  shown.
                </p>
              </div>

              {/* JIT Supported */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#E8F0FE] text-[#1A73E8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8]" />
                  JIT supported
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  Created only after identity validation, with minimal safe
                  access.
                </p>
              </div>
            </div>

            {/* Callout Box */}
            <div className="bg-[#E6F0FA] p-4 sm:p-5 border-l-4 border-[#0A8FD0] shadow-xs">
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Missing attributes block/review. Unknown tenant rejects safely
                or routes to validation.
              </p>
            </div>
          </div>

          {/* Right Column - First-login Flow Timeline Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="bg-[#F8FAFC] px-6 py-3 border-b border-slate-100 flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <span className="text-[11px] text-slate-400 font-normal ml-2">
                  First-login flow
                </span>
              </div>

              {/* Vertical Timeline Stepper */}
              <div className="p-6 sm:p-8 space-y-6">
                {flowSteps.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-4">
                    {/* Circle Indicator & Vertical Line */}
                    <div className="flex flex-col items-center self-stretch">
                      <span
                        className={`w-3.5 h-3.5 rounded-full ${step.dotColor} shrink-0 relative z-10 mt-0.5`}
                      />
                      {idx < flowSteps.length - 1 && (
                        <span
                          className={`w-[2px] flex-1 ${step.lineColor || "bg-slate-200"} my-1`}
                        />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="space-y-1.5 pb-2">
                      <h3 className="text-xs sm:text-sm font-bold text-[#07243B]">
                        {step.title}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-semibold ${step.badgeColor}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${step.dotColor}`}
                        />
                        {step.badgeLabel}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
