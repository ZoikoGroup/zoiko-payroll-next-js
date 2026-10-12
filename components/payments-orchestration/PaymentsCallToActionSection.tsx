"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function PaymentsCallToActionSection() {
  return (
    <section className="relative w-full min-h-[360px] text-white flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/payroll-operation/bg12.png"
          alt="Modern office architectural facade background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Slate-Blue Overlay */}
        <div className="absolute inset-0 bg-[#071D2F]/90 backdrop-blur-xs" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto text-center space-y-6">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight text-white leading-tight">
          From approved payroll to governed payment execution
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] hover:bg-[#0863A1] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer">
            Book a demo
          </button>
          <button className="px-6 py-3 rounded-xl bg-transparent hover:bg-white/10 border border-slate-400/50 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer">
            Start free trial
          </button>
        </div>

        {/* Secondary Sub-link */}
        <div className="pt-2 text-xs sm:text-sm text-slate-300 font-medium flex items-center justify-center gap-1.5">
          <span>Complex procurement?</span>
          <a
            href="#talk-to-sales"
            className="text-[#8FB0FF] hover:text-slate-200 font-semibold inline-flex items-center gap-1 transition-colors"
          >
            Talk to sales
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
}
