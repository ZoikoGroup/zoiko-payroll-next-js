"use client";

import React from "react";
import Image from "next/image";

interface AnatomyItem {
  text: string;
}

const requestAnatomyItems: AnatomyItem[] = [
  { text: "Canonical HTTP method + path" },
  { text: "Path / query parameters" },
  { text: "Headers" },
  { text: "Request body + content type" },
  { text: "Correlation / idempotency key where documented" },
];

const responseModelItems: AnatomyItem[] = [
  { text: "Operation-specific HTTP status" },
  { text: "Generated response schema + resource identifier" },
  { text: "Timestamps only with documented format/zone" },
  { text: "Current enums, nullable/optional fields" },
  { text: "Schema version where available" },
];

export default function RequestResponseModelSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/footer-integrations/34.png"
                alt="Team gathering in a modern office listening to a presentation"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 space-y-4">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>REQUEST ANATOMY & RESPONSE MODEL</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
              Never a generic response wrapper
            </h2>

            {/* Paragraph Text */}
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-lg">
              Nullability, timestamps, enums and metadata are never inferred
              from ecosystem convention — every field comes from the
              documented schema for that specific operation and version.
            </p>
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* Light Blue Card - Request Anatomy */}
          <div className="bg-[#E1EEF9] rounded-[16px] p-6 sm:p-8 space-y-5 border border-sky-100/80 shadow-xs">
            <h3 className="text-base font-bold text-[#07243B]">
              Request anatomy
            </h3>
            <ul className="space-y-3">
              {requestAnatomyItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 leading-snug"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Beige Card - Response Model */}
          <div className="bg-[#F3E9CC] rounded-[16px] p-6 sm:p-8 space-y-5 border border-amber-100/80 shadow-xs">
            <h3 className="text-base font-bold text-[#634816]">
              Response model
            </h3>
            <ul className="space-y-3">
              {responseModelItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-[#735A27] leading-snug"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B39B6B] mt-1.5 shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}