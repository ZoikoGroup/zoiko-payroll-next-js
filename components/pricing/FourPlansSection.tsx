"use client";

import React from "react";

interface PlanFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  priceSub: string;
  minimumNote: string;
  bestFor: string;
  workers: string;
  legalEntities: string;
  jurisdictions: string;
  schedules: string;
  features: PlanFeature[];
  isRecommended?: boolean;
  buttonText: string;
  secondaryButtonText: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Core",
    description: "Essential payroll for straightforward operations",
    price: "$8",
    priceSub: "/ worker / month",
    minimumNote: "$40 monthly minimum - annual: $80/worker/year",
    bestFor:
      "Best for growing organizations with one employer entity and one production jurisdiction.",
    workers: "Up to 50",
    legalEntities: "1",
    jurisdictions: "1",
    schedules: "Up to 2",
    features: [
      { text: "Gross-to-net payroll & employee records" },
      { text: "Self-service & payslips" },
      { text: "Payroll preview & finalization" },
      { text: "Standard approvals & reports" },
      { text: "Audit timeline, CSV import/export" },
      { text: "Guided Payroll Assist" },
    ],
    buttonText: "Choose Core",
    secondaryButtonText: "See Core features",
  },
  {
    name: "Professional",
    description: "More control for growing payroll operations",
    price: "$15",
    priceSub: "/ worker / month",
    minimumNote: "$150 monthly minimum - annual: $150/worker/year",
    bestFor:
      "Best for established SMB and mid-market organizations managing greater workflow and geographic complexity.",
    workers: "Up to 250",
    legalEntities: "Up to 3",
    jurisdictions: "Up to 3",
    schedules: "Up to 10",
    isRecommended: true,
    features: [
      { text: "Everything in Core, plus:" },
      { text: "Multi-step approvals & maker-checker" },
      { text: "Advanced exception center" },
      { text: "Scheduled & custom reporting" },
      { text: "Standard accounting + HR/time connectors" },
      { text: "Limited API - 1 parallel-run workspace - priority support" },
    ],
    buttonText: "Start 30-Day Evaluation",
    secondaryButtonText: "Choose Professional",
  },
  {
    name: "Business",
    description: "Advanced control for complex payroll operations",
    price: "$25",
    priceSub: "/ worker / month",
    minimumNote: "$500 monthly minimum - annual: $250/worker/year",
    bestFor:
      "Best for multi-entity and multi-jurisdiction organizations requiring automation, full APIs, and stronger identity controls.",
    workers: "Up to 1,000",
    legalEntities: "Up to 10",
    jurisdictions: "Up to 10",
    schedules: "Within scope",
    features: [
      { text: "Everything in Professional, plus:" },
      { text: "Conditional approvals & consolidated reporting" },
      { text: "Advanced reconciliation" },
      { text: "Full standard API & webhooks" },
      { text: "SAML SSO - advanced automation" },
      { text: "Multiple parallel runs - premium support" },
    ],
    buttonText: "Talk to Payroll Sales",
    secondaryButtonText: "Explore Business",
  },
  {
    name: "Enterprise",
    description: "Contracted payroll infrastructure for complex organizations",
    price: "Custom",
    priceSub: "",
    minimumNote:
      'Contracted volume/scope pricing — no public "starting at" figure',
    bestFor:
      "Best for large, regulated or highly complex organizations with bespoke security, integration, support and governance requirements.",
    workers: "Contracted",
    legalEntities: "Contracted",
    jurisdictions: "Contracted",
    schedules: "Contracted",
    features: [
      { text: "Everything in Business, plus:" },
      { text: "SCIM & delegated administration" },
      { text: "Contracted access policies" },
      { text: "Extended integration scopes" },
      { text: "Enterprise AI governance" },
      { text: "Dedicated implementation & contracted SLA" },
    ],
    buttonText: "Contact Enterprise Sales",
    secondaryButtonText: "Request a Demo",
  },
];

export default function FourPlansSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              FOUR PLANS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            Choose the plan that matches your payroll complexity.
          </h2>

          {/* Subtitle description */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Professional is the recommended starting point for most growing
            teams. Every plan shares the same payroll accuracy, security
            baseline and record protection.
          </p>
        </div>

        {/* 4-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-6 flex flex-col justify-between relative transition-all ${
                plan.isRecommended
                  ? "border-2 border-[#2A87C8] shadow-xl ring-4 ring-[#2A87C8]/10"
                  : "border border-slate-200/80 shadow-xs hover:border-slate-300"
              }`}
            >
              {/* Recommended Badge */}
              {plan.isRecommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#E6F3FC] text-[#0A78C3] border border-[#0A78C3]/25 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-xs">
                    Recommended
                  </span>
                </div>
              )}

              <div className="space-y-6">
                {/* Plan Header */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-lg font-extrabold text-[#07243B]">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed min-h-[32px]">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="space-y-1 pb-4 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-[#07243B]">
                      {plan.price}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      {plan.priceSub}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium leading-snug">
                    {plan.minimumNote}
                  </p>
                </div>

                {/* Best For Box */}
                <div className="bg-[#EFF4F7]/60 rounded-2xl p-3.5">
                  <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                    {plan.bestFor}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 py-2 border-b border-slate-100 text-[11px]">
                  <div>
                    <span className="text-slate-400 font-medium block">
                      WORKERS
                    </span>
                    <span className="font-bold text-[#07243B]">
                      {plan.workers}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block">
                      LEGAL ENTITIES
                    </span>
                    <span className="font-bold text-[#07243B]">
                      {plan.legalEntities}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block">
                      JURISDICTIONS
                    </span>
                    <span className="font-bold text-[#07243B]">
                      {plan.jurisdictions}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block">
                      SCHEDULES
                    </span>
                    <span className="font-bold text-[#07243B]">
                      {plan.schedules}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2A87C8] mt-1.5 shrink-0" />
                      <span className="text-xs text-slate-600 font-medium leading-relaxed">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-6 mt-6 border-t border-slate-100">
                <button
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    plan.isRecommended
                      ? "bg-gradient-to-r from-[#2E9BDD] via-[#0F5688] to-[#0A3D63] hover:bg-[#2375b0] text-white shadow-md"
                      : "bg-gradient-to-r from-[#2E9BDD] via-[#0F5688] to-[#0A3D63] hover:bg-[#051a2c] text-white"
                  }`}
                >
                  {plan.buttonText}
                </button>
                <button className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#07243B] text-xs font-bold transition-colors cursor-pointer">
                  {plan.secondaryButtonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Footnotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-1.5">
            <h4 className="text-[11px] font-extrabold text-[#07243B] uppercase tracking-wider">
              INCLUDED ACROSS EVERY PAID PLAN
            </h4>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Approved payroll calculation for licensed jurisdictions, employee
              self-service, payslip access, required payroll record retention,
              baseline security controls, MFA capability and essential payroll
              auditability.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-1.5">
            <h4 className="text-[11px] font-extrabold text-[#07243B] uppercase tracking-wider">
              SEPARATE OPERATIONAL SCOPE
            </h4>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Managed payroll, wage-payment enablement, statutory
              filing/remittance and certain implementation or integration
              services are separate service scopes and depend on jurisdiction
              availability and contract.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
