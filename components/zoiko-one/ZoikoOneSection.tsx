"use client";

import React from "react";
import { Check } from "lucide-react";

// Feature points list matching the image context
const FEATURES = [
  "Zoiko Payroll can operate fully independently.",
  "Zoiko One is an optional connected-suite pathway.",
  "Any connection is governed, selected and evidence-backed.",
];

export default function ZoikoOneSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0C2232] to-[#0E4553] py-20 px-6 lg:px-16 text-white font-sans antialiased">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 space-y-6">
          {/* Top Category Tag */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#38BDF8]">
            <span>/</span>
            <span>ZOIKO ONE</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-[40px] font-bold text-white leading-tight">
            Standalone when you need it. Connected when it helps
          </h2>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
            Zoiko Payroll is a complete, independent product. Zoiko One is an
            optional connected-suite pathway &mdash; evaluated, selected and
            evidence-backed, never assumed.
          </p>

          {/* Checklist */}
          <ul className="space-y-3 pt-2">
            {FEATURES.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-xs sm:text-sm text-white/90"
              >
                <Check className="w-4 h-4 text-[#19F57F] shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0F6FAE] to-[#4FA3D1] hover:bg-[#0281D3] text-white hover:text-[#0A1928] text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95">
              Understand the Zoiko One relationship
            </button>
          </div>
        </div>

        {/* Right Column: Image Block */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-80 sm:h-96 w-full">
            <img
              src="/images/zoiko-one/hero.png"
              alt="Corporate professionals working on laptops in a modern office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
