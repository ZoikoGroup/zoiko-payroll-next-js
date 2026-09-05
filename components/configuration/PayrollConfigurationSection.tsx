"use client";

import React from "react";
import Image from "next/image";

export default function PayrollConfigurationSection() {
  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-gradient-to-r from-[#F6FAFD] to-[#E9F1FA]" >
      <div className="max-w-6xl w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text & Call-To-Action Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-extrabold text-[#0B192C] tracking-tight leading-[1.2] mb-5">
              Configure payroll around approved rules, structures, and controls.
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-8">
              Translate validated payroll requirements into governed
              configuration across legal entities, payrolls, pay groups,
              calendars, pay components, statutory rules, integrations,
              security, accounting, payments, and outputs — with effective
              dates, approvals, testing, and version history.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Primary Button */}
              <button
                type="button"
                className="bg-gradient-to-r from-[#3D9BD6] to-[#0C4773] hover:from-[#0863A1] hover:to-[#024478] text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-xs cursor-pointer active:scale-[0.98]"
              >
                Access configuration readiness
              </button>

              {/* Secondary Button */}
              <button
                type="button"
                className="bg-white hover:bg-slate-50 border border-[#E2E8F0] text-[#0B192C] font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-xs cursor-pointer active:scale-[0.98]"
              >
                Talk to an implementation specialist
              </button>
            </div>
          </div>

          {/* Right Image Container Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden">
              <Image
                src="/images/configuration/hero.png"
                alt="Team collaborating on payroll configuration in a meeting room"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
