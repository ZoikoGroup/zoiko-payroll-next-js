"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

interface ProcurementCard {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const procurementCards: ProcurementCard[] = [
  {
    title: "Service Terms",
    description: "Public current standard terms where approved.",
    linkText: "View",
    href: "/service-terms",
  },
  {
    title: "Data Processing Addendum",
    description: "Current public DPA or approved access route.",
    linkText: "View",
    href: "/dpa",
  },
  {
    title: "Trust & Security",
    description: "Assurance and evidence authority.",
    linkText: "Visit Trust & Security",
    href: "/trust-and-security",
  },
  {
    title: "Commercial / legal contact",
    description: "Approved negotiation and execution route.",
    linkText: "Contact",
    href: "/contact",
  },
];

export default function CustomerProcurementSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Split Section: Heading & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-4">
            {/* Category Tag */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
              <span className="w-3 h-0.5 bg-[#2F6FED]" />
              <span>CUSTOMER + PROCUREMENT</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[26px] font-bold text-[#0F172A] tracking-tight leading-tight">
              Supporting procurement without a sales funnel
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-lg">
              Public availability of Service Terms and the DPA never implies
              execution for your organization specifically.
            </p>
          </div>

          {/* Right Image Side */}
          <div className="lg:col-span-6 flex justify-end">
            <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[350px] rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <img
                src="/images/legal/3.png"
                alt="Supporting procurement without a sales funnel"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* 4-Column Grid for Procurement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {procurementCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#2F6FED] hover:underline transition-all"
                >
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer Box */}
        <div className="bg-[#F6F8FC] border border-gray-200/80 rounded-2xl p-4 flex items-center gap-3 text-[13px] text-[#6B7488]">
          <Info className="w-4 h-4 shrink-0 text-[#94A3B8]" />
          <span>
            No sign-in or demo gate on this section. Public availability of a
            document does not prove execution, and this page never confirms
            account-specific contract status.
          </span>
        </div>
      </div>
    </section>
  );
}
