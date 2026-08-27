"use client";

import React from "react";

interface StatusPill {
  label: string;
  bgClass: string;
  textClass: string;
}

const statusPills: StatusPill[] = [
  { label: "Active", bgClass: "bg-[#DCFCE7]", textClass: "text-[#166534]" },
  {
    label: "Acting",
    bgClass: "bg-white border border-gray-200",
    textClass: "text-[#334155]",
  },
  { label: "Interim", bgClass: "bg-[#FEF9C3]", textClass: "text-[#854D0E]" },
  {
    label: "Transitioning",
    bgClass: "bg-[#FEF3C7]",
    textClass: "text-[#92400E]",
  },
  {
    label: "Vacant",
    bgClass: "bg-white border border-gray-200",
    textClass: "text-[#334155]",
  },
  {
    label: "Former",
    bgClass: "bg-white border border-gray-200",
    textClass: "text-[#334155]",
  },
  {
    label: "Restricted",
    bgClass: "bg-white border border-gray-200",
    textClass: "text-[#334155]",
  },
];

export default function LeadershipContinuitySection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-12 lg:py-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Image without forced styling/containers */}
          <div className="lg:col-span-6 flex justify-center">
            <img
              src="/images/leadership/3.png"
              alt="Team discussing reports around a laptop"
            />
          </div>

          {/* Right Column: Header & Text */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
              <span className="font-bold">/</span>
              <span>LEADERSHIP CONTINUITY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
              Leadership data changes — the page handles it without breaking
            </h2>

            <p className="text-[17px] text-[#4D5E72] max-w-120 leading-relaxed">
              Every assignment and profile uses immutable, versioned records
              with scheduled reviews. If assignment evidence is missing or
              expired, we fail closed: the named identity is suppressed and a
              role-only fallback is shown instead.
            </p>
          </div>
        </div>

        {/* Status Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {statusPills.map((pill, idx) => (
            <span
              key={idx}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm ${pill.bgClass} ${pill.textClass}`}
            >
              {pill.label}
            </span>
          ))}
        </div>

        {/* Transition Banner Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border-l-4 border-[#0A8FD0] shadow-sm max-w-3xl mx-auto space-y-1">
          <p className="text-[14.5px] text-[#334155] leading-relaxed">
            <span className="font-bold text-[#0F172A]">
              Example transition banner:
            </span>{" "}
            &quot;Interim ownership — Chief Revenue Officer role currently held on an
            acting <br /> basis. Current accountable scope: Commercial & Customer
            Success, all regions.&quot; Former leaders are never simply deleted if
            that would break external citations — a governed archive record is
            retained instead.
          </p>
        </div>
      </div>
    </section>
  );
}
