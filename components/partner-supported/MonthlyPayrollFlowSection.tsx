"use client";

import React from "react";

interface FlowStep {
  stepNumber: number;
  title: string;
  description: string;
}

const payrollSteps: FlowStep[] = [
  {
    stepNumber: 1,
    title: "Prepare",
    description:
      "Changes, time, variable pay and deductions are prepared in authoritative systems.",
  },
  {
    stepNumber: 2,
    title: "Validate",
    description: "Completeness, mapping and control checks run before release.",
  },
  {
    stepNumber: 3,
    title: "Transfer",
    description:
      "The approved input package moves through a contracted secure integration.",
  },
  {
    stepNumber: 4,
    title: "Process locally",
    description:
      "The partner performs local processing within the jurisdiction service schedule.",
  },
  {
    stepNumber: 5,
    title: "Review + approve",
    description:
      "Results, variances and exceptions return to the governed workflow.",
  },
  {
    stepNumber: 6,
    title: "Pay + file",
    description:
      "Funding, payments and statutory actions occur through the market's defined operator.",
  },
  {
    stepNumber: 7,
    title: "Reconcile + close",
    description: "Outcomes, statuses and evidence are reconciled and retained.",
  },
];

export default function MonthlyPayrollFlowSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3 max-w-3xl">
          <div className="text-xs font-bold tracking-wider text-[#1D74A2] uppercase font-mono">
            Monthly payroll flow
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B] leading-tight">
            From input to reconciled outcome, in seven governed steps.
          </h2>
        </div>

        {/* Seven Steps Grid / Flow */}
        <div className="relative pt-4">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[26px] left-[3%] right-[3%] h-[1px] bg-slate-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 sm:gap-6 relative z-10">
            {payrollSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="flex flex-col items-start space-y-3"
              >
                {/* Step Circle Badge */}
                <div className="w-9 h-9 rounded-full bg-[#EBF2FA] text-[#1D74A2] font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200/60 shadow-2xs">
                  {step.stepNumber}
                </div>

                {/* Step Title */}
                <h3 className="text-sm font-bold text-[#07243B]">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
