"use client";

import React from "react";

interface ImplementationStage {
  stageNumber: number;
  title: string;
  description: string;
  isFilled: boolean;
}

const implementationStages: ImplementationStage[] = [
  {
    stageNumber: 1,
    title: "Qualify",
    description:
      "Confirm entities, jurisdictions, headcount and current providers.",
    isFilled: true,
  },
  {
    stageNumber: 2,
    title: "Scope",
    description: "Build the responsibility matrix, cutoffs and payment flow.",
    isFilled: true,
  },
  {
    stageNumber: 3,
    title: "Configure",
    description: "Set pay-group structures, roles, calendars and mappings.",
    isFilled: false,
  },
  {
    stageNumber: 4,
    title: "Test",
    description: "Run schema, calculation, workflow and security validation.",
    isFilled: false,
  },
  {
    stageNumber: 5,
    title: "Parallel / acceptance",
    description: "Run controlled acceptance cycles by jurisdiction and risk.",
    isFilled: false,
  },
  {
    stageNumber: 6,
    title: "Go live + hypercare",
    description: "Activate after readiness gates pass; monitor first cycles.",
    isFilled: false,
  },
];

export default function ImplementationSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>IMPLEMENTATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B] leading-tight">
            Six stages from qualification to hypercare.
          </h2>
        </div>

        {/* Six Stages Grid / Flow */}
        <div className="relative pt-4">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[26px] left-[4%] right-[4%] h-[1px] bg-slate-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6 relative z-10">
            {implementationStages.map((stage) => (
              <div
                key={stage.stageNumber}
                className="flex flex-col items-start space-y-3"
              >
                {/* Stage Circle Badge */}
                <div
                  className={`w-9 h-9 rounded-full font-bold text-xs flex items-center justify-center shrink-0 border transition-all ${
                    stage.isFilled
                      ? "bg-[#1D70B8] text-white border-[#1D70B8] shadow-2xs"
                      : "bg-white text-[#1D70B8] border-[#1D70B8]/60 shadow-2xs"
                  }`}
                >
                  {stage.stageNumber}
                </div>

                {/* Stage Title */}
                <h3 className="text-sm font-bold text-[#07243B]">
                  {stage.title}
                </h3>

                {/* Stage Description */}
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
