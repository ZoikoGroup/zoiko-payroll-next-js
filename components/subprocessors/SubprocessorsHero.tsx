"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SubprocessorsHero() {
  return (
    <div className="relative w-full overflow-hidden bg-linear-to-r from-[#061A2AF0] via-[#09283FD1] to-[#143F5C9E] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/subprocessors/hero-bg.png"
          alt=""
          fill
          className="object-cover object-center opacity-[0.65]"
        />
      </div>

      <section className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Left: copy & CTAs */}
        <div className="space-y-6 text-left lg:col-span-7">
          <span className="flex items-center text-xs font-extrabold uppercase tracking-wider text-[#8FD0F2]">
            <span className="mr-1.5 inline-block -skew-x-12 text-sm font-bold text-[#8FD0F2]">
              /
            </span>
            TRUST, SECURITY &amp; COMPLIANCE
          </span>

          <h1 className="text-[26px] font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[44px]">
            See exactly who may process payroll data — and where
          </h1>

          <p className="max-w-xl text-sm font-medium leading-relaxed text-slate-300 sm:text-base">
            This registry lists the third parties that may process customer
            personal data for covered Zoiko Payroll services. It is a canonical
            transparency surface, not a full vendor inventory — ordinary
            suppliers, independent controllers and customer-directed
            integrations are classified separately.
          </p>

          <div className="flex w-full flex-col items-stretch gap-4 pt-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#59A9E0] to-[#0A5A93] px-6 py-3.5 text-xs font-semibold text-white shadow-md transition-all hover:brightness-110 sm:text-sm"
            >
              <span>Contact Privacy / Trust</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
            <Link
              href="/legal/dpa"
              className="rounded-xl border border-[#FFFFFF80] bg-transparent px-6 py-3.5 text-center text-xs font-semibold text-white transition-all hover:bg-white/10 sm:text-sm"
            >
              Review DPA
            </Link>
          </div>
        </div>

        {/* Right: featured image */}
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/subprocessors/hero.png"
              alt="Zoiko Payroll subprocessors registry"
              width={501}
              height={425}
              className="aspect-[16/13] h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
