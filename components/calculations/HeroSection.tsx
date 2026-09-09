import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";

const calcMetrics = [
  { value: "£4,820", label: "Gross earnings" },
  { value: "£3,110", label: "Net pay" },
  { value: "£1,240", label: "Employee statutory" },
  { value: "£612", label: "Employer liabilities" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20">
      {/* Background with vg.png for table/card on right */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/vg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-start gap-14 px-6 sm:px-10 lg:flex-row lg:px-40">
        {/* Left: Copy */}
        <Reveal className="flex-1 flex flex-col items-start gap-3.5 z-10">
          <div className="flex items-center gap-2">
            <div className="w-4 h-px bg-[#0A78C3]" />
            <span className="text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest text-[#0A78C3]">
              CALCULATIONS
            </span>
          </div>
          <h1 className="pt-0.5 text-4xl sm:text-5xl font-extrabold font-['Inter'] leading-[50px] tracking-wide text-slate-900">
            Turn Approved
            <br />
            Payroll Inputs Into
            <br />
            Explainable Pay
            <br />
            Results
          </h1>
          <p className="pt-[1.45px] text-base sm:text-lg font-normal font-['Inter'] leading-7 text-gray-700">
            Apply effective-dated rules in the right context. Calculate
            <br className="hidden sm:inline" />
            gross-to-net, see what changed, and keep the evidence.
          </p>
          <div className="rounded-tr-lg rounded-br-lg border-l-[3px] border-[#0A78C3] bg-[#E7EDFD] px-4 py-2.5">
            <p className="text-sm font-normal font-['Inter'] leading-5 text-slate-900">
              <span className="font-bold">Note:</span> Calculation is controlled
              and reviewable — separate from payment execution.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2.5">
            <Link
              href="/book-a-demo"
              className="relative inline-flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-sky-900 px-5 py-3 text-sm font-bold font-['Inter'] leading-5 text-white shadow-[0px_8px_18px_-6px_rgba(11,76,120,0.45)] outline outline-1 outline-offset-[-1px] outline-[rgba(255,255,255,0)] transition-all hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
            <Link
              href="/zoiko-payroll-inputs-validation"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold font-['Inter'] leading-5 text-slate-900 transition-all hover:bg-slate-50 hover:-translate-y-0.5"
            >
              Explore Inputs &amp; Validation
            </Link>
          </div>
        </Reveal>

        {/* Right: Calculation Trace Card */}
        <Reveal delay={140} className="flex-1 w-full relative z-10">
          <div className="relative w-full max-w-[560px]">
            {/* Status floating badge */}
            <div className="absolute -top-3.5 left-6 z-20 flex items-center gap-1.5 rounded-[10px] bg-white px-3.5 py-1.5 shadow-[0px_6px_20px_0px_rgba(15,23,42,0.08)] outline outline-1 outline-offset-[-1px] outline-slate-200">
              <span className="text-xs font-semibold font-['Inter'] leading-5 text-slate-900">
                Status
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 outline outline-1 outline-emerald-200/50 py-0.5 pl-1.5 pr-2">
                <span className="size-1.5 rounded-full bg-emerald-600" />
                <span className="text-xs font-semibold font-['Inter'] leading-4 tracking-tight text-emerald-700">
                  Calculated
                </span>
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-[0px_20px_60px_0px_rgba(8,21,44,0.18)] outline outline-1 outline-offset-[-1px] outline-slate-200">
              {/* Window chrome */}
              <div className="flex h-[43px] items-center gap-2 border-b border-gray-100 bg-slate-50 px-4">
                <div className="flex items-start gap-1.5">
                  <div className="size-2 rounded-sm bg-slate-200" />
                  <div className="size-2 rounded-sm bg-slate-200" />
                  <div className="size-2 rounded-sm bg-slate-200" />
                </div>
                <div className="pl-1.5">
                  <span className="text-xs font-normal font-['Inter'] leading-4 text-gray-400">
                    Calculation Trace — synthetic
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 px-6 py-5">
                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2.5 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-1.5 rounded-md bg-slate-50 px-2.5 py-1.5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                    <span className="text-xs font-normal font-['Inter'] leading-4 text-gray-700">
                      Worker
                    </span>
                    <span className="text-xs font-semibold font-['Inter'] leading-4 text-slate-900">
                      E-10432
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-md bg-slate-50 px-2.5 py-1.5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                    <span className="text-xs font-normal font-['Inter'] leading-4 text-gray-700">
                      Period
                    </span>
                    <span className="text-xs font-semibold font-['Inter'] leading-4 text-slate-900">
                      Aug 2026
                    </span>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs font-normal font-['Inter'] leading-4 text-gray-400">
                      Last calc. 4m ago
                    </span>
                  </div>
                </div>

                {/* Metrics Grid (2x2 matching Figma) */}
                <div className="grid grid-cols-2 gap-3 pt-0.5">
                  {calcMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex flex-col gap-px rounded-[10px] bg-slate-50 px-4 py-3.5 outline outline-1 outline-offset-[-1px] outline-slate-200"
                    >
                      <span className="text-2xl font-semibold font-['Inter'] leading-9 text-slate-900">
                        {metric.value}
                      </span>
                      <span className="text-xs font-normal font-['Inter'] leading-4 text-gray-500">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Change reason */}
                <div className="flex items-center justify-between rounded-lg bg-[#E7EDFD] px-3.5 py-3">
                  <span className="text-xs font-semibold font-['Inter'] leading-5 text-slate-900">
                    Why did this change?
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 outline outline-1 outline-blue-200/60">
                    <span className="size-1.5 rounded-full bg-[#0A78C3]" />
                    <span className="text-xs font-semibold font-['Inter'] leading-4 tracking-tight text-[#0A78C3]">
                      Rate updated
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
