"use client";

import React from "react";

// Top Readiness Gate Pills Data
const READINESS_GATES = [
  { label: "Scope Approved", color: "bg-[#28A745]" },
  { label: "Design", color: "bg-[#28A745]" },
  { label: "Migration", color: "bg-[#28A745]" },
  { label: "Validation", color: "bg-[#28A745]" },
  { label: "Parallel Run", color: "bg-[#28A745]" },
  { label: "Security / Privacy", color: "bg-[#28A745]" },
  { label: "Operational Readiness", color: "bg-[#28A745]" },
  { label: "Launch", color: "bg-[#0281D3]" },
];

// Decision Outcome Cards Data
const DECISION_CARDS = [
  {
    title: "GO",
    description: "Approved scope may activate.",
    containerClass: "bg-[#E6F4EA] border-[#CEEAD6]",
    titleClass: "text-[#137333]",
  },
  {
    title: "HOLD",
    description: "Affected scope waits for specified conditions.",
    containerClass: "bg-[#FEF7E0] border-[#FCE8E6]",
    titleClass: "text-[#B06000]",
  },
  {
    title: "PARTIAL GO",
    description: "Only the explicitly approved subset proceeds.",
    containerClass: "bg-[#E8F4FC] border-[#D2E3FC]",
    titleClass: "text-[#1A73E8]",
  },
  {
    title: "ROLLBACK",
    description: "Return to the approved prior or fallback state.",
    containerClass: "bg-[#FCE8E6] border-[#FAD2CF]",
    titleClass: "text-[#C5221F]",
  },
  {
    title: "CANCEL / DEFER",
    description: "Accountable authority stops or reschedules.",
    containerClass: "bg-[#F1F3F4] border-[#E8EAED]",
    titleClass: "text-[#3C4043]",
  },
];

export default function LaunchGovernanceSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>Readiness Gates + GO / HOLD / PARTIAL GO / ROLLBACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1928] leading-tight">
            Launch is a governed decision, not a calendar event
          </h2>
        </div>

        {/* Readiness Gates Horizontal Stepper / Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {READINESS_GATES.map((gate, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E1E8ED] text-xs font-semibold text-[#0A1928] shadow-sm"
            >
              <span className={`w-2 h-2 rounded-full ${gate.color}`} />
              <span>{gate.label}</span>
            </div>
          ))}
        </div>

        {/* 5-Column Governance Decision Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
          {DECISION_CARDS.map((card, index) => (
            <div
              key={index}
              className={`border rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-3 ${card.containerClass}`}
            >
              <div>
                <h3 className={`text-base font-bold mb-1.5 ${card.titleClass}`}>
                  {card.title}
                </h3>
                <p className="text-xs text-[#5C6E7E] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Rule Statement */}
        <div className="text-xs sm:text-sm text-[#5C6E7E] pt-2">
          No date, percentage or checklist can silently trigger production
          activation. Every decision records approver, scope/version, conditions
          and effective window.
        </div>
      </div>
    </section>
  );
}
