"use client";

import React from "react";

export default function ReadyToGoFurtherCTA() {
  return (
    <section className="w-full bg-[#0A2E4B] py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {/* Eyebrow Label: #0A8FD0 */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase">
          <span className="text-base leading-none">/</span>
          <span>READY TO GO FURTHER?</span>
        </div>

        {/* Heading: 36px */}
        <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-white leading-tight mx-auto">
          Validate your finance or ERP integration fit
        </h2>

        {/* Subtitle Paragraph */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-130 mx-auto">
          Existing customer? Integration Support resolves posting and
          reconciliation issues without a sales detour.
        </p>

        {/* CTA Button */}
        <div className="pt-2">
          <button
            type="button"
            className="inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:from-[#097EC7] hover:to-[#075D8F] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            Talk to an integration specialist
          </button>
        </div>
      </div>
    </section>
  );
}
