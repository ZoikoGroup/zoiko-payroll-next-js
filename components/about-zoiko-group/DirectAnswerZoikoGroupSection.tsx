"use client";

import React from "react";

const tagsData = [
  "Approved ownership relationships",
  "Approved portfolio relationships",
  "Product data boundaries",
  "Contract boundaries",
  "Availability boundaries",
  "Permissions",
  "Support responsibilities",
];

export default function DirectAnswerZoikoGroupSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-12 lg:py-16 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Category Tag */}
        <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
          <span className="font-bold">/</span>
          <span>DIRECT ANSWER</span>
        </div>

        {/* Title (Updated to 32px) */}
        <h2 className="text-[32px] font-bold text-[#0F172A] tracking-tight leading-tight">
          What is Zoiko Group?
        </h2>

        {/* Highlight Callout Box (Updated text size to 17px) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#E6F3FB] border-l-4 border-[#0284C7] shadow-sm">
          <p className="text-[#0A3050] leading-relaxed font-semibold">
            About Zoiko Group explains the verified parent-group context for
            Zoiko Payroll and the wider Zoiko technology ecosystem. The page
            shows approved ownership/operator relationships and portfolio
            connections while keeping product data, contracts, availability,
            permissions and support responsibilities explicit. Exact legal
            relationships are published only from approved corporate records.
          </p>
        </div>

        {/* Tags Grid / Pills */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
          {tagsData.map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full bg-[#E6F2FA] text-[#0F6FAE] text-xs font-bold hover:bg-[#E0F2FE] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
