"use client";

import React from "react";
import Image from "next/image";

export default function FinalSecurityReviewSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F8FA] text-[#07243B]">
      <div className="max-w-6xl mx-auto">
        {/* Dark Blue Banner Container */}
        <div className="bg-[#082F49] border border-[#07243B] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold tracking-wider text-[#8FD0F5] uppercase flex items-center">
                  <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#3A9AD6]">
                    /
                  </span>
                  FINAL STEP
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-white tracking-tight leading-tight">
                Start your security review today.
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-lg">
                Get evidence-based answers to your team's due-diligence
                questions, or request restricted materials through a controlled
                channel.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2C90D0] to-[#117DC5] hover:bg-[#2375b0] text-white text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer">
                  Start a security review
                </button>
                <button className="px-6 py-3 rounded-xl bg-[#FFFFFF1A] hover:bg-slate-800 text-slate-200 border border-[#FFFFFF47] text-xs sm:text-sm font-bold transition-colors cursor-pointer">
                  Request assurance evidence
                </button>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/pricing/6.png"
                  alt="Security analytics and metrics on monitor screen"
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
