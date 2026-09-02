"use client";

import React, { useState } from "react";

export default function SolutionNavigatorSection() {
  const [q1, setQ1] = useState<string>("Multiple jurisdictions");
  const [q2, setQ2] = useState<string>("International group");
  const [q3, setQ3] = useState<string>("Finance visibility");

  const q1Options = [
    "One jurisdiction",
    "Multiple jurisdictions",
    "Not sure / planning expansion",
  ];

  const q2Options = [
    "Growing",
    "Mid-market",
    "International group",
    "Enterprise",
    "Multiple legal entities",
  ];

  const q3Options = [
    "Run payroll",
    "Standardize controls",
    "Finance visibility",
    "HR/people coordination",
    "Global expansion",
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>SOLUTION NAVIGATOR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            Three questions. A recommended path — not a diagnosis
          </h2>
        </div>

        {/* Questions Cards Container */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* Question 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#07243B] text-white text-xs font-bold flex items-center justify-center shrink-0">
                1
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
                Where do you run payroll?
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5 pt-1">
              {q1Options.map((option) => {
                const isSelected = q1 === option;
                return (
                  <button
                    key={option}
                    onClick={() => setQ1(option)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      isSelected
                        ? "bg-[#D9EFFC] border-[#0A8FD0] text-[#07243B]"
                        : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#07243B] text-white text-xs font-bold flex items-center justify-center shrink-0">
                2
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
                Which best describes your organization?
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5 pt-1">
              {q2Options.map((option) => {
                const isSelected = q2 === option;
                return (
                  <button
                    key={option}
                    onClick={() => setQ2(option)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      isSelected
                        ? "bg-[#D9EFFC] border-[#0A8FD0] text-[#07243B]"
                        : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#07243B] text-white text-xs font-bold flex items-center justify-center shrink-0">
                3
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
                What matters most right now?
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5 pt-1">
              {q3Options.map((option) => {
                const isSelected = q3 === option;
                return (
                  <button
                    key={option}
                    onClick={() => setQ3(option)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      isSelected
                        ? "bg-[#D9EFFC] border-[#0A8FD0] text-[#07243B]"
                        : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Recommended Paths Dark Banner */}
        <div className="bg-[#0A2337] rounded-2xl p-6 sm:p-10 text-white space-y-6 max-w-4xl mx-auto shadow-md">
          {/* Tag */}
          <div className="flex items-center gap-2 text-xs tracking-[1px] text-[#38BDF8] uppercase font-mono">
            <span>/</span>
            <span>RECOMMENDED PATHS FOR YOU</span>
          </div>

          {/* Result Block 1 */}
          <div className="space-y-1.5">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Multi-jurisdiction / International
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              Best fit when you coordinate payroll across countries and need
              consolidated finance visibility alongside local context.
            </p>
          </div>

          {/* Result Block 2 */}
          <div className="space-y-1.5">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Finance
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              Best fit when payroll cash, liabilities and accounting evidence
              are your primary concern.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button className="w-full sm:w-auto px-6 py-2.5 bg-[#8BD2F8] hover:bg-[#78C9F6] text-[#07243B] text-xs font-bold rounded-lg transition-colors">
              View recommended solution
            </button>
            <button className="w-full sm:w-auto px-6 py-2.5 bg-transparent border border-slate-500 text-white text-xs font-semibold rounded-lg hover:bg-white/5 transition-colors">
              Compare solution paths
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
