"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative w-full bg-[#071927] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/imp-sup/cta.png"
          alt="Implementation team background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#071F33]/88 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase font-mono">
            <span>/</span>
            <span>READY TO GO FURTHER?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-tight">
            Keep your implementation on track
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Primary Action Button */}
          <a
            href="#system-status"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:bg-[#236FA9] text-white text-sm font-bold inline-flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl group"
          >
            <span>Check System Status</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Secondary Outline Button */}
          <a
            href="#guidance"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white text-sm font-bold inline-flex items-center justify-center transition-all backdrop-blur-xs"
          >
            View implementation guidance
          </a>
        </div>
      </div>
    </section>
  );
}
