"use client";

import React from "react";
import Link from "next/link";

interface DestinationCard {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

const destinationsData: DestinationCard[] = [
  {
    title: "Trust & governance",
    description:
      "Leadership profiles never carry certification or procurement claims. Trust and Security is the sole authority for controls, certification and procurement evidence. Board, committee or governance structures are shown only when Corporate/Legal verifies them.",
    buttonText: "Explore Trust and Security",
    buttonHref: "/trust-and-security",
  },
  {
    title: "Customer accountability",
    description:
      "Existing customers need Help Center, System Status and Contact — not an executive profile. Active incidents and operational problems always outrank sales. Personal executive contact details are never exposed here.",
    buttonText: "Open Help Center",
    buttonHref: "/help-center",
  },
];

export default function TwoDestinationsSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Content */}
        <div className="text-center space-y-3">
          {/* Category Tag */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            <span className="font-bold">/</span>
            <span>TRUST, GOVERNANCE & CUSTOMER ACCOUNTABILITY</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight">
            Two clear destinations — never a support queue
          </h2>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {destinationsData.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Title */}
                <h3 className="text-[19px] font-bold text-[#0F172A] tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#4D5E72] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  href={card.buttonHref}
                  className="inline-block px-5 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm font-semibold text-[#0F172A] hover:bg-gray-50 hover:border-gray-300 transition-all text-center"
                >
                  {card.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
