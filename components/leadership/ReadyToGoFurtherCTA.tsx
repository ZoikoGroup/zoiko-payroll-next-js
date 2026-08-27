"use client";

import React from "react";
import Link from "next/link";

export default function ReadyToGoFurtherCTA() {
  return (
    <section className="w-full bg-[#0A2E4B] py-16 lg:py-24 font-sans antialiased text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Subtitle / Category Tag */}
        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#38BDF8] uppercase">
          <span className="font-bold">/</span>
          <span>READY TO GO FURTHER?</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-[32px] font-bold tracking-tight text-white leading-tight">
          Accountability comes first. Evaluation comes after
        </h2>

        {/* Supporting Text */}
        <p className="text-xs sm:text-sm text-[#B9CDDD] max-w-155 mx-auto leading-relaxed">
          Existing customer? Help Center, System Status and Contact resolve most
          needs without a sales detour.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {/* Primary Gradient Button */}
          <Link
            href="/book-demo"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] text-white text-xs sm:text-sm font-semibold shadow-md hover:opacity-95 transition-all text-center"
          >
            Book a demo
          </Link>

          {/* Secondary Outline Button */}
          <Link
            href="/trust-and-security"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/10 hover:border-white/30 transition-all text-center"
          >
            Explore Trust and Security
          </Link>
        </div>
      </div>
    </section>
  );
}
