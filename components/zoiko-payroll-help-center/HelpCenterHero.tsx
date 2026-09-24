"use client";

import React from "react";

export default function HelpCenterHero() {
  return (
    <section className="w-full bg-[#F7FAFC]">
      {/* HERO */}
      <div className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/zoiko-payroll-help-center/bg.png"
          alt="Zoiko Payroll Help Center"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E4B]/90 via-[#0A2E4B]/65 via-[55%] to-[#0A8FD0]/25" />

        {/* Hero Content */}
        <div className="relative z-10 flex w-full max-w-[720px] flex-col items-center gap-4 px-6 py-20 text-center">
          {/* Label */}
          <div className="flex items-center justify-center gap-1.5">
            <div className="flex h-5 items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0A8FD0]" />
            </div>

            <span className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#9FC7DF]">
              Help Center
            </span>
          </div>

          {/* Heading */}
          <div className="w-full">
            <h1 className="font-['Inter'] text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-5xl lg:leading-[48.3px]">
              Find the right answer for Zoiko
            
              Payroll.
            </h1>
          </div>

          {/* Description */}
          <div className="w-full pb-4">
            <p className="font-['Inter'] text-sm font-normal leading-6 text-[#D8E6EF] sm:text-base">
              Search approved support guidance, product help, and authoritative
              next steps. For
              <br className="hidden lg:block" />
              product configuration, live service status, release changes, or
              market-specific
              <br className="hidden lg:block" />
              requirements, we&apos;ll route you to the source that owns the
              answer.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full max-w-[680px] rounded-2xl bg-white p-2 shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)]">
            <div className="flex w-full items-stretch gap-2">
              {/* Search Input */}
              <div className="flex min-w-0 flex-1 items-center overflow-hidden">
                <input
                  type="text"
                  placeholder="Search Zoiko Payroll help…"
                  className="w-full border-0 bg-transparent px-4 py-4 font-['Inter'] text-sm font-normal text-[#2E4658] outline-none placeholder:text-[#5E6870] sm:text-base"
                />
              </div>

              {/* Search Button */}
              <button
                type="button"
                className="flex shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#39A9E0] to-[#0A8FD0] px-5 py-3 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-all duration-200 hover:brightness-95 sm:px-6"
              >
                <span className="font-['Inter'] text-sm font-bold leading-6 text-white">
                  Search
                </span>
              </button>
            </div>
          </div>

          {/* Browse Help Topics */}
          <button
            type="button"
            className="pt-[2.9px] pb-[1.59px] font-['Inter'] text-sm font-bold leading-5 text-[#9FC7DF] transition-colors hover:text-white"
          >
            Browse help topics →
          </button>

          {/* Security Note */}
          <div className="w-full max-w-[480px] pt-[2.9px]">
            <p className="font-['Inter'] text-xs font-normal leading-5 text-[#B8CFDE]">
              Do not enter passwords, bank details, tax identifiers, payroll
              files, employee personal
              <br className="hidden sm:block" />
              data, or one-time codes.
            </p>
          </div>
        </div>
      </div>

      {/* QUICK ACCESS PILLS */}
      <div className="flex w-full flex-wrap content-start justify-center gap-2.5 px-6 py-7">
        {/* Product Documentation */}
        <button
          type="button"
          className="flex items-center rounded-[20px] border border-[#DCE4EC] bg-white px-4 py-2 transition-colors hover:border-[#0A8FD0] hover:bg-[#F7FAFC]"
        >
          <span className="font-['Inter'] text-xs font-semibold leading-5 text-[#174B6B]">
            📄 Product Documentation
          </span>
        </button>

        {/* System Status */}
        <button
          type="button"
          className="flex items-center rounded-[20px] border border-[#DCE4EC] bg-white px-4 py-2 transition-colors hover:border-[#0A8FD0] hover:bg-[#F7FAFC]"
        >
          <span className="font-['Inter'] text-xs font-semibold leading-5 text-[#174B6B]">
            🟢 System Status
          </span>
        </button>

        {/* Release Notes */}
        <button
          type="button"
          className="flex items-center rounded-[20px] border border-[#DCE4EC] bg-white px-4 py-2 transition-colors hover:border-[#0A8FD0] hover:bg-[#F7FAFC]"
        >
          <span className="font-['Inter'] text-xs font-semibold leading-5 text-[#174B6B]">
            🆕 Release Notes
          </span>
        </button>

        {/* Sign In */}
        <button
          type="button"
          className="flex items-center rounded-[20px] border border-[#DCE4EC] bg-white px-4 py-2 transition-colors hover:border-[#0A8FD0] hover:bg-[#F7FAFC]"
        >
          <span className="font-['Inter'] text-xs font-semibold leading-5 text-[#174B6B]">
            👤 Sign in
          </span>
        </button>
      </div>
    </section>
  );
}