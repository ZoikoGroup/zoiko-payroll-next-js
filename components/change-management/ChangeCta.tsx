import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ChangeCta() {
  return (
    <section className="bg-slate-50 px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pb-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl">
        <Image
          src="/images/change-management/cta-bg.webp"
          alt=""
          fill
          className="object-cover object-center"
        />
        {/* Blue wash: dark enough for white text, light enough to keep the photo */}
        <div className="absolute inset-0 bg-[#173553]/55" />

        <div className="relative z-10 flex flex-col items-start gap-6 px-6 py-16 text-left sm:px-10 lg:px-16 lg:py-20">
          <h2 className="max-w-lg text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-[34px]">
            Lead payroll change with confidence
          </h2>
          <p className="max-w-lg text-base leading-7 text-slate-200">
            Prepare stakeholders, communicate with clarity, and reinforce
            adoption through every stage of payroll transformation.
          </p>
          <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="rounded-[10px] bg-linear-72 from-blue-400 via-sky-600 to-sky-950 px-7 py-3.5 text-center text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Talk to an implementation specialist
            </Link>
            {/* No training route exists yet — placeholder until one is built. */}
            <Link
              href="#"
              className="rounded-[10px] border border-slate-200 bg-white px-7 py-3.5 text-center text-sm font-semibold text-slate-900 transition-colors hover:border-blue-600"
            >
              Explore training services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
