"use client";

import React from "react";

export default function OperationalPayrollHealthSection() {
  const countryHealth = [
    {
      country: "UK",
      status: "Healthy",
      bg: "bg-[#DCFCE7]",
      text: "text-[#16A34A]",
    },
    {
      country: "US",
      status: "Watch",
      bg: "bg-[#FEF3C7]",
      text: "text-[#D97706]",
    },
    {
      country: "Germany",
      status: "At risk",
      bg: "bg-[#FEE2E2]",
      text: "text-[#DC2626]",
    },
  ] as const;

  const payrollCalendar = [
    { label: "Next UK run", value: "25 Sep" },
    { label: "Year-end prep", value: "Q4" },
  ] as const;

  const integrationStatus = [
    {
      label: "Time feed",
      status: "Retrying",
      bg: "bg-[#FEF3C7]",
      text: "text-[#D97706]",
    },
    {
      label: "HRIS sync",
      status: "Stable",
      bg: "bg-[#DCFCE7]",
      text: "text-[#16A34A]",
    },
  ] as const;

  const actionsDue = [
    { label: "Access governance review", scope: "Global" },
    { label: "Integration reliability", scope: "US" },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Category Label */}
        <p className="text-xs font-semibold text-[#3B82F6] tracking-wide mb-3">
          Operational payroll health
        </p>

        {/* Main Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] text-center tracking-tight leading-tight mb-12 max-w-xl">
          See what matters, scoped and explainable.
        </h2>

        {/* Outer Laptop / App Window Frame */}
        <div className="w-full bg-[#0F172A] rounded-3xl p-3 sm:p-5 shadow-2xl relative border border-[#1E293B]">
          {/* Top Window Control Dots */}
          <div className="flex items-center gap-1.5 mb-3 px-2 pt-1">
            <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
          </div>

          {/* Inner Dashboard Viewport */}
          <div className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* 1. Country Health Card */}
            <div className="md:col-span-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 flex flex-col justify-between">
              <h3 className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-4">
                Country Health
              </h3>
              <div className="space-y-3">
                {countryHealth.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className="font-semibold text-[#1E293B]">
                      {item.country}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] ${item.bg} ${item.text}`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Payroll Calendar Card */}
            <div className="md:col-span-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 flex flex-col justify-between">
              <h3 className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-4">
                Payroll Calendar
              </h3>
              <div className="space-y-3">
                {payrollCalendar.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className="text-[#64748B] font-medium">
                      {item.label}
                    </span>
                    <span className="font-bold text-[#0B192C]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Integration Status Card */}
            <div className="md:col-span-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 flex flex-col justify-between">
              <h3 className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-4">
                Integration Status
              </h3>
              <div className="space-y-3">
                {integrationStatus.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className="text-[#64748B] font-medium">
                      {item.label}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] ${item.bg} ${item.text}`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Payroll Readiness Card */}
            <div className="md:col-span-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 flex flex-col justify-between">
              <h3 className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-4">
                Payroll Readiness
              </h3>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#64748B] font-medium">Wave 2 scope</span>
                <span className="px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-[#DCFCE7] text-[#16A34A]">
                  On track
                </span>
              </div>
            </div>

            {/* 5. Actions Due This Month Card */}
            <div className="md:col-span-8 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 flex flex-col justify-between">
              <h3 className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-4">
                Actions Due This Month
              </h3>
              <div className="space-y-3">
                {actionsDue.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className="text-[#64748B] font-medium">
                      {item.label}
                    </span>
                    <span className="font-bold text-[#0B192C]">
                      {item.scope}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
