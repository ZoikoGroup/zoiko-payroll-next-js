"use client";

import React from "react";
import Image from "next/image";

export default function ValidateIntegrationCtaSection() {
  return (
    <section className="relative w-full bg-[#08152C] overflow-hidden py-22 text-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-integrations/bg4.png"
          alt="Office background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08152CEB] via-[#08152CDB] to-[#08152CF0] mix-blend-multiply" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight max-w-2xl mx-auto">
          Validate your identity and access integration.
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Primary Filled Button */}
          <button className="w-full sm:w-auto px-6 py-3.5 bg-[#0A8FD0] hover:bg-[#087BB5] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-colors cursor-pointer">
            Check your identity system
          </button>

          {/* Secondary Outlined Button */}
          <button className="w-full sm:w-auto px-6 py-3.5 bg-slate-900/40 hover:bg-slate-800/60 border border-slate-500/50 text-white font-semibold text-xs sm:text-sm rounded-xl backdrop-blur-xs transition-colors cursor-pointer">
            Talk to a specialist
          </button>
        </div>
      </div>
    </section>
  );
}
