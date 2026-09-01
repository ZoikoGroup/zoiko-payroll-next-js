"use client";

import React from "react";

export default function GlobalReadyOperatingModelSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text Content & Action Buttons (7 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Header Block */}
            <div className="space-y-4">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
                <span className="text-[#0A78C3] font-bold">/</span>
                <span>GLOBAL-READY OPERATING MODEL</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[32px] font-bold tracking-tight text-[#07243B] leading-tight">
                One operating model. Local payroll rules where they matter
              </h2>

              {/* Subtitle / Description */}
              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                Standardize how teams prepare, review, approve and close
                payroll, while jurisdiction-aware configuration handles
                currencies, calendars, tax logic, statutory obligations and
                local outputs only where currently supported.
              </p>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#07243B] text-xs sm:text-sm font-semibold transition-colors shadow-2xs cursor-pointer">
                Explore Supported Payroll Capabilities
              </button>
              <button className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#07243B] text-xs sm:text-sm font-semibold transition-colors shadow-2xs cursor-pointer">
                Talk to Sales
              </button>
            </div>

            {/* Disclaimer Footnote */}
            <p className="text-[11px] sm:text-xs text-slate-400 font-normal leading-relaxed">
              Country, state/province, local, tax-year, filing, payment and
              currency availability come from the current supported-jurisdiction
              catalog &mdash; never a published count on this page.
            </p>
          </div>

          {/* Right Column: Team Image (5 cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src="/images/workspace/10.png"
                alt="Global team collaborating around a desk with financial charts and laptops"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
