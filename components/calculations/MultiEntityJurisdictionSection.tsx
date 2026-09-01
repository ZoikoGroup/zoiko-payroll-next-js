"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface WorkflowStep {
  id: string;
  label: string;
}

const workflowSteps: WorkflowStep[] = [
  { id: "author", label: "Author" },
  { id: "review", label: "Review" },
  { id: "test", label: "Test" },
  { id: "approve", label: "Approve" },
  { id: "version", label: "Version" },
  { id: "deploy", label: "Deploy" },
  { id: "monitor", label: "Monitor" },
];

export default function MultiEntityJurisdictionSection() {
  return (
    <section className="relative w-full min-h-[520px] py-20 px-4 sm:px-6 lg:px-8 text-white flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/payroll-operation/bg4.png"
          alt="Dark executive office background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Blue Semi-Transparent Overlay */}
        <div className="absolute inset-0 bg-[#071927]/90 backdrop-blur-xs" />
      </div>

      {/* Content Container (max-w-6xl) */}
      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#8FB0FF] uppercase font-mono">
            <span className="text-[#8FB0FF] font-bold">—</span>
            <span>MULTI-ENTITY & JURISDICTION</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
            One calculation discipline. Local rules where the law requires them
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 font-normal">
            No silent nearest-country or generic tax fallback — ever.
          </p>
        </div>

        {/* Workflow Steps Horizontal Pipeline */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-5xl mx-auto pt-2">
          {workflowSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#FFFFFF0F] border border-slate-700/80 text-slate-200 backdrop-blur-sm transition-all hover:border-slate-500">
                {step.label}
              </div>

              {index < workflowSteps.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0 hidden sm:block" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Callout Box with Zero Left Radius */}
        <div className="max-w-3xl mx-auto pt-2">
          <div className="bg-[#FFFFFF0F] border-l-4 border-l-[#8FB0FF] rounded-r-xl rounded-l-none p-4 backdrop-blur-md">
            <p className="text-xs sm:text-sm text-slate-200 font-medium text-center leading-relaxed">
              Public jurisdiction and feature claims resolve only from the
              versioned coverage catalog.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
