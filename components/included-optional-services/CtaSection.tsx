import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function CtaSection() {
  return (
    <section className="bg-[#EFF4F7] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-[1136px] overflow-hidden rounded-3xl bg-[#082F49] px-6 py-12 sm:px-12 lg:py-16">
            {/* Radial background glow */}
            <div className="absolute -left-[100px] top-[160px] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(58,154,214,0.25)_0%,transparent_70%)] pointer-events-none" />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              {/* Left content */}
              <div className="relative z-10">
                <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase leading-5 tracking-wide text-[#3A9AD6]">
                  <span aria-hidden="true">/</span>
                  Final step
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-9 text-white">
                  Build a service scope that fits<br />how you operate.
                </h2>
                <div className="mt-4 w-[518.95px] text-slate-300 text-base font-normal font-['Inter'] leading-6">
                  Tell us how you want payroll operated — we&apos;ll show what&apos;s included,<br />
                  what&apos;s optional, and what needs a specialist.
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center rounded-[10px] bg-gradient-to-r from-[#117DC5] to-[#2C90D0] px-6 text-sm font-bold text-white shadow-[0px_6px_16px_rgba(17,125,197,0.28)] hover:opacity-90 transition-opacity"
                  >
                    Request Custom Quote
                  </Link>
                  <Link
                    href="/demo"
                    className="inline-flex h-12 items-center rounded-[10px] border border-white/30 bg-white/10 px-6 text-sm font-bold text-white hover:bg-white/20 transition-colors"
                  >
                    Book a demo
                  </Link>
                </div>
              </div>

              {/* Right image */}
              <div className="relative z-10 flex justify-end">
                <div className="relative h-64 w-96 overflow-hidden rounded-2xl">
                  <img
                    src="/io.png"
                    alt="Team collaborating on payroll service planning"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}