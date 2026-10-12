"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

interface ProvenanceFeature {
  id: string;
  title: string;
  description: string;
}

const features: ProvenanceFeature[] = [
  {
    id: "worker",
    title: "Worker & employment",
    description: "Status, assignment, org context.",
  },
  {
    id: "compensation",
    title: "Compensation & earnings",
    description: "Base, variable, adjustments.",
  },
  {
    id: "time",
    title: "Time, leave & schedules",
    description: "Hours, absence, calendars.",
  },
  {
    id: "benefits",
    title: "Benefits & deductions",
    description: "Elections and plan changes.",
  },
  {
    id: "expenses",
    title: "Expenses & reimbursements",
    description: "Approved claims with dates.",
  },
  {
    id: "tax",
    title: "Tax & statutory inputs",
    description: "Jurisdiction-specific values.",
  },
  {
    id: "banking",
    title: "Banking / payment readiness",
    description: "Verified before disbursement.",
  },
  {
    id: "files",
    title: "Files / APIs / integrations",
    description: "Batch and real-time intake.",
  },
];

export default function SourceProvenanceSection() {
  const [activeFeature, setActiveFeature] = useState<string>("worker");

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
        {/* Left Column: Image with Floating Overlay Badges (5 cols) */}
        <div className="lg:col-span-6 max-h-120 relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 flex">
          <img
            src="/images/payroll-operation/1.png"
            alt="Person working on laptop showing payroll analytics"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3AA6] via-[#1B3B6866] to-[#0F172A26]" />

          {/* Top-Left Overlay Badge */}
          <div className="absolute top-5 left-5">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#07243B] shadow-sm border border-slate-100">
              <span>Source traced</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
          </div>

          {/* Bottom-Right Overlay Badge */}
          <div className="absolute bottom-5 right-5">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#07243B] shadow-sm border border-slate-100">
              <span>Effective date shown</span>
              <span className="w-2 h-2 rounded-full bg-blue-600" />
            </div>
          </div>
        </div>

        {/* Right Column: Title, Grid & Callout (7 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          {/* Header Block */}
          <div className="space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
              <span className="text-[#0A78C3] font-bold">—</span>
              <span>SOURCE & PROVENANCE</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
              Know what entered payroll — and where it came from
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
              Source, effective date, actor and state are traceable where
              applicable.
            </p>
          </div>

          {/* 2-Column Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {features.map((item) => {
              const isActive = activeFeature === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveFeature(item.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 bg-white border-slate-200/80 hover:border-slate-300`}
                >
                  <div className="mt-0.5 shrink-0 text-[#0A78C3]">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-[#07243B]">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Highlight Callout Box */}
          <div className="pt-2">
            <div className="bg-[#E7EDFD] border-l-4 border-l-[#0A78C3] rounded-r-xl p-4">
              <p className="text-xs text-[#07243B] font-medium leading-relaxed">
                Internal identifiers and sensitive production data are never
                exposed in the public UI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
