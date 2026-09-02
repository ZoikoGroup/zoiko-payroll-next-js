"use client";

import React from "react";
import { Check, AlertTriangle, FileText } from "lucide-react";

interface GovernanceRow {
  role: string;
  scope: string;
  canApproveFunding: string;
  workerAccess: string;
}

const governanceData: GovernanceRow[] = [
  {
    role: "Group Payroll Director",
    scope: "Group-wide, status-only",
    canApproveFunding: "Escalation only",
    workerAccess: "No, by default",
  },
  {
    role: "Entity Payroll Manager",
    scope: "Single entity",
    canApproveFunding: "Yes, within threshold",
    workerAccess: "Within entity only",
  },
  {
    role: "Finance Approver",
    scope: "Entity or pay group",
    canApproveFunding: "Yes",
    workerAccess: "No",
  },
  {
    role: "Local HR / People Admin",
    scope: "Single entity",
    canApproveFunding: "No",
    workerAccess: "Within entity only",
  },
  {
    role: "Auditor / Reviewer",
    scope: "Group or entity, read-only",
    canApproveFunding: "No",
    workerAccess: "Read-only, scoped",
  },
];

interface FundingStatusCard {
  entity: string;
  currency: string;
  borderColor: string;
  items: {
    text: string;
    icon: React.ReactNode;
  }[];
}

const fundingCards: FundingStatusCard[] = [
  {
    entity: "Entity A — UK Ltd",
    currency: "Currency: GBP",
    borderColor: "border-l-[#10B981]",
    items: [
      {
        text: "Funding ready",
        icon: <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />,
      },
      {
        text: "Approval complete",
        icon: <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />,
      },
    ],
  },
  {
    entity: "Entity B — US Inc",
    currency: "Currency: USD",
    borderColor: "border-l-[#D97706]",
    items: [
      {
        text: "Funding due",
        icon: <AlertTriangle className="w-3.5 h-3.5 text-[#D97706] shrink-0" />,
      },
      {
        text: "Approval outstanding",
        icon: <AlertTriangle className="w-3.5 h-3.5 text-[#D97706] shrink-0" />,
      },
    ],
  },
  {
    entity: "Entity C — GmbH (DE)",
    currency: "Currency: EUR",
    borderColor: "border-l-[#0A8FD0]",
    items: [
      {
        text: "Bank file generated",
        icon: <Check className="w-3.5 h-3.5 text-slate-500 shrink-0" />,
      },
      {
        text: "... External confirmation pending",
        icon: <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />,
      },
    ],
  },
];

export default function GovernanceAndFundingSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>GOVERNANCE & FUNDING</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
            Scoped authority, not universal group access
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Permission scope can apply by group, entity, pay group, geography,
            data class and action. Approval orchestration supports
            maker-checker, thresholds, entity variation, delegation, effective
            dates and escalation.
          </p>
        </div>

        {/* Governance Roles Table */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F5F8FA] border-b border-slate-200/80 text-[10px] sm:text-xs font-bold tracking-wider text-slate-400 uppercase">
                  <th className="py-4 px-6">ROLE</th>
                  <th className="py-4 px-6">TYPICAL SCOPE</th>
                  <th className="py-4 px-6">CAN APPROVE FUNDING</th>
                  <th className="py-4 px-6">WORKER-LEVEL ACCESS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium">
                {governanceData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-[#07243B]">
                      {row.role}
                    </td>
                    <td className="py-4 px-6 text-slate-500">{row.scope}</td>
                    <td className="py-4 px-6 text-slate-600">
                      {row.canApproveFunding}
                    </td>
                    <td className="py-4 px-6 text-slate-500">
                      {row.workerAccess}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Entity Funding Status Block */}
        <div className="space-y-6 pt-4">
          <h3 className="text-center text-sm font-bold text-[#07243B]">
            Entity funding status
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {fundingCards.map((card, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-3 border-l-4 ${card.borderColor}`}
              >
                <div>
                  <div className="text-xs font-bold text-[#07243B]">
                    {card.entity}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {card.currency}
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  {card.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-600"
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <p className="text-center text-[11px] text-slate-400 font-medium">
            Entity funds and liabilities are never visually pooled in a way that
            implies legal commingling.
          </p>
        </div>
      </div>
    </section>
  );
}
