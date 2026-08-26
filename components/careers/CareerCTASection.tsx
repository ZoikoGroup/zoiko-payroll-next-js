"use client";

import React from "react";

export default function CareerCTASection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#072432] via-[#09486D] to-[#0281D3] py-16 sm:py-20 px-8 text-center text-white shadow-md">
          {/* Constellation / Tech Nodes Background Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 800 300"
              preserveAspectRatio="none"
            >
              {/* Connected Dots Lines */}
              <polyline
                points="120,90 220,130 320,60"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <polyline
                points="580,90 650,140 700,200"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <polyline
                points="160,260 250,270"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="3 3"
              />

              {/* Dots */}
              <circle cx="120" cy="90" r="3" fill="white" />
              <circle cx="220" cy="130" r="3" fill="white" />
              <circle cx="320" cy="60" r="3" fill="white" />
              <circle cx="580" cy="90" r="3" fill="white" />
              <circle cx="650" cy="140" r="3" fill="white" />
              <circle cx="700" cy="200" r="3" fill="white" />
              <circle cx="160" cy="260" r="3" fill="white" />
              <circle cx="560" cy="280" r="3" fill="white" />
            </svg>
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-[32px] font-bold tracking-tight text-white leading-tight">
              A payroll career with real stakes starts here
            </h2>

            <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto font-normal">
              Current, verified roles only &mdash; no placeholders, no pipeline
              listings.
            </p>

            <div className="pt-2">
              <button className="px-6 py-3 rounded-xl bg-white text-[#0A1928] hover:bg-slate-100 font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-95">
                Explore open roles
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
