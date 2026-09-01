"use client";

import React from "react";

export default function ReadyToGoFurtherCTA() {
  return (
    <section className="w-full bg-[#0A2E4B] py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Header Block */}
        <div className="space-y-3 max-w-2xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase">
            <span className="text-base leading-none">/</span>
            <span>READY TO GO FURTHER?</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-white leading-tight">
            Build from the documented API contract
          </h2>

          {/* Subtitle / Paragraph Text */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
            Existing developer? View API changes or get integration support
            without a sales detour.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Primary Blue Button with Subtle Gradient */}
          <a
            href="#"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:from-[#0A8FD0] hover:to-[#0284C7] text-white text-xs font-bold rounded-xl shadow-md transition-all text-center"
          >
            Explore API documentation
          </a>

          {/* Secondary Dark Outline Button */}
          <a
            href="#"
            className="w-full sm:w-auto px-6 py-3 bg-transparent hover:bg-slate-800/50 text-slate-200 border border-slate-600/80 hover:border-slate-500 text-xs font-bold rounded-xl transition-all text-center"
          >
            Talk to an integration specialist
          </a>
        </div>
      </div>
    </section>
  );
}
