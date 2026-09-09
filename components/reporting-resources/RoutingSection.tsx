import Reveal from "../ui/Reveal";

export default function RoutingSection() {
  return (
    <section className="bg-[#F4F8FB] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-[1140px] flex-col items-center text-center">
            {/* Tag */}
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-[#0A8FD0]">/</span>
              <span className="text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-wide text-[#0A8FD0]">
                What are you trying to answer?
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-3.5 text-3xl font-extrabold font-['Plus_Jakarta_Sans'] leading-9 text-[#0A2E4B]">
              Deterministic routing — never inferred from<br />
              your profile.
            </h2>
          </div>
        </Reveal>

        {/* Route cards */}
        <Reveal delay={80}>
          <div className="mx-auto mt-12 grid max-w-[1040px] grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full overflow-hidden">
                <img
                  src="Background (87).png"
                  alt="What does this number include?"
                  className="size-full object-contain"
                />
              </div>
              <h3 className="text-sm font-bold font-['Plus_Jakarta_Sans'] leading-6 text-[#0A2E4B]">
                What does this number include?
              </h3>
              <p className="mt-2 text-xs font-normal font-['Plus_Jakarta_Sans'] leading-5 text-[#5B646B]">
                Scope, period, source and currency<br />
                context. → Reporting and Analytics
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full overflow-hidden">
                <img
                  src="Background (88).png"
                  alt="Why did this result change?"
                  className="size-full object-contain"
                />
              </div>
              <h3 className="text-sm font-bold font-['Plus_Jakarta_Sans'] leading-6 text-[#0A2E4B]">
                Why did this result change?
              </h3>
              <p className="mt-2 text-xs font-normal font-['Plus_Jakarta_Sans'] leading-5 text-[#5B646B]">
                Variance, corrections and version<br />
                changes. → Reconciliation guidance<br />
                below
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full overflow-hidden">
                <img
                  src="Background (89).png"
                  alt="How do I export safely?"
                  className="size-full object-contain"
                />
              </div>
              <h3 className="text-sm font-bold font-['Plus_Jakarta_Sans'] leading-6 text-[#0A2E4B]">
                How do I export safely?
              </h3>
              <p className="mt-2 text-xs font-normal font-['Plus_Jakarta_Sans'] leading-5 text-[#5B646B]">
                Least privilege, scope and handling. →<br />
                Export guidance below
              </p>
            </div>
          </div>
        </Reveal>

        {/* Bottom links */}
        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-[1140px] text-center text-xs sm:text-sm font-normal font-['Plus_Jakarta_Sans'] leading-5 text-[#5B646B]">
            Also comparing entities or jurisdictions?{" "}
            <a
              href="#"
              className="inline-flex items-center gap-1 font-bold text-[#0A8FD0] hover:underline"
            >
              <span>Explore Global Reporting</span>
              <img src="arr.png" alt="" className="h-2 w-auto object-contain shrink-0" />
            </a>{" "}
            Planning an audit?{" "}
            <a
              href="#"
              className="inline-flex items-center gap-1 font-bold text-[#0A8FD0] hover:underline"
            >
              <span>See Security and Trust</span>
              <img src="arr.png" alt="" className="h-2 w-auto object-contain shrink-0" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
