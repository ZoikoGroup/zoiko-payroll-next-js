"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const bulletPoints: string[] = [
  "Structural format validation only, where supported — never claimed as account-holder ownership verification.",
  "Changed bank details always route through an approved secure workflow — no silent overwrite, ever.",
  "Failed validation is blocking or review-required, and routes through a secure channel.",
  "Only the fields required by the approved method or rail are transmitted — a public fit form collects business scope, never financial credentials.",
];

export default function BeneficiaryAccountValidationSection() {
  return (
    <section className="w-full bg-[#EFF4F7] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/footer-integrations/28.png"
                alt="Professional examining financial reports at a desk with modern displays"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>BENEFICIARY & ACCOUNT VALIDATION</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[32px] font-bold tracking-tight text-[#0F172A] leading-tight">
              A firm boundary around sensitive data
            </h2>

            {/* Description Paragraph */}
            <p className="text-sm text-[17px] text-slate-500 leading-relaxed max-w-xl">
              Beneficiary identity and account identifiers stay inside secure
              product and support contexts. Nothing sensitive is ever exposed on
              a public page.
            </p>

            {/* Checklist */}
            <ul className="space-y-4 pt-2">
              {bulletPoints.map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#0A8FD0] stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
