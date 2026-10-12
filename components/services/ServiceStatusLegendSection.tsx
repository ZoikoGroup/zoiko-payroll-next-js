"use client";

import React from "react";

interface StatusPill {
  label: string;
  dotColor: string;
  bgColor: string;
  textColor: string;
}

const statusPills: StatusPill[] = [
  {
    label: "Included",
    dotColor: "bg-[#2E7D32]",
    bgColor: "bg-[#E8F5E9]",
    textColor: "text-[#2E7D32]",
  },
  {
    label: "Included with allowance",
    dotColor: "bg-[#1976D2]",
    bgColor: "bg-[#E3F2FD]",
    textColor: "text-[#1565C0]",
  },
  {
    label: "Optional",
    dotColor: "bg-[#B78103]",
    bgColor: "bg-[#Fef3c7]",
    textColor: "text-[#8F6B00]",
  },
  {
    label: "Contracted",
    dotColor: "bg-[#7C3AED]",
    bgColor: "bg-[#EDE9FE]",
    textColor: "text-[#6D28D9]",
  },
  {
    label: "Jurisdiction dependent",
    dotColor: "bg-[#64748B]",
    bgColor: "bg-[#F1F5F9]",
    textColor: "text-[#475569]",
  },
  {
    label: "Not available",
    dotColor: "bg-[#94A3B8]",
    bgColor: "bg-[#F8FAFC]",
    textColor: "text-[#64748B]",
  },
];

export default function ServiceStatusLegendSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF4F7] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Block with Right-aligned Subtext */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                SERVICE STATUS LEGEND
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
              The same six states, used everywhere.
            </h2>
          </div>

          {/* Right Subtext */}
          <p className="text-xs text-slate-400 font-medium pb-1">
            Text + icon always — never color alone.
          </p>
        </div>

        {/* Status Pills Row */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {statusPills.map((pill, idx) => (
            <div
              key={idx}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full ${pill.bgColor} transition-all`}
            >
              <span className={`w-2 h-2 rounded-full ${pill.dotColor}`} />
              <span className={`text-xs font-bold ${pill.textColor}`}>
                {pill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
