"use client";

import React from "react";

// Steps 01 through 08 matching the overlay grid
const LIFECYCLE_STEPS = [
  {
    number: "01",
    title: "Purpose",
    description: "Why a connection is proposed.",
  },
  {
    number: "02",
    title: "Authority",
    description: "Which domain owner approves it.",
  },
  {
    number: "03",
    title: "Mapping",
    description: "What data/fields are in scope.",
  },
  {
    number: "04",
    title: "Validation",
    description: "Tested before enablement.",
  },
  {
    number: "05",
    title: "Enablement",
    description: "Turned on for your account.",
  },
  {
    number: "06",
    title: "Monitoring",
    description: "Health tracked continuously.",
  },
  {
    number: "07",
    title: "Reconciliation",
    description: "Outcomes verified, not assumed.",
  },
  {
    number: "08",
    title: "Change control",
    description: "Changes go through the same gate.",
  },
];

export default function ApprovedConnectionsLifecycleSection() {
  return (
    <section className="relative w-full py-20 px-6 lg:px-16 text-white font-sans antialiased overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/zoiko-one/bg.jpg"
          alt="How approved connections work background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for content legibility */}
        <div className="absolute inset-0 bg-[#072432]/90 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#38BDF8]">
            <span>/</span>
            <span>HOW APPROVED CONNECTIONS WORK</span>
          </div>

          <h2 className="text-3xl md:text-[32px] font-bold text-white leading-tight">
            The Company-level lifecycle &mdash; not the implementation manual.
          </h2>

          <p className="text-sm sm:text-base text-white/80 max-w-3xl leading-relaxed">
            Every connection shown here is backed by an active, approved capability/relationship record. Field mappings, permissions and failure handling live in Product &gt; Zoiko One Integration.
          </p>
        </div>

        {/* 8 Glassmorphism Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LIFECYCLE_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 space-y-3 flex flex-col justify-between hover:bg-white/15 hover:border-white/25 transition-all shadow-lg"
            >
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-[#38BDF8] tracking-widest">
                  {step.number}
                </span>
                <h3 className="text-sm font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}