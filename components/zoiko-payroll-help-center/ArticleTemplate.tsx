"use client";

import React from "react";

const steps = [
  'Go to the sign-in page and select "Forgot password."',
  "Enter your work email and submit the request.",
  "Check your inbox for a reset link and follow the instructions.",
];

export default function ArticleTemplate() {
  return (
    <section className="w-full bg-[#E9F0F8] px-4 py-14 sm:px-6 md:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-7 lg:px-24">
        {/* Heading */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-4">
          {/* Label */}
          <div className="flex items-center justify-center gap-1.5">
            <div className="flex h-5 items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0099e5]" />
            </div>

            <span className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0099e5]">
              Article template
            </span>
          </div>

          {/* Title */}
          <div className="flex w-full flex-col items-center pb-[0.58px]">
            <h2 className="m-0 text-center font-['Inter'] text-2xl font-extrabold leading-8 text-[#103653] sm:text-3xl sm:leading-10">
              Direct answer, then steps, then recovery —
              <br className="hidden sm:block" />
              every time.
            </h2>
          </div>
        </div>

        {/* Article */}
        <article className="flex w-full max-w-[760px] flex-col items-start gap-1.5 rounded-2xl border border-[#d9e1e7] bg-white px-5 py-6 sm:px-8 sm:py-8">
          {/* Breadcrumb */}
          <div className="flex w-full flex-col items-start pb-[0.59px]">
            <p className="m-0 break-words font-['Inter'] text-xs font-normal leading-4 text-[#8b9ba8]">
              Help Center / Account &amp; Access / How do I reset my password?
            </p>
          </div>

          {/* Article title */}
          <div className="flex w-full flex-col items-start pb-2">
            <h1 className="m-0 w-full font-['Inter'] text-lg font-extrabold leading-8 text-[#103653]">
              How do I reset my password?
            </h1>
          </div>

          {/* Direct answer */}
          <div className="flex w-full flex-col items-start rounded-[10px] bg-[#e9eef2] px-4 py-3.5">
            <p className="m-0 font-['Inter'] text-xs leading-5 text-[#103653]">
              <span className="font-bold">Direct answer:</span>{" "}
              Use the &quot;Forgot password&quot; link on the sign-in page. A
              reset link is sent to your verified email if an account exists.
            </p>
          </div>

          {/* Steps heading */}
          <div className="flex w-full flex-col items-start pt-2">
            <h3 className="m-0 font-['Inter'] text-xs font-bold uppercase leading-5 text-[#7c96aa]">
              Steps
            </h3>
          </div>

          {/* Steps */}
          <div className="flex w-full flex-col">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`flex w-full items-start gap-3.5 ${
                  index === 0 ? "pt-[3px]" : "pt-1.5"
                }`}
              >
                {/* Number */}
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#103653]">
                  <span className="font-['Inter'] text-xs font-extrabold leading-4 text-white">
                    {index + 1}
                  </span>
                </div>

                {/* Step text */}
                <p className="m-0 flex-1 font-['Inter'] text-xs font-normal leading-5 text-[#315b77]">
                  {step}
                </p>
              </div>
            ))}
          </div>

          {/* Recovery heading */}
          <div className="flex w-full flex-col items-start pt-3">
            <h3 className="m-0 font-['Inter'] text-xs font-bold uppercase leading-5 text-[#7c96aa]">
              If this doesn&apos;t work
            </h3>
          </div>

          {/* Recovery text */}
          <div className="flex w-full flex-col items-start pb-3 pt-[3px]">
            <p className="m-0 font-['Inter'] text-xs font-normal leading-5 text-[#636f78]">
              If you don&apos;t receive an email within a few minutes, check
              your spam folder or contact your organization&apos;s payroll
              administrator. If your employer uses SSO, use your employer&apos;s
              sign-in instead.
            </p>
          </div>

          {/* Security notice */}
          <div className="flex w-full flex-col items-start rounded-xl border-b border-r border-t border-[#d9e1e7] border-l-4 border-l-[#0099e5] bg-white px-5 py-5 sm:px-7 sm:py-6">
            <p className="m-0 w-full font-['Inter'] text-sm font-normal leading-6 text-[#315b77]">
              Do not enter passwords, bank details, tax identifiers, or
              one-time codes anywhere except the official Zoiko Payroll
              sign-in.
            </p>
          </div>

          {/* Helpful */}
          <div className="flex w-full flex-wrap items-center justify-between gap-4 pt-3">
            <p className="m-0 font-['Inter'] text-xs font-normal leading-5 text-[#8b9ba8]">
              Was this article helpful?
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded-lg border border-[#d9e1e7] bg-white px-6 py-3 font-['Inter'] text-sm font-bold leading-6 text-[#103653] transition-opacity duration-200 hover:opacity-70"
              >
                Yes
              </button>

              <button
                type="button"
                className="rounded-lg border border-[#d9e1e7] bg-white px-6 py-3 font-['Inter'] text-sm font-bold leading-6 text-[#103653] transition-opacity duration-200 hover:opacity-70"
              >
                No
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex w-full flex-col items-center pb-[0.59px] pt-2">
            <p className="m-0 text-center font-['Inter'] text-xs font-normal leading-4 text-[#8b9ba8]">
              Reviewed Aug 2026 · Owner: Help Center Editorial
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}