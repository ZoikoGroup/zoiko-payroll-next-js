"use client";

export default function IntellectualPropertyNotices() {
  return (
    <section className="w-full bg-[#F7FAFC] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-7 px-5 sm:px-8 lg:px-16 xl:px-24">

        {/* Section Heading */}
        <div className="flex w-full max-w-[680px] flex-col items-start gap-3.5">

          {/* Label */}
          <div className="flex w-full items-center justify-center gap-1.5">
            <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0798D8]" />

            <div className="text-center text-xs font-bold uppercase leading-5 tracking-wider text-[#0798D8]">
              Intellectual property &amp; third-party notices
            </div>
          </div>

          {/* Heading */}
          <div className="flex w-full flex-col items-center">
            <h2 className="text-center text-2xl font-extrabold leading-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
              Never inferred from a ™ or ® symbol alone.
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="flex w-full flex-col items-stretch gap-5 lg:flex-row">

          {/* Trademarks & Brand */}
          <div className="flex-1 rounded-xl border border-[#D9E2EA] bg-white p-4">

            <div className="pb-3">
              <h3 className="text-sm font-bold leading-6 text-[#0A2E4B]">
                Trademarks &amp; brand
              </h3>
            </div>

            {/* Mark owner */}
            <div className="flex items-center justify-between gap-4 border-b border-[#D9E2EA] py-2.5">
              <div className="text-xs font-semibold leading-5 text-[#0A2E4B]">
                Mark owner
              </div>

              <div className="text-right text-xs font-normal leading-5 text-[#70808E]">
                Per registry
              </div>
            </div>

            {/* Registration status */}
            <div className="flex items-center justify-between gap-4 border-b border-[#D9E2EA] py-2.5">
              <div className="text-xs font-semibold leading-5 text-[#0A2E4B]">
                Registration status
              </div>

              <div className="text-right text-xs font-normal leading-5 text-[#70808E]">
                Never inferred from ™/®
              </div>
            </div>

            {/* Brand guidelines */}
            <div className="flex items-center justify-between gap-4 py-2.5">
              <div className="text-xs font-semibold leading-5 text-[#0A2E4B]">
                Brand guidelines
              </div>

              <div className="text-right text-xs font-normal leading-5 text-[#70808E]">
                Linked where published
              </div>
            </div>
          </div>

          {/* Third Party & Open Source */}
          <div className="flex-1 rounded-xl border border-[#D9E2EA] bg-white p-4">

            <div className="pb-3">
              <h3 className="text-sm font-bold leading-6 text-[#0A2E4B]">
                Third-party &amp; open-source
              </h3>
            </div>

            {/* Attribution */}
            <div className="flex items-center justify-between gap-4 border-b border-[#D9E2EA] py-2.5">
              <div className="text-xs font-semibold leading-5 text-[#0A2E4B]">
                Attribution
              </div>

              <div className="text-right text-xs font-normal leading-5 text-[#70808E]">
                Exact approved wording
              </div>
            </div>

            {/* License relationship */}
            <div className="flex items-center justify-between gap-4 border-b border-[#D9E2EA] py-2.5">
              <div className="text-xs font-semibold leading-5 text-[#0A2E4B]">
                License relationship
              </div>

              <div className="text-right text-xs font-normal leading-5 text-[#70808E]">
                Never generic license text
              </div>
            </div>

            {/* Ownership scope */}
            <div className="flex items-center justify-between gap-4 py-2.5">
              <div className="text-xs font-semibold leading-5 text-[#0A2E4B]">
                Ownership scope
              </div>

              <div className="text-right text-xs font-normal leading-5 text-[#70808E]">
                Never overclaimed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}