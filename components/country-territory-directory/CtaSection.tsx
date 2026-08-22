import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

export default function CtaSection() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-[#0B2136] lg:grid-cols-2">
            <div className="px-6 py-12 sm:px-10">
              <Eyebrow tone="light">Ready to discuss a market?</Eyebrow>
              <h2 className="mt-5 max-w-md text-2xl font-extrabold leading-8 text-white">
                Confirm public status, then talk specifics.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
                Commercial conversation happens after you&apos;ve seen the current, documented state
                — never before.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  Discuss markets
                </Link>
                <Link
                  href="/book-a-demo"
                  className="flex min-h-11 items-center justify-center rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5"
                >
                  Book a demo
                </Link>
              </div>
            </div>

            {/* The export carries ~85% alpha throughout, so it sits on its own opaque ground
                rather than picking up the navy behind it. */}
            <div className="bg-slate-900">
              <img
                src="/images/country-territory-directory/cta.png"
                alt="Global payroll team reviewing market coverage together"
                className="h-full min-h-64 w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
