"use client";

import React from "react";
import { Check } from "lucide-react";

interface OrchestratedItem {
  id: string;
  title: string;
  description: string;
}

const orchestratedItems: OrchestratedItem[] = [
  {
    id: "worker-net-pay",
    title: "Worker net pay",
    description: "Amount, currency, date, destination.",
  },
  {
    id: "statutory-obligations",
    title: "Statutory obligations",
    description: "Jurisdiction refs. where supported.",
  },
  {
    id: "benefits-garnishments",
    title: "Benefits & garnishments",
    description: "Only where the service supports them.",
  },
  {
    id: "funding",
    title: "Funding",
    description: "Aggregated by entity, currency, date.",
  },
  {
    id: "routing",
    title: "Routing",
    description: "Approved live channels only.",
  },
  {
    id: "bank-ready-outputs",
    title: "Bank-ready outputs",
    description: "Validated files with audit evidence.",
  },
];

export default function WhatGetsOrchestratedSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Team Image Container (5 cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-xl border border-slate-200/60">
              <img
                src="/images/payroll-operation/bg7.png"
                alt="Corporate team holding a strategic discussion around a boardroom table"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Content Block & 2-Column Grid of Checked Cards (7 cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Header Block */}
            <div className="space-y-3">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
                <span className="text-[#0A78C3] font-bold">—</span>
                <span>WHAT GETS ORCHESTRATED</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
                Every obligation type, coordinated on its own terms
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-500 font-medium">
                Only approved live channels — never an invented rail or
                provider.
              </p>
            </div>

            {/* 2-Column Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {orchestratedItems.map((item) => (
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
        </div>
      </div>
    </section>
  );
}
