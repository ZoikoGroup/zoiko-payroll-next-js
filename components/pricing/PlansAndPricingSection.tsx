"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PlansAndPricingSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F8FA] text-[#07243B]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
                <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                  /
                </span>
                PLANS & PRICING
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#07243B] tracking-tight leading-tight">
              Payroll plans from $8 per worker/month. Payroll integrity that
              never gets gated.
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-lg">
              Start with Core at $8 per billable worker/month, move to
              Professional at $15, or unlock advanced Business controls at $25.
              Every paid plan keeps core payroll accuracy, employee
              self-service, baseline security and protected payroll records
              intact as you scale.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:bg-[#2375b0] text-white text-xs sm:text-sm font-bold shadow-md transition-colors inline-flex items-center gap-2 cursor-pointer">
                Talk to Payroll Sales
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#07243B] border border-slate-200 text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer">
                Compare Plans
              </button>
            </div>

            {/* Footer Subtext Notes */}
            <div className="space-y-1 pt-2">
              <p className="text-[11px] text-slate-400 font-medium">
                Professional Evaluation - No credit card required by default -
                No automatic paid conversion
              </p>
              <p className="text-[11px] text-slate-400 font-medium">
                Evaluation uses synthetic or approved anonymized data. Live wage
                payments, statutory filings and remittances are not enabled.
              </p>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-72 sm:h-80 lg:h-96 rounded-3xl overflow-hidden">
              <Image
                src="/images/pricing/7.png"
                alt="Payroll overview dashboard preview displaying total payroll, workers, and entities"
                fill
                className="object-cover object-left-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
