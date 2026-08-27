"use client";

import React from "react";

export default function ChangePreferencesCallout() {
  return (
    <section className="w-full bg-[#0A2540] py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Category Subtitle Tag */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#38BDF8] uppercase">
          <span className="w-3 h-0.5 bg-[#38BDF8]" />
          <span>WANT TO CHANGE YOUR PREFERENCES?</span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          Open Cookie Settings — no sign-in required
        </h2>

        {/* Subtext */}
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Commercial evaluation? Product and Pricing remain available, but
          preference control always comes first here.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <button
            type="button"
            className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] hover:opacity-95 shadow-sm transition-all"
          >
            Open Cookie Settings
          </button>
          <button
            type="button"
            className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white border border-white/20 hover:bg-white/10 transition-colors"
          >
            Explore the product
          </button>
        </div>
      </div>
    </section>
  );
}
