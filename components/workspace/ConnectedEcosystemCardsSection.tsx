"use client";

import React from "react";

interface IntegrationCard {
  id: string;
  title: string;
  description: string;
}

const integrationCards: IntegrationCard[] = [
  {
    id: "people-hr-data",
    title: "People & HR data",
    description:
      "Worker profiles, employment data, compensation and organization context.",
  },
  {
    id: "time-attendance",
    title: "Time & attendance",
    description:
      "Approved time, leave, schedules, overtime and other payroll-impacting time data.",
  },
  {
    id: "benefits-deductions",
    title: "Benefits & deductions",
    description:
      "Configured benefit elections, retirement, garnishments and permitted deductions.",
  },
  {
    id: "finance-accounting",
    title: "Finance & accounting",
    description:
      "Payroll journals, cost centers, GL mappings and reconciliations.",
  },
  {
    id: "payments",
    title: "Payments",
    description:
      "Configured banking, payment and treasury providers for funding and disbursement workflows.",
  },
  {
    id: "identity-access",
    title: "Identity & access",
    description: "SSO, MFA, directory and role provisioning where supported.",
  },
  {
    id: "apis-webhooks",
    title: "APIs & webhooks",
    description: "Secure, governed data exchange and lifecycle events.",
  },
  {
    id: "exports-records",
    title: "Exports & records",
    description:
      "Downstream finance, compliance, statutory and archival workflows.",
  },
];

export default function ConnectedEcosystemCardsSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* 3-Column Grid for Integration Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrationCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs hover:shadow-xs transition-shadow flex flex-col space-y-2.5 min-h-[140px]"
            >
              <h3 className="text-sm font-bold text-[#07243B]">{card.title}</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer / Integration Details Footnote */}
        <p className="text-center text-[11px] sm:text-xs text-slate-400 font-normal mx-auto leading-relaxed pt-2">
          Specific partner names are shown only after commercial and technical
          authorization is verified &mdash; see Finance & ERP, Time & Attendance
          and API Documentation for current integration details.
        </p>
      </div>
    </section>
  );
}
