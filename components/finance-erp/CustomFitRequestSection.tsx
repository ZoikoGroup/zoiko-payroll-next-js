"use client";

import React from "react";
import Image from "next/image";

interface SafeModeRow {
  whatYouAreSeeing: string;
  route: string;
}

const safeModeData: SafeModeRow[] = [
  {
    whatYouAreSeeing: "New ERP or expanded scope",
    route: "Fit validation",
  },
  {
    whatYouAreSeeing:
      "Posting failure / target rejection / reconciliation variance / mapping issue",
    route: "Integration Support",
  },
  {
    whatYouAreSeeing: "Security concern",
    route: "Secure support / security process",
  },
];

export default function CustomFitRequestSection() {
  return (
    <section className="w-full bg-[#F4F8FC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Top Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/footer-integrations/15.png"
                alt="Integration specialists reviewing system specifications"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label: #0A8FD0 */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>CUSTOM FIT REQUEST</span>
            </div>

            {/* Title: 36px */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight leading-snug text-[#0F172A]">
              A scoped request — never a promise of acceptance or timeline
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
              Tell us your finance/ERP system, entities and desired accounting
              outcome. An integration specialist reviews fit before any
              implementation commitment.
            </p>

            {/* Callout Box with Left Blue Line Accent */}
            <div className="relative border-l-4 border-[#0A8FD0] bg-white rounded-xl p-6 shadow-xs">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <span className="font-bold text-[#0F172A]">Never submit:</span>{" "}
                credentials, bank information, payroll files, GL extracts,
                employee data or secrets through this form.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Existing-customer safe mode */}
        <div className="space-y-6 pt-4">
          <h3 className="text-sm font-bold text-center text-[#0F172A]">
            Existing-customer safe mode
          </h3>

          {/* Table Container */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#E9F0F8] text-[#5B646B] font-bold text-[10px] uppercase tracking-wider border-b border-slate-200/60">
                    <th className="py-3.5 px-8 w-2/3">WHAT YOU'RE SEEING</th>
                    <th className="py-3.5 px-8 w-1/3">ROUTE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[#0F172A]">
                  {safeModeData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-4 px-8 text-slate-600 font-medium">
                        {row.whatYouAreSeeing}
                      </td>
                      <td className="py-4 px-8 font-semibold text-[#0A8FD0] hover:underline cursor-pointer">
                        {row.route}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
