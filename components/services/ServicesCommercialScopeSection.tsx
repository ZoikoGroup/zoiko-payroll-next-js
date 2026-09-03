"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Scale } from "lucide-react";

interface FeatureHighlight {
  icon: React.ElementType;
  text: string;
}

const highlights: FeatureHighlight[] = [
  {
    icon: CheckCircle2,
    text: "Core payroll controls included",
  },
  {
    icon: ShieldCheck,
    text: "Optional services clearly priced",
  },
  {
    icon: Scale,
    text: "No-hidden-responsibility model",
  },
];

export default function ServicesCommercialScopeSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 text-[#07243B]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content & Actions */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                SERVICES & COMMERCIAL SCOPE
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold text-[#07243B] tracking-tight leading-tight">
              Know what's included. Add only what you need.
            </h2>

            {/* Body Description */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
              Zolko Payroll separates the platform from operational services, so
              you can see what's included, what can be added, and who's
              responsible — by plan, entity and jurisdiction.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                className="text-xs sm:text-sm font-bold bg-[#2A87C8] hover:bg-[#2374AD] text-white px-6 py-3.5 rounded-xl shadow-xs transition-colors cursor-pointer text-center"
              >
                Request Custom Quote
              </button>
              <button
                type="button"
                className="text-xs sm:text-sm font-bold bg-white hover:bg-slate-50 text-[#07243B] border border-slate-200/80 px-6 py-3.5 rounded-xl shadow-2xs transition-colors cursor-pointer text-center"
              >
                Check Services Portfolio
              </button>
            </div>

            {/* Feature Badges / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#3D9BD6] shrink-0 stroke-[2]" />
                    <span className="text-[12.5px] font-semibold text-[#7C8CA0] leading-tight">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Feature Visual Container */}
          <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden">
            <Image
              src="/images/services/1.png"
              alt="Team collaborating on payroll and operations software"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
