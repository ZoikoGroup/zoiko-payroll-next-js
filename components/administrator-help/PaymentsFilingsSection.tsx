"use client";

import React from "react";

interface StatusBadge {
  label: string;
}

interface TimelineItem {
  title: string;
  owner: string;
  timestamp: string;
}

const statusBadges: StatusBadge[] = [
  { label: "Funding" },
  { label: "Authorization" },
  { label: "Submission" },
  { label: "Processing" },
  { label: "Settlement" },
  { label: "Return" },
  { label: "Unknown" },
];

const timelineData: TimelineItem[] = [
  {
    title: "Payment submitted to banking provider",
    owner: "Bank / Provider",
    timestamp: "Aug 26, 2026, 09:00",
  },
  {
    title: "Funding authorized",
    owner: "C. Alvarez, Customer Finance",
    timestamp: "Aug 25, 2026, 16:20",
  },
  {
    title: "Statutory filing prepared",
    owner: "Zoiko Payroll",
    timestamp: "Aug 25, 2026, 11:10",
  },
  {
    title: "Payroll run approved",
    owner: "R. Tanaka, Approver",
    timestamp: "Aug 24, 2026, 15:45",
  },
];

export default function PaymentsFilingsSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[1px] text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>PAYMENTS & FILINGS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[32px] font-bold tracking-[1px] text-[#07243B] leading-tight">
            Never a blind retry that could create a duplicate payment
          </h2>

          {/* Status Badges */}
          <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto gap-2.5 pt-2">
            {statusBadges.map((badge, idx) => (
              <span
                key={idx}
                className="bg-white text-slate-700 font-semibold text-xs px-4 py-1.5 rounded-full border border-slate-200/80 shadow-2xs tracking-[1px] cursor-default"
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline Flow Container */}
        <div className="max-w-xl mx-auto pl-4 sm:pl-8">
          <div className="relative border-l-2 border-slate-200 space-y-8 pl-6 sm:pl-8 py-2">
            {timelineData.map((item, index) => (
              <div key={index} className="relative group">
                {/* Node Dot / Outer Circle Indicator */}
                <div className="absolute -left-[31px] sm:-left-[42px] top-0.5 w-5 h-5 rounded-full bg-white border-2 border-[#0A8FD0] flex items-center justify-center shadow-2xs">
                  <div className="w-2 h-2 rounded-full bg-[#0A8FD0]" />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#07243B] tracking-[1px]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium tracking-[1px]">
                    Owner: {item.owner} · {item.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtext Footnote */}
        <p className="text-center text-xs text-slate-400 font-medium tracking-[1px] mx-auto leading-relaxed">
          Filing responsibility stays with the applicable jurisdiction and
          provider/authority — this view shows status and next owner, never a
          filing guarantee.
        </p>
      </div>
    </section>
  );
}
