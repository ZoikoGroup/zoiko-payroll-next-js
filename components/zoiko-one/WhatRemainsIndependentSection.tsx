"use client";

import React from "react";

// 9 Feature Cards grid data
const INDEPENDENT_ITEMS = [
  {
    title: "Product ownership",
    description: "Scoped to Zoiko Payroll",
  },
  {
    title: "Payroll authorization",
    description: "Never inherited automatically",
  },
  {
    title: "Product controls",
    description: "Validation, review, approval unaffected",
  },
  {
    title: "Support",
    description: "Payroll-specific by default",
  },
  {
    title: "Systems of record",
    description: "Explicit per domain",
  },
  {
    title: "Contracts / commercial terms",
    description: "Set by Pricing/Sales authority",
  },
  {
    title: "Administration",
    description: "Product-specific unless verified",
  },
  {
    title: "Reporting",
    description: "Product-specific unless verified",
  },
  {
    title: "Data access",
    description: "Scoped, never assumed",
  },
];

// Domain authority map items
const DOMAIN_ITEMS = [
  {
    domain: "Payroll",
    system: "ZOIKO PAYROLL",
  },
  {
    domain: "Workforce",
    system: "HRIS / HCM",
  },
  {
    domain: "Identity",
    system: "IDENTITY PROVIDER",
  },
  {
    domain: "Finance",
    system: "FINANCE / ERP",
  },
  {
    domain: "Other domains",
    system: "APPROVED OWNER, PER DOMAIN",
  },
];

export default function WhatRemainsIndependentSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>WHAT REMAINS INDEPENDENT</span>
          </div>

          <h2 className="text-3xl md:text-[32px] font-bold text-[#0A1928] leading-tight">
            Boundaries and authority stay explicit.
          </h2>

          <p className="text-sm sm:text-base text-[#5C6E7E] max-w-2xl">
            These remain scoped to Zoiko Payroll unless a specific connection is
            verified for your account.
          </p>
        </div>

        {/* 3x3 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDEPENDENT_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E1E8ED] rounded-2xl p-5 shadow-xs space-y-1.5 flex flex-col justify-start"
            >
              <h3 className="text-sm font-bold text-[#0A1928]">{item.title}</h3>
              <p className="text-xs text-[#5C6E7E] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Domain Authority Map Block */}
        <div className="space-y-4 pt-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#0A1928]">
              Domain authority map
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6E7E]">
              No single &quot;source of truth&quot; icon &mdash; each domain has
              its own explicit owner.
            </p>
          </div>

          {/* Dark Blue Horizontal Bar Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {DOMAIN_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0A2540] text-white rounded-xl p-4 text-center flex flex-col items-center justify-center space-y-1 shadow-xs"
              >
                <span className="text-xs sm:text-sm font-bold text-white">
                  {item.domain}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#7DD3FC] uppercase">
                  {item.system}
                </span>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <p className="text-xs text-[#5C6E7E] pt-1">
            A connection never grants another product payroll authorization, and
            never bypasses payroll validation, review, approval or completion
            controls.
          </p>
        </div>
      </div>
    </section>
  );
}
