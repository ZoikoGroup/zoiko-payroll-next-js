"use client";

import React from "react";

export default function CalculationsHeroSection() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[600px] text-[#0F172A]">
      {/* Left Column: Full-width White Background */}
      <div className="w-full bg-white py-16 px-6 sm:px-12 lg:px-20 flex flex-col justify-center items-end">
        <div className="w-full max-w-xl space-y-6">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
            <span className="text-[#0A78C3] font-bold">—</span>
            <span>CALCULATIONS</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#07243B] leading-[1.15]">
            Turn Approved Payroll Inputs Into Explainable Pay Results
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Apply effective-dated rules in the right context. Calculate
            gross-to-net, see what changed, and keep the evidence.
          </p>

          {/* Callout Box with Zero Left Radius */}
          <div className="pt-2">
            <div className="bg-[#E7EDFD] border-l-4 border-l-[#0A78C3] rounded-r-xl rounded-l-none p-4">
              <p className="text-xs sm:text-sm text-[#07243B] font-medium leading-relaxed">
                <strong className="font-bold">Note:</strong> Calculation is
                controlled and reviewable — separate from payment execution.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] hover:bg-[#0863A1] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer">
              Book a demo
            </button>
            <button className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#07243B] text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer">
              Explore Inputs & Validation
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Full-width Edge-to-Edge Image Background */}
      <div className="w-full relative flex items-center justify-start p-6 sm:p-12 lg:p-16 overflow-hidden">
        {/* Full-bleed crisp background image */}
        <img
          src="/images/payroll-operation/bg3.jpg"
          alt="Dashboard background graphics"
          className="absolute inset-0 w-full h-full object-cover object-left"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFD] via-[#F8FAFD66] to-[#F8FAFD00]" />

        {/* Floating UI Card Overlay */}
        <div className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden">
          {/* Top Bar / Metadata Header */}
          <div className="p-5 sm:p-6 border-b border-slate-100 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-400">
                  Status
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Calculated
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-300">
                synthetic
              </span>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-slate-100 font-mono text-[#07243B] font-semibold text-[11px]">
                  Worker E-10432
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 font-semibold text-[#07243B] text-[11px]">
                  Period Aug 2026
                </span>
              </div>
              <span className="text-[11px] text-slate-400">
                Last calc. 4m ago
              </span>
            </div>
          </div>

          {/* Pay Breakdown Metric Cards Grid */}
          <div className="p-5 sm:p-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {/* Gross Earnings */}
              <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-[#07243B]">
                  £4,820
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Gross earnings
                </div>
              </div>

              {/* Net Pay */}
              <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-[#07243B]">
                  £3,110
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Net pay
                </div>
              </div>

              {/* Employee Statutory */}
              <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-[#07243B]">
                  £1,240
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Employee statutory
                </div>
              </div>

              {/* Employer Liabilities */}
              <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-[#07243B]">
                  £612
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Employer liabilities
                </div>
              </div>
            </div>

            {/* Bottom Explanation Banner */}
            <div className="p-3.5 rounded-xl bg-[#E7EDFD] flex items-center justify-between gap-2 text-xs">
              <span className="font-semibold text-[#07243B]">
                Why did this change?
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0A78C3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A78C3]" />
                Rate updated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
