"use client";

import React from "react";

interface TimelineStage {
  step: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

const stages: TimelineStage[] = [
  {
    step: "1",
    title: "Commercial order",
    description: "Plan + scope authorized",
  },
  {
    step: "2",
    title: "Implementation start",
    description: "Discovery, configuration, migration",
  },
  {
    step: "3",
    title: "Validation",
    description: "Testing, parallel run, evidence",
  },
  {
    step: "4",
    title: "Go-live approval",
    description: "All mandatory gates satisfied",
  },
  {
    step: "5",
    title: "Service Commencement",
    description: "Recurring billing begins",
    highlighted: true,
  },
  {
    step: "6",
    title: "Hypercare → BAU",
    description: "Monitored transition",
  },
];

export default function BillingTimelineSection() {
  return (
    <section className="w-full bg-[#07243B] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 lg:items-start">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4EA8E4] uppercase font-mono">
              <span className="font-bold">/</span>
              <span>Implementation vs recurring billing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight text-white leading-tight max-w-2xl">
              One timeline, two distinct commercial states.
            </h2>
          </div>
          <p className="text-sm text-slate-300 leading-5 lg:max-w-xs lg:mt-9">
            One-time implementation line items and recurring subscription line
            items always use different visual groups and labels.
          </p>
        </div>

        {/* Timeline */}
        <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4">
          {stages.map((stage, idx) => (
            <li key={stage.step} className="relative text-center">
              {/* Connector */}
              {idx !== stages.length - 1 && (
                <span className="hidden lg:block absolute top-5 left-1/2 w-full h-px bg-white/20" />
              )}

              <span
                className={`relative z-10 mx-auto w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border ${
                  stage.highlighted
                    ? "bg-[#0A8FD0] border-[#0A8FD0] text-white"
                    : "bg-[#07243B] border-white/25 text-slate-200"
                }`}
              >
                {stage.step}
              </span>

              <span className="mt-3 block text-xs sm:text-sm font-bold text-white">
                {stage.title}
              </span>
              <span className="mt-1 block text-[11px] sm:text-xs text-slate-400 leading-4">
                {stage.description}
              </span>
            </li>
          ))}
        </ol>

        <p className="text-sm text-slate-400 leading-5 max-w-3xl">
          The timeline never implies that Service Commencement is guaranteed by
          a target date. If implementation is invoiced by milestones, the exact
          milestones come from the order form or catalog, not hard-coded web
          copy.
        </p>
      </div>
    </section>
  );
}
