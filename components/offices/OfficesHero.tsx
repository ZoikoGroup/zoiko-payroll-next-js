import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function OfficesHero() {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/offices/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#061A2A94] via-[#09283F70] to-[#143F5C40]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
        <span className="text-xs font-bold uppercase leading-5 tracking-wider text-[#8FD0F2]">
          / Company &amp; ecosystem
        </span>
        <h1 className="text-[28px] font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Find a verified Zoiko Payroll office.
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
          Only approved, publicly listed office locations appear here. If a city
          isn&apos;t shown, Zoiko Payroll does not currently have a verified
          public office there — reach us instead through an approved contact
          route.
        </p>
        <div className="flex w-full flex-col items-stretch gap-3.5 pt-2 sm:w-auto sm:flex-row sm:items-center">
          <Link
            href="/resources/help-center"
            className="rounded-lg bg-linear-to-r from-[#59A9E0] to-[#0A5A93] px-5 py-2.5 text-center text-sm font-semibold text-white transition-all hover:brightness-110"
          >
            Get support →
          </Link>
          <Link
            href="/book-a-demo"
            className="rounded-lg border border-white/50 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
