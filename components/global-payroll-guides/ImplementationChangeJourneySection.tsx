"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const implementationPhases = [
  "Discovery",
  "Mapping",
  "Migration",
  "Testing",
  "Parallel run",
  "Cutover",
  "Stabilization",
];

export default function ImplementationChangeJourneySection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              IMPLEMENTATION & CHANGE JOURNEY
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            Phased, gated — never a promised timeline
          </h2>
        </div>

        {/* Process Flow Row */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {implementationPhases.map((phase, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-white border border-slate-200/80 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 text-center shadow-2xs">
                  <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                    {phase}
                  </span>
                </div>

                {idx < implementationPhases.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-[#3D9BD6] shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Subtitle */}
          <p className="text-center text-[11px] text-slate-400 font-medium">
            Your customer-specific rollout plan is outside this guide — talk to
            implementation for a scoped plan.
          </p>
        </div>

        {/* Highlight Banner with Background Image */}
        <div className="relative rounded-3xl overflow-hidden bg-[#07243B] min-h-[220px] p-8 sm:p-12 text-white shadow-xl flex items-center">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/resources/11.png"
              alt="Implementation analytics dashboard background"
              fill
              className="object-cover object-right opacity-50 mix-blend-luminosity"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071C2EE0] via-[#0A3254BF] to-[#0A8FD066]" />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                GATED, NOT GUARANTEED
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-snug">
              Each stage has inputs, validation and a decision point before
              moving forward.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
