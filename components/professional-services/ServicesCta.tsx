import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesCta() {
  return (
    <section className="bg-slate-50 px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pb-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl">
        <Image
          src="/images/professional-services/cta-bg.webp"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1b3f63]/75" />

        <div className="relative z-10 flex flex-col items-start gap-6 px-6 py-16 text-left sm:px-10 lg:px-16">
          <h2 className="max-w-xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-[34px]">
            Bring expert payroll specialists into your next transformation
            project
          </h2>
          <p className="max-w-xl text-base leading-7 text-slate-300">
            Structured payroll delivery with clear ownership, governance, and
            measurable outcomes.
          </p>
          <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="rounded-lg bg-linear-to-b from-sky-500 to-sky-700 px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Discuss an engagement
            </Link>
            {/* No implementation-services index route exists yet — placeholder. */}
            <Link
              href="#"
              className="rounded-lg border border-white/40 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore implementation services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
