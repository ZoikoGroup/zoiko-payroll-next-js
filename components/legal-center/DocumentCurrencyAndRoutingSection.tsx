"use client";

import React from "react";
import Link from "next/link";
import { Info } from "lucide-react";

interface StatusBadgeCard {
  label: string;
  description: string;
  type:
    | "current"
    | "scheduled"
    | "superseded"
    | "withdrawn"
    | "archived"
    | "corrected";
}

interface RoutingRow {
  question: string;
  routeTo: string;
  href: string;
}

const statusBadgeCards: StatusBadgeCard[] = [
  {
    label: "Current",
    description: "Operative for the defined context.",
    type: "current",
  },
  {
    label: "Scheduled",
    description: "A future version — not yet effective.",
    type: "scheduled",
  },
  {
    label: "Superseded",
    description: "Replaced — archived, with a link to the current version.",
    type: "superseded",
  },
  {
    label: "Withdrawn",
    description: "Removed from current use or publication.",
    type: "withdrawn",
  },
  {
    label: "Archived",
    description: "Historical reference, clearly marked as archived.",
    type: "archived",
  },
  {
    label: "Corrected",
    description: "Correction metadata shown where required.",
    type: "corrected",
  },
];

const routingRows: RoutingRow[] = [
  {
    question: "Privacy questions",
    routeTo: "Privacy contact",
    href: "/contact",
  },
  {
    question: "Legal / contract questions",
    routeTo: "Commercial / legal contact",
    href: "/contact",
  },
  {
    question: "Accessibility feedback",
    routeTo: "Accessibility support route",
    href: "/accessibility",
  },
  {
    question: "Service availability / incidents",
    routeTo: "System Status",
    href: "/status",
  },
  {
    question: "Security / assurance evidence",
    routeTo: "Trust & Security",
    href: "/trust-and-security",
  },
  {
    question: "Procurement / DPA execution",
    routeTo: "Commercial / legal contact",
    href: "/contact",
  },
];

export default function DocumentCurrencyAndRoutingSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Section */}
        <div className="space-y-3 max-w-3xl">
          {/* Tag Line */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
            <span className="w-3 h-0.5 bg-[#2F6FED]" />
            <span>DOCUMENT CURRENCY, LANGUAGE & SPECIALIST CONTACTS</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[26px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Freshness and routing, unambiguous
          </h2>
        </div>

        {/* Status Badge Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statusBadgeCards.map((badge, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-gray-100/90 shadow-sm space-y-3 flex flex-col justify-start"
            >
              <div>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold ${
                    badge.type === "current"
                      ? "bg-emerald-100/70 text-emerald-800"
                      : badge.type === "scheduled"
                        ? "bg-blue-100/70 text-blue-800"
                        : badge.type === "superseded"
                          ? "bg-slate-100 text-slate-700"
                          : badge.type === "withdrawn"
                            ? "bg-red-100/70 text-red-700"
                            : badge.type === "archived"
                              ? "bg-slate-100 text-slate-700"
                              : "bg-amber-100/70 text-amber-800"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      badge.type === "current"
                        ? "bg-emerald-500"
                        : badge.type === "scheduled"
                          ? "bg-blue-500"
                          : badge.type === "superseded"
                            ? "bg-slate-500"
                            : badge.type === "withdrawn"
                              ? "bg-red-500"
                              : badge.type === "archived"
                                ? "bg-slate-500"
                                : "bg-amber-500"
                    }`}
                  />
                  {badge.label}
                </span>
              </div>

              <p className="text-xs text-[#64748B] leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Locale Note Banner */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
          <Info className="w-4 h-4 shrink-0 text-[#94A3B8]" />
          <span>
            Locale changes presentation language only — applicability is never
            inferred from locale, IP, browser language or billing country.
          </span>
        </div>

        {/* Question & Route Table */}
        <div className="bg-white rounded-2xl border border-gray-100/90 shadow-sm overflow-hidden overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] font-bold tracking-wider text-[#94A3B8] uppercase">
                <th className="py-4 px-6 font-bold">QUESTION</th>
                <th className="py-4 px-6 font-bold">ROUTE TO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
              {routingRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 text-[#0F172A] font-medium">
                    {row.question}
                  </td>
                  <td className="py-4 px-6">
                    <Link
                      href={row.href}
                      className="text-[#64748B] hover:text-[#2F6FED] transition-colors"
                    >
                      {row.routeTo}
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
