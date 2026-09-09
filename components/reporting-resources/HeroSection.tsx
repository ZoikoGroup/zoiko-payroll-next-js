import Reveal from "../ui/Reveal";

export default function ReportingHeroSection() {
  return (
    <section className="bg-[#F4F8FB] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            {/* Header Tag */}
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-[#0A8FD0]">/</span>
              <span className="text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-wide text-[#0A8FD0]">
                Reporting
              </span>
            </div>

            {/* Main Title */}
            <h1 className="mt-4 max-w-[1040px] text-3xl font-extrabold font-['Inter'] leading-tight tracking-tight text-[#051B2B] sm:text-5xl sm:leading-[58px]">
              Find the reporting guidance behind payroll<br className="hidden sm:inline" />
              insights, exports and reconciliation.
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-[840px] text-sm sm:text-base font-light font-['Inter'] leading-6 text-[#4E6172]">
              Understand payroll reporting concepts, reconciliation and safe exports — then move to<br className="hidden sm:inline" />
              the current Product, Global Payroll or Trust authority for the decision you need to make.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-[10px] bg-gradient-to-r from-[rgba(62,163,224,1)] to-[rgba(11,69,115,1)] px-6 text-xs sm:text-sm font-bold font-['Inter'] text-white shadow-[0px_4px_14px_0px_rgba(10,46,75,0.18)] transition-opacity hover:opacity-95"
              >
                Explore reporting guidance
              </a>
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-[10px] border border-[#DCE6EC] bg-white px-6 text-xs sm:text-sm font-bold font-['Inter'] text-[#051B2B] transition-colors hover:bg-slate-50"
              >
                See Reporting and Analytics
              </a>
            </div>

            {/* Feature Banner Card */}
            <div className="relative mt-12 h-[340px] sm:h-[380px] w-full max-w-[1076px] overflow-hidden rounded-[24px] text-left shadow-[0px_12px_32px_0px_rgba(5,27,43,0.14)]">
              {/* Background Analytics Image spanning full card */}
              <img
                src="ll.jpg"
                alt="Reporting & Analytics Preview"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* Exact Linear Gradient Overlay from Figma */}
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(7,28,46,0.92)] via-[rgba(10,50,84,0.78)] to-[rgba(10,143,208,0.40)]" />

              {/* Content Overlay */}
              <div className="relative z-10 flex h-full w-full max-w-[660px] flex-col justify-center p-8 sm:p-12">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-[#0A8FD0]">/</span>
                  <span className="text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-wide text-[#0A8FD0]">
                    Educational, not operational
                  </span>
                </div>

                <h2 className="mt-3.5 text-xl font-extrabold font-['Inter'] leading-snug text-white sm:text-2xl sm:leading-8 lg:text-[26px] lg:leading-9">
                  <span className="whitespace-nowrap">Current product behavior always lives in</span>
                  <br />
                  <span className="whitespace-nowrap">Reporting and Analytics.</span>
                </h2>

                <p className="mt-3 max-w-[540px] text-xs sm:text-sm font-light font-['Inter'] leading-5 text-[rgba(207,224,238,1)]">
                  This page teaches concepts — scope, definitions, reconciliation and<br />
                  safe exports.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}