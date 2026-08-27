"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface RelatedResource {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imgSrc: string;
}

const resourcesData: RelatedResource[] = [
  {
    title: "Legal Center",
    description: "The governance hub for all Zoiko Payroll legal disclosures.",
    linkText: "Open Legal Center",
    linkHref: "#legal-center",
    imgSrc: "/images/legal/5.png",
  },
  {
    title: "Trust and Security",
    description:
      "Security controls and evidence — this notice owns disclosure only.",
    linkText: "Open Trust and Security",
    linkHref: "#trust-security",
    imgSrc: "/images/legal/6.png",
  },
  {
    title: "Data Processing Agreement",
    description:
      "Contractual processing terms for customer-directed payroll data.",
    linkText: "Open DPA",
    linkHref: "#dpa",
    imgSrc: "/images/legal/7.png",
  },
];

export default function RelatedResourcesSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#0284C7]">
          / RELATED RESOURCES
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
          Continue to the right authority.
        </h2>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resourcesData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            {/* Image Container */}
            <div className="relative w-full h-48">
              <Image
                src={item.imgSrc}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content Area */}
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[12.5px] text-[#5B646B] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <Link
                  href={item.linkHref}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors"
                >
                  <span>{item.linkText}</span>
                  <span className="text-sm">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
