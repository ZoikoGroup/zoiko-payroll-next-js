"use client";

import Image from "next/image";

export default function OperatorLegalEntityDisclosure() {
  return (
    <section className="w-full bg-[#E9F0F8] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-8 px-5 sm:px-8 lg:px-16 xl:px-24">

        {/* Top content */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-start lg:justify-center lg:gap-14">

          {/* Text */}
          <div className="flex w-full flex-1 flex-col items-start gap-3.5 lg:pt-14">
            
            {/* Section label */}
            <div className="relative flex h-5 items-center">
              <div className="mr-3 h-3.5 w-1.5 rounded-[2px] bg-[#0798D8]" />

              <div className="text-xs font-bold uppercase leading-5 tracking-wider text-[#0798D8]">
                Operator &amp; legal entity disclosure
              </div>
            </div>

            {/* Heading */}
            <div className="w-full">
              <h2 className="max-w-[620px] text-2xl font-extrabold leading-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
                Each field is independently
                <br className="hidden sm:block" />
                source-approved — unknowns
                <br className="hidden sm:block" />
                are omitted, never guessed.
              </h2>
            </div>

            {/* Description */}
            <div className="w-full max-w-[600px]">
              <p className="text-sm font-normal leading-6 text-[#5F6F7D] sm:text-base sm:leading-7">
                Structured operator context is shown only where an approved
                <br className="hidden sm:block" />
                legal source establishes it.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-[20px] bg-white shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)] lg:h-[380px] lg:w-[528px] lg:flex-1">
            <Image
              src="/images/legal-governance-legal-notices/image.png"
              alt="Operator and legal entity disclosure"
              width={528}
              height={380}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Legal information card */}
        <div className="w-full max-w-[640px] rounded-2xl border border-[#D9E2EA] bg-white p-5 sm:p-7">

          {/* Legal name */}
          <div className="flex items-start justify-between gap-6 border-b border-[#D9E2EA] py-2.5">
            <div className="text-xs font-semibold leading-5 text-[#70808E]">
              Legal name
            </div>

            <div className="text-right text-xs font-bold leading-5 text-[#0A2E4B]">
              Per approved registry
            </div>
          </div>

          {/* Role */}
          <div className="flex items-start justify-between gap-6 border-b border-[#D9E2EA] py-2.5">
            <div className="text-xs font-semibold leading-5 text-[#70808E]">
              Role
            </div>

            <div className="text-right text-xs font-bold leading-5 text-[#0A2E4B]">
              Service operator
            </div>
          </div>

          {/* Jurisdiction */}
          <div className="flex items-start justify-between gap-6 border-b border-[#D9E2EA] py-2.5">
            <div className="text-xs font-semibold leading-5 text-[#70808E]">
              Jurisdiction of registration
            </div>

            <div className="text-right text-xs font-bold leading-5 text-[#0A2E4B]">
              Per approved registry
            </div>
          </div>

          {/* Registered office */}
          <div className="flex items-start justify-between gap-6 border-b border-[#D9E2EA] py-2.5">
            <div className="text-xs font-semibold leading-5 text-[#70808E]">
              Registered office
            </div>

            <div className="text-right text-xs font-bold leading-5 text-[#0A2E4B]">
              Shown only where approved
            </div>
          </div>

          {/* Contact reference */}
          <div className="flex items-start justify-between gap-6 py-2.5">
            <div className="text-xs font-semibold leading-5 text-[#70808E]">
              Contact reference
            </div>

            <div className="cursor-pointer text-right text-xs font-bold leading-5 text-[#0798D8]">
              Legal contact route →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}