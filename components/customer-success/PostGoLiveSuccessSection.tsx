"use client";

import React from "react";

export default function PostGoLiveSuccessSection() {
  const globalHealth = [
    {
      country: "United Kingdom",
      status: "Healthy",
      bg: "bg-[#DCFCE7]",
      text: "text-[#16A34A]",
    },
    {
      country: "United States",
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
    {
      country: "India",
      status: "Healthy",
      bg: "bg-[#DCFCE7]",
      text: "text-[#16A34A]",
    },
  ] as const;

  const monthMetrics = [
    { label: "Actions due", value: "7" },
    { label: "Critical incidents", value: "0" },
    { label: "Recurring clusters", value: "2" },
  ] as const;

  return (
    <div className="flex items-center justify-center py-16 md:py-24 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0E7FF] text-[#4338CA] text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4338CA]" />
              Implementation &amp; Services
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B192C] tracking-tight leading-[1.15] mb-6">
              Keep payroll operating well after go-live.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal mb-8 max-w-xl">
              A structured success model that helps your teams stabilize
              operations, monitor payroll health, strengthen adoption, and keep
              improving as your business changes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10 w-full sm:w-auto">
              <a
                href="#success-model"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#0B192C] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-semibold text-center transition-colors shadow-sm"
              >
                Explore our success model
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white border border-[#E2E8F0] hover:bg-slate-50 text-[#0B192C] text-xs sm:text-sm font-semibold text-center transition-colors shadow-xs"
              >
                Talk to Zoiko Payroll
              </a>
            </div>

            {/* Feature List Footer */}
            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-[#475569]">
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-[#2563EB]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Goal-led planning</span>
              </div>

              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-[#2563EB]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>Explainable health</span>
              </div>

              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-[#2563EB]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span>Global &amp; local view</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code/UI Mockup */}
          <div className="lg:col-span-6 relative pt-8 pb-8 pr-4">
            {/* Top Floating Badge */}
            <div className="absolute -top-1 right-4 sm:right-12 z-20 bg-white rounded-2xl border border-[#E2E8F0] shadow-xl p-3.5 px-5 max-w-[240px]">
              <p className="text-xs font-bold text-[#0B192C]">Success plan</p>
              <p className="text-[11px] text-[#64748B] truncate">
                Standardize payroll close · Wave 1
              </p>
            </div>

            {/* Laptop/App Window Frame */}
            <div className="w-full bg-[#0F172A] rounded-3xl p-3 sm:p-4 shadow-2xl relative border border-[#1E293B]">
              {/* Window Controls Dot Header */}
              <div className="flex items-center gap-1.5 mb-3 px-2 pt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              </div>

              {/* Inside Dashboard Area */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-12 gap-4">
                {/* Global Payroll Health Card */}
                <div className="sm:col-span-7 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4">
                  <h4 className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-4">
                    Global Payroll Health
                  </h4>
                  <div className="space-y-3">
                    {globalHealth.map((item, idx) => (
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

                {/* This Month Metrics Card */}
                <div className="sm:col-span-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 flex flex-col justify-between">
                  <h4 className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-3">
                    This Month
                  </h4>
                  <div className="space-y-2.5">
                    {monthMetrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-xs border-b border-[#E2E8F0]/60 pb-1.5 last:border-none last:pb-0"
                      >
                        <span className="text-[#64748B] font-medium">
                          {metric.label}
                        </span>
                        <span className="font-bold text-[#0B192C]">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Floating Badge */}
            <div className="absolute -bottom-2 left-2 sm:left-4 z-20 bg-white rounded-2xl border border-[#E2E8F0] shadow-xl p-3.5 px-5 max-w-[240px]">
              <p className="text-xs font-bold text-[#0B192C]">Next review</p>
              <p className="text-[11px] text-[#64748B] truncate">
                Governed by account cadence
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
