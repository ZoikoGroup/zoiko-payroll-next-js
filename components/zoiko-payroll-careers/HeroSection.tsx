import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function HeroSection() {
  return (
    <section className="bg-[#FFFFFF] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Careers
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-cyan-950 sm:text-4xl md:text-5xl">
              Precision payroll needs precise people
            </h1>
            <p className="mt-4 max-w-[746px] text-base leading-7 font-normal text-[#5A6B78]">
              We&apos;re building the operating layer for global payroll — one
              controlled workflow, one jurisdiction at<br className="hidden sm:block" />
              a time. Come help us get it right.
            </p>
            <div className="mt-6">
              <Link
                href="#open-roles"
                className="inline-flex items-center justify-center rounded-lg bg-linear-to-b from-sky-600 to-sky-900 px-6 py-3 text-sm font-bold text-white shadow-[0px_6px_16px_0px_rgba(9,60,115,0.25)] transition-all duration-200 hover:-translate-y-0.5"
              >
                See open roles
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div className="mx-auto max-w-[1096px]">
            <div className="relative overflow-hidden rounded-[20px] h-[260px] sm:h-[380px] md:h-[480px]">
              <img
                src="/ma.png"
                alt="Zoiko Payroll team working together"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-9 inline-flex items-center gap-2 sm:gap-2.5 rounded-[30px] bg-white/95 px-3.5 py-1.5 sm:px-5 sm:py-2 shadow-sm transition-all duration-200 hover:bg-white">
                <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-2xl bg-sky-950 shrink-0">
                  <svg
                    className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 2L10 6L3 10V2Z" fill="white" />
                  </svg>
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-cyan-950 whitespace-nowrap">
                  Watch video
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}