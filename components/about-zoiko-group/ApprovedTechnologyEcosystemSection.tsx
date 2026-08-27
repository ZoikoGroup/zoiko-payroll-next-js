"use client";

import React from "react";
import Link from "next/link";

interface ProductCard {
  category: string;
  title: string;
  description: string;
  badgeLabel: string;
  badgeColor: string; // Tailwind background & text color classes
  linkHref: string;
}

const productsData: ProductCard[] = [
  {
    category: "PAYROLL",
    title: "Zoiko Payroll",
    description: "Global payroll processing and control.",
    badgeLabel: "This product",
    badgeColor: "bg-[#E0F2FE] text-[#0284C7]",
    linkHref: "/zoiko-payroll",
  },
  {
    category: "CONNECTED SUITE",
    title: "Zoiko One",
    description: "Approved connected-suite expansion pathway.",
    badgeLabel: "Connected suite",
    badgeColor: "bg-[#F3E8FF] text-[#7E22CE]",
    linkHref: "/zoiko-one",
  },
  {
    category: "IDENTITY & ACCESS",
    title: "Zoiko Identity",
    description: "Shared authentication foundation, where enabled.",
    badgeLabel: "Shared service",
    badgeColor: "bg-[#DCFCE7] text-[#166534]",
    linkHref: "/zoiko-identity",
  },
];

export default function ApprovedTechnologyEcosystemSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Content */}
        <div className="space-y-3">
          {/* Category Tag */}
          <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            <span className="font-bold">/</span>
            <span>APPROVED TECHNOLOGY ECOSYSTEM</span>
          </div>

          {/* Title (32px) */}
          <h2 className="text-2xl sm:text-[32px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Only active, publicly approved products appear here.
          </h2>

          {/* Description Paragraph (17px) */}
          <p className="text-base sm:text-[15px] max-w-2xl text-[#64748B] leading-relaxed">
            Category-first, registry-backed. Non-active products and unverified
            relationships are hidden rather than shown as &quot;planned.&quot;
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productsData.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
            >
              {/* Card Header & Content */}
              <div className="space-y-3">
                <div className="text-[10.5px] font-semibold tracking-wider text-[#8793A1] uppercase">
                  {card.category}
                </div>

                <h3 className="text-[15px] font-bold text-[#0A3050] tracking-tight">
                  {card.title}
                </h3>

                <p className="text-xs text-[#5B6470] leading-relaxed">
                  {card.description}
                </p>

                {/* Status Badge */}
                <div className="pt-1">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${card.badgeColor}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {card.badgeLabel}
                  </span>
                </div>
              </div>

              {/* View Product Link */}
              <div>
                <Link
                  href={card.linkHref}
                  className="inline-block text-xs font-bold text-[#1483C7] hover:text-[#0369A1] transition-colors"
                >
                  View product →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="border-b border-b-[#1483C7] inline py-2">
          <Link
            href="/approved-products"
            className="inline-block text-xs sm:text-sm font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors"
          >
            View all approved products →
          </Link>
        </div>

        {/* Dark Blue Callout Banner */}
        <div className="w-full rounded-2xl bg-gradient-to-r from-[#071F34F0] to-[#0A3758D1] p-8 sm:p-10 mt-8 text-white shadow-sm space-y-2">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
            Registry-backed, not a logo wall.
          </h3>
          <p className="text-[17px] text-[#94A3B8] leading-relaxed max-w-130">
            Every card above reflects an active, verified relationship record —
            not a marketing portfolio.
          </p>
        </div>
      </div>
    </section>
  );
}
