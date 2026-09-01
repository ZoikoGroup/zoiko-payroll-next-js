"use client";

import React from "react";
import { Check } from "lucide-react";

interface StatusCard {
  id: string;
  title: string;
  description: string;
}

const statusItems: StatusCard[] = [
  {
    id: "submitted",
    title: "Submitted",
    description: "Sent or exported to the provider.",
  },
  {
    id: "accepted-processing",
    title: "Accepted / Processing",
    description: "Externally acknowledged, in progress.",
  },
  {
    id: "settled",
    title: "Settled",
    description: "Requires verified external evidence.",
  },
  {
    id: "reconciled",
    title: "Reconciled",
    description: "Matched back to the obligation.",
  },
];

export default function StatusAndExceptionsSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
            <span className="text-[#0A78C3] font-bold">—</span>
            <span>STATUS & EXCEPTIONS</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            Submitted, Accepted and Settled are not the same thing
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Reconciled means matched to the payroll obligation — not just sent.
          </p>
        </div>

        {/* 4 Status Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {statusItems.map((item) => (
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

        {/* Team Banner Image */}
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-slate-200/60 aspect-[21/9] sm:aspect-[40/8]">
          <img
            src="/images/payroll-operation/bg10.png"
            alt="Operations team working in a modern office environment"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Floating Exception Card & Bottom Callout Container */}
        <div className="max-w-5xl mx-auto space-y-6 pt-2">
          {/* Exception Browser Mockup Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl overflow-hidden">
            {/* Header bar */}
            <div className="bg-[#F8FAFC] px-5 py-2.5 border-b border-slate-200/70 flex items-center gap-2 text-xs text-slate-400">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              </div>
              <span className="font-mono text-[11px] ml-2">
                Exception — PMT-EXC-0117
              </span>
            </div>

            {/* Content area */}
            <div className="p-5 sm:p-6 space-y-2">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
                  Provider rejection — invalid destination
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-600 border border-rose-200/60 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  Blocker
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Affected: 3 obligations · €4,120 · Owner: Payments Ops · Retry
                eligible after verification.
              </p>
            </div>
          </div>

          {/* Centered Callout Banner */}
          <div className="bg-[#E7EDFD] border-l-4 border-l-[#0A78C3] rounded-r-xl rounded-l-none p-4 text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm text-[#07243B] font-medium leading-relaxed">
              Duplicate risk is always verified before a retry — never a blind
              resend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
