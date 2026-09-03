"use client";

import React from "react";
import Image from "next/image";

export default function CustomerStoriesHeroSection() {
  return (
    <section className="w-full bg-white text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Content */}
        <div className="lg:col-span-6 space-y-6">
          {/* Eyebrow Header */}
          <div className="flex items-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              CUSTOMER STORIES
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold tracking-tight leading-[1.15] text-[#07243B]">
            Real customer outcomes, backed by evidence — not guarantees
          </h1>

          {/* Body Text */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
            Every story here reflects one customer&apos;s specific experience
            and context. Results vary by organization, jurisdiction and
            configuration — a story is evidence, not a promise.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              className="bg-gradient-to-r from-[#3D9BD6] to-[#0C4773] hover:opacity-95 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-opacity inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Book a demo</span>
              <span>→</span>
            </button>

            <button
              type="button"
              className="bg-white border border-slate-200/80 hover:bg-slate-50 text-[#07243B] text-xs font-semibold px-5 py-2.5 rounded-lg shadow-2xs transition-colors cursor-pointer"
            >
              Explore Global Payroll
            </button>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[380px] lg:h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/images/resources/13.png"
            alt="Customer success team meeting in office discussing payroll strategy"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
