"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface StatusItem {
  label: string;
  statusText: string;
}

const statusItems: StatusItem[] = [
  { label: "Reconciliations complete", statusText: "7/7" },
  { label: "Approvals complete", statusText: "Complete" },
  { label: "Evidence pack ready", statusText: "Ready" },
];

export default function PayrollCloseAuditHeroSection() {
  return (
    <section className="relative w-full lg:h-screen lg:max-h-[900px] py-12 lg:py-0 px-4 sm:px-6 lg:px-8 text-white overflow-hidden flex items-center">
      {/* Background Image with Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/payroll-operation/21.jpg"
          alt="Payroll Close and Audit Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-[#0A1A2B]/85 mix-blend-multiply" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & Buttons */}
          <div className="lg:col-span-6 space-y-5">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase font-mono">
              <span className="text-[#8FD0F2] font-bold">/</span>
              <span>PAYROLL CLOSE & AUDIT</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.15]">
              Close payroll with confidence. Preserve the evidence
            </h1>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              Reconcile the period, resolve material exceptions, capture the
              right sign-offs, lock the approved result set, and retain a
              traceable close record across your payroll operations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2B9BD7] to-[#1D74B4] hover:from-[#1D74B4] hover:to-[#165B8E] text-white text-sm font-semibold transition-all shadow-md cursor-pointer">
                Book a demo
              </button>
              <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/30 backdrop-blur-xs transition-colors cursor-pointer flex items-center gap-2">
                <span>Payments Orchestration</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Graphic Card with Overlay Text */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] h-[440px] sm:h-[480px] rounded-3xl overflow-hidden border border-slate-700/60 shadow-2xl flex flex-col justify-between">
              {/* Card Image Layer (Spans entire card) */}
              <Image
                src="/images/payroll-operation/22.png"
                alt="Close Control Room synthetic dashboard interface"
                fill
                className="object-cover object-top"
                priority
              />

              {/* Dark Gradient Overlay for Checklist Legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#040D17]/95 z-[1]" />

              {/* Top Floating Badge */}
              <div className="relative z-10 p-5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#031525]/90 border border-slate-700/80 text-white text-xs font-semibold backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span>Close Control Room — synthetic</span>
                </span>
              </div>

              {/* Bottom Checklist Overlay Container */}
              <div className="relative z-10 p-6 space-y-2.5 backdrop-blur-xs">
                {statusItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2 border-b border-slate-700/50 last:border-0 text-xs sm:text-sm"
                  >
                    <span className="font-semibold text-slate-100 drop-shadow-sm">
                      {item.label}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/20 text-[#34D399] font-semibold text-xs border border-[#10B981]/40 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      <span>{item.statusText}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
