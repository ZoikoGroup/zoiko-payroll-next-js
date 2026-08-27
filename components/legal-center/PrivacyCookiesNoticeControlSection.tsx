"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DisclosureItem {
  title: string;
  href: string;
  actionText: string;
}

interface ControlItem {
  title: string;
  href: string;
  actionText: string;
}

const disclosureItems: DisclosureItem[] = [
  {
    title: "Privacy Notice",
    href: "/privacy",
    actionText: "View",
  },
  {
    title: "Cookie Notice",
    href: "/cookies",
    actionText: "View",
  },
];

const controlItems: ControlItem[] = [
  {
    title: "Cookie Settings",
    href: "#cookie-settings",
    actionText: "Manage",
  },
  {
    title: "Privacy Choices",
    href: "#privacy-choices",
    actionText: "Manage",
  },
  {
    title: "Privacy contact",
    href: "/contact",
    actionText: "Contact",
  },
];

export default function PrivacyCookiesNoticeControlSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Image Side */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px] rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <Image
                src="/images/legal/2.png"
                alt="Privacy and Cookies Notice & Control"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Right Text Content Side */}
          <div className="lg:col-span-6 space-y-4">
            {/* Category Tag */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
              <span className="w-3 h-0.5 bg-[#2F6FED]" />
              <span>PRIVACY + COOKIES</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-[25px] font-bold text-[#0F172A] tracking-tight leading-tight">
              Notice and control are independently usable
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-xl">
              Legal content remains accessible without non-essential consent —
              and we never fake a settings button if the control isn't actually
              available.
            </p>
          </div>
        </div>

        {/* Bottom Cards Grid: Disclosure & Control */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Disclosure Card */}
          <div className="bg-white rounded-2xl border border-gray-100/90 shadow-sm overflow-hidden flex flex-col justify-between">
            {/* Header */}
            <div className="bg-[#F8FAFC] px-6 py-4 border-b border-gray-100">
              <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] tracking-tight">
                Disclosure (what we tell you)
              </h3>
            </div>

            {/* Items List */}
            <div className="divide-y divide-gray-100">
              {disclosureItems.map((item, idx) => (
                <div
                  key={idx}
                  className="px-6 py-4 flex items-center justify-between text-xs sm:text-sm hover:bg-gray-50/50 transition-colors"
                >
                  <span className="text-[#0F172A] font-medium">
                    {item.title}
                  </span>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 font-semibold text-[#2F6FED] hover:underline transition-all"
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Control Card */}
          <div className="bg-white rounded-2xl border border-gray-100/90 shadow-sm overflow-hidden flex flex-col justify-between">
            {/* Header */}
            <div className="bg-[#F8FAFC] px-6 py-4 border-b border-gray-100">
              <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] tracking-tight">
                Control (what you can do)
              </h3>
            </div>

            {/* Items List */}
            <div className="divide-y divide-gray-100">
              {controlItems.map((item, idx) => (
                <div
                  key={idx}
                  className="px-6 py-4 flex items-center justify-between text-xs sm:text-sm hover:bg-gray-50/50 transition-colors"
                >
                  <span className="text-[#0F172A] font-medium">
                    {item.title}
                  </span>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 font-semibold text-[#2F6FED] hover:underline transition-all"
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
