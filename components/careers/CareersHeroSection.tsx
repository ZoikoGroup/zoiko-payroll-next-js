"use client";

import React from "react";
import { Play } from "lucide-react";

export default function CareersHeroSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10 text-center">
        {/* Header Content */}
        <div className="space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0281D3]">
            CAREERS
          </span>

          <h1 className="text-3xl md:text-[46px] font-bold text-[#0A1928] tracking-tight leading-tight">
            Precision payroll needs precise people
          </h1>

          <p className="text-sm sm:text-base text-[#5C6E7E] max-w-2xl mx-auto leading-relaxed">
            We&apos;re building the operating layer for global payroll &mdash;
            one controlled workflow, one jurisdiction at a time. Come help us
            get it right.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1A83C8] to-[#093C73] hover:bg-[#026cb3] text-white font-semibold text-sm transition-all shadow-md active:scale-95">
              See open roles
            </button>
          </div>
        </div>

        {/* Hero Image Container with Video Overlay Button */}
        <div className="relative rounded-3xl overflow-hidden border border-[#E1E8ED] shadow-sm h-72 sm:h-96 lg:h-[480px] w-full">
          <img
            src="/images/careers/hero.png"
            alt="Team collaborating in an office environment"
            className="w-full h-full object-cover"
          />

          {/* Floating Watch Video Button (Bottom Left) */}
          <div className="absolute bottom-6 left-6">
            <button className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-md border border-black/5 hover:bg-white transition-all active:scale-95 group">
              <span className="w-8 h-8 rounded-full bg-[#0A2540] text-white flex items-center justify-center shrink-0">
                <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#0A1928] pr-1">
                Watch video
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
