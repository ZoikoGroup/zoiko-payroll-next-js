"use client";

import React from "react";
import { Clock, ChevronDown } from "lucide-react";

interface MetricCard {
  label: string;
  value: string;
  color?: string;
}

const metrics: MetricCard[] = [
  { label: "ENTITIES IN SCOPE", value: "12" },
  { label: "PAYROLLS ON TRACK", value: "8", color: "text-[#10B981]" },
  { label: "ACTION REQUIRED", value: "3", color: "text-[#EF4444]" },
  { label: "FUNDING DUE", value: "2", color: "text-[#D97706]" },
  { label: "AWAITING APPROVAL", value: "4" },
  { label: "CLOSED", value: "5" },
];

interface TableRowData {
  entity: string;
  jurisdiction: string;
  payGroups: number;
  runStatus: "On track" | "Action required" | "Awaiting approval";
  exceptions: number;
  owner: string;
  funding: "Ready" | "Due" | "Approval due" | "Bank file pending";
  nextCutoff: string;
}

const tableData: TableRowData[] = [
  {
    entity: "Example Holdings UK Ltd",
    jurisdiction: "United Kingdom",
    payGroups: 2,
    runStatus: "On track",
    exceptions: 0,
    owner: "S. Ahmed",
    funding: "Ready",
    nextCutoff: "Sep 5",
  },
  {
    entity: "Example Holdings US Inc",
    jurisdiction: "United States",
    payGroups: 3,
    runStatus: "Action required",
    exceptions: 2,
    owner: "M. Torres",
    funding: "Due",
    nextCutoff: "Sep 3",
  },
  {
    entity: "Example Holdings GmbH",
    jurisdiction: "Germany",
    payGroups: 1,
    runStatus: "On track",
    exceptions: 0,
    owner: "L. Becker",
    funding: "Ready",
    nextCutoff: "Sep 8",
  },
  {
    entity: "Example Holdings Pte Ltd",
    jurisdiction: "Singapore",
    payGroups: 1,
    runStatus: "Awaiting approval",
    exceptions: 1,
    owner: "J. Tan",
    funding: "Approval due",
    nextCutoff: "Sep 6",
  },
  {
    entity: "Example Holdings SA (Pty) Ltd",
    jurisdiction: "South Africa",
    payGroups: 1,
    runStatus: "Action required",
    exceptions: 1,
    owner: "N. Dlamini",
    funding: "Bank file pending",
    nextCutoff: "Sep 4",
  },
];

interface CriticalAction {
  title: string;
  subtitle: string;
}

const criticalActions: CriticalAction[] = [
  {
    title: "Approve funding — US Inc",
    subtitle: "Due Sep 2 · Finance Approver",
  },
  {
    title: "Resolve 2 exceptions — US Inc",
    subtitle: "Due Sep 2 · Entity Payroll Manager",
  },
  {
    title: "Confirm bank file — SA (Pty) Ltd",
    subtitle: "Due Sep 3 · Finance Approver",
  },
  {
    title: "Approve funding — Pte Ltd",
    subtitle: "Due Sep 4 · Group Payroll Director",
  },
];

