"use client";

import React from "react";
import Link from "next/link";

interface RelationshipType {
  title: string;
  description: string;
}

const relationshipTypesData: RelationshipType[] = [
  {
    title: "Standalone",
    description: "Works independently.",
  },
  {
    title: "Integration",
    description: "Connects with Zoiko Payroll; exact direction/scope required.",
  },
  {
    title: "Shared service",
    description:
      "Uses an approved shared foundation; permissions/data remain scope-specific.",
  },
  {
    title: "Connected suite",
    description: "Available through Zoiko One; no automatic bundling.",
  },
  {
    title: "Navigation only",
    description: "Explore another product; no technical relationship implied.",
  },
];

export default function HowProductRelationshipsWorkSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 lg:py-20 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Content */}
        <div className="space-y-3 max-w-3xl">
          {/* Category Tag */}
          <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            <span className="font-bold">/</span>
            <span>HOW PRODUCT RELATIONSHIPS WORK</span>
          </div>

          {/* Title (32px) */}
          <h2 className="text-2xl sm:text-[32px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Five relationship types. Never an unlabeled line.
          </h2>
        </div>

        {/* 5-Card Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {relationshipTypesData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow space-y-2.5 flex flex-col justify-start"
            >
              <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dark Blue Callout Banner with Pattern Background */}
        <div className="relative w-full rounded-2xl bg-[#2A526E] p-6 sm:p-8 text-white shadow-sm overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Subtle Honeycomb Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='40' viewBox='0 0 24 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L12 33L24 40V26L12 19L0 26V40ZM12 13L24 20V6L12 0L0 6V20L12 13Z' fill='%25FFFFFF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Banner Text Content */}
          <div className="relative z-10 space-y-1.5 max-w-2xl">
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">
              Zoiko One — connected-suite pathway
            </h3>
            <p className="text-[12.5px] text-[#FFFFFFA6] max-w-120 leading-relaxed">
              An approved expansion route for eligible ecosystem relationships.
              Authority, mappings, permissions, timing, commercial scope and
              failure handling are preserved and documented on its own page.
            </p>
          </div>

          {/* Call-to-Action Button */}
          <div className="relative z-10 shrink-0">
            <Link
              href="/zoiko-one"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white text-[#0F172A] hover:bg-gray-100 text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              Explore Zoiko One{" "}
              <span className="text-base leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
