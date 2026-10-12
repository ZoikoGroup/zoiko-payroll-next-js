"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface SeverityBadge {
  label: string;
  className: string;
}

interface FormField {
  label: string;
  sublabel: string;
}

interface EntitlementItem {
  label: string;
  value: string;
}

const severityBadges: SeverityBadge[] = [
  {
    label: "S1 · Critical",
    className: "bg-[#FCE8E6] text-[#C5221F]",
  },
  {
    label: "S2 · High",
    className: "bg-[#FEF3D6] text-[#8F6B00]",
  },
  {
    label: "S3 · Normal",
    className: "bg-[#E8F0FE] text-[#1A73E8]",
  },
  {
    label: "S4 · Guidance",
    className: "bg-[#F1F5F9] text-slate-600",
  },
];

const formFields: FormField[] = [
  { label: "Impact", sublabel: "Required" },
  { label: "Authorized scope", sublabel: "Required" },
  { label: "Payroll cutoff / timezone", sublabel: "Required" },
  { label: "Issue details", sublabel: "Required" },
  { label: "Safe diagnostic attachment", sublabel: "Optional" },
  { label: "Preferred contact", sublabel: "Optional" },
];

const workflowSteps = [
  "Submitted",
  "Triage",
  "Investigate",
  "Action",
  "Resolve",
];

const escalationTriggers = [
  "Deadline at risk",
  "No progress",
  "Ownership conflict",
  "Security impact",
];

const entitlementData: EntitlementItem[] = [
  {
    label: "Approved channels",
    value: "Case portal, secure upload",
  },
  {
    label: "Coverage",
    value: "Business hours + S1 bridge",
  },
  {
    label: "Response target",
    value: "Per current entitlement",
  },
];

export default function CreateSupportCaseSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[1px] text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>CREATE A SUPPORT CASE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-[1px] text-[#07243B] leading-tight">
            Severity reflects operational impact — not urgency of tone
          </h2>

          {/* Severity Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            {severityBadges.map((badge, idx) => (
              <span
                key={idx}
                className={`px-4 py-1.5 rounded-md text-xs font-semibold tracking-[1px] cursor-default transition-all ${badge.className}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* 2-Column Form Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formFields.map((field, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs space-y-1"
            >
              <h3 className="text-xs sm:text-sm font-bold text-[#07243B] tracking-[1px]">
                {field.label}
              </h3>
              <p className="text-[11px] text-slate-400 font-medium tracking-[1px]">
                {field.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Workflow Steps Flow */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-2">
          {workflowSteps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="w-full sm:w-auto min-w-[120px] py-3 px-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs text-center">
                <span className="text-xs font-bold text-[#07243B] tracking-[1px]">
                  {step}
                </span>
              </div>

              {idx < workflowSteps.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-[#0A8FD0] shrink-0 rotate-90 sm:rotate-0 my-0.5 sm:my-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Escalation Triggers & Subtext */}
        <div className="space-y-3 text-center pt-2">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {escalationTriggers.map((trigger, idx) => (
              <span
                key={idx}
                className="bg-white text-[#07243B] text-xs font-semibold px-4 py-2 rounded-full border border-slate-200/80 shadow-2xs tracking-[1px] cursor-default"
              >
                {trigger}
              </span>
            ))}
          </div>

          <p className="text-xs text-slate-400 font-medium tracking-[1px]">
            Any of these triggers an automatic escalation review.
          </p>
        </div>

        {/* Bottom Support Entitlement Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs space-y-6">
          <h3 className="text-sm font-bold tracking-[1px] text-[#07243B]">
            Support entitlement
          </h3>

          <div className="divide-y divide-slate-100">
            {entitlementData.map((item, idx) => (
              <div
                key={idx}
                className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4 text-xs sm:text-sm"
              >
                <span className="font-semibold text-[#07243B] tracking-[1px]">
                  {item.label}
                </span>
                <span className="font-medium text-slate-400 tracking-[1px]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}