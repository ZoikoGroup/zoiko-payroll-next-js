"use client";

import React from "react";

interface SelfServiceCheck {
  title: string;
  description: string;
}

interface SummaryRow {
  label: string;
  value: string;
}

const selfServiceChecks: SelfServiceCheck[] = [
  {
    title: "API authentication & scope",
    description:
      "Confirm token scope and expiry before assuming a platform issue.",
  },
  {
    title: "Webhook delivery lookup",
    description: "Check delivery status by correlation ID.",
  },
  {
    title: "Payment status & reconciliation",
    description: "Check current status before requesting any resend.",
  },
  {
    title: "ERP rejection / mapping",
    description: "Review rejected-field mapping guidance.",
  },
  {
    title: "Time source-state & matching",
    description: "Confirm period and matching rules first.",
  },
  {
    title: "Identity provisioning & trust",
    description: "Verify provisioning and trust configuration.",
  },
];

const summaryData: SummaryRow[] = [
  {
    label: "Area / issue type",
    value: "Finance/ERP — Delivery, partial failure",
  },
  { label: "Environment", value: "Production" },
  { label: "Affected scope", value: "4 records, DE-01" },
  { label: "Safe IDs provided", value: "corr-88213-04" },
  { label: "Self-service attempted", value: "Yes — mapping guide reviewed" },
  { label: "Recommended owner", value: "Finance Integration Team" },
];

export default function SelfServiceAndReadinessSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-[#0A8FD0] font-bold">/</span>
            <span>SELF-SERVICE CHECKS + READINESS SUMMARY</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[26px] font-bold tracking-tight text-[#07243B] leading-tight">
            Try this first — it may resolve the issue safely.
          </h2>
        </div>

        {/* 6 Self-Service Check Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {selfServiceChecks.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs hover:shadow-xs transition-shadow space-y-1.5"
            >
              <h3 className="text-xs sm:text-sm font-bold text-[#07243B]">
                {card.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Readiness Summary Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
            READINESS SUMMARY — UPDATES LIVE AS YOU ANSWER
          </div>

          <div className="divide-y divide-slate-100/80">
            {summaryData.map((row, idx) => (
              <div
                key={idx}
                className="py-3 flex items-center justify-between gap-4 text-xs sm:text-sm"
              >
                <span className="text-slate-400 font-normal">{row.label}</span>
                <span className="font-bold text-[#07243B] text-right font-mono">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Slate Banner */}
        <div className="bg-[#1C3B53] rounded-2xl p-6 sm:p-8 text-white space-y-1 shadow-lg">
          <h3 className="text-sm sm:text-base font-bold text-white">
            Most issues resolve here, before a case is ever needed.
          </h3>
          <p className="text-xs text-slate-300">
            Self-service guidance is suppressed automatically when it goes
            stale.
          </p>
        </div>
      </div>
    </section>
  );
}
