"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface PricingItem {
  number: string;
  title: string;
}

const pricingItems: PricingItem[] = [
  { number: "1", title: "Plan capacity" },
  { number: "2", title: "Worker-month usage" },
  { number: "3", title: "Jurisdiction activation" },
  { number: "4", title: "Local recurring services" },
  { number: "5", title: "Third-party / local costs" },
];

export default function MultiJurisdictionPricingSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 text-[#07243B]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content & Actions */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#0A78C3] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#0A78C3] uppercase">
                MULTI-JURISDICTION PRICING
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[39px] font-extrabold text-[#07243B] tracking-tight leading-tight">
              Scale across jurisdictions without losing sight of what you're
              paying for.
            </h2>

            {/* Body Description */}
            <p className="text-xs sm:text-base text-[#4E6172] font-medium leading-relaxed max-w-xl">
              Zoiko Payroll separates plan capacity, worker-month subscription,
              jurisdiction activation, recurring local services and third-party
              costs — so expanding into a new jurisdiction changes only the
              commercial layers that scope actually requires.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#2C90D0] to-[#117DC5] hover:bg-[#2374AD] text-white px-6 py-3.5 rounded-xl shadow-xs transition-colors cursor-pointer text-center"
              >
                Build your jurisdiction scope
              </button>
              <button
                type="button"
                className="text-xs sm:text-sm font-bold bg-white hover:bg-slate-50 text-[#07243B] border border-slate-200/80 px-6 py-3.5 rounded-xl shadow-2xs transition-colors cursor-pointer text-center"
              >
                Check jurisdiction availability
              </button>
            </div>

            {/* Footnote */}
            <p className="text-[11px] text-slate-400 font-medium pt-2">
              Monetary prices, currencies, taxes and local service availability
              resolve from the approved catalog, coverage registry and order
              form.
            </p>
          </div>

          {/* Right Column: Visual Card Container */}
          <div className="lg:col-span-6 bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-xl">
            {/* Top Image Banner */}
            <div className="relative w-full h-48 sm:h-56">
              <Image
                src="/images/multi-jurisdiction-pricing/hero.png"
                alt="Earth view from space showing night city lights"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Bottom List Items */}
            <div className="p-4 sm:p-6 divide-y divide-slate-100">
              {pricingItems.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 flex items-center justify-between group cursor-pointer hover:bg-slate-50/60 px-3 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-6 h-6 rounded-lg bg-[#EBF3FB] text-[#2A87C8] text-xs font-bold flex items-center justify-center">
                      {item.number}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                      {item.title}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#2A87C8] transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
