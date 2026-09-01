"use client";

import React from "react";

interface TraceRow {
  component: string;
  amount: string;
  effectiveDate: string;
  ruleFamily: string;
  changedStatus: {
    label: string;
    type: "no" | "input" | "rule";
  };
}

const traceTableData: TraceRow[] = [
  {
    component: "Base salary",
    amount: "£4,200.00",
    effectiveDate: "Aug 01",
    ruleFamily: "Compensation",
    changedStatus: { label: "No", type: "no" },
  },
  {
    component: "Overtime premium",
    amount: "£620.00",
    effectiveDate: "Aug 18",
    ruleFamily: "Earnings",
    changedStatus: { label: "Input changed", type: "input" },
  },
  {
    component: "Income tax",
    amount: "£980.00",
    effectiveDate: "Aug 01",
    ruleFamily: "Statutory — UK",
    changedStatus: { label: "Rule updated", type: "rule" },
  },
];

export default function CalculationTraceSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
            <span className="text-[#0A78C3] font-bold">—</span>
            <span>CALCULATION TRACE</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            See how a result was built — and why it changed
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Every component links back to its source, rule and effective date.
          </p>
        </div>

        {/* Floating Trace Modal Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden max-w-5xl mx-auto">
          {/* Window / App Header Bar */}
          <div className="px-6 py-4 bg-[#F6F8FB] border-b border-slate-100 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E3E7EE]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#E3E7EE]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#E3E7EE]" />
            </div>
            <span className="text-xs font-mono text-slate-400 pl-2">
              Trace — E-10432 · Aug 2026
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Top Stat Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
              {/* Gross Earnings */}
              <div className="p-4 rounded-xl bg-[#F6F8FB] border border-slate-100 space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-[#07243B]">
                  £4,820
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Gross earnings
                </div>
              </div>

              {/* Employee Statutory */}
              <div className="p-4 rounded-xl bg-[#F6F8FB] border border-slate-100 space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-[#07243B]">
                  £1,240
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Employee statutory
                </div>
              </div>

              {/* Voluntary Deductions */}
              <div className="p-4 rounded-xl bg-[#F6F8FB] border border-slate-100 space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-[#07243B]">
                  £470
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Voluntary deductions
                </div>
              </div>

              {/* Net Pay */}
              <div className="p-4 rounded-xl bg-[#F6F8FB] border border-slate-100 space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-[#07243B]">
                  £3,110
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Net pay
                </div>
              </div>
            </div>

            {/* Component Trace Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th className="py-3 px-2">Component</th>
                    <th className="py-3 px-2">Amount</th>
                    <th className="py-3 px-2">Effective Date</th>
                    <th className="py-3 px-2">Rule Family</th>
                    <th className="py-3 px-2">Changed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {traceTableData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-4 px-2 font-bold text-[#07243B] text-xs sm:text-sm">
                        {row.component}
                      </td>
                      <td className="py-4 px-2 text-slate-600 font-medium">
                        {row.amount}
                      </td>
                      <td className="py-4 px-2 text-slate-500 font-medium">
                        {row.effectiveDate}
                      </td>
                      <td className="py-4 px-2 text-slate-500 font-medium">
                        {row.ruleFamily}
                      </td>
                      <td className="py-4 px-2">
                        {row.changedStatus.type === "no" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                            {row.changedStatus.label}
                          </span>
                        )}
                        {row.changedStatus.type === "input" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            {row.changedStatus.label}
                          </span>
                        )}
                        {row.changedStatus.type === "rule" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-[#0A78C3] border border-blue-200/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0A78C3]" />
                            {row.changedStatus.label}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer Reference Banner */}
            <div className="p-3.5 rounded-xl bg-slate-50 text-[11px] text-slate-400 font-mono flex flex-wrap items-center justify-between gap-2">
              <span>
                Run ref CALC-88213 · Config version v6.2 · Snapshot 09:40 UTC
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Callout Banner with Zero Left Radius */}
        <div className="max-w-3xl mx-auto pt-2">
          <div className="bg-[#E7EDFD] border-l-4 border-l-[#0A78C3] rounded-r-xl rounded-l-none p-4">
            <p className="text-xs sm:text-sm text-[#07243B] font-medium text-center leading-relaxed">
              Never shows bank accounts, tax IDs, national IDs or authentic
              employee records.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
