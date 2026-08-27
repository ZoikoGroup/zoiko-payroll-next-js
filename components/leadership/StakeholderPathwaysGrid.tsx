"use client";

import React from "react";
import Link from "next/link";

interface PathwayCard {
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
}

const pathwaysData: PathwayCard[] = [
  {
    title: "Buyer / executive sponsor",
    description: "Role and accountability map, then evaluate.",
    linkLabel: "Book a demo →",
    linkHref: "/book-demo",
  },
  {
    title: "Payroll / finance",
    description: "Product, reporting and implementation depth.",
    linkLabel: "Product →",
    linkHref: "/product",
  },
  {
    title: "Security / privacy / risk",
    description: "Controls and procurement evidence.",
    linkLabel: "Trust and Security →",
    linkHref: "/trust-and-security",
  },
  {
    title: "Procurement / legal",
    description: "Governance evidence and direct contact.",
    linkLabel: "Contact →",
    linkHref: "/contact",
  },
  {
    title: "Existing customer",
    description: "Support, status and account help.",
    linkLabel: "Help Center →",
    linkHref: "/help-center",
  },
  {
    title: "Candidate",
    description: "Open roles and hiring information.",
    linkLabel: "Careers →",
    linkHref: "/careers",
  },
  {
    title: "Media / analyst",
    description: "Verified statements and press contact.",
    linkLabel: "Newsroom →",
    linkHref: "/newsroom",
  },
  {
    title: "Partner",
    description: "Partnership routes and contact.",
    linkLabel: "Partners →",
    linkHref: "/partners",
  },
];

export default function StakeholderPathwaysGrid() {
  return (
    <section className="w-full bg-[#F9FAFB] py-12 lg:py-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pathwaysData.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-[13.5px] font-bold text-[#0F172A] tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs text-[#4D5E72] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Action Link */}
              <div>
                <Link
                  href={card.linkHref}
                  className="inline-block text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors"
                >
                  {card.linkLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
