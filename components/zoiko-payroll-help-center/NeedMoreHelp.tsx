"use client";

import Image from "next/image";
import React from "react";

const supportOptions = [
  "Sign in for support",
  "Contact support",
  "System Status",
];

export default function NeedMoreHelp() {
  return (
    <section className="w-full bg-[#eef3f7] px-4 py-14 sm:px-6 md:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-8 lg:px-24">
        {/* Main Content */}
        <div className="flex w-full flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-14">
          {/* Left Content */}
          <div className="flex min-w-0 flex-1 flex-col items-start gap-3.5">
            {/* Label */}
            <div className="relative h-5 w-full">
              <div className="absolute left-0 top-[3px] h-3.5 w-1.5 rounded-[2px] bg-[#0099e5]" />

              <div className="absolute left-[13px] top-[-0.5px] font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0099e5]">
                Need more help?
              </div>
            </div>

            {/* Heading */}
            <div className="flex w-full flex-col items-start pb-[0.58px] pt-[1.2px]">
              <h2 className="m-0 w-full font-['Inter'] text-2xl font-extrabold leading-8 text-[#103653] sm:text-3xl sm:leading-10">
                Only approved active channels —
                <br className="hidden sm:block" />
                no fabricated wait times.
              </h2>
            </div>

            {/* Description */}
            <div className="w-full max-w-[600px] pt-[1.18px]">
              <p className="m-0 font-['Inter'] text-sm font-normal leading-6 text-[#636f78] sm:text-base sm:leading-7">
                If self-service doesn&apos;t resolve your issue, escalate
                through an approved support channel. Article context is
                preserved securely — never exposed in a public form.
              </p>
            </div>

            {/* Support Options */}
            <div className="flex w-full flex-wrap items-start gap-2.5">
              {supportOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className="rounded-[20px] border border-[#d9e1e7] bg-white px-4 py-2 font-['Inter'] text-xs font-semibold leading-5 text-[#315b77] transition-opacity duration-200 hover:opacity-70"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-[20px] bg-white shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)] sm:h-[380px] lg:w-[528px]">
            <Image
              src="/images/zoiko-payroll-help-center/image4.png"
              alt="Zoiko Payroll support"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 528px"
            />
          </div>
        </div>

        {/* Security Notice */}
        <div className="w-full max-w-[1116px] rounded-xl border-b border-r border-t border-[#d9e1e7] border-l-4 border-l-[#0099e5] bg-white px-5 py-5 sm:px-7 sm:py-6">
          <p className="m-0 font-['Inter'] text-sm leading-6 text-[#315b77]">
            <span className="font-bold text-[#103653]">
              Secure by default:
            </span>{" "}
            attachments require authenticated upload — public file upload is
            off by default. Response times shown are only real, approved data
            — never invented, even during a payroll deadline.
          </p>
        </div>
      </div>
    </section>
  );
}