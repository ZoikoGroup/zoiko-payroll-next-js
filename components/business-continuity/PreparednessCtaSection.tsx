"use client";

import React from "react";
import Image from "next/image";

export default function PreparednessCtaSection() {
  return (
    <div className="flex items-center justify-center py-12 md:py-16">
      <div className="max-w-6xl w-full px-4">
        <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden py-16 sm:py-20 md:py-24 px-6 sm:px-12 flex flex-col items-center justify-center text-center shadow-xl">
          {/* Background Image */}
          <Image
            src="/images/business/4.png"
            alt="Team discussing preparedness"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E2D]/90 via-[#0B253C]/85 to-[#0F3252]/90" />

          {/* Content Wrapper */}
          <div className="relative z-10 max-w-3xl flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-8">
              Preparedness you can verify, not just a promise
            </h2>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
              {/* Primary Button */}
              <button
                type="button"
                className="bg-gradient-to-r from-[#3B92CE] to-[#1D71AF] hover:from-[#3284BD] hover:to-[#17629A] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all shadow-md cursor-pointer active:scale-[0.98]"
              >
                View system status
              </button>

              {/* Secondary Button */}
              <button
                type="button"
                className="border border-white/30 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all backdrop-blur-xs flex items-center gap-1.5 cursor-pointer active:scale-[0.98]"
              >
                <span>Open Trust Center</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
