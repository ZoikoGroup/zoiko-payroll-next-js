"use client";

import React from "react";
import Image from "next/image";

export default function PayPeriodCutoffSection() {
  return (
    <section className="w-full bg-[#F4F8FC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/footer-integrations/17.png"
                alt="Two colleagues looking at a laptop discussing time and payroll period data"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label: #0A8FD0 */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>PAY PERIOD, CUTOFF & TIME-ZONE/DST</span>
            </div>

            {/* Title: 36px */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight leading-snug text-[#0F172A]">
              Source period and payroll period are never the same object
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
              A source time-system period maps to the Zoiko Payroll calendar
              through versioned, effective-dated rules. Late or cross-period
              records follow governed deferment, review, adjustment, or
              allocation paths.
            </p>

            {/* Callout Box with Left Blue Accent Line */}
            <div className="relative border-l-4 border-[#0A8FD0] bg-white rounded-xl p-6 shadow-xs">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <span className="font-bold text-[#0F172A]">
                  No locale guessing.
                </span>{" "}
                Work and payroll time zones are never inferred from browser
                locale. Source timestamp and zone/offset are preserved where
                available, with DST forward gaps and fallback overlaps handled
                using evidenced source or configuration rules — never invented
                timestamps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
