import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "./Primitives";

export default function DpaHero() {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto w-full max-w-[1140px] px-4 pt-14 pb-16 sm:px-8">
        <div className="mx-auto max-w-[640px] text-center">
          <div className="flex justify-center">
            <Eyebrow centered>Data Processing Addendum</Eyebrow>
          </div>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-sky-950 sm:text-4xl lg:text-5xl">
            Data Processing Addendum
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-600">
            Review the approved standard processing terms and annexes. Reading
            this page is not the same as having an executed agreement — the
            approved DPA and your organization&apos;s executed package control.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-400 to-sky-900 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:from-sky-500 hover:to-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
            >
              Contact Support
            </Link>
            <Link
              href="/resources/security-trust"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-sky-950 transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
            >
              Explore Trust and Security
            </Link>
          </div>

          <p className="mt-6 text-xs leading-5 text-gray-400">
            This page works without non-essential cookies. Download available
            only when the current file is synchronized.
          </p>
        </div>

        {/* Framing banner. The photo is the background and the copy sits in
            normal flow, so the band grows to fit the text on narrow screens
            instead of the text overflowing a fixed-height image. */}
        <div className="relative mt-14 overflow-hidden rounded-3xl">
          <Image
            src="/images/data-processing-addendum/dpa-hero.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1140px) 100vw, 1076px"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-sky-950/75 to-sky-600/40"
          />

          <div className="relative flex min-h-[280px] flex-col justify-center px-6 py-10 sm:px-12">
            <Eyebrow tone="light">Contractual framework</Eyebrow>
            <h2 className="mt-4 max-w-[520px] text-xl font-extrabold leading-tight text-white sm:text-2xl">
              A DPA is a contract, not a marketing claim.
            </h2>
            <p className="mt-3 max-w-[500px] text-sm leading-6 text-slate-300 sm:text-base">
              Public access to this page is review only — it never establishes
              an executed agreement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
