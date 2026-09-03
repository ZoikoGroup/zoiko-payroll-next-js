"use client";

import React from "react";

interface PlanCapacityCard {
  tier: string;
  value: string;
  description: string;
  highlighted?: boolean;
}

const planCapacities: PlanCapacityCard[] = [
  {
    tier: "CORE",
    value: "1",
    description: "Production jurisdiction",
    highlighted: false,
  },
  {
    tier: "PROFESSIONAL",
    value: "3",
    description: "Up to three jurisdictions",
    highlighted: false,
  },
  {
    tier: "BUSINESS",
    value: "10",
    description: "Up to ten jurisdictions",
    highlighted: false,
  },
  {
    tier: "ENTERPRISE",
    value: "Custom",
    description: "Contracted capacity",
    highlighted: true,
  },
];

export default function PlanJurisdictionCapacitySection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF4F7] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block with Right-aligned Subtext */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                PLAN JURISDICTION CAPACITY
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
              How many countries can you run per plan?
            </h2>
          </div>

          {/* Right Subtext */}
          <p className="text-xs text-slate-400 font-medium pb-1 max-w-xs md:text-right">
            Exceeding the allowance routes to the next eligible plan — never a
            silent extra.
          </p>
        </div>

        {/* 4-Column Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {planCapacities.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all ${
                item.highlighted
                  ? "bg-[#082F49] text-white shadow-lg border border-[#07243B]"
                  : "bg-white text-[#07243B] border border-slate-200/80 shadow-xs hover:border-slate-300"
              }`}
            >
              {/* Tier Name */}
              <span
                className={`text-[11px] font-bold tracking-wider uppercase mb-4 ${
                  item.highlighted ? "text-slate-300" : "text-slate-400"
                }`}
              >
                {item.tier}
              </span>

              {/* Value Number / Text */}
              <div
                className={`text-4xl sm:text-[34px] font-extrabold tracking-tight mb-2 ${
                  item.highlighted ? "text-white" : "text-[#2A87C8]"
                }`}
              >
                {item.value}
              </div>

              {/* Description */}
              <p
                className={`text-xs font-medium ${
                  item.highlighted ? "text-slate-300" : "text-slate-500"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
