"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PayrollContinuitySection() {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#061A2AF0] via-[#09283FD1] to-[#143F5C9E] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image Overlay with Dark Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/business/bg.png"
          alt="Office background"
          fill
          className="object-cover opacity-21 object-center"
        />
      </div>

      <section className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-6 space-y-6 text-left">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#8FD0F2] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#8FD0F2]">
                /
              </span>
              TRUST, SECURITY & COMPLIANCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight">
            Payroll continuity built for critical pay cycles
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-xl">
            Zoiko Payroll plans for disruption, prioritizes recovery by business
            impact, validates restoration capability through exercises, manages
            third-party dependencies, and keeps customers informed through an
            authoritative status source.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="bg-gradient-to-r from-[#59A9E0] to-[#0A5A93] hover:bg-[#165a8c] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer">
              View system status
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-[#FFFFFF80] text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer">
              <span>Open Trust Center</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Right Column: Featured Image / Dashboard Mockup */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/images/business/hero.png"
              alt="Zoiko Payroll trust security and compliance dashboard"
              width={500}
              height={360}
              className="w-full h-auto object-cover aspect-[16/11]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
