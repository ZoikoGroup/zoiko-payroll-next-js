"use client";

import React from "react";
import Link from "next/link";

interface LeadershipCard {
  initials: string;
  name: string;
  role: string;
  scopeText: string;
  tags: string[];
  bioText: string;
  reviewedDate: string;
  profileHref: string;
}

const leadershipCards: LeadershipCard[] = [
  {
    initials: "MW",
    name: "M. Weber",
    role: "Chief Product Officer",
    scopeText: "Global Payroll Product · All entities",
    tags: ["Product direction", "Roadmap"],
    bioText: "Approved one-line biography available on the full profile.",
    reviewedDate: "Reviewed Aug 2026",
    profileHref: "/profile/m-weber",
  },
  {
    initials: "RT",
    name: "R. Tanaka",
    role: "Chief Technology Officer",
    scopeText: "Platform & Infrastructure · All products",
    tags: ["Technology", "Reliability"],
    bioText: "Approved one-line biography available on the full profile.",
    reviewedDate: "Reviewed Aug 2026",
    profileHref: "/profile/r-tanaka",
  },
  {
    initials: "CA",
    name: "C. Alvarez",
    role: "VP, Payroll Operations",
    scopeText: "Global Payroll Delivery · All jurisdictions",
    tags: ["Operations", "Delivery"],
    bioText: "Approved one-line biography available on the full profile.",
    reviewedDate: "Reviewed Jul 2026",
    profileHref: "/profile/c-alvarez",
  },
];

export default function LeadershipStructureSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side: Header & Text */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#0A8FD0] uppercase">
              <span className="font-bold">/</span>
              <span>LEADERSHIP STRUCTURE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
              Role and accountability come before any biography
            </h2>

            <p className="text-[17px] text-[#4D5E72] leading-relaxed max-w-120">
              Each card separates a stable person record from the role they're
              assigned to. Title, scope, status and accountability domains are
              shown before any biography — and never include personal contact
              details, compensation or inferred background.
            </p>
          </div>

          {/* Right Side: Natural Image */}
          <div className="lg:col-span-6 flex justify-center">
            <img
              src="/images/leadership/2.png"
              alt="Business partners handshaking across meeting table"
            />
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  {/* Top Header Row: Initials Badge + Name & Role */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E1EEF9] flex items-center justify-center text-[#155A8A] font-bold text-sm shrink-0">
                      {card.initials}
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="text-base font-bold text-[#0F172A]">
                        {card.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#155A8A]">
                        {card.role}
                      </p>
                    </div>
                  </div>

                  {/* Scope Subtext */}
                  <p className="text-[11px] sm:text-xs text-[#94A3B8]">
                    {card.scopeText}
                  </p>

                  {/* Domain Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {card.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-1 rounded-full bg-[#E1EEF9] text-[11px] font-bold text-[#4D5E72]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* One-Line Bio Placeholder */}
                  <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                    {card.bioText}
                  </p>
                </div>

                {/* Footer Row: Date & View Profile */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-[#94A3B8] text-[11px]">
                    {card.reviewedDate}
                  </span>
                  <Link
                    href={card.profileHref}
                    className="font-semibold text-[#155A8A] hover:text-[#0369A1] transition-colors"
                  >
                    View profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center">
            <p className="text-xs text-[#94A3B8]">
              Illustrative example cards for this design system — not a live
              leadership registry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
