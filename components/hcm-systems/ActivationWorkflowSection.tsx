"use client";

import React from "react";
import Image from "next/image";

interface WorkflowStep {
  stepNumber: string;
  title: string;
}

const stepsData: WorkflowStep[] = [
  { stepNumber: "01", title: "Discovery" },
  { stepNumber: "02", title: "Access & method" },
  { stepNumber: "03", title: "Mapping" },
  { stepNumber: "04", title: "Test" },
  { stepNumber: "05", title: "Reconciliation" },
  { stepNumber: "06", title: "Activation" },
  { stepNumber: "07", title: "Stabilization" },
];

export default function ActivationWorkflowSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column: Image Container */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm border border-slate-100">
            <Image
              src="/images/footer-integrations/4.png"
              alt="Team members reviewing documents and laptop during activation workflow"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column: Text Block */}
          <div className="space-y-4 lg:pl-4">
            {/* Tag Line */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
              <span className="w-3 h-0.5 bg-[#2F6FED]" />
              <span>IMPLEMENTATION + ACTIVATION WORKFLOW</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[26px] font-bold text-[#0F172A] tracking-tight">
              Never "live in days." Timing is source-governed only
            </h2>

            {/* Subtext */}
            <p className="text-sm text-[#5B646B] leading-relaxed">
              Timing is determined by the source system and governed payroll
              rules. Records are processed according to their effective dates,
              not assumed calendar days.
            </p>
          </div>
        </div>

        {/* Bottom Horizontal Workflow Steps Bar */}
        <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm divide-y md:divide-y-0 md:divide-x divide-slate-100 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 overflow-hidden">
          {stepsData.map((step, idx) => (
            <div
              key={idx}
              className="p-5 text-center space-y-1.5 flex flex-col items-center justify-center hover:bg-slate-50/50 transition-colors"
            >
              <span className="text-xs font-bold text-[#2F6FED] font-mono">
                {step.stepNumber}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#0F172A] leading-snug">
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
