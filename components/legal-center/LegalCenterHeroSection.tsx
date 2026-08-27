"use client";

import React from "react";
import Link from "next/link";

interface DocumentRegistryItem {
  title: string;
  meta: string;
  status: string;
  statusType: "current" | "scheduled" | "superseded";
}

const registryItems: DocumentRegistryItem[] = [
  {
    title: "Privacy Notice",
    meta: "v3.2 · Published Jun 2026",
    status: "Current",
    statusType: "current",
  },
  {
    title: "Website Terms of Use",
    meta: "v2.0 · Published Mar 2026",
    status: "Current",
    statusType: "current",
  },
  {
    title: "Cookie Notice",
    meta: "v1.4 · Effective Sep 2026",
    status: "Scheduled",
    statusType: "scheduled",
  },
  {
    title: "Data Processing Addendum",
    meta: "v1.9 · Superseded by v2.0",
    status: "Superseded",
    statusType: "superseded",
  },
];

export default function LegalCenterHeroSection() {
  return (
    <section className="relative w-full overflow-hidden text-white font-sans antialiased">
      {/* Background Image Container with Overlay */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat py-16 lg:py-24"
        style={{
          backgroundImage: `url('/images/legal/legal-hero.png')`,
        }}
      >
        {/* Dark Teal / Navy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071C2EE0] via-[#0A3254BF] to-[#0A8FD066]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Area */}
            <div className="lg:col-span-6 space-y-6">
              {/* Tag / Category Line */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#38BDF8] uppercase">
                <span className="w-3 h-0.5 bg-[#38BDF8]" />
                <span>LEGAL CENTER</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl md:text-[32px] font-bold tracking-tight text-white leading-[1.15]">
                Legal, privacy and governance documents in one place
              </h1>

              {/* Paragraph Subtext */}
              <p className="text-sm text-[#828282] leading-relaxed max-w-xl">
                Find the current Zoiko Payroll notices, terms, policies and
                legal resources relevant to website use, service evaluation,
                customer data processing, acceptable use, accessibility and
                company notices.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  Contact
                </Link>
                <Link
                  href="/trust-and-security"
                  className="px-6 py-3 rounded-xl bg-white text-[#0F172A] hover:bg-gray-100 text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  Trust & Security
                </Link>
              </div>
            </div>

            {/* Right Side Sample Registry Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden text-[#0F172A] border border-gray-100">
                {/* Header Tag inside card */}
                <div className="px-6 py-3.5 border-b border-gray-100">
                  <span className="text-[11px] font-medium text-[#94A3B8] lowercase">
                    legal document registry - sample
                  </span>
                </div>

                {/* Items List */}
                <div className="divide-y divide-gray-100">
                  {registryItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-6 py-4 flex items-center justify-between gap-4"
                    >
                      <div className="space-y-0.5 min-w-0">
                        <h3 className="text-sm font-bold text-[#0F172A] truncate">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-[#94A3B8]">
                          {item.meta}
                        </p>
                      </div>

                      {/* Status Badge */}
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold shrink-0 ${
                          item.statusType === "current"
                            ? "bg-emerald-100/70 text-emerald-800"
                            : item.statusType === "scheduled"
                              ? "bg-blue-100/70 text-blue-700"
                              : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.statusType === "current"
                              ? "bg-emerald-500"
                              : item.statusType === "scheduled"
                                ? "bg-blue-500"
                                : "bg-gray-400"
                          }`}
                        />
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
