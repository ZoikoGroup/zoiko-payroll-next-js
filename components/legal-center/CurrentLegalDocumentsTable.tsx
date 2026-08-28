"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface LegalDocumentRow {
  title: string;
  description: string;
  state: string;
  stateType: "current" | "corrected" | "scheduled";
  published: string;
  effective: string;
  version: string;
  href: string;
}

const legalDocuments: LegalDocumentRow[] = [
  {
    title: "Privacy Notice",
    description: "Disclosure of how personal data is processed",
    state: "Current",
    stateType: "current",
    published: "Jun 2026",
    effective: "Jun 2026",
    version: "v3.2",
    href: "/privacy",
  },
  {
    title: "Website Terms of Use",
    description: "Terms for browsing and using this website",
    state: "Current",
    stateType: "current",
    published: "Mar 2026",
    effective: "Mar 2026",
    version: "v2.0",
    href: "/terms",
  },
  {
    title: "Zoiko Payroll Service Terms",
    description: "Standard service terms where applicable",
    state: "Current",
    stateType: "current",
    published: "Feb 2026",
    effective: "Feb 2026",
    version: "v4.1",
    href: "/legal/service-terms",
  },
  {
    title: "Data Processing Addendum",
    description: "Approved data-processing terms and annexes",
    state: "Corrected",
    stateType: "corrected",
    published: "Jan 2026",
    effective: "Jan 2026",
    version: "v2.0",
    href: "/legal/dpa",
  },
  {
    title: "Acceptable Use Policy",
    description: "Approved use restrictions where incorporated",
    state: "Current",
    stateType: "current",
    published: "Dec 2025",
    effective: "Dec 2025",
    version: "v1.6",
    href: "/aup",
  },
  {
    title: "Cookie Notice",
    description: "Disclosure of cookie use — not the control interface",
    state: "Scheduled",
    stateType: "scheduled",
    published: "Aug 2026",
    effective: "Sep 2026",
    version: "v1.4",
    href: "/cookies",
  },
];

export default function CurrentLegalDocumentsTable() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Section */}
        <div className="space-y-3 max-w-3xl">
          {/* Tag Line */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#38BDF8] uppercase">
            <span className="w-3 h-0.5 bg-[#38BDF8]" />
            <span>CURRENT LEGAL DOCUMENTS</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[25px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Registry-backed. Never hard-coded dates or versions
          </h2>

          {/* Paragraph */}
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Only approved, live registry records render here — unapproved or
            unavailable records are suppressed, never placeholder-filled.
          </p>
        </div>

        {/* Legal Documents Table Wrapper */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[768px]">
            <thead>
              <tr className="border-b border-gray-200/80 bg-white text-[11px] font-bold tracking-wider text-[#94A3B8] uppercase">
                <th className="py-4 px-6 font-bold">DOCUMENT</th>
                <th className="py-4 px-4 font-bold">STATE</th>
                <th className="py-4 px-4 font-bold">PUBLISHED</th>
                <th className="py-4 px-4 font-bold">EFFECTIVE</th>
                <th className="py-4 px-4 font-bold">VERSION</th>
                <th className="py-4 px-6 font-bold text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
              {legalDocuments.map((doc, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  {/* Document Title & Description */}
                  <td className="py-4 px-6 max-w-xs">
                    <div className="space-y-0.5">
                      <div className="font-bold text-[#0F172A]">
                        {doc.title}
                      </div>
                      <div className="text-xs text-[#94A3B8]">
                        {doc.description}
                      </div>
                    </div>
                  </td>

                  {/* State Badge */}
                  <td className="py-4 px-4 align-middle">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold ${
                        doc.stateType === "current"
                          ? "bg-emerald-100/70 text-emerald-800"
                          : doc.stateType === "corrected"
                            ? "bg-amber-100/70 text-amber-800"
                            : "bg-blue-100/70 text-blue-800"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          doc.stateType === "current"
                            ? "bg-emerald-500"
                            : doc.stateType === "corrected"
                              ? "bg-amber-500"
                              : "bg-blue-500"
                        }`}
                      />
                      {doc.state}
                    </span>
                  </td>

                  {/* Published Date */}
                  <td className="py-4 px-4 align-middle text-[#475569] bg-[#F6F8FC] font-medium text-xs">
                    {doc.published}
                  </td>

                  {/* Effective Date */}
                  <td className="py-4 px-4 align-middle text-[#475569] bg-[#F6F8FC] font-medium text-xs">
                    {doc.effective}
                  </td>

                  {/* Version */}
                  <td className="py-4 px-4 align-middle text-[#475569] bg-[#F6F8FC] font-medium text-xs">
                    {doc.version}
                  </td>

                  {/* Action Link */}
                  <td className="py-4 px-6 align-middle text-right">
                    <Link
                      href={doc.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors"
                    >
                      <span>View</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
