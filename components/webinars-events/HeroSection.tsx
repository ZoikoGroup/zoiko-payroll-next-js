import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-slate-950">
      {/* Background image + gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/Background (31).png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-sky-600/30" />
      </div>

      <div className="relative mx-auto flex max-w-[1320px] flex-col gap-10 px-6 py-20 md:px-14 md:py-24 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: copy */}
        <div className="flex max-w-[600px] flex-col items-start gap-3 p-0 lg:p-12">
          {/* Label */}
          <div className="flex h-5 w-full items-center gap-3">
            <span className="h-3.5 w-1.5 rounded-xs bg-sky-600" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-300">
              Webinars &amp; Events
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-10 text-white">
            Learn how global payroll
            <br className="hidden md:block" /> teams put Zoiko Payroll to work
          </h1>

          <p className="max-w-[458px] text-base font-normal leading-6 text-slate-300">
            Live sessions and on-demand recordings covering payroll operations,
            compliance, implementation and platform capabilities.
          </p>

          <div className="flex flex-wrap items-start gap-3 pt-3">
            <Link
              href="/contact"
              className="flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-sky-400 to-sky-700 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-transform duration-200 hover:scale-[1.02]"
            >
              <span className="text-sm font-bold leading-6 text-white">
                Join the Waitlist
              </span>
            </Link>
            <Link
              href="/help-center"
              className="flex h-12 items-center justify-center rounded-lg bg-white/20 px-6 py-3 outline outline-1 outline-offset-[-1px] outline-white/40 transition-colors duration-200 hover:bg-white/30"
            >
              <span className="text-sm font-bold leading-6 text-white">
                Contact Support
              </span>
            </Link>
          </div>
        </div>

        {/* Right: visual panel */}
        <div className="hidden min-w-[320px] flex-1 justify-end lg:flex">
          <div className="relative h-80 w-[500px] rounded-2xl border border-white/25 bg-gradient-to-b from-stone-400/20 to-slate-900/30 shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 outline outline-1 outline-offset-4 outline-white/40">
                <span className="ml-1 text-2xl text-white">▶</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
