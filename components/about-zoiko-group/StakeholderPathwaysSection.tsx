"use client";

import React from "react";
import Link from "next/link";

interface PathwayCard {
  id: number;
  title: string;
  imageSrc: string;
  href: string;
}

const pathwaysData: PathwayCard[] = [
  {
    id: 1,
    title: "Leadership",
    imageSrc: "/images/about-zoiko/1.png",
    href: "/leadership",
  },
  {
    id: 2,
    title: "Trust and Security",
    imageSrc: "/images/about-zoiko/2.png",
    href: "/trust-and-security",
  },
  {
    id: 3,
    title: "Partners",
    imageSrc: "/images/about-zoiko/3.png",
    href: "/partners",
  },
  {
    id: 4,
    title: "Careers",
    imageSrc: "/images/about-zoiko/4.png",
    href: "/careers",
  },
];

export default function StakeholderPathwaysSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Section */}
        <div className="space-y-3">
          {/* Category Tag */}
          <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            <span className="font-bold">/</span>
            <span>STAKEHOLDER PATHWAYS</span>
          </div>

          {/* Title (32px) */}
          <h2 className="text-2xl sm:text-[32px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Choose your own path — nothing is inferred about you.
          </h2>
        </div>

        {/* Subtitle / Group Label */}
        <div>
          <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
            Company destinations
          </h3>
        </div>

        {/* 4-Column Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pathwaysData.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group bg-white rounded-[12px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title Container */}
              <div className="p-4 sm:p-5">
                <h4 className="text-sm font-bold text-[#0F172A] tracking-tight group-hover:text-[#0284C7] transition-colors">
                  {card.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
