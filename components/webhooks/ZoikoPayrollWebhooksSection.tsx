"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface WebhookRow {
  event: string;
  deliveryState: "DELIVERED" | "RETRY_SCHEDULED" | "FAILED_FINAL";
  attempts: number;
  lastResponse: string;
  replay: "Eligible" | "—";
}

const webhookData: WebhookRow[] = [
  {
    event: "payroll_run.completed",
    deliveryState: "DELIVERED",
    attempts: 1,
    lastResponse: "200",
    replay: "Eligible",
  },
  {
    event: "payroll_approval.requested",
    deliveryState: "RETRY_SCHEDULED",
    attempts: 2,
    lastResponse: "503",
    replay: "—",
  },
  {
    event: "integration_sync.failed",
    deliveryState: "FAILED_FINAL",
    attempts: 5,
    lastResponse: "Timeout",
    replay: "Eligible",
  },
];

export default function ZoikoPayrollWebhooksSection() {
  const getBadgeStyle = (state: WebhookRow["deliveryState"]) => {
    switch (state) {
      case "DELIVERED":
        return "bg-[#E6F4EA] text-[#137333]";
      case "RETRY_SCHEDULED":
        return "bg-[#FEF7E0] text-[#B06000]";
      case "FAILED_FINAL":
        return "bg-[#FDE8E8] text-red-600";
      default:
        return "bg-slate-800 text-slate-300";
    }
  };

  const getDotStyle = (state: WebhookRow["deliveryState"]) => {
    switch (state) {
      case "DELIVERED":
        return "bg-[#137333]";
      case "RETRY_SCHEDULED":
        return "bg-[#B06000]";
      case "FAILED_FINAL":
        return "bg-red-600";
      default:
        return "bg-slate-400";
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-20 px-4 sm:px-6 lg:px-8 text-white bg-gradient-to-b from-[#08132B] via-[#0B1F3F] to-[#0A1830]">
      {/* Background Glow Overlay */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #3F7DFF 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#3F7DFF] uppercase">
            <span className="w-4 h-[2px] bg-[#3F7DFF] inline-block" />
            <span>ZOIKO PAYROLL WEBHOOKS</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-white leading-tight">
            React to payroll events from documented delivery contracts
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Discover approved events, verify authenticity, process deliveries
            safely, handle retries and duplicates, replay eligible events, and
            monitor failures.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button className="w-full sm:w-auto px-6 py-3 bg-[#38A5E4] hover:bg-[#2F93CD] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-colors cursor-pointer">
              Explore webhook events
            </button>
            <button className="w-full sm:w-auto px-6 py-3 bg-[#112B4A]/60 hover:bg-[#183960] border border-slate-700/60 text-slate-200 font-medium text-xs sm:text-sm rounded-xl backdrop-blur-xs flex items-center justify-center gap-2 transition-colors cursor-pointer">
              <span>integration support</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Dashboard / Table Container */}
        <div className="bg-[#FFFFFF0D] backdrop-blur-md rounded-2xl border border-slate-700/50 p-4 sm:p-6 shadow-2xl space-y-4">
          {/* Top Bar Header Tags */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-[#FFFFFF14] border border-slate-700/60 text-slate-300">
                Contract v2.3
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#FFFFFF14] border border-slate-700/60 text-slate-300">
                Environment: Production
              </span>
            </div>
            <span className="text-[#FFFFFFCC] bg-[#FFFFFF14] rounded-[20px] p-2 text-[11px] sm:text-xs">
              Docs verified Aug 15, 2026
            </span>
          </div>

          {/* Webhooks Data Table */}
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left border-collapse font-mono">
              <thead>
                <tr className="border-b border-slate-800 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  <th className="pb-3 px-3">EVENT</th>
                  <th className="pb-3 px-3">DELIVERY STATE</th>
                  <th className="pb-3 px-3">ATTEMPTS</th>
                  <th className="pb-3 px-3">LAST RESPONSE</th>
                  <th className="pb-3 px-3 text-right">REPLAY</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs">
                {webhookData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="py-4 px-3 font-medium text-slate-200">
                      {row.event}
                    </td>
                    <td className="py-4 px-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold ${getBadgeStyle(
                          row.deliveryState,
                        )}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${getDotStyle(
                            row.deliveryState,
                          )}`}
                        />
                        {row.deliveryState}
                      </span>
                    </td>
                    <td className="py-4 px-3 text-slate-300">{row.attempts}</td>
                    <td className="py-4 px-3 text-slate-300">
                      {row.lastResponse}
                    </td>
                    <td className="py-4 px-3 text-right text-slate-300">
                      {row.replay}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
