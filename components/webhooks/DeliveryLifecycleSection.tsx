"use client";

import React from "react";

const lifecycleStates = [
  "QUEUED",
  "ATTEMPTING",
  "DELIVERED",
  "FAILED_RETRYABLE",
  "RETRY_SCHEDULED",
  "FAILED_FINAL",
  "PAUSED",
  "DISABLED",
];

export default function DeliveryLifecycleSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="w-4 h-[2px] bg-[#0A8FD0] inline-block" />
            <span>DELIVERY LIFECYCLE + ACKNOWLEDGEMENT + RETRIES</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[25.6px] font-bold tracking-tight text-[#07243B] leading-tight">
            DELIVERED is endpoint acknowledgement — not downstream success
          </h2>
        </div>

        {/* Lifecycle States Segmented Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs divide-y lg:divide-y-0 lg:divide-x divide-slate-100 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 overflow-hidden font-mono text-[11px] font-bold text-slate-500">
          {lifecycleStates.map((state, idx) => (
            <div
              key={idx}
              className="p-4 text-center flex items-center justify-center hover:bg-slate-50/50 transition-colors"
            >
              <span>{state}</span>
            </div>
          ))}
        </div>

        {/* Critical Rule Warning Banner */}
        <div className="bg-[#FBE9E9] border border-red-100 rounded-2xl p-5 sm:p-6 text-xs sm:text-sm leading-relaxed text-[#3A4356]">
          <p>
            <span className="font-bold text-[#C23A3A]">Critical rule:</span>{" "}
            DELIVERED means the endpoint met the documented acknowledgement
            condition. It does not prove downstream business processing
            succeeded — confirm your own processing separately.
          </p>
        </div>
      </div>
    </section>
  );
}
