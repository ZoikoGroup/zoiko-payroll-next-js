"use client";

import React from "react";
import Image from "next/image";

interface Speaker {
  initials: string;
  name: string;
  role: string;
}

interface CardData {
  badge: {
    label: string;
    bg: string;
    text: string;
  };
  imageSrc: string;
  imageAlt: string;
  title: string;
  dateTime: string;
  tags: string[];
  speaker: Speaker;
  ctaText: string;
  ctaLink: string;
}

const cardsData: CardData[] = [
  {
    badge: { label: "Open", bg: "bg-[#E3F0E7]", text: "text-[#20502F]" },
    imageSrc: "/images/resources/25.png",
    imageAlt: "Global payroll team around table with international flags",
    title: "Global payroll fundamentals",
    dateTime: "Sep 15, 2026 · 15:00 CET · Online",
    tags: ["Global payroll", "All audiences"],
    speaker: {
      initials: "MW",
      name: "M. Weber",
      role: "Chief Product Officer",
    },
    ctaText: "Register →",
    ctaLink: "#",
  },
  {
    badge: { label: "Waitlist", bg: "bg-[#FEF6E1]", text: "text-[#876517]" },
    imageSrc: "/images/resources/26.png",
    imageAlt: "Presenter at technology workshop screen",
    title: "Implementation readiness workshop",
    dateTime: "Sep 22, 2026 · 10:00 CET · Online",
    tags: ["Implementation", "Admins"],
    speaker: {
      initials: "RT",
      name: "R. Tanaka",
      role: "Chief Technology Officer",
    },
    ctaText: "Join waitlist →",
    ctaLink: "#",
  },
  {
    badge: { label: "On demand", bg: "bg-[#E3F0E7]", text: "text-[#20502F]" },
    imageSrc: "/images/resources/27.png",
    imageAlt: "Team analyzing charts and data reports on tablet",
    title: "Reporting & reconciliation deep dive",
    dateTime: "Recorded session · 48 min",
    tags: ["Reporting", "Finance"],
    speaker: {
      initials: "CA",
      name: "C. Alvarez",
      role: "VP, Payroll Operations",
    },
    ctaText: "Watch on demand →",
    ctaLink: "#",
  },
  {
    badge: { label: "Completed", bg: "bg-slate-100", text: "text-slate-600" },
    imageSrc: "/images/resources/28.png",
    imageAlt: "Hand touching digital security lock graphic",
    title: "Security & access controls overview",
    dateTime: "Aug 18, 2026 · Completed",
    tags: ["Security", "IT / Admins"],
    speaker: {
      initials: "AL",
      name: "A. Lindqvist",
      role: "Head of Security",
    },
    ctaText: "Review update →",
    ctaLink: "#",
  },
];

export default function SessionCardSystemSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              SESSION CARD SYSTEM
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            One reusable card, every lifecycle state
          </h2>
        </div>

        {/* 4-Column Session Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cardsData.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              {/* Top Image + Status Badge */}
              <div className="relative w-full h-40 bg-slate-100">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover object-center"
                />
                {/* Floating Status Badge */}
                <span
                  className={`absolute top-3 left-3 ${card.badge.bg} ${card.badge.text} text-[10px] font-bold px-2.5 py-1 rounded-md shadow-2xs`}
                >
                  {card.badge.label}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                {/* Title & Metadata */}
                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-[#07243B] leading-snug line-clamp-2">
                    {card.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {card.dateTime}
                  </p>
                </div>

                {/* Filter Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="bg-[#EBF3FB] text-[#2C5282] text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Speaker Info */}
                <div className="flex items-center gap-2.5 pt-2 border-t border-slate-100">
                  <div className="w-7 h-7 rounded-full bg-[#D5E6F5] text-[#1C5182] text-[10px] font-bold flex items-center justify-center shrink-0">
                    {card.speaker.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#07243B] truncate leading-tight">
                      {card.speaker.name}
                    </p>
                    <p className="text-[10px] text-slate-400 font-medium truncate leading-tight">
                      {card.speaker.role}
                    </p>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-1">
                  <a
                    href={card.ctaLink}
                    className="inline-block text-xs font-bold text-[#3D9BD6] hover:text-[#0C4773] transition-colors"
                  >
                    {card.ctaText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
