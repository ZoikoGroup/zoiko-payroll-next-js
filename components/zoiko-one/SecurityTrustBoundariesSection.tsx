"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

// Badges for "THIS PAGE NEVER EXPOSES" section
const NEVER_EXPOSED_ITEMS = [
  "Live customer connection names",
  "Tenant IDs",
  "Product entitlements",
  "Employee records",
  "Payroll values",
  "Bank/tax data",
  "Credentials, tokens or secrets",
];

export default function SecurityTrustBoundariesSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>SECURITY, PRIVACY + TRUST BOUNDARIES</span>
          </div>

          <h2 className="text-3xl md:text-[32px] font-bold text-[#0A1928] leading-tight">
            Shared responsibility, not a new claim.
          </h2>

          <p className="text-sm sm:text-base text-[#5C6E7E] max-w-2xl">
            Verified controls and evidence live in the Trust Center &mdash; this
            page states the boundary, not a fresh assurance claim.
          </p>
        </div>

        {/* Split Responsibility Card */}
        <div className="bg-white border border-[#E1E8ED] rounded-3xl overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-2">
          {/* Left Side: Zoiko Payroll Responsibility */}
          <div className="p-8 space-y-4">
            <span className="text-xs font-bold tracking-wider uppercase text-[#5C6E7E]">
              ZOIKO PAYROLL RESPONSIBILITY
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#0A1928]">
              <li className="flex items-start gap-2">
                <span className="text-[#5C6E7E]">&bull;</span>
                <span>Payroll data handling within the product</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#5C6E7E]">&bull;</span>
                <span>Role-based access to payroll functions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#5C6E7E]">&bull;</span>
                <span>Payroll-specific audit records</span>
              </li>
            </ul>
          </div>

          {/* Right Side: Shared / Connection Responsibility */}
          <div className="bg-[#0A2540] p-8 text-white space-y-4">
            <span className="text-xs font-bold tracking-wider uppercase text-[#7DD3FC]">
              SHARED / CONNECTION RESPONSIBILITY
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
              <li className="flex items-start gap-2">
                <span className="text-[#7DD3FC]">&bull;</span>
                <span>Scope of any approved connection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7DD3FC]">&bull;</span>
                <span>Identity provider&apos;s own controls</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7DD3FC]">&bull;</span>
                <span>Verified jointly per active relationship</span>
              </li>
            </ul>
          </div>
        </div>

        {/* This Page Never Exposes Container */}
        <div className="bg-[#F8FAFC] border border-[#E1E8ED] rounded-2xl p-6 space-y-3">
          <span className="text-xs font-bold tracking-wider uppercase text-[#5C6E7E]">
            THIS PAGE NEVER EXPOSES
          </span>
          <div className="flex flex-wrap items-center gap-2.5">
            {NEVER_EXPOSED_ITEMS.map((item, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E1E8ED] text-[#5C6E7E] text-xs font-medium shadow-2xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Banner with Image Background */}
        <div className="relative rounded-3xl overflow-hidden border border-[#0A2540] shadow-xl p-8 sm:p-12 text-white">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/zoiko-one/small.png"
              alt="Trust center background"
              className="w-full h-full object-cover"
            />
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-[#072432]/85 backdrop-blur-[1px]" />
          </div>

          {/* Content inside Banner */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Verified controls live in one place.
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Documented security and privacy practices, hosting arrangements
                and contractual commitments &mdash; reviewed independently of
                this relationship page.
              </p>
            </div>

            {/* CTA Button */}
            <button className="shrink-0 px-6 py-3.5 rounded-2xl bg-white hover:bg-white/90 text-[#0A1928] text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 inline-flex items-center gap-2">
              <span>Visit the Trust Center</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
