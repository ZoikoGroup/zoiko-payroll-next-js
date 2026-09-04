"use client";

import React from "react";
import Image from "next/image";

export default function FinalStepResourcesSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Dark Container */}
        <div className="bg-[#082F49] border border-[#0A2D44] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Label with slanted dark slash and #8FD0F5 text */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold tracking-wider text-[#8FD0F5] uppercase flex items-center">
                  <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#8FD0F5]">
                    /
                  </span>
                  FINAL STEP
                </span>
              </div>

              {/* Title (31px) */}
              <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-white tracking-tight leading-tight">
                Get your buying team the evidence it needs.
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-xl">
                Build a procurement pack, start a security review, or request
                restricted documents directly.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#2C90D0] to-[#117DC5] hover:bg-[#2374ac] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#2A87C8]/25 transition-all cursor-pointer"
                >
                  Check Resources
                </button>
                <button
                  type="button"
                  className="px-6 py-3.5 rounded-xl bg-[#FFFFFF1A] hover:bg-[#10334d] border border-slate-700/80 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer"
                >
                  Contact Support
                </button>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-700/50 bg-slate-800">
                <Image
                  src="/images/procurement/8.png"
                  alt="Business professional reviewing documents on computer"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
