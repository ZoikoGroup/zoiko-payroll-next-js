"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const workflowSteps = ["Receive", "Normalize", "Validate", "Triage", "Resolve"];

export default function DirectAnswerSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase">
            <span className="text-[#0A78C3] font-bold">—</span>
            <span>DIRECT ANSWER</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#07243B]">
            What is payroll input validation ?
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Checking completeness, format, timeliness and rule compatibility
            before calculation.
          </p>
        </div>

        {/* Workflow Steps Horizontal Flow */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
          {workflowSteps.map((step, idx) => (
            <React.Fragment key={step}>
              <div className="px-4 py-2 rounded-full bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-[#07243B] shadow-2xs">
                {step}
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </React.Fragment>
          ))}

          {/* Final 'Ready for calculation' Step Badge */}
          <div className="px-4 py-2 rounded-full bg-[#E7EDFD] border border-[#0A78C3] text-xs sm:text-sm font-semibold text-[#0A78C3]">
            Ready for calculation
          </div>
        </div>

        {/* Highlight Callout Box */}
        <div className="pt-4 max-w-3xl mx-auto">
          <div className="bg-[#E7EDFD] border-l-4 border-l-[#0A78C3] rounded-r-lg p-4 text-center">
            <p className="text-xs sm:text-sm text-[#07243B] font-medium">
              Only ready data moves forward — nothing advances until it&apos;s
              revalidated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
