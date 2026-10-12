"use client";

import React, { useState } from "react";

export default function ContinuitySection() {
  const [activeTab, setActiveTab] = useState(3);

  const tabs = [
    { label: "Current period", bg: "bg-[#E3EFE6]", text: "text-[#3F6B54]" },
    { label: "Bridge", bg: "bg-[#E1EEF9]", text: "text-[#155A8A]" },
    { label: "Gap", bg: "bg-[#E9F0F8]", text: "text-[#8592A0]" },
    { label: "Renewal", bg: "bg-[#F3E9CC]", text: "text-[#8C6D2F]" },
    { label: "Superseded", bg: "bg-[#E9F0F8]", text: "text-[#8592A0]" },
    { label: "Exception", bg: "bg-[#F3E9CC]", text: "text-[#8C6D2F]" },
    { label: "Remediation", bg: "bg-[#E1EEF9]", text: "text-[#155A8A]" },
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
              CONTINUITY, EXCEPTIONS & SHARED RESPONSIBILITY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            Continuous coverage is never implied when a gap exists
          </h2>
        </div>

        {/* Status Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${tab.bg} ${tab.text} ${
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
            {/* Step 1: Report period N-1 */}
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-white border-4 border-[#0A78C3] shrink-0 mt-1 shadow-xs" />
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-extrabold text-[#07243B]">
                  Report period N-1
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  Illustrative <span className="text-slate-300">—</span>{" "}
                  superseded by current period
                </p>
              </div>
            </div>

            {/* Step 2: Exception noted, remediation tracked */}
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-white border-4 border-[#0A78C3] shrink-0 mt-1 shadow-xs" />
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-extrabold text-[#07243B]">
                  Exception noted, remediation tracked
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  Truthful disclosure <span className="text-slate-300">—</span>{" "}
                  never hidden behind generic language
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
                  Illustrative <span className="text-slate-300">—</span>{" "}
                  current, active
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Two Bottom Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Left Card: Zoiko-operated controls */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xs space-y-6 flex flex-col justify-between">
            <h3 className="text-sm font-extrabold text-[#07243B]">
              Zoiko-operated controls
            </h3>

            <div className="space-y-3 text-[12.5px] text-slate-700 font-medium">
              <div className="flex items-center gap-2.5">
                <span className="text-[#0A78C3] font-bold">—</span>
                <span>Platform access management</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#0A78C3] font-bold">—</span>
                <span>Change management process</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#0A78C3] font-bold">—</span>
                <span>Payroll calculation controls</span>
              </div>
            </div>
          </div>

          {/* Right Card: Customer-operated controls */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xs space-y-6 flex flex-col justify-between">
            <h3 className="text-sm font-extrabold text-[#07243B]">
              Customer-operated controls
            </h3>

            <div className="space-y-3 text-[12.5px] text-slate-700 font-medium">
              <div className="flex items-center gap-2.5">
                <span className="text-[#0A78C3] font-bold">—</span>
                <span>User access provisioning within your tenant</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#0A78C3] font-bold">—</span>
                <span>Approval configuration and segregation of duties</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#0A78C3] font-bold">—</span>
                <span>Data accuracy of inputs you control</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
