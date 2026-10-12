"use client";

import React from "react";
import Image from "next/image";

interface LineageItem {
  label: string;
  value: string;
  valueClass?: string;
}

interface ApprovalItem {
  label: string;
  value: string;
  valueClass?: string;
}

const calculationLineageData: LineageItem[] = [
  { label: "Gross pay input", value: "€4,200.00" },
  { label: "Changed input (overtime)", value: "+€180.00" },
  { label: "Recalculation state", value: "Complete" },
  { label: "Net pay result", value: "€3,410.00" },
];

const approvalFlowData: ApprovalItem[] = [
  { label: "Prepared by", value: "Payroll Ops" },
  { label: "Approver assigned", value: "Missing" },
  { label: "Period lock state", value: "Open" },
  { label: "Segregation of duties", value: "Enforced" },
];

export default function CalculationsApprovalsSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#0F2B3E] via-[#103E59] to-[#0F2B3E] w-full py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden min-h-[500px] flex items-center">
      {/* Background Image with Dark Overlay */}
      <Image
        src="/images/admin/bg.png"
        alt="Dark abstract particle background"
        fill
        className="object-cover opacity-10 object-center"
        priority
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[1px] text-[#8FD0F2] uppercase font-mono">
            <span>/</span>
            <span>CALCULATIONS & APPROVALS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[32px] font-bold tracking-[1px] text-white leading-tight">
            Support cannot silently change a payroll outcome
          </h2>
        </div>

        {/* Two-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Calculation lineage */}
          <div className="bg-white text-[#07243B] rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <h3 className="text-base sm:text-lg font-bold tracking-[1px] text-[#07243B]">
              Calculation lineage
            </h3>

            <div className="divide-y divide-slate-100">
              {calculationLineageData.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4 text-xs sm:text-sm"
                >
                  <span className="font-semibold text-slate-700 tracking-[1px]">
                    {item.label}
                  </span>
                  <span
                    className={`font-medium tracking-[1px] ${
                      item.valueClass || "text-[#8592A0]"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Approval flow (maker-checker) */}
          <div className="bg-white text-[#07243B] rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <h3 className="text-base sm:text-lg font-bold tracking-[1px] text-[#07243B]">
              Approval flow (maker-checker)
            </h3>

            <div className="divide-y divide-slate-100">
              {approvalFlowData.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4 text-xs sm:text-sm"
                >
                  <span className="font-semibold text-slate-700 tracking-[1px]">
                    {item.label}
                  </span>
                  <span
                    className={`font-medium tracking-[1px] ${
                      item.valueClass || "text-[#8592A0]"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subtext Footnote */}
        <p className="text-center text-xs text-slate-300/80 font-medium tracking-[1px] mx-auto leading-relaxed">
          Missing approver, incorrect role and period lock/reopen are diagnosed
          here — never resolved by bypassing the approval control.
        </p>
      </div>
    </section>
  );
}
