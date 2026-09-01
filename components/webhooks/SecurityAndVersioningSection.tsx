"use client";

import React from "react";

interface CardSection {
  title: string;
  items: string[];
}

const cardSections: CardSection[] = [
  {
    title: "Version panel",
    items: [
      "Event identity + version",
      "Lifecycle status",
      "Replacement event/version",
      "Breaking-change summary",
      "Migration guide",
    ],
  },
  {
    title: "Test / sandbox",
    items: [
      "Approved fixtures only",
      "Synthetic test secrets",
      "Shown only if the capability exists",
    ],
  },
  {
    title: "Security checklist",
    items: [
      "No secrets in URLs or logs",
      "No secrets in support text boxes",
      "Verify before processing — always",
    ],
  },
];

export default function SecurityAndVersioningSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
            <span className="w-4 h-[2px] bg-[#2F6FED] inline-block" />
            <span>VERSIONING + TEST/SANDBOX + SECURITY</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
            Secrets never appear in URLs, screenshots or examples
          </h2>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {cardSections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs flex flex-col space-y-4"
            >
              <h3 className="text-sm font-bold text-[#07243B]">
                {section.title}
              </h3>

              <ul className="space-y-3 pt-2">
                {section.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-500 leading-relaxed"
                  >
                    <span className="text-[#2F6FED] font-bold select-none">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
