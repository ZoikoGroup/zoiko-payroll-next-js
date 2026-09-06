"use client";

import React from "react";
import Image from "next/image";

export default function LaunchConfidenceCtaSection() {
  return (
    <div className="flex items-center justify-center py-12 md:py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl w-full px-4 sm:px-6">
        {/* Banner Card Container */}
        <div className="relative w-full rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px] flex items-center justify-center bg-gradient-to-r from-[#0E2A47] to-[#16386A] text-center p-8 sm:p-12 shadow-xl">
          {/* Background Image with Dark Blue Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/parallel/5.png"
              alt="Payroll specialists reviewing dashboard on laptop"
              fill
              className="object-cover opacity-20 object-center"
              priority
            />
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 max-w-2xl flex flex-col items-center">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Launch payroll with confidence.
            </h2>

            {/* Description Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-slate-200 font-normal leading-relaxed mb-8 max-w-xl">
              Validate calculations, integrations, statutory outputs and
              operational readiness before production.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {/* Primary Button */}
              <a
                href="#implementation"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-[#2563EB] text-xs sm:text-sm font-bold shadow-md hover:bg-slate-100 transition-colors"
              >
                Explore implementation services
              </a>

              {/* Secondary Ghost Button */}
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-semibold transition-colors backdrop-blur-xs"
              >
                Talk to payroll specialists
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
