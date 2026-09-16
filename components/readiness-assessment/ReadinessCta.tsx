import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ReadinessCta() {
  return (
    <section className="bg-slate-50 px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pb-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl">
        <Image
          src="/images/readiness-assessment/cta-bg.webp"
          alt=""
          fill
          className="object-cover object-center"
        />
        {/* Navy wash: dark enough for white text, light enough to keep the photo */}
        <div className="absolute inset-0 bg-[#123055]/60" />

        <div className="relative z-10 flex flex-col items-start gap-5 px-6 py-14 text-left sm:px-10 lg:px-16 lg:py-16">
          <h2 className="max-w-lg text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
            Start payroll implementation with confidence
          </h2>
          <p className="max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
            Identify blockers early, align stakeholders, validate readiness, and
            move into implementation with clarity.
          </p>
          <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            {/* Scrolls to the interactive assessment on this page; no standalone tool route exists yet. */}
            <Link
              href="#readiness-assessment"
              className="rounded-[10px] bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Start readiness assessment
            </Link>
            <Link
              href="/contact"
              className="rounded-[10px] border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition-colors hover:border-blue-600"
            >
              Speak with payroll specialist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
