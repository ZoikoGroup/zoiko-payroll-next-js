"use client";

import React from "react";
import Image from "next/image";

interface SystemCard {
  title: string;
  description: string;
  meta: string;
  imageSrc: string;
  imageAlt: string;
}

const systemCards: SystemCard[] = [
  {
    title: "UKG",
    description: "API-supported approved timecards with worker matching.",
    meta: "Method: API · Last verified Aug 2026",
    imageSrc: "/images/footer-integrations/20.png",
    imageAlt: "Two professionals discussing data on a laptop",
  },
  {
    title: "Kronos",
    description:
      "Available with implementation — scoped mapping and testing required.",
    meta: "Method: Managed exchange · Last verified Aug 2026",
    imageSrc: "/images/footer-integrations/21.png",
    imageAlt: "Team collaborating in front of desktop screens",
  },
  {
    title: "ADP Time",
    description:
      "Validation required — confirm accepted source state for your account.",
    meta: "Method: API · Last verified Jul 2026",
    imageSrc: "/images/footer-integrations/22.png",
    imageAlt: "Person pointing at analytics dashboard on laptop screen",
  },
  {
    title: "Deputy",
    description:
      "File / managed exchange available for approved timecard exports.",
    meta: "Method: File exchange · Last verified Aug 2026",
    imageSrc: "/images/footer-integrations/23.png",
    imageAlt: "Business analyst presenting chart data on tablet/laptop",
  },
  {
    title: "When I Work",
    description:
      "API-supported — accepted source state confirmed during fit validation.",
    meta: "Method: API · Last verified Aug 2026",
    imageSrc: "/images/footer-integrations/24.png",
    imageAlt: "Desk with charts, calculator, laptop, and hands writing notes",
  },
  {
    title: "Don't see your system?",
    description:
      "Not listed does not mean unsupported — request a custom fit review.",
    meta: "Custom fit route",
    imageSrc: "/images/footer-integrations/25.png",
    imageAlt: "Three team members gathered around a laptop screen discussing",
  },
];

export default function SupportedSystemsSection() {
  return (
    <section className="w-full bg-[#E9F0F8] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3">
          {/* Eyebrow Label: #0A8FD0 */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>SUPPORTED TIME & ATTENDANCE SYSTEMS</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#0F172A] leading-tight mx-auto">
            Registry-backed cards — never a vendor-logo wall
          </h2>
        </div>

        {/* 6-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systemCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/70 shadow-xs flex flex-col transition-all hover:shadow-md"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-[#0F172A]">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Footer Metadata */}
                <p className="text-[11px] text-slate-400 font-medium">
                  {card.meta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}