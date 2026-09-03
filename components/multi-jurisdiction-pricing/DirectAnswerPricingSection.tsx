"use client";

import React from "react";

export default function DirectAnswerPricingSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 border-t border-t-[#DCE6EC] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Block with Right-aligned Subtext */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                DIRECT ANSWER
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight max-w-xl">
              Multi-country pricing isn't a per-country surcharge.
            </h2>
          </div>

          {/* Right Subtext */}
          <p className="text-xs text-slate-400 font-medium pb-1 max-w-xs md:text-right">
            One flat "country fee" would hide more than it explains.
          </p>
        </div>

        {/* Callout Box with Left Blue Border Accent */}
        <div className="bg-white border border-slate-200/80 border-l-4 border-l-[#0A78C3] rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
          {/* Left thick blue accent line */}

          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed pl-2">
            The recurring product model is governed by your selected plan and
            Billable Worker-Month usage. Each new production jurisdiction may
            also require a one-time activation and optional local services —
            like managed payroll, filings or partner-supported delivery.{" "}
            <strong className="font-bold text-[#07243B]">Core</strong> supports
            1 production jurisdiction,{" "}
            <strong className="font-bold text-[#07243B]">Professional</strong>{" "}
            up to 3,{" "}
            <strong className="font-bold text-[#07243B]">Business</strong> up to
            10, and{" "}
            <strong className="font-bold text-[#07243B]">Enterprise</strong>{" "}
            uses contracted capacity — subject to the controlled commercial
            definition.
          </p>
        </div>
      </div>
    </section>
  );
}
