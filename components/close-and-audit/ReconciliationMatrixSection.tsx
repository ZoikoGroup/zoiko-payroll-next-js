"use client";

import React from "react";

interface MatrixRow {
  checkId: string;
  checkSub: string;
  controlFamily: string;
  expectedVsActual: string;
  tolerance: string;
  status: "Passed" | "Reviewing";
}

const matrixData: MatrixRow[] = [
  {
    checkId: "RC-0142",
    checkSub: "Payments batch",
    controlFamily: "Payments",
    expectedVsActual: "£1,048,220 vs £1,048,220",
    tolerance: "±£0.00",
    status: "Passed",
  },
  {
    checkId: "RC-0158",
    checkSub: "Gross-to-net",
    controlFamily: "Gross-to-net",
    expectedVsActual: "Variance 0.02%",
    tolerance: "±0.05%",
    status: "Passed",
  },
  {
    checkId: "RC-0163",
    checkSub: "Statutory liability",
    controlFamily: "Statutory liabilities",
    expectedVsActual: "£142,880 vs £143,410",
    tolerance: "±£1,000",
    status: "Reviewing",
  },
  {
    checkId: "RC-0171",
    checkSub: "Headcount movement",
    controlFamily: "Population",
    expectedVsActual: "412 vs 412 workers",
    tolerance: "0 unexplained",
    status: "Passed",
  },
];

export default function ReconciliationMatrixSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>—</span>
            <span>RECONCILIATION MATRIX</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
            Structured control comparisons, not a &quot;review totals&quot; step
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Population, gross-to-net, source-to-payroll, payments, statutory
            liabilities, deductions, accounting and prior-period trend — each
            with its own expected-vs-actual comparison.
          </p>
        </div>

        {/* Card Window Container */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-lg overflow-hidden max-w-6xl mx-auto">
          {/* Window Bar Header */}
          <div className="bg-slate-50 px-6 py-3.5 border-b border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="ml-2 text-xs font-bold text-slate-600">
                Reconciliation Matrix — Aug 2026
              </span>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Filter Bar & Progress Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs">
                <div className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 font-medium">
                  Family <span className="font-bold text-slate-900">All</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 font-medium">
                  Status <span className="font-bold text-slate-900">All</span>
                </div>
              </div>
              <span className="text-xs font-medium text-slate-400">
                7 of 7 complete
              </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    <th className="pb-3 font-semibold">CHECK ID</th>
                    <th className="pb-3 font-semibold">CONTROL FAMILY</th>
                    <th className="pb-3 font-semibold">EXPECTED VS ACTUAL</th>
                    <th className="pb-3 font-semibold">TOLERANCE</th>
                    <th className="pb-3 font-semibold">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {matrixData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-4 pr-4">
                        <div className="font-bold text-[#07243B]">
                          {row.checkId}
                        </div>
                        <div className="text-[11px] text-slate-400 font-medium">
                          {row.checkSub}
                        </div>
                      </td>
                      <td className="py-4 pr-4 font-semibold text-slate-700">
                        {row.controlFamily}
                      </td>
                      <td className="py-4 pr-4 font-semibold text-slate-700">
                        {row.expectedVsActual}
                      </td>
                      <td className="py-4 pr-4 font-semibold text-slate-600">
                        {row.tolerance}
                      </td>
                      <td className="py-4">
                        {row.status === "Passed" ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/15 text-[#047857] font-semibold text-xs border border-[#10B981]/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                            <span>Passed</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B]/15 text-[#B45309] font-semibold text-xs border border-[#F59E0B]/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                            <span>Reviewing</span>
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom Callout Box (Square corners, left border accent) */}
        <div className="bg-[#E9F0F8] border-l-4 border-l-[#0A8FD0] p-5 shadow-2xs rounded-none max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            A reconciliation passes only when the defined population or total
            agrees within an explicit, versioned tolerance — with a recorded
            result.
          </p>
        </div>
      </div>
    </section>
  );
}
