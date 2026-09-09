import Reveal from "../ui/Reveal";

export default function UnderstandPayrollSection() {
  return (
    <section className="bg-[#E9F0F8] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Image */}
          <Reveal>
            <div className="overflow-hidden rounded-[20px] shadow-[0px_12px_34px_0px_rgba(10,46,75,0.10)]">
              <img
                src="45.png"
                alt="Understanding payroll numbers"
                className="h-[380px] w-full rounded-[20px] object-cover"
              />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={100}>
            <div className="flex flex-col gap-3">
              {/* Tag */}
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#0A8FD0]">/</span>
                <span className="text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-wide text-[#0A8FD0]">
                  Understand a payroll number
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-extrabold font-['Inter'] leading-9 text-[#051B2B]">
                The minimum context before any<br className="hidden sm:inline" />
                number is meaningful.
              </h2>

              {/* Paragraphs with exact breaks */}
              <p className="mt-2 text-sm font-light font-['Inter'] leading-6 text-[#4E6172]">
                Before treating a payroll figure as meaningful, check its scope,<br />
                period and definition — which entity, jurisdiction and population<br />
                it covers, and what unit or version applies.
              </p>
              <p className="text-sm font-light font-['Inter'] leading-6 text-[#4E6172]">
                Then confirm its source and freshness — is it current, partial or<br />
                stale? — and whether any currency conversion is explicit rather<br />
                than hidden.
              </p>

              {/* Callout Card (only border-l-4) */}
              <div className="mt-4 w-full max-w-[508px] rounded-xl border-l-4 border-sky-600 bg-white p-6 shadow-[0px_2px_8px_0px_rgba(10,120,194,0.04)]">
                <p className="text-sm font-normal font-['Plus_Jakarta_Sans'] leading-6 text-sky-950">
                  <span className="font-bold">No false comparability.</span> Two numbers aren&apos;t comparable just<br />
                  because they share a label — always check scope, period,<br />
                  currency and source quality first.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
