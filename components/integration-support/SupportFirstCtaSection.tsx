"use client";

import React from "react";

export default function SupportFirstCtaSection() {
  return (
    <section className="relative w-full overflow-hidden text-white py-18 px-4 sm:px-6 lg:px-8">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/footer-integrations/bg6.png"
          alt="Support background context"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Blue Overlay Matching the Image Tint */}
        {/* <div className="absolute inset-0 bg-[#0E2C42]/85 mix-blend-multiply" /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071F34F2] to-[#0A3758CC]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-6">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4FA3D1] uppercase font-mono">
          <span className="text-[#4FA3D1] font-bold">/</span>
          <span>SUPPORT-FIRST</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-[28px] font-extrabold tracking-tight text-white leading-tight max-w-2xl">
          Get integration support.
        </h1>

        {/* Subtitle / Description */}
        <p className="text-sm sm:text-base text-[#FFFFFFB8] max-w-120 leading-relaxed">
          No sales or demo prompts while you&apos;re mid-incident — just the
          fastest path to the right owner.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#get-support"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0A2234] text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            Get integration support
          </a>

          <a
            href="#documentation"
            className="px-6 py-3.5 rounded-xl bg-transparent border border-white/30 hover:border-white/60 hover:bg-white/5 text-white text-xs sm:text-sm font-bold transition-all backdrop-blur-xs cursor-pointer"
          >
            Browse integration documentation
          </a>
        </div>
      </div>
    </section>
  );
}
