"use client";

import React from "react";

interface ResponsibilityRow {
  controlArea: string;
  zoikoPayroll: string;
  customer: string;
}

const responsibilityData: ResponsibilityRow[] = [
  {
    controlArea: "Platform security",
    zoikoPayroll: "Owns Zoiko service controls",
    customer: "Uses approved configuration",
  },
  {
    controlArea: "User lifecycle",
    zoikoPayroll: "Provides IAM capabilities & audit",
    customer: "Assigns/removes authorized users",
  },
  {
    controlArea: "MFA / SSO",
    zoikoPayroll: "Provides supported controls by entitlement",
    customer: "Configures & enforces per policy",
  },
  {
    controlArea: "Payroll data accuracy",
    zoikoPayroll: "Protects/processes per service scope",
    customer: "Owns source-data correctness",
  },
  {
    controlArea: "Endpoint security",
    zoikoPayroll: "Protects Zoiko-managed systems",
    customer: "Protects customer devices & browsers",
  },
  {
    controlArea: "Integration credentials",
    zoikoPayroll: "Provides secure mechanisms",
    customer: "Safeguards customer-managed secrets",
  },
  {
    controlArea: "Incident reporting",
    zoikoPayroll: "Provides security incident channels",
    customer: "Reports suspected compromise promptly",
  },
];

export default function SharedResponsibilitySection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF4F7] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              SHARED RESPONSIBILITY
            </span>
          </div>

          {/* Title (31px) */}
          <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight max-w-xl">
            Who owns what — without shifting our obligations.
          </h2>
        </div>

        {/* Table Container Card */}
        <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#07243B] text-white text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6 w-1/3">Control area</th>
                  <th className="py-4 px-6 w-1/3">Zoiko Payroll</th>
                  <th className="py-4 px-6 w-1/3">Customer</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium">
                {responsibilityData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-[#07243B]">
                      {row.controlArea}
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      {row.zoikoPayroll}
                    </td>
                    <td className="py-4 px-6 text-slate-600">{row.customer}</td>
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
