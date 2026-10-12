"use client";

import React from "react";

interface MatrixRow {
  domain: string;
  customer: string;
  zoiko: string;
  partner: string;
}

const matrixData: MatrixRow[] = [
  {
    domain: "Employer registrations",
    customer: "Provide legal-entity facts; approve registrations",
    zoiko: "Track prerequisites and status where configured",
    partner: "Perform or support registration only if contracted",
  },
  {
    domain: "Payroll inputs",
    customer: "Approve authoritative data and changes",
    zoiko: "Ingest, map, validate and package inputs",
    partner: "Consume agreed input schema and flag local exceptions",
  },
  {
    domain: "Gross-to-net calculation",
    customer: "Review and approve outcomes",
    zoiko:
      "Orchestrate results and controls; calculate only where explicitly native",
    partner: "Calculate using partner or local engine when contracted",
  },
  {
    domain: "Statutory filings",
    customer: "Provide signatures and authorizations where required",
    zoiko: "Track deadlines, status and evidence where integrated",
    partner: "Prepare and submit filings when contracted and legally permitted",
  },
  {
    domain: "Employee payments",
    customer: "Fund and authorize per agreed flow",
    zoiko: "Coordinate approvals and status where configured",
    partner: "Execute or support payment only where contracted",
  },
  {
    domain: "Authority payments",
    customer: "Provide funding and authorization as required",
    zoiko: "Track obligation and status where configured",
    partner: "Execute or support remittance only where contracted",
  },
  {
    domain: "Payroll reports",
    customer: "Consume and approve",
    zoiko: "Normalize, consolidate and retain supported artifacts",
    partner: "Produce local source reports and results",
  },
  {
    domain: "Corrections",
    customer: "Authorize business correction",
    zoiko: "Govern correction request and lineage",
    partner: "Process local recalculation or correction in scope",
  },
  {
    domain: "Support",
    customer: "Raise and respond to cases",
    zoiko: "Own customer-facing orchestration and routing as contracted",
    partner: "Resolve local processing issues within assigned scope",
  },
];

export default function ResponsibilityMatrixTableSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>RESPONSIBILITY MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B] leading-tight">
            Who does what — by service, not by assumption.
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            This is the default operating pattern. Every implementation
            generates its exact responsibility schedule from the signed service
            scope.
          </p>
        </div>

        {/* Matrix Table Container */}
        <div className="bg-white rounded-xl border border-slate-200/80 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[768px]">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#0B2135] text-white text-xs font-bold tracking-wide">
                  <th className="py-4 px-6 w-[20%]">Service domain</th>
                  <th className="py-4 px-6 w-[26%]">Customer / Employer</th>
                  <th className="py-4 px-6 w-[27%]">Zoiko Payroll</th>
                  <th className="py-4 px-6 w-[27%]">Approved partner</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {matrixData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    {/* Domain Column */}
                    <td className="py-4 px-6 font-bold text-[#07243B] align-top">
                      {row.domain}
                    </td>

                    {/* Customer Column */}
                    <td className="py-4 px-6 text-slate-600 font-medium leading-relaxed align-top">
                      {row.customer}
                    </td>

                    {/* Zoiko Payroll Column */}
                    <td className="py-4 px-6 text-slate-600 font-medium leading-relaxed align-top">
                      {row.zoiko}
                    </td>

                    {/* Approved Partner Column */}
                    <td className="py-4 px-6 text-slate-600 font-medium leading-relaxed align-top">
                      {row.partner}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
