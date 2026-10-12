"use client";

import React from "react";

interface StatusBadge {
  label: string;
  bg: string;
  text: string;
}

interface MetadataCard {
  label: string;
  value: string;
}

const statusBadges: StatusBadge[] = [
  { label: "Upcoming", bg: "bg-[#E3EFFC]", text: "text-[#1C5182]" },
  { label: "Live", bg: "bg-[#FCE3E3]", text: "text-[#A82B2B]" },
  { label: "Completed", bg: "bg-slate-100", text: "text-slate-600" },
  { label: "On demand", bg: "bg-[#E3F0E7]", text: "text-[#20502F]" },
  { label: "Open", bg: "bg-[#E3F0E7]", text: "text-[#20502F]" },
  { label: "Waitlist", bg: "bg-[#FEF6E1]", text: "text-[#876517]" },
  { label: "Closed", bg: "bg-slate-100", text: "text-slate-500" },
  { label: "Not required", bg: "bg-slate-100", text: "text-slate-500" },
  { label: "Invite-only", bg: "bg-[#EBF3FB]", text: "text-[#2C5282]" },
];

const metadataCards: MetadataCard[] = [
  { label: "SOURCE TIME ZONE", value: "CET (UTC+1)" },
  { label: "YOUR LOCAL TIME", value: "Auto-detected" },
  { label: "ACCESSIBILITY", value: "Captions confirmed" },
  { label: "REPLAY", value: "Pending" },
  { label: "LAST UPDATED", value: "Aug 30, 2026" },
];

export default function EventStatusSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3 text-center">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              EVENT STATUS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            Every lifecycle state, clearly labeled
          </h2>
        </div>

        {/* Status Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {statusBadges.map((badge, idx) => (
            <span
              key={idx}
              className={`${badge.bg} ${badge.text} text-xs font-bold px-3.5 py-1.5 rounded-full tracking-tight transition-transform hover:scale-105 cursor-default`}
            >
              {badge.label}
            </span>
          ))}
        </div>

        {/* 5-Column Metadata Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
          {metadataCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs flex flex-col justify-between space-y-2"
            >
              <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                {card.label}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                {card.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
