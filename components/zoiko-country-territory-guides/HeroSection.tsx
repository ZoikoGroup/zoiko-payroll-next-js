"use client";

export default function HeroSection() {
  return (
    <section className="w-full pt-20 pb-12 bg-gradient-to-b from-[#EFF4F7] to-[#F5F8FA]">
      <div className="w-full max-w-[1440px] mx-auto pl-10 pr-6 sm:pl-20 sm:pr-12 lg:pl-40 lg:pr-24">
        <div className="max-w-[760px] flex flex-col gap-3.5">
          {/* Eyebrow */}
          <div className="relative h-3.5">
            <div className="w-1.5 h-3.5 absolute left-[-1.48px] top-0 bg-sky-600 rounded-[1px]" />
            <div className="absolute left-[11px] top-0 text-sky-600 text-xs font-bold font-['Inter'] uppercase tracking-wide">
              GLOBAL PAYROLL GUIDES
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col">
            <h1 className="text-[#082F49] text-4xl sm:text-5xl font-bold font-['Inter'] leading-[49.28px]">
              Payroll guides by country
              <br />
              and territory.
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-[660px] pt-[3.05px] pb-5 flex flex-col">
            <p className="text-[#4E6172] text-base font-normal font-['Inter'] leading-7">
              Explore source-backed payroll guidance for countries and territories around the world, including payroll cycles, taxes and contributions, filings, payments, authorities, and year-end considerations.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-[620px] pl-5 pr-2 py-2 bg-white rounded-lg shadow-[0px_1px_8px_0px_rgba(8,47,73,0.05)] shadow-[0px_1px_2px_0px_rgba(8,47,73,0.06)] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] inline-flex items-center gap-3">
            {/* Search Icon */}
            <div className="relative w-4 h-4 overflow-hidden">
              <div className="w-2.5 h-2.5 absolute left-[3px] top-[3px] outline outline-[1.50px] outline-offset-[-0.75px] outline-[#64748B]" />
              <div className="w-[3.26px] h-[3.26px] absolute left-[12.49px] top-[12.49px] outline outline-[1.50px] outline-offset-[-0.75px] outline-[#64748B]" />
            </div>
            <div className="flex-1 px-0.5 py-px overflow-hidden">
              <div className="text-[#64748B] text-xs font-normal font-['Inter']">
                Search by country, territory or ISO code — e.g. &quot;Germany&quot;
              </div>
            </div>
            <div className="w-44 px-5 py-3 bg-gradient-to-r from-blue-400 via-sky-600 to-sky-950 rounded-lg outline outline-1 outline-offset-[-1px] outline-black/0 flex items-center justify-center">
              <span className="text-white text-sm font-bold font-['Arial']">
                Find a payroll guide
              </span>
            </div>
          </div>

          {/* Trust Chips */}
          <div className="max-w-[660px] pt-2 border-t border-[#E2E8F0] flex flex-col gap-2">
            <div className="h-4 inline-flex items-center gap-2">
              <div className="relative w-4 h-4 overflow-hidden">
                <div className="w-1 h-[2.67px] absolute left-[6px] top-[6.67px] outline outline-[1.33px] outline-offset-[-0.67px] outline-sky-600" />
                <div className="w-3 h-3 absolute left-[2px] top-[2px] outline outline-[1.33px] outline-offset-[-0.67px] outline-sky-600" />
              </div>
              <span className="text-[#64748B] text-xs font-bold font-['Inter']">
                Guide content is informational, effective-dated where applicable
              </span>
            </div>
            <div className="h-4 inline-flex items-center gap-2">
              <div className="relative w-4 h-4 overflow-hidden">
                <div className="w-3.5 h-3 absolute left-[1.33px] top-[1.33px] outline outline-[1.33px] outline-offset-[-0.67px] outline-sky-600" />
              </div>
              <span className="text-[#64748B] text-xs font-bold font-['Inter']">
                Requirements change — verify with the cited authority or a qualified adviser
              </span>
            </div>
          </div>
        </div>

        {/* Right side - Map Image with Floating Cards */}
        <div className="relative mt-8 lg:mt-0">
          <div className="w-[480px] h-[496px] relative overflow-hidden rounded-xl">
            <img
              src="/flag.png"
              alt="World map with payroll guides"
              className="w-full h-full object-cover"
            />
            {/* Floating badge */}
            <div className="absolute top-[-25px] left-4 px-4 py-3 bg-white rounded-[10px] shadow-[0px_1px_8px_0px_rgba(8,47,73,0.05)] shadow-[0px_1px_2px_0px_rgba(8,47,73,0.06)] inline-flex items-center gap-2.5">
              <div className="w-2 h-2 bg-[#2F7A52] rounded-full" />
              <span className="text-[#082F49] text-xs font-bold font-['Inter']">
                128 jurisdictions covered
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
