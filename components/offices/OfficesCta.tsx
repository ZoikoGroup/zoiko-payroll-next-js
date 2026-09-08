import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function OfficesCta() {
  return (
    <section className="bg-white px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pb-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl">
        <Image
          src="/images/offices/cta-bg.webp"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0B2437]/30" />

        <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-14 text-center sm:px-10 sm:py-16">
          <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Find your nearest verified Zoiko Payroll office
          </h2>
          <div className="flex w-full flex-col items-stretch gap-3.5 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="#office-results"
              className="rounded-lg bg-linear-to-r from-[#59A9E0] to-[#0A5A93] px-5 py-2.5 text-center text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Find an office
            </Link>
            <Link
              href="/resources/help-center"
              className="rounded-lg border border-white/50 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
