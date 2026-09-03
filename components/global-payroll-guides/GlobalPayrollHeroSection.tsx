"use client";

import React from "react";
import Image from "next/image";

export default function GlobalPayrollHeroSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#071C2E] to-[#071C2E] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-6 space-y-6">
          {/* Eyebrow Header */}
          <div className="flex items-center gap-2">
            <span className="w-1 h-3.5 bg-[#8FD0F2] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#8FD0F2] uppercase">
              GLOBAL PAYROLL GUIDE
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold tracking-tight leading-[1.15]">
            The flagship guide to running payroll across borders
          </h1>

          {/* Paragraph */}
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-xl">
            Global payroll means coordinating governance, cycles and evidence
            across jurisdictions — while local statutory, tax and legal
            requirements remain governed at the entity and jurisdiction level,
            never overridden by global standardization.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:opacity-95 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-opacity inline-flex items-center gap-1.5">
              <span>Book a demo</span>
              <span>→</span>
            </button>

            <button className="bg-[#FFFFFF33] hover:bg-white/5 text-white border border-[#E1E8F0] text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors">
              Check jurisdiction availability
            </button>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[400px] lg:h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/images/resources/1.png"
            alt="Business team walking in modern office hallway"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
