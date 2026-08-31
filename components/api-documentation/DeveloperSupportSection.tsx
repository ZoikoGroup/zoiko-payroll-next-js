"use client";

import React from "react";

interface SupportRoute {
  issue: string;
  route: string;
}

const supportRoutes: SupportRoute[] = [
  {
    issue: "Endpoint usage question",
    route: "Reference / Quickstart",
  },
  {
    issue: "Unresolved error",
    route: "Error docs → Integration Support",
  },
  {
    issue: "API appears unavailable",
    route: "System Status / Support",
  },
  {
    issue: "Credential or scope failure",
    route: "Secure API / Integration Support",
  },
  {
    issue: "Need a new capability",
    route: "Fit / request process",
  },
  {
    issue: "Webhook event question",
    route: "Webhooks documentation",
  },
  {
    issue: "Security or procurement review",
    route: "Approved security review",
  },
];

export default function DeveloperSupportSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Centered Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>DEVELOPER SUPPORT</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
            Every situation has one correct route
          </h2>
        </div>

        {/* Support Table Container */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#EBF2F9] border-b border-slate-200/80 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                  <th className="py-3.5 px-6">WHAT YOU'RE SEEING</th>
                  <th className="py-3.5 px-6">ROUTE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {supportRoutes.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="py-3.5 px-6 text-slate-600 font-medium">
                      {row.issue}
                    </td>
                    <td className="py-3.5 px-6 font-semibold text-[#0A8FD0]">
                      <a href="#" className="hover:underline">
                        {row.route}
                      </a>
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
