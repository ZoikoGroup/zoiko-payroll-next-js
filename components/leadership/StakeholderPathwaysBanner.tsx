"use client";

import React from "react";

export default function StakeholderPathwaysBanner() {
  return (
    <section className="w-full bg-[#F9FAFB] py-12 lg:py-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Container with Background Image & Overlay */}
        <div
          className="relative w-full rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat flex items-center px-8 sm:px-12 lg:px-16 py-12"
          style={{
            backgroundImage: `url('/images/leadership/last.png')`,
          }}
        >
          {/* Blue Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071C2EE0] via-[#0A3254BF] to-[#0A8FD066]" />

          {/* Content Wrapper */}
          <div className="relative z-10 max-w-xl space-y-3">
            {/* Tag / Category */}
            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase">
              <span className="font-bold">/</span>
              <span>STAKEHOLDER PATHWAYS</span>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl md:text-[24px] max-w-120 font-bold text-white tracking-tight leading-tight">
              Every audience routed to the right destination.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
