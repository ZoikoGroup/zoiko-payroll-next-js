"use client";

import React from "react";
import Image from "next/image";

interface StageCard {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const organizationStages: StageCard[] = [
  {
    imageSrc: "/images/solutions/1.png",
    imageAlt: "Financial documents with calculator and stacked coins",
    title: "Growing businesses",
    description:
      "You're moving beyond spreadsheets and manual handoffs, without enterprise overhead — guided setup, repeatable runs, approvals and visibility.",
  },
  {
    imageSrc: "/images/solutions/2.png",
    imageAlt:
      "Business professionals collaborating in a modern conference room",
    title: "Mid-market",
    description:
      "You're standardizing payroll across expanding teams, pay groups, entities or systems — controls, integrations, exceptions and role separation.",
  },
  {
    imageSrc: "/images/solutions/3.png",
    imageAlt:
      "Diverse international team of business professionals walking outdoors",
    title: "International groups",
    description:
      "You coordinate multiple jurisdictions and operating models — global status, local context, consolidation and multi-currency visibility.",
  },
  {
    imageSrc: "/images/solutions/4.png",
    imageAlt: "Enterprise team meeting around a conference table",
    title: "Enterprise organizations",
    description:
      "You govern complex payroll at scale — configurable permissions, segregation of duties, auditability and implementation governance.",
  },
];

export default function ByOrganizationStageSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>BY ORGANIZATION STAGE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            Best fit when... not an arbitrary headcount threshold
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {organizationStages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Image Header */}
                <div className="relative w-full h-[180px]">
                  <Image
                    src={stage.imageSrc}
                    alt={stage.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <div className="text-[10px] font-bold tracking-wider text-[#0A8FD0] uppercase font-mono">
                    BEST FIT WHEN...
                  </div>
                  <h3 className="text-base font-bold text-[#07243B]">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
