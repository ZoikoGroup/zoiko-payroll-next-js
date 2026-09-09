import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import { StatusPill } from "./shared";

const groups = [
  {
    name: "Salaried — GBP",
    status: "ready" as const,
    statusLabel: "Ready to release",
    currency: "GBP",
  },
  {
    name: "Contractors — EUR",
    status: "pending" as const,
    statusLabel: "Awaiting funding",
    currency: "EUR",
  },
  {
    name: "Statutory — GBP",
    status: "authorized" as const,
    statusLabel: "Authorized",
    currency: "GBP",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image + gradient */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/cf.png"
          alt="Office Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071326]/90 via-[#0a1e38]/72 to-[#0e3b6c]/32" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* Left: copy */}
          <Reveal>
            <div className="flex flex-col items-start gap-3.5">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-4 bg-sky-400" />
                <span className="text-xs font-semibold uppercase leading-4 tracking-widest text-sky-400 font-['Inter']">
                  PAYMENTS ORCHESTRATION
                </span>
              </div>

              <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[42px] xl:text-[45px] lg:leading-[52px] font-['Inter']">
                <span className="inline sm:whitespace-nowrap">Move Approved Payroll Into</span>
                <br />
                <span className="inline sm:whitespace-nowrap">Controlled, Traceable</span>
                <br />
                <span>Payments</span>
              </h1>

              <p className="max-w-[511px] text-base font-normal leading-6 text-slate-300 font-['Inter']">
                Coordinate funding and authorization, route through supported
                channels, and track outcomes through reconciliation.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/book-a-demo"
                  className="flex min-h-12 items-center justify-center rounded-lg bg-sky-600 hover:bg-sky-500 px-6 py-3 text-sm font-semibold leading-5 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  Book a demo
                </Link>
                <Link
                  href="/book-a-demo"
                  className="flex min-h-12 items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold leading-5 text-white outline outline-1 outline-offset-[-1px] outline-white/30 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Start free trial
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right: Payment Control Center card with Floating Badge */}
          <Reveal delay={140}>
            <div className="relative w-full max-w-[531px]">
              {/* Floating Badge */}
              <div className="absolute -top-3.5 left-6 z-20 px-3 py-1.5 bg-white rounded-[10px] shadow-[0px_6px_20px_0px_rgba(15,23,42,0.08)] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span className="text-slate-900 text-xs font-semibold font-['Inter'] leading-4">
                  1 review exception
                </span>
              </div>

              <div className="overflow-hidden rounded-2xl bg-white shadow-[0px_20px_60px_0px_rgba(8,21,44,0.18)] outline outline-1 outline-offset-[-1px] outline-slate-200">
                {/* Window chrome */}
                <div className="flex items-center gap-2 border-b border-gray-100 bg-slate-50 px-4 py-3">
                  <div className="flex items-start gap-1.5">
                    <span className="size-2 rounded-sm bg-slate-200" />
                    <span className="size-2 rounded-sm bg-slate-200" />
                    <span className="size-2 rounded-sm bg-slate-200" />
                  </div>
                  <span className="pl-1.5 text-xs font-normal leading-4 text-gray-400 font-['Inter']">
                    Payment Control Center — synthetic
                  </span>
                </div>

                <div className="flex flex-col gap-4 px-6 py-5">
                  {/* Filters */}
                  <div className="flex flex-wrap items-center gap-2.5 border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-1.5 rounded-md bg-slate-50 px-2.5 py-1.5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                      <span className="text-xs font-normal leading-4 text-gray-700 font-['Inter']">
                        Entity
                      </span>
                      <span className="text-xs font-semibold leading-4 text-slate-900 font-['Inter']">
                        UK Ltd
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-md bg-slate-50 px-2.5 py-1.5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                      <span className="text-xs font-normal leading-4 text-gray-700 font-['Inter']">
                        Pay date
                      </span>
                      <span className="text-xs font-semibold leading-4 text-slate-900 font-['Inter']">
                        Aug 25
                      </span>
                    </div>
                    <span className="ml-auto text-xs font-normal leading-4 text-gray-400 font-['Inter']">
                      Cycle PMT-0842
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-3">
                    <div className="flex-1 flex-col justify-start gap-px rounded-[10px] bg-slate-50 px-4 py-3.5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                      <span className="block text-2xl font-semibold leading-9 text-slate-900 font-['Inter']">
                        1,236
                      </span>
                      <span className="block text-xs font-normal leading-4 text-gray-500 font-['Inter']">
                        Approved
                        <br />
                        obligations
                      </span>
                    </div>
                    <div className="flex-1 flex-col justify-start gap-px rounded-[10px] bg-slate-50 px-4 py-3.5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                      <span className="block text-2xl font-semibold leading-9 text-slate-900 font-['Inter']">
                        £1.2M
                      </span>
                      <span className="block text-xs font-normal leading-4 text-gray-500 font-['Inter']">
                        Funding
                        <br />
                        confirmed
                      </span>
                    </div>
                  </div>

                  {/* Group table */}
                  <div className="flex flex-col pt-0.5">
                    <div className="flex items-start border-b border-slate-200">
                      <div className="w-44 border-b border-slate-200">
                        <span className="block px-3 pt-2 pb-2 text-xs font-semibold uppercase leading-4 tracking-wide text-gray-400 font-['Inter']">
                          Group
                        </span>
                      </div>
                      <div className="w-52 border-b border-slate-200">
                        <span className="block px-3 pt-2 pb-2 text-xs font-semibold uppercase leading-4 tracking-wide text-gray-400 font-['Inter']">
                          Status
                        </span>
                      </div>
                      <div className="w-24 border-b border-slate-200">
                        <span className="block px-3 pt-2 pb-2 text-xs font-semibold uppercase leading-4 tracking-wide text-gray-400 font-['Inter']">
                          Currency
                        </span>
                      </div>
                    </div>

                    {groups.map((group, idx) => (
                      <div key={group.name} className="flex items-start">
                        <div
                          className={`w-44 px-3 py-3.5 ${
                            idx < groups.length - 1 ? "border-b border-gray-100" : ""
                          }`}
                        >
                          <span className="text-sm font-semibold leading-5 text-slate-900 font-['Inter']">
                            {group.name}
                          </span>
                        </div>
                        <div
                          className={`w-52 p-3 ${
                            idx < groups.length - 1 ? "border-b border-gray-100" : ""
                          }`}
                        >
                          <StatusPill variant={group.status} label={group.statusLabel} />
                        </div>
                        <div
                          className={`w-24 px-3 pt-4 pb-3.5 ${
                            idx < groups.length - 1 ? "border-b border-gray-100" : ""
                          }`}
                        >
                          <span className="text-xs font-normal leading-5 text-gray-500 font-['Inter']">
                            {group.currency}
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