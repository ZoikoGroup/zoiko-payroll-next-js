"use client";

import React, { useState } from "react";

export default function GlobalOperatingModelSection() {
  const [activeTab, setActiveTab] = useState<string>("Data");

  const tabs = ["Data", "Rules", "Operations", "Reporting"];

  const globalStandardizationPoints = [
    "Canonical models and versioning",
    "Provenance across every record",
    "Common workflow states",
    "Shared metrics and consolidated views",
  ];

  const localPreservationPoints = [
    "Local identifiers and codes",
    "Jurisdiction-specific rules",
    "Local calendars, cutoffs and filings",
    "Local currency and statutory context",
  ];

  const bottomPills = [
    "Global Payroll Overview",
    "Jurisdiction Directory",
    "Country / Territory Guides",
    "Partner-Supported Payroll",
    "Multi-Entity Payroll",
    "Global Implementation",
    "Global Reporting",
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>GLOBAL OPERATING MODEL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            Standardize where useful. Preserve local where it matters
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#0A8FD0] text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* 2 Comparison Cards (Dark Left, Light Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dark Card - Global Standardization */}
          <div className="bg-[#0F2B3E] rounded-3xl p-8 text-white space-y-6 shadow-md flex flex-col justify-between">
            <h3 className="text-base sm:text-lg font-bold">
              Global standardization
            </h3>
            <ul className="space-y-4">
              {globalStandardizationPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="text-xs sm:text-sm text-slate-300 font-medium"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Light Blue Card - Local Preservation */}
          <div className="bg-[#E3F2FD] rounded-3xl p-8 text-[#07243B] space-y-6 border border-blue-100/80 shadow-2xs flex flex-col justify-between">
            <h3 className="text-base sm:text-lg font-bold text-[#07243B]">
              Local preservation
            </h3>
            <ul className="space-y-4">
              {localPreservationPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="text-xs sm:text-sm text-slate-600 font-medium"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto pt-2">
          {bottomPills.map((pill, idx) => (
            <button
              key={idx}
              className="bg-white border border-slate-200/80 hover:border-[#0A8FD0] hover:text-[#0A8FD0] text-[#07243B] text-xs font-semibold px-4 py-2.5 rounded-full shadow-2xs transition-colors"
            >
              {pill}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
