"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SubprocessorsCta() {
  return (
    <section className="bg-white px-4 pb-16 pt-4 md:pb-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[#0B2437] px-5 py-12 text-center sm:px-6 sm:py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/subprocessors/cta-bg.png"
            alt=""
            fill
            className="object-cover object-center opacity-[0.75]"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-7">
          <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-[34px]">
            A registry you can verify, not a static PDF
          </h2>
          <div className="flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
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
      </div>
    </section>
  );
}
