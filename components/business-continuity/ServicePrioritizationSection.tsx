"use client";

import React from "react";
import Image from "next/image";

export default function ServicePrioritizationSection() {
  const gridItems = [
    {
      title: "Authorized access",
      description: "Sign-in and permissioned entry to the payroll workspace.",
      dotColor: "bg-[#2563EB]",
    },
    {
      title: "Calculation / run state",
      description:
        "The in-progress or completed payroll run and its result set.",
      dotColor: "bg-[#2563EB]",
    },
    {
      title: "Approvals / audit trail",
      description: "Sign-off history and the attributable record of change.",
      dotColor: "bg-[#2563EB]",
    },
    {
      title: "Payments orchestration",
      description: "Funding, release and payment file generation.",
      dotColor: "bg-[#2563EB]",
    },
    {
      title: "Statutory outputs",
      description: "Filings, integrations and regulator-facing submissions.",
      dotColor: "bg-[#2563EB]",
    },
    {
      title: "Records / exports",
      description: "Historical records, reports and data extracts.",
      dotColor: "bg-[#2563EB]",
    },
  ] as const;

  return (
    <div className="flex items-center bg-[#F9FAFB] justify-center py-12 md:py-20 text-[#0F172A]">
      <div className="max-w-6xl w-full flex flex-col gap-10 sm:gap-12 px-4">
        {/* Upper Hero Block: Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Image Box */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/business/1.png"
                alt="Payroll service prioritization dashboard"
                fill
                className="object-cover"
              />

              {/* Floating Badge Top Left */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span className="text-[11px] sm:text-xs font-bold text-[#0F172A]">
                  Impact-ranked
                </span>
              </div>

              {/* Floating Badge Bottom Right */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                <span className="text-[11px] sm:text-xs font-bold text-[#0F172A]">
                  Pay-window aware
                </span>
              </div>
            </div>
          </div>

          {/* Right Text Box */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#0082CA]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0082CA] uppercase">
                PAYROLL-CRITICAL SERVICE PRIORITIZATION
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0B192C] tracking-tight leading-tight mb-4">
              Recovery priorities follow payroll impact, not convenience
            </h2>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-xl">
              Priorities are set by business impact, payroll timing,
              dependencies, data integrity, and key payroll deadlines.
            </p>
          </div>
        </div>

        {/* Middle Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto gap-4">
          {gridItems.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] bg-white shadow-xs flex flex-col justify-start"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-2 h-2 rounded-full ${item.dotColor}`} />
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#64748B] max-w-50 leading-relaxed pl-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Alert Banner: 4px Left Border, No Radius */}
        <div className="w-full bg-[#E7EDFD] rounded-[6px] max-w-4xl mx-auto border-l-4 border-l-[#0A78C3] rounded-none p-4 sm:p-5">
          <p className="text-xs sm:text-[15px] text-[#334155] leading-relaxed">
            Service reachable must never automatically mean payroll ready. A
            restored service still passes reconciliation and integrity checks
            before normal processing resumes.
          </p>
        </div>
      </div>
    </div>
  );
}
