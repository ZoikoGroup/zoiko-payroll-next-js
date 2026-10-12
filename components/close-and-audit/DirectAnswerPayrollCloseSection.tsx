"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface FlowStep {
  label: string;
  highlighted?: boolean;
}

const stepsRow1: FlowStep[] = [
  { label: "Freeze scope" },
  { label: "Finalize calculation" },
  { label: "Reconcile totals" },
  { label: "Resolve exceptions" },
  { label: "Obtain sign-off" },
];

const stepsRow2: FlowStep[] = [
  { label: "Close & lock" },
  { label: "Preserve evidence", highlighted: true },
];

export default function DirectAnswerPayrollCloseSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          {/* Eyebrow Label with Em-Dash */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>—</span>
            <span>DIRECT ANSWER</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
            What happens when payroll is closed ?
          </h2>

          {/* Subtitle / Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Close confirms required checks, reconciliations, exception handling
            and approvals — then records the final result set as evidence, moves
            the period into a locked state, and restricts material changes.
          </p>
        </div>

        {/* Process Flow Pills */}
        <div className="space-y-3 pt-2">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {stepsRow1.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
                  {step.label}
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
              </React.Fragment>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {stepsRow2.map((step, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={`px-4 py-2 rounded-full text-xs font-semibold shadow-2xs ${
                    step.highlighted
                      ? "bg-white border-2 border-[#0A8FD0] text-[#0A8FD0]"
                      : "bg-white border border-slate-200 text-slate-700"
                  }`}
                >
                  {step.label}
                </div>
                {idx < stepsRow2.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Callout Container (No rounded corners, light blue bg, left border accent) */}
        <div className="bg-[#E9F0F8] border-l-4 border-l-[#0A8FD0] p-5 shadow-2xs rounded-none">
          <p className="text-xs sm:text-[15px] text-slate-600 font-medium leading-relaxed">
            Later corrections use an authorized reopen or post-close correction
            flow — the original close record is never overwritten.
          </p>
        </div>
      </div>
    </section>
  );
}
