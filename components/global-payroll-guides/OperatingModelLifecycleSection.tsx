"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const hierarchyNodes = [
  { label: "Jurisdiction" },
  { label: "Legal entity" },
  { label: "Payroll group" },
  { label: "Cycle" },
];

const lifecycleStages = [
  "Prepare",
  "Calculate",
  "Validate",
  "Review",
  "Approve",
  "Complete",
  "Reconcile",
];

export default function OperatingModelLifecycleSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Container */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              OPERATING MODEL & LIFECYCLE
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            A decision hierarchy, and a repeatable cycle
          </h2>
        </div>

        {/* Top Flow: Decision Hierarchy */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {/* Dark Active Node */}
          <div className="bg-[#0A2E4B] text-white rounded-2xl p-4 sm:p-5 w-44 text-center shadow-sm space-y-1">
            <span className="block text-[10px] font-bold tracking-wider text-[#8FD0F2] uppercase">
              DECISION HIERARCHY
            </span>
            <span className="block text-base font-extrabold">Group</span>
          </div>

          <ArrowRight className="w-4 h-4 text-[#3D9BD6] shrink-0" />

          {/* Light Hierarchy Nodes */}
          {hierarchyNodes.map((node, idx) => (
            <React.Fragment key={idx}>
              <div className="bg-white border border-slate-200/80 rounded-2xl px-5 py-4 w-32 sm:w-36 text-center shadow-2xs">
                <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                  {node.label}
                </span>
              </div>

              {idx < hierarchyNodes.length - 1 && (
                <span className="hidden sm:inline-block w-1.5 h-1.5 bg-slate-300 rounded-full shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Flow: Payroll Lifecycle */}
        <div className="space-y-6 pt-4">
          <h3 className="text-base font-bold text-[#07243B] text-center">
            Payroll lifecycle
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {lifecycleStages.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-white border border-slate-200/80 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 min-w-[100px] text-center shadow-2xs">
                  <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                    {stage}
                  </span>
                </div>

                {idx < lifecycleStages.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-[#3D9BD6] shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Disclaimer Footer */}
        <p className="text-center text-[11px] text-slate-400 font-medium mx-auto pt-2">
          Educational lifecycle stages — not a representation of live Zoiko
          product behavior. Exception and evidence checkpoints exist at each
          handoff.
        </p>
      </div>
    </section>
  );
}
