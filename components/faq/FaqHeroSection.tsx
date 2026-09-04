"use client";

import Reveal from "../ui/Reveal";
import Eyebrow from "../payroll-guides/Eyebrow";
import { SearchIcon } from "../ui/icons";

export default function FaqHeroSection() {
  return (
    <section className="bg-[#F4F8FB] pt-14 pb-16 lg:pt-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Left content (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow className="text-[#0A8FD0]">Frequently asked questions</Eyebrow>

              <h1 className="mt-3 text-3xl font-extrabold font-jakarta text-[#0A2E4B] leading-[1.18] tracking-tight sm:text-4xl lg:text-[38px] xl:text-[40px]">
                Direct answers about Zoiko<br className="hidden sm:inline" /> Payroll — with the source<br className="hidden sm:inline" /> that owns the details.
              </h1>

              <p className="mt-4 max-w-[560px] text-[15px] sm:text-base font-normal font-jakarta text-[#4E6172] leading-6">
                Search or browse reviewed answers about the product, buying,
                implementation, global payroll, security and support. Every answer names
                its scope and links to the authority that owns current detail.
              </p>

              {/* Feature bullets */}
              <div className="mt-8 max-w-[570px] border-t border-slate-200 pt-6">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
                  {["Reviewed answers", "Clear scope", "Direct authority handoffs"].map(
                    (feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A8FD0]" />
                        <span className="text-xs font-semibold font-jakarta text-[#0A2E4B] leading-5">
                          {feature}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Search panel (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal delay={120}>
              <div className="w-full max-w-[516px] rounded-2xl border border-slate-200 bg-white p-5 shadow-[0px_8px_24px_rgba(10,46,75,0.08)]">
                {/* Search bar with button outside input container */}
                <div className="flex items-center gap-2.5">
                  <div className="flex flex-1 h-11 items-center gap-2.5 rounded-[10px] border border-slate-200 bg-white px-4">
                    <img src="/images/search.png" alt="" className="h-4 w-4 shrink-0" />
                    <span className="truncate text-sm font-jakarta text-[#757575] leading-5 text-left">
                      e.g., pricing, jurisdictions, migration, security
                    </span>
                  </div>
                  <button className="w-28 h-11 shrink-0 rounded-lg bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] text-sm font-bold font-jakarta text-white shadow-[0px_1px_2px_rgba(10,46,75,0.06)] flex items-center justify-center">
                    Search
                  </button>
                </div>

                {/* Sample result */}
                <div className="mt-4 rounded-xl bg-[#E9F0F8] p-5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                  <span className="text-xs font-extrabold font-jakarta text-[#8592A0] uppercase leading-4 tracking-wide">
                    Sample result
                  </span>
                  <h3 className="mt-3 text-sm font-bold font-jakarta text-[#0A2E4B] leading-5">
                    What is Zoiko Payroll?
                  </h3>
                  <p className="mt-2 text-xs font-jakarta text-[#4E6172] leading-5">
                    Zoiko Payroll is a governed payroll platform for preparing, calculating,
                    validating, reviewing, approving and completing payroll operations.
                    Specific workflows and available controls should be confirmed in current
                    product information and documentation.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-jakarta">
                    <span className="text-[#8592A0]">Scope: General</span>
                    <span className="text-[#8592A0]">Reviewed Aug 2026</span>
                    <span className="font-bold text-[#0A8FD0]">View Product Overview →</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}