import Reveal from "../ui/Reveal";

export default function ReadyToGoFurtherSection() {
  return (
    <section className="bg-[#0A2E4B] py-14 sm:py-16">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            {/* Tag / Eyebrow */}
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-[#0A8FD0]">/</span>
              <span className="text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-wide text-[#0A8FD0]">
                Ready to go further?
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[740px] text-3xl font-extrabold leading-tight text-white sm:text-[34px] sm:leading-10 font-['Plus_Jakarta_Sans']">
              Explore current Reporting and Analytics,
              <br />
              or plan your rollout.
            </h2>

            {/* Description: text color rgba(185, 205, 221, 1) */}
            <p className="mt-3.5 max-w-[560px] text-sm sm:text-base font-normal leading-6 text-[rgba(185,205,221,1)] font-['Plus_Jakarta_Sans']">
              Existing customer? Product Documentation, Help Center and System
              <br className="hidden sm:inline" />
              {" "}Status resolve most reporting tasks without a sales detour.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              {/* Primary Button: Linear gradient rgba(62, 163, 224, 1) -> rgba(11, 69, 115, 1) */}
              <a
                href="#"
                className="inline-flex h-12 w-64 items-center justify-center rounded-lg bg-gradient-to-r from-[rgba(62,163,224,1)] to-[rgba(11,69,115,1)] px-5 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-95 font-['Plus_Jakarta_Sans']"
              >
                See Reporting and Analytics
              </a>

              {/* Secondary Button: Border rgba(255, 255, 255, 0.3) */}
              <a
                href="#"
                className="inline-flex h-12 w-60 items-center justify-center rounded-lg border border-[rgba(255,255,255,0.3)] px-5 text-sm font-bold text-white transition-colors hover:bg-white/10 font-['Plus_Jakarta_Sans']"
              >
                Explore Global Reporting
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}