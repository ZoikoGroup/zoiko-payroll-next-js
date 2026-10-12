"use client";

import React from "react";
import { Star } from "lucide-react";

// Review stats matching the image data
const REVIEWS = [
  {
    platform: "Trustpilot",
    hasStarIcon: true,
    score: "4.7 / 5",
    details: "Based on 600+ reviews",
    href: "https://www.trustpilot.com",
  },
  {
    platform: "G2",
    hasStarIcon: false,
    score: "4.6 / 5",
    details: "Based on 400+ reviews",
    href: "https://www.g2.com",
  },
  {
    platform: "Glassdoor",
    hasStarIcon: false,
    score: "4.4 / 5",
    details: "Based on employee reviews",
    href: "https://www.glassdoor.com",
  },
];

export default function TrustProofSection() {
  return (
    <section className="w-full bg-[#f4f8fb] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10 text-center">
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0281D3]">
            TRUST AND OPERATIONAL PROOF
          </span>

          <h2 className="text-3xl md:text-[32px] font-bold text-[#0A1928] tracking-tight">
            Reviewed the way we build &mdash; with evidence.
          </h2>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {REVIEWS.map((review, idx) => (
            <a
              key={idx}
              href={review.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-[#E1E8ED] rounded-2xl p-8 flex flex-col items-center justify-center space-y-3 shadow-xs transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              {/* Platform Title */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5C6E7E] tracking-tight group-hover:text-[#0281D3] transition-colors">
                {review.hasStarIcon && (
                  <Star className="w-3.5 h-3.5 fill-[#5C6E7E] text-[#5C6E7E] group-hover:fill-[#0281D3] group-hover:text-[#0281D3] transition-colors" />
                )}
                <span>{review.platform}</span>
                <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </div>

              {/* Score */}
              <div className="text-3xl font-extrabold text-[#0A1928] tracking-tight">
                {review.score}
              </div>

              {/* Sub-details */}
              <div className="text-xs text-[#8A9BA8]">{review.details}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
