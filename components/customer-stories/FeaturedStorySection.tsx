"use client";

import React from "react";
import Image from "next/image";

interface CategoryCard {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const proofCategories: CategoryCard[] = [
  {
    id: 1,
    title: "Payroll operations proof",
    description:
      "Evidence on running and controlling multi-entity payroll cycles.",
    imageSrc: "/images/resources/14.png",
  },
  {
    id: 2,
    title: "Security & controls proof",
    description: "Evidence on access, auditability and control implementation.",
    imageSrc: "/images/resources/15.png",
  },
  {
    id: 3,
    title: "Implementation proof",
    description: "Evidence on rollout planning and go-live readiness.",
    imageSrc: "/images/resources/16.png",
  },
];

export default function FeaturedStorySection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              FEATURED STORY
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            No story currently meets the featuring bar
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            A story is only featured once it is published, current, fully
            consented, evidence-complete and editorially relevant — never
            because it&apos;s paid or sales-driven. Explore proof by category
            while the next eligible story is reviewed.
          </p>
        </div>

        {/* 3-Column Proof Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proofCategories.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow group cursor-pointer flex flex-col"
            >
              {/* Card Image Container */}
              <div className="relative w-full h-44 bg-slate-100 overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-2 flex-1 flex flex-col">
                <h3 className="text-sm font-bold text-[#07243B] group-hover:text-[#3D9BD6] transition-colors">
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
