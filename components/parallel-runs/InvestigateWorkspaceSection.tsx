"use client";

import React from "react";

export default function InvestigateWorkspaceSection() {
  const cases = [
    {
      employeeId: "EMP-••••8213",
      component: "Net pay",
      difference: "−€42.10",
      differenceColor: "text-[#D97706]", // Amber
      rootCause: "Deduction date",
      owner: "Payroll ops",
      retestBadge: "Pending",
      retestBg: "bg-[#FEF3C7]",
      retestText: "text-[#D97706]",
    },
    {
      employeeId: "EMP-••••4407",
      component: "Tax with held",
      difference: "Resolved",
      differenceColor: "text-[#16A34A]", // Green
      rootCause: "Config rule",
      owner: "Compliance",
      retestBadge: "Passed",
      retestBg: "bg-[#DCFCE7]",
      retestText: "text-[#16A34A]",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Main Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] text-center tracking-tight leading-tight mb-12 max-w-2xl">
          A secure workspace for investigating each case.
        </h2>

        {/* Data Table Card */}
        <div className="w-full bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#F1F5F9]/70 border-b border-[#E2E8F0] text-[11px] font-semibold text-[#64748B] tracking-wider">
                  <th className="py-3.5 px-6 font-medium">Employee ID</th>
                  <th className="py-3.5 px-6 font-medium">Component</th>
                  <th className="py-3.5 px-6 font-medium">Difference</th>
                  <th className="py-3.5 px-6 font-medium">Root cause</th>
                  <th className="py-3.5 px-6 font-medium">Owner</th>
                  <th className="py-3.5 px-6 font-medium text-center">
                    Retest
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-[#E2E8F0]">
                {cases.map((row, idx) => (
                  <tr
                    key={idx}
                    className="text-xs sm:text-[13px] hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-[#0B192C] whitespace-nowrap">
                      {row.employeeId}
                    </td>
                    <td className="py-4 px-6 text-[#334155] whitespace-nowrap">
                      {row.component}
                    </td>
                    <td
                      className={`py-4 px-6 font-bold whitespace-nowrap ${row.differenceColor}`}
                    >
                      {row.difference}
                    </td>
                    <td className="py-4 px-6 text-[#334155] whitespace-nowrap">
                      {row.rootCause}
                    </td>
                    <td className="py-4 px-6 text-[#334155] whitespace-nowrap">
                      {row.owner}
                    </td>
                    <td className="py-4 px-6 text-center whitespace-nowrap">
                      <span
                        className={`inline-block px-3 py-0.5 rounded-full text-[11px] font-semibold ${row.retestBg} ${row.retestText}`}
                      >
                        {row.retestBadge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
