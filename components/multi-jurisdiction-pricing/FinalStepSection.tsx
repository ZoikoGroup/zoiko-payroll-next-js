"use client";

import React from "react";
import Image from "next/image";

export default function FinalStepSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Dark Container */}
        <div className="bg-[#082F49] border border-[#0A2D44] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2">
                <span className="w-1 h-3.5 bg-[#8FD0F5] inline-block rounded-xs" />
                <span className="text-xs font-bold tracking-wider text-[#8FD0F5] uppercase">
                  FINAL STEP
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold text-white tracking-tight leading-tight">
                See your multi-jurisdiction scope, clearly.
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-xl">
                Tell us your entities, jurisdictions and delivery models — we'll
                show you the commercial layers that actually apply.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  className="px-6 py-3.5 rounded-xl bg-[#2A87C8] hover:bg-[#2374ac] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#2A87C8]/25 transition-all cursor-pointer"
                >
                  Build your jurisdiction scope
                </button>
                <button
                  type="button"
                  className="px-6 py-3.5 rounded-xl bg-[#FFFFFF1A] hover:bg-[#10334d] border border-slate-700/80 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer"
                >
                  Book a demo
                </button>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/multi-jurisdiction-pricing/handshake.png"
                  alt="Business handshake representing partnership and final step"
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
