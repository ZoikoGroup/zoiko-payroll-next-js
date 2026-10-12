"use client";

import React from "react";
import Image from "next/image";

export default function ProductBoundaryClassificationSection() {
  const classifications = [
    {
      badge: "Standard",
      badgeBg: "bg-[#E3F0E7]",
      badgeText: "text-[#20502F]",
      dotColor: "bg-[#20502F]",
      description:
        "Delivered product/rule behavior used without customer-specific configuration beyond normal required values.",
    },
    {
      badge: "Configurable",
      badgeBg: "bg-[#E4F1FA]",
      badgeText: "text-[#0A78C3]",
      dotColor: "bg-[#0A78C3]",
      description:
        "Supported options/objects can be configured within documented boundaries — with downstream impact shown.",
    },
    {
      badge: "Extension / integration",
      badgeBg: "bg-[#F1EAD8]",
      badgeText: "text-[#6B5A20]",
      dotColor: "bg-[#6B5A20]",
      description:
        "Requirement is met through a supported integration, extension, or professional-service pattern rather than core configuration.",
    },
    {
      badge: "Unsupported",
      badgeBg: "bg-[#FCE8E6]",
      badgeText: "text-[#A8221B]",
      dotColor: "bg-[#A8221B]",
      description:
        "Requirement cannot be delivered in current supported product/service scope — stated clearly, not worked around.",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content Side */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Category Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#0A78C3] font-bold text-sm">/</span>
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0A78C3] uppercase">
                PRODUCT-BOUNDARY CLASSIFICATION
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#0B192C] tracking-tight leading-tight mb-4">
              Never &quot;customizable to anything.&quot;
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-8 max-w-xl">
              Every requirement resolves to one of four honest classes — so
              buyers understand exactly what&apos;s delivered without
              customization, what&apos;s configurable within documented
              boundaries, and what requires an extension or falls outside
              current scope.
            </p>

            {/* 2x2 Grid of Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {classifications.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E2E8F0] p-5 shadow-xs flex flex-col items-start"
                >
                  {/* Badge */}
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${item.badgeBg} ${item.badgeText} text-[11px] sm:text-xs font-semibold mb-4`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`}
                    />
                    <span>{item.badge}</span>
                  </div>

                  {/* Card Description */}
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Side */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden">
              <Image
                src="/images/configuration/2.png"
                alt="Business team discussing project requirements around a laptop in an office setting"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
