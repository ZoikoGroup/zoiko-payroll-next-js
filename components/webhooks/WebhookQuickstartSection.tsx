"use client";

import React from "react";

interface QuickstartStep {
  number: string;
  label: string;
}

interface StatusBadge {
  label: string;
  style: string;
  dotStyle: string;
}

const steps: QuickstartStep[] = [
  { number: "01", label: "Choose environment" },
  { number: "02", label: "Register endpoint" },
  { number: "03", label: "Select events" },
  { number: "04", label: "Confirm signing secret" },
  { number: "05", label: "Verify signature" },
  { number: "06", label: "Acknowledge" },
  { number: "07", label: "Process idempotently" },
  { number: "08", label: "Monitor delivery" },
];

const statusBadges: StatusBadge[] = [
  {
    label: "DRAFT",
    style: "bg-[#E8F0FE] text-[#1A73E8]",
    dotStyle: "bg-[#1A73E8]",
  },
  {
    label: "VERIFICATION REQUIRED",
    style: "bg-[#FEF7E0] text-[#B06000]",
    dotStyle: "bg-[#B06000]",
  },
  {
    label: "ACTIVE",
    style: "bg-[#E6F4EA] text-[#137333]",
    dotStyle: "bg-[#137333]",
  },
  {
    label: "PAUSED",
    style: "bg-[#F1F5F9] text-slate-600",
    dotStyle: "bg-slate-400",
  },
  {
    label: "DISABLED",
    style: "bg-[#F1F5F9] text-slate-500",
    dotStyle: "bg-slate-400",
  },
  {
    label: "ERROR",
    style: "bg-[#FDE8E8] text-red-600",
    dotStyle: "bg-red-600",
  },
];

export default function WebhookQuickstartSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg border border-slate-200/80">
              <img
                src="/images/footer-integrations/42.png"
                alt="Two people reviewing analytics dashboard on a monitor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 space-y-4">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="w-4 h-[2px] bg-[#0A8FD0] inline-block" />
              <span>WEBHOOK QUICKSTART + SUBSCRIPTION SETUP</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
              Never an invented sandbox. Never a real secret shown publicly
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-lg">
              Code and headers come from the current approved contract, or use a
              clearly labeled structural placeholder.
            </p>
          </div>
        </div>

        {/* 8-Step Process Bar Grid */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs divide-y lg:divide-y-0 lg:divide-x divide-slate-100 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 overflow-hidden">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 text-center flex flex-col items-center justify-center space-y-2 hover:bg-slate-50/50 transition-colors"
            >
              <span className="text-[11px] font-bold text-[#0A8FD0] font-mono">
                {step.number}
              </span>
              <span className="text-xs font-bold text-[#07243B] leading-snug">
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Status Badges Matrix (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {statusBadges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs flex items-center justify-center"
            >
              <span
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider font-mono ${badge.style}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${badge.dotStyle}`}
                />
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
