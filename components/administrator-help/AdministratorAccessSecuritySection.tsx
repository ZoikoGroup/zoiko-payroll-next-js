"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface StepItem {
  title: string;
}

const stepsData: StepItem[] = [
  { title: "Identity" },
  { title: "Authorization" },
  { title: "Payroll Entitlement" },
  { title: "Support Permission" },
];

const issueBadges = [
  "SSO works, Payroll unavailable",
  "MFA recovery",
  "Support-case access denied",
  "Former administrator access still active",
];

export default function AdministratorAccessSecuritySection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        {/* Top Split Layout: Image + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg aspect-[16/10] sm:aspect-[9/9] rounded-2xl overflow-hidden">
              <Image
                src="/images/admin/1.png"
                alt="Administrator using laptop and mobile phone for security verification"
                fill
                className="object-contain rounded-xl object-center"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[1px] text-[#0A8FD0] uppercase font-mono">
              <span>/</span>
              <span>ADMINISTRATOR ACCESS & SECURITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[32px] font-bold tracking-[1px] text-[#07243B] leading-tight">
              Payroll knowledge is never a substitute for identity verification
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed tracking-[1px] max-w-xl">
              Sign-in, SSO, MFA, payroll role visibility and support-contact
              entitlement are checked in order — access is never granted or
              resolved out of sequence.
            </p>
          </div>
        </div>

        {/* Bottom Flow & Filter Badges Container */}
        <div className="space-y-8">
          {/* Sequential Step Cards Flow */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
            {stepsData.map((step, index) => (
              <React.Fragment key={index}>
                <div className="w-full sm:w-auto min-w-[140px] py-3.5 px-5 bg-white rounded-2xl border border-slate-200/80 shadow-2xs text-center">
                  <h3 className="text-xs sm:text-sm font-bold text-[#07243B] tracking-[1px]">
                    {step.title}
                  </h3>
                </div>

                {/* Arrow Divider */}
                {index < stepsData.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-[#0A8FD0] shrink-0 rotate-90 sm:rotate-0 my-0.5 sm:my-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Filter Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 mx-auto">
            {issueBadges.map((badge, idx) => (
              <span
                key={idx}
                className="bg-white hover:bg-slate-50 text-[#07243B] text-xs font-semibold px-4 py-2 rounded-full border border-slate-200/80 shadow-2xs transition-all cursor-default tracking-[1px]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
