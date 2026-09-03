"use client";

import React from "react";
import { Check } from "lucide-react";

export default function WhereTruthLivesSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              WHERE TRUTH LIVES
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07243B] tracking-tight leading-tight max-w-2xl">
            Coverage truth belongs here. Educational truth belongs to the guide.
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-2xl leading-relaxed">
            The directory and the country guide answer different questions —
            every jurisdiction record links to both so you never confuse
            commercial availability with background reading.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card - Jurisdiction Directory */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-bold tracking-wider text-[#3D9BD6] uppercase">
                JURISDICTION DIRECTORY
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-[#07243B] leading-snug">
                What can Zoiko Payroll support here, right now?
              </h3>

              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                The commercial coverage registry — capability status, delivery
                model and conditions, kept current and effective-dated.
              </p>

              {/* Bullet Points */}
              <div className="space-y-2.5 pt-2">
                {[
                  "Commercial capability availability",
                  "Delivery model and coverage conditions",
                  "Reviewed date and specialist routing",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#3D9BD6] shrink-0" />
                    <span className="text-xs font-medium text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Badge */}
            <div className="pt-2">
              <button className="inline-block text-[#55606C] border border-slate-200 text-xs font-semibold px-4 py-2 rounded-lg">
                You&apos;re here
              </button>
            </div>
          </div>

          {/* Right Card - Country & Territory Guide */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-bold tracking-wider text-[#3D9BD6] uppercase">
                COUNTRY & TERRITORY GUIDE
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-[#07243B] leading-snug">
                What should I know about payroll in this market?
              </h3>

              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Local payroll concepts, terminology, typical cycles and key
                obligations at a descriptive, educational level.
              </p>

              {/* Bullet Points */}
              <div className="space-y-2.5 pt-2">
                {[
                  "Payroll concepts and local context",
                  "Key taxes and contributions, descriptively",
                  "Links back to current availability",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#3D9BD6] shrink-0" />
                    <span className="text-xs font-medium text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient Button */}
            <div className="pt-2">
              <button className="bg-gradient-to-r from-[#3D9BD6] to-[#0C4773] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-xs hover:opacity-95 transition-opacity inline-flex items-center gap-1.5">
                <span>Explore country guides</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
