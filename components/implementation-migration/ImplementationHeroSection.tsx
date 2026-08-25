"use client";

import React from "react";

export default function ImplementationHeroSection() {
  return (
    <section className="relative w-full bg-[radial-gradient(circle_at_center,#123A5C_0%,#071C2E_50%,#050F1A_100%)] py-16 px-6 lg:px-16 text-white font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Column (Slightly larger share: col-span-7) */}
        <div className="lg:col-span-6 space-y-2">
          {/* Eyebrow / Tagline */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#8FD0F2]">
            <span>/</span>
            <span>Implementation and Migration</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-[40px] font-bold text-white leading-tight">
            Control global payroll implementation from discovery to
            stabilization
          </h1>

          {/* Subtitle / Description */}
          <p className="text-[17px] text-[#B9CDDD] leading-relaxed max-w-xl">
            Plan markets, entities, requirements, data, integrations,
            validation, parallel run and cutover through one governed
            implementation program &mdash; with evidence and decision rights
            visible at every gate.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#"
              className="px-10 py-3 rounded-full bg-[#0281D3] text-white font-semibold text-sm transition-opacity hover:opacity-90"
            >
              Contact Support
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-full bg-transparent border border-[#B9CDDD]/30 text-white font-semibold text-sm transition-colors hover:border-white"
            >
              Check jurisdiction availability
            </a>
          </div>

          {/* Key Metrics / Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#B9CDDD]/10">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#8FD0F2]">
                18
              </div>
              <div className="text-xs sm:text-sm text-[#B9CDDD]/70 mt-1">
                Active programs
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#8FD0F2]">
                450k+
              </div>
              <div className="text-xs sm:text-sm text-[#B9CDDD]/70 mt-1">
                Payroll records governed
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#8FD0F2]">
                99.9%
              </div>
              <div className="text-xs sm:text-sm text-[#B9CDDD]/70 mt-1">
                Gate evidence completeness
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Container Column (col-span-5) */}
        <div className="lg:col-span-6 relative pt-4 pb-4">
          <div className="relative">
            {/* Image Wrapper */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/images/implementation-migration/hero.png"
                alt="Implementation and migration dashboard view"
                className="w-full h-auto object-cover block"
              />
            </div>

            {/* Top-Left Floating Div Card (Overlapping Outside) */}
            <div className="absolute top-6 -left-6 bg-[#0A1928D9] backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl max-w-[200px] z-10">
              <div className="text-[10px] uppercase font-semibold text-[#8FD0F2] tracking-wider mb-1">
                Wave 3 of 5
              </div>
              <div className="text-sm font-bold text-white mb-2">
                Nordics &bull; On track
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#8FD0F22E] text-[#8FD0F2] text-[11px] font-medium border border-[#0281D3]/40">
                Parallel Run
              </span>
            </div>

            {/* Bottom-Right Floating Div Card (Overlapping Outside) */}
            <div className="absolute bottom-6 -right-6 bg-[#0A1928D9] backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl max-w-[180px] z-10">
              <div className="text-[10px] uppercase font-semibold text-[#8FD0F2] tracking-wider mb-1">
                Next
              </div>
              <div className="text-sm font-bold text-white mb-2 leading-snug">
                Launch decision
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#8FD0F22E] text-[#B9CDDD] text-[11px] font-medium border border-white/10">
                Awaiting approver
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
