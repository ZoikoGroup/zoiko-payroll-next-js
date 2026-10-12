"use client";

import React from "react";
import { Check, AlertTriangle } from "lucide-react";

interface ChecklistItem {
  label: string;
}

const duplicateSafeItems: ChecklistItem[] = [
  { label: "Use event_id as the dedupe key" },
  { label: "Check dedupe before irreversible side effects" },
  { label: "Treat replayed events as potential duplicates" },
];

export default function DuplicatesIdempotencySection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 border-t border-t-[#E6E9F0] lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="w-4 h-[2px] bg-[#0A8FD0] inline-block" />
            <span>DUPLICATES + IDEMPOTENCY + ORDERING / CONCURRENCY</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[26px] font-bold tracking-tight text-[#07243B] leading-tight">
            Exactly-once is never claimed unless explicitly guaranteed
          </h2>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Left Card: Duplicate-safe consumer flow */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-4">
            <h3 className="text-sm font-bold text-[#07243B]">
              Duplicate-safe consumer flow
            </h3>

            <div className="divide-y divide-slate-100 flex-1 flex flex-col justify-center">
              {duplicateSafeItems.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700"
                >
                  <div className="w-5 h-5 rounded-md bg-[#E6F4EA] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#137333] stroke-[2.5]" />
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card: Ordering & concurrency */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-4">
            <h3 className="text-sm font-bold text-[#07243B]">
              Ordering &amp; concurrency
            </h3>

            <div className="divide-y divide-slate-100 flex-1 flex flex-col justify-center">
              {/* Row 1: Ordering warning */}
              <div className="py-3.5 flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                <div className="w-5 h-5 rounded-md bg-[#FEF7E0] flex items-center justify-center shrink-0">
                  <span className="text-[#B06000] font-bold text-xs font-mono">
                    !
                  </span>
                </div>
                <span>Ordering is not documented as guaranteed</span>
              </div>

              {/* Row 2: Strategy recommendation */}
              <div className="py-3.5 flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                <div className="w-5 h-5 rounded-md bg-[#E6F4EA] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#137333] stroke-[2.5]" />
                </div>
                <span>
                  Use resource-version/timestamp strategy where the API supports
                  it
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Alert / Warning Banner */}
        <div className="bg-[#FDF1DE] border border-[#F0DCAE] rounded-[10px] p-4 flex items-start gap-3 text-[12.5px] text-amber-900 leading-relaxed">
          <AlertTriangle className="w-4 h-4 text-[#3A4356] shrink-0 mt-0.5" />
          <p className="font-medium text-[#3A4356]">
            Never assume delivery uniqueness or ordering unless the current
            approved contract explicitly guarantees it.
          </p>
        </div>
      </div>
    </section>
  );
}
