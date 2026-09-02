"use client";

import React from "react";
import Image from "next/image";

export default function GovernanceAndSourceHierarchySection() {
  const workflowSteps = [
    "Draft",
    "Evidence complete",
    "Payroll SME review",
    "Compliance review",
    "Editorial review",
    "Approved",
    "Published",
  ];

  const sourceHierarchy = [
    "Primary legislation, official gazette or statutory instrument.",
    "Tax, social-security, labor or payroll regulator guidance.",
    "Official standards bodies, central bank or payment authority.",
    "Recognized professional or institutional secondary sources.",
    "Commercial or competitor content — benchmark only, never authoritative.",
  ];

  return (
    <section className="relative w-full bg-[#071927] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/country-guides/9.png"
          alt="Governance background image"
          fill
          className="object-cover object-center"
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-[#071927]/90 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: How Guide Content is Governed */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#38BDF8] uppercase font-mono">
              <span>/</span>
              <span>HOW GUIDE CONTENT IS GOVERNED</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-white leading-tight">
              Evidence governs every statutory fact.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-xl">
            Every guide moves through a fixed review path before publication.
            High-risk numeric facts — rates, thresholds, deadlines — cannot ship
            without an approved source record and effective period. If a rule
            lacks current evidence, the guide shows the explanatory structure
            without the number rather than an unverified value.
          </p>

          {/* Workflow Status Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {workflowSteps.map((step, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-[11px] sm:text-xs font-semibold text-slate-200 transition-colors"
              >
                {step}
              </span>
            ))}
          </div>
        </div>

        {/* Vertical Separator Divider for Large Screens */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-white/15 -translate-x-1/2 pointer-events-none" />

        {/* Right Column: Source Hierarchy */}
        <div className="space-y-6 lg:pl-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#38BDF8] uppercase font-mono">
              <span>/</span>
              <span>SOURCE HIERARCHY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-white leading-tight">
              What a guide is allowed to cite.
            </h2>
          </div>

          {/* Numbered List */}
          <div className="space-y-4 pt-1">
            {sourceHierarchy.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5 font-mono">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-normal">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
