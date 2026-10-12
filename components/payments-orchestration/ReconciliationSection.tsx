"use client";

import React from "react";
import { Check } from "lucide-react";

interface ReconCard {
  id: string;
  title: string;
  description: string;
}

const reconItems: ReconCard[] = [
  {
    id: "matching",
    title: "Matching",
    description: "Amount and currency; fees separate.",
  },
  {
    id: "recipient-matching",
    title: "Recipient matching",
    description: "Internal tokens, not bank credentials.",
  },
  {
    id: "partial-outcomes",
    title: "Partial outcomes",
    description: "Never auto-close — need ownership.",
  },
  {
    id: "historical-integrity",
    title: "Historical integrity",
    description: "Evidence appended, never erased.",
  },
];

export default function ReconciliationSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text Header & 2x2 Grid (7 cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Header Block */}
            <div className="space-y-3">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
                <span className="text-[#0A78C3] font-bold">—</span>
                <span>RECONCILIATION</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
                Close the loop from outcome back to payroll
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                Obligation &rarr; instruction &rarr; provider reference &rarr;
                settlement &rarr; reconciliation record.
              </p>
            </div>

            {/* 2-Column Grid of Checked Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {reconItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 sm:p-4.5 rounded-2xl border border-slate-200/80 bg-white flex items-start gap-3 shadow-2xs"
                >
                  <div className="mt-0.5 shrink-0 text-[#0A78C3]">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-xs sm:text-sm font-bold text-[#07243B]">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Workstation Image with Floating Status Badges (5 cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-xl border border-slate-200/60">
              {/* Background Image */}
              <img
                src="/images/payroll-operation/11.png"
                alt="Finance professional reviewing reconciliation dashboard with colleague"
                className="w-full h-full object-cover object-center"
              />

              {/* Top Right Floating Badge: 4 unmatched */}
              <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-md">
                <span className="text-xs font-bold text-[#07243B]">
                  4 unmatched
                </span>
                <span className="w-2 h-2 rounded-full bg-amber-500" />
              </div>

              {/* Bottom Left Floating Badge: 1,232 matched */}
              <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl px-3.5 py-2 flex items-center gap-2 shadow-md">
                <span className="text-xs font-bold text-[#07243B]">
                  1,232 matched
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
