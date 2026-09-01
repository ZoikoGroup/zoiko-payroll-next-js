"use client";

import React from "react";
import Image from "next/image";

interface StatusBadge {
  label: string;
  badgeBg: string;
  textColor: string;
  border?: string;
}

const exceptionSeverityBadges: StatusBadge[] = [
  {
    label: "Blocking",
    badgeBg: "bg-rose-100/70",
    textColor: "text-rose-800",
  },
  {
    label: "Payroll review",
    badgeBg: "bg-amber-100/70",
    textColor: "text-amber-800",
  },
  {
    label: "Integration review",
    badgeBg: "bg-amber-100/70",
    textColor: "text-amber-800",
  },
  {
    label: "Warning",
    badgeBg: "bg-white",
    textColor: "text-slate-700",
    border: "border border-slate-200/80",
  },
  {
    label: "Informational",
    badgeBg: "bg-white",
    textColor: "text-slate-700",
    border: "border border-slate-200/80",
  },
];

const reconciliationStatusBadges: StatusBadge[] = [
  {
    label: "Balanced",
    badgeBg: "bg-emerald-100/80",
    textColor: "text-emerald-800",
  },
  {
    label: "Balanced with approved exceptions",
    badgeBg: "bg-emerald-100/80",
    textColor: "text-emerald-800",
  },
  {
    label: "Unbalanced",
    badgeBg: "bg-rose-100/70",
    textColor: "text-rose-800",
  },
  {
    label: "Not applicable",
    badgeBg: "bg-white",
    textColor: "text-slate-700",
    border: "border border-slate-200/80",
  },
];

export default function ValidationExceptionsSection() {
  return (
    <section className="w-full bg-[#EDF4FA] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/footer-integrations/19.png"
                alt="Business team reviewing readiness dashboard and analytics"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>VALIDATION, EXCEPTIONS & RECONCILIATION</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#0F172A] leading-tight">
              A readiness dashboard — not a successful–transfer indicator
            </h2>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-[17px] text-[#5B646B] leading-relaxed max-w-xl">
              Validation runs across seven stages: source readiness, identity,
              time integrity, mapping, period, control totals and post-apply.
              Checks cover approval/finalization state,
              worker/assignment/entity/pay group,
              duration/duplicate/zone/overlap conditions, time and pay codes,
              leave and labor dimensions, and payroll period, cutoff or closed
              state.
            </p>
          </div>
        </div>

        {/* Middle Status Groups */}
        <div className="space-y-8 text-center pt-4">
          {/* Exception Severity */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#0F172A]">
              Exception severity
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {exceptionSeverityBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold shadow-2xs ${
                    badge.badgeBg
                  } ${badge.textColor} ${badge.border || ""}`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Reconciliation Status */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#0F172A]">
              Reconciliation status
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {reconciliationStatusBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold shadow-2xs ${
                    badge.badgeBg
                  } ${badge.textColor} ${badge.border || ""}`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Data Table & Footer Note */}
        <div className="space-y-3">
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#E9F0F8] text-[#0A3254] font-bold text-[10px] uppercase tracking-wider border-b border-slate-200/60">
                    <th className="py-3.5 px-6">SOURCE COUNT</th>
                    <th className="py-3.5 px-6">RECEIVED</th>
                    <th className="py-3.5 px-6">VALIDATED</th>
                    <th className="py-3.5 px-6">PAYROLL READY</th>
                    <th className="py-3.5 px-6">EXCEPTIONS</th>
                    <th className="py-3.5 px-6">STATUS</th>
                  </tr>
                </thead>
                <tbody className="text-[#0F172A] font-medium">
                  <tr>
                    <td className="py-4 px-6">842</td>
                    <td className="py-4 px-6">842</td>
                    <td className="py-4 px-6">839</td>
                    <td className="py-4 px-6">836</td>
                    <td className="py-4 px-6">3</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-3 py-1 bg-emerald-100/80 text-emerald-800 text-[11px] font-semibold rounded-full">
                        Balanced with approved exceptions
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Subtext Disclaimer */}
          <p className="text-[11px] text-slate-400 text-center">
            Synthetic reconciliation data shown for illustration only.
          </p>
        </div>
      </div>
    </section>
  );
}
