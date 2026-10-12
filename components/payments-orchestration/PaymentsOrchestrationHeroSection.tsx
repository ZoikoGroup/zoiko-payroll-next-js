"use client";

import React from "react";

interface PaymentGroupRow {
  group: string;
  status: string;
  statusType: "ready" | "awaiting" | "authorized";
  currency: string;
}

const paymentGroups: PaymentGroupRow[] = [
  {
    group: "Salaried — GBP",
    status: "Ready to release",
    statusType: "ready",
    currency: "GBP",
  },
  {
    group: "Contractors — EUR",
    status: "Awaiting funding",
    statusType: "awaiting",
    currency: "EUR",
  },
  {
    group: "Statutory — GBP",
    status: "Authorized",
    statusType: "authorized",
    currency: "GBP",
  },
];

export default function PaymentsOrchestrationHeroSection() {
  return (
    <section className="relative w-full min-h-[600px] text-white flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/payroll-operation/bg6.png"
          alt="Office background with professionals working"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Blue Overlay Matching Design */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071C2EE0] via-[#0A3254BF] to-[#0A8FD066] backdrop-blur-xs" />
      </div>

      {/* Main Container - Restrained to max-w-6xl */}
      <div className="relative z-10 w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Action Buttons (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase font-mono">
              <span className="text-[#8FD0F2] font-bold">—</span>
              <span>PAYMENTS ORCHESTRATION</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.15]">
              Move Approved Payroll Into Controlled, Traceable Payments
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Coordinate funding and authorization, route through supported
              channels, and track outcomes through reconciliation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] hover:bg-[#0863A1] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer">
                Book a demo
              </button>
              <button className="px-6 py-3 rounded-xl bg-transparent hover:bg-white/10 border border-slate-400/50 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer">
                Start free trial
              </button>
            </div>
          </div>

          {/* Right Column: Interactive UI Card Overlay (6 cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg bg-white text-[#0F172A] rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
              {/* Floating Review Badge */}
              <div className="absolute top-3 left-4 z-20 bg-white border border-slate-200/90 rounded-full px-3 py-1 text-xs font-semibold text-[#07243B] flex items-center gap-2 shadow-sm">
                <span>1 review exception</span>
                <span className="w-2 h-2 rounded-full bg-amber-500" />
              </div>

              {/* Sub-header Bar */}
              <div className="pt-12 px-6 pb-4 border-b border-slate-100 flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 font-semibold text-[#07243B] text-[11px]">
                    Entity <strong className="font-bold">UK Ltd</strong>
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 font-semibold text-[#07243B] text-[11px]">
                    Pay date <strong className="font-bold">Aug 25</strong>
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Cycle PMT-0842
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-6">
                {/* Metrics Row */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl bg-[#F6F8FB] border border-slate-100 space-y-1">
                    <div className="text-2xl font-bold text-[#07243B]">
                      1,236
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium leading-snug">
                      Approved obligations
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F6F8FB] border border-slate-100 space-y-1">
                    <div className="text-2xl font-bold text-[#07243B]">
                      £1.2M
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium leading-snug">
                      Funding confirmed
                    </div>
                  </div>
                </div>

                {/* Groups Status Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        <th className="py-2.5 px-1">Group</th>
                        <th className="py-2.5 px-1">Status</th>
                        <th className="py-2.5 px-1">Currency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {paymentGroups.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-slate-50/50 transition-colors"
                        >
                          <td className="py-3.5 px-1 font-bold text-[#07243B]">
                            {row.group}
                          </td>
                          <td className="py-3.5 px-1">
                            {row.statusType === "ready" && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                {row.status}
                              </span>
                            )}
                            {row.statusType === "awaiting" && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                {row.status}
                              </span>
                            )}
                            {row.statusType === "authorized" && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-[#0A78C3]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0A78C3]" />
                                {row.status}
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-1 font-mono text-slate-400 text-[11px]">
                            {row.currency}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
