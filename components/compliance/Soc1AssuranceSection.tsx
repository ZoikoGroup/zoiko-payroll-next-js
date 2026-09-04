"use client";

import React, { useState } from "react";

export default function Soc1AssuranceSection() {
  const [activeTab, setActiveTab] = useState(2);

  const tabs = [
    {
      label: "Type I",
      bg: "bg-[#E4F1FA]",
      text: "text-[#0A78C3]",
      border: "border-[#0A78C3]/20",
    },
    {
      label: "Type II",
      bg: "bg-[#E3F0E7]",
      text: "text-[#20502F]",
      border: "border-[#20502F]/20",
    },
    {
      label: "Bridge",
      bg: "bg-[#F1EAD8]",
      text: "text-[#6B5A20]",
      border: "border-[#6B5A20]/20",
    },
    {
      label: "Not verified",
      bg: "bg-[#E9D9C9]",
      text: "text-[#D57A1F]",
      border: "border-[#D57A1F]/20",
    },
  ];

  return (
    <div className="w-full bg-white text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto space-y-10 text-center">
        {/* Header Block */}
        <div className="space-y-4 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              SOC 1 FINANCIAL-CONTROL ASSURANCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07243B] tracking-tight leading-tight">
            Distinct from cybersecurity trust badges
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Type I and Type II are explicitly distinguished{" "}
            <span className="text-slate-400">—</span> never blended into one
            claim.
          </p>
        </div>

        {/* Status Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${tab.bg} ${tab.text} ${tab.border} ${
                activeTab === idx
                  ? "scale-105"
                  : "opacity-90 hover:opacity-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline Flow Section */}
        <div className="max-w-xl mx-auto bg-white/60 rounded-3xl p-6 sm:p-8 text-left relative">
          <div className="absolute left-[39px] top-8 bottom-8 w-0.5 bg-[#0A78C3]/30 z-0" />

          <div className="space-y-8 relative z-10">
            {/* Step 1: Prior report period */}
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-white border-4 border-[#0A78C3] shrink-0 mt-1 shadow-xs" />
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-extrabold text-[#07243B]">
                  Prior report period
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  Illustrative <span className="text-slate-300">—</span>{" "}
                  previous audited period
                </p>
              </div>
            </div>

            {/* Step 2: Bridge letter */}
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-white border-4 border-[#0A78C3] shrink-0 mt-1 shadow-xs" />
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-extrabold text-[#07243B]">
                  Bridge letter
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  Interim coverage <span className="text-slate-300">—</span>{" "}
                  never a new audit itself
                </p>
              </div>
            </div>

            {/* Step 3: Current report period */}
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-white border-4 border-[#0A78C3] shrink-0 mt-1 shadow-xs" />
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-extrabold text-[#07243B]">
                  Current report period
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  Illustrative <span className="text-slate-300">—</span> current
                  audited period, approved control themes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Two Bottom Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Left Card: Approved control themes */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xs space-y-6 flex flex-col justify-between">
            <h3 className="text-base sm:text-lg font-extrabold text-[#07243B]">
              Approved control themes
            </h3>

            <div className="space-y-3 text-xs">
              <div className="pb-3 border-b border-slate-100 font-extrabold text-[#07243B]">
                Processing integrity
              </div>
              <div className="pb-3 border-b border-slate-100 font-extrabold text-[#07243B]">
                Change management
              </div>
              <div className="font-extrabold text-[#07243B]">
                Payments segregation
              </div>
            </div>
          </div>

          {/* Right Card: Complementary user-entity controls */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xs space-y-6 flex flex-col justify-start">
            <h3 className="text-base sm:text-lg font-extrabold text-[#07243B]">
              Complementary user-entity controls
            </h3>

            <p className="text-xs text-slate-600 font-medium leading-relaxed pb-4">
              Controls your organization must also operate for the overall
              control environment to be effective{" "}
              <span className="text-slate-400">—</span> detailed in the full
              report.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
