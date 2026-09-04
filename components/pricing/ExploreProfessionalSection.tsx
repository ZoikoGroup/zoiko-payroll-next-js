"use client";

import React from "react";

interface EvaluationFeature {
  title: string;
  description: string;
}

const evaluationFeatures: EvaluationFeature[] = [
  {
    title: "30 DAYS",
    description: "Controlled evaluation window",
  },
  {
    title: "NO CARD BY DEFAULT",
    description: "No payment method required",
  },
  {
    title: "NO AUTO-CONVERSION",
    description: "You choose the paid plan",
  },
  {
    title: "SAFE SANDBOX",
    description: "Simulation only; no live filings/payments",
  },
];

export default function ExploreProfessionalSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-6xl mx-auto">
        {/* Main Card Container */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          {/* Header Block */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-[26px] font-extrabold text-[#07243B] tracking-tight">
              Explore Professional for 30 days.
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              Evaluate workflows before committing to production.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {evaluationFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white text-center border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-1.5"
              >
                <span className="text-[11px] font-extrabold tracking-wider text-[#0A78C3] block">
                  {feature.title}
                </span>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#2E9BDD] via-[#0F5688] to-[#0A3D63] hover:bg-[#051a2c] text-white text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer">
              Start 30-Day Evaluation
            </button>
            <button className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#07243B] border border-slate-200 text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
