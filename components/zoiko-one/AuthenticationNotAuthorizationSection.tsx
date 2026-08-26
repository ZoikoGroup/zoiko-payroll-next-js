"use client";

import React from "react";
import { X, Check } from "lucide-react";

// Connection data table rows
const CONNECTIONS = [
  {
    source: "Identity provider",
    destination: "Zoiko Payroll",
    relationshipType: "Identity context",
    direction: "Inbound",
    state: "Active",
    isActive: true,
  },
  {
    source: "Workforce system",
    destination: "Zoiko Payroll",
    relationshipType: "Workforce context",
    direction: "Inbound",
    state: "Not currently verified",
    isActive: false,
  },
  {
    source: "Zoiko Payroll",
    destination: "Finance system",
    relationshipType: "Finance context",
    direction: "Outbound",
    state: "Not currently verified",
    isActive: false,
  },
  {
    source: "Zoiko Payroll",
    destination: "Approved recipient",
    relationshipType: "Reporting context",
    direction: "Outbound",
    state: "Not currently verified",
    isActive: false,
  },
];

export default function AuthenticationNotAuthorizationSection() {
  return (
    <section className="w-full bg-[#f4f8fb] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>IDENTITY, DATA & WORKFLOW PATHWAYS</span>
          </div>

          <h2 className="text-3xl md:text-[32px] font-bold text-[#0A1928] leading-tight">
            Authentication is not authorization.
          </h2>
        </div>

        {/* Top Warning & Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Red/Pink Alert Card */}
          <div className="bg-[#FEF2F2] border border-[#FCA5A5]/40 rounded-2xl p-6 space-y-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#DC2626]">
              <X className="w-4 h-4 stroke-[2.5]" />
              <span>SHARED IDENTITY DOES NOT MEAN</span>
            </div>
            <p className="text-xs sm:text-sm text-[#7F1D1D]/80 leading-relaxed">
              Shared or single sign-on access does not imply shared payroll
              authorization, shared data access, or bypassed payroll controls.
            </p>
          </div>

          {/* Green Info Card */}
          <div className="bg-white border border-[#E1E8ED] rounded-2xl p-6 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#16A34A]">
              <Check className="w-4 h-4 stroke-[2.5]" />
              <span>WHAT A VERIFIED CONNECTION SHOWS</span>
            </div>
            <p className="text-xs sm:text-sm text-[#5C6E7E] leading-relaxed">
              Source, destination, relationship type, direction and current
              active state &mdash; for every connection, individually.
            </p>
          </div>
        </div>

        {/* Data Table Container */}
        <div className="bg-white border border-[#E1E8ED] rounded-2xl shadow-xs overflow-hidden pt-1">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-[#E1E8ED] text-[11px] font-bold tracking-wider uppercase text-[#5C6E7E]">
                  <th className="py-3.5 px-6">SOURCE</th>
                  <th className="py-3.5 px-6">DESTINATION</th>
                  <th className="py-3.5 px-6">RELATIONSHIP TYPE</th>
                  <th className="py-3.5 px-6">DIRECTION</th>
                  <th className="py-3.5 px-6">STATE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E1E8ED] text-xs sm:text-sm text-[#0A1928]">
                {CONNECTIONS.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#F8FAFC]/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium">{item.source}</td>
                    <td className="py-4 px-6 font-medium">
                      {item.destination}
                    </td>
                    <td className="py-4 px-6 text-[#5C6E7E]">
                      {item.relationshipType}
                    </td>
                    <td className="py-4 px-6 text-[#5C6E7E]">
                      {item.direction}
                    </td>
                    <td className="py-4 px-6">
                      {item.isActive ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] text-xs font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                          {item.state}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1F5F9] text-[#64748B] text-xs font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]" />
                          {item.state}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table Footer Text */}
        <p className="text-xs text-[#5C6E7E]">
          Only active, scoped relationship records render here. Product-specific
          mechanics are documented in Product &gt; Zoiko One Integration.
        </p>
      </div>
    </section>
  );
}
