"use client";

import React from "react";
import Image from "next/image";

export default function IdempotencyMutationSafetySection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Text & Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Header Block */}
            <div className="space-y-3">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
                <span className="text-base leading-none">/</span>
                <span>IDEMPOTENCY, MUTATION SAFETY & RATE LIMITS</span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
                POST, PUT and PATCH are never blurred together
              </h2>
            </div>

            {/* Paragraph Description */}
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-lg">
              Supported idempotency operations document their key format, replay
              window, same-key/same-payload behavior and
              same-key/different-payload conflict behavior explicitly. The
              operation contract is always authoritative — client-generated IDs
              appear only where supported.
            </p>

            {/* Callout Box with Left Accent Bar */}
            <div className="bg-white rounded-xl border-l-4 border-l-[#0A8FD0] p-6 sm:p-7 border border-slate-200/80 shadow-xs relative overflow-hidden flex items-start">
              {/* Left Cyan Accent Bar */}
              {/* <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A8FD0]" /> */}

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-2 sm:pl-3">
                <strong className="font-bold text-[#0F172A]">
                  No invented limits.
                </strong>{" "}
                If no public rate limit exists for an operation, this
                documentation states &quot;Public limit not documented&quot;
                rather than inventing a number. Dynamic or contractual limits
                are explicitly labeled account/configuration-specific.
              </p>
            </div>
          </div>

          {/* Right Column Featured Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/footer-integrations/35.png"
                alt="Software engineers working on computers in a modern office setup"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
