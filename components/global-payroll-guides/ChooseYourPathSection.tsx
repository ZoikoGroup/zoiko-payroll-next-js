"use client";

import React from "react";
import Image from "next/image";

interface CardItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const cardsData: CardItem[] = [
  {
    id: 1,
    title: "Understand",
    description: "Concepts and boundaries",
    imageSrc: "/images/resources/2.png",
  },
  {
    id: 2,
    title: "Design",
    description: "Operating model & governance",
    imageSrc: "/images/resources/3.png",
  },
  {
    id: 3,
    title: "Implement",
    description: "Migration & change journey",
    imageSrc: "/images/resources/4.png",
  },
  {
    id: 4,
    title: "Evaluate",
    description: "Provider & risk criteria",
    imageSrc: "/images/resources/5.png",
  },
  {
    id: 5,
    title: "Integrate",
    description: "Data & system flows",
    imageSrc: "/images/resources/6.png",
  },
  {
    id: 6,
    title: "Check a market",
    description: "Jurisdiction availability",
    imageSrc: "/images/resources/7.png",
  },
  {
    id: 7,
    title: "Get help",
    description: "Support & documentation",
    imageSrc: "/images/resources/8.png",
  },
];

const categoryBadgesRow1 = [
  "Global vs Local Control",
  "Operating Model & Lifecycle",
  "Roles & Governance",
  "Data & Integrations",
  "Reporting & Evidence",
];

const categoryBadgesRow2 = ["Implementation Journey", "Evidence Planner"];

export default function ChooseYourPathSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              CHOOSE YOUR PATH
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            A long guide should feel navigable, not like a blog post
          </h2>
        </div>

        {/* Navigation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow group cursor-pointer flex flex-col"
            >
              {/* Card Image */}
              <div className="relative w-full h-36 bg-slate-100 overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-1 flex-1 flex flex-col justify-center">
                <h3 className="text-sm font-bold text-[#07243B] group-hover:text-[#3D9BD6] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Category Filter Badges Box */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/70 shadow-2xs space-y-3 max-w-5xl mx-auto">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categoryBadgesRow1.map((badge, idx) => (
              <button
                key={idx}
                className="bg-[#EEF3F9] hover:bg-[#e2ebf5] text-[#2B5A84] text-xs font-bold px-4 py-2 rounded-lg transition-colors"
              >
                {badge}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categoryBadgesRow2.map((badge, idx) => (
              <button
                key={idx}
                className="bg-[#EEF3F9] hover:bg-[#e2ebf5] text-[#2B5A84] text-xs font-bold px-4 py-2 rounded-lg transition-colors"
              >
                {badge}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
