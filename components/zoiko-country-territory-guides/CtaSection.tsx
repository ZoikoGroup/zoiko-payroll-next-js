"use client";

export default function CtaSection() {
  return (
    <section className="w-full py-20">
      <div className="w-full max-w-[1440px] mx-auto pl-10 pr-6 sm:pl-14 sm:pr-4 lg:pl-[56px] lg:pr-11">
        <div className="w-full max-w-[1328px] bg-[#0F4C75] rounded-3xl py-20 px-10 sm:px-14 lg:px-28 flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-3.5">
            <h2 className="text-white text-3xl font-bold font-['Inter']">
              Ready to confirm your payroll requirements?
            </h2>
            <p className="max-w-[460px] text-white/72 text-base font-normal font-['Inter'] leading-6">
              Review current Zoiko Payroll coverage and implementation
              <br />
              requirements for your entities, worker population and payroll scope.
            </p>
          </div>

          {/* Form */}
          <div className="w-full max-w-[1115px] p-7 bg-white rounded-xl flex flex-col gap-3.5">
            {/* Name Row */}
            <div className="flex gap-3.5">
              <div className="flex-1 flex flex-col gap-1.5">
                <span className="text-[#082F49] text-xs font-bold font-['Inter']">
                  First name
                </span>
                <div className="h-10 bg-white rounded-lg border border-[#E2E8F0]" />
              </div>
              <div className="flex-1 flex flex-col gap-1.5">
                <span className="text-[#082F49] text-xs font-bold font-['Inter']">
                  Last name
                </span>
                <div className="h-10 bg-white rounded-lg border border-[#E2E8F0]" />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[#082F49] text-xs font-bold font-['Inter']">
                Business email
              </span>
              <div className="h-10 bg-white rounded-lg border border-[#E2E8F0]" />
            </div>

            {/* Jurisdiction & Workforce */}
            <div className="flex gap-3.5">
              <div className="flex-1 flex flex-col gap-1.5">
                <span className="text-[#082F49] text-xs font-bold font-['Inter']">
                  Jurisdiction of interest
                </span>
                <div className="px-3 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-[#E2E8F0]">
                  <span className="text-[#0F4C75] text-sm font-normal font-['Inter']">
                    United States
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-1.5">
                <span className="text-[#082F49] text-xs font-bold font-['Inter']">
                  Workforce range
                </span>
                <div className="px-3 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-[#E2E8F0]">
                  <span className="text-[#0F4C75] text-sm font-normal font-['Inter']">
                    1–200
                  </span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-[#4E6172] text-xs font-normal font-['Inter']">
              Do not submit employee-level payroll data in this inquiry.
            </p>

            {/* Submit Button */}
            <div className="w-96 h-12 bg-gradient-to-r from-blue-400 via-sky-600 to-sky-950 rounded-lg outline outline-1 outline-offset-[-1px] outline-black/0 flex items-center justify-center">
              <span className="text-white text-sm font-bold font-['Arial']">
                Check jurisdiction coverage
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
