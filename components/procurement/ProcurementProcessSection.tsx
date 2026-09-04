"use client";

import React from "react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  active?: boolean;
}

const processSteps: ProcessStep[] = [
  {
    step: "1",
    title: "Discover",
    description: "Pricing, plans, scope",
  },
  {
    step: "2",
    title: "Build pack",
    description: "Commercial + legal + security",
  },
  {
    step: "3",
    title: "Due diligence",
    description: "Security, privacy, RFP",
  },
  {
    step: "4",
    title: "Legal review",
    description: "Quote, order, DPA",
  },
  {
    step: "5",
    title: "Onboarding",
    description: "Tax, corporate, invoicing",
  },
  {
    step: "6",
    title: "Order & implementation",
    description: "Authorized order begins",
  },
  {
    step: "7",
    title: "Service Commencement",
    description: "Production begins when approved",
    active: true,
  },
];

export default function ProcurementProcessSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF4F7] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label with slanted dark slash */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              PROCUREMENT PROCESS
            </span>
          </div>

          {/* Title (31px) */}
          <h2 className="text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            From discovery to Service Commencement.
          </h2>
        </div>

        {/* Main Dark Container */}
        <div className="bg-[#082F49] border border-[#0A2D44] rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl text-white">
          {/* Timeline Wrapper */}
          <div className="relative">
            {/* Connecting Horizontal Line across steps */}
            <div className="hidden lg:block absolute top-6 left-12 right-12 h-0.5 bg-[#FFFFFF2E] z-0" />

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4 relative z-10">
              {processSteps.map((item, idx) => {
                const isActive = item.active;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center space-y-3"
                  >
                    {/* Circle Number */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shadow-md transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-[#2C90D0] to-[#117DC5] text-white"
                          : "bg-[#FFFFFF14] text-slate-300 border border-slate-700/80"
                      }`}
                    >
                      {item.step}
                    </div>

                    {/* Step Title & Description */}
                    <div className="space-y-1">
                      <h3 className="text-xs sm:text-sm font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#9FC1DB] font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Footer Callout inside Dark Box */}
          <div className="mt-12 pt-6 border-t border-slate-800/80 text-center lg:text-left">
            <p className="text-[12.5px] text-[#9FC1DB] font-medium leading-relaxed max-w-3xl">
              Procurement approval alone never activates payroll, payment or
              filing access. Commercial execution, implementation readiness and
              Service Commencement remain separate controlled states.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
