"use client";

import React from "react";
import { Check } from "lucide-react";

interface RoutingCard {
  id: string;
  title: string;
  description: string;
}

const routingItems: RoutingCard[] = [
  {
    id: "routing-dimensions",
    title: "Routing dimensions",
    description: "Type, rail, provider, cutoff, calendar.",
  },
  {
    id: "currency-model",
    title: "Currency model",
    description: "Obligation, funding and payout currency.",
  },
  {
    id: "fx-transparency",
    title: "FX transparency",
    description: 'Source, quote time, fee — never "best rate."',
  },
  {
    id: "fail-closed",
    title: "Fail closed",
    description: "Unsupported corridor blocks, doesn't guess.",
  },
];

export default function RoutingCurrenciesFxSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Team Image Container (5 cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-xl border border-slate-200/60">
              <img
                src="/images/payroll-operation/bg9.png"
                alt="Business colleagues gathered around a laptop in a modern glass office space"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Header Block, 2x2 Grid, and Bottom Callout (7 cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Header Block */}
            <div className="space-y-3">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
                <span className="text-[#0A78C3] font-bold">—</span>
                <span>ROUTING, CURRENCIES & FX</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
                Choose the supported path without losing control
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-500 font-medium">
                Provider choice stays configuration-driven, replaceable and
                auditable.
              </p>
            </div>

            {/* 2-Column Grid of Checked Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {routingItems.map((item) => (
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

            {/* Bottom Callout Box */}
            <div className="pt-1">
              <div className="bg-[#E7EDFD] border-l-4 border-l-[#0A78C3] rounded-r-xl rounded-l-none p-4">
                <p className="text-xs sm:text-sm text-[#07243B] font-medium leading-relaxed">
                  Same obligation and release version never creates multiple
                  live instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
