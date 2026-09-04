"use client";

import React from "react";

export default function AvailabilityStateSystemSection() {
  const states = [
    {
      label: "Available",
      dotColor: "bg-[#3F6B54]",
    },
    {
      label: "Contract-specific",
      dotColor: "bg-[#0A8FD0]",
    },
    {
      label: "Limited availability",
      dotColor: "bg-[#8C6D2F]",
    },
    {
      label: "Planned — not committed",
      dotColor: "bg-[#8592A0]",
    },
    {
      label: "Not offered",
      dotColor: "bg-[#A15F5A]",
    },
    {
      label: "Not publicly disclosed",
      dotColor: "bg-[#5B646B]",
    },
  ];

  return (
    <div className="w-full bg-white text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto space-y-12 text-center">
        {/* Header Block */}
        <div className="space-y-4 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              AVAILABILITY STATE SYSTEM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            Planned never appears selectable as available
          </h2>

          <p className="text-sm sm:text-base text-[#5B646B] font-medium leading-relaxed max-w-3xl mx-auto pt-1">
            Filter by product or service first{" "}
            <span className="text-slate-400 font-bold">—</span> region selection
            alone never implies a customer entitlement, and availability is
            never auto-selected from your browser location.
          </p>
        </div>

        {/* 6 State Cards Grid (3x2 format) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {states.map((state, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-[10px] p-6 shadow-xs flex items-center space-x-3"
            >
              <span
                className={`w-2 h-2 rounded-full shrink-0 ${state.dotColor}`}
              />
              <span className="text-[13px] font-extrabold text-[#07243B]">
                {state.label}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Subtext */}
        <p className="text-[11px] sm:text-xs text-slate-400 font-medium text-center mx-auto leading-relaxed pt-2">
          Unsupported product/region combinations explain incompatibility
          without implying a future commitment. A registry failure shows a
          controlled review path, never a blank result.
        </p>
      </section>
    </div>
  );
}
