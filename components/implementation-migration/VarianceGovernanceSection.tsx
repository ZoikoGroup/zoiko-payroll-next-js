"use client";

import React from "react";

// Filter Pills Data
const DOMAIN_FILTERS = [
  "Configuration",
  "Calculation",
  "Employee / record",
  "Permissions",
  "Integrations",
  "Documents",
  "Reporting",
  "Operational workflow",
];

// Table Row Data
const VARIANCE_ROWS = [
  {
    metric: "Gross pay",
    source: "€412,880.00",
    target: "€412,880.00",
    delta: "0.00",
    deltaClass: "text-[#0A1928] font-bold",
    reason: "—",
    owner: "—",
    decision: "Matched",
    decisionClass: "text-[#137333] font-medium",
  },
  {
    metric: "Tax withheld",
    source: "€98,220.40",
    target: "€98,144.10",
    delta: "−€76.30",
    deltaClass: "text-[#0A1928] font-bold",
    reason: "Rounding rule difference",
    owner: "M. Weber",
    decision: "Accepted (tolerance)",
    decisionClass: "text-[#0A1928] font-medium",
  },
  {
    metric: "Employer contributions",
    source: "€54,010.00",
    target: "€55,120.00",
    delta: "+€1,110.00",
    deltaClass: "text-[#0A1928] font-bold",
    reason: "Rate table version mismatch",
    owner: "R. Tanaka",
    decision: "Under review",
    decisionClass: "text-[#B06000] font-medium",
  },
];

export default function VarianceGovernanceSection() {
  return (
    <section className="w-full bg-[#E9F0F8] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-[12.5px] font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>Validation + Parallel Run / Variance Governance</span>
          </div>
          <h2 className="text-3xl md:text-[36px] font-bold text-[#0A1928] leading-tight">
            Made explainable, never a hidden score
          </h2>
          <p className="text-base sm:text-lg max-w-4xl mx-auto text-[#5C6E7E] leading-relaxed">
            Validation is separated by domain. A parallel run compares explicit
            source and target scope, metrics and periods against approved
            tolerances &mdash; every variance is recorded, not smoothed over.
          </p>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {DOMAIN_FILTERS.map((filter, index) => (
            <button
              key={index}
              className="px-4 py-1.5 rounded-full bg-[#E1EEF9] text-[#155A8A] text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Variance Comparison Table Container */}
        <div className="bg-white border border-[#E1E8ED] rounded-2xl overflow-hidden shadow-sm">
          {/* Custom Dual System Header */}
          <div className="grid grid-cols-12 text-xs sm:text-sm font-bold border-b border-[#E1E8ED]">
            <div className="col-span-6 bg-[#E9F0F8] p-4 text-[#0A3254] tracking-wider uppercase">
              SOURCE &mdash; current payroll system
            </div>
            <div className="col-span-6 bg-[#0A2E4B] p-4 text-white tracking-wider uppercase">
              TARGET &mdash; Zoiko Payroll
            </div>
          </div>

          {/* Table Data Structure */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[750px]">
              <thead>
                <tr className="border-b border-[#E1E8ED] bg-white text-[11px] font-bold tracking-wider text-[#5C6E7E] uppercase">
                  <th className="py-3 px-5">Metric</th>
                  <th className="py-3 px-5">Source</th>
                  <th className="py-3 px-5">Target</th>
                  <th className="py-3 px-5">Delta</th>
                  <th className="py-3 px-5">Reason</th>
                  <th className="py-3 px-5">Owner</th>
                  <th className="py-3 px-5">Decision</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E1E8ED]">
                {VARIANCE_ROWS.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#F8FAFC] transition-colors"
                  >
                    <td className="py-4 px-5 font-bold text-[#0A1928]">
                      {row.metric}
                    </td>
                    <td className="py-4 px-5 text-[#5C6E7E]">{row.source}</td>
                    <td className="py-4 px-5 text-[#5C6E7E]">{row.target}</td>
                    <td className={`py-4 px-5 ${row.deltaClass}`}>
                      {row.delta}
                    </td>
                    <td className="py-4 px-5 text-[#5C6E7E]">{row.reason}</td>
                    <td className="py-4 px-5 text-[#0A1928]">{row.owner}</td>
                    <td className={`py-4 px-5 ${row.decisionClass}`}>
                      {row.decision}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote Notice */}
        <div className="text-xs text-[#5C6E7E] text-left pt-1">
          A parallel run supports implementation validation &mdash; it is not
          legal or compliance certification.
        </div>
      </div>
    </section>
  );
}
