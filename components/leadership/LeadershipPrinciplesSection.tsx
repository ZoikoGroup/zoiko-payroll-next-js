"use client";

import React from "react";

interface PrincipleItem {
  title: string;
  practiceText: string;
}

const principlesData: PrincipleItem[] = [
  {
    title: "Evidence before publication",
    practiceText:
      "No name, title or claim is published without an approved source record and named approver.",
  },
  {
    title: "Scope before authority",
    practiceText:
      "Every role states its exact entity and product scope — never implied broader authority.",
  },
  {
    title: "Fail closed, not stale",
    practiceText:
      "When evidence lapses, we suppress the named profile rather than leave an outdated title visible.",
  },
];

export default function LeadershipPrinciplesSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Header, Principles List & Footnote */}
          <div className="lg:col-span-6 space-y-8">
            {/* Header Content */}
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
                <span className="font-bold">/</span>
                <span>LEADERSHIP PRINCIPLES</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
                Evidence–backed principles — not culture marketing
              </h2>
            </div>

            {/* Principles List */}
            <div className="divide-y divide-gray-200/80">
              {principlesData.map((principle, idx) => (
                <div key={idx} className="py-5 first:pt-0 last:pb-0 space-y-1">
                  <h3 className="text-base font-bold text-[#0F172A]">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4D5E72] leading-relaxed">
                    <span className="font-semibold text-[#0F172A]">
                      Practice:
                    </span>{" "}
                    {principle.practiceText}
                  </p>
                </div>
              ))}
            </div>

            {/* Footnote */}
            <p className="text-xs text-[#94A3B8] leading-relaxed pt-2 border-t border-transparent">
              Verified statements, when available, are Newsroom–sourced only and
              link to the canonical release — never self-authored claims
              presented as external validation.
            </p>
          </div>

          {/* Right Column: Natural Image */}
          <div className="lg:col-span-6 flex justify-center">
            <img
              src="/images/leadership/4.png"
              alt="Diverse team conversing at a meeting table"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
