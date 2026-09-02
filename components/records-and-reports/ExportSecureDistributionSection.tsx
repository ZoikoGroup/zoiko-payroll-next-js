"use client";

import React from "react";

interface ExportGovernanceRow {
  id: string;
  method: string;
  governance: string;
}

const exportData: ExportGovernanceRow[] = [
  {
    id: "1",
    method: "Interactive preview",
    governance:
      "Permission checked, sensitive fields masked, nothing sensitive in URLs",
  },
  {
    id: "2",
    method: "Direct download",
    governance:
      "Generated from scoped data in supported formats; every download logged",
  },
  {
    id: "3",
    method: "Asynchronous export",
    governance:
      "Queued job with status and expiry; permission re-checked at download; cancellable",
  },
  {
    id: "4",
    method: "Scheduled distribution",
    governance:
      "Named owner, versioned definition, validated recipients, logged delivery",
  },
  {
    id: "5",
    method: "API / integration",
    governance:
      "Service authorization, schema version, idempotency, rate limits, delivery receipts",
  },
  {
    id: "6",
    method: "Managed file transfer",
    governance:
      "Allowlisted destination, encryption, key rotation, acknowledgement and retry policy",
  },
];

export default function ExportSecureDistributionSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span className="text-[#0A8FD0] font-bold">/</span>
            <span>EXPORT & SECURE DISTRIBUTION</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#07243B] leading-tight">
            A security boundary — never just a Download CSV button
          </h2>
        </div>

        {/* Governance Table Card */}
        <div className="bg-white rounded-2xl border border-[#E1E8F0] overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#E9F0F8] border-b border-[#E1E8F0] text-[11px] font-bold tracking-wider text-slate-600 uppercase">
                  <th className="py-4 px-6 w-1/3">METHOD</th>
                  <th className="py-4 px-6 w-2/3">GOVERNANCE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E1E8F0] text-xs sm:text-sm font-medium">
                {exportData.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 text-slate-700 font-semibold">
                      {row.method}
                    </td>
                    <td className="py-4 px-6 text-[#0A8FD0] font-semibold leading-relaxed">
                      {row.governance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Highlight Callout Container */}
        <div className="bg-white rounded-xl border border-slate-200 border-l-4 border-l-[#0A8FD0] p-6 shadow-2xs">
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            <strong className="font-bold text-[#07243B]">
              Secure by default.
            </strong>{" "}
            Every export carries its title/definition version, scope, generation
            time and timezone, source payroll version, currency basis, status,
            sensitivity label and a unique export/reference ID. Authenticated
            portal delivery, expiring secure links and encrypted managed
            transfer are preferred — raw sensitive payroll attachments are never
            emailed by default.
          </p>
        </div>
      </div>
    </section>
  );
}
