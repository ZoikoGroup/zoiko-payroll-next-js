"use client";

import React from "react";
import { Check } from "lucide-react";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
}

const recalcFeatures: FeatureCard[] = [
  {
    id: "targeted",
    title: "Targeted",
    description: "Only the affected worker/subset.",
  },
  {
    id: "full",
    title: "Full",
    description: "Full population for config. changes.",
  },
  {
    id: "idempotent",
    title: "Idempotent",
    description: "Reprocessing never duplicates pay.",
  },
  {
    id: "concurrency-safe",
    title: "Concurrency-safe",
    description: "Locking prevents ambiguous results.",
  },
];

export default function RecalculationSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Text Content & Grid Cards (7 cols) */}
        <div className="lg:col-span-6 space-y-8">
          {/* Header Block */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
              <span className="text-[#0A78C3] font-bold">—</span>
              <span>RECALCULATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
              A material change never leaves a stale "final" amount
            </h2>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Targeted or full — recalculation depends on scope, not
              convenience.
            </p>
          </div>

          {/* 2-Column Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {recalcFeatures.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-4.5 rounded-2xl border border-slate-200/80 bg-white flex items-start gap-3 shadow-2xs"
              >
                <div className="mt-0.5 shrink-0 text-[#0A78C3]">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-bold text-[#07243B]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Callout Box with Zero Left Radius */}
          <div className="pt-2">
            <div className="bg-[#E7EDFD] border-l-4 border-l-[#0A78C3] rounded-r-xl rounded-l-none p-4">
              <p className="text-xs sm:text-sm text-[#07243B] font-medium leading-relaxed">
                Deterministic rounding applies at the defined stage — never
                arbitrary display rounding.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image with Floating Status Badges (5 cols) */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-xl border border-slate-200/60">
            {/* Background Image */}
            <img
              src="/images/payroll-operation/8.png"
              alt="Two colleagues looking at recalculation metrics on laptop"
              className="w-full h-full object-cover object-center"
            />

            {/* Top-Right Floating Badge: Stale result */}
            <div className="absolute top-5 right-5 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md border border-slate-100 flex items-center gap-2">
              <span className="text-xs font-semibold text-[#07243B]">
                Stale result
              </span>
              <span className="w-2 h-2 rounded-full bg-amber-500 ring-2 ring-amber-100" />
            </div>

            {/* Bottom-Left Floating Badge: Recalc. required */}
            <div className="absolute bottom-5 left-5 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md border border-slate-100 flex items-center gap-2">
              <span className="text-xs font-semibold text-[#07243B]">
                Recalc. required
              </span>
              <span className="w-2 h-2 rounded-full bg-rose-500 ring-2 ring-rose-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
