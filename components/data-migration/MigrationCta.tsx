import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MigrationCta() {
  return (
    <section className="bg-slate-100 px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-slate-900 px-6 py-14 text-center sm:px-10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/data-migration/cta-bg.png"
            alt=""
            fill
            className="object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-slate-900/55" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Ready for a secure payroll migration?
          </h2>
          <p className="max-w-lg text-base leading-8 text-slate-200">
            Start with a scoped assessment of your source systems, data and
            timeline.
          </p>
          <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            {/* No readiness route exists yet — placeholder until one is built. */}
            <Link
              href="#"
              className="rounded-full bg-white px-7 py-3 text-center text-sm font-semibold text-blue-600 transition-colors hover:bg-slate-100"
            >
              Assess migration readiness
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/50 px-7 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Speak with a migration specialist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
