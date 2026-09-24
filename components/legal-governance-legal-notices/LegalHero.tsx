"use client";

import React from "react";

const LegalHero = () => {
  return (
    <section className="flex w-full flex-col items-center gap-3.5 bg-[#F4F8FB] pt-12 pb-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-stretch justify-center gap-10 px-6 pb-4 md:px-12 lg:flex-row lg:gap-14 lg:px-24">

        {/* LEFT CONTENT */}
        <div className="flex flex-1 flex-col items-start gap-3.5">

          {/* Label */}
          <div className="relative h-5">
            <div className="absolute left-[-1.48px] top-[3px] h-3.5 w-1.5 rounded-[2px] bg-[#0A8FD0]" />

            <div className="absolute left-[11px] top-[-0.5px] whitespace-nowrap font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0A8FD0]">
              Legal Notices
            </div>
          </div>

          {/* Heading */}
          <div className="pt-0.5">
            <h1 className="font-['Inter'] text-3xl font-extrabold leading-10 text-[#0A2E4B] md:text-4xl">
              Legal information, with clear
              <br className="hidden md:block" />
              scope and source authority.
            </h1>
          </div>

          {/* Description */}
          <div className="w-full max-w-[600px] pt-[1.28px]">
            <p className="font-['Inter'] text-base font-normal leading-7 text-[#657583]">
              Review the legal notices Zoiko Payroll is authorized to publish.
              <br className="hidden md:block" />
              Current records identify what they apply to, when they are
              <br className="hidden md:block" />
              effective, and which authoritative legal document or owner
              <br className="hidden md:block" />
              governs related rights and obligations.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-start gap-3 pt-3">
            <button
              type="button"
              className="flex items-center justify-center rounded-lg bg-[#0A8FD0] px-6 py-3 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-colors hover:bg-[#087DB8]"
            >
              <span className="whitespace-nowrap text-center font-['Inter'] text-sm font-bold leading-6 text-white">
                Review published notices
              </span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center rounded-lg border border-[#DCE6ED] bg-white px-6 py-3"
            >
              <span className="whitespace-nowrap text-center font-['Inter'] text-sm font-bold leading-6 text-[#0A2E4B]">
                Review notice history
              </span>
            </button>
          </div>

          {/* RELATED DOCUMENTS */}
          <div className="flex flex-col items-start">
            <div className="font-['Inter'] text-xs font-bold leading-5 text-[#0A8FD0]">
              Browse related legal and governance documents →
            </div>
          </div>
        </div>

        {/* REGISTRY CARD */}
        <div className="flex-1 overflow-hidden rounded-2xl bg-[#0A2E4B] p-5 shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)]">

          <div className="flex w-full flex-col items-start gap-2">

            {/* Registry Header */}
            <div className="flex w-full items-center justify-between gap-4">
              <div className="relative h-6">
                <div className="absolute left-0 top-[7.19px] h-2 w-2 rounded-[2px] bg-[#0A8FD0]" />

                <div className="ml-4 whitespace-nowrap font-['Inter'] text-sm font-bold leading-6 text-white">
                  Legal Notice Registry
                </div>
              </div>

              <div className="flex items-center rounded-[20px] bg-white/10 px-2.5 py-1">
                <span className="whitespace-nowrap font-['Inter'] text-xs font-bold leading-4 text-[#9FC7DF]">
                  Synthetic specimen
                </span>
              </div>
            </div>

            {/* TABLE */}
            <div className="w-full overflow-x-auto pt-[5px]">
              <div className="min-w-[520px]">

                {/* Table Header */}
                <div className="flex w-full">
                  <div className="w-36 shrink-0 border-b border-white/10 px-3 py-2">
                    <span className="font-['Inter'] text-[9.5px] font-bold uppercase leading-4 text-[#8FAFC2]">
                      Notice
                    </span>
                  </div>

                  <div className="w-20 shrink-0 border-b border-white/10 px-3 py-2">
                    <span className="font-['Inter'] text-[9.5px] font-bold uppercase leading-4 text-[#8FAFC2]">
                      Category
                    </span>
                  </div>

                  <div className="w-28 shrink-0 border-b border-white/10 px-3 py-2">
                    <span className="font-['Inter'] text-[9.5px] font-bold uppercase leading-4 text-[#8FAFC2]">
                      Status
                    </span>
                  </div>

                  <div className="w-40 shrink-0 border-b border-white/10 px-3 py-2">
                    <span className="font-['Inter'] text-[9.5px] font-bold uppercase leading-4 text-[#8FAFC2]">
                      Effective
                    </span>
                  </div>
                </div>

                {/* ROW 1 */}
                <div className="flex w-full">
                  <div className="w-36 shrink-0 border-b border-white/10 px-3 py-2.5">
                    <span className="font-['Inter'] text-xs font-normal leading-5 text-[#DCEAF2]">
                      Trademark Notice
                    </span>
                  </div>

                  <div className="w-20 shrink-0 border-b border-white/10 px-3 py-2.5">
                    <span className="font-['Inter'] text-xs font-normal leading-5 text-[#DCEAF2]">
                      IP
                    </span>
                  </div>

                  <div className="w-28 shrink-0 border-b border-white/10 px-3 pb-2.5 pt-3">
                    <span className="rounded-[20px] bg-[#E7F5ED] px-2 py-px font-['Inter'] text-[10px] font-extrabold uppercase leading-4 tracking-tight text-[#238A57]">
                      Current
                    </span>
                  </div>

                  <div className="w-40 shrink-0 border-b border-white/10 px-3 py-2.5">
                    <span className="font-['Inter'] text-xs font-normal leading-5 text-[#DCEAF2]">
                      Jan 2026
                    </span>
                  </div>
                </div>

                {/* ROW 2 */}
                <div className="flex w-full">
                  <div className="w-36 shrink-0 border-b border-white/10 px-3 py-2.5">
                    <span className="font-['Inter'] text-xs font-normal leading-5 text-[#DCEAF2]">
                      Operator Disclosure
                    </span>
                  </div>

                  <div className="w-20 shrink-0 border-b border-white/10 px-3 py-2.5">
                    <span className="font-['Inter'] text-xs font-normal leading-5 text-[#DCEAF2]">
                      Entity
                    </span>
                  </div>

                  <div className="w-28 shrink-0 border-b border-white/10 px-3 pb-2.5 pt-3">
                    <span className="rounded-[20px] bg-[#E7F5ED] px-2 py-px font-['Inter'] text-[10px] font-extrabold uppercase leading-4 tracking-tight text-[#238A57]">
                      Current
                    </span>
                  </div>

                  <div className="w-40 shrink-0 border-b border-white/10 px-3 py-2.5">
                    <span className="font-['Inter'] text-xs font-normal leading-5 text-[#DCEAF2]">
                      Mar 2026
                    </span>
                  </div>
                </div>

                {/* ROW 3 */}
                <div className="flex w-full">
                  <div className="w-36 shrink-0 px-3 py-2.5">
                    <span className="font-['Inter'] text-xs font-normal leading-5 text-[#DCEAF2]">
                      Prior Regional Notice
                    </span>
                  </div>

                  <div className="w-20 shrink-0 px-3 py-2.5">
                    <span className="font-['Inter'] text-xs font-normal leading-5 text-[#DCEAF2]">
                      Regional
                    </span>
                  </div>

                  <div className="w-28 shrink-0 px-3 pb-2.5 pt-3">
                    <span className="rounded-[20px] bg-[#EEF2F5] px-2 py-px font-['Inter'] text-[10px] font-extrabold uppercase leading-4 tracking-tight text-[#587387]">
                      Superseded
                    </span>
                  </div>

                  <div className="w-40 shrink-0 px-3 py-2.5">
                    <span className="font-['Inter'] text-xs font-normal leading-5 text-[#DCEAF2]">
                      Superseded Jun 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Registry Note */}
            <div className="flex w-full items-center justify-center pb-[0.59px]">
              <p className="text-center font-['Inter'] text-xs font-normal leading-4 text-[#8FAFC2]">
                Illustrative registry preview. Scope, status and dates shown
                only from the approved source.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SOURCE NOTICE */}
      <div className="mx-6 flex w-full max-w-[1116px] flex-col items-start rounded-xl border-b border-r border-t border-[#DCE6ED] border-l-4 border-l-[#0A8FD0] bg-white px-7 py-6 md:mx-0">
        <div className="w-full">
          <p className="font-['Inter'] text-sm font-normal leading-6 text-[#40586A]">
            <span className="font-bold text-[#0A2E4B]">
              Source-approved notices only.
            </span>{" "}
            If a legal fact, scope, owner, or date is not established by the
            approved registry, it is not inferred.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalHero;