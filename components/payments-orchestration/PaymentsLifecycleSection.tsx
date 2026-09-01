"use client";

import React from "react";

interface StageStep {
  number: string;
  title: string;
  active?: boolean;
}

const steps: StageStep[] = [
  { number: "01", title: "Approved payroll" },
  { number: "02", title: "Create obligations" },
  { number: "03", title: "Validate payment data" },
  { number: "04", title: "Confirm funding" },
  { number: "06", title: "Authorize release" },
  { number: "07", title: "Route / execute" },
  { number: "08", title: "Track outcome" },
  { number: "09", title: "Reconcile", active: true },
];

export default function PaymentsLifecycleSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-5xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
            <span className="text-[#0A78C3] font-bold">—</span>
            <span>DIRECT ANSWER</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            How do payments move from approval to completion?
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Every stage carries a status and an owner — nothing jumps straight
            to &quot;Paid.&quot;
          </p>
        </div>

        {/* 4-Column Grid for Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-200 ${
                step.active
                  ? "bg-gradient-to-r from-[#2A8BCC] to-[#125B8C] text-white shadow-md"
                  : "bg-white border border-slate-200/90 text-[#07243B] hover:border-slate-300"
              }`}
            >
              <span
                className={`text-xs font-semibold font-mono mb-2 ${
                  step.active ? "text-[#8FD0F2]" : "text-[#8FD0F2]"
                }`}
              >
                {step.number}
              </span>
              <h3 className="text-sm font-bold leading-snug">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
