"use client";

import React from "react";
import Image from "next/image";

interface LayerCard {
  title: string;
  dotColor: string;
  description: string;
}

const layers: LayerCard[] = [
  {
    title: "Global layer",
    dotColor: "bg-[#2563EB]",
    description: "Common status, provenance, severity and audit semantics.",
  },
  {
    title: "Local rules",
    dotColor: "bg-[#10B981]",
    description: "Effective-dated and versioned per jurisdiction.",
  },
];

export default function GlobalMultiEntityOperatingModelSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text, Cards & Callout */}
          <div className="lg:col-span-6 space-y-8">
            {/* Header Block */}
            <div className="space-y-3">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
                <span>—</span>
                <span>GLOBAL & MULTI-ENTITY OPERATING MODEL</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
                Standardize the control model. Not the law
              </h2>
            </div>

            {/* 2-Column Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {layers.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-2 flex flex-col justify-start"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${card.dotColor} shrink-0`}
                    />
                    <h3 className="text-sm font-bold text-[#07243B]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Callout Container (Square corners, left border accent) */}
            <div className="bg-[#E9F0F8] border-l-4 border-l-[#0A8FD0] p-5 shadow-2xs rounded-none">
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Statutory deadlines are never inferred from pay date alone —
                only from authoritative configured calendars and obligations.
              </p>
            </div>
          </div>

          {/* Right Column: Hero Graphic Card with Floating Badge */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/60">
              <Image
                src="/images/payroll-operation/25.png"
                alt="Global team collaborating on multi-entity payroll strategy"
                fill
                className="object-cover"
                priority
              />

              {/* Floating Badge Bottom Left */}
              <div className="absolute bottom-4 left-4 z-10">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200 text-[#07243B] text-xs font-semibold shadow-2xs backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <span>4 legal entities in view</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
