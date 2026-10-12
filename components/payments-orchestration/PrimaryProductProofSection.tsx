"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface MetricCard {
  value: string;
  label: string;
}

interface PipelineStep {
  id: string;
  label: string;
  active?: boolean;
}

interface PaymentRow {
  group: string;
  provider: string;
  amount: string;
  status: string;
  statusType: "ready" | "awaiting" | "authorized";
}

const metrics: MetricCard[] = [
  { value: "1,236", label: "Approved obligations" },
  { value: "£1.2M", label: "Funding confirmed" },
  { value: "4", label: "Payment groups" },
  { value: "3", label: "Exceptions" },
];

const pipelineSteps: PipelineStep[] = [
  { id: "created", label: "Created" },
  { id: "validated", label: "Validated" },
  { id: "funded", label: "Funded" },
  { id: "authorized", label: "Authorized", active: true },
  { id: "submitted", label: "Submitted" },
  { id: "settled", label: "Settled" },
  { id: "reconciled", label: "Reconciled" },
];

const paymentRows: PaymentRow[] = [
  {
    group: "Salaried — GBP",
    provider: "Bank Route A",
    amount: "£820,400",
    status: "Ready to release",
    statusType: "ready",
  },
  {
    group: "Contractors — EUR",
    provider: "Provider B",
    amount: "€142,000",
    status: "Awaiting funding",
    statusType: "awaiting",
  },
  {
    group: "Statutory — GBP",
    provider: "Bank Route A",
    amount: "£210,000",
    status: "Authorized",
    statusType: "authorized",
  },
];

export default function PrimaryProductProofSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
            <span className="text-[#0A78C3] font-bold">—</span>
            <span>PRIMARY PRODUCT PROOF</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B]">
            Funding readiness through reconciliation, in one view
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Groups, routes and exceptions — without exposing full bank
            credentials.
          </p>
        </div>

        {/* Browser Mockup Card Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden">
          {/* Browser Window Bar */}
          <div className="bg-[#F6F8FB] px-6 py-3.5 border-b border-slate-200/70 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              </div>
              <span className="font-mono text-[11px] ml-2">
                /payment-control-center — Cycle PMT-0842
              </span>
            </div>
          </div>

          {/* Browser Content Inner Pad */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Top Toolbar / Filters Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <div className="px-3 py-1.5 rounded-lg bg-slate-100 font-medium text-slate-600">
                  Entity{" "}
                  <strong className="font-bold text-[#07243B]">UK Ltd</strong>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-slate-100 font-medium text-slate-600">
                  Pay group{" "}
                  <strong className="font-bold text-[#07243B]">Salaried</strong>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-slate-100 font-medium text-slate-600">
                  Pay date{" "}
                  <strong className="font-bold text-[#07243B]">Aug 25</strong>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-slate-100 font-medium text-slate-600">
                  Approval version{" "}
                  <strong className="font-bold text-[#07243B]">v6</strong>
                </div>
              </div>

              <div className="text-slate-400 font-medium text-xs">
                State:{" "}
                <span className="text-slate-600">Awaiting authorization</span>
              </div>
            </div>

            {/* 4 Metric Cards Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F6F8FB] border border-slate-200/60 space-y-1"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#07243B]">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Pipeline Stage Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {pipelineSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      step.active
                        ? "bg-[#FCF1D8] text-amber-800 border-2 border-[#9A6300] shadow-xs"
                        : "bg-white text-slate-600 border border-slate-200"
                    }`}
                  >
                    {step.label}
                  </div>

                  {index < pipelineSteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 shrink-0 hidden sm:block" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Payment Group Table */}
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th className="py-3 px-2">Payment Group</th>
                    <th className="py-3 px-2">Provider</th>
                    <th className="py-3 px-2">Amount</th>
                    <th className="py-3 px-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {paymentRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/60 transition-colors"
                    >
                      <td className="py-4 px-2 font-bold text-[#07243B]">
                        {row.group}
                      </td>
                      <td className="py-4 px-2 text-slate-400">
                        {row.provider}
                      </td>
                      <td className="py-4 px-2 font-semibold text-[#07243B]">
                        {row.amount}
                      </td>
                      <td className="py-4 px-2">
                        {row.statusType === "ready" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {row.status}
                          </span>
                        )}
                        {row.statusType === "awaiting" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            {row.status}
                          </span>
                        )}
                        {row.statusType === "authorized" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#0A78C3]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0A78C3]" />
                            {row.status}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
