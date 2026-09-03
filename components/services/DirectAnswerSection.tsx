"use client";

import React from "react";
import { Info } from "lucide-react";

export default function DirectAnswerSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-6">
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
              What's included with Zolko Payroll?
            </h2>
          </div>

          {/* Right Subtext */}
          <p className="text-xs text-slate-400 font-medium pb-1">
            One straight answer, before the details.
          </p>
        </div>

        {/* Highlight Banner Card */}
        <div className="bg-[#EBF3FB]/60 border border-[#D5E4F5] rounded-2xl p-6 sm:p-8 flex items-start gap-4">
          <div className="text-[#3D9BD6] shrink-0 pt-0.5">
            <Info className="w-5 h-5 stroke-[2.5]" />
          </div>

          <div className="space-y-2">
            <p className="text-xs sm:text-sm font-bold text-[#07243B] leading-snug">
              Every paid plan includes the core payroll platform, plus the
              security, audit and record foundation to operate your licensed
              scope.
            </p>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Operational services — implementation, managed payroll
              administration, statutory filing or remittance, payment execution,
              additional jurisdiction activation and specialized integrations —
              may be included by plan, offered as optional add-ons, or depend on
              jurisdiction and delivery model.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
