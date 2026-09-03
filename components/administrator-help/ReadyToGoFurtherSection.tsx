"use client";

import React from "react";
import Image from "next/image";

export default function ReadyToGoFurtherSection() {
  return (
    <section className="relative bg-[#0A2E4B] w-full py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden min-h-[400px] flex items-center justify-center">
      {/* Background Image with Dark Blue Overlay */}
      <Image
        src="/images/admin/cta.png"
        alt="Team working in modern office environment"
        fill
        className="object-cover opacity-10 object-center"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Subtitle / Category Tag */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[1px] text-[#8FD0F2] uppercase font-mono">
          <span>/</span>
          <span>READY TO GO FURTHER?</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-[0.5px] text-white leading-tight">
          Get help without slowing down payroll
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {/* Primary Action Button */}
          <button
            type="button"
            className="px-6 py-3 bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:bg-[#0878B0] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md transition-colors duration-200 tracking-[0.5px]"
          >
            Contact support
          </button>

          {/* Secondary Outline Button */}
          <button
            type="button"
            className="px-6 py-3 bg-transparent hover:bg-white/10 text-white text-xs sm:text-sm font-semibold rounded-lg border border-white/40 transition-colors duration-200 tracking-[0.5px]"
          >
            Check system status
          </button>
        </div>
      </div>
    </section>
  );
}
