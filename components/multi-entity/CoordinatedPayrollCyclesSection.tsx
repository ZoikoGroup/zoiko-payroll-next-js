"use client";

import React from "react";
import Image from "next/image";
import { Info } from "lucide-react";

interface Step {
  label: string;
  status: "completed" | "active" | "pending";
}

interface EntityCycle {
  name: string;
  cutoff: string;
  steps: Step[];
}

const cyclesData: EntityCycle[] = [
  {
    name: "Entity A — UK Ltd (Monthly)",
    cutoff: "Cutoff Sep 5",
    steps: [
      { label: "Inputs", status: "completed" },
      { label: "Validate", status: "completed" },
      { label: "Calculate", status: "active" },
      { label: "Approve", status: "pending" },
      { label: "Fund/Pay", status: "pending" },
      { label: "Close", status: "pending" },
    ],
  },
  {
    name: "Entity B — US Inc (Semi-monthly)",
    cutoff: "Cutoff Sep 3",
    steps: [
      { label: "Inputs", status: "completed" },
      { label: "Validate", status: "completed" },
      { label: "Calculate", status: "completed" },
      { label: "Approve", status: "active" },
      { label: "Fund/Pay", status: "pending" },
      { label: "Close", status: "pending" },
    ],
  },
  {
    name: "Entity C — GmbH, DE (Monthly · Partner-supported)",
    cutoff: "Cutoff Sep 8",
    steps: [
      { label: "Inputs", status: "active" },
      { label: "Validate", status: "pending" },
      { label: "Calculate", status: "pending" },
      { label: "Approve", status: "pending" },
      { label: "Fund/Pay", status: "pending" },
      { label: "Close", status: "pending" },
    ],
  },
];

export default function CoordinatedPayrollCyclesSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Split Layout: Content & Hero Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-6 space-y-4">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span className="text-[#0A8FD0] font-bold">|</span>
              <span>COORDINATED PAYROLL CYCLES</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
              Independent entity calendars, one group overlay
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
              Entity A runs monthly, Entity B semi-monthly, Entity C on a
              different cutoff and delivery model entirely. Cross-entity
              dependencies never block unrelated payrolls unless policy
              explicitly requires it.
            </p>
          </div>

          {/* Right Column: Hero Image Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full h-[280px] sm:h-[420px] rounded-3xl overflow-hidden">
              <Image
                src="/images/multi-entity/4.png"
                alt="Corporate team holding a strategic discussion in a glass meeting room"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Cycles Progress Tracks */}
        <div className="space-y-6">
          {cyclesData.map((cycle, cycleIdx) => (
            <div key={cycleIdx} className="space-y-2">
              {/* Header: Entity Name & Cutoff */}
              <div className="flex items-center justify-between text-xs font-bold text-[#07243B]">
                <span>{cycle.name}</span>
                <span className="text-slate-400 font-normal">
                  {cycle.cutoff}
                </span>
              </div>

              {/* Steps Track */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {cycle.steps.map((step, stepIdx) => (
                  <div
                    key={stepIdx}
                    className={`h-11 rounded-xl flex items-center justify-center text-xs font-semibold transition-colors ${
                      step.status === "completed"
                        ? "bg-[#E2F1E8] text-[#1E5D38]"
                        : step.status === "active"
                          ? "bg-[#0A8FD0] text-white shadow-sm"
                          : "bg-white border border-slate-200/80 text-slate-400"
                    }`}
                  >
                    {step.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Info Banner at Bottom */}
        <div className="bg-[#EBF3FB] rounded-2xl p-4 sm:p-5 border border-slate-200/60 flex items-start sm:items-center gap-3">
          <Info className="w-4 h-4 text-[#0A8FD0] shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs font-semibold text-[#07243B] leading-snug">
            Group overlay: 1 critical exception (Entity B), 2 approval deadlines
            this week, 1 funding deadline Sep 4. Blocker severity rolls up to
            group view without exposing worker-level detail.
          </p>
        </div>
      </div>
    </section>
  );
}
