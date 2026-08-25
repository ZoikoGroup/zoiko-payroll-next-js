"use client";

import React from "react";
import { Check } from "lucide-react";

// Left & Right Column Dimension Items Data
const LEFT_DIMENSIONS = [
  "Requirement values, category applicability & effective dates",
  "Local approver / delegate / reviewer / SME assignments",
  "Market-specific evidence owner, source & review date",
];

const RIGHT_DIMENSIONS = [
  "Local requirement versions & future-effective packages",
  "Local reason codes & service/provider dependencies",
  "Local currency, reporting dimensions & FX basis",
];

// Central Global Control Contract Specs
const CONTRACT_SPECS = [
  { left: "Role-based access & SoD", right: "Versioning & audit history" },
  {
    left: "Evidence & review-state model",
    right: "Exception / retry / escalation",
  },
  {
    left: "Reporting object definitions",
    right: "Security & privacy principles",
  },
];

export default function GlobalContractSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Hero Layout: Image + Text Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Image Container */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-sm border border-[#E1E8ED]">
            <img
              src="/images/payroll-requirements/left.png"
              alt="One stable global contract"
              className="w-full h-56 sm:h-72 object-cover block"
            />
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
              <span>/</span>
              <span>Same Control Grammar, Different Local Configuration</span>
            </div>

            <h2 className="text-3xl md:text-[36px] font-bold text-[#0A1928] leading-tight">
              One stable global contract. Six configurable local dimensions.
            </h2>
          </div>
        </div>

        {/* 3-Column Architecture Graphic Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch pt-2">
          {/* Left Column (3 Local Dimensions) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-3">
            {LEFT_DIMENSIONS.map((item, index) => (
              <div
                key={index}
                className="flex-1 flex items-center p-4 bg-[#DFF1FF] border border-[#D2E3FC] rounded-2xl text-xs sm:text-sm font-medium text-[#0A1928] shadow-sm leading-snug"
              >
                {item}
              </div>
            ))}
          </div>

          {/* Center Column (Global Control Contract Box) */}
          <div className="lg:col-span-4 bg-gradient-to-r from-[#0B4573] to-[#0A8FD0] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md">
            <h3 className="text-lg sm:text-xl font-bold text-center text-white">
              Global Control Contract
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {CONTRACT_SPECS.map((spec, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-start gap-2 text-xs text-white/90">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-white" />
                    <span>{spec.left}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-white/90">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-white" />
                    <span>{spec.right}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column (3 Local Dimensions) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-3">
            {RIGHT_DIMENSIONS.map((item, index) => (
              <div
                key={index}
                className="flex-1 flex items-center p-4 bg-[#DFF1FF] border border-[#D2E3FC] rounded-2xl text-xs sm:text-sm font-medium text-[#0A1928] shadow-sm leading-snug"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Flow Caption */}
        <div className="text-center text-xs sm:text-sm italic text-[#5C6E7E] pt-2">
          Prepare &rarr; Calculate &rarr; Validate &rarr; Review &rarr; Approve
          &rarr; Complete &mdash; the same control grammar everywhere.
        </div>
      </div>
    </section>
  );
}
