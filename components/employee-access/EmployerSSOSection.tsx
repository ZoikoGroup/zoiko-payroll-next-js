"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface StepItem {
  step: string;
  title: string;
  isHighlighted?: boolean;
}

const stepsData: StepItem[] = [
  {
    step: "STEP 1",
    title: "Employee",
  },
  {
    step: "STEP 2",
    title: "Employer Identity Provider / IT",
  },
  {
    step: "STEP 3",
    title: "Zoiko Payroll",
    isHighlighted: true,
  },
];

const issueBadgesRow1 = [
  "Employer password expired",
  "User not assigned",
  "SSO works, Zoiko access fails",
  "Employer changed identity provider",
];

const issueBadgesRow2 = [
  "Email/phone change while signed in",
  "No access to old contact",
  "Personal vs. work email conflict",
];

export default function EmployerSSOSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Split Layout: Content + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span>/</span>
              <span>EMPLOYER SSO & CHANGED CONTACT DETAILS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B] leading-tight">
              Some issues belong to your employer, not Zoiko Payroll
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
              Employer password resets, SSO configuration and identity-provider
              changes are owned by your employer — Zoiko Payroll never bypasses
              that control.
            </p>
          </div>

          {/* Right Image Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src="/images/employee-access/2.png"
                alt="Working on laptop and smartphone for employer SSO"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Bottom Flow & Badges Container */}
        <div className="space-y-8 pt-4">
          {/* Horizontal Steps Flow */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
            {stepsData.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className={`w-full sm:w-auto min-w-[200px] p-4 sm:p-5 rounded-2xl border text-center transition-all ${
                    item.isHighlighted
                      ? "bg-[#07243B] text-white border-[#07243B] shadow-md"
                      : "bg-white text-[#07243B] border-slate-200/80 shadow-2xs"
                  }`}
                >
                  <span
                    className={`block text-[10px] font-bold tracking-wider font-mono uppercase mb-1 ${
                      item.isHighlighted ? "text-slate-300" : "text-slate-400"
                    }`}
                  >
                    {item.step}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Arrow Connector */}
                {index < stepsData.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#0A8FD0] shrink-0 rotate-90 sm:rotate-0 my-1 sm:my-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Issue Tags List */}
          <div className="space-y-2.5 text-center">
            {/* Row 1 */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {issueBadgesRow1.map((badge, idx) => (
                <span
                  key={idx}
                  className="bg-white hover:bg-slate-50 text-[#07243B] text-xs font-semibold px-4 py-2 rounded-full border border-slate-200/80 shadow-2xs transition-all cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {issueBadgesRow2.map((badge, idx) => (
                <span
                  key={idx}
                  className="bg-white hover:bg-slate-50 text-[#07243B] text-xs font-semibold px-4 py-2 rounded-full border border-slate-200/80 shadow-2xs transition-all cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
