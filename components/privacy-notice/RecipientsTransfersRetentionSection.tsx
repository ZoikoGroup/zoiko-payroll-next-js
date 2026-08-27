"use client";

import React from "react";

interface RetentionTableRow {
  context: string;
  dataCategory: string;
  purpose: string;
  recipient: string;
  retention: string;
  transfer: string;
}

const tableData: RetentionTableRow[] = [
  {
    context: "Website",
    dataCategory: "Identity & contact",
    purpose: "Respond to inquiries",
    recipient: "Internal support team",
    retention: "Per approved schedule",
    transfer: "Per approved disclosure",
  },
  {
    context: "Customer account",
    dataCategory: "Account & usage",
    purpose: "Service operation & security",
    recipient: "Approved processors",
    retention: "Per approved schedule",
    transfer: "Per approved disclosure",
  },
  {
    context: "Customer-directed payroll",
    dataCategory: "Employment & payroll",
    purpose: "Per customer instruction / DPA",
    recipient: "Per DPA & approved sub-processors",
    retention: "Per DPA / customer instruction",
    transfer: "Per approved DPA terms",
  },
];

export default function RecipientsTransfersRetentionSection() {
  return (
    <section
      id="recipients-transfers-retention"
      className="scroll-mt-8 space-y-6"
    >
      {/* Divider */}
      <div className="border-t border-slate-100 pt-8">
        {/* Title & Introduction */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
            Recipients, transfers & retention
          </h2>
          <p className="text-[14.5px] text-[#5B646B] leading-relaxed max-w-3xl">
            Recipients are described using approved recipient categories and
            provider authority — never a vague &quot;trusted partners&quot; statement.
            International transfers are disclosed only where an approved
            transfer/location record exists; an office location is not
            automatically a processing location. Retention uses an approved
            duration or criteria per context and category — never a single
            invented universal period.
          </p>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-xl border border-slate-100">
        <table className="w-full text-left text-xs sm:text-[12.5px] border-collapse">
          <thead>
            <tr className="bg-[#E9F0F8]/60 text-[#0F172A]">
              <th className="py-3 px-4 font-bold tracking-wider uppercase text-[10.5px]">
                CONTEXT
              </th>
              <th className="py-3 px-4 font-bold tracking-wider uppercase text-[10.5px]">
                DATA CATEGORY
              </th>
              <th className="py-3 px-4 font-bold tracking-wider uppercase text-[10.5px]">
                PURPOSE
              </th>
              <th className="py-3 px-4 font-bold tracking-wider uppercase text-[10.5px]">
                RECIPIENT
              </th>
              <th className="py-3 px-4 font-bold tracking-wider uppercase text-[10.5px]">
                RETENTION
              </th>
              <th className="py-3 px-4 font-bold tracking-wider uppercase text-[10.5px]">
                TRANSFER
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-[#5B646B]">
            {tableData.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3.5 px-4 font-medium text-[#0F172A]">
                  {row.context}
                </td>
                <td className="py-3.5 px-4">{row.dataCategory}</td>
                <td className="py-3.5 px-4">{row.purpose}</td>
                <td className="py-3.5 px-4">{row.recipient}</td>
                <td className="py-3.5 px-4">{row.retention}</td>
                <td className="py-3.5 px-4">{row.transfer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Note */}
      <p className="text-xs text-[#94A3B8] leading-relaxed">
        Illustrative structure only — exact recipients, retention periods and
        transfer mechanisms are populated from the approved registry, not
        invented here.
      </p>
    </section>
  );
}
