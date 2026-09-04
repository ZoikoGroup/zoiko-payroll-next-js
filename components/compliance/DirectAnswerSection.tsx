"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";

const filterPills = [
  "Certification",
  "Attestation / examination",
  "Audit report",
  "Framework mapping",
  "Regulatory obligation",
  "Control",
  "Assurance evidence",
];

export default function DirectAnswerSection() {
  const [activePill, setActivePill] = useState(0);

  return (
    <div className="w-full bg-[#F9FAFB] text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto space-y-12 text-center">
        {/* Header Block */}
        <div className="space-y-4 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              DIRECT ANSWER
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            A certification is not the same as an examination report
          </h2>

          <p className="text-sm sm:text-base text-[#5B646B] max-w-2xl mx-auto font-medium leading-relaxed">
            A certification is issued by an accredited body against a defined
            standard. An attestation or examination (like a SOC report) is a
            professional opinion for a defined period. A framework mapping shows
            alignment, not certification. None of these are a substitute for
            jurisdictional payroll legal compliance.
          </p>
        </div>

        {/* Filter / Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {filterPills.map((pill, idx) => (
            <button
              key={idx}
              onClick={() => setActivePill(idx)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                activePill === idx
                  ? "bg-white text-slate-700 shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-xs"
              }`}
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Two Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Green Card: What assurance evidence demonstrates */}
          <div className="bg-[#E3EFE6] border border-emerald-200/80 rounded-[14px] p-6 sm:p-8 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 text-[#3F6B54] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <h3 className="text-sm font-extrabold text-[#3F6B54]">
                  What assurance evidence demonstrates
                </h3>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm font-medium text-[#0A3254]">
              <li className="flex items-start gap-2.5">
                <span>
                  Controls existed and operated for a defined, dated period
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span>
                  An independent party examined a specific, stated scope
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span>A named standard or framework was used as the basis</span>
              </li>
            </ul>
          </div>

          {/* Red/Pink Card: What it does not demonstrate */}
          <div className="bg-[#F5DEDC] border border-rose-200/80 rounded-[14px] p-6 sm:p-8 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 text-[#A14842] flex items-center justify-center shrink-0">
                  <X className="w-3 h-3 stroke-[3]" />
                </div>
                <h3 className="text-sm font-extrabold text-[#A14842]">
                  What it does not demonstrate
                </h3>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm font-medium text-[#0A3254]">
              <li className="flex items-start gap-2.5">
                <span>
                  Universal or permanent compliance in every jurisdiction
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span>
                  Coverage of services, regions or environments outside the
                  stated scope
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span>A legal guarantee of payroll statutory compliance</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
