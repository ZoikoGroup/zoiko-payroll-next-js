"use client";

import React from "react";

export default function ProvePayrollAccuracyHeroSection() {
  const metrics = [
    {
      badge: "On track",
      badgeBg: "bg-[#16A34A1A]",
      badgeText: "text-[#16A34A]",
      label: "Validation coverage",
      value: "94%",
    },
    {
      badge: "Review",
      badgeBg: "bg-[#F59E0B1A]",
      badgeText: "text-[#F59E0B]",
      label: "Variances detected",
      value: "12",
    },
    {
      badge: "Passed",
      badgeBg: "bg-[#16A34A1A]",
      badgeText: "text-[#16A34A]",
      label: "Statutory checks",
      value: "38/38",
    },
    {
      badge: "Connected",
      badgeBg: "bg-[#2563EB1A]",
      badgeText: "text-[#2563EB]",
      label: "Integration status",
      value: "6/6",
    },
    {
      badge: "Conditional",
      badgeBg: "bg-[#F59E0B1F]",
      badgeText: "text-[#F59E0B]",
      label: "Payroll readiness",
      value: "Retest required",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B192C] text-center tracking-tight leading-tight mb-4">
          Prove payroll accuracy
          <br />
          before production.
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="text-xs sm:text-base text-[#46525C] text-center max-w-xl leading-relaxed mb-8 font-normal">
          Zoiko Payroll runs your legacy and new payroll side by side, compares
          every result, and turns each variance into an explained, approved
          outcome before a single live payslip is issued.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-14 w-full sm:w-auto">
          <button
            type="button"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#3D9BD6] to-[#0C4773] hover:bg-[#0863A1] text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
          >
            Review validation approach
          </button>
          <button
            type="button"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#0F172A] font-bold text-xs sm:text-sm border border-[#E2E8F0] transition-all shadow-xs cursor-pointer"
          >
            Talk to an implementation specialist
          </button>
        </div>

        {/* Bottom Dark Card with Metrics Grid */}
        <div className="w-full bg-gradient-to-r from-[#0E2A47] to-[#16386A] rounded-2xl p-4 sm:p-6 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {metrics.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF0D] rounded-xl p-4 flex flex-col justify-between border border-[#FFFFFF1A]"
              >
                {/* Badge */}
                <div className="mb-2">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full ${item.badgeBg} ${item.badgeText} text-[11px] font-medium tracking-wide`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Metric Label & Value */}
                <div>
                  <p className="text-[15px] font-medium text-[#FFFFFF]">
                    {item.label}
                  </p>
                  <p className="text-xl sm:text-[20px] font-extrabold text-white tracking-tight">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
