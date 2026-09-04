"use client";

import React from "react";
import Image from "next/image";

export default function PlanFitNavigatorSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F8FA] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              PLAN FIT NAVIGATOR
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight max-w-xl">
            Not sure which plan fits your payroll?
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
            Answer four questions and we'll calculate a recommendation using the
            same commercial rules used at checkout — no opaque scoring, just the
            highest tier your scale or capability needs require.
          </p>
        </div>

        {/* Main Display Container with Background Image and Overlay Card */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-center">
          {/* Background Image: Person pointing at screen */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pricing/8.png"
              alt="Person pointing at 30-Day Price and Volume chart on monitor screen"
              fill
              className="object-cover object-center brightness-90 opacity-70"
            />
          </div>

          {/* Overlay Content Box on the Right */}
          <div className="relative z-10 w-full flex justify-end p-6 sm:p-10 lg:p-12">
            <div className="bg-gradient-to-r from-[#0E4B76] to-[#082F49] backdrop-blur-md border border-slate-700/80 rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl text-white space-y-6">
              {/* Recommended Header */}
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#9FC3DB]">
                  RECOMMENDED
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Core
                </h3>
                <p className="text-xs text-slate-300 font-medium">
                  Based on 1–50 workers · 1 entities · 1 jurisdictions.
                </p>
              </div>

              {/* Price Callout Box */}
              <div className="bg-[#FFFFFF14] border border-slate-700 rounded-2xl p-4 space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">
                    $8
                  </span>
                  <span className="text-xs font-bold text-slate-300">
                    / worker / month
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium">
                  $40 monthly minimum - before taxes/services
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#2E9BDD] via-[#0F5688] to-[#0A3D63] hover:bg-[#2375b0] text-white text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer">
                  Choose Core
                </button>
                <button className="w-full py-3 px-4 rounded-xl hover:bg-slate-750 text-slate-200 border border-[#FFFFFF59] text-xs sm:text-sm font-bold transition-colors cursor-pointer">
                  Talk to Payroll Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Subtext Notes */}
        <div className="space-y-1 pt-1 max-w-3xl">
          <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
            Recommendation logic uses the highest plan required by worker,
            entity or jurisdiction scale, or by a selected capability. A
            service-pack need alone does not inflate the software tier.
          </p>
          <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
            Inputs stay in your browser until you choose to contact sales.
          </p>
        </div>
      </div>
    </section>
  );
}
