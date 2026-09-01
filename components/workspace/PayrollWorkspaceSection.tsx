"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface CommandRow {
  id: string;
  title: string;
  subtitle: string;
  statusLabel: string;
  statusType: "awaiting" | "attention" | "closed";
}

const commandCenterRows: CommandRow[] = [
  {
    id: "eu-holdings",
    title: "EU Holdings BV — Bi-weekly cycle",
    subtitle: "Calculation complete · Awaiting review",
    statusLabel: "Awaiting approval",
    statusType: "awaiting",
  },
  {
    id: "overtime-variance",
    title: "Overtime variance — 4 workers",
    subtitle: "Exceeds configured threshold, high payroll impact",
    statusLabel: "Attention required",
    statusType: "attention",
  },
  {
    id: "uk-ltd",
    title: "UK Ltd — Monthly cycle",
    subtitle: "Approved and funded",
    statusLabel: "Closed",
    statusType: "closed",
  },
];

export default function PayrollWorkspaceSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Header Block */}
        <div className="text-center space-y-4 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span className="text-[#0A8FD0] font-bold">/</span>
            <span>PAYROLL WORKSPACE</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#07243B] leading-tight">
            One payroll workspace. Every cycle under control
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Plan, prepare, review, approve, pay, close and audit payroll from a
            secure workspace designed for multi-entity and multi-jurisdiction
            operations.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:bg-[#0863A1] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer">
              Start Free Trial
            </button>
            <button className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#07243B] text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer">
              <span>View Product Tour</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Dashboard Command Center Mockup Card */}
        <div className="max-w-5xl mx-auto bg-[#0A2E4B] rounded-3xl p-6 sm:p-8 shadow-2xl text-white space-y-6 border border-slate-800">
          {/* Header Bar */}
          <div className="flex items-center justify-between gap-4 border-b border-slate-700/60 pb-5">
            <div className="flex items-center gap-2 text-sm font-bold tracking-wide">
              <span className="w-2 h-2 rounded-xs bg-[#38BDF8]" />
              <span>Payroll Command Center</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#FFFFFF1A] border border-slate-700/60 text-[11px] font-mono text-[#BFE0F5]">
              Aug 2026 · Bi-weekly · All entities
            </span>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-[#FFFFFF0F] border border-slate-700/50 space-y-1">
              <div className="text-xl sm:text-2xl font-bold text-white">
                Review
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                CYCLE STAGE
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF0F] border border-slate-700/50 space-y-1">
              <div className="text-xl sm:text-2xl font-bold text-white">
                142
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                WORKERS READY
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF0F] border border-slate-700/50 space-y-1">
              <div className="text-xl sm:text-2xl font-bold text-white">3</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                ATTENTION REQUIRED
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF0F] border border-slate-700/50 space-y-1">
              <div className="text-xl sm:text-2xl font-bold text-white">
                Sep 2
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                APPROVAL DEADLINE
              </div>
            </div>
          </div>

          {/* Command Status Rows */}
          <div className="space-y-3 pt-1">
            {commandCenterRows.map((row) => (
              <div
                key={row.id}
                className="p-4 rounded-xl bg-[#FFFFFF0D] border border-[#FFFFFF14] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#FFFFFF0F] transition-colors"
              >
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {row.title}
                  </h4>
                  <p className="text-[11px] text-slate-400">{row.subtitle}</p>
                </div>

                <div className="shrink-0">
                  {row.statusType === "awaiting" && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[#E6B4642E] text-[#F0CF94]">
                      {row.statusLabel}
                    </span>
                  )}
                  {row.statusType === "attention" && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[#E6786E2E] text-[#F0A49D]">
                      {row.statusLabel}
                    </span>
                  )}
                  {row.statusType === "closed" && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[#70C9962E] text-[#8FE0AC]">
                      {row.statusLabel}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
