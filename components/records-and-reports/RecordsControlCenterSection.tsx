"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

interface RecordRow {
  id: string;
  report: string;
  class: string;
  sourceRun: string;
  status: string;
  statusStyle: string;
  version: string;
  format: string;
}

const filterOptions: string[] = [
  "Legal entity",
  "Pay group",
  "Period",
  "Run type",
  "Jurisdiction",
  "Currency",
  "Status",
];

const recordsTableData: RecordRow[] = [
  {
    id: "1",
    report: "Payroll Register",
    class: "Payroll results",
    sourceRun: "Run v3",
    status: "Final",
    statusStyle: "bg-[#70C9962E] text-[#2E8B57]",
    version: "v3",
    format: "PDF",
  },
  {
    id: "2",
    report: "Payment Status Report",
    class: "Payment",
    sourceRun: "Run v3",
    status: "Pending downstream",
    statusStyle: "bg-[#E6B4642E] text-[#B8860B]",
    version: "v3",
    format: "CSV",
  },
  {
    id: "3",
    report: "Payroll Register",
    class: "Payroll results",
    sourceRun: "Run v2",
    status: "Superseded",
    statusStyle: "bg-[#E6786E2E] text-[#C0392B]",
    version: "v2",
    format: "PDF",
  },
];

const detailDrawerItems: string[] = [
  "Purpose & data coverage",
  "Source lineage & owner",
  "Linked approvals",
  "Retention & export history",
];

const actionButtons: string[] = [
  "Preview",
  "Generate Latest",
  "Export",
  "Share/Distribute",
  "Compare Version",
  "View Lineage",
];

export default function RecordsControlCenterSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#3EA3E0] uppercase font-mono">
            <span className="text-[#3EA3E0] font-bold">/</span>
            <span>RECORDS CONTROL CENTER</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#07243B] leading-tight">
            Scope, status and lineage in one governed view
          </h2>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {filterOptions.map((filter, idx) => (
            <button
              key={idx}
              className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
            >
              <span>{filter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2.5]" />
            </button>
          ))}
        </div>

        {/* Records Table Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#E9F0F8] border-b border-[#E1E8F0] text-[11px] font-bold tracking-wider text-slate-500 uppercase">
                  <th className="py-3.5 px-6">REPORT</th>
                  <th className="py-3.5 px-6">CLASS</th>
                  <th className="py-3.5 px-6">SOURCE RUN</th>
                  <th className="py-3.5 px-6">STATUS</th>
                  <th className="py-3.5 px-6">VERSION</th>
                  <th className="py-3.5 px-6">FORMAT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-[#07243B] font-medium">
                {recordsTableData.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-[#07243B]">
                      {row.report}
                    </td>
                    <td className="py-4 px-6 text-slate-600">{row.class}</td>
                    <td className="py-4 px-6 text-slate-600">
                      {row.sourceRun}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold ${row.statusStyle}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{row.version}</td>
                    <td className="py-4 px-6 text-slate-600">{row.format}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scope Subtext */}
        <p className="text-center text-[11px] sm:text-xs text-slate-400 font-medium max-w-3xl mx-auto">
          Synthetic example scope: EU Holdings BV, Aug 2026, closed — 14 final
          records, 2 pending downstream, 1 superseded, 0 retention alerts.
        </p>

        {/* Bottom Details & Action Rail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Detail Drawer Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 space-y-4 shadow-2xs flex flex-col justify-between">
            <h3 className="text-base font-bold text-[#07243B]">
              Detail drawer
            </h3>
            <div className="divide-y divide-slate-100">
              {detailDrawerItems.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-0 last:pb-0 text-xs sm:text-sm font-semibold text-[#07243B] flex items-center justify-between"
                >
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Rail Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 space-y-6 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#07243B]">
                Action rail
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {actionButtons.map((action, idx) => (
                  <button
                    key={idx}
                    className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-slate-400 font-medium">
              Every action is permission and state dependent — unavailable
              actions are never shown.
            </p>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-center text-[11px] sm:text-xs text-slate-400 font-medium pt-2">
          Evidence links: close evidence, payment status, filing acknowledgment
          and accounting posting reference where supported.
        </p>
      </div>
    </section>
  );
}
