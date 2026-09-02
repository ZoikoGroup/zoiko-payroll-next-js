"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface LifecycleStage {
  id: string;
  label: string;
}

const stages: LifecycleStage[] = [
  { id: "design", label: "Design / Configure" },
  { id: "migration", label: "Data Migration" },
  { id: "integrations", label: "Integrations" },
  { id: "testing", label: "Testing" },
  { id: "parallel", label: "Parallel Validation" },
  { id: "cutover", label: "Cutover" },
  { id: "golive", label: "Go-Live" },
  { id: "hypercare", label: "Hypercare" },
];

export default function ImplementationLifecycleSection() {
  const [activeStage, setActiveStage] = useState<string>("testing");

  return (
    <section className="w-full bg-[#F9FAFB] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-[#0F172A] overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>IMPLEMENTATION LIFECYCLE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B] leading-tight">
            Where are you now?
          </h2>

          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            A target date never overrides mandatory validation, security,
            statutory, payment, testing or approval gates.
          </p>
        </div>

        {/* Horizontal Lifecycle Stages Track */}
        <div className="w-full overflow-x-auto pb-4 pt-2 scrollbar-none">
          <div className="flex items-center justify-start lg:justify-center min-w-max px-4 gap-2.5 sm:gap-3">
            {stages.map((stage, index) => {
              const isActive = activeStage === stage.id;

              return (
                <React.Fragment key={stage.id}>
                  {/* Stage Card */}
                  <button
                    onClick={() => setActiveStage(stage.id)}
                    className={`px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer border ${
                      isActive
                        ? "bg-[#E3F2FD] text-[#0A8FD0] border-[#0A8FD0] shadow-2xs"
                        : "bg-white text-[#07243B] border-slate-200/80 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {stage.label}
                  </button>

                  {/* Flow Arrow */}
                  {index < stages.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#0A8FD0] shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Status Subtext Footer */}
        <div className="text-center">
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            Current stage:{" "}
            <span className="font-bold text-[#07243B]">
              {stages.find((s) => s.id === activeStage)?.label || "Testing"}
            </span>{" "}
            — next readiness gate due Sep 5, 2026. Owner: Zoiko Implementation
            Team.
          </p>
        </div>
      </div>
    </section>
  );
}
