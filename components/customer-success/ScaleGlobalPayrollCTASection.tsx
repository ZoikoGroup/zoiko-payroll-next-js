"use client";

import React from "react";
import Image from "next/image";

export default function ScaleGlobalPayrollCTASection() {
  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full px-4 sm:px-6">
        <div className="relative w-full bg-gradient-to-r from-[#0E2A47] to-[#16386A] rounded-3xl overflow-hidden shadow-2xl py-16 px-6 sm:px-12 md:px-16 flex flex-col items-center text-center justify-center min-h-[320px] sm:min-h-[350px]">
          {/* Background Image */}
          <Image
            src="/images/customer/3.png"
            alt="Team discussing global payroll strategy in a modern office"
            fill
            className="object-cover opacity-20 object-[center_20%]"
            priority
          />

          {/* Content Container */}
          <div className="relative z-20 flex flex-col items-center max-w-2xl">
            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Scale global payroll with confidence.
            </h2>

            {/* Subtitle / Description */}
            <p className="text-xs sm:text-sm md:text-base text-[#94A3B8] leading-relaxed font-normal mb-8 max-w-xl">
              Use structured success planning, health visibility and continuous
              optimization to keep payroll aligned with your business as it
              changes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Primary White Button */}
              <a
                href="#explore"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-[#2563EB] font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow-xs"
              >
                Explore our success model
              </a>

              {/* Secondary Transparent Outline Button */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#FFFFFF1F] border border-white/20 text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-colors backdrop-blur-xs"
              >
                Talk to Zoiko Payroll
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
