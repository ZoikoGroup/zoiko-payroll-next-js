"use client";

import React, { useState } from "react";

export default function RegionAvailabilityRegistrySection() {
  const [activeTab, setActiveTab] = useState(0); // Default to 'All services' matching image state

  const tabs = [
    { label: "All services", bg: "bg-[#07243B] text-white", inactiveBg: "bg-[#E9F0F8] text-[#155A8A]" },
    { label: "Payroll Workspace", bg: "bg-[#07243B] text-white", inactiveBg: "bg-[#E9F0F8] text-[#155A8A]" },
    { label: "Records & Reports", bg: "bg-[#07243B] text-white", inactiveBg: "bg-[#E9F0F8] text-[#155A8A]" },
    { label: "API", bg: "bg-[#07243B] text-white", inactiveBg: "bg-[#E9F0F8] text-[#155A8A]" },
  ];

  const tableData = [
    {
      region: "EU / EEA",
      scope: "Payroll Workspace",
      storage: "EU region",
      processing: "EU region",
      status: "Available",
      statusStyle: "bg-[#E3EFE6] text-[#3F6B54]",
      reviewed: "Aug 2026",
    },
    {
      region: "United Kingdom",
      scope: "Payroll Workspace",
      storage: "UK region",
      processing: "UK & EU region",
      status: "Contract-specific",
      statusStyle: "bg-[#E9F0F8] text-[#155A8A]",
      reviewed: "Aug 2026",
    },
    {
      region: "North America",
      scope: "Records & Reports",
      storage: "US region",
      processing: "US region",
      status: "Limited availability",
      statusStyle: "bg-[#F3E9CC] text-[#8C6D2F]",
      reviewed: "Jul 2026",
    },
    {
      region: "Asia-Pacific",
      scope: "Payroll Workspace",
      storage: "Not committed",
      processing: "Not committed",
      status: "Planned — not committed",
      statusStyle: "bg-[#E9F0F8] text-[#8592A0]",
      reviewed: "Jul 2026",
    },
  ];

  return (
    <div className="w-full bg-[#F9FAFB] text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto space-y-10 text-center">
        
        {/* Header Block */}
        <div className="space-y-4 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A8FD0] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A8FD0]">/</span>
              REGION AVAILABILITY REGISTRY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            Verified profiles only <span className="text-slate-400 font-bold">—</span> never a flag as legal status
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-[8px] text-xs font-bold transition-all cursor-pointer ${
                activeTab === idx ? "bg-[#07243B] text-white shadow-xs" : `${tab.inactiveBg} hover:opacity-100 opacity-90`
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Registry Table Card Container */}
        <div className="bg-white border border-slate-200/80 rounded-3xl shadow-xs overflow-hidden text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-[#E9F0F8] border-slate-100 text-[10px] sm:text-[11px] font-extrabold text-[#0A3254] tracking-wider">
                  <th className="py-4 px-6 uppercase">Region / Jurisdiction</th>
                  <th className="py-4 px-6 uppercase">Service Scope</th>
                  <th className="py-4 px-6 uppercase">Primary Storage</th>
                  <th className="py-4 px-6 uppercase">Processing</th>
                  <th className="py-4 px-6 uppercase">Availability</th>
                  <th className="py-4 px-6 uppercase">Last Reviewed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium text-[#07243B]">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-extrabold">{row.region}</td>
                    <td className="py-4 px-6 text-slate-600">{row.scope}</td>
                    <td className="py-4 px-6 text-slate-600">{row.storage}</td>
                    <td className="py-4 px-6 text-slate-600">{row.processing}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${row.statusStyle}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-500">{row.reviewed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </section>
    </div>
  );
}