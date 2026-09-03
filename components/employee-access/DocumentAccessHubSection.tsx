"use client";

import React from "react";
import Image from "next/image";

interface RecentDocument {
  title: string;
  status: string;
  statusType: "available" | "pending";
}

interface PayIssue {
  issue: string;
  resolution: string;
}

const recentDocuments: RecentDocument[] = [
  {
    title: "Payslip — Aug 2026",
    status: "Available",
    statusType: "available",
  },
  {
    title: "Payslip — Jul 2026",
    status: "Available",
    statusType: "available",
  },
  {
    title: "Annual tax summary — 2025",
    status: "Not yet issued",
    statusType: "pending",
  },
];

const payIssueRoutings: PayIssue[] = [
  {
    issue: "Missing pay",
    resolution: "Employer-owned",
  },
  {
    issue: "Incorrect pay",
    resolution: "Employer-owned",
  },
  {
    issue: "Bank detail issue",
    resolution: "Verify securely first",
  },
  {
    issue: "Payment delay",
    resolution: "Check status first",
  },
];

const actionBadges = [
  "Specific payslip missing",
  "Download failure",
  "Document content dispute",
];

export default function DocumentAccessHubSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Split Layout: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Text Header */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span>/</span>
              <span>PAYSLIP & TAX DOCUMENT ACCESS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[32px] font-bold tracking-tight text-[#07243B] leading-tight">
              Document Access Hub — your documents, your pay periods
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
              Find, view and download your payslips and tax documents by pay
              period.
            </p>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src="/images/employee-access/4.png"
                alt="Person reviewing financial and tax documents on a laptop"
                fill
                className="object-cover rounded-xl object-center"
              />
            </div>
          </div>
        </div>

        {/* Middle Two-Card Grid: Recent Documents & Pay Issue Routing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Card 1: Recent Documents */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs space-y-5">
            <h3 className="text-sm font-bold text-[#07243B]">
              Recent documents
            </h3>

            <div className="divide-y divide-slate-100">
              {recentDocuments.map((doc, idx) => (
                <div
                  key={idx}
                  className="py-3.5 flex items-center justify-between first:pt-0 last:pb-0"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                    {doc.title}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-3 py-1 rounded-full ${
                      doc.statusType === "available"
                        ? "bg-[#E2F0D9] text-[#2E6B12]"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Pay Issue Routing */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs space-y-5">
            <h3 className="text-sm font-bold text-[#07243B]">
              Pay issue routing
            </h3>

            <div className="divide-y divide-slate-100">
              {payIssueRoutings.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 flex items-center justify-between first:pt-0 last:pb-0"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                    {item.issue}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {item.resolution}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Pill Action Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          {actionBadges.map((badge, idx) => (
            <button
              key={idx}
              type="button"
              className="bg-white hover:bg-slate-50 text-[#07243B] text-xs font-semibold px-4 py-2 rounded-full border border-slate-200/80 shadow-2xs transition-all"
            >
              {badge}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
