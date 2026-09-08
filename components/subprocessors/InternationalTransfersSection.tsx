"use client";

import React from "react";
import Image from "next/image";

const concepts = [
  {
    title: "Provider headquarters",
    description: "Where the provider is legally based — not a processing signal.",
  },
  {
    title: "Processing location",
    description: "Where the data is actually processed for this scope.",
  },
  {
    title: "Hosting / storage location",
    description: "Verified location where data is stored at rest.",
  },
  {
    title: "Zoiko residency commitments",
    description: "Customer/product-specific, governed by Data Residency.",
  },
  {
    title: "International transfers",
    description: "Scope-specific; disclosed only where they actually apply.",
  },
  {
    title: "Transfer mechanisms",
    description: "The approved legal basis, evidenced through DPA/Trust materials.",
  },
] as const;

export default function InternationalTransfersSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#061A2AF0] via-[#09283FD1] to-[#143F5C9E] py-12 text-white sm:py-16 md:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/subprocessors/transfers-bg.png"
          alt=""
          fill
          className="object-cover object-center opacity-[0.65]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4">
        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#8FD0F2]" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#8FD0F2] sm:text-xs">
            INTERNATIONAL TRANSFERS &amp; DATA RESIDENCY
          </span>
        </div>
        <h2 className="mt-3.5 max-w-3xl text-center text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-[34px]">
          Six concepts that are easy to confuse — kept separate on purpose
        </h2>
        <p className="mt-3 max-w-3xl text-center text-xs leading-relaxed text-slate-300 sm:text-sm">
          Provider headquarters is never a proxy for where data is actually
          processed, stored or transferred.
        </p>

        {/* Concept cards */}
        <div className="mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <div
              key={concept.title}
              className="rounded-[10px] border border-white/10 bg-white/5 px-5 py-4"
            >
              <h3 className="text-sm font-bold text-white sm:text-base">
                {concept.title}
              </h3>
              <p className="pl-4 pt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                {concept.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 w-full max-w-4xl rounded-[6px] border-l-4 border-l-[#8FD0F2] bg-white/10 p-4 sm:p-5">
          <p className="text-xs leading-relaxed text-slate-200 sm:text-[13px]">
            Active providers are never published while a required legal transfer
            field remains unresolved.
          </p>
        </div>
      </div>
    </section>
  );
}
