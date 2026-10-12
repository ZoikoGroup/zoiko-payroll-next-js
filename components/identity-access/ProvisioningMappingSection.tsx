"use client";

import React from "react";
import Image from "next/image";

interface MappingRow {
  directoryGroup: string;
  zoikoRole: string;
  status: "Mapped" | "Unmatched" | "High-risk review";
}

const mappingData: MappingRow[] = [
  {
    directoryGroup: "Payroll-Admins",
    zoikoRole: "Payroll Administrator",
    status: "Mapped",
  },
  {
    directoryGroup: "HR-Ops",
    zoikoRole: "HR Operations",
    status: "Mapped",
  },
  {
    directoryGroup: "Finance-Leads",
    zoikoRole: "—",
    status: "Unmatched",
  },
  {
    directoryGroup: "Global-Admins",
    zoikoRole: "Super Admin",
    status: "High-risk review",
  },
];

const lifecycleTags = [
  { label: "Create", color: "bg-slate-100 text-slate-700" },
  { label: "Update", color: "bg-slate-100 text-slate-700" },
  { label: "Group add/remove", color: "bg-slate-100 text-slate-700" },
  { label: "Suspend", color: "bg-[#FEF6E6] text-amber-700" },
  { label: "Deactivate", color: "bg-[#FDE8E8] text-red-600" },
  { label: "Delete", color: "bg-[#FDE8E8] text-red-600" },
  { label: "Rehire / reactivate", color: "bg-[#E8F0FE] text-[#1A73E8]" },
  { label: "Provisioning failure", color: "bg-[#FDE8E8] text-red-600" },
];

export default function ProvisioningMappingSection() {
  const getBadgeStyle = (status: MappingRow["status"]) => {
    switch (status) {
      case "Mapped":
        return "bg-[#E6F4EA] text-[#137333]";
      case "Unmatched":
        return "bg-[#FEF7E0] text-[#B06000]";
      case "High-risk review":
        return "bg-[#FDE8E8] text-red-600";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const getDotStyle = (status: MappingRow["status"]) => {
    switch (status) {
      case "Mapped":
        return "bg-[#137333]";
      case "Unmatched":
        return "bg-[#B06000]";
      case "High-risk review":
        return "bg-red-600";
      default:
        return "bg-slate-400";
    }
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[3/3] h-full w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/footer-integrations/39.png"
                alt="Workspace with monitors displaying system logs and airplane models overhead"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column - Content & Interactive UI */}
          <div className="lg:col-span-6 space-y-6">
            {/* Header Block */}
            <div className="space-y-3">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
                <span className="w-4 h-[2px] bg-[#0A8FD0] inline-block" />
                <span>PROVISIONING & MAPPING</span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
                Mapping is minimum-necessary, always versioned
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              HRIS fields never become security authority without governance.
            </p>

            {/* Lifecycle Action Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {lifecycleTags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-full text-[11px] font-medium ${tag.color}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Browser Mockup Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden mt-4">
              {/* Window Bar / Top Bar */}
              <div className="bg-[#F8FAFC] px-6 py-3 border-b border-slate-100 flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <span className="text-[11px] text-slate-400 font-normal ml-2">
                  Role mapping — v6
                </span>
              </div>

              {/* Table Data */}
              <div className="p-4 sm:p-6 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <th className="pb-3 px-3">DIRECTORY GROUP</th>
                      <th className="pb-3 px-3">ZOIKO ROLE</th>
                      <th className="pb-3 px-3 text-right">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                    {mappingData.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="py-3.5 px-3 font-medium text-slate-600">
                          {row.directoryGroup}
                        </td>
                        <td className="py-3.5 px-3 font-bold text-[#07243B]">
                          {row.zoikoRole}
                        </td>
                        <td className="py-3.5 px-3 text-right">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold ${getBadgeStyle(
                              row.status,
                            )}`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${getDotStyle(
                                row.status,
                              )}`}
                            />
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Blue Callout Box */}
            <div className="bg-[#E6F0FA] p-4 sm:p-5 border-l-4 border-[#0A8FD0] shadow-xs">
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Unmatched groups route to review or no access — never a silent
                default grant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
