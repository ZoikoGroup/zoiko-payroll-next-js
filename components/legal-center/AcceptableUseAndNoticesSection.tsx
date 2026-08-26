"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NoticeCard {
  title: string;
  subtitle: string;
  description: string;
  linkText: string;
  href: string;
}

const noticeCards: NoticeCard[] = [
  {
    title: "Acceptable Use Policy",
    subtitle: "v1.6 · Effective Dec 2025",
    description:
      "Approved use restrictions where incorporated or applicable — see the full document for scope.",
    linkText: "View policy",
    href: "/aup",
  },
  {
    title: "Accessibility Statement",
    subtitle: "Current statement - HTML primary",
    description:
      "Our current accessibility statement and an approved feedback and support route.",
    linkText: "View statement",
    href: "/accessibility",
  },
  {
    title: "Legal Notices",
    subtitle: "Entity, copyright & trademark",
    description: "Approved entity, copyright, trademark and notice facts only.",
    linkText: "View notices",
    href: "/legal-notices",
  },
];

export default function AcceptableUseAndNoticesSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Header & Split View */}
        <div className="space-y-6">
          {/* Tag Line */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
            <span className="w-3 h-0.5 bg-[#2F6FED]" />
            <span>ACCEPTABLE USE, ACCESSIBILITY & LEGAL NOTICES</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[26px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Direct routes — substance stays on the authoritative document
          </h2>

          {/* Image & Paragraph Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Left Image Side */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[340px] rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                <img
                  src="/images/legal/4.png"
                  alt="Laptop showing Acceptable Use, Accessibility & Legal Notices"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right Paragraph Side */}
            <div className="lg:col-span-6">
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-lg">
                Three high-trust destinations, each routed directly rather than
                summarized into marketing copy — the authoritative document
                always carries the substantive text.
              </p>
            </div>
          </div>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {noticeCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100/90 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#0F172A] tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-[11px] text-[#94A3B8] font-medium">
                    {card.subtitle}
                  </p>
                </div>

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
      </div>
    </section>
  );
}