export default function MultiEntityControlCenterSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>PRIMARY PRODUCT VISUAL</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] max-w-4xl mx-auto font-bold tracking-tight text-[#07243B] leading-tight">
            The Multi-Entity Control Center — group oversight, entity-level
            accountability
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mx-auto">
            Group users see consolidated status. They don&apos;t get
            unrestricted worker-level access into every entity.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
          {[
            { label: "Period", val: "This month" },
            { label: "Region", val: "All" },
            { label: "Jurisdiction", val: "All" },
            { label: "Legal Entity", val: "All" },
            { label: "Owner", val: "All" },
            { label: "Status", val: "All" },
            { label: "Delivery model", val: "All" },
          ].map((filter, i) => (
            <button
              key={i}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 font-medium shadow-2xs flex items-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <span>
                {filter.label}:{" "}
                <span className="font-semibold text-slate-900">
                  {filter.val}
                </span>
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
          ))}
        </div>

        {/* 6 Metric KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {metrics.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs space-y-1"
            >
              <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                {card.label}
              </div>
              <div
                className={`text-xl sm:text-2xl font-bold ${card.color || "text-[#07243B]"}`}
              >
                {card.value}
              </div>
            </div>
          ))}
        </div>

        {/* Red Alert Callout */}
        <div className="bg-[#F6E4E3] border border-red-200/60 rounded-xl p-3.5 flex items-center gap-2.5 text-xs text-[#991B1B] font-semibold">
          <Clock className="w-4 h-4 text-[#EF4444] shrink-0" />
          <span>3 entities require action before the next payroll cutoff.</span>
        </div>

        {/* Main Dashboard Layout: Table + Critical Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Table Column */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F5F8FA] border-b border-slate-200/80 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                    <th className="py-3 px-4">ENTITY</th>
                    <th className="py-3 px-4">JURISDICTION</th>
                    <th className="py-3 px-4 text-center">PAY GROUPS</th>
                    <th className="py-3 px-4">RUN STATUS</th>
                    <th className="py-3 px-4 text-center">EXCEPTIONS</th>
                    <th className="py-3 px-4">OWNER</th>
                    <th className="py-3 px-4">FUNDING</th>
                    <th className="py-3 px-4 text-right">NEXT CUTOFF</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium">
                  {tableData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/60 transition-colors"
                    >
                      <td className="py-3.5 px-4 font-bold text-[#07243B] max-w-[140px] leading-tight">
                        {row.entity}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500">
                        {row.jurisdiction}
                      </td>
                      <td className="py-3.5 px-4 text-center text-slate-600 font-semibold">
                        {row.payGroups}
                      </td>
                      <td className="py-3.5 px-4">
                        {row.runStatus === "On track" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#DCFCE7] text-[#166534] font-semibold text-[10.5px]">
                            On track
                          </span>
                        )}
                        {row.runStatus === "Action required" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#FEE2E2] text-[#991B1B] font-semibold text-[10.5px]">
                            Action required
                          </span>
                        )}
                        {row.runStatus === "Awaiting approval" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] font-semibold text-[10.5px]">
                            Awaiting approval
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center text-slate-600 font-semibold">
                        {row.exceptions}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        {row.owner}
                      </td>
                      <td className="py-3.5 px-4">
                        {row.funding === "Ready" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#DCFCE7] text-[#166534] font-semibold text-[10.5px]">
                            Ready
                          </span>
                        )}
                        {row.funding === "Due" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] font-semibold text-[10.5px]">
                            Due
                          </span>
                        )}
                        {row.funding === "Approval due" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] font-semibold text-[10.5px]">
                            Approval due
                          </span>
                        )}
                        {row.funding === "Bank file pending" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#DBEAFE] text-[#1E40AF] font-semibold text-[10.5px]">
                            Bank file pending
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-right text-slate-600 font-semibold whitespace-nowrap">
                        {row.nextCutoff}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Side: Critical Actions Sidebar */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              CRITICAL ACTIONS
            </h3>

            <div className="space-y-3">
              {criticalActions.map((action, idx) => (
                <div
                  key={idx}
                  className="bg-[#F5F8FA] border-l-4 border-l-[#EF4444] rounded-r-xl p-3.5 space-y-1 hover:bg-slate-100/80 transition-colors cursor-pointer"
                >
                  <div className="text-xs font-bold text-[#07243B]">
                    {action.title}
                  </div>
                  <div className="text-[10.5px] text-slate-400 font-medium">
                    {action.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Fine Print */}
        <div className="text-center">
          <p className="text-[10.5px] text-slate-400 font-medium">
            Consolidated status does not replace entity-level payroll records,
            approvals or statutory obligations. Synthetic data shown for
            illustration.
          </p>
        </div>
      </div>
    </section>
  );
}
