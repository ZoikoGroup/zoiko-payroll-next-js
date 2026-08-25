"use client";

import React from "react";

export default function MultiEntityPayrollSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#0B3B5C] to-[#082F49] py-20 px-6 lg:px-16 text-white font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            {/* Category Subtitle */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#9FD1F0]">
              <span>/</span>
              <span>Multi-Entity Payroll</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl md:text-[40px] font-bold text-white leading-tight">
              Coordinate Multi-Entity Payroll Without Losing Local Control
            </h2>

            {/* Subtitle / Paragraph */}
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
              Run a shared payroll operating model across multiple entities
              while keeping each entity&apos;s jurisdiction scope,
              configuration, calendars, roles, approvals and service boundaries
              visible.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2E91D1] to-[#0B4E7D] hover:from-[#026EB4] hover:to-[#015287] text-white text-sm font-semibold transition-all shadow-md active:scale-95">
                Book a demo
              </button>

              <button className="px-6 py-3 rounded-xl bg-transparent border border-white/30 hover:bg-white/10 text-white text-sm font-semibold transition-all active:scale-95">
                Explore the multi-entity control model
              </button>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden h-[340px] sm:h-[420px] w-full">
              <img
                src="/images/multi-entity-payroll/hero.png"
                alt="Multi-Entity Payroll Coordination"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
