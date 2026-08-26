"use client";

import React from "react";

export default function WhatIsZoikoOneSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>DIRECT ANSWER</span>
          </div>

          <h2 className="text-3xl md:text-[32px] font-bold text-[#0A1928] leading-tight">
            What is Zoiko One?
          </h2>

          <p className="text-sm sm:text-base text-[#5C6E7E] leading-relaxed">
            Zoiko One is the approved, selected connected-suite relationship
            between Zoiko Payroll and other Zoiko products, enabled only where
            explicitly configured for your organization.
          </p>
        </div>

        {/* Two Path Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Path A Card */}
          <div className="bg-white border border-[#E1E8ED] rounded-3xl p-8 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-wider uppercase text-[#0281D3]">
                PATH A
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A1928]">
                Use Zoiko Payroll independently.
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6E7E] leading-relaxed">
                Current payroll use, product controls, support and operational
                truth remain payroll-specific &mdash; no suite required.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#E0F2FE] text-[#0281D3] text-xs font-semibold">
                No Zoiko One required
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#E0F2FE] text-[#0281D3] text-xs font-semibold">
                Standalone support
              </span>
            </div>
          </div>

          {/* Path B Card */}
          <div className="bg-[#F0F9FF] border-2 border-[#0281D3] rounded-3xl p-8 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-wider uppercase text-[#0281D3]">
                PATH B
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A1928]">
                Evaluate Zoiko One.
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6E7E] leading-relaxed">
                Move into relationship, authority, access, data, workflow and
                evaluation detail &mdash; a decision, not a default.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#E0F2FE] text-[#0281D3] text-xs font-semibold">
                Approved connections only
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#E0F2FE] text-[#0281D3] text-xs font-semibold">
                Evidence-backed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
