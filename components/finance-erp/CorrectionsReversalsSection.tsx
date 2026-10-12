"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Clock, RefreshCw } from "lucide-react";

interface ExceptionFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: ExceptionFeature[] = [
  {
    icon: <CheckCircle2 className="w-5 h-5 text-[#0A8FD0]" />,
    title: "Not delivered",
    description:
      "Correct the source or mapping and regenerate. The original attempt remains fully auditable.",
  },
  {
    icon: <Clock className="w-5 h-5 text-[#0A8FD0]" />,
    title: "Delivered but rejected",
    description:
      "Resolve the target rejection and retry using implementation-defined idempotency semantics.",
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-[#0A8FD0]" />,
    title: "Posted incorrectly",
    description:
      "Never overwrite history — use a governed reversal or superseding journal where supported.",
  },
];

export default function CorrectionsReversalsSection() {
  return (
    <section className="w-full bg-[#F4F8FC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Top Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label: #0A8FD0 */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>CORRECTIONS, REVERSALS & RECONCILIATION</span>
            </div>

            {/* Title: 36px */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight leading-tight text-[#0F172A]">
              Successful transport is not successful accounting
            </h2>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-[17px] text-slate-500 leading-relaxed max-w-xl">
              Posted journals are never overwritten — corrections use a governed
              reversal, correction or superseding journal where supported.
              Payroll recalculation creates a linked accounting impact;
              previously posted journals are never silently mutated.
            </p>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/footer-integrations/14.png"
                alt="Financial experts analyzing accounting reports and reconciliation documents"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: 3 Feature Columns + Callout Banner */}
        <div className="space-y-10">
          {/* 3 Icon Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center space-y-3 px-4"
              >
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-[#E1EEF9] text-[#0A8FD0] flex items-center justify-center">
                  {item.icon}
                </div>
                {/* Title */}
                <h3 className="text-base font-bold text-[#0F172A]">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Reconciliation Checks Callout Container */}
          <div className="relative border-l-4 border-[#0A8FD0] bg-white rounded-xl p-6 sm:p-7 shadow-xs">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <span className="font-bold text-[#0F172A]">
                Reconciliation checks:
              </span>{" "}
              identity, amount, line count, entity, currency, dimensions,
              status, variance and evidence — every check is privileged over a
              simple "sent successfully" flag.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
