"use client";

import React from "react";
import { Check } from "lucide-react";

const PHASES = [
  {
    step: 1,
    title: "Discover",
    badge: "Scope manifest",
    side: "left",
    isHighlighted: false,
    items: [
      "Markets, entities, payroll groups, calendars, populations",
      "Roles, systems, providers, service models",
      "Stakeholder map + discovery issue register",
    ],
  },
  {
    step: 2,
    title: "Design / Configure",
    badge: "Config baseline",
    side: "right",
    isHighlighted: false,
    items: [
      "Local requirement mappings + payroll configuration",
      "Workflows, roles, approvals, calendars",
      "Decision-right model + design decisions",
    ],
  },
  {
    step: 3,
    title: "Prepare / Migrate",
    badge: "Migration lineage",
    side: "left",
    isHighlighted: false,
    items: [
      "Source inventory, extraction, field mapping",
      "Cleansing, transformation, transfer",
      "Reconciliation + unresolved issue register",
    ],
  },
  {
    step: 4,
    title: "Validate & Parallel Run",
    badge: "Variance register",
    side: "right",
    isHighlighted: false,
    items: [
      "Calculation, records, permissions, integrations",
      "Source vs. target comparison, defined tolerances",
      "Variance register + sign-off decision",
    ],
  },
  {
    step: 5,
    title: "Launch",
    badge: "Launch decision",
    side: "left",
    isHighlighted: false,
    items: [
      "GO / HOLD / PARTIAL GO / ROLLBACK governance",
      "Cutover, activation, communications",
      "Signed launch decision + cutover record",
    ],
  },
  {
    step: 6,
    title: "Stabilize / Optimize",
    badge: "Handoff accepted",
    side: "right",
    isHighlighted: true,
    items: [
      "Support, service health, issue closure",
      "First-cycle review + recurring governance",
      "Operational handoff acceptance",
    ],
  },
];

export default function SixPhaseLifecycleSection() {
  return (
    <section className="w-full bg-[#f4f8fb] py-20 px-6 lg:px-16 text-white font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-3 mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>Six-Phase Controlled Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2E4B] leading-tight">
            Governed states, not six easy steps
          </h2>
          <p className="text-base sm:text-lg text-[#5B646B] mx-auto max-w-2xl leading-relaxed">
            Each phase carries its own primary work and exit evidence. Phases
            may overlap operationally &mdash; but exit status is never inferred
            from elapsed time.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#E1E8F0] -translate-x-1/2 hidden md:block" />

          <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto">
            {PHASES.map((phase) => {
              const isLeft = phase.side === "left";
              return (
                <div
                  key={phase.step}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Left Column Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isLeft ? "md:pr-12 md:text-left" : "md:order-2 md:pl-12"
                    }`}
                  >
                    <div
                      className={`rounded-2xl p-6 border shadow-xl transition-all ${
                        phase.isHighlighted
                          ? "bg-gradient-to-r from-[#0B4573] to-[#0A8FD0] border-[#0281D3] text-white"
                          : "bg-white border-white text-[#0A1928]"
                      }`}
                    >
                      {/* Card Top Header */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <h3
                          className={`text-lg font-bold ${
                            phase.isHighlighted
                              ? "text-white"
                              : "text-[#0A1928]"
                          }`}
                        >
                          {phase.title}
                        </h3>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            phase.isHighlighted
                              ? "bg-white/20 text-white border border-white/30"
                              : "bg-[#E8F4FC] text-[#0281D3]"
                          }`}
                        >
                          {phase.badge}
                        </span>
                      </div>

                      {/* Card Items */}
                      <ul className="space-y-2.5">
                        {phase.items.map((item, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                              phase.isHighlighted
                                ? "text-white/90"
                                : "text-[#5C6E7E]"
                            }`}
                          >
                            <Check
                              className={`w-4 h-4 mt-0.5 shrink-0 ${
                                phase.isHighlighted
                                  ? "text-white"
                                  : "text-[#0281D3]"
                              }`}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Step Number Circle (Center Axis) */}
                  <div
                    className={`${phase.isHighlighted ? "bg-[#0A2E4B] text-white" : "bg-white"} relative z-10 flex items-center justify-center w-10 h-10 rounded-full text-[#0A2E4B] font-bold text-sm shadow-md border-2 border-[#0A2E4B] my-4 md:my-0 md:absolute md:left-1/2 md:-translate-x-1/2`}
                  >
                    {phase.step}
                  </div>

                  {/* Empty Spacer Column to preserve 50/50 balance */}
                  <div
                    className={`hidden md:block w-1/2 ${
                      isLeft ? "order-2" : "order-1"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Rule Note */}
        <div className="pt-6 text-xs italic text-[#8592A0]">
          Rule: gates are evidence- and authority-bound &mdash; never
          calendar-bound.
        </div>
      </div>
    </section>
  );
}
