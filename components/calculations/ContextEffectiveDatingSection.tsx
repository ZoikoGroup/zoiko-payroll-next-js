"use client";

import React from "react";
import { Check } from "lucide-react";

interface ContextItem {
  id: string;
  title: string;
  description: string;
}

const contextItems: ContextItem[] = [
  {
    id: "worker-assignment",
    title: "Worker + assignment",
    description: "Employment and comp. basis.",
  },
  {
    id: "legal-entity",
    title: "Legal entity",
    description: "Registrations, payment responsibility.",
  },
  {
    id: "pay-group-period",
    title: "Pay group + period",
    description: "Frequency, cutoff, run category.",
  },
  {
    id: "jurisdiction",
    title: "Jurisdiction",
    description: "Never inferred from currency alone.",
  },
  {
    id: "effective-date",
    title: "Effective date",
    description: "Rule/rate version for the period.",
  },
  {
    id: "currency-version",
    title: "Currency & version",
    description: "FX explicit; config. immutable.",
  },
];

export default function ContextEffectiveDatingSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Image Container (5 cols) */}
        <div className="lg:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-xl border border-slate-200/60">
            <img
              src="/images/payroll-operation/7.png"
              alt="Team discussing effective dating and rules context"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Right Column: Text Header & 2-Column Grid Cards (7 cols) */}
        <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
          {/* Header Block */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
              <span className="text-[#0A78C3] font-bold">—</span>
              <span>CONTEXT & EFFECTIVE DATING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
              Apply the right rules in the right context
            </h2>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Worker, entity, period, jurisdiction, date and currency — all
              explicit.
            </p>
          </div>

          {/* 2-Column Grid of Checked Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {contextItems.map((item) => (
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
                If mandatory logic is unavailable or ambiguous, calculation
                fails closed — never a silent generic rule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
