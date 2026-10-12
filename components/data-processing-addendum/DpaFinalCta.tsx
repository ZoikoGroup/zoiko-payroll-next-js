import React from "react";
import Link from "next/link";
import { Eyebrow } from "./Primitives";

export default function DpaFinalCta() {
  return (
    <section aria-labelledby="dpa-cta-heading" className="w-full bg-sky-950">
      <div className="mx-auto w-full max-w-[1140px] px-4 py-16 text-center sm:px-8 lg:py-20">
        <div className="flex justify-center">
          <Eyebrow centered tone="light">
            Ready to go further?
          </Eyebrow>
        </div>

        <h2
          id="dpa-cta-heading"
          className="mx-auto mt-6 max-w-[600px] text-2xl font-extrabold leading-tight text-white sm:text-3xl"
        >
          Review the current DPA, or request a controlled legal review.
        </h2>

        <p className="mx-auto mt-5 max-w-[560px] text-base leading-6 text-slate-300">
          Existing customer? Product Documentation and Trust and Security remain
          available, but reviewing the current standard DPA always comes first
          here.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="#whats-inside"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-400 to-sky-900 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:from-sky-500 hover:to-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            Review current DPA
          </Link>
          <Link
            href="/resources/security-trust"
            className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            Explore Trust and Security
          </Link>
        </div>
      </div>
    </section>
  );
}
