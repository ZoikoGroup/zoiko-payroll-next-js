"use client";

import React from "react";

interface LegalDocCard {
  title: string;
  description: string;
  badgeText: string;
  badgeStyle: string;
}

const legalDocs: LegalDocCard[] = [
  {
    title: "Privacy Notice",
    description: "Personal-data processing disclosure and rights/contact.",
    badgeText: "Separate authority",
    badgeStyle: "bg-[#E0F2FE] text-[#0284C7]",
  },
  {
    title: "Cookie Notice",
    description: "Cookie/storage disclosure and operational choices.",
    badgeText: "Separate authority",
    badgeStyle: "bg-[#E0F2FE] text-[#0284C7]",
  },
  {
    title: "Service Terms",
    description: "Purchased/service-use terms once approved.",
    badgeText: "Blocked — not yet approved",
    badgeStyle: "bg-[#FEF3C7] text-[#D97706]",
  },
  {
    title: "Acceptable Use Policy",
    description: "Service-use restrictions when incorporated.",
    badgeText: "Applicable when incorporated",
    badgeStyle: "bg-[#E0F2FE] text-[#0284C7]",
  },
  {
    title: "Data Processing Addendum",
    description: "Contractual customer processing terms.",
    badgeText: "Contractual document",
    badgeStyle: "bg-[#E0F2FE] text-[#0284C7]",
  },
  {
    title: "Product Documentation",
    description: "Current product behavior reference.",
    badgeText: "Product authority",
    badgeStyle: "bg-[#E0F2FE] text-[#0284C7]",
  },
  {
    title: "Trust & Security",
    description: "Controls and evidence, reviewed independently.",
    badgeText: "Trust authority",
    badgeStyle: "bg-[#E0F2FE] text-[#0284C7]",
  },
  {
    title: "Legal Notices",
    description: "Operator, IP, copyright and trademark notices.",
    badgeText: "Legal notice",
    badgeStyle: "bg-[#E0F2FE] text-[#0284C7]",
  },
];

export default function RelatedLegalDocumentsSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 lg:py-20 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Section */}
        <div className="space-y-3 max-w-3xl">
          {/* Category Tag */}
          <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            <span className="font-bold">/</span>
            <span>RELATED LEGAL DOCUMENTS</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-[32px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Navigation, not implied precedence.
          </h2>
        </div>

        {/* 4-Column Grid for Legal Documents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {legalDocs.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
                  {doc.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div>
                <span
                  className={`inline-block text-[11px] font-semibold px-3 py-1 rounded-full ${doc.badgeStyle}`}
                >
                  {doc.badgeText}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner with Background Image */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-sm">
          <div
            className="w-full bg-cover bg-center bg-no-repeat p-8 sm:p-10 text-white min-h-[160px] flex flex-col justify-center relative"
            style={{
              backgroundImage: `url('/images/web/last.png')`,
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2540]/90 via-[#0B2540]/85 to-[#0B2540]/90" />

            <div className="relative z-10 max-w-2xl space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Every visible clause maps to an approved source.
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-135">
                No generated fallback fills a missing clause — an unapproved
                clause is omitted, not guessed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
