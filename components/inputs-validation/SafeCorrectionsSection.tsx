"use client";

import React from "react";

export default function SafeCorrectionsSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
        {/* Left Column: Image (5 cols) */}
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 min-h-[380px] lg:min-h-full flex">
          <img
            src="/images/payroll-operation/3.png"
            alt="Business team discussing documents in a meeting"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Column: Title, Correction Preview Card & Callout (7 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          {/* Header Block */}
          <div className="space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
              <span className="text-[#0A78C3] font-bold">—</span>
              <span>SAFE CORRECTIONS</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
              Correct data without losing control of the change
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
              Correct at source when another system is authoritative.
              High-impact changes need a second reviewer.
            </p>
          </div>

          {/* Correction Preview Card Component */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden">
            {/* Window Bar Header */}
            <div className="bg-slate-50/80 border-b border-slate-100 px-5 py-2.5 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <span className="text-[11px] font-mono text-slate-400 ml-2 font-medium">
                Correction preview
              </span>
            </div>

            {/* Content Fields Grid */}
            <div className="p-6 grid grid-cols-2 gap-y-6 gap-x-8 text-xs sm:text-sm">
              {/* Old Value */}
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                  OLD VALUE
                </div>
                <div className="font-medium text-[#07243B]">£—— (masked)</div>
              </div>

              {/* New Value */}
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                  NEW VALUE
                </div>
                <div className="font-medium text-[#07243B]">£—— (masked)</div>
              </div>

              {/* Effective Period */}
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                  EFFECTIVE PERIOD
                </div>
                <div className="font-bold text-[#07243B]">Aug 2026</div>
              </div>

              {/* Approval Tag */}
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                  APPROVAL
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FEF7E0] text-[#B06000]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B06000]" />
                    Second reviewer required
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Callout Box with Zero Left Radius */}
          <div className="pt-1">
            <div className="bg-[#E7EDFD] border-l-4 border-l-[#0A78C3] rounded-r-xl rounded-l-none p-4">
              <p className="text-xs sm:text-sm text-[#07243B] font-medium leading-relaxed">
                Pay-impacting corrections trigger revalidation — a stale Ready
                status never remains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
