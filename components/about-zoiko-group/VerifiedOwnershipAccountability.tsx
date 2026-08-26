"use client";

import React from "react";
import { ArrowDown } from "lucide-react";

interface HierarchyNode {
  tag: string;
  title: string;
  meta: { label: string; value: string }[];
  verifiedLink?: boolean;
}

const hierarchyData: HierarchyNode[] = [
  {
    tag: "GROUP CONTEXT",
    title: "Zoiko Group",
    meta: [
      { label: "Type", value: "Group context" },
      { label: "Status", value: "Verified" },
      { label: "Source", value: "Approved corporate record" },
    ],
    verifiedLink: true,
  },
  {
    tag: "OPERATING ENTITY",
    title: "Zoiko Tech Inc.",
    meta: [
      { label: "Type", value: "Operator relationship" },
      { label: "Status", value: "Verified" },
      { label: "Effective", value: "Current record" },
    ],
    verifiedLink: true,
  },
  {
    tag: "PRODUCT",
    title: "Zoiko Payroll",
    meta: [
      { label: "Type", value: "Owned/operated product" },
      { label: "Status", value: "Verified" },
    ],
    verifiedLink: false,
  },
  {
    tag: "CURRENT AUTHORITIES",
    title: "Product · Trust · Support",
    meta: [
      { label: "Type", value: "Functional authority" },
      { label: "Status", value: "Scoped, current" },
    ],
    verifiedLink: false,
  },
];

export default function VerifiedOwnershipAccountability() {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 lg:py-20 font-sans antialiased">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Content */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          {/* Main Title (32px) */}
          <h2 className="text-2xl sm:text-[32px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Verified ownership & accountability
          </h2>

          {/* Description Paragraph (17px) */}
          <p className="text-base sm:text-[17px] text-[#64748B] leading-relaxed">
            Every relationship below carries an approved type, current status,
            source authority and effective date. Unverified relationships are
            omitted rather than guessed.
          </p>
        </div>

        {/* Vertical Flow / Hierarchy Cards */}
        <div className="flex flex-col items-center space-y-3 max-w-2xl mx-auto w-full">
          {hierarchyData.map((node, idx) => (
            <React.Fragment key={idx}>
              {/* Card Container */}
              <div className="w-full bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow space-y-3 text-left">
                {/* Tag / Category */}
                <div className="text-[11px] font-semibold tracking-wider text-[#0284C7] uppercase">
                  {node.tag}
                </div>

                {/* Node Title */}
                <h3 className="text-xl font-bold text-[#0F172A] tracking-tight">
                  {node.title}
                </h3>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-[#64748B]">
                  {node.meta.map((item, mIdx) => (
                    <span key={mIdx}>
                      <strong className="font-semibold text-[#475569]">
                        {item.label}:
                      </strong>{" "}
                      <span className="text-[#64748B]">{item.value}</span>
                    </span>
                  ))}
                </div>

                {/* Verification Link */}
                {node.verifiedLink && (
                  <div className="pt-1">
                    <button className="text-xs sm:text-sm font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors inline-flex items-center gap-1">
                      How is this verified?{" "}
                      <span className="text-[10px]">▾</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Connecting Down Arrow (Rendered for all except the last card) */}
              {idx < hierarchyData.length - 1 && (
                <div className="py-1 text-[#94A3B8]">
                  <ArrowDown className="w-4 h-4 stroke-[2]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
