"use client";

import React from "react";

// Badges list data
const BADGES = [
  "Reviewed per domain",
  "Evidence required",
  "No default access",
];

export default function GovernanceInPracticeSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Image with Overlay Pill Badges */}
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-[#E1E8ED] shadow-sm h-72 sm:h-96 w-full">
          <img
            src="/images/zoiko-one/domain.png"
            alt="Team of domain owners conducting a review meeting in a modern conference room"
            className="w-full h-full object-cover"
          />

          {/* Top-Left Badge */}
          <div className="absolute top-4 left-4 bg-[#FFFFFFF5] backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xs border border-black/5">
            <span className="text-xs font-bold text-[#0A1928]">
              Purpose reviewed
            </span>
          </div>

          {/* Bottom-Right Badge */}
          <div className="absolute bottom-4 right-4 bg-[#FFFFFFF5] backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xs border border-black/5">
            <span className="text-xs font-bold text-[#0A1928]">
              Authority confirmed
            </span>
          </div>
        </div>

        {/* Right Column: Content Block */}
        <div className="lg:col-span-6 space-y-6">
          {/* Section Category Tag */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>GOVERNANCE IN PRACTICE</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1928] leading-tight">
            Every connection decision has a named owner in the room.
          </h2>

          {/* Body Description */}
          <p className="text-sm sm:text-base text-[#5C6E7E] leading-relaxed max-w-xl">
            Domain owners &mdash; not a shared database &mdash; decide what, if
            anything, connects. That review happens before enablement, not
            after.
          </p>

          {/* Pill Badges Row */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            {BADGES.map((badge, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-[#E0F2FE] text-[#0281D3] text-xs font-semibold"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
