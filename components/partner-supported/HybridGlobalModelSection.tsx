"use client";

import React from "react";
import Image from "next/image";

interface ModelRow {
  deliveryModel: string;
  typicalOperator: string;
  zoikoRole: string;
  publicLabel: string;
}

const portfolioData: ModelRow[] = [
  {
    deliveryModel: "Native Zoiko Payroll",
    typicalOperator: "Zoiko payroll engine within approved scope",
    zoikoRole: "Calculation and/or workflow according to product scope",
    publicLabel: "Zoiko Payroll",
  },
  {
    deliveryModel: "Connected Payroll",
    typicalOperator: "Customer-selected external system or provider",
    zoikoRole: "Integration, data exchange, status and reporting",
    publicLabel: "Connected Payroll",
  },
  {
    deliveryModel: "Partner-Supported Payroll",
    typicalOperator: "Approved partner under the Zoiko delivery model",
    zoikoRole: "Orchestration, governance and contracted coordination",
    publicLabel: "Partner-Supported",
  },
  {
    deliveryModel: "Customer-managed local payroll",
    typicalOperator: "Customer or local team outside managed service",
    zoikoRole: "Optional data or reporting connection only",
    publicLabel: "Customer-managed",
  },
];

export default function HybridGlobalModelSection() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden bg-[#0A192F]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/partner-supported/bg1.png"
          alt="Hybrid global model background"
          fill
          className="object-cover object-center opacity-30 mix-blend-overlay"
          priority
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071C2EE0] via-[#0A3254BF] to-[#0A8FD066] backdrop-blur-xs" />
        
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#38BDF8] uppercase font-mono">
            <span>/</span>
            <span>HYBRID GLOBAL MODEL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
            Native, connected and partner-supported — one portfolio view.
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
            Combine delivery models across countries and entities without losing
            a common view. Partner-supported is an operational distinction,
            never a quality ranking.
          </p>
        </div>

        {/* Portfolio Table Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden text-[#0F172A]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[768px]">
              {/* Table Header */}
              <thead>
                <tr className="border-b border-slate-200/80 text-[11px] font-bold tracking-wider text-slate-400 uppercase font-mono">
                  <th className="py-4 px-6 w-[25%]">DELIVERY MODEL</th>
                  <th className="py-4 px-6 w-[28%]">TYPICAL OPERATOR</th>
                  <th className="py-4 px-6 w-[27%]">ZOIKO PAYROLL ROLE</th>
                  <th className="py-4 px-6 w-[20%] text-left">PUBLIC LABEL</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {portfolioData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50/70 transition-colors"
                  >
                    {/* Delivery Model */}
                    <td className="py-5 px-6 font-bold text-[#07243B] align-middle">
                      {row.deliveryModel}
                    </td>

                    {/* Typical Operator */}
                    <td className="py-5 px-6 text-slate-600 font-medium leading-relaxed align-middle">
                      {row.typicalOperator}
                    </td>

                    {/* Zoiko Payroll Role */}
                    <td className="py-5 px-6 text-slate-600 font-medium leading-relaxed align-middle">
                      {row.zoikoRole}
                    </td>

                    {/* Public Label Badge */}
                    <td className="py-5 px-6 align-middle">
                      <span className="inline-block px-3 py-1.5 rounded-lg bg-[#EFF6FF] text-[#1D74A2] text-xs font-bold border border-[#BFDBFE]/50 shadow-2xs">
                        {row.publicLabel}
                      </span>
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
