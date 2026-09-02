"use client";

import React from "react";

interface ColumnData {
  title: string;
  dotColor: string;
  bgColor?: string;
  items: string[];
}

const columns: ColumnData[] = [
  {
    title: "Customer / Employer",
    dotColor: "bg-slate-400",
    bgColor: "bg-white",
    items: [
      "Maintain authoritative worker and employer data",
      "Confirm changes and exceptions",
      "Approve payroll and funding actions",
      "Provide required funds, authorities and credentials as contracted",
      "Review outcomes and own employer decisions",
    ],
  },
  {
    title: "Zoiko Payroll control plane",
    dotColor: "bg-[#0A8FD0]",
    bgColor: "bg-[#EFF6FF]",
    items: [
      "Ingest, map and validate configured payroll inputs",
      "Run readiness controls and exceptions",
      "Orchestrate approvals and state transitions",
      "Expose status, evidence and reconciliation workflow",
      "Normalize results and retain governed lineage",
    ],
  },
  {
    title: "Approved payroll partner",
    dotColor: "bg-[#00875A]",
    bgColor: "bg-white",
    items: [
      "Receive approved input package",
      "Apply local payroll processing steps in contracted scope",
      "Return calculation outputs and local artifacts",
      "Perform filings, payments or year-end services only where contracted",
      "Respond to local exceptions, rejections and authority events",
    ],
  },
];

export default function OperationModelSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>OPERATION MODEL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B] leading-tight">
            One control plane. Two explicit operators.
          </h2>

          <p className="text-xs sm:text-[15px] max-w-xl text-slate-500 font-medium leading-relaxed">
            Zoiko Payroll coordinates intake, validation, approvals, status,
            reporting and evidence — while the contracted partner performs the
            defined local service.
          </p>
        </div>

        {/* 3-Column Operation Model Table Container */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-3">
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`flex flex-col border-b md:border-b-0 md:border-r border-slate-200/70 last:border-b-0 md:last:border-r-0 ${
                col.bgColor || "bg-white"
              }`}
            >
              {/* Column Header */}
              <div className="p-6 sm:p-7 border-b border-slate-200/60 flex items-center gap-2.5">
                <span
                  className={`w-2.5 h-2.5 rounded-full shrink-0 ${col.dotColor}`}
                />
                <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
                  {col.title}
                </h3>
              </div>

              {/* Column Items */}
              <div className="p-6 sm:p-7 flex-1 space-y-7">
                {col.items.map((item, itemIdx) => (
                  <p
                    key={itemIdx}
                    className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
