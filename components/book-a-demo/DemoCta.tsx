import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "./Primitives";

export default function DemoCta() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[20px]">
        <Image
          src="/images/book-a-demo/cta-bg.webp"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0b2942]/55" />

        <div className="relative z-10 flex flex-col items-center gap-2.5 px-6 py-12 text-center sm:px-10 sm:py-16 lg:py-20">
          <Eyebrow>Ready when you are</Eyebrow>
          <h2 className="pt-1 text-2xl font-extrabold text-white sm:text-3xl">
            Ready to explore Zoiko Payroll?
          </h2>
          <p className="pb-5 text-base leading-6 text-white/70">
            Tell us about your team, and we&apos;ll show you exactly how it fits.
          </p>
          <Link
            href="#request-a-demo"
            className="rounded-[999px] border border-white/25 bg-white/10 px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/20"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
