"use client";

import React from "react";

const tagsData = [
  "Approved relationship",
  "Connected pathway",
  "Product authority",
  "Explicit scope",
];

export default function GroupRoleVerifiedOwnershipSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-12 lg:py-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Image Container with Overlay Badges */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative inline-block overflow-hidden rounded-3xl">
              {/* Image */}
              <img
                src="/images/about-zoiko/image.png"
                alt="Team discussing group role and verified ownership around a conference table"
                className="block w-full h-auto"
              />

              {/* Top-Left Fully Rounded Pill Badge */}
              <div className="absolute top-4 left-4 bg-white backdrop-blur-md px-4 py-2 rounded-full shadow-sm text-xs font-semibold text-[#0F172A]">
                Relationship reviewed
              </div>

              {/* Bottom-Right Fully Rounded Pill Badge */}
              <div className="absolute bottom-4 right-4 bg-white backdrop-blur-md px-4 py-2 rounded-full shadow-sm text-xs font-semibold text-[#0F172A]">
                Evidence recorded
              </div>
            </div>
          </div>

          {/* Right Column: Header, Description & Tags */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tag / Category */}
            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
              <span className="font-bold">/</span>
              <span>GROUP ROLE + VERIFIED OWNERSHIP</span>
            </div>

            {/* Main Title (32px) */}
            <h2 className="text-3xl md:text-[32px] font-bold text-[#0F172A] tracking-tight leading-tight">
              A wider ecosystem exists for coordination — not for one
              undifferentiated platform.
            </h2>

            {/* Description Paragraph (17px) */}
            <p className="text-[15px] text-[#4D5E72] leading-relaxed">
              Zoiko Group provides shared context where a connected pathway is
              explicitly approved. It does not force Zoiko Payroll or any other
              product into a single combined platform.
            </p>

            {/* Tags / Pills Grid */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {tagsData.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-[#E0F2FE]/70 text-[#0F6FAE] text-[10px] font-bold hover:bg-[#E0F2FE] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
