"use client";

import React from "react";
import Image from "next/image";

const categoryPills: string[] = [
  "Payroll execution",
  "Liabilities",
  "Payments",
  "Accounting",
  "Controls",
  "Statutory",
  "Integration",
  "Global oversight",
];

export default function ReportCatalogReportingSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Pills */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3EA3E0] uppercase font-mono">
                <span className="text-[#3EA3E0] font-bold">/</span>
                <span>REPORT CATALOG & CONFIGURABLE REPORTING</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#07243B] leading-tight">
                Governed report definitions — never open-ended query access
              </h2>

              {/* Subtitle / Description */}
              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                The report builder starts from governed report definitions and
                never permits access outside your authorization scope. Sensitive
                fields — bank details, tax IDs, national IDs and full addresses
                — are excluded by default.
              </p>
            </div>

            {/* Category Pills Grid */}
            <div className="flex flex-wrap items-center gap-2.5 max-w-120 pt-2">
              {categoryPills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs hover:bg-slate-50 transition-colors cursor-default"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden">
              <Image
                src="/images/payroll-operation/18.png"
                alt="Governed report definitions team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Highlight Callout Container with Blue Accent Border */}
        <div className="bg-white rounded-xl border border-slate-200 border-l-4 border-l-[#3EA3E0] p-6 shadow-2xs">
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Supported dimensions may include entity, pay group, jurisdiction,
            worker category, period, run type, earning/deduction code, cost
            center, currency and status. Measures carry definitions and
            calculation provenance — local and normalized currency totals are
            always clearly labeled. Saved configurations are versioned, owned
            and attributable. Large reports preview counts where practical and
            use asynchronous generation with visible progress.
          </p>
        </div>
      </div>
    </section>
  );
}
