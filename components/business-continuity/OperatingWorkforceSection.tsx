"use client";

import React from "react";
import Image from "next/image";

export default function OperatingWorkforceSection() {
  const zoikoPayrollPoints = [
    "Critical roles and decision authorities",
    "Escalation paths and alternate working arrangements",
    "Access continuity for operating teams",
    "Cross-functional coordination, training and exercises",
  ] as const;

  const customerEmployerPoints = [
    "Maintain authorized contacts",
    "Monitor System Status and support routing",
    "Own identity recovery for their users",
    "Keep required records and local contingency plans",
  ] as const;

  const sharedPoints = [
    "Dependency awareness across integrations",
    "Timely reporting of suspected disruption",
    "Coordinated communication during an incident",
    "Joint review after significant events",
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4">
        {/* Category Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#0A78C3]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0A78C3] uppercase">
            OPERATING WORKFORCE &amp; SHARED RESPONSIBILITY
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0B192C] text-center tracking-tight mb-3">
          Clear ownership, from decision authority to customer action
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#64748B] text-center max-w-2xl leading-relaxed mb-10">
          Critical roles, escalation paths and access continuity on one side;
          explicit customer and shared responsibilities on the other.
        </p>

        {/* Three Columns Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
          {/* Card 1: Zoiko Payroll */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-xs overflow-hidden flex flex-col">
            <div className="bg-[#0B253C] px-5 py-3.5 text-white font-bold text-sm sm:text-[15px]">
              Zoiko Payroll
            </div>
            <div className="p-5 sm:p-6 flex-1 bg-white">
              <ul className="space-y-3">
                {zoikoPayrollPoints.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-[#475569] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B253C] shrink-0 mt-1.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Customer / Employer */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-xs overflow-hidden flex flex-col">
            <div className="bg-[#0A78C3] px-5 py-3.5 text-white font-bold text-sm sm:text-[15px]">
              Customer / Employer
            </div>
            <div className="p-5 sm:p-6 flex-1 bg-white">
              <ul className="space-y-3">
                {customerEmployerPoints.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-[#475569] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A78C3] shrink-0 mt-1.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3: Shared */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-xs overflow-hidden flex flex-col">
            <div className="bg-[#5C6E82] px-5 py-3.5 text-white font-bold text-sm sm:text-[15px]">
              Shared
            </div>
            <div className="p-5 sm:p-6 flex-1 bg-white">
              <ul className="space-y-3">
                {sharedPoints.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-[#475569] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5C6E82] shrink-0 mt-1.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Feature Image Box with Badge */}
        <div className="w-full relative rounded-2xl overflow-hidden shadow-md h-[280px] sm:h-[340px] md:h-[400px]">
          <Image
            src="/images/business/3.png"
            alt="Corporate workforce discussing escalation paths"
            fill
            className="object-cover"
          />

          {/* Bottom Left Badge */}
          <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/95 backdrop-blur-xs px-3.5 py-2 rounded-full shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span className="text-xs font-bold text-[#0F172A]">
              Escalation path defined
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
