"use client";

import React from "react";

export default function ReadyToGoFurtherSection() {
  return (
    <section className="w-full bg-[#0A2E4B] py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Eyebrow Label */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#38BDF8] uppercase">
          <span className="text-base leading-none">/</span>
          <span>READY TO GO FURTHER?</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-[40px] font-bold tracking-tight text-white leading-tight">
          Validate your time–to–payroll integration.
        </h2>

        {/* Subtitle Paragraph */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
          Existing customer? Integration Support resolves import and mapping
          issues without a sales detour.
        </p>

        {/* CTA Button */}
        <div className="pt-2">
          <button
            type="button"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#0369A1] hover:opacity-95 transition-opacity shadow-md"
          >
            Talk to an integration specialist
          </button>
        </div>
      </div>
    </section>
  );
}
