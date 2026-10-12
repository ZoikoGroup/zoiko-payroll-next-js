"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface FlowStep {
  id: string;
  label: string;
  description: string;
}

const flowSteps: FlowStep[] = [
  {
    id: "validated-inputs",
    label: "Validated inputs",
    description:
      "Only inputs eligible under readiness/approval rules are used — no double counting.",
  },
  {
    id: "establish-context",
    label: "Establish context",
    description:
      "Applies tax territory, employment type, and effective-dated policy rules.",
  },
  {
    id: "calculate-earnings",
    label: "Calculate earnings",
    description:
      "Computes base salary, allowances, overtime, and variable pay elements.",
  },
  {
    id: "statutory-logic",
    label: "Statutory logic",
    description:
      "Runs tax brackets, social security, and mandatory statutory contributions.",
  },
  {
    id: "deductions-costs",
    label: "Deductions & costs",
    description:
      "Applies voluntary benefits, pensions, and employer-side liability costs.",
  },
  {
    id: "net-accumulators",
    label: "Net + accumulators",
    description: "Finalizes take-home pay and updates year-to-date balances.",
  },
];

export default function PayrollCalculationFlow() {
  const [activeStepId, setActiveStepId] = useState<string>("validated-inputs");

  const activeStep =
    flowSteps.find((s) => s.id === activeStepId) || flowSteps[0];

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
            <span className="text-[#0A78C3] font-bold">—</span>
            <span>DIRECT ANSWER</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B]">
            How does payroll calculation work?
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Validated inputs meet effective-dated rules to produce gross-to-net,
            in context.
          </p>
        </div>

        {/* Workflow Visual Container */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {/* Horizontal Step Flow Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {flowSteps.map((step, index) => {
              const isActive = activeStepId === step.id;
              return (
                <React.Fragment key={step.id}>
                  <button
                    onClick={() => setActiveStepId(step.id)}
                    className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                      isActive
                        ? "bg-white text-[#0A78C3] border-slate-200/90 hover:border-slate-300 hover:bg-slate-50"
                        : "bg-white text-[#07243B] border-slate-200/90 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {step.label}
                  </button>

                  {/* Render Arrow icon between steps */}
                  {index < flowSteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 shrink-0 hidden sm:block" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Branch Sub-Badge "Reviewable result" pointing down */}
          <div className="flex justify-center -mt-2">
            <div className="flex flex-col items-center gap-1.5">
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 rotate-90" />
              <div className="px-5 py-1.5 rounded-full bg-[#E7EDFD] border border-[#0A78C3]/40 text-[#0A78C3] text-xs font-semibold">
                Reviewable result
              </div>
            </div>
          </div>

          {/* Dynamic Explanation Banner */}
          <div className="max-w-2xl mx-auto pt-2">
            <div className="bg-[#E7EDFD]/80 border-l-4 border-l-[#0A78C3] rounded-r-2xl rounded-l-none p-4 sm:p-5 shadow-2xs">
              <p className="text-xs sm:text-sm text-[#07243B] font-medium text-center leading-relaxed">
                {activeStep.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
