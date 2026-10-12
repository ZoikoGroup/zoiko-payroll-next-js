"use client";

import React from "react";
import { Check } from "lucide-react";

interface StatusCardProps {
  title: string;
  description: string;
}

interface AuditRow {
  identitySource: string;
  role: string;
  entitlementSource: string;
  lastChange: string;
  reviewState: "Current" | "Review due" | "Exception";
}

const statusCards: StatusCardProps[] = [
  {
    title: "Connected",
    description: "All subsystems healthy.",
  },
  {
    title: "Federation healthy / provisioning down",
    description: "Independent subsystem states.",
  },
  {
    title: "Attention needed",
    description: "Named exception, named owner.",
  },
  {
    title: "Paused",
    description: "Intentionally suspended sync.",
  },
  {
    title: "Disconnected",
    description: "No active trust relationship.",
  },
  {
    title: "Stale evidence",
    description: "Claims downgraded automatically.",
  },
];

const auditData: AuditRow[] = [
  {
    identitySource: "okta:e-40213",
    role: "Payroll Administrator",
    entitlementSource: "Payroll-Admins",
    lastChange: "Aug 12",
    reviewState: "Current",
  },
  {
    identitySource: "okta:e-40288",
    role: "HR Operations",
    entitlementSource: "HR-Ops",
    lastChange: "Aug 18",
    reviewState: "Review due",
  },
  {
    identitySource: "okta:e-40301",
    role: "Super Admin",
    entitlementSource: "Global-Admins",
    lastChange: "Aug 20",
    reviewState: "Exception",
  },
];

export default function AccessReviewConnectionHealthSection() {
  const getBadgeStyle = (state: AuditRow["reviewState"]) => {
    switch (state) {
      case "Current":
        return "bg-[#E6F4EA] text-[#137333]";
      case "Review due":
        return "bg-[#FEF7E0] text-[#B06000]";
      case "Exception":
        return "bg-[#FDE8E8] text-red-600";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const getDotStyle = (state: AuditRow["reviewState"]) => {
    switch (state) {
      case "Current":
        return "bg-[#137333]";
      case "Review due":
        return "bg-[#B06000]";
      case "Exception":
        return "bg-red-600";
      default:
        return "bg-slate-400";
    }
  };

  return (
    <section className="w-full bg-[#0B1F3A] py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#8FB0FF] uppercase">
            <span className="w-4 h-[2px] bg-[#8FB0FF] inline-block" />
            <span>ACCESS REVIEW & CONNECTION HEALTH</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[38px] font-bold tracking-tight text-white leading-tight">
            Never a generic &quot;SSO connected&quot; badge
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Federation, provisioning, mapping and deprovisioning health stay distinct.
          </p>
        </div>

        {/* 6-Card Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {statusCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF0D] rounded-2xl p-5 border border-slate-700/50 space-y-1.5 backdrop-blur-xs"
            >
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#8FB0FF] shrink-0 mt-0.5 stroke-[2.5]" />
                <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
                  {card.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 pl-6 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Audit Lineage Window Mockup */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden text-slate-800">
          {/* Window Header */}
          <div className="bg-[#F8FAFC] px-6 py-3 border-b border-slate-100 flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            <span className="text-[11px] text-slate-400 font-normal ml-2">
              Access review — audit lineage
            </span>
          </div>

          {/* Table View */}
          <div className="p-4 sm:p-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="pb-3 px-3">IDENTITY SOURCE</th>
                  <th className="pb-3 px-3">ROLE</th>
                  <th className="pb-3 px-3">ENTITLEMENT SOURCE</th>
                  <th className="pb-3 px-3">LAST CHANGE</th>
                  <th className="pb-3 px-3 text-right">REVIEW STATE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {auditData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-3.5 px-3 font-medium text-slate-500 font-mono text-xs">
                      {row.identitySource}
                    </td>
                    <td className="py-3.5 px-3 font-bold text-[#07243B]">
                      {row.role}
                    </td>
                    <td className="py-3.5 px-3 text-slate-500">
                      {row.entitlementSource}
                    </td>
                    <td className="py-3.5 px-3 text-slate-500">
                      {row.lastChange}
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold ${getBadgeStyle(
                          row.reviewState
                        )}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${getDotStyle(
                            row.reviewState
                          )}`}
                        />
                        {row.reviewState}
                      </span>
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