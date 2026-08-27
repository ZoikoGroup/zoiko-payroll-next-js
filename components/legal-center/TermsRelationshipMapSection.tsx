"use client";

import React from "react";
import Image from "next/image";
import { Info } from "lucide-react";

interface RelationshipMapCard {
  category: string;
  title: string;
  description: string;
}

const relationshipCards: RelationshipMapCard[] = [
  {
    category: "WEBSITE USE",
    title: "Website Terms of Use",
    description: "Governs public website browsing and use.",
  },
  {
    category: "SERVICE USE",
    title: "Zoiko Payroll Service Terms",
    description: "Standard service terms where applicable.",
  },
  {
    category: "DATA PROCESSING",
    title: "Data Processing Addendum",
    description: "Data-processing terms and annexes where applicable.",
  },
  {
    category: "USE RESTRICTIONS",
    title: "Acceptable Use Policy",
    description: "Use restrictions where incorporated or applicable.",
  },
  {
    category: "DISCLOSURE",
    title: "Privacy Notice",
    description: "Privacy disclosure — not a service contract.",
  },
  {
    category: "DISCLOSURE",
    title: "Cookie Notice",
    description: "Disclosure — not the preference-control interface.",
  },
];

export default function TermsRelationshipMapSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Split Section: Heading Content & Side Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
              <span className="w-3 h-0.5 bg-[#2F6FED]" />
              <span>TERMS RELATIONSHIP MAP</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0F172A] tracking-tight leading-tight">
              Purpose and links only — never precedence
            </h2>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-lg">
              Which document governs a specific situation is a legal question
              for that document itself — this map never states which one
              overrides another.
            </p>
          </div>

          {/* Right Image Card */}
          <div className="lg:col-span-6 flex justify-end">
            <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[300px] rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <Image
                src="/images/legal/1.png"
                alt="Terms Relationship Map"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

        {/* 3-Column Grid for Document Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {relationshipCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between space-y-3 hover:shadow-md transition-shadow"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold tracking-wider text-[#2F6FED] uppercase block">
                  {card.category}
                </span>
                <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
                  {card.title}
                </h3>
              </div>

              <p className="text-xs text-[#64748B] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer Banner */}
        <div className="bg-[#FDF1DE] border border-[#FDF1DE] rounded-xl p-4 flex items-center gap-3 text-xs sm:text-sm text-[#3A4356]">
          <Info className="w-4 h-4 shrink-0 text-[#3A4356]" />
          <span>
            Public availability of a document does not prove it has been
            executed for a specific customer relationship.
          </span>
        </div>
      </div>
    </section>
  );
}
