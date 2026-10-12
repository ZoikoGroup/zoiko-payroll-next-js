"use client";

import React from "react";
import Image from "next/image";

const affiliates = [
  {
    affiliate: "Zoiko Payroll Europe B.V.",
    country: "Netherlands",
    purpose: "EU customer support operations",
    scope: "EU-scoped customers only",
  },
  {
    affiliate: "Zoiko Tech APAC Pte. Ltd.",
    country: "Singapore",
    purpose: "Regional implementation services",
    scope: "APAC-scoped customers only",
  },
] as const;

export default function AffiliateSubprocessorsSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Left: copy */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-4 bg-[#0A78C3]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A78C3] sm:text-xs">
                AFFILIATE SUBPROCESSORS
              </span>
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0B192C] sm:text-3xl md:text-[34px]">
              Zoiko affiliates, shown separately by legal requirement
            </h2>
            <p className="text-sm leading-relaxed text-[#64748B] sm:text-base">
              Same trust standard as the main registry — grouped separately
              because the legal model requires it, not because it&apos;s a
              different tier.
            </p>
          </div>

          {/* Right: image with floating badge */}
          <div className="relative overflow-hidden rounded-2xl shadow-[0px_20px_50px_0px_rgba(10,40,65,0.15)]">
            <Image
              src="/images/subprocessors/affiliates.png"
              alt="Confirming affiliate processing scope"
              width={529}
              height={386}
              className="aspect-[4/3] h-auto w-full object-cover"
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-[0px_8px_20px_0px_rgba(10,30,50,0.18)]">
              <span className="h-2 w-2 rounded-full bg-[#2E9E5B]" />
              <span className="text-xs font-bold text-[#0F172A]">
                Scope confirmed
              </span>
            </div>
          </div>
        </div>

        {/* Affiliate registry card */}
        <div className="mt-8 w-full overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0px_30px_70px_0px_rgba(10,40,65,0.14)]">
          <div className="flex items-center gap-3.5 border-b border-[#E2E8F0] bg-[#F5F8FA] px-5 py-3.5">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#CBD5E1]" />
              <span className="h-2 w-2 rounded-full bg-[#CBD5E1]" />
              <span className="h-2 w-2 rounded-full bg-[#CBD5E1]" />
            </div>
            <span className="text-sm font-bold text-[#64748B]">
              Affiliate Subprocessors — synthetic example
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-xs sm:text-[13px]">
              <thead>
                <tr className="border-b border-[#E2E8F0] font-bold uppercase tracking-wider text-[#94A3B8]">
                  <th className="px-6 py-3.5">Affiliate</th>
                  <th className="px-4 py-3.5">Country</th>
                  <th className="px-4 py-3.5">Purpose</th>
                  <th className="px-4 py-3.5">Service scope</th>
                  <th className="px-6 py-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {affiliates.map((row) => (
                  <tr
                    key={row.affiliate}
                    className="transition-colors hover:bg-slate-50/50"
                  >
                    <td className="px-6 py-5 font-bold text-[#0F172A]">
                      {row.affiliate}
                    </td>
                    <td className="px-4 py-5 text-[#334155]">{row.country}</td>
                    <td className="px-4 py-5 text-[#334155]">{row.purpose}</td>
                    <td className="px-4 py-5 text-[#334155]">{row.scope}</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#E3F0E7] px-3 py-1 text-xs font-bold text-[#20502F]">
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        Current
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 w-full max-w-4xl rounded-[6px] border-l-4 border-l-[#0A78C3] bg-[#E7EDFD] p-4 sm:p-5">
          <p className="text-xs leading-relaxed text-[#334155] sm:text-[13px]">
            Not every Zoiko affiliate is a subprocessor, and not every listed
            provider serves every customer, tenant or jurisdiction.
          </p>
        </div>
      </div>
    </section>
  );
}
