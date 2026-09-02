"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function SolutionsHeroSection() {
  return (
    <section className="relative w-full overflow-hidden text-white py-20 px-4 sm:px-6 lg:px-8 min-h-[520px] flex items-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/solutions/bg.png"
          alt="Office background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Overlay for content readability */}
        <div className="absolute inset-0 bg-[#071927]/85 backdrop-blur-[1px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase font-mono">
              <span className="text-[#8FD0F2] font-bold">/</span>
              <span>SOLUTIONS</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight">
              Payroll solutions built around how your organization operates
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-xl">
              Run payroll with the controls, workflows, visibility and operating
              model your business needs — from a focused local setup to complex
              multi-jurisdiction and multi-entity operations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button className="px-6 py-3 bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:from-[#097EB8] hover:to-[#065A87] text-white text-xs font-bold rounded-lg shadow-md transition-all text-center">
                Find your payroll solution
              </button>
              <button className="px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/10 text-white text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
                <span>Explore global payroll</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column Diagram (6 Cols) */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="flex items-center gap-3 sm:gap-4 w-full max-w-md">
              {/* Stacked Pills Column */}
              <div className="flex-1 space-y-3">
                {["Footprint", "Organization", "Team", "Complexity"].map(
                  (label, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl py-3 px-4 text-center text-xs font-bold text-[#07243B] shadow-sm border border-slate-100"
                    >
                      {label}
                    </div>
                  ),
                )}
              </div>

              {/* Connecting Blue Arrow */}
              <div className="shrink-0 text-[#8FD0F2]">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Large Right Box */}
              <div className="flex-1 bg-[#1D618F] border border-blue-400/30 rounded-2xl p-6 sm:p-8 text-center text-white space-y-2 shadow-lg flex flex-col items-center justify-center">
                <div className="text-sm sm:text-base font-bold tracking-wide">
                  Zoiko Payroll
                </div>
                <div className="text-[11px] sm:text-xs text-slate-200 font-medium leading-snug">
                  One platform, the right operating model
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
