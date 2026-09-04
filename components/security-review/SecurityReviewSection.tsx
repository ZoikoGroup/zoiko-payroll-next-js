"use client";

import React from "react";
import Image from "next/image";
import { Check, Lock, ShieldCheck } from "lucide-react";

interface SecurityStep {
  number: string;
  title: string;
}

const securitySteps: SecurityStep[] = [
  { number: "1", title: "Controls" },
  { number: "2", title: "Evidence" },
  { number: "3", title: "Review" },
  { number: "4", title: "Approval" },
];

export default function SecurityReviewSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F8FA] text-[#07243B]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
                <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                  /
                </span>
                SECURITY REVIEW
              </span>
            </div>

            {/* Title (31px) */}
            <h2 className="text-[38px] font-extrabold text-[#07243B] tracking-tight leading-tight">
              Security evidence built for serious payroll due diligence.
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              Review Zoiko Payroll's security-control model, assurance evidence
              and enterprise due-diligence process. Public information is
              available immediately; sensitive reports and security materials
              are shared only through controlled access.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="button"
                className="px-6 py-3.5 rounded-xl bg-[#2A87C8] hover:bg-[#2374ac] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#2A87C8]/20 transition-all cursor-pointer"
              >
                Start a security review
              </button>
              <button
                type="button"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#07243B] text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer"
              >
                Request assurance evidence
              </button>
            </div>

            {/* Feature Checkpoints */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#2A87C8]" />
                <span>Evidence-based claims</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#2A87C8]" />
                <span>Controlled document access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2A87C8]" />
                <span>Payroll-data protection</span>
              </div>
            </div>

            {/* Small Legal Disclaimer */}
            <p className="text-[11px] text-slate-400 font-medium leading-relaxed pt-2">
              Certifications, attestations and technical claims shown on this
              page reflect only the current verified scope and evidence period.
            </p>
          </div>

          {/* Right Column: Image + Steps Card */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-lg">
              {/* Top Image Preview */}
              <div className="relative w-full h-45 bg-slate-100">
                <Image
                  src="/images/pricing/1.png"
                  alt="Security review due diligence discussion with laptop"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Bottom Steps List inside Card */}
              <div className="p-6 space-y-3">
                {securitySteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 py-2 first:pt-0 last:pb-0 border-b border-slate-100 last:border-none"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#E6F3FC] text-[#0A78C3] text-xs font-bold flex items-center justify-center shrink-0">
                      {step.number}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
