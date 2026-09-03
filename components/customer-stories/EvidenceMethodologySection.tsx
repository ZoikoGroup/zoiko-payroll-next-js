"use client";

import React from "react";
import Image from "next/image";

interface MethodologyRow {
  label: string;
  value: string;
}

const methodologyRows: MethodologyRow[] = [
  { label: "Definition", value: "What the metric measures" },
  { label: "Value / unit", value: "Exact approved figure" },
  { label: "Direction", value: "Increase / decrease / stable" },
  { label: "Baseline", value: "Where relevant and approved" },
  { label: "Comparison basis", value: "What it's measured against" },
  { label: "Scope / denominator", value: "What population it covers" },
  { label: "Measurement period", value: "Exact approved window" },
  { label: "Source", value: "Customer or Zoiko system" },
  { label: "Caveat", value: "Customer-specific limitation" },
];

export default function EvidenceMethodologySection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Split Header: Image Left, Title & Copy Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image Block */}
          <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[380px] rounded-3xl overflow-hidden">
            <Image
              src="/images/resources/17.png"
              alt="Team analyzing research and evidence documents"
              fill
              className="object-contain object-center"
              priority
            />
          </div>

          {/* Text Block */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                EVIDENCE METHODOLOGY
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight leading-tight">
              Never a persuasive number without an explanation
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              Every quantified outcome carries its full context. A metric
              without sufficient context is suppressed, not rounded up or left
              ambiguous.
            </p>
          </div>
        </div>

        {/* Methodology Data Table Card */}
        <div className="max-w-3xl mx-auto bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs">
          <div className="divide-y divide-slate-100">
            {methodologyRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 py-3 sm:py-3.5 first:pt-0 last:pb-0 gap-2 items-center"
              >
                <div className="col-span-5 sm:col-span-4">
                  <span className="text-xs sm:text-sm font-medium text-slate-400">
                    {row.label}
                  </span>
                </div>
                <div className="col-span-7 sm:col-span-8 text-right sm:text-right">
                  <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                    {row.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
