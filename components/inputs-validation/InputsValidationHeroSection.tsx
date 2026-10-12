"use client";

import React, { useState } from "react";

interface ExceptionRow {
  input: string;
  severity: "Blocker" | "Warning" | "Information";
  source: string;
}

const exceptionsData: ExceptionRow[] = [
  {
    input: "Missing effective date",
    severity: "Blocker",
    source: "HRIS",
  },
  {
    input: "Timesheet variance",
    severity: "Warning",
    source: "Time system",
  },
  {
    input: "New bank detail",
    severity: "Information",
    source: "Manual",
  },
];

export default function InputsValidationHeroSection() {
  const [activeTab, setActiveTab] = useState<
    "Deterministic rules" | "AI-synthetic"
  >("Deterministic rules");

  return (
    <section className="relative w-full overflow-hidden text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/payroll-operation/bg1.png"
          alt="Inputs and validation background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Blue Overlay Matching Design Tint */}
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#071C2EE0] via-[#0A3254BF] to-[#0A8FD066]" />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Text & CTA Block (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase font-mono">
            <span className="text-[#8FD0F2] font-bold">/</span>
            <span>INPUTS & VALIDATION</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight text-white leading-tight">
            Validate Payroll Inputs Before They Become Payroll Errors
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
            Bring payroll-impacting data together, check it in context, and
            resolve exceptions before calculation.
          </p>

          {/* Note Alert Card */}
          <div className="bg-[#E7EDFD] backdrop-blur-xs rounded-xl p-4 border border-[#0A78C3] text-[#0B1F3A] text-xs sm:text-sm">
            <span className="font-bold">Note: </span>
            <span className="text-slate-700">
              Validation reduces preventable risk — it doesn&apos;t guarantee
              error-free payroll.
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#demo"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] hover:bg-[#087BB5] text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Book a demo
            </a>

            <a
              href="#trial"
              className="px-6 py-3 rounded-xl bg-transparent border border-white/40 hover:border-white/80 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition-all backdrop-blur-xs cursor-pointer"
            >
              Start free trial
            </a>
          </div>
        </div>

        {/* Right Preview Card Component (6 cols) */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-3xl p-6 shadow-2xl text-[#0F172A] space-y-5 border border-slate-100">
            {/* Top Toggle Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2 bg-slate-100/70 p-1 rounded-full text-xs">
                <button
                  onClick={() => setActiveTab("Deterministic rules")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                    activeTab === "Deterministic rules"
                      ? "bg-white text-[#07243B] shadow-2xs"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <span>Deterministic rules</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </button>
                <button
                  onClick={() => setActiveTab("AI-synthetic")}
                  className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                    activeTab === "AI-synthetic"
                      ? "bg-white text-[#07243B] shadow-2xs font-bold"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  AI-synthetic
                </button>
              </div>
            </div>

            {/* Filter / Meta Pills Row */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-medium">
                  Period <strong className="text-[#07243B]">Aug 2026</strong>
                </span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-medium">
                  Entity <strong className="text-[#07243B]">All (4)</strong>
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Refreshed 2m ago
              </span>
            </div>

            {/* Metric Cards Row */}
            <div className="grid grid-cols-2 gap-3 max-w-60">
              <div className="bg-[#F6F8FB] rounded-[10px] p-4 space-y-1">
                <div className="text-2xl sm:text-[24px] font-bold text-[#07243B] font-mono">
                  1,482
                </div>
                <div className="text-[11px] text-slate-400 font-medium leading-tight">
                  Records ready
                </div>
              </div>

              <div className="bg-[#F6F8FB] rounded-[10px] p-4 space-y-1">
                <div className="text-2xl sm:text-[24px] font-bold text-[#07243B] font-mono">
                  6
                </div>
                <div className="text-[11px] text-slate-400 font-medium leading-tight">
                  Blockers
                </div>
              </div>
            </div>

            {/* Input Table Preview */}
            <div className="pt-2">
              {/* Table Header */}
              <div className="grid grid-cols-12 text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono pb-2 border-b border-slate-100">
                <span className="col-span-5">INPUT</span>
                <span className="col-span-4">SEVERITY</span>
                <span className="col-span-3">SOURCE</span>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-slate-100 text-xs">
                {exceptionsData.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 py-3 items-center"
                  >
                    <span className="col-span-5 font-bold text-[#07243B]">
                      {row.input}
                    </span>

                    <div className="col-span-4">
                      {row.severity === "Blocker" && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                          Blocker
                        </span>
                      )}
                      {row.severity === "Warning" && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FEF7E0] text-[#B06000]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B06000]" />
                          Warning
                        </span>
                      )}
                      {row.severity === "Information" && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-50 text-sky-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                          Information
                        </span>
                      )}
                    </div>

                    <span className="col-span-3 text-slate-400 font-medium">
                      {row.source}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
