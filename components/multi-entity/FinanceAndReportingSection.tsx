"use client";

import React from "react";
import Image from "next/image";
import {
  Plus,
  Settings,
  Check,
  Database,
  Play,
  Target,
  Trash2,
} from "lucide-react";

export default function FinanceAndReportingSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Top Split Layout: 6 Cols / 6 Cols */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span className="text-[#0A8FD0] font-bold">|</span>
              <span>FINANCE & REPORTING</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
              Source-entity truth, plus a governed group view
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
              Entity payroll cost, journals, liabilities, payments and
              reconciliation are shown in source entity and currency alongside
              governed reporting-currency views and FX basis where applicable.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="px-4 py-1.5 bg-[#EBF3FB] text-[#07243B] text-xs font-semibold rounded-full border border-slate-200/80">
                Group
              </span>
              <span className="px-4 py-1.5 bg-[#EBF3FB] text-[#07243B] text-xs font-semibold rounded-full border border-slate-200/80">
                Region
              </span>
              <span className="px-4 py-1.5 bg-[#EBF3FB] text-[#07243B] text-xs font-semibold rounded-full border border-slate-200/80">
                Legal Entity
              </span>
              <span className="px-4 py-1.5 bg-[#EBF3FB] text-[#07243B] text-xs font-semibold rounded-full border border-slate-200/80">
                Pay Group
              </span>
            </div>
          </div>

          {/* Right Column (6 Cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full h-[300px] sm:h-[420px] rounded-3xl overflow-hidden">
              <Image
                src="/images/multi-entity/6.png"
                alt="Finance professionals analyzing payroll dashboard on modern screen"
                width={1020}
                height={636}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: Entity Lifecycle Timeline */}
        <div className="space-y-12 text-center pt-4">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-[#07243B]">
              Entity lifecycle
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              Acquisition, worker transfer, rename/restructure, merge and
              retirement are all governed events. Historical payroll identity is
              never rewritten when an entity changes.
            </p>
          </div>

          {/* Alternating Step Cards & Process Flow */}
          <div className="relative max-w-6xl mx-auto pt-6">
            {/* Connecting Dashed Line */}
            <div className="hidden lg:block absolute top-[61%] left-12 right-12 h-0.5 border-b-2 border-dashed border-slate-300 -z-0" />

            {/* 7 Horizontal Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-3 relative z-10 items-center">
              {/* Step 1: Add Entity */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs w-full min-h-[96px] flex flex-col justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#07243B] text-white flex items-center justify-center mx-auto mb-1">
                    <Plus className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#07243B]">
                    Add Entity
                  </span>
                </div>
                <div className="w-3 h-3 rounded-full bg-[#07243B] border-2 border-white shadow-xs" />
                <span className="text-[11px] text-slate-400 font-medium leading-tight px-1">
                  New legal entity registered.
                </span>
              </div>

              {/* Step 2: Configure */}
              <div className="flex flex-col items-center text-center space-y-3 lg:pt-16">
                <span className="text-[11px] text-slate-400 font-medium leading-tight px-1">
                  Structure, jurisdictions, pay groups defined.
                </span>
                <div className="w-3 h-3 rounded-full bg-[#07243B] border-2 border-white shadow-xs" />
                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs w-full min-h-[96px] flex flex-col justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#07243B] text-white flex items-center justify-center mx-auto mb-1">
                    <Settings className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#07243B]">
                    Configure
                  </span>
                </div>
              </div>

              {/* Step 3: Validate */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs w-full min-h-[96px] flex flex-col justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#07243B] text-white flex items-center justify-center mx-auto mb-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#07243B]">
                    Validate
                  </span>
                </div>
                <div className="w-3 h-3 rounded-full bg-[#07243B] border-2 border-white shadow-xs" />
                <span className="text-[11px] text-slate-400 font-medium leading-tight px-1">
                  Rules, mappings and readiness checked.
                </span>
              </div>

              {/* Step 4: Test / Parallel */}
              <div className="flex flex-col items-center text-center space-y-3 lg:pt-16">
                <span className="text-[11px] text-slate-400 font-medium leading-tight px-1">
                  Parallel run against existing process.
                </span>
                <div className="w-3 h-3 rounded-full bg-[#07243B] border-2 border-white shadow-xs" />
                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs w-full min-h-[96px] flex flex-col justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#07243B] text-white flex items-center justify-center mx-auto mb-1">
                    <Database className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#07243B]">
                    Test / Parallel
                  </span>
                </div>
              </div>

              {/* Step 5: Go Live */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs w-full min-h-[96px] flex flex-col justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#07243B] text-white flex items-center justify-center mx-auto mb-1">
                    <Play className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#07243B]">
                    Go Live
                  </span>
                </div>
                <div className="w-3 h-3 rounded-full bg-[#07243B] border-2 border-white shadow-xs" />
                <span className="text-[11px] text-slate-400 font-medium leading-tight px-1">
                  Production payroll begins.
                </span>
              </div>

              {/* Step 6: Govern */}
              <div className="flex flex-col items-center text-center space-y-3 lg:pt-16">
                <span className="text-[11px] text-slate-400 font-medium leading-tight px-1">
                  Ongoing monitoring, audit, review.
                </span>
                <div className="w-3 h-3 rounded-full bg-[#07243B] border-2 border-white shadow-xs" />
                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs w-full min-h-[96px] flex flex-col justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#07243B] text-white flex items-center justify-center mx-auto mb-1">
                    <Target className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#07243B]">
                    Govern
                  </span>
                </div>
              </div>

              {/* Step 7: Reorganize / Retire */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs w-full min-h-[96px] flex flex-col justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#0A8FD0] text-white flex items-center justify-center mx-auto mb-1">
                    <Trash2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#07243B]">
                    Reorganize / Retire
                  </span>
                </div>
                <div className="w-3 h-3 rounded-full bg-[#0A8FD0] border-2 border-white shadow-xs" />
                <span className="text-[11px] text-slate-400 font-medium leading-tight px-1">
                  Merge, restructure or retire — history preserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
