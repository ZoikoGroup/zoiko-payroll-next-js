"use client";

import React from "react";
import Image from "next/image";

interface TimingRow {
  label: string;
  value: string;
}

const timingData: TimingRow[] = [
  { label: "Effective date", value: "Aug 1, 2026" },
  { label: "Received at Zoiko Payroll", value: "Aug 14, 09:12 UTC" },
  { label: "Payroll-effective period", value: "Next cycle (post-cutoff)" },
  { label: "Action", value: "Review required" },
];

interface MetricCard {
  count: string;
  label: string;
}

const identityMetrics: MetricCard[] = [
  { count: "1,240", label: "Matched" },
  { count: "8", label: "Needs review" },
  { count: "2", label: "No match" },
];

export default function PayrollSafeTimingSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Container */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm border border-slate-100">
            <Image
              src="/images/footer-integrations/3.png"
              alt="Business professionals collaborating around financial reports and a tablet"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Text Block */}
          <div className="space-y-4 lg:pl-4">
            {/* Tag line */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
              <span className="w-3 h-0.5 bg-[#2F6FED]" />
              <span>PAYROLL-SAFE TIMING + IDENTITY MATCHING</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[26px] font-bold text-[#0F172A] tracking-tight">
              Never a same-cycle promise
            </h2>

            {/* Subtext */}
            <p className="text-sm text-[#5B646B] leading-relaxed">
              Post-cutoff changes may require review, deferment or adjustment —
              durable identifiers only, never name-only matching.
            </p>
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Card: Timing Example */}
          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="p-6 bg-[#FBFCFE] border-b border-slate-200/60">
              <h3 className="text-sm font-bold text-[#0F172A]">
                Timing example
              </h3>
            </div>
            <div className="p-6 divide-y divide-slate-100">
              {timingData.map((row, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between text-xs sm:text-sm"
                >
                  <span className="text-[#5B646B] font-normal">
                    {row.label}
                  </span>
                  <span className="font-semibold text-[#0F172A]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card: Identity Matching (synthetic) */}
          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <div className="p-6 bg-[#FBFCFE] border-b border-slate-200/60">
              <h3 className="text-sm font-bold text-[#0F172A]">
                Identity matching (synthetic)
              </h3>
            </div>
            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-3 p-5">
              {identityMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/60 rounded-xl p-4 text-center space-y-1"
                >
                  <div className="text-xl font-bold text-[#0F172A]">
                    {metric.count}
                  </div>
                  <div className="text-[11px] text-[#5B646B] font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
