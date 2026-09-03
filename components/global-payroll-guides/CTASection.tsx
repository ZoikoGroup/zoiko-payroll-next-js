"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0A2E4B] text-white overflow-hidden">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/resources/12.png"
          alt="Office background"
          fill
          className="object-cover object-center opacity-10 mix-blend-luminosity"
          priority
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2">
          <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
          <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
            READY TO GO FURTHER?
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto">
          Turn this guide into a scoped plan for your organization
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:bg-[#3387bd] text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-md transition-colors"
          >
            <span>Book a demo</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white text-xs font-bold px-6 py-3.5 rounded-xl backdrop-blur-xs transition-colors"
          >
            Check jurisdiction availability
          </button>
        </div>
      </div>
    </section>
  );
}
