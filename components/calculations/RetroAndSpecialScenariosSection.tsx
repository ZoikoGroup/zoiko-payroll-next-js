"use client";

import React from "react";
import { Check } from "lucide-react";

interface ScenarioCard {
  id: string;
  title: string;
  description: string;
}

const scenarioItems: ScenarioCard[] = [
  {
    id: "retroactive-change",
    title: "Retroactive change",
    description: "Re-evaluates prior-period eligibility.",
  },
  {
    id: "off-cycle",
    title: "Off-cycle / supplemental",
    description: "Isolated from the regular run.",
  },
  {
    id: "final-pay",
    title: "Final pay / termination",
    description: "Configured logic and cutoffs.",
  },
  {
    id: "reversal",
    title: "Reversal / replacement",
    description: "Linked lineage; nothing erased.",
  },
  {
    id: "prior-period",
    title: "Prior-period adjustment",
    description: "Original evidence retained.",
  },
  {
    id: "multiple-assignments",
    title: "Multiple assignments",
    description: "Never assumed cross-entity aggregation.",
  },
];

export default function RetroAndSpecialScenariosSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
            <span className="text-[#0A78C3] font-bold">—</span>
            <span>RETRO & SPECIAL SCENARIOS</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
            Regular, retro, supplemental and reversal — clearly distinct
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Original evidence is never overwritten or erased.
          </p>
        </div>

        {/* Hero Image Container */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[40/8] rounded-xl overflow-hidden shadow-xl border border-slate-200/60">
          <img
            src="/images/payroll-operation/9.png"
            alt="Team working at modern office workstation"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* 3-Column Grid of Checked Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
          {scenarioItems.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 bg-white flex items-start gap-3 shadow-2xs"
            >
              <div className="mt-0.5 shrink-0 text-[#0A78C3]">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs sm:text-sm font-bold text-[#07243B]">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Box with Zero Left Radius */}
        <div className="max-w-3xl mx-auto pt-2">
          <div className="bg-[#E7EDFD] border-l-4 border-l-[#0A78C3] rounded-r-xl rounded-l-none p-4">
            <p className="text-xs sm:text-sm text-[#07243B] font-medium text-center leading-relaxed">
              Closed historical results are never silently rewritten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
