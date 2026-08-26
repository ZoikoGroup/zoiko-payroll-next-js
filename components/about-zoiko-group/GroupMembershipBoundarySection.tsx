"use client";

import React from "react";
import { Check, X } from "lucide-react";

const mayMeanItems = [
  "Shared strategic/technology ecosystem context",
  "Approved integrations or connected-suite pathways",
  "Potential shared identity/platform services, where explicitly supported",
  "Consistent trust/design/accessibility principles",
  "Cross-product navigation and expansion routes",
  "Coordinated support handoffs, where implemented",
];

const doesNotMeanItems = [
  "One legal employer or contracting entity",
  "Automatic data movement",
  "Universal account access",
  "Identical security/privacy/availability/compliance scope",
  "Bundled commercial entitlement or one price",
  "One support team for every product/incident",
  "Shared admin authority",
];

export default function GroupMembershipBoundarySection() {
  return (
    <section className="w-full bg-white py-12 lg:py-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Section */}
        <div className="space-y-3 ">
          {/* Category Tag */}
          <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            <span className="font-bold">/</span>
            <span>WHAT GROUP MEMBERSHIP MEANS / DOES NOT MEAN</span>
          </div>

          {/* Title (32px) */}
          <h2 className="text-2xl sm:text-[32px] font-bold text-[#0F172A] tracking-tight leading-tight">
            The boundary that prevents the most dangerous assumption.
          </h2>

          {/* Subtitle / Description (17px) */}
          <p className="text-base max-w-2xl sm:text-[15px] text-[#64748B] leading-relaxed">
            Group membership does not itself create shared data access, shared
            entitlement, one contract, one administrator role, one service level
            or one legal responsibility.
          </p>
        </div>

        {/* Comparison Box (White outer border/container) */}
        <div className="w-full bg-[#F9FAFB] rounded-2xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: MAY MEAN, WHEN APPROVED (Light Gray/White Background) */}
          <div className="bg-[#F8FAFC] p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#16A34A] uppercase">
              <Check className="w-4 h-4 stroke-[3]" />
              <span>MAY MEAN, WHEN APPROVED</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-[#334155]">
              {mayMeanItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#64748B] select-none">•</span>
                  <span className="leading-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: DOES NOT MEAN (#FBE8E8 Background) */}
          <div className="bg-[#FBE8E8] p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#DC2626] uppercase">
              <X className="w-4 h-4 stroke-[3]" />
              <span>DOES NOT MEAN</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-[#475569]">
              {doesNotMeanItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#64748B] select-none">•</span>
                  <span className="leading-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
