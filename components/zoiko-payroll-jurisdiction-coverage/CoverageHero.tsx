import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function CoverageHero() {
  return (
    <section className="w-full bg-[#F4F8FB] px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        {/* Mobile Breadcrumb (Hidden on Desktop) */}
        <div className="mb-3 text-center text-xs text-slate-400 sm:hidden">
          Global Payroll / Jurisdiction Coverage
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="max-w-[620px]">
                {/* Eyebrow */}
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A78C2]">
                  <span className="sm:hidden">/ GLOBAL PAYROLL / JURISDICTION COVERAGE</span>
                  <span className="hidden sm:inline">/ GLOBAL PAYROLL | JURISDICTION COVERAGE</span>
                </span>

                {/* Heading */}
                <h1 className="mt-3 text-2xl font-extrabold leading-[1.2] tracking-[-0.02em] text-[#082F49] sm:mt-4 sm:text-4xl lg:text-[40px] sm:leading-[1.18]">
                  See where Zoiko Payroll is currently available — and what that availability includes.
                </h1>

                {/* Description */}
                <p className="mt-3.5 text-xs font-normal leading-relaxed text-slate-600 sm:mt-4 sm:text-base sm:leading-[1.65]">
                  Search a jurisdiction, review its current status and service boundaries, and see any material limitations before planning implementation or migration.
                </p>

                {/* Desktop Action Controls (Hidden on Mobile) */}
                <div className="mt-8 hidden flex-col items-start gap-3.5 sm:flex sm:mt-9">
                  <Link
                    href="#search-jurisdiction"
                    className="inline-flex items-center justify-center rounded-lg bg-[#0A78C2] px-6 py-3 text-sm font-bold text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0863A0] active:translate-y-0"
                  >
                    Check jurisdiction availability
                  </Link>

                  <Link
                    href="/book-a-demo"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A78C2] transition-colors hover:text-[#0863A0] hover:underline"
                  >
                    <span>Book a demo</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>

                {/* Mobile Action Controls & Footnote (Shown Only on Mobile) */}
                <div className="mt-6 flex flex-col gap-2.5 sm:hidden">
                  {/* Primary Button */}
                  <Link
                    href="#search-jurisdiction"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-[#0A78C2] py-3 text-sm font-bold text-white shadow-xs transition-all active:scale-[0.98]"
                  >
                    Check jurisdiction availability
                  </Link>

                  {/* Secondary Button */}
                  <Link
                    href="/country-territory-directory"
                    className="inline-flex w-full items-center justify-center rounded-lg border border-slate-200 bg-white py-3 text-sm font-bold text-[#082F49] shadow-2xs transition-all active:scale-[0.98]"
                  >
                    Browse Country and Territory Directory
                  </Link>

                  {/* Text Link */}
                  <Link
                    href="/book-a-demo"
                    className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#0A78C2] hover:underline"
                  >
                    <span>Book a demo</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>

                  {/* Disclaimer Footnote */}
                  <p className="mt-1 text-[10px] leading-normal text-slate-400">
                    Coverage status is a service-availability statement, not legal, tax, regulatory or compliance advice.
                  </p>
                </div>

                {/* Mobile Image (jc3.png) (Shown Only on Mobile) */}
                <div className="mt-6 sm:hidden">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src="/images/Zoiko-Payroll-Jurisdiction-Coverage/jc3.png"
                      alt="Global payroll jurisdiction coverage"
                      className="h-[260px] w-full scale-[1.12] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Desktop Right Image (jc1.png) (Hidden on Mobile) */}
          <div className="hidden lg:col-span-5 sm:block">
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
                <img
                  src="/images/Zoiko-Payroll-Jurisdiction-Coverage/jc1.png"
                  alt="Reviewing Zoiko Payroll jurisdiction availability"
                  className="h-[280px] w-full scale-[1.12] object-cover sm:h-[340px]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
