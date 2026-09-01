"use client";

import React from "react";
import { Check } from "lucide-react";

interface ComponentItem {
  id: string;
  title: string;
  description: string;
}

const componentItems: ComponentItem[] = [
  {
    id: "gross-earnings",
    title: "Gross earnings",
    description: "Regular, overtime, bonus, allowances.",
  },
  {
    id: "taxable-bases",
    title: "Taxable / contributory bases",
    description: "Thresholds, caps, exemptions.",
  },
  {
    id: "employee-statutory",
    title: "Employee statutory",
    description: "Taxes and mandatory withholdings.",
  },
  {
    id: "voluntary-court",
    title: "Voluntary / court-ordered",
    description: "Benefits, pension, garnishings.",
  },
  {
    id: "employer-liabilities",
    title: "Employer liabilities",
    description: "Employer taxes, contributions.",
  },
  {
    id: "net-pay",
    title: "Net pay",
    description: "Gross plus additions, less deductions.",
  },
  {
    id: "accumulators",
    title: "Accumulators",
    description: "Period, YTD and lifetime balances.",
  },
  {
    id: "downstream-outputs",
    title: "Downstream outputs",
    description: "Only where the capability is live.",
  },
];

export default function WhatGetsCalculatedSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Text Header & 2-Column Cards Grid (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Header Block */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
              <span className="text-[#0A78C3] font-bold">—</span>
              <span>WHAT GETS CALCULATED</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B] leading-tight">
              Every component, employee vs employer
            </h2>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Regular pay through accumulators — each with clear treatment.
            </p>
          </div>

          {/* 2-Column Grid of Checked Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {componentItems.map((item) => (
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

        {/* Right Column: Hero Image Container (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-xl border border-slate-200/60">
            <img
              src="/images/payroll-operation/6.png"
              alt="Payroll team analyzing dashboard during meeting"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
