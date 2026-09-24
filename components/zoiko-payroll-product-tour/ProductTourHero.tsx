import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function ProductTourHero() {
  return (
    <section className="w-full bg-[#F4F8FB] px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-[#091E2E] shadow-xl sm:rounded-[22px]">
            {/* Desktop Background Image (Hidden on Mobile) */}
            <div
              className="absolute inset-0 hidden bg-cover bg-[center_right] sm:block md:bg-right"
              style={{
                backgroundImage: "url('/images/Zoiko-Payroll-Product-Tour/ppt1.png')",
              }}
              aria-hidden="true"
            />

            {/* Mobile Background Image (Shown Only on Mobile) */}
            <div
              className="absolute inset-0 bg-cover bg-center sm:hidden"
              style={{
                backgroundImage: "url('/images/resources-reporting/hero-dashboard.png')",
              }}
              aria-hidden="true"
            />

            {/* Desktop Gradient Overlay (Hidden on Mobile) */}
            <div
              className="absolute inset-0 hidden bg-gradient-to-r from-[#091E2E] via-[#091E2E]/92 via-45% to-[#091E2E]/25 sm:block sm:via-50% lg:via-48% lg:to-transparent"
              aria-hidden="true"
            />

            {/* Mobile Gradient Overlay (Shown Only on Mobile) */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#091E2E]/92 via-[#091E2E]/70 to-[#091E2E]/95 sm:hidden"
              aria-hidden="true"
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col justify-center px-5 py-8 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:py-24">
              <div className="max-w-[580px]">
                {/* Eyebrow / Tag */}
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
                    / PRODUCT TOUR
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="mt-3 text-2xl font-extrabold leading-[1.2] tracking-[-0.02em] text-white sm:mt-4 sm:text-4xl md:text-[42px] sm:leading-[1.18]">
                  See how controlled payroll work moves from inputs to reports.
                </h1>

                {/* Subtitle / Description */}
                <p className="mt-3.5 text-xs font-normal leading-relaxed text-[#CBD5E1] sm:mt-4 sm:text-base sm:leading-[1.65]">
                  Take a guided tour of representative Zoiko Payroll workflows using synthetic data. Explore preparation, validation, approvals, deductions and adjustments, employee payroll records, and reporting.
                </p>

                {/* Desktop Action Buttons (Hidden on Mobile) */}
                <div className="mt-8 hidden sm:flex flex-wrap items-center gap-3.5 sm:mt-9">
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center justify-center rounded-lg bg-[#38BDF8] px-5 py-3 text-sm font-bold text-[#091E2E] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7DD3FC] hover:shadow-md active:translate-y-0"
                  >
                    How Zoiko Payroll works &rarr;
                  </Link>

                  <Link
                    href="/book-a-demo"
                    className="inline-flex items-center justify-center rounded-lg border border-white/35 bg-[#091E2E]/40 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-[#091E2E]/70 active:translate-y-0"
                  >
                    Book a demo
                  </Link>
                </div>

                {/* Mobile Action Buttons & Footer Elements (Shown Only on Mobile) */}
                <div className="mt-6 flex flex-col gap-2.5 sm:hidden">
                  {/* Start the product tour */}
                  <Link
                    href="#interactive-tour"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-[#85c8ea] py-3 text-sm font-bold text-[#091E2E] shadow-sm transition-all active:scale-[0.98]"
                  >
                    Start the product tour
                  </Link>

                  {/* Book a demo */}
                  <Link
                    href="/book-a-demo"
                    className="inline-flex w-full items-center justify-center rounded-lg border border-white/25 bg-[#091E2E]/60 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-all active:scale-[0.98]"
                  >
                    Book a demo
                  </Link>

                  {/* How Zoiko Payroll works text link */}
                  <Link
                    href="/how-it-works"
                    className="mt-1 inline-flex items-center justify-center gap-1.5 py-1 text-xs font-semibold text-white/90 transition-colors hover:text-white"
                  >
                    <span>How Zoiko Payroll works</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>

                  {/* Synthetic data footnote */}
                  <p className="mt-2 text-center text-[10px] leading-tight text-slate-400">
                    Illustrative synthetic data only. No real employee or customer payroll information is used in this tour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
