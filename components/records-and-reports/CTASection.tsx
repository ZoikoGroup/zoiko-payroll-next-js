"use client";

import React from "react";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/payroll-operation/20.png"
          alt="CTA background team meeting"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071C2EE0] via-[#0A3254BF] to-[#8FD0F266]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Eyebrow Label */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase font-mono">
          <span className="text-[#8FD0F2] font-bold">/</span>
          <span>READY TO GO FURTHER?</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight leading-tight max-w-2xl mx-auto">
          See traceable, retained payroll records in your workspace
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2B9BD7] to-[#1D74B4] hover:from-[#1D74B4] hover:to-[#165B8E] text-white text-sm font-semibold transition-all shadow-md cursor-pointer">
            Book a Demo
          </button>
          <button className="px-6 py-3 rounded-xl hover:bg-white/20 text-white text-sm font-semibold border border-white/30 backdrop-blur-xs transition-colors cursor-pointer">
            Take the Product Tour
          </button>
        </div>
      </div>
    </section>
  );
}
