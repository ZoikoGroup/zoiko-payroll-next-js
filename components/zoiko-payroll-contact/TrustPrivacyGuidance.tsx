"use client";

import React from "react";
import Image from "next/image";

const guidanceItems = [
  "Secure submission",
  "No unnecessary data",
  "No automatic marketing opt-in",
];

export default function TrustPrivacyGuidance() {
  return (
    <section className="w-full bg-[#e9f0f8] px-4 py-14 sm:px-6 md:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-10 lg:px-24">
        <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-14">
          {/* Left Content */}
          <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-3.5">
            {/* Label */}
            <div className="relative h-5 w-full">
              <div className="absolute left-0 top-[3px] h-3.5 w-1.5 rounded-[2px] bg-[#0099e5]" />

              <div className="absolute left-[13px] top-[-0.5px] font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0099e5]">
                Trust &amp; privacy guidance
              </div>
            </div>

            {/* Heading */}
            <div className="w-full pt-px">
              <h2 className="m-0 font-['Inter'] text-2xl font-extrabold leading-8 text-[#103653] sm:text-3xl sm:leading-10">
                Every submission is handled
                <br className="hidden sm:block" />
                safely — never assumed to be
                <br className="hidden sm:block" />
                safe by default.
              </h2>
            </div>

            {/* Description */}
            <div className="w-full max-w-[600px] pt-[1.28px]">
              <p className="m-0 font-['Inter'] text-sm font-normal leading-6 text-[#636f78] sm:text-base sm:leading-7">
                Your information is used only to respond to the route you
                selected. We never request sensitive payroll data through a
                general contact form, and file uploads are never accepted
                through the default form.
              </p>
            </div>

            {/* Guidance Pills */}
            <div className="flex w-full flex-wrap gap-2.5 pt-1">
              {guidanceItems.map((item) => (
                <div
                  key={item}
                  className="rounded-[20px] border border-[#d9e1e7] bg-white px-4 py-2"
                >
                  <span className="font-['Inter'] text-xs font-semibold leading-5 text-[#315b77]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="w-full pt-1">
              <p className="m-0 font-['Inter'] text-xs leading-5">
                <button
                  type="button"
                  className="font-bold text-[#0099e5] transition-opacity hover:opacity-70"
                >
                  Privacy Policy →
                </button>

                <span className="mx-2 text-gray-600"> </span>

                <button
                  type="button"
                  className="font-bold text-[#0099e5] transition-opacity hover:opacity-70"
                >
                  Trust and Security →
                </button>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-[20px] bg-white shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)] sm:h-[380px] lg:w-[528px]">
            <Image
              src="/images/zoiko-payroll-contact/image.png"
              alt="Zoiko Payroll trust and privacy guidance"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 528px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}