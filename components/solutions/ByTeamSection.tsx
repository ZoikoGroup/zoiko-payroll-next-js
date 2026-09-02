"use client";

import React from "react";
import Image from "next/image";

interface TeamFeature {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

const teamFeatures: TeamFeature[] = [
  {
    category: "PAYROLL TEAMS",
    title: "Run accurate, controlled payroll cycles.",
    description:
      "Inputs, validation, calculations, exceptions, approvals, close, records and operational reporting.",
    imageSrc: "/images/solutions/5.png",
    imageAlt: "Payroll team reviewing data on presentation display",
    imagePosition: "left",
  },
  {
    category: "FINANCE TEAMS",
    title: "Understand and control payroll cash.",
    description:
      "Funding, payments, reconciliation, journals, cost views, close and report distribution.",
    imageSrc: "/images/solutions/6.png",
    imageAlt: "Finance team analyzing financial reports around a table",
    imagePosition: "right",
  },
  {
    category: "HR & PEOPLE TEAMS",
    title: "Coordinate worker changes and payroll-relevant data.",
    description:
      "Employee records, lifecycle changes, data ownership, approvals, access and employee experience.",
    imageSrc: "/images/solutions/7.png",
    imageAlt: "HR team reviewing employee records and lifecycle data",
    imagePosition: "left",
  },
];

export default function ByTeamSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>BY TEAM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            Payroll, finance and people teams — from governed shared data
          </h2>
        </div>

        {/* Feature Blocks (Alternating Layout) */}
        <div className="space-y-8">
          {teamFeatures.map((item, idx) => {
            const isLeftImage = item.imagePosition === "left";
            return (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white border border-slate-200/80 shadow-2xs"
              >
                {/* Image Column */}
                <div
                  className={`md:col-span-6 relative w-full h-[240px] sm:h-[310px] overflow-hidden ${
                    isLeftImage ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content Column */}
                <div
                  className={`md:col-span-6 space-y-3 ${
                    isLeftImage ? "md:order-2 md:pl-4" : "md:order-1 pl-10 md:pr-4"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
                    <span>/</span>
                    <span>{item.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#07243B] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <p className="text-center text-xs text-slate-400 font-medium mx-auto">
          Payroll, finance and people teams operate from governed shared data
          without losing role boundaries.
        </p>
      </div>
    </section>
  );
}
