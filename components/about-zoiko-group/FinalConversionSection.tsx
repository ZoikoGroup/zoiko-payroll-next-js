"use client";

import React from "react";
import Link from "next/link";

export default function FinalConversionSection() {
  return (
    <section className="relative w-full overflow-hidden font-sans antialiased text-white">
      {/* Background Image Container with Dark Blue Tint Overlay */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat py-20"
        style={{
          backgroundImage: `url('/images/about-zoiko/final.jpg')`,
        }}
      >
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071F34F2] to-[#0A3758CC]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Category Tag */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#4FA3D1] uppercase">
            <span className="font-bold">/</span>
            <span>FINAL CONVERSION</span>
          </div>

          {/* Main Title (32px) */}
          <h2 className="text-2xl sm:text-[32px] font-bold tracking-tight text-white leading-tight">
            Explore Zoiko Payroll in context.
          </h2>

          {/* Description Paragraph (17px) */}
          <p className="text-base sm:text-[17px] text-[#FFFFFFB2] max-w-xl mx-auto leading-relaxed">
            Now that the ownership and ecosystem context is clear, see what
            Zoiko Payroll actually does — or talk to us about your operating
            model
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Primary Solid White Button */}
            <Link
              href="/explore-zoiko-payroll"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-[#0F172A] text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-all text-center shadow-sm"
            >
              Explore Zoiko Payroll
            </Link>

            {/* Secondary Transparent Outline Button */}
            <Link
              href="/book-demo"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/10 hover:border-white/30 transition-all text-center"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
