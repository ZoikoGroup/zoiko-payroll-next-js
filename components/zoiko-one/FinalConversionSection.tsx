"use client";

import React from "react";

export default function FinalConversionSection() {
  return (
    <section className="relative w-full py-24 px-6 lg:px-16 text-white font-sans antialiased overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/zoiko-one/cta.png"
          alt="Final conversion section background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#072432]/90 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Category Tag */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#38BDF8]">
          <span>/</span>
          <span>FINAL CONVERSION</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-[32px] font-bold text-white leading-tight">
          Connect only what your operating model actually needs
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#FFFFFFB2] max-w-xl mx-auto leading-relaxed">
          Use Zoiko Payroll independently, or discuss how approved Zoiko One
          connections could support a broader operating model &mdash; with
          explicit authority, access, data, workflow, monitoring and support
          boundaries.
        </p>
      </div>
    </section>
  );
}
