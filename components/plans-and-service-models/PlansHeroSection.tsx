"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PlansHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0F3049] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background image with dark overlay */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/plans-and-service-models/hero-background.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0B2E45]/65" />
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Copy */}
        <div className="space-y-5">
          <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-sky-300 uppercase">
            <span className="w-[3px] h-3.5 rounded-[1px] bg-sky-300" />
            <span>Zoiko Payroll Plans &amp; Service Models</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight text-white leading-[1.18]">
            Choose the right payroll plan — and the right way to operate it.
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
            License the product capabilities your organization needs, then use
            the delivery model and services that fit each entity and
            jurisdiction. Plans define product scope. Service models define how
            payroll work is delivered.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <Link
              href="#plan-overview"
              className="bg-gradient-to-r from-[#3B82F6] to-[#0C4A6E] hover:from-[#2B7BB5] hover:to-[#0A3A57] text-white font-bold text-sm px-6 py-3.5 rounded-lg text-center shadow-[0px_8px_18px_-6px_rgba(11,76,120,0.45)] transition-all active:scale-[0.99]"
            >
              Check plans
            </Link>
            <Link
              href="/global-payroll/jurisdiction-coverage"
              className="bg-white/10 hover:bg-white/15 border border-white/30 text-white font-bold text-sm px-6 py-3.5 rounded-lg text-center transition-colors"
            >
              Check jurisdiction availability →
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-[0px_20px_44px_-22px_rgba(0,0,0,0.55)]">
          <Image
            src="/images/plans-and-service-models/hero-payroll-plans.png"
            alt="Payroll analytics on a laptop representing licensed plan capabilities"
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
