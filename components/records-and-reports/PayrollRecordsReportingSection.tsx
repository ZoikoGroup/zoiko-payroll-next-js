"use client";

import React from "react";

interface MetricCard {
  value: string;
  label: string;
}

interface ReportRow {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  statusStyle: string;
}

const pillTags: string[] = [
  "Scoped by payroll run",
  "Version-aware",
  "Permission-controlled",
  "Export-ready",
];

const metricCards: MetricCard[] = [
  { value: "14", label: "FINAL RECORDS" },
  { value: "2", label: "PENDING DOWNSTREAM" },
  { value: "1", label: "SUPERSEDED" },
  { value: "0", label: "RETENTION ALERTS" },
];

const reportRows: ReportRow[] = [
  {
    id: "1",
    title: "Payroll Register — Run v3",
    subtitle: "Generated Aug 26, 2026 · PDF · Retention: 7 years",
    status: "Final",
    statusStyle: "bg-[#70C9962E] text-[#8FE0AC]",
  },
  {
    id: "2",
    title: "Payment Status Report — Run v3",
    subtitle: "Awaiting settlement confirmation from provider",
    status: "Pending downstream",
    statusStyle: "bg-[#E6B4642E] text-[#F0CF94]",
  },
  {
    id: "3",
    title: "Payroll Register — Run v2",
    subtitle: "Superseded by v3 correction · Original preserved",
    status: "Superseded",
    statusStyle: "bg-[#E6786E2E] text-[#F0A49D]",
  },
];

export default function PayrollRecordsReportingSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Content & Actions */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-bold tracking-[1px] text-[#0A8FD0] uppercase font-mono">
                <span>PAYROLL RECORDS & REPORTING</span>
                <span className="text-[#0A8FD0] font-bold">/</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[34px] font-bold tracking-tight text-[#07243B] leading-[1.15]">
                Payroll records and reports you can trace, control and retrieve
              </h2>

              {/* Subtitle / Description */}
              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                Keep final payroll outputs and linked evidence organized by
                entity, period, worker, jurisdiction and run version — with
                governed access, export and retention.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A8FD0] to-[#0B4573] text-white text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity shadow-sm cursor-pointer">
                Book a Demo
              </button>
              <button className="px-6 py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-[#07243B] text-xs sm:text-sm font-semibold transition-colors shadow-2xs cursor-pointer">
                Take the Product Tour
              </button>
            </div>

            {/* Pill Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {pillTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Dark Control Center Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#0A2E4B] rounded-3xl p-6 sm:p-8 text-white space-y-6 shadow-2xl border border-slate-800/50">
              {/* Top Control Center Header */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#0A8FD0]" />
                  <h3 className="text-base font-bold text-white tracking-wide">
                    Records Control Center
                  </h3>
                </div>

                <span className="px-3 py-1 rounded-full bg-[#FFFFFF0F] border border-white/10 text-[11px] font-medium text-slate-300">
                  EU Holdings BV - Aug 2026 - Closed
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {metricCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FFFFFF0F] rounded-2xl p-4 border border-white/5 space-y-2"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {card.value}
                    </div>
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase leading-snug">
                      {card.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed Report Rows */}
              <div className="space-y-3">
                {reportRows.map((row) => (
                  <div
                    key={row.id}
                    className="bg-[#FFFFFF0F] rounded-2xl p-4 border border-white/5 flex items-center justify-between gap-4 hover:bg-white/[0.08] transition-colors"
                  >
                    <div className="space-y-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                        {row.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-medium truncate">
                        {row.subtitle}
                      </p>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-medium shrink-0 ${row.statusStyle}`}
                    >
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
