"use client";

import React from "react";
import Image from "next/image";

export default function GovernanceRecordsSection() {
  const records = [
    {
      title: "Audit logs",
      description: "Material payroll actions recorded automatically.",
    },
    {
      title: "Validation evidence",
      description: "Test results retained against each cycle.",
    },
    {
      title: "Version history",
      description: "Configuration changes tracked over time.",
    },
    {
      title: "Configuration snapshot",
      description: "Point-in-time state captured per cycle.",
    },
    {
      title: "Test reports",
      description: "Structured results for every scenario run.",
    },
    {
      title: "Approval signatures",
      description: "Recorded sign-off at each governance stage.",
    },
  ] as const;

  return (
    <div className="relative w-full bg-gradient-to-r from-[#0E2A47] to-[#16386A] from min-h-[600px] flex items-center justify-center py-16 md:py-24 text-white overflow-hidden">
      {/* Background Image with Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/parallel/4.png"
          alt="Governance background showing team meeting in office"
          fill
          className="object-cover opacity-20 object-center"
          priority
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-start px-6 lg:px-12">
        {/* Category Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#3B82F6]" />
          <span className="text-xs sm:text-sm font-medium text-[#60A5FA] tracking-wide">
            Governance
          </span>
        </div>

        {/* Main Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-12">
          Every decision leaves a record.
        </h2>

        {/* 3 Columns x 2 Rows Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {records.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF14] border border-white/20 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:bg-white/15 hover:border-white/30"
            >
              <div>
                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
