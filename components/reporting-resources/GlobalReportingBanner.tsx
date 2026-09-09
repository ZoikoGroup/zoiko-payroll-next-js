import Reveal from "../ui/Reveal";

export default function MultiEntityReportingSection() {
  return (
    <section className="bg-[#E9F0F8] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#0A2E4B] shadow-lg">
            {/* Background Image: object-right & normal blend to match Figma framing */}
            <img
              src="cv.png"
              alt="Global & multi-entity reporting background"
              className="absolute inset-0 size-full object-cover object-right"
            />

            {/* Clean Dark-to-Transparent Gradient matching Figma */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E4B] via-[#0A2E4B]/90 via-45% to-transparent" />

            {/* Content Container */}
            <div className="relative z-10 flex min-h-[360px] flex-col justify-center p-8 sm:p-12 lg:max-w-[580px]">
              {/* Tag / Eyebrow */}
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#0A8FD0]">/</span>
                <span className="text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-wide text-[#0A8FD0]">
                  Global &amp; multi-entity reporting
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-extrabold leading-8 text-white sm:text-3xl font-['Plus_Jakarta_Sans']">
                Comparability has rules — never
                <br />
                assumed.
              </h2>

              {/* Description */}
              <p className="mt-3.5 text-sm sm:text-base font-normal leading-6 text-[#CFE0EE] font-['Plus_Jakarta_Sans']">
                Local currency, calendars and source quality are never silently
                normalized. Cross-jurisdiction comparisons route to Global
                Reporting; local statutory questions route to Jurisdiction Guides.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}