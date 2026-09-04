"use client";

import React from "react";

export default function ServiceAndDataCategoryMatrixSection() {
  const tableData = [
    {
      category: "Worker & payroll records",
      storage: "Primary region per service",
      processing: "Approved processing locations",
    },
    {
      category: "Payment instructions",
      storage: "Primary region per service",
      processing: "Payment provider dependent",
    },
    {
      category: "Documents & payslips",
      storage: "Primary region per service",
      processing: "Approved processing locations",
    },
    {
      category: "Audit & access logs",
      storage: "Platform-level scope",
      processing: "Security operations scope",
    },
    {
      category: "Support case data",
      storage: "Support platform scope",
      processing: "Approved support locations",
    },
  ];

  return (
    <div className="w-full bg-white text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto space-y-10 text-center">
        {/* Header Block */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              SERVICE & DATA-CATEGORY MATRIX
            </span>
          </div>

          <h2 className="text-[32px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            One region never covers every data class
          </h2>
        </div>

        {/* Matrix Table Card Container */}
        <div className="bg-white border border-slate-200/85 rounded-3xl shadow-xs overflow-hidden text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[11px] font-extrabold text-white tracking-wider">
                  <th className="py-4 px-6 uppercase text-[#0A3254] bg-[#E9F0F8] w-1/3">
                    Data Category
                  </th>
                  <th className="py-4 px-6 uppercase bg-[#0A2E4B] w-1/3 border-l border-[#133A57]">
                    Storage Role
                  </th>
                  <th className="py-4 px-6 uppercase bg-[#0A8FD0] w-1/3">
                    Processing Role
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium text-[#07243B]">
                {tableData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-extrabold bg-[#E9F0F8] text-[#07243B]">
                      {row.category}
                    </td>
                    <td className="py-4 px-6 text-slate-600">{row.storage}</td>
                    <td className="py-4 px-6 text-slate-600">
                      {row.processing}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Subtext */}
        <p className="text-[11px] sm:text-xs text-slate-500 font-medium text-center mx-auto leading-relaxed pt-2">
          Retention, deletion and legal hold are kept as separate policy
          dimensions <span className="text-slate-400 font-bold">—</span> see the
          Data Processing Addendum for governing terms.
        </p>
      </section>
    </div>
  );
}
