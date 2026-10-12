"use client";

import React from "react";
import Image from "next/image";

const rolePills: string[] = [
  "Payroll Operator",
  "Payroll Manager",
  "Finance/Controller",
  "Treasury",
  "Internal Audit",
  "HR/People Ops",
  "Integration Service",
  "Platform Admin",
];

export default function GlobalReportingSecurityPrivacySection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Role Pills */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
                <span className="text-[#0A8FD0] font-bold">/</span>
                <span>GLOBAL REPORTING, SECURITY & PRIVACY</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight text-[#07243B] leading-tight">
                Local currency stays authoritative — always
              </h2>

              {/* Subtitle / Description */}
              <p className="text-sm sm:text-[17px] text-slate-500 font-medium leading-relaxed">
                Consolidated reports label reporting currency, FX source/type,
                rate date and whether the figure is operational or analytical.
                Converted currency is never used for statutory reconciliation
                when local currency is authoritative — global reporting
                normalizes comparable concepts while retaining local source and
                jurisdiction detail.
              </p>
            </div>

            {/* Role Pills Grid */}
            <div className="flex flex-wrap items-center max-w-120 gap-2.5 pt-2">
              {rolePills.map((role, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs hover:bg-slate-50 transition-colors cursor-default"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden">
              <Image
                src="/images/payroll-operation/19.png"
                alt="Global reporting, security and privacy presentation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Highlight Callout Container with Blue Accent Border */}
        <div className="bg-white rounded-xl border border-slate-200 border-l-4 border-l-[#0A8FD0] p-6 shadow-2xs">
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            <strong className="font-bold text-[#07243B]">
              Security by default.
            </strong>{" "}
            Least-privilege RBAC/ABAC across entity, pay group, jurisdiction,
            record class and field; MFA/SSO with step-up verification for
            high-risk exports and retention actions; encryption; full
            export/download/distribution logging; and data minimization
            throughout. No worker names, bank details, tax IDs, payroll values,
            report tokens or secrets ever appear in URLs, browser titles,
            analytics or referrer-bearing query strings.
          </p>
        </div>
      </div>
    </section>
  );
}
