import Reveal from "../ui/Reveal";

export default function FinalStepSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[20px] bg-[#051B2B] p-8 sm:p-12">
            {/* Radial Glow Effect */}
            <div className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-[#0A78C2]/20 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12">
              {/* Left Content Column */}
              <div className="flex flex-1 flex-col gap-4">
                {/* Eyebrow / Tag */}
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-[#0A78C2]">/</span>
                  <span className="text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide text-[#0A78C2]">
                    Final step
                  </span>
                </div>

                {/* Heading */}
                <h2 className="max-w-[440px] text-3xl font-extrabold font-['Inter'] leading-9 text-white">
                  Get your buying team the evidence it needs.
                </h2>

                {/* Description */}
                <p className="max-w-[500px] text-xs sm:text-sm font-light font-['Inter'] leading-5 text-[#8595A5]">
                  Build a procurement pack, start a security review, or request
                  restricted documents directly.
                </p>

                {/* Action Buttons */}
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-[10px] bg-[#0A78C2] px-5 text-xs font-bold font-['Inter'] text-white shadow-[0px_4px_14px_0px_rgba(10,120,194,0.30)] transition-colors hover:bg-[#0867A6]"
                  >
                    Check Resources
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-[10px] border border-white/20 bg-white/10 px-5 text-xs font-bold font-['Inter'] text-white transition-colors hover:bg-white/15"
                  >
                    Contact Support
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full shrink-0 overflow-hidden rounded-[16px] lg:w-[460px]">
                <img
                  src="ppp.png"
                  alt="Evidence review"
                  className="h-[260px] w-full rounded-[16px] object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}