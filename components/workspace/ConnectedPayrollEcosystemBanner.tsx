"use client";

import React from "react";

export default function ConnectedPayrollEcosystemBanner() {
  return (
    <section className="w-full bg-[#F9FAFB] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl min-h-[220px] sm:min-h-[260px] flex items-center p-8 sm:p-12 lg:p-16">
          {/* Background Image */}
          <img
            src="/images/workspace/bg1.png"
            alt="Team of professionals collaborating in a meeting room"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Gradient Overlay (Dark Navy on Left transitioning to Lighter Blue on Right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071C2EE0] via-[#0A3254BF] to-[#0A8FD066]" />

          {/* Text Content */}
          <div className="relative z-10 space-y-3 max-w-xl text-white">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase font-mono">
              <span className="text-[#8FD0F2] font-bold">/</span>
              <span>CONNECTED PAYROLL ECOSYSTEM</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-white leading-tight">
              Bring payroll inputs together without rebuilding your stack
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
