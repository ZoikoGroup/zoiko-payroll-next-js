"use client";

import React from "react";
import Link from "next/link";

interface MetaItem {
  label: string;
  value: string;
  isWarning?: boolean;
}

const metadataList: MetaItem[] = [
  { label: "CURRENT STATE", value: "Prepared for approval", isWarning: true },
  { label: "EFFECTIVE DATE", value: "Not yet in effect" },
  { label: "LAST UPDATED", value: "Aug 22, 2026" },
  { label: "SCOPE", value: "zoikopayroll.com & app" },
];

export default function CookieNoticeHero() {
  return (
    <div className="w-full font-sans antialiased">
      {/* SECTION 1: Full-width Image Background with Floating Glass Card */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat pt-16 pb-28 sm:pt-20 sm:pb-32 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
        style={{
          backgroundImage: `url('/images/legal/cookie-hero.png')`,
        }}
      >
        {/* Dark Teal/Navy Backdrop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071C2EEB] via-[#071C2EB8] to-[#071C2E26]" />

        {/* Centered Glassmorphic Card */}
        <div className="relative z-10 w-full max-w-xl bg-[#071C2E8C] backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 text-white shadow-2xl">
          {/* Category Tag */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#38BDF8] uppercase">
            <span className="w-3 h-0.5 bg-[#38BDF8]" />
            <span>COOKIE NOTICE</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl md:text-[34px] font-bold tracking-tight text-white leading-tight">
            How Zoiko Payroll uses cookies and similar technologies.
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Understand the approved categories, current technology inventory,
            providers, purposes and duration behind cookies and similar
            technologies used within this notice's stated scope.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] hover:opacity-95 shadow-sm transition-all"
            >
              Open Cookie Settings
            </button>
            <button
              type="button"
              className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white border border-white/30 hover:bg-white/10 transition-colors"
            >
              Explore the product
            </button>
          </div>

          {/* Subtext */}
          <p className="text-[11px] text-slate-300 leading-normal pt-1">
            Reviewing this notice does not change your preferences — that happens
            only in{" "}
            <span className="underline cursor-pointer hover:text-white">
              Cookie Settings
            </span>
            . For broader personal-data rights, see the{" "}
            <Link href="/privacy-notice" className="underline hover:text-white">
              Privacy Notice
            </Link>
            .
          </p>
        </div>

        {/* DIVIDER DIV: Overlapping Metadata Strip Positioned at the Bottom Edge */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-full max-w-5xl px-4 sm:px-6 z-20">
          <div className="bg-white border border-slate-200/90 rounded-2xl shadow-xl p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {metadataList.map((item, idx) => (
              <div
                key={idx}
                className={`space-y-1 ${
                  idx !== 0 ? "pt-3 md:pt-0 md:pl-6" : ""
                }`}
              >
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#94A3B8]">
                  {item.label}
                </span>
                <p
                  className={`text-xs sm:text-sm font-semibold ${
                    item.isWarning ? "text-[#B45309]" : "text-[#0F172A]"
                  }`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Normal Light Background Section */}
      <section className="w-full bg-white pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0284C7]">
            / DIRECT ANSWER
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
            What does this notice cover?
          </h2>
          <p className="text-[17px] text-[#5B646B] leading-relaxed">
            This notice explains approved cookies and similar technologies used
            within its stated scope — their categories, purposes, providers,
            technical type, persistence and how to manage preferences. This
            notice is disclosure only; Cookie Settings owns the operational
            preference controls. Exact technologies and consent rules are
            sourced from the Cookie Technology Registry and Consent Policy
            Registry — legal applicability is never determined by IP address,
            language or region.
          </p>
        </div>
      </section>
    </div>
  );
}