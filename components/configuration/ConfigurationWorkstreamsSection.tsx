"use client";

import React from "react";
import {
  Building2,
  Calendar,
  DollarSign,
  Briefcase,
  Calculator,
  FileSpreadsheet,
  RotateCcw,
  CreditCard,
  BarChart3,
  Link,
  Lock,
  FileText,
} from "lucide-react";

export default function ConfigurationWorkstreamsSection() {
  const workstreams = [
    {
      icon: Building2,
      title: "Organization & payroll structures",
      description:
        "Legal entities, payrolls, pay groups, worker populations, currencies, jurisdiction assignment.",
    },
    {
      icon: Calendar,
      title: "Calendars & processing",
      description:
        "Pay frequency, period schedules, payment dates, cutoffs, run categories, processing windows.",
    },
    {
      icon: DollarSign,
      title: "Earnings & employer costs",
      description:
        "Salary, overtime, bonuses, commissions, allowances, employer contributions, tax treatment.",
    },
    {
      icon: Briefcase,
      title: "Deductions & benefits",
      description:
        "Pre-/post-tax treatment, recurring/one-time deductions, benefit-linked contributions, priority.",
    },
    {
      icon: Calculator,
      title: "Tax & statutory rules",
      description:
        "Jurisdiction-aware rules, thresholds/parameters, effective dates, controlled updates.",
    },
    {
      icon: FileSpreadsheet,
      title: "Workforce inputs",
      description:
        "Recurring/ad hoc time, absence, benefits, compensation, expense payroll-driving data.",
    },
    {
      icon: RotateCcw,
      title: "Retro, off-cycle & final pay",
      description:
        "Retro triggers, lookback, adjustment controls, final-pay handling, off-cycle categories.",
    },
    {
      icon: CreditCard,
      title: "Payments & funding",
      description:
        "Payment methods, routing, banking/funding dependencies, release/approval controls.",
    },
    {
      icon: BarChart3,
      title: "Accounting / GL",
      description:
        "Account mapping, dimensions/cost centers, posting rules, journals, allocation logic.",
    },
    {
      icon: Link,
      title: "Integrations",
      description:
        "Inbound/outbound interfaces, ownership, schedules, mappings, retries/errors, reconciliation.",
    },
    {
      icon: Lock,
      title: "Security, roles & approvals",
      description:
        "Least privilege, segregation of duties, business-process approvals, auditability.",
    },
    {
      icon: FileText,
      title: "Reporting & outputs",
      description:
        "Payslip presentation, payroll registers, GL outputs, statutory files, dashboards.",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] border border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Category Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#1483CE] font-bold text-sm">/</span>
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#1483CE] uppercase">
            CONFIGURATION WORKSTREAMS
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0B192C] text-center tracking-tight mb-10">
          The complete payroll configuration estate.
        </h2>

        {/* 12-Card Grid (4 columns on lg, 2 on sm/md, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {workstreams.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xs flex flex-col items-start transition-all hover:shadow-md"
              >
                {/* Icon Container */}
                <div className="w-9 h-9 rounded-xl bg-[#EEF3F9] flex items-center justify-center mb-5 text-[#1483CE]">
                  <IconComponent className="w-4 h-4 stroke-[2.2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-sm font-bold text-[#0A1626] mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-[#5B6B78] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
