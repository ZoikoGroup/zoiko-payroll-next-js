"use client";

import React from "react";
import { Check } from "lucide-react";

interface GateCard {
  id: string;
  title: string;
  description: string;
}

const gateItems: GateCard[] = [
  {
    id: "funding-deadline",
    title: "Funding deadline",
    description: "Date, time, timezone and consequence.",
  },
  {
    id: "funding-evidence",
    title: "Funding evidence",
    description: "Provider confirmation, ref, amount.",
  },
  {
    id: "dual-authorization",
    title: "Dual authorization",
    description: "Role, threshold, escalation.",
  },
  {
    id: "step-up-authentication",
    title: "Step-up authentication",
    description: "For high-risk release or reroutes.",
  },
];

export default function FundingAndAuthorizationSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text Header, 2x2 Grid, and Callout Box (7 cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Header Block */}
            <div className="space-y-3">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
                <span className="text-[#0A78C3] font-bold">—</span>
                <span>FUNDING & AUTHORIZATION</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
                Release passes only when every gate clears
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-500 font-medium">
                Payroll approval is separated from payment release by design.
              </p>
            </div>

            {/* 2-Column Grid of Checked Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {gateItems.map((item) => (
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

            {/* Callout Box with Zero Left Radius */}
            <div className="pt-1">
              <div className="bg-[#E7EDFD] border-l-4 border-l-[#0A78C3] rounded-r-xl rounded-l-none p-4">
                <p className="text-xs sm:text-sm text-[#07243B] font-medium leading-relaxed">
                  Shortfall never silently reduces a worker&apos;s payment —
                  release blocks or conditions instead.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Office Image with Floating Status Badges (5 cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-xl border border-slate-200/60">
              {/* Background Image */}
              <img
                src="/images/payroll-operation/bg8.png"
                alt="Business team discussing financial strategy in a modern meeting room"
                className="w-full h-full object-cover object-center"
              />

              {/* Top Right Floating Badge: Funding Confirmed */}
              <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl px-3.5 py-2 flex items-center gap-2 shadow-md">
                <span className="text-xs font-semibold text-[#07243B]">
                  Funding
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Confirmed
                </span>
              </div>

              {/* Bottom Left Floating Badge: Authorization Pending */}
              <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl px-3.5 py-2 flex items-center gap-2 shadow-md">
                <span className="text-xs font-semibold text-[#07243B]">
                  Authorization
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Pending
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
