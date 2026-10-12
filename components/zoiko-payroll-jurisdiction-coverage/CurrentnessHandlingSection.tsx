import Reveal from "@/components/ui/Reveal";

export default function CurrentnessHandlingSection() {
  return (
    <section className="w-full bg-[#E9F0F8] px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-14">
          {/* Image: On mobile placed on top; on desktop placed on the right */}
          <div className="order-first lg:order-last lg:col-span-6">
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
                <img
                  src="/images/Zoiko-Payroll-Jurisdiction-Coverage/jc2.png"
                  alt="Payroll team verifying jurisdiction change handling and currentness"
                  className="h-[260px] w-full scale-[1.12] object-cover sm:h-[340px]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          {/* Text: On mobile placed below image; on desktop placed on the left */}
          <div className="order-last lg:order-first lg:col-span-6">
            <Reveal>
              <div className="max-w-[560px]">
                {/* Eyebrow */}
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0A78C2]">
                  / CURRENTNESS & CHANGE HANDLING
                </span>

                {/* Heading */}
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl md:text-[34px] lg:leading-[1.2]">
                  Last verified is a release criterion, not a formality.
                </h2>

                {/* Description */}
                <p className="mt-3.5 text-xs leading-relaxed text-slate-600 sm:mt-4 sm:text-base sm:leading-[1.65]">
                  Every coverage record carries its actual maintained verification date. If verification cannot be confirmed, the page says so — it never shows a silently stale default.
                </p>

                {/* Mobile-Only Amber Warning Callout Box (Hidden on Desktop) */}
                <div className="mt-6 rounded-2xl border border-[#EDDFB3] bg-[#F3E9CC] p-4 sm:hidden">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-[#7D5A18]" aria-hidden="true">
                      &#9650;
                    </span>
                    <p className="text-xs font-semibold leading-relaxed text-[#7D5A18]">
                      This jurisdiction&apos;s status was last verified more than 90 days ago. Confirm current scope before proceeding.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="mt-3.5 inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-xs font-bold text-[#082F49] shadow-2xs transition-all hover:bg-slate-50 active:scale-[0.98]"
                  >
                    Request verification
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
