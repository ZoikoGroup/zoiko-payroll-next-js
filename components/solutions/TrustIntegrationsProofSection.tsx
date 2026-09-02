"use client";

import React, { useState } from "react";

export default function TrustIntegrationsProofSection() {
  const [activeTab, setActiveTab] = useState<string>("Access");

  const filterTabs = [
    "Access",
    "Approvals",
    "Auditability",
    "Data protection",
    "Resilience",
    "AI",
  ];

  const integrationCategories = [
    "HR / worker data",
    "Time / attendance",
    "Finance / ERP",
    "Identity / security",
    "Payments / banking",
    "Benefits / deductions",
  ];

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>TRUST, INTEGRATIONS & PROOF</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            Controls you can verify — not security superlatives
          </h2>
        </div>

        {/* Filter Pills Header */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-white text-[#07243B] border border-slate-300 shadow-2xs"
                    : "bg-white/60 text-slate-600 border border-slate-200 hover:bg-white hover:border-slate-300"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Top Feature Card (Left Accent Border) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs border-l-4 border-l-[#0A8FD0]">
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            RBAC/ABAC, tenant isolation, permission tests, approval history,
            segregation rules, encryption, key management, privacy controls and
            documented resilience. AI assistance never silently changes a
            statutory payroll outcome — every AI-assisted action carries human
            review, provenance, restricted-action limits, testing and an audit
            trail.
          </p>
        </div>

        {/* Integration Categories Section */}
        <div className="space-y-6 pt-4 text-center">
          <h3 className="text-base sm:text-lg font-bold text-[#07243B]">
            Integration categories
          </h3>

          {/* Integration Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {integrationCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-4 text-center text-xs font-bold text-[#07243B] shadow-2xs flex items-center justify-center min-h-[72px]"
              >
                {category}
              </div>
            ))}
          </div>

          {/* View Integrations Button */}
          <div className="pt-2">
            <button className="px-6 py-2.5 rounded-xl border border-slate-200 bg-white text-[#07243B] font-bold text-xs hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-2xs">
              View integrations
            </button>
          </div>
        </div>

        {/* Bottom Proof Card (Left Accent Border) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs border-l-4 border-l-[#0A8FD0]">
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            <strong className="text-[#07243B] font-bold">
              Verified proof, not invented statistics.
            </strong>{" "}
            Where an approved customer result, validated study, measured metric
            or achieved certification exists, it is shown with its source. Where
            no such proof is currently approved, this section shows a
            product-evidence walkthrough instead of a fabricated number.
          </p>
        </div>
      </div>
    </section>
  );
}
