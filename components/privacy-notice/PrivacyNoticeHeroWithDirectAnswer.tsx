"use client";

import React from "react";
import Link from "next/link";

interface MetadataStat {
  label: string;
  value: string;
  valueColor?: string;
}

const metadataStats: MetadataStat[] = [
  {
    label: "CURRENT STATE",
    value: "Prepared for approval",
    valueColor: "text-[#B45309]", // Golden/brown tone
  },
  {
    label: "EFFECTIVE DATE",
    value: "Not yet in effect",
    valueColor: "text-[#0F172A]",
  },
  {
    label: "LAST UPDATED",
    value: "Aug 20, 2026",
    valueColor: "text-[#0F172A]",
  },
  {
    label: "PUBLIC VERSION",
    value: "Draft v1.0",
    valueColor: "text-[#0F172A]",
  },
];

export default function PrivacyNoticeHeroWithDirectAnswer() {
  return (
    <div className="w-full font-sans antialiased">
      {/* SECTION 1: HERO WITH BACKGROUND IMAGE & OVERLAY */}
      <section className="relative w-full bg-[#0F172A]">
        {/* Background Image Container */}
        <div
          className="relative w-full min-h-[520px] lg:min-h-[580px] bg-cover bg-center bg-no-repeat pt-12 pb-24 lg:pt-16 lg:pb-32"
          style={{
            backgroundImage: `url('/images/legal/privacy-hero.png')`,
          }}
        >
          {/* Semi-transparent Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071C2EE0] via-[#0A3254BF] to-[#0A8FD066]" />

          {/* Foreground Glass Box Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl bg-[#071C2E8C] backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl space-y-5">
              {/* Tag Line */}
              <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase">
                <span className="font-bold text-[#8FD0F2]">/</span>
                <span>PRIVACY NOTICE</span>
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-tight leading-[1.18]">
                How Zoiko Payroll handles personal data
              </h1>

              {/* Description */}
              <p className="text-[#DCEAF5] leading-relaxed">
                Read the current approved Privacy Notice for the processing
                contexts it covers, including what personal data may be handled,
                why, where it may come from, how it may be disclosed or
                transferred, how long it may be kept, and which privacy rights
                or choices may apply.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="#understand"
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  Understand this notice
                </Link>
                <Link
                  href="#choices"
                  className="px-5 py-2.5 rounded-lg hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-all shadow-sm"
                >
                  Privacy choices and requests
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* OVERLAPPING FLOATING DIVIDER CARD (Metadata Bar) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[#E8F0FF] border border-[#E1E8F0] rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-blue-200/80 text-center md:text-left">
              {metadataStats.map((stat, idx) => (
                <div key={idx} className="p-4 sm:p-5 space-y-1">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#64748B] uppercase block">
                    {stat.label}
                  </span>
                  <p
                    className={`text-xs sm:text-sm font-bold ${stat.valueColor || "text-[#0F172A]"}`}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: LIGHT SECTION WITH DIRECT ANSWER */}
      <section className="w-full bg-white pt-24 sm:pt-28 pb-16 lg:pb-20 font-sans text-[#0F172A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          {/* Subtitle / Tag */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            <span className="font-bold text-[#0284C7]">/</span>
            <span>DIRECT ANSWER</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0F172A] tracking-tight">
            What does this notice cover?
          </h2>

          {/* Description */}
          <p className="text-[17px] text-[#5B646B] leading-relaxed max-w-4xl mx-auto">
            This notice covers approved personal-data processing within its
            stated scope — which may include website, business-contact,
            customer-account and Zoiko Payroll service contexts as defined by
            the current notice. It does not decide which privacy law applies to
            your situation, who is the decision maker for every activity, or
            whether any specific request will be granted.
          </p>
        </div>
      </section>
    </div>
  );
}
