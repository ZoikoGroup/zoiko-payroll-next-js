"use client";

import React from "react";
import Image from "next/image";
import { Check, Clock } from "lucide-react";

const cutoverPoints: string[] = [
  "Multiple cutovers or complex provider handoffs may be separately scoped.",
  "Hypercare has a defined baseline; extended or 24/7 support is contracted where offered.",
  "BAU handover is a required ownership transition, not an optional extra.",
];

export default function CutoverGoLiveHypercareSection() {
  return (
    <section className="w-full bg-[#EFF4F7] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span className="font-bold">/</span>
              <span>Cutover, go-live &amp; hypercare</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight text-[#07243B] leading-tight">
              Launch is planned, monitored — and never rushed.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Cutover planning, production readiness review, final data
              migration and contingency planning form the required baseline
              before any go-live.
            </p>

            <ul className="space-y-3 pt-1">
              {cutoverPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="w-5 h-5 shrink-0 rounded-full bg-sky-100 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-[#0A8FD0] stroke-[3]" />
                  </span>
                  <span className="text-sm text-slate-600 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative w-full h-64 sm:h-80 lg:h-[380px] rounded-2xl overflow-hidden shadow-[0px_8px_24px_0px_rgba(8,47,73,0.08)]">
            <Image
              src="/images/implementation-pricing/cutover-scheduling.png"
              alt="Planning desk with calendar and notes representing cutover scheduling"
              fill

              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Service Commencement Date rule */}
        <div className="bg-[#07243B] rounded-xl p-5 flex items-start gap-3.5">
          <Clock className="w-5 h-5 text-orange-300 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="text-sm font-bold text-white">
              Service Commencement Date rule.
            </div>
            <p className="text-sm text-slate-400 leading-5">
              The site never implies that recurring payroll subscription charges
              start merely because a contract is signed, discovery begins, or a
              sandbox is provisioned — only from the approved Service
              Commencement Date or other contractually defined effective date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
