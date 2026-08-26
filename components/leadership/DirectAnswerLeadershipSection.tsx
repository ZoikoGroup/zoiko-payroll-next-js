"use client";

import React from "react";

export default function DirectAnswerLeadershipSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Split Layout Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Tag / Category */}
              <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
                <span className="font-bold">/</span>
                <span>DIRECT ANSWER</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight">
                Who leads Zoiko Payroll ?
              </h2>

              {/* Description */}
              <p className="text-[17px] text-[#4D5E72] leading-relaxed">
                Every public person-role relationship shown here requires an
                approved person record, an approved leadership assignment, an
                exact current title, entity and product scope, a status, an
                effective date, source references and named approvers.
              </p>
            </div>

            {/* Disclosure Box */}
            <div className="p-5 rounded-2xl border-l-4 border-l-[#0284C7] border border-[#E1E8F0] space-y-1">
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                <span className="font-bold text-[#0F172A]">
                  Disclosure standard:
                </span>{" "}
                We show only what is verified, current, scoped and approved. A
                name in an internal org chart, email signature, social profile
                or press draft is never sufficient evidence for publication. If
                evidence is missing or stale, we suppress the named profile and
                show the role-only fallback instead.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6 flex items-center">
            <div className="w-full h-full relative">
              <img
                src="/images/leadership/1.png"
                alt="Zoiko Payroll Leadership Team"
                className="w-full h-full object-cover rounded-2xl object-center absolute inset-0"
              />
            </div>
          </div>
        </div>

        {/* Bottom Data Grid Bar */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {/* Role */}
          <div className="pt-2 sm:pt-0 sm:px-4 first:pl-0 space-y-1">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#94A3B8] block">
              ROLE
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#0F172A] block">
              Chief Product Officer
            </span>
          </div>

          {/* Scope */}
          <div className="pt-2 sm:pt-0 sm:px-4 space-y-1">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#94A3B8] block">
              SCOPE
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#0F172A] block">
              Global Payroll Product
            </span>
          </div>

          {/* Status */}
          <div className="pt-2 sm:pt-0 sm:px-4 space-y-1">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#94A3B8] block">
              STATUS
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#0F172A] block">
              Active
            </span>
          </div>

          {/* Effective */}
          <div className="pt-2 sm:pt-0 sm:px-4 space-y-1">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#94A3B8] block">
              EFFECTIVE
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#0F172A] block">
              Jan 2026
            </span>
          </div>

          {/* Last Reviewed */}
          <div className="pt-2 sm:pt-0 sm:px-4 space-y-1">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#94A3B8] block">
              LAST REVIEWED
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#0F172A] block">
              Aug 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
