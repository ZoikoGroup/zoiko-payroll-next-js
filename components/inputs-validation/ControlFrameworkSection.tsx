"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

interface ControlFeature {
  id: string;
  title: string;
  description: string;
}

const controlFeatures: ControlFeature[] = [
  {
    id: "completeness",
    title: "Completeness",
    description: "Required fields present.",
  },
  {
    id: "format",
    title: "Format & type",
    description: "Structurally valid values.",
  },
  {
    id: "worker",
    title: "Worker & employment",
    description: "Checked against current status.",
  },
  {
    id: "effective-date",
    title: "Effective date & period",
    description: "Timing aligned to the run.",
  },
  {
    id: "consistency",
    title: "Cross-field consistency",
    description: "Related values agree.",
  },
  {
    id: "configuration",
    title: "Payroll configuration",
    description: "Matches configured rules.",
  },
  {
    id: "jurisdiction",
    title: "Jurisdiction-aware rules",
    description: "Local context applied.",
  },
  {
    id: "duplicate",
    title: "Duplicate & conflict",
    description: "Flagged before advancing.",
  },
];

export default function ControlFrameworkSection() {
  const [selectedFeature, setSelectedFeature] =
    useState<string>("completeness");

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Heading, Feature Grid, Callout Box (7 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Header Block */}
          <div className="space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
              <span className="text-[#0A78C3] font-bold">—</span>
              <span>CONTROL FRAMEWORK</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
              Checked in the context that makes it payroll-ready
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
              Deterministic rules govern readiness. AI findings are review
              signals only.
            </p>
          </div>

          {/* 2-Column Grid of Control Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {controlFeatures.map((feature) => {
              const isSelected = selectedFeature === feature.id;
              return (
                <div
                  key={feature.id}
                  onClick={() => setSelectedFeature(feature.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 bg-white/80 border-slate-200/70 hover:border-slate-300 hover:bg-white`}
                >
                  <div className="mt-0.5 shrink-0 text-[#0A78C3]">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-[#07243B]">
                      {feature.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Highlight Callout Box with Zero Left Radius */}
          <div className="pt-2">
            <div className="bg-[#E7EDFD] border-l-4 border-l-[#0A78C3] rounded-r-xl rounded-l-none p-4">
              <p className="text-xs sm:text-sm text-[#07243B] font-medium leading-relaxed">
                Advancement blocks only on a genuinely unresolved dependency —
                not every informational finding.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image (5 cols) */}
        <div className="lg:col-span-6 h-full flex items-center">
          <div className="w-full max-h-100 rounded-3xl overflow-hidden border border-slate-200/80 shadow-md aspect-[4/3] lg:aspect-auto lg:h-[500px]">
            <img
              src="/images/payroll-operation/2.png"
              alt="Team reviewing payroll control reports and charts"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
