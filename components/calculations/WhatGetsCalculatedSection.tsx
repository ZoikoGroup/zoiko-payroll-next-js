import Image from "next/image";
import Reveal from "../ui/Reveal";

const items = [
  { label: "Gross earnings", desc: "Regular, overtime, bonus, allowances." },
  {
    label: "Taxable / contributory bases",
    desc: "Thresholds, caps, exemptions.",
  },
  {
    label: "Employee statutory",
    desc: "Taxes and mandatory withholdings.",
  },
  {
    label: "Voluntary / court-ordered",
    desc: "Benefits, pension, garnishments.",
  },
  {
    label: "Employer liabilities",
    desc: "Employer taxes, contributions.",
  },
  { label: "Net pay", desc: "Gross plus additions, less deductions." },
  {
    label: "Accumulators",
    desc: "Period, YTD and lifetime balances.",
  },
  {
    label: "Downstream outputs",
    desc: "Only where the capability is live.",
  },
];

export default function WhatGetsCalculatedSection() {
  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Left: Checklist */}
          <Reveal>
            <div className="flex flex-col items-start gap-2">
              <div className="inline-flex items-center gap-2">
                <div className="w-4 h-px bg-[#0A78C3]" />
                <span className="text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest text-[#0A78C3]">
                  WHAT GETS CALCULATED
                </span>
              </div>
              <h2 className="pt-px text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight text-slate-900">
                Every component, employee vs<br className="hidden sm:inline" /> employer
              </h2>
              <p className="pb-1 text-base font-normal font-['Inter'] leading-6 text-gray-500">
                Regular pay through accumulators — each with clear treatment.
              </p>

              {/* 2-Column Grid of 8 Cards (matching Figma) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-2">
                {items.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-[2.75px] rounded-[10px] bg-white px-3.5 py-3 outline outline-1 outline-offset-[-1px] outline-slate-200"
                  >
                    <div className="flex items-center gap-1.5">
                      <Image
                        src="/blue.png"
                        alt="check"
                        width={10}
                        height={10}
                        className="size-2.5 object-contain shrink-0"
                      />
                      <span className="text-sm font-semibold font-['Inter'] leading-5 text-slate-900">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-xs font-normal font-['Inter'] leading-5 text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: Image */}
          <Reveal delay={140}>
            <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-[20px] overflow-hidden shadow-sm">
              <Image
                src="/tg.png"
                alt="Every component, employee vs employer"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-[20px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
