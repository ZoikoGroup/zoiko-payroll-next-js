"use client";

import React from "react";
import { Check } from "lucide-react";

interface FootprintOption {
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
}

const footprintData: FootprintOption[] = [
  {
    title: "Single-jurisdiction payroll",
    description: "Focused operations for one primary jurisdiction.",
    features: [
      "Local configuration and payroll controls",
      "Employee records built around local rules",
      "Reports scoped to your jurisdiction",
      "Integrations where supported",
    ],
    ctaLabel: "Explore Single-Jurisdiction Payroll",
  },
  {
    title: "Multi-jurisdiction payroll",
    description:
      "Coordinate payroll across countries without losing local context.",
    features: [
      "Standardized governance across jurisdictions",
      "Jurisdiction-specific rules and calendars preserved",
      "Local currencies and outputs stay authoritative",
      "Clear local responsibilities and ownership",
    ],
    ctaLabel: "Explore Multi-Jurisdiction Payroll",
  },
];

export default function ByPayrollFootprintSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>BY PAYROLL FOOTPRINT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            Start with where payroll operates.
          </h2>
        </div>

        {/* 2 Split Cards (6 Cols / 6 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {footprintData.map((item, idx) => (
            <div
              key={idx}
              className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#07243B]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Feature List */}
                <ul className="space-y-3 pt-2">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#0A8FD0] shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-600 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="pt-4">
                <button className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-[#07243B] font-bold text-xs hover:border-slate-300 hover:bg-slate-50 transition-colors">
                  {item.ctaLabel}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <p className="text-center text-[11px] sm:text-xs text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
          Multi-jurisdiction coverage does not mean every country is natively
          processed by Zoiko Payroll — detail pages distinguish native,
          integrated, assisted and partner-supported coverage.
        </p>
      </div>
    </section>
  );
}
