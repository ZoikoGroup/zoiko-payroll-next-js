"use client";

import React from "react";
import Image from "next/image";

export default function ConfigurationCtaSection() {
  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-white bg-[#F8FAFC]">
      <div className="max-w-6xl w-full px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#0E2A47] to-[#16386A] relative w-full rounded-3xl overflow-hidden shadow-2xl py-16 px-6 sm:px-12 md:py-20 flex flex-col items-center text-center">
          {/* Background Image */}
          <Image
            src="/images/configuration/3.png"
            alt="Team collaborating over laptops and business analytics"
            fill
            className="object-cover opacity-20 object-center"
            priority
          />

          {/* Content Wrapper */}
          <div className="relative z-10 max-w-3xl flex flex-col items-center">
            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4 text-white">
              Turn payroll requirements into controlled,
              <br className="hidden sm:inline" /> testable configuration.
            </h2>

            {/* Sub-description */}
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-8 max-w-2xl font-normal">
              Build the payroll structures, rules, integrations, controls, and
              outputs your approved operating model requires — with traceability
              from requirement to effective version.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-6">
              <button
                type="button"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#3D9BD6] to-[#0C4773] hover:bg-[#0863A1] text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                Access configuration readiness
              </button>

              <button
                type="button"
                className="w-full sm:w-auto px-6 py-3 rounded-xl hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer backdrop-blur-xs"
              >
                Talk to an implementation specialist
              </button>
            </div>

            {/* Bottom Link */}
            <a
              href="#"
              className="text-xs sm:text-sm font-semibold text-[#E2E8F0] hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all flex items-center gap-1 mt-1"
            >
              Explore Implementation Overview &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
