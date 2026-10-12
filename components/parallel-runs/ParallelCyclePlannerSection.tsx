"use client";

import React from "react";

export default function ParallelCyclePlannerSection() {
  const innerCards = [
    {
      value: "21 / 24",
      label: "Mandatory scenarios",
    },
    {
      value: "2",
      label: "Critical Issues",
    },
    {
      value: "Mar 03-7",
      label: "Cycle window",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-white bg-[#F1F5F9]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Main Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] text-center tracking-tight mb-10">
          The parallel cycle planner.
        </h2>

        {/* Main Dark Blue Container Card */}
        <div className="w-full bg-gradient-to-r from-[#0E2A47] to-[#16386A] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E2E8F0]">
          {/* Top Row Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-left">
            {/* Cycle ID */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                <span className="text-[11px] font-medium text-[#94A3B8] tracking-wide">
                  Cycle ID
                </span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-white tracking-tight">
                PR-2026-0142
              </p>
            </div>

            {/* Country & Entity */}
            <div>
              <p className="text-[11px] font-medium text-[#94A3B8] tracking-wide mb-1">
                Country &amp; entity
              </p>
              <p className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Germany · Zoiko GmbH
              </p>
            </div>

            {/* Population */}
            <div>
              <p className="text-[11px] font-medium text-[#94A3B8] tracking-wide mb-1">
                Population
              </p>
              <p className="text-lg sm:text-xl font-bold text-white tracking-tight">
                1,248 employees
              </p>
            </div>
          </div>

          {/* Bottom Grid of 3 Slate Inner Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 max-w-3xl mx-auto gap-4">
            {innerCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF47] backdrop-blur-xs border border-[#E2E8F0] rounded-[22px] p-5 text-center flex flex-col items-center justify-center min-h-[96px]"
              >
                <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-1">
                  {card.value}
                </p>
                <p className="text-[11px] font-medium text-[#CBD5E1]">
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
