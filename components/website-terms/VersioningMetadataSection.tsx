"use client";

import React from "react";

interface StatusBadge {
  label: string;
  dotColor: string;
  bgColor: string;
  textColor: string;
}

const statusBadges: StatusBadge[] = [
  {
    label: "Draft",
    dotColor: "bg-gray-400",
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
  },
  {
    label: "In review",
    dotColor: "bg-gray-400",
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
  },
  {
    label: "Scheduled",
    dotColor: "bg-amber-500",
    bgColor: "bg-amber-100/70",
    textColor: "text-amber-800",
  },
  {
    label: "Current",
    dotColor: "bg-emerald-500",
    bgColor: "bg-emerald-100/70",
    textColor: "text-emerald-800",
  },
  {
    label: "Superseded",
    dotColor: "bg-gray-400",
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
  },
  {
    label: "Withdrawn",
    dotColor: "bg-gray-400",
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
  },
  {
    label: "Archived",
    dotColor: "bg-gray-400",
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
  },
  {
    label: "Corrected",
    dotColor: "bg-amber-500",
    bgColor: "bg-amber-100/70",
    textColor: "text-amber-800",
  },
];

interface MetadataRow {
  label: string;
  value: string;
}

const metadataList: MetadataRow[] = [
  { label: "Version ID", value: "website-terms-v1.0" },
  { label: "Status", value: "Prepared for approval" },
  { label: "Supersedes", value: "None — first published version" },
  {
    label: "Scope summary",
    value: "Public website, expressly covered features",
  },
  { label: "Locale", value: "English (US)" },
];

export default function VersioningMetadataSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Section */}
        <div className="space-y-3 max-w-3xl">
          {/* Category Tag */}
          <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            <span className="font-bold">/</span>
            <span>VERSIONING + METADATA</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-[32px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Current is a legal state, not an edit timestamp.
          </h2>
        </div>

        {/* Status Badges Row */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {statusBadges.map((badge, idx) => (
            <span
              key={idx}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${badge.bgColor} ${badge.textColor}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${badge.dotColor}`} />
              {badge.label}
            </span>
          ))}
        </div>

        {/* Metadata Table Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-6 sm:p-8">
          <div className="divide-y divide-dashed divide-gray-200">
            {metadataList.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 py-4 first:pt-0 last:pb-0 items-center text-xs sm:text-sm"
              >
                <div className="sm:col-span-4 text-[#94A3B8] font-medium">
                  {row.label}
                </div>
                <div className="sm:col-span-8 text-[#0F172A] font-bold sm:text-right">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
