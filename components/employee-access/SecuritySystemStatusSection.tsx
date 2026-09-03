"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";

interface StatusBadge {
  label: string;
  className: string;
}

interface SituationRoute {
  situation: string;
  route: string;
  href?: string;
}

const statusBadges: StatusBadge[] = [
  {
    label: "Operational",
    className: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    label: "Confirmed Incident",
    className: "bg-[#FCE8E6] text-[#C5221F]",
  },
  {
    label: "Unknown",
    className: "bg-white text-slate-700 border border-slate-200/80",
  },
];

const situationRoutes: SituationRoute[] = [
  {
    situation: "Global platform issue",
    route: "System Status",
    href: "#",
  },
  {
    situation: "Personal account issue only",
    route: "Secure account / Recover access",
    href: "#",
  },
  {
    situation: "Suspected compromise or phishing",
    route: "Priority security escalation",
    href: "#",
  },
  {
    situation: "Employer SSO or identity-provider issue",
    route: "Contact employer IT",
    href: "#",
  },
  {
    situation: "Former employee, access concern",
    route: "Former employee route",
    href: "#",
  },
];

export default function SecuritySystemStatusSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[1px] text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>SECURITY & SYSTEM STATUS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-[1px] text-[#07243B] leading-tight">
            Unknown status is never shown as Operational
          </h2>

          {/* Status Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            {statusBadges.map((badge, idx) => (
              <span
                key={idx}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-[1px] ${badge.className}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* Red Accent Warning Callout */}
        <div className="relative bg-white rounded-2xl border-l-4 border-l-[#A14842] border border-slate-200/80 p-6 sm:p-7 shadow-2xs overflow-hidden flex items-start gap-3">
          {/* Red Accent Bar */}
          <div className="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-600 leading-relaxed tracking-[1px]">
            <span className="inline-flex items-center gap-1.5 font-bold text-[#07243B] shrink-0">
              <AlertTriangle className="w-4 h-4 text-[#07243B]" />
              Report immediately if you notice:
            </span>
            <span>
              a suspicious email or SMS, an unexpected password or MFA prompt,
              suspected account compromise, an unknown bank or payroll change,
              or a lost device.
            </span>
          </div>
        </div>

        {/* Situation / Route Table */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
          {/* Table Header */}
          <div className="bg-[#EBF3FA] px-6 sm:px-8 py-3.5 flex items-center justify-between border-b border-slate-200/60 text-[11px] font-bold uppercase tracking-[1px] font-mono text-[#07243B]">
            <div>SITUATION</div>
            <div>ROUTE</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-100">
            {situationRoutes.map((item, idx) => (
              <div
                key={idx}
                className="px-6 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50/60 transition-colors"
              >
                <span className="text-xs sm:text-sm font-medium text-slate-600 tracking-[1px]">
                  {item.situation}
                </span>
                <a
                  href={item.href || "#"}
                  className="text-xs sm:text-sm font-bold text-[#0A8FD0] hover:underline shrink-0 tracking-[1px]"
                >
                  {item.route}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            type="button"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#07243B] font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl border border-slate-200/80 shadow-2xs transition-all tracking-[1px]"
          >
            Check system status
          </button>
          <button
            type="button"
            className="w-full sm:w-auto bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:bg-[#087CB7] text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-2xl shadow-sm transition-all tracking-[1px]"
          >
            Contact support
          </button>
        </div>
      </div>
    </section>
  );
}
