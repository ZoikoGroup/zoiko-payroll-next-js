import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";

const issues = [
  {
    input: "Missing effective date",
    severity: "Blocker",
    severityBg: "bg-[#FBEAEA]",
    dotBg: "bg-[#B3261E]",
    textColor: "text-[#B3261E]",
    source: "HRIS",
  },
  {
    input: "Timesheet variance",
    severity: "Warning",
    severityBg: "bg-[#FCF1D8]",
    dotBg: "bg-[#9A6300]",
    textColor: "text-[#9A6300]",
    source: "Time system",
  },
  {
    input: "New bank detail",
    severity: "Information",
    severityBg: "bg-[#E7EDFD]",
    dotBg: "bg-[#0A78C3]",
    textColor: "text-[#0A78C3]",
    source: "Manual",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image + blue shade overlay */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/bv.png"
          alt="Hero background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Luminous blue/teal gradient matching Figma */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#072545]/85 via-[#0b3c64]/60 to-[#0284c7]/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Grid with reduced gap between text and container */}
        <div className="grid grid-cols-1 items-center justify-center gap-6 lg:grid-cols-2 lg:gap-2">
          {/* Left: copy */}
          <Reveal>
            <div className="flex w-full max-w-[548px] flex-col items-start gap-4 sm:translate-x-[30px]">
              {/* Tag / Eyebrow */}
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400">
                <span className="text-base font-extrabold leading-none text-sky-400">/</span>
                <span>INPUTS &amp; VALIDATION</span>
              </div>

              {/* Main Heading */}
              <h1 className="w-[548px] max-w-full min-h-[83px] text-3xl font-extrabold text-white sm:text-[36px] sm:leading-[41.5px] leading-tight">
                Validate Payroll Inputs Before
                <br />
                They Become Payroll Errors
              </h1>

              {/* Subtitle */}
              <p className="max-w-[540px] text-base font-normal leading-6 text-slate-300">
                Bring payroll-impacting data together, check it in context, and
                <br />
                resolve exceptions before calculation.
              </p>

              {/* Note Callout */}
              <div className="w-full max-w-[548px] min-h-[64px] rounded-r-lg border-l-4 border-sky-500 bg-[#E8EDF5] px-4 py-2.5 flex items-center shadow-xs">
                <p className="text-sm font-normal leading-5 text-slate-900">
                  <span className="font-bold text-slate-950">Note:</span> Validation reduces preventable risk — it doesn&apos;t guarantee error-free
                  <br />
                  payroll.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/book-a-demo"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#0284C7] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#0369a1] hover:-translate-y-0.5"
                >
                  Book a demo
                </Link>
                <Link
                  href="/book-a-demo"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300/80 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10 hover:-translate-y-0.5"
                >
                  Start free trial
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right: Validation Center Card */}
          <Reveal delay={140}>
            <div className="mx-auto w-full max-w-[531px] overflow-hidden rounded-2xl bg-white shadow-[0px_20px_60px_0px_rgba(8,21,44,0.18)] outline outline-1 outline-offset-[-1px] outline-slate-200">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-gray-100 bg-[#F6F8FB] px-4 py-3">
                <div className="flex items-start gap-1.5">
                  <div className="size-2 rounded-sm bg-slate-200" />
                  <div className="size-2 rounded-sm bg-slate-200" />
                  <div className="size-2 rounded-sm bg-slate-200" />
                </div>
                <div className="pl-1.5">
                  <span className="text-xs font-normal leading-4 text-gray-400">
                    Validation Center — synthetic
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 px-6 py-5">
                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2.5 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-1.5 rounded-md bg-[#F6F8FB] px-2.5 py-1.5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                    <span className="text-xs font-normal leading-4 text-gray-700">
                      Period
                    </span>
                    <span className="text-xs font-semibold leading-4 text-slate-900">
                      Aug 2026
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-md bg-[#F6F8FB] px-2.5 py-1.5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                    <span className="text-xs font-normal leading-4 text-gray-700">
                      Entity
                    </span>
                    <span className="text-xs font-semibold leading-4 text-slate-900">
                      All (4)
                    </span>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs font-normal leading-4 text-gray-400">
                      Refreshed 2m ago
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-start gap-3">
                  <div className="flex flex-1 flex-col justify-start gap-px rounded-[10px] bg-[#F6F8FB] px-4 py-3.5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                    <span className="text-2xl font-semibold leading-9 text-slate-900">
                      1,482
                    </span>
                    <span className="text-xs font-normal leading-4 text-gray-500">
                      Records
                      <br />
                      ready
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-start gap-px rounded-[10px] bg-[#F6F8FB] px-4 py-3.5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                    <span className="text-2xl font-semibold leading-9 text-slate-900">
                      6
                    </span>
                    <span className="text-xs font-normal leading-4 text-gray-500">
                      Blockers
                    </span>
                  </div>
                </div>

                {/* Table */}
                <div className="flex flex-col pt-0.5">
                  <div className="flex items-center border-b border-slate-200 pb-2">
                    <div className="w-48 text-xs font-semibold uppercase leading-4 tracking-wide text-gray-400">
                      Input
                    </div>
                    <div className="w-40 text-xs font-semibold uppercase leading-4 tracking-wide text-gray-400">
                      Severity
                    </div>
                    <div className="w-32 text-xs font-semibold uppercase leading-4 tracking-wide text-gray-400">
                      Source
                    </div>
                  </div>

                  <div className="flex flex-col">
                    {issues.map((issue, idx) => (
                      <div
                        key={issue.input}
                        className="flex items-center"
                      >
                        <div
                          className={`w-48 py-3.5 ${
                            idx < issues.length - 1 ? "border-b border-gray-100" : ""
                          }`}
                        >
                          <span className="text-sm font-semibold leading-5 text-slate-900">
                            {issue.input}
                          </span>
                        </div>
                        <div
                          className={`w-40 py-3 ${
                            idx < issues.length - 1 ? "border-b border-gray-100" : ""
                          }`}
                        >
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-[100px] ${issue.severityBg} py-1 pl-1.5 pr-2`}
                          >
                            <span
                              className={`size-1.5 rounded-[3px] ${issue.dotBg}`}
                            />
                            <span
                              className={`text-xs font-semibold leading-4 tracking-tight ${issue.textColor}`}
                            >
                              {issue.severity}
                            </span>
                          </span>
                        </div>
                        <div
                          className={`w-32 py-3.5 ${
                            idx < issues.length - 1 ? "border-b border-gray-100" : ""
                          }`}
                        >
                          <span className="text-xs font-normal leading-5 text-gray-500">
                            {issue.source}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}