"use client";

import React from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function WebsiteTermsHeroSection() {
  return (
    <div className="w-full font-sans antialiased">
      {/* Hero Section with Image Background */}
      <section className="relative w-full overflow-hidden text-white">
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat py-16"
          style={{
            backgroundImage: `url('/images/web/hero.jpg')`,
          }}
        >
          {/* Dark Blue Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071C2EE0] via-[#0A3254BF] to-[#0A8FD066]" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {/* Category Tag */}
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#4FA3D1] uppercase">
              <span className="font-bold">/</span>
              <span>WEBSITE TERMS OF USE</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
              Terms for using the Zoiko Payroll website.
            </h1>

            {/* Description Paragraph */}
            <p className="text-[14.5px] text-[#FFFFFFB8] max-w-2xl leading-relaxed">
              These are the current approved terms for the public Zoiko Payroll
              website and the public-site features expressly covered by them.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              {/* Primary Blue Button */}
              <Link
                href="#terms"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#0F6FAE] to-[#4FA3D1] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-semibold transition-all text-center shadow-sm"
              >
                Read the terms
              </Link>

              {/* Secondary White Button */}
              <Link
                href="#coverage"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-[#0F172A] hover:bg-gray-100 text-xs sm:text-sm font-semibold transition-all text-center shadow-sm"
              >
                See what these terms cover
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Yellow Service Boundary Alert Bar */}
      <section className="w-full bg-[#FDF1D6] border-t border-b border-[#F3D99A] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex gap-2 text-[13px] text-[#9A6B00] leading-relaxed">
          <AlertTriangle className="w-4 h-4 mt-2 text-[#9A6B00] shrink-0 inline-block" />
          <span>
            <strong className="font-bold text-[#9A6B00]">
              Service boundary:
            </strong>{" "}
            these Website Terms cover the public website within approved scope.
            They do not automatically govern purchased Zoiko Payroll services —
            see Zoiko Payroll Service Terms (blocked until these terms are
            approved).
          </span>
        </div>
      </section>
    </div>
  );
}
