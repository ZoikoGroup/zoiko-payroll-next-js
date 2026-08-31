"use client";

import React from "react";
import Image from "next/image";

interface SafeModeRow {
  whatYouAreSeeing: string;
  route: string;
}

const safeModeRows: SafeModeRow[] = [
  {
    whatYouAreSeeing: "Expansion to a new time system or population",
    route: "Fit validation",
  },
  {
    whatYouAreSeeing: "Failed/missing import or mapping issue",
    route: "Integration Support",
  },
  {
    whatYouAreSeeing: "Late or corrected time",
    route: "Support ownership",
  },
  {
    whatYouAreSeeing: "Security issue",
    route: "Secure support / security process",
  },
];

export default function CustomFitRequestSection() {
  return (
    <section className="w-full bg-[#EDF4FA] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/footer-integrations/26.png"
                alt="Two business colleagues discussing over a laptop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>CUSTOM FIT REQUEST</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#0F172A] leading-tight">
              A scoped request — never a promise of acceptance or timeline
            </h2>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
              Tell us your time system, region, time domains, source state and
              desired cadence. An integration specialist reviews fit before any
              implementation commitment.
            </p>

            {/* Callout Box with Left Blue Accent Line */}
            <div className="relative border-l-4 border-[#0A8FD0] bg-white rounded-xl p-6 shadow-xs">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <span className="font-bold text-[#0F172A]">Never submit:</span>{" "}
                employee timecards, PII screenshots, credentials, tokens, API
                keys, device/biometric data or payroll files through this form.
              </p>
            </div>

            {/* Primary Gradient CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:opacity-95 transition-opacity shadow-sm"
              >
                Submit custom fit request
              </button>
            </div>
          </div>
        </div>

        {/* Existing-customer Safe Mode Section */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-[#0F172A] text-center">
            Existing–customer safe mode
          </h3>

          {/* Mapping Table */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-[#E9F0F8] text-[#5B646B] font-bold text-[10px] uppercase tracking-wider border-b border-slate-200/60">
                    <th className="py-3.5 px-6">WHAT YOU'RE SEEING</th>
                    <th className="py-3.5 px-6">ROUTE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[#0F172A]">
                  {safeModeRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-4 px-6 text-slate-600 font-medium">
                        {row.whatYouAreSeeing}
                      </td>
                      <td className="py-4 px-6 font-semibold text-[#0A8FD0]">
                        {row.route}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Subtext Disclaimer */}
          <p className="text-[11px] text-slate-400 text-center">
            Approved fit context is persisted so sales, procurement, security
            and support never restart qualification.
          </p>
        </div>
      </div>
    </section>
  );
}
