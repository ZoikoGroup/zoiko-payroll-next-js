"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Info } from "lucide-react";

interface DisciplineCard {
  image: string;
  badge: {
    label: string;
    dotColor: string;
    badgeStyle: string;
  };
  title: string;
  description: string;
  actionText: string;
}

const disciplineCards: DisciplineCard[] = [
  {
    image: "/images/procurement/2.png",
    badge: {
      label: "Public",
      dotColor: "bg-[#20502F]",
      badgeStyle: "bg-[#E3F0E7] text-[#20502F] border border-[#20502F]/20",
    },
    title: "Commercial & product",
    description:
      "Product overview, plans, pricing, implementation and service-model routes.",
    actionText: "View commercial resources",
  },
  {
    image: "/images/procurement/3.png",
    badge: {
      label: "Public / gated",
      dotColor: "bg-[#20502F]",
      badgeStyle: "bg-[#E3F0E7] text-[#20502F] border border-[#20502F]/20",
    },
    title: "Legal & contract",
    description:
      "Standard terms, order-form framework, DPA and confidentiality process.",
    actionText: "View legal resources",
  },
  {
    image: "/images/procurement/4.png",
    badge: {
      label: "Gated / NDA",
      dotColor: "bg-[#6B5A20]",
      badgeStyle: "bg-[#F1EAD8] text-[#6B5A20] border border-[#6B5A20]/20",
    },
    title: "Security & privacy",
    description:
      "Certifications, audit reports, questionnaires and privacy program links.",
    actionText: "Start security review",
  },
  {
    image: "/images/procurement/5.png",
    badge: {
      label: "Public / contracted",
      dotColor: "bg-[#20502F]",
      badgeStyle: "bg-[#E3F0E7] text-[#20502F] border border-[#20502F]/20",
    },
    title: "Implementation & assurance",
    description:
      "Methodology, responsibility matrix, support model and continuity overview.",
    actionText: "View implementation resources",
  },
  {
    image: "/images/procurement/6.png",
    badge: {
      label: "Verified / gated",
      dotColor: "bg-sky-600",
      badgeStyle: "bg-sky-100/70 text-sky-800 border border-sky-200/60",
    },
    title: "Supplier onboarding",
    description:
      "Corporate identity, tax forms, invoicing details and insurance evidence.",
    actionText: "Start supplier onboarding",
  },
  {
    image: "/images/procurement/7.png",
    badge: {
      label: "Public / requestable",
      dotColor: "bg-[#20502F]",
      badgeStyle: "bg-[#E3F0E7] text-[#20502F] border border-[#20502F]/20",
    },
    title: "Accessibility",
    description:
      "Accessibility statement, feedback route and current evidence where approved.",
    actionText: "View accessibility resources",
  },
];

export default function ResourceCategoriesSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label with slanted dark slash */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              RESOURCE CATEGORIES
            </span>
          </div>

          {/* Title (31px) */}
          <h2 className="text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            Browse by procurement discipline.
          </h2>
        </div>

        {/* 3x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplineCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              {/* Card Thumbnail Image */}
              <div className="relative w-full h-44 bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-3">
                  {/* Status Badge */}
                  <div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${card.badge.badgeStyle}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${card.badge.dotColor}`}
                      />
                      {card.badge.label}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A78C3] hover:underline"
                  >
                    <span>{card.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="bg-[#E6F3FC]/70 border border-[#0A78C3]/20 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-xs">
          <div className="w-8 h-8 rounded-xl bg-[#0A78C3] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
            <Info className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-bold text-[#07243B]">
              No duplicate commercial truth.
            </h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Pack cards resolve live links to canonical pricing and service
              pages instead of embedding copied plan limits or prices that can
              drift out of date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
