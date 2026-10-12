"use client";

import React from "react";

const statusStyles = {
  current: { label: "Current", bg: "bg-[#E3F0E7]", text: "text-[#20502F]" },
  addition: {
    label: "Planned addition",
    bg: "bg-[#E7EDFD]",
    text: "text-[#0A78C3]",
  },
  replacement: {
    label: "Planned replacement",
    bg: "bg-[#F1EAD8]",
    text: "text-[#B45309]",
  },
  removed: { label: "Removed", bg: "bg-[#F1F5F9]", text: "text-[#475569]" },
} as const;

const rows = [
  {
    provider: "Northbridge Cloud",
    entity: "Northbridge Cloud Services Ltd.",
    purpose: "Infrastructure hosting",
    location: "Ireland",
    effective: "Mar 2024",
    status: statusStyles.current,
  },
  {
    provider: "Ledgerline Analytics",
    entity: "Ledgerline Analytics B.V.",
    purpose: "Payroll reporting support",
    location: "Netherlands",
    effective: "Nov 2024",
    status: statusStyles.current,
  },
  {
    provider: "Correo Comms",
    entity: "Correo Communications Inc.",
    purpose: "Transactional email delivery",
    location: "United States",
    effective: "Aug 2025",
    status: statusStyles.addition,
  },
  {
    provider: "Vantage Identity",
    entity: "Vantage Identity Systems Ltd.",
    purpose: "Identity verification",
    location: "United Kingdom",
    effective: "Replacing Sep 2026",
    status: statusStyles.replacement,
  },
  {
    provider: "Harbor Print Services",
    entity: "Harbor Print Services LLC",
    purpose: "Physical statement fulfilment",
    location: "United States",
    effective: "Removed Jan 2026",
    status: statusStyles.removed,
  },
] as const;

export default function CurrentRegistrySection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#0A78C3]" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A78C3] sm:text-xs">
            CURRENT SUBPROCESSORS REGISTRY
          </span>
        </div>
        <h2 className="mt-3 max-w-3xl text-center text-2xl font-extrabold tracking-tight text-[#0B192C] sm:text-3xl md:text-[34px]">
          The primary registry — synthetic example data
        </h2>
        <p className="mt-3 max-w-2xl text-center text-xs leading-relaxed text-[#64748B] sm:text-sm">
          Core fields on every row. Expand a provider for role, data-category
          summary, verified hosting and change-history links.
        </p>

        {/* Registry card */}
        <div className="mt-12 w-full overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0px_30px_70px_0px_rgba(10,40,65,0.14)]">
          <div className="flex items-center gap-3.5 border-b border-[#E2E8F0] bg-[#F5F8FA] px-5 py-3.5">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#CBD5E1]" />
              <span className="h-2 w-2 rounded-full bg-[#CBD5E1]" />
              <span className="h-2 w-2 rounded-full bg-[#CBD5E1]" />
            </div>
            <span className="text-sm font-bold text-[#64748B]">
              Current Subprocessors — synthetic example
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] text-left text-xs sm:text-[13px]">
              <thead>
                <tr className="border-b border-[#E2E8F0] font-bold uppercase tracking-wider text-[#94A3B8]">
                  <th className="px-6 py-3.5">Provider / brand</th>
                  <th className="px-4 py-3.5">Legal entity</th>
                  <th className="px-4 py-3.5">Purpose</th>
                  <th className="px-4 py-3.5">Processing location</th>
                  <th className="px-4 py-3.5">Effective date</th>
                  <th className="px-6 py-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {rows.map((row) => (
                  <tr
                    key={row.provider}
                    className="transition-colors hover:bg-slate-50/50"
                  >
                    <td className="px-6 py-4 font-bold text-[#0F172A]">
                      {row.provider}
                    </td>
                    <td className="px-4 py-4 text-[#334155]">{row.entity}</td>
                    <td className="px-4 py-4 text-[#334155]">{row.purpose}</td>
                    <td className="px-4 py-4 text-[#334155]">{row.location}</td>
                    <td className="px-4 py-4 text-[#334155]">
                      {row.effective}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-xs font-bold ${row.status.bg} ${row.status.text}`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {row.status.label}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-5 text-right">
            <button className="cursor-pointer text-sm font-bold text-[#0A78C3] hover:text-[#08608F]">
              View provider details →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
