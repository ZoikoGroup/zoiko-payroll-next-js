import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-9 py-20 pl-6 pr-6 md:pl-32 md:pr-28 lg:flex-row lg:items-start">
        {/* Left: copy */}
        <div className="flex w-full flex-col items-start gap-3.5 lg:w-[541px] lg:max-w-[760px]">
          <div className="inline-flex items-center gap-1.5">
            <span className="text-xs font-bold text-sky-600">/</span>
            <span className="text-center text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
              Customer Stories
            </span>
          </div>
          <div className="pt-[0.85px] pb-[0.54px]">
            <h1 className="w-full text-4xl font-extrabold leading-10 text-sky-950 lg:w-[541px]">
              Real customer outcomes, backed by evidence —
              <br />
              not guarantees
            </h1>
          </div>
          <div className="pt-[1.18px]">
            <p className="w-full text-base font-normal leading-7 text-gray-600">
              Every story here reflects one customer&apos;s specific<br />experience and context. Results vary by organization,<br />jurisdiction and configuration — a story is evidence,<br />not a promise.
            </p>
          </div>
          <div className="flex flex-wrap items-start gap-3 pt-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-opacity duration-200 hover:opacity-90"
              style={{
                backgroundImage: "linear-gradient(78deg,rgba(62,163,224,1),rgba(11,69,115,1))",
              }}
            >
              <span className="text-center text-sm font-bold leading-6 text-white">Book a demo</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/global-payroll"
              className="flex items-center justify-center rounded-lg bg-white px-6 py-3 outline outline-1 outline-offset-[-1px] outline-slate-200 transition-colors duration-200 hover:bg-slate-50"
            >
              <span className="text-center text-sm font-bold leading-6 text-sky-950">Explore Global Payroll</span>
            </Link>
          </div>
        </div>
        {/* Right: image */}
        <div className="hidden min-h-64 py-5 lg:block">
          <div className="relative h-96 w-[600px] overflow-hidden rounded-3xl">
            <Image src="/hu.png" alt="Customer payroll team reviewing results" fill priority className="object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(37deg,rgba(15,23,42,0.25) 0%,rgba(8,47,73,0.25) 55%,rgba(2,132,199,0.10) 100%)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}