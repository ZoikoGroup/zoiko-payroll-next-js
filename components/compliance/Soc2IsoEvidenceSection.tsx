"use client";

import React, { useState } from "react";

export default function Soc2IsoEvidenceSection() {
  const [activePill, setActivePill] = useState(0);

  const pills = [
    { label: "Current", bg: "bg-[#E3EFE6]", text: "text-[#3F6B54]" },
    { label: "Surveillance", bg: "bg-[#E1EEF9]", text: "text-[#155A8A]" },
    { label: "Renewal", bg: "bg-[#F3E9CC]", text: "text-[#8C6D2F]" },
    { label: "Expired", bg: "bg-[#E9F0F8]", text: "text-[#8592A0]" },
    { label: "Superseded", bg: "bg-[#E9F0F8]", text: "text-[#8592A0]" },
  ];

  return (
    <div className="w-full bg-[#F9FAFB] text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto space-y-12">
        {/* Top Split: Hero Image & Text Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Image */}
          <div className="lg:col-span-6">
            <div className="bg-white p-3 rounded-3xl">
              <img
                src="/images/compliance/3.png"
                alt="SOC 2 & ISO Certification Evidence Meeting"
                className="w-full h-auto rounded-2xl object-cover aspect-[16/11]"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
                <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                  /
                </span>
                SOC 2 & ISO CERTIFICATION EVIDENCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-[32px] lg:text-[32px] font-extrabold text-[#07243B] tracking-tight leading-tight">
              A report is not a certification. We never blur the two
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              SOC 2 is an examination against Trust Services Criteria actually
              in scope <span className="text-slate-400">—</span> never described
              as &quot;SOC 2 certified.&quot; ISO cards show the current
              standard edition only once verified.
            </p>
          </div>
        </div>

        {/* Two Certification/Report Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card: SOC 2 Type II report */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-extrabold text-[#07243B]">
                  SOC 2 Type II report
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#E3EFE6] text-[#3F6B54] text-[11px] font-bold">
                  Current
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium pb-2 border-b border-slate-100">
                Examination <span className="text-slate-300">—</span> not a
                certification
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-slate-400 font-medium">
                  Trust Services Criteria
                </span>
                <span className="font-extrabold text-[#07243B]">
                  In-scope only
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium">
                  Report period
                </span>
                <span className="font-extrabold text-[#07243B]">
                  Illustrative 12 months
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button className="px-5 py-2.5 bg-white hover:bg-slate-50 text-[#07243B] border border-slate-200 text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer">
                Request report
              </button>
            </div>
          </div>

          {/* Right Card: ISO 27001 certificate */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-extrabold text-[#07243B]">
                  ISO 27001 certificate
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#E3EFE6] text-[#3F6B54] text-[11px] font-bold">
                  Current
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium pb-2 border-b border-slate-100">
                Certification
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-slate-400 font-medium">
                  Certified entity
                </span>
                <span className="font-extrabold text-[#07243B]">
                  Per certificate
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium">
                  Certification body
                </span>
                <span className="font-extrabold text-[#07243B]">
                  Where publishable
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button className="px-5 py-2.5 bg-white hover:bg-slate-50 text-[#07243B] border border-slate-200 text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer">
                View certificate details
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Filter Pills with custom styling */}
        <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
          <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
            /
          </span>
          {pills.map((pill, idx) => (
            <button
              key={idx}
              onClick={() => setActivePill(idx)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${pill.bg} ${pill.text} ${
                activePill === idx
                  ? "scale-105"
                  : "opacity-90 hover:opacity-100"
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
