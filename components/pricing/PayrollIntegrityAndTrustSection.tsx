"use client";

import React from "react";

interface IntegrityFeature {
  title: string;
  description: string;
}

const integrityFeatures: IntegrityFeature[] = [
  {
    title: "Calculation integrity",
    description: "Approved statutory engine within licensed scope.",
  },
  {
    title: "Baseline security",
    description:
      "MFA capability, encryption, tenant isolation, least privilege.",
  },
  {
    title: "Auditability",
    description: "Essential payroll audit timeline across every plan.",
  },
  {
    title: "Protected history",
    description: "Retention to legal, contractual and platform floors.",
  },
];

export default function PayrollIntegrityAndTrustSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-4 max-w-2xl">
          {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              PAYROLL INTEGRITY & TRUST
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            Payroll accuracy is not a premium feature.
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Every paid Zoiko Payroll plan uses the approved payroll calculation
            architecture for the jurisdictions it is licensed to operate.
            Baseline security, required payroll records and core calculation
            integrity are not intentionally weakened to create an upsell.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {integrityFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xs space-y-2 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <h3 className="text-base font-extrabold text-[#07243B]">
                {feature.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
