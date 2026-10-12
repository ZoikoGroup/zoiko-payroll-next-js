"use client";

import React, { useState } from "react";

export default function MultiEntityJurisdictionSection() {
  const [activeCard, setActiveCard] = useState<"global" | "local">("global");

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: Image (6 cols - Equal 50/50 split) */}
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 min-h-[380px] lg:min-h-full flex">
          <img
            src="/images/payroll-operation/4.png"
            alt="Business team presenting in a conference room meeting"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Column: Content Block (6 cols - Equal 50/50 split) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          {/* Header Block */}
          <div className="space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
              <span className="text-[#0A78C3] font-bold">—</span>
              <span>MULTI-ENTITY & JURISDICTION</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
              One discipline. Local context where it matters
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Entity, pay group, calendar and currency determine which rules
              apply.
            </p>
          </div>

          {/* 2 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Global Layer Card */}
            <div
              onClick={() => setActiveCard("global")}
              className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 flex flex-col justify-between bg-white/80 border-slate-200/80 hover:border-slate-300`}
            >
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E7EDFD] text-[#0A78C3]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A78C3]" />
                  Global layer
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Common status, provenance, severity and audit semantics.
              </p>
            </div>

            {/* Local Rules Card */}
            <div
              onClick={() => setActiveCard("local")}
              className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 flex flex-col justify-between ${
                activeCard === "local"
                  ? "bg-white border-emerald-200 shadow-xs ring-1 ring-emerald-100"
                  : "bg-white/80 border-slate-200/80 hover:border-slate-300"
              }`}
            >
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  Local rules
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Effective-dated and versioned per jurisdiction.
              </p>
            </div>
          </div>

          {/* Callout Box with Zero Left Radius */}
          <div className="pt-2">
            <div className="bg-[#E7EDFD] border-l-4 border-l-[#0A78C3] rounded-r-xl rounded-l-none p-4">
              <p className="text-xs sm:text-sm text-[#07243B] font-medium leading-relaxed">
                Currency is never silently converted, and jurisdiction is never
                inferred from currency alone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
