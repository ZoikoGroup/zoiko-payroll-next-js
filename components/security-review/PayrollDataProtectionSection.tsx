"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface ProtectionPoint {
  text: string;
}

const protectionPoints: ProtectionPoint[] = [
  {
    text: "Employee and compensation data is scoped to authorized roles and tenant/entity context.",
  },
  {
    text: "Bank and tax data receive restricted handling and purpose-limited, jurisdiction-aware access.",
  },
  {
    text: "Payslips, reports and exports use authorization and secure delivery controls.",
  },
  {
    text: "All public screenshots and demos use synthetic data only — never real customer information.",
  },
];

export default function PayrollDataProtectionSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F8FA] text-[#07243B]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
                <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                  /
                </span>
                PAYROLL DATA PROTECTION
              </span>
            </div>

            {/* Title (31px) */}
            <h2 className="text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight">
              Sensitivity-aware controls, not generic promises.
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              Payroll data combines identity, compensation, tax, bank and
              statutory information — each layer gets its own scoped control
              statement.
            </p>

            {/* Bullet Points with Check Icons */}
            <div className="space-y-3.5 pt-1">
              {protectionPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E6F3FC] text-[#0A78C3] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-72 sm:h-80 lg:h-96 rounded-3xl overflow-hidden">
              <Image
                src="/images/pricing/2.png"
                alt="Payroll data protection dashboard and analytics on laptop screen"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
