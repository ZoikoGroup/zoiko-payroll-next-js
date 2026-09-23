"use client";

import Image from "next/image";

export default function CorrectionLineage() {
  return (
    <section className="w-full bg-[#EEF3F8] px-6 py-16 sm:px-8 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-8 px-0 lg:px-24">

        {/* Top content */}
        <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-14">

          {/* Left content */}
          <div className="flex w-full flex-1 flex-col items-start gap-4">

            {/* Label */}
            <div className="relative h-5">
              <div className="absolute left-0 top-[3px] h-3.5 w-1.5 rounded-xs bg-color-azure-43" />

              <div className="pl-[11px] text-xs font-bold uppercase leading-5 tracking-wider text-color-azure-43">
                Correction lineage
              </div>
            </div>

            {/* Heading */}
            <div className="pb-[0.58px]">
              <h2 className="text-3xl font-extrabold leading-10 text-color-azure-17-4">
                A correction is linked, never a
                <br className="hidden sm:block" />
                silent replacement.
              </h2>
            </div>

            {/* Description */}
            <div className="w-full max-w-[600px] pb-3">
              <p className="text-base font-normal leading-7 text-color-grey-39">
                Where correction is supported, the source record stays visible
                <br className="hidden sm:block" />
                alongside the linked correction — never silently overwritten.
              </p>
            </div>

            {/* Information box */}
            <div className="w-full max-w-[760px] rounded-xl border-b border-r border-t border-color-azure-43 border-l-4 bg-white px-7 py-6">
              <p className="text-sm font-normal leading-6 text-color-azure-18-2">
                A correction does not automatically recalculate payroll, reopen
                <br className="hidden sm:block" />
                payroll, change tax filings, create repayment balances, or post
                off-
                <br className="hidden sm:block" />
                cycle payroll.
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="relative h-[380px] w-full flex-1 overflow-hidden rounded-[20px] bg-white shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)]">
            <Image
              src="/images/deductions-and-adjustments/image.png"
              alt="Correction lineage workspace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 528px"
              priority
            />
          </div>
        </div>

        {/* Lineage flow */}
        <div className="flex w-full flex-col items-start gap-4">

          {/* Cards */}
          <div className="flex w-full flex-wrap items-center justify-center">

            {/* Original record */}
            <div className="min-w-44 rounded-xl bg-white px-5 py-3.5 outline outline-1 outline-offset-[-1px] outline-color-grey-91-6">
              <div className="flex justify-center px-3.5">
                <div className="text-center text-[10px] font-bold uppercase leading-4 tracking-wide text-color-azure-57">
                  Original record
                </div>
              </div>

              <div className="flex justify-center px-9">
                <div className="text-center text-xs font-bold leading-5 text-color-azure-17-4">
                  DA-2201
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="px-4">
              <div className="text-xl font-normal leading-8 text-color-azure-43">
                →
              </div>
            </div>

            {/* Corrective change */}
            <div className="min-w-44 rounded-xl bg-white px-5 py-3.5 outline outline-1 outline-offset-[-1px] outline-color-grey-91-6">
              <div className="flex justify-center px-1.5">
                <div className="text-center text-[10px] font-bold uppercase leading-4 tracking-wide text-color-azure-57">
                  Corrective change
                </div>
              </div>

              <div className="flex justify-center px-7">
                <div className="text-center text-xs font-bold leading-5 text-color-azure-17-4">
                  DA-2201-C
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="px-4">
              <div className="text-xl font-normal leading-8 text-color-azure-43">
                →
              </div>
            </div>

            {/* Current outcome */}
            <div className="min-w-44 rounded-xl bg-[#0A2E4B] px-5 py-3.5">
              <div className="flex justify-center px-2.5">
                <div className="text-center text-[10px] font-bold uppercase leading-4 tracking-wide text-[#8FD3F4]">
                  Current outcome
                </div>
              </div>

              <div className="flex justify-center px-3">
                <div className="text-center text-xs font-bold leading-5 text-white">
                  Validation failed
                </div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="flex w-full flex-col items-center">
            <p className="text-center text-xs font-normal leading-5 text-color-azure-57">
              Navigation between related records is available only for
              authorized users. Synthetic references shown for illustration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}