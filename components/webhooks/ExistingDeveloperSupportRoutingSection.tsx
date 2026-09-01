"use client";

import React from "react";

interface RoutingRow {
  issue: string;
  routeTo: string;
}

const routingData: RoutingRow[] = [
  {
    issue: "Subscription questions",
    routeTo: "Quickstart / Reference",
  },
  {
    issue: "Signature failures",
    routeTo: "Signing docs → Integration Support",
  },
  {
    issue: "Retry questions",
    routeTo: "Delivery logs / retry docs",
  },
  {
    issue: "Missed events",
    routeTo: "Replay / Integration Support",
  },
  {
    issue: "Endpoint unavailable",
    routeTo: "Integration Support / System Status",
  },
  {
    issue: "Security exposure",
    routeTo: "Approved secure route",
  },
];

export default function ExistingDeveloperSupportRoutingSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label using specified color #2F6FED */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
            <span className="w-4 h-[2px] bg-[#2F6FED] inline-block" />
            <span>EXISTING DEVELOPER SUPPORT ROUTING</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
            Incidents route to Integration Support — never to sales
          </h2>
        </div>

        {/* Support Routing Table Container Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="p-4 sm:p-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="pb-3 px-3 w-1/2">ISSUE</th>
                  <th className="pb-3 px-3 w-1/2">ROUTE TO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {routingData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    {/* Issue Column */}
                    <td className="py-4 px-3 font-medium text-slate-700 text-xs sm:text-sm">
                      {row.issue}
                    </td>

                    {/* Route To Column */}
                    <td className="py-4 px-3 text-slate-500 text-xs sm:text-sm">
                      {row.routeTo}
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
