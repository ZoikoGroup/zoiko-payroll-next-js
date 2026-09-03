"use client";

import React from "react";
import Link from "next/link";

interface Plan {
  name: string;
  audience: string;
  features: string[];
  ctaLabel: string;
  recommended?: boolean;
}

const plans: Plan[] = [
  {
    name: "Core",
    audience: "Growing businesses with straightforward payroll",
    features: [
      "Up to 50 billable worker-months",
      "1 legal entity",
      "1 production jurisdiction",
      "Essential payroll control & records",
    ],
    ctaLabel: "Contact sales",
  },
  {
    name: "Professional",
    audience: "Established SMB / mid-market",
    features: [
      "Up to 250 billable worker-months",
      "Up to 3 legal entities",
      "Up to 3 production jurisdictions",
      "Stronger approvals + scheduled reporting",
    ],
    ctaLabel: "Talk to Sales",
    recommended: true,
  },
  {
    name: "Business",
    audience: "Complex mid-market / global operations",
    features: [
      "Up to 1,000 billable worker-months",
      "Up to 10 legal entities",
      "Up to 10 production jurisdictions",
      "Automation, APIs, webhooks, SSO",
    ],
    ctaLabel: "Talk to Business Team",
  },
  {
    name: "Enterprise",
    audience: "Large, regulated or highly complex organizations",
    features: [
      "Contracted scale",
      "Advanced governance & security",
      "Contracted integrations",
      "Dedicated implementation & service management",
    ],
    ctaLabel: "Talk to Enterprise",
  },
];

interface CapabilityRow {
  dimension: string;
  core: string;
  professional: string;
  business: string;
  enterprise: string;
}

const capabilityRows: CapabilityRow[] = [
  {
    dimension: "Workers",
    core: "≤50 BWM",
    professional: "≤250 BWM",
    business: "≤1,000 BWM",
    enterprise: "Contracted",
  },
  {
    dimension: "Legal entities",
    core: "1",
    professional: "≤3",
    business: "≤10",
    enterprise: "Contracted",
  },
  {
    dimension: "Production jurisdictions",
    core: "1",
    professional: "≤3",
    business: "≤10",
    enterprise: "Contracted",
  },
  {
    dimension: "Advanced multi-step approvals",
    core: "—",
    professional: "Included",
    business: "Included",
    enterprise: "Included",
  },
  {
    dimension: "Scheduled reports",
    core: "—",
    professional: "Included",
    business: "Included",
    enterprise: "Included",
  },
  {
    dimension: "Standard API",
    core: "—",
    professional: "Limited",
    business: "Full",
    enterprise: "Full + contracted extensions",
  },
  {
    dimension: "Webhooks",
    core: "—",
    professional: "—",
    business: "Included",
    enterprise: "Included",
  },
  {
    dimension: "SAML SSO",
    core: "—",
    professional: "—",
    business: "Included",
    enterprise: "Included",
  },
  {
    dimension: "SCIM",
    core: "—",
    professional: "—",
    business: "—",
    enterprise: "Included",
  },
];

/** Positive entitlements render green; a dash stays muted. */
function cellClass(value: string) {
  if (value === "—") return "text-slate-400";
  if (
    value.startsWith("Included") ||
    value === "Full" ||
    value.startsWith("Full +")
  ) {
    return "text-emerald-600 font-semibold";
  }
  return "text-[#4E6172]";
}

export default function PlanOverviewSection() {
  return (
    <section
      id="plan-overview"
      className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-[#0A78C3] uppercase">
            <span className="w-[3px] h-3.5 rounded-[1px] bg-[#3B82F6]" />
            <span>Plan overview</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#082F49] leading-tight">
            Four plans. One governed payroll foundation.
          </h2>
          <p className="text-sm sm:text-base text-[#4E6172] leading-6 max-w-4xl">
            Accuracy is not a premium feature. Plans differentiate scale,
            control depth, automation, integrations, analytics and service
            governance — not whether payroll should calculate correctly.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-6 flex flex-col ${
                plan.recommended
                  ? "border-2 border-[#0A78C3]"
                  : "border border-slate-200"
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-6 bg-[#0A78C3] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  Recommended
                </span>
              )}

              <h3 className="text-lg font-bold text-[#082F49]">{plan.name}</h3>
              <p className="mt-2 text-xs text-slate-500 leading-5">
                {plan.audience}
              </p>

              <ul className="mt-4 space-y-0">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-[#4E6172] leading-5 py-2.5 border-b border-slate-200 last:border-b-0"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <Link
                  href="/contact"
                  className={`block w-full text-center text-sm font-bold px-4 py-3.5 rounded-lg transition-all ${
                    plan.recommended
                      ? "bg-gradient-to-r from-[#3B82F6] to-[#0C4A6E] hover:from-[#2B7BB5] hover:to-[#0A3A57] text-white shadow-[0px_8px_18px_-6px_rgba(11,76,120,0.45)]"
                      : "bg-white border border-slate-200 text-[#082F49] hover:bg-slate-50"
                  }`}
                >
                  {plan.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-500 leading-5">
          Availability and service scope vary by jurisdiction and contract. Use
          the Jurisdiction Directory for current coverage.
        </p>

        {/* Capability matrix — cards on mobile */}
        <div className="space-y-3 lg:hidden">
          {capabilityRows.map((row) => (
            <div
              key={row.dimension}
              className="bg-white rounded-xl border border-slate-200 p-5 space-y-2.5"
            >
              <div className="text-sm font-bold text-[#082F49]">
                {row.dimension}
              </div>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {(
                  [
                    ["Core", row.core],
                    ["Professional", row.professional],
                    ["Business", row.business],
                    ["Enterprise", row.enterprise],
                  ] as const
                ).map(([label, value]) => (
                  <div key={label} className="flex flex-col">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {label}
                    </dt>
                    <dd className={cellClass(value)}>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        {/* Capability matrix — table from lg up */}
        <div className="hidden lg:block rounded-xl border border-slate-200 overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="text-left text-sm">
                <th className="bg-slate-100 px-5 py-4 font-semibold text-slate-500 w-[280px]">
                  Capability dimension
                </th>
                <th className="bg-[#0F2C43] px-5 py-4 font-semibold text-white">
                  Core
                </th>
                <th className="bg-[#0F2C43] px-5 py-4 font-semibold text-white">
                  Professional
                </th>
                <th className="bg-[#0F2C43] px-5 py-4 font-semibold text-white">
                  Business
                </th>
                <th className="bg-[#0F2C43] px-5 py-4 font-semibold text-white">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {capabilityRows.map((row, idx) => (
                <tr
                  key={row.dimension}
                  className={`border-t border-slate-200 ${
                    idx % 2 === 1 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  <td className="px-5 py-4 text-sm font-bold text-[#082F49]">
                    {row.dimension}
                  </td>
                  <td className={`px-5 py-4 text-sm ${cellClass(row.core)}`}>
                    {row.core}
                  </td>
                  <td
                    className={`px-5 py-4 text-sm ${cellClass(
                      row.professional
                    )}`}
                  >
                    {row.professional}
                  </td>
                  <td
                    className={`px-5 py-4 text-sm ${cellClass(row.business)}`}
                  >
                    {row.business}
                  </td>
                  <td
                    className={`px-5 py-4 text-sm ${cellClass(row.enterprise)}`}
                  >
                    {row.enterprise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
