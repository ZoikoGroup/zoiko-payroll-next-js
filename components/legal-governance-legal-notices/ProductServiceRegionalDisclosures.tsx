import React from "react";

export default function ProductServiceRegionalDisclosures() {
  return (
    <section className="w-full bg-[#E9F0F8] px-6 py-16 md:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-10 lg:flex-row lg:gap-14 lg:px-24">
        {/* Left Content */}
        <div className="flex w-full flex-1 flex-col items-start gap-3.5">
          {/* Label */}
          <div className="relative min-h-5 w-full">
            <div className="absolute left-0 top-[3px] h-3.5 w-1.5 rounded-[2px] bg-[#0B9FE3]" />

            <div className="pl-[11px] font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0B9FE3]">
              Product, service &amp; regional disclosures
            </div>
          </div>

          {/* Heading */}
          <div className="flex w-full flex-col items-start pt-px">
            <h2 className="font-['Inter'] text-3xl font-extrabold leading-10 text-[#0D3554] md:text-[34px] md:leading-[42px]">
              Screenshots and previews are
              <br className="hidden md:block" />
              illustrative — never a specific
              <br className="hidden md:block" />
              binding commitment.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[600px] pt-px">
            <p className="font-['Inter'] text-base font-normal leading-7 text-[#5F6F7D]">
              Regional and jurisdictional disclosures show only approved scope
              <br className="hidden md:block" />
              — never inferred from your location or IP address.
            </p>
          </div>

          {/* Pills */}
          <div className="mt-1 flex w-full flex-wrap gap-3">
            {/* Pill 1 */}
            <div className="inline-flex h-10 items-center rounded-[20px] border border-[#DCE4EC] bg-white px-4 py-2">
              <div className="font-['Inter'] text-xs font-semibold leading-5 text-[#163E5C]">
                Illustrative screenshots
              </div>
            </div>

            {/* Pill 2 */}
            <div className="inline-flex h-10 items-center rounded-[20px] border border-[#DCE4EC] bg-white px-4 py-2">
              <div className="font-['Inter'] text-xs font-semibold leading-5 text-[#163E5C]">
                Availability guardrails
              </div>
            </div>

            {/* Pill 3 */}
            <div className="inline-flex h-10 items-center rounded-[20px] border border-[#DCE4EC] bg-white px-4 py-2">
              <div className="font-['Inter'] text-xs font-semibold leading-5 text-[#163E5C]">
                No location inference
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full flex-1">
          <div className="h-[320px] w-full overflow-hidden rounded-[20px] bg-white shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)] md:h-[360px] lg:h-96">
            <img
              src="/images/legal-governance-legal-notices/image1.png"
              alt="Product, service and regional disclosures"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}