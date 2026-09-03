"use client";

import React from "react";
import Image from "next/image";

export default function WebinarsAndEventsHero() {
  return (
    <section className="relative w-full min-h-[520px] lg:min-h-[580px] text-white overflow-hidden flex items-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Full Hero Background Image with Blue Tint Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/resources/20.png"
          alt="People collaborating in office background"
          fill
          className="object-cover opacity- object-center"
          priority
        />
        {/* Dark Blue Radial Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071C2EE5] via-[#071C2EA6] to-[#0A8FD040]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-6 space-y-6">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2">
            {/* <span className="w-1 h-3.5 bg-[#8FD0F2] inline-block rounded-xs" /> */}
            <span className="text-xs font-bold tracking-wider text-[#8FD0F2] uppercase">
              / WEBINARS & EVENTS
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-[36px] lg:text-[36px] font-extrabold tracking-tight leading-[1.15] text-white">
            Learn how global payroll teams put Zoiko Payroll to work
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-lg">
            Live sessions and on-demand recordings covering payroll operations,
            compliance, implementation and platform capabilities.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#"
              className="bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:opacity-95 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-xs transition-opacity cursor-pointer"
            >
              Join the Waitlist
            </a>
            <a
              href="#"
              className="bg-[#FFFFFF26] hover:bg-[#173852]/90 text-white border border-slate-400/30 text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-xs transition-colors cursor-pointer backdrop-blur-xs"
            >
              Contact Support
            </a>
          </div>
        </div>

        {/* Right Column: Floating Media Preview Frame */}
        <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden">
          <Image
            src="/images/resources/21.png"
            alt="Virtual webinar presentation and hybrid meeting in progress"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
