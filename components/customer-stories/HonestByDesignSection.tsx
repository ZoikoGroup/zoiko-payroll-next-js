"use client";

import React from "react";
import { X } from "lucide-react";

export default function HonestByDesignSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] text-[#07243B]">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        {/* Header Block */}
        <div className="space-y-3 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              HONEST BY DESIGN
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            An honest empty state beats a fabricated one
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
            We never pad this page with fake cards or false pagination. When
            eligible stories are limited, the page tells you clearly and offers
            real alternatives.
          </p>
        </div>

        {/* Empty State Box */}
        <div className="max-w-2xl mx-auto border border-dashed border-slate-200 rounded-2xl p-10 sm:p-12 bg-white flex flex-col items-center justify-center text-center space-y-3">
          {/* Circular Icon */}
          <div className="w-10 h-10 rounded-full bg-[#E2EDF8] flex items-center justify-center text-[#3D9BD6] mb-1">
            <X className="w-5 h-5 stroke-[2.5]" />
          </div>

          {/* Message Title */}
          <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
            No published stories currently match this filter
          </h3>

          {/* Message Description */}
          <p className="text-xs text-slate-500 font-medium">
            Try clearing your filters, or explore proof through these current
            authorities instead.
          </p>
        </div>

        {/* Footnote */}
        <p className="text-[11px] text-slate-400 font-medium max-w-2xl mx-auto">
          A withdrawn story or unavailable media always shows an explicit
          replacement state — never a broken link or silent removal.
        </p>
      </div>
    </section>
  );
}
