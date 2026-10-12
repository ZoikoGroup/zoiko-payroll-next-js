"use client";

import React from "react";

export default function GuideStatusSection() {
  const metadataItems = [
    { label: "VERSION", value: "v3.1" },
    { label: "REVIEWED", value: "Aug 2026" },
    { label: "EDITORIAL OWNER", value: "Global Payroll Team" },
    { label: "AUDIENCE", value: "Payroll, Finance, HR" },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-8 text-center">
        {/* Header Container */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              GUIDE STATUS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            Currentness, visible before you read a word
          </h2>
        </div>

        {/* Status Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
          {/* Green Status Badge */}
          <span className="bg-[#E3F0E7] text-[#20502F] text-xs font-bold px-3.5 py-1.5 rounded-full inline-flex items-center justify-center">
            Current
          </span>

          {/* Yellow Status Badge */}
          <span className="bg-[#F1EAD8] text-[#6B5A20] text-xs font-bold px-3.5 py-1.5 rounded-full inline-flex items-center justify-center">
            Review due
          </span>

          {/* Light Blue Status Badge */}
          <span className="bg-[#E2EDF8] text-[#2B5A84] text-xs font-bold px-3.5 py-1.5 rounded-full inline-flex items-center justify-center">
            Under review
          </span>

          {/* Neutral Status Badges */}
          <span className="bg-[#EEF1F5] text-[#55606C] text-xs font-bold px-3.5 py-1.5 rounded-full inline-flex items-center justify-center">
            Superseded
          </span>

          <span className="bg-[#EEF1F5] text-[#55606C] text-xs font-bold px-3.5 py-1.5 rounded-full inline-flex items-center justify-center">
            Withdrawn
          </span>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {metadataItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F4F8FBA8] border border-slate-200/80 rounded-xl p-4 text-left shadow-2xs space-y-1.5"
            >
              <span className="block text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                {item.label}
              </span>
              <span className="block text-sm font-bold text-[#07243B]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
