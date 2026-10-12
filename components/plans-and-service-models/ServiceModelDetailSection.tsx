"use client";

import React from "react";
import Link from "next/link";

interface ServiceModel {
  title: string;
  description: string;
  attributes: string;
  ctaLabel: string;
  href: string;
}

const serviceModels: ServiceModel[] = [
  {
    title: "Zoiko Payroll",
    description:
      "Run entitled payroll capabilities in Zoiko Payroll where current jurisdiction coverage supports them.",
    attributes:
      "Configured workflow · governed calculation/records · approvals · audit lineage · capability-specific coverage",
    ctaLabel: "Check Zoiko Payroll coverage",
    href: "/global-payroll/jurisdiction-coverage",
  },
  {
    title: "Connected Payroll",
    description:
      "Keep an external payroll system or provider while bringing data, status and reporting into a governed Zoiko experience.",
    attributes:
      "Source-system identity · mapping · freshness · normalization · reconciliation · integration monitoring",
    ctaLabel: "Explore Connected Payroll",
    href: "/integrations",
  },
  {
    title: "Partner-Supported Payroll",
    description:
      "Use approved local expertise for defined services while keeping responsibilities and workflow visible.",
    attributes:
      "Provider role · secure exchange · service matrix · status · evidence · escalation",
    ctaLabel: "Explore Partner-Supported Payroll",
    href: "/global-payroll/partner-supported",
  },
  {
    title: "Customer-operated",
    description:
      "Keep operational ownership with your team while using entitled Zoiko Payroll workflows and controls.",
    attributes:
      "Customer ownership · approvals · runbooks · audit · supported data exchange",
    ctaLabel: "Discuss operating model",
    href: "/contact",
  },
];

export default function ServiceModelDetailSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-[#0A78C3] uppercase">
            <span className="w-[3px] h-3.5 rounded-[1px] bg-[#3B82F6]" />
            <span>Service-model detail</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#082F49] leading-tight">
            Four ways payroll can actually be delivered.
          </h2>
        </div>

        {/* Model cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {serviceModels.map((model) => (
            <div
              key={model.title}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col"
            >
              <h3 className="text-base font-bold text-[#082F49]">
                {model.title}
              </h3>
              <p className="mt-3 text-xs text-[#4E6172] leading-5">
                {model.description}
              </p>
              <p className="mt-4 text-xs text-slate-500 leading-5">
                {model.attributes}
              </p>

              <div className="mt-auto pt-6">
                <Link
                  href={model.href}
                  className="inline-block bg-white border border-slate-200 hover:bg-slate-50 text-[#082F49] text-sm font-bold px-6 py-3.5 rounded-lg text-center transition-colors"
                >
                  {model.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="bg-blue-50 border border-sky-100 rounded-[10px] p-5">
          <p className="text-xs text-[#082F49] leading-5">
            &quot;Where supported&quot; and explicit responsibility language are
            how we describe delivery — never broad claims like &quot;run payroll
            anywhere,&quot; and we never present a third party&apos;s work as
            native Zoiko execution.
          </p>
        </div>
      </div>
    </section>
  );
}
