"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface StatusCardProps {
  title: string;
  description: string;
}

const statusCards: StatusCardProps[] = [
  {
    title: "Available",
    description: "Evidenced and production-ready.",
  },
  {
    title: "Available with implementation",
    description: "Supported, needs configuration.",
  },
  {
    title: "Validation required",
    description: "Evidence stale or unconfirmed.",
  },
  {
    title: "Not listed",
    description: "Request fit validation.",
  },
];

export default function FitCapabilityConfidenceSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Image with Floating Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl border border-slate-200/80">
              <Image
                src="/images/footer-integrations/37.png"
                alt="Engineering team reviewing technical specifications on dual screens"
                fill
                className="object-cover"
                priority
              />

              {/* Top-Right Badge: Federation-supported */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-800">
                <span>Federation-supported</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>

              {/* Bottom-Left Badge: Provisioning - validation req. */}
              <div className="absolute bottom-16 left-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-800">
                <span>Provisioning — validation req.</span>
                <span className="w-2 h-2 rounded-full bg-amber-500" />
              </div>

              {/* Bottom-Right Badge: Not listed */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-800">
                <span>Not listed</span>
                <span className="w-2 h-2 rounded-full bg-slate-400" />
              </div>
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Header Block */}
            <div className="space-y-3">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
                <span className="w-4 h-[2px] bg-[#0A8FD0] inline-block" />
                <span>FIT & CAPABILITY CONFIDENCE</span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
                Every capability has its own status
              </h2>
            </div>

            {/* Subtitle / Paragraph */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              Federation, provisioning and role mapping are evaluated — and
              shown — independently.
            </p>

            {/* 2x2 Status Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {statusCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0A8FD0] shrink-0 stroke-[2.5]" />
                    <h3 className="text-xs font-bold text-[#07243B]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-500 pl-5 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Blue Callout Box */}
            <div className="bg-[#E6F0FA] p-4 sm:p-5 border-l-4 border-[#0A8FD0] shadow-xs">
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Stale evidence downgrades a public claim to validation-required
                automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
