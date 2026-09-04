"use client";

import React from "react";
import Image from "next/image";
import { Check, Shield, Lock } from "lucide-react";

export default function ProcurementResourcesSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 text-[#07243B]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                PROCUREMENT RESOURCES
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07243B] tracking-tight leading-tight">
              Everything your buying team needs to evaluate Zoiko Payroll — in
              one governed place.
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              Access the commercial, legal, privacy, security, implementation
              and supplier-onboarding resources used to procure Zoiko Payroll.
              Public resources are available immediately; sensitive evidence is
              provided through controlled access when appropriate.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="button"
                className="px-6 py-3.5 rounded-xl bg-[#2A87C8] hover:bg-[#2374ac] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#2A87C8]/20 transition-all cursor-pointer"
              >
                Check Resources
              </button>
              <button
                type="button"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#07243B] text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer"
              >
                Find Solution
              </button>
            </div>

            {/* Feature Checkpoints */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#2A87C8]" />
                <span>Current documents</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#2A87C8]" />
                <span>Clear access levels</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#2A87C8]" />
                <span>No payroll data required</span>
              </div>
            </div>

            {/* Small Legal Disclaimer */}
            <p className="text-[11px] text-slate-400 font-medium leading-relaxed pt-2">
              Availability of specific legal, security, insurance, tax or
              compliance documents depends on the applicable contracting entity,
              market, product scope and approved disclosure policy.
            </p>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-72 sm:h-80 lg:h-120 rounded-2xl overflow-hidden">
              <Image
                src="/images/procurement/1.png"
                alt="Buying team reviewing procurement dashboard on a laptop"
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
