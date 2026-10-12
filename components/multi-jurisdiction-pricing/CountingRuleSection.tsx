"use client";

import React from "react";

interface CountingRuleRow {
  geographicLayer: string;
  examples: string;
  commercialImplication: string;
}

const countingRules: CountingRuleRow[] = [
  {
    geographicLayer: "Country / territory",
    examples: "United Kingdom, United States, India",
    commercialImplication: "Typically the primary jurisdiction unit",
  },
  {
    geographicLayer: "State / province / region",
    examples: "California, Ontario, New South Wales",
    commercialImplication:
      "Doesn't auto-consume capacity, but can add filing/tax complexity",
  },
  {
    geographicLayer: "Local / municipal",
    examples: "City or county payroll tax overlay",
    commercialImplication: "Can add local configuration complexity",
  },
  {
    geographicLayer: "Non-production / sandbox",
    examples: "Testing or demo setup",
    commercialImplication: "Never consumes production capacity",
  },
];

export default function CountingRuleSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block with Right-aligned Subtext */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                COUNTING RULE
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
              What counts as a production jurisdiction?
            </h2>
          </div>

          {/* Right Subtext */}
          <p className="text-xs text-slate-400 font-medium pb-1 max-w-xs md:text-right">
            The controlled catalog definition is authoritative — never a second
            web-only rule.
          </p>
        </div>

        {/* Table Container */}
        <div className="space-y-3">
          {/* Table Header Row (Hidden on mobile, visible on desktop) */}
          <div className="hidden md:grid grid-cols-12 px-6 py-2 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
            <div className="col-span-3">GEOGRAPHIC LAYER</div>
            <div className="col-span-4">EXAMPLES</div>
            <div className="col-span-5">COMMERCIAL IMPLICATION</div>
          </div>

          {/* Table Rows */}
          <div>
            {countingRules.map((row, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:border-slate-300 transition-colors"
              >
                {/* Geographic Layer */}
                <div className="md:col-span-3">
                  <span className="text-[11px] font-bold text-slate-400 uppercase block md:hidden mb-1">
                    Geographic Layer
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                    {row.geographicLayer}
                  </span>
                </div>

                {/* Examples */}
                <div className="md:col-span-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase block md:hidden mb-1">
                    Examples
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-600">
                    {row.examples}
                  </span>
                </div>

                {/* Commercial Implication */}
                <div className="md:col-span-5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase block md:hidden mb-1">
                    Commercial Implication
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-500">
                    {row.commercialImplication}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
