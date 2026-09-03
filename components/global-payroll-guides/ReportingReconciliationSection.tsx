"use client";

import React from "react";
import Image from "next/image";

export default function ReportingReconciliationSection() {
  const badges = [
    "Defined metric",
    "Needs evidence",
    "Revision / correction",
    "Cross-entity view",
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] text-[#07243B]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Content */}
        <div className="lg:col-span-6 space-y-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              REPORTING, RECONCILIATION & EVIDENCE
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            Group-level view, without erasing local authority
          </h2>

          {/* Body Paragraph */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
            Every metric carries its period, currency basis and revision
            history. Cross-entity coordination stays visible without overriding
            local source-of-truth data.
          </p>

          {/* Pill Badges Grid/Row */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="bg-white border border-slate-200/80 text-[#07243B] text-xs font-bold px-4 py-2 rounded-full shadow-2xs"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Footer Disclaimer */}
          <p className="text-[11px] text-slate-400 font-medium pt-2">
            Current product reporting capability routes to Records and Reports —
            this guide explains reporting design principles only.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-6 relative w-full h-[300px] sm:h-[380px] lg:h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="/images/resources/10.png"
            alt="Business team reviewing metrics around a table"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
