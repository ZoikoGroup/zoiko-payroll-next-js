"use client";

import React from "react";

const sourceSystemNodes = [{ label: "HRIS / HCM" }, { label: "Time" }];

const downstreamNodes = [
  { label: "Finance" },
  { label: "Identity" },
  { label: "Payments" },
];

export default function DataIntegrationsSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Container */}
        <div className="space-y-3 text-center mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              DATA, INTEGRATIONS, TIMING & PAYMENTS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            Sources flow in. Timing and cutoffs govern when
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            No guarantees are made here about specific banking, provider
            behavior or payment capability — verify current integration
            authority for exact scope.
          </p>
        </div>

        {/* Integration Architecture Flow Diagram */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-4xl mx-auto pt-4">
          {/* Left Block: Inbound Sources */}
          <div className="flex flex-col sm:flex-row gap-3">
            {sourceSystemNodes.map((node, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl px-6 py-4 w-32 sm:w-36 text-center shadow-2xs flex items-center justify-center"
              >
                <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                  {node.label}
                </span>
              </div>
            ))}
          </div>

          {/* Center Core Node: Payroll Cycle Hub */}
          <div className="bg-[#0B253C] text-white rounded-2xl p-6 sm:p-7 w-52 text-center shadow-md space-y-2.5">
            <span className="block text-base sm:text-lg font-extrabold leading-tight">
              Payroll Cycle
            </span>
            <span className="block text-[11px] font-semibold text-[#9FC7E3">
              Cutoff & timing rail
            </span>
          </div>

          {/* Right Block: Downstream Outbound Systems */}
          <div className="flex flex-wrap sm:flex-col gap-3 justify-center">
            <div className="flex gap-3">
              {downstreamNodes.slice(0, 2).map((node, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl px-6 py-4 w-32 sm:w-36 text-center shadow-2xs flex items-center justify-center"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                    {node.label}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <div className="bg-white border border-slate-200/80 rounded-2xl px-6 py-4 w-32 sm:w-36 text-center shadow-2xs flex items-center justify-center">
                <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                  {downstreamNodes[2].label}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Footer Metadata Legend */}
        <p className="text-center text-[11px] text-slate-400 font-medium pt-2">
          States shown per source: source identified · mapping required · timing
          dependency · local/provider dependency.
        </p>
      </div>
    </section>
  );
}
