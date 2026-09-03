"use client";

import React from "react";
import Image from "next/image";

interface ChecklistItem {
  label: string;
  status: string;
  statusClass: string;
}

const closeChecklistData: ChecklistItem[] = [
  {
    label: "Reconciliation complete",
    status: "Passed",
    statusClass: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    label: "Readiness gates",
    status: "Passed",
    statusClass: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    label: "Reopen request",
    status: "None",
    statusClass: "bg-slate-100 text-slate-600",
  },
];

const employeeAccessData = [
  "Invite employee",
  "Reset / re-enable access",
  "Document publication",
  "Former-employee access policy",
];

export default function CloseAuditReportsSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Split Layout: Heading + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[1px] text-[#0A8FD0] uppercase font-mono">
              <span>/</span>
              <span>CLOSE, AUDIT, REPORTS & EMPLOYEE ACCESS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[32px] font-bold tracking-[1px] text-[#07243B] leading-tight">
              Reopening a closed period is controlled, never casual
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed tracking-[1px] max-w-xl">
              Close support covers reconciliation, readiness gates and
              controlled reopen with evidence. Reports carry their definition,
              version, period, currency and source lineage.
            </p>
          </div>

          {/* Right Team Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[16/10] sm:aspect-[9/9] rounded-2xl overflow-hidden">
              <Image
                src="/images/admin/2.png"
                alt="Team reviewing audit data and reports on tablets and laptops"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>

        {/* Middle Two Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Close checklist */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs space-y-6">
            <h3 className="text-sm font-bold tracking-[1px] text-[#07243B]">
              Close checklist
            </h3>

            <div className="divide-y divide-slate-100">
              {closeChecklistData.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4 text-xs sm:text-sm"
                >
                  <span className="font-semibold text-[#07243B] tracking-[1px]">
                    {item.label}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-3 py-1 rounded-full shrink-0 tracking-[1px] ${item.statusClass}`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Employee access admin */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs space-y-6">
            <h3 className="text-sm font-bold tracking-[1px] text-[#07243B]">
              Employee access admin
            </h3>

            <div className="divide-y divide-slate-100">
              {employeeAccessData.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-0 last:pb-0 text-xs sm:text-sm font-semibold text-[#07243B] tracking-[1px]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Callout Note */}
        <div className="bg-white rounded-xl border-l-4 border-l-[#0A8FD0] border border-slate-200/80 p-4 sm:p-5 shadow-2xs flex items-center gap-4">
          <p className="text-xs text-slate-600 font-medium tracking-[1px] leading-relaxed">
            <strong className="font-bold text-[#07243B]">Never exposed:</strong>{" "}
            employee passwords, MFA secrets or unrelated personal information —
            even to authorized administrators through this support surface.
          </p>
        </div>
      </div>
    </section>
  );
}
