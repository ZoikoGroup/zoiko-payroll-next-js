"use client";

import React from "react";

export default function WhatIsLegalCenterCard() {
  return (
    <section className="w-full bg-white py-10 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-6 sm:p-8 space-y-3">
          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight">
            What is the Legal Center?
          </h3>

          {/* Description Paragraphs */}
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            The public index for approved legal and governance documents —
            privacy/cookie notices, website/service terms, DPA, acceptable-use
            rules, accessibility information, legal notices and sitemap. It
            helps you find the current document and version.
          </p>

          <p className="text-xs sm:text-sm text-[#64748B] italic leading-relaxed">
            It does not determine which contract or law applies to your
            organization — that&apos;s a question for the applicable document itself,
            or your legal counsel.
          </p>
        </div>
      </div>
    </section>
  );
}
