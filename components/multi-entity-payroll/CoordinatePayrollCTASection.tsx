"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function CoordinatePayrollCTASection() {
  return (
    <section className="w-full bg-[#f4f8fb] py-20 px-6 lg:px-16 text-white font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        {/* Rounded CTA Banner Container */}
        <div className="bg-[#082F49] rounded-3xl py-16 px-6 sm:px-12 text-center space-y-8 shadow-2xl border border-[#0A3A5C]">
          {/* Top Category Tag */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#9FD1F0]">
            <span>/</span>
            <span>READY TO COORDINATE PAYROLL ACROSS ENTITIES?</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-[44px] font-bold text-white max-w-4xl mx-auto leading-tight">
            Bring global operating visibility and local payroll authority into
            one controlled model.
          </h2>

          {/* Action Buttons & Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {/* Primary Filled Button */}
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2E91D1] to-[#0B4E7D] hover:from-[#026EB4] hover:to-[#015287] text-white text-sm font-semibold transition-all shadow-md active:scale-95">
              Book a demo
            </button>

            {/* Secondary Outline Button */}
            <button className="px-6 py-3 rounded-xl bg-transparent border border-white/30 hover:bg-white/10 text-white text-sm font-semibold transition-all active:scale-95">
              Review Compliance Workflows
            </button>

            {/* Inline Link with Arrow */}
            <a
              href="#"
              className="inline-flex items-center gap-1.5 px-3 py-3 text-sm font-semibold text-[#BFE0F3] hover:text-white transition-colors ml-2"
            >
              <span>Check jurisdiction availability</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
