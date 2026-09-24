"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function DirectoryCtaSection() {
  return (
    <section className="w-full max-w-full min-w-0 overflow-hidden bg-[#EFF4F8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px] min-w-0">
        <Reveal>
          <div className="overflow-hidden rounded-2xl bg-[#0B253A] p-6 text-white shadow-xl sm:rounded-3xl sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Left Column */}
              <div className="lg:col-span-7">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                  / FINAL STEP
                </span>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-[34px]">
                  Confirm your markets, then
                  <br className="hidden sm:inline" /> talk to us.
                </h2>
                <p className="mt-4 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm sm:leading-relaxed">
                  Once you&apos;ve checked current availability for your countries, book a demo or discuss requirements for markets with conditions.
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3.5 sm:mt-8">
                  <Link
                    href="/book-a-demo"
                    className="inline-flex items-center justify-center rounded-lg bg-[#0A78C2] px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-all duration-200 hover:bg-[#0863A0] active:translate-y-0 sm:text-sm"
                  >
                    Book a demo
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-transparent px-5 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:border-slate-400 hover:bg-white/10 active:translate-y-0 sm:text-sm"
                  >
                    Talk to sales
                  </Link>
                </div>
              </div>

              {/* Right Column - Handshake Image */}
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-xl border border-slate-700/50 bg-[#081B2B] shadow-md sm:rounded-2xl">
                  <img
                    src="/images/zoiko-payroll-country-territory-directory/ctd3.png"
                    alt="Two business partners shaking hands after confirming payroll agreements"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
