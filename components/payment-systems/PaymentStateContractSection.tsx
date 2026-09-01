"use client";

import React from "react";
import { Lock } from "lucide-react";

interface LifecycleStep {
  number: number;
  label: string;
}

const steps: LifecycleStep[] = [
  { number: 1, label: "PREPARED" },
  { number: 2, label: "APPROVED" },
  { number: 3, label: "RELEASED" },
  { number: 4, label: "SUBMITTED" },
  { number: 5, label: "ACCEPTED" },
  { number: 6, label: "PROCESSING" },
  { number: 7, label: "SETTLED" },
];

interface BadgeItem {
  label: string;
  variant: "warning" | "info";
}

const exceptionStates: BadgeItem[] = [
  { label: "REJECTED", variant: "warning" },
  { label: "RETURNED", variant: "warning" },
  { label: "REVERSED", variant: "warning" },
  { label: "CANCELLED", variant: "warning" },
  { label: "UNKNOWN_REVIEW", variant: "warning" },
  { label: "RECONCILED", variant: "info" },
  { label: "SUPERSEDED", variant: "info" },
];

export default function PaymentStateContractSection() {
  return (
    <section className="w-full bg-[#EFF4F7] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>PAYMENT STATE CONTRACT</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#0F172A] leading-tight">
              One lifecycle. No shortcuts to "Paid"
            </h2>
          </div>

          {/* Subtext */}
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs">
            The state contract is the single source of truth for where a payment
            instruction actually stands.
          </p>
        </div>

        {/* Main Dark Card Container */}
        <div className="bg-[#082F49] text-white rounded-3xl p-6 sm:p-10 shadow-2xl space-y-10 border border-slate-800">
          {/* Primary Lifecycle Flow */}
          <div className="space-y-6">
            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              PRIMARY LIFECYCLE
            </div>

            {/* String Representation */}
            <p className="text-xs font-mono text-slate-300 leading-relaxed tracking-wide">
              PREPARED → APPROVED → RELEASED → SUBMITTED → ACCEPTED → PROCESSING
              → SETTLED / BENEFICIARY_CREDIT_CONFIRMED
            </p>

            {/* Stepper Timeline */}
            <div className="pt-4 overflow-x-auto">
              <div className="min-w-[700px] relative flex items-center justify-between">
                {/* Connecting Line */}
                <div className="absolute top-1/4 left-0 right-0 h-[1.5px] bg-sky-900/80 -translate-y-1/2 z-0" />

                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="relative z-10 flex flex-col items-center gap-3"
                  >
                    {/* Step Circle */}
                    <div className="w-8 h-8 rounded-full bg-[#0A8FD0] text-white text-xs font-bold flex items-center justify-center border-2 border-[#0A1E30] shadow-md">
                      {step.number}
                    </div>
                    {/* Step Label */}
                    <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase">
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lock Callout Box */}
          <div className="relative bg-[#FFFFFF0F] border border-sky-900/50 rounded-2xl p-6 sm:p-8 flex items-start gap-4">
            <div className="p-2 rounded-lg text-[#F0C878] shrink-0 mt-0.5">
              <Lock className="w-4 h-4" />
            </div>

            <div className="space-y-1.5 text-xs">
              <h3 className="font-bold text-sm">
                The Paid / Synced lock.
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Only SETTLED carries settlement meaning, and only when backed by
                approved evidence. BENEFICIARY_CREDIT_CONFIRMED requires
                explicit beneficiary-credit evidence where the rail supports it.
                A payment is never labeled "Paid" or "Synced" when evidence only
                proves release, submission, acceptance or processing.
              </p>
            </div>
          </div>

          {/* Exception & Control States */}
          <div className="space-y-4 pt-2">
            <div className="text-[10px] font-bold tracking-widest text-[#8FB6D3] uppercase">
              EXCEPTION & CONTROL STATES
            </div>

            <div className="flex flex-wrap gap-2.5">
              {exceptionStates.map((item, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase ${
                    item.variant === "warning"
                      ? "bg-[#C99A2E38] text-[#F0C878]"
                      : "bg-[#3A9AD638] text-[#8FD0F5]"
                  }`}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
