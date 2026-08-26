"use client";

import React from "react";
import Link from "next/link";

export default function ZoikoEcosystemHero() {
  return (
    <section className="w-full font-sans antialiased text-white">
      {/* Background Container using bg.png */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat py-12"
        style={{
          backgroundImage: `url('/images/about-zoiko/bg.png')`,
        }}
      >
        {/* Dark Overlay for content legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#091D2FF2] via-[#091D2FE0] via-[#0B2A428C] to-[#0B2A4247]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              {/* Tag / Category */}
              <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#7FC1EE] uppercase">
                <span className="font-bold">/</span>
                <span>COMPANY / ZOIKO GROUP</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-[38px] font-bold tracking-tight text-white leading-tight">
                Understand the ownership context and technology ecosystem behind
                Zoiko Payroll
              </h1>

              {/* Description Paragraph */}
              <p className="text-[17px] lg:text-base text-[#94A3B8] leading-relaxed max-w-2xl">
                Verified group, operating-company and product relationships are
                represented here, while approved products remain independently
                governed and connect only through defined ecosystem pathways.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                {/* Primary Button */}
                <Link
                  href="/book-demo"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] text-white text-xs sm:text-sm font-semibold shadow-md hover:opacity-95 transition-all text-center"
                >
                  Book a demo →
                </Link>

                {/* Secondary Outline Button */}
                <Link
                  href="/ecosystem"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/10 hover:border-white/30 transition-all text-center"
                >
                  Explore the Zoiko ecosystem
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Image (Natural fit) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <img
                src="/images/about-zoiko/hero.png"
                alt="Zoiko Group office team collaborating"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
