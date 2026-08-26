"use client";

import React from "react";
import Link from "next/link";

interface AccountabilityDomain {
  domain: string;
  role: string;
  scope: string;
  scopeBadge: string;
  status: string;
  nextQuestionLabel: string;
  nextQuestionHref: string;
}

const domainsData: AccountabilityDomain[] = [
  {
    domain: "Product direction",
    role: "Chief Product Officer",
    scope: "Global Payroll Product",
    scopeBadge: "All entities",
    status: "Active",
    nextQuestionLabel: "Product overview →",
    nextQuestionHref: "/product-overview",
  },
  {
    domain: "Technology",
    role: "Chief Technology Officer",
    scope: "Platform & Infrastructure",
    scopeBadge: "All products",
    status: "Active",
    nextQuestionLabel: "Security and Trust →",
    nextQuestionHref: "/trust-and-security",
  },
  {
    domain: "Payroll operations",
    role: "VP, Payroll Operations",
    scope: "Global Payroll Delivery",
    scopeBadge: "All jurisdictions",
    status: "Active",
    nextQuestionLabel: "Implementation →",
    nextQuestionHref: "/implementation",
  },
  {
    domain: "Trust & security",
    role: "Chief Information Security Officer",
    scope: "Security, Privacy & Controls",
    scopeBadge: "Company-wide",
    status: "Active",
    nextQuestionLabel: "Trust and Security →",
    nextQuestionHref: "/trust-and-security",
  },
  {
    domain: "Customer & commercial",
    role: "Chief Revenue Officer",
    scope: "Commercial & Customer Success",
    scopeBadge: "All regions",
    status: "Acting",
    nextQuestionLabel: "Contact →",
    nextQuestionHref: "/contact",
  },
  {
    domain: "Legal & compliance",
    role: "General Counsel",
    scope: "Legal & Regulatory",
    scopeBadge: "Corporate",
    status: "Vacant",
    nextQuestionLabel: "Contact →",
    nextQuestionHref: "/contact",
  },
];

export default function AccountabilityDomainsSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-12 lg:py-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Content */}
        <div className="text-center space-y-3">
          {/* Tag / Category */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            <span className="font-bold">/</span>
            <span>ACCOUNTABILITY DOMAINS</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight">
            Who owns what — the primary proof on this page
          </h2>

          {/* Subtitle */}
          <p className="text-[17px] mx-auto max-w-150 text-[#4D5E72] leading-relaxed">
            Every domain below names the accountable role, its scope, current status
            and where the next question should go. Titles never imply more authority
            than the verified assignment.
          </p>
        </div>

        {/* Table Container Card */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#F0F5FA] border-b border-gray-100 text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                  <th className="py-4 px-6">DOMAIN</th>
                  <th className="py-4 px-6">ACCOUNTABLE ROLE</th>
                  <th className="py-4 px-6">SCOPE</th>
                  <th className="py-4 px-6">STATUS</th>
                  <th className="py-4 px-6">NEXT QUESTION →</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-100 text-[13px]">
                {domainsData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    {/* Domain */}
                    <td className="py-4 px-6 font-bold text-[#0F172A] whitespace-nowrap">
                      {row.domain}
                    </td>

                    {/* Accountable Role */}
                    <td className="py-4 px-6 text-[#4D5E72] whitespace-nowrap">
                      {row.role}
                    </td>

                    {/* Scope + Pill Badge */}
                    <td className="py-4 px-6 text-[#4D5E72]">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span>{row.scope}</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E1EEF9] text-[#155A8A] whitespace-nowrap">
                          {row.scopeBadge}
                        </span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="py-4 px-6 font-medium text-[#334155] whitespace-nowrap">
                      {row.status}
                    </td>

                    {/* Next Question Link */}
                    <td className="py-4 px-6 font-bold text-[#0A8FD0] hover:text-[#0369A1] transition-colors whitespace-nowrap">
                      <Link href={row.nextQuestionHref}>
                        {row.nextQuestionLabel}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-xs text-[#94A3B8]">
            Reporting lines are never implied here — only public collaboration and verified scope of ownership.
          </p>
        </div>

      </div>
    </section>
  );
}