"use client";

import React from "react";
import Link from "next/link";

export default function LeadershipHeroSection() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden font-sans">
      {/* Background Image */}
      <img
        src="/images/leadership/hero.png"
        alt="Team collaborating in an office"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071C2EE0] via-[#0A3254BF] to-[#0A8FD066]" />

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-6 py-16">
        {/* Category Pill / Tag */}
        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wider text-[#38BDF8] uppercase">
          <span className="text-[#38BDF8] font-bold">/</span>
          <span>LEADERSHIP</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-[38px] font-bold text-white tracking-tight leading-tight max-w-3xl">
          Accountability behind Zoiko Payroll
        </h1>

        {/* Subtitle / Description */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
          Leadership here means verified accountability — not a celebrity page.
          Every role, scope and status shown is sourced, approved and kept
          current.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
          {/* Primary Filled Blue Button */}
          <Link
            href="/book-demo"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] hover:from-[#247ab1] hover:to-[#185485] text-white font-medium text-sm transition-all shadow-md active:scale-[0.99] text-center"
          >
            Book a demo
          </Link>

          {/* Secondary Glassmorphism / Outline Button */}
          <Link
            href="/trust-and-security"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FFFFFF26] hover:bg-white/30 text-white border border-white/20 font-medium text-sm transition-all text-center backdrop-blur-sm"
          >
            Explore Trust and Security
          </Link>
        </div>
      </div>
    </section>
  );
}
