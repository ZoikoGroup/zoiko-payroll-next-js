"use client";

import React from "react";
import Image from "next/image";

interface SessionCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const sessionCards: SessionCard[] = [
  {
    title: "Implementation fundamentals",
    description: "On-demand sessions covering rollout planning and readiness.",
    imageSrc: "/images/resources/22.png",
    imageAlt: "Team collaborating over documents around a table",
  },
  {
    title: "Payroll reporting & controls",
    description:
      "On-demand sessions on reconciliation and audit-ready reporting.",
    imageSrc: "/images/resources/23.png",
    imageAlt: "Business professionals presenting analytics on a monitor",
  },
  {
    title: "Global payroll operating models",
    description:
      "On-demand sessions on multi-entity and multi-jurisdiction setup.",
    imageSrc: "/images/resources/24.png",
    imageAlt: "Global strategy session in front of a world map",
  },
];

export default function FeaturedSessionSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              FEATURED SESSION
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            No eligible event is currently featured
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            A session is only featured once it has confirmed timing, approved
            speakers, working registration and a complete agenda. Explore
            on-demand learning while the next live session is finalized.
          </p>
        </div>

        {/* 3-Column On-Demand Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sessionCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col"
            >
              {/* Card Image */}
              <div className="relative w-full h-44 sm:h-48 bg-slate-100">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-start">
                <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
