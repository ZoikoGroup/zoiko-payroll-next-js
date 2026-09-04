"use client";

import React, { useState } from "react";

export default function EvidenceCardSystemSection() {
  const [activePill, setActivePill] = useState(0);

  const pills = [
    {
      label: "Current",
      bg: "bg-[#E3EFE6]",
      text: "text-[#3F6B54]",
    },
    {
      label: "Bridge",
      bg: "bg-[#E1EEF9]",
      text: "text-[#155A8A]",
    },
    {
      label: "Renewal",
      bg: "bg-[#F3E9CC]",
      text: "text-[#8C6D2F]",
    },
    {
      label: "Superseded",
      bg: "bg-[#E9F0F8]",
      text: "text-[#8592A0]",
    },
    {
      label: "Not in scope",
      bg: "bg-[#E9F0F8]",
      text: "text-[#8592A0]",
    },
    {
      label: "Restricted",
      bg: "bg-[#E9F0F8]",
      text: "text-[#8592A0]",
    },
  ];

  return (
    <div className="relative w-full bg-gradient-to-r from-[#0F2B3E] via-[#0B2C3F] to-[#0F2B3E] py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20"
        style={{
          backgroundImage: `url('/images/compliance/bg.png')`,
        }}
      ></div>

      <section className="relative z-10 max-w-6xl mx-auto space-y-12 text-center">
        {/* Header Block */}
        <div className="space-y-4 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#39BEFF] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#39BEFF]">
                /
              </span>
              EVIDENCE CARD SYSTEM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold tracking-tight leading-tight text-white">
            Trust Evidence with Clear Scope, Status, and Access.
          </h2>
        </div>

        {/* Status Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {pills.map((pill, idx) => (
            <button
              key={idx}
              onClick={() => setActivePill(idx)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${pill.bg} ${pill.text} ${
                activePill === idx
                  ? "scale-105"
                  : "opacity-90 hover:opacity-100"
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Two White Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Left Card: Evidence card (summary) */}
          <div className="bg-white text-[#728396] border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-[#0A2E4B] uppercase tracking-wider">
                  Evidence card (summary)
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-[#0A2E4B] font-medium">
                  Assurance name
                </span>
                <span className="text-[#728396]">SOC 2 Type II</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-[#0A2E4B] font-medium">Status</span>
                <span className="text-[#728396] text-[11px]">Current</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-[#0A2E4B] font-medium">Scope</span>
                <span className="text-[#728396]">Payroll Workspace</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#0A2E4B] font-medium">Access</span>
                <span className="text-[#728396]">Controlled</span>
              </div>
            </div>
          </div>

          {/* Right Card: Detail drawer (expanded) */}
          <div className="bg-white text-[#728396] border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-[#0A2E4B] uppercase tracking-wider">
                  Detail drawer (expanded)
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-[#0A2E4B] font-medium">
                  Report period
                </span>
                <span className="text-[#728396]">
                  Illustrative 12-month window
                </span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-[#0A2E4B] font-medium">
                  Issuer / assessor
                </span>
                <span className="text-[#728396]">Where publishable</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-[#0A2E4B] font-medium">
                  Exact scope statement
                </span>
                <span className="text-[#728396]">
                  Products, regions, exclusions
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#0A2E4B] font-medium">
                  Last verified
                </span>
                <span className="text-[#728396]">Timestamped</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="px-6 py-3 bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:bg-[#154f78] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-colors cursor-pointer">
            Contact support
          </button>
          <button className="px-6 py-3 bg-[#FFFFFF1A] hover:bg-white/10 text-white border border-white/30 text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer">
            Customer-Stories
          </button>
        </div>
      </section>
    </div>
  );
}
