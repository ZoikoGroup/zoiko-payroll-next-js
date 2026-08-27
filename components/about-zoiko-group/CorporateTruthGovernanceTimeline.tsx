"use client";

import React from "react";
import Link from "next/link";

interface GovernanceStep {
  stepNumber: number;
  title: string;
  description: string;
  linkHref: string;
}

const stepsData: GovernanceStep[] = [
  {
    stepNumber: 1,
    title: "Trust and Security",
    description: "Security controls and governance. Verified trust information and policies.",
    linkHref: "/trust-and-security",
  },
  {
    stepNumber: 2,
    title: "Product Documentation",
    description: "Product guidance and specifications. Clear information for implementation and use",
    linkHref: "/docs",
  },
  {
    stepNumber: 3,
    title: "System Status",
    description: "Current service health and availability. See active incidents and operational updates.",
    linkHref: "/status",
  },
  {
    stepNumber: 4,
    title: "Release Notes",
    description: "Latest product updates and changes. Track new features, fixes, and improvements.",
    linkHref: "/release-notes",
  },
  {
    stepNumber: 5,
    title: "Help Center",
    description: "Support resources and troubleshooting guidance. Find answers when you need help.",
    linkHref: "/help-center",
  },
];

export default function CorporateTruthGovernanceTimeline() {
  return (
    <section className="w-full bg-[#F7F7F7] py-16 lg:py-24 font-sans antialiased">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Content */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            <span className="font-bold">/</span>
            <span>TRUST, SECURITY + CORPORATE TRUTH GOVERNANCE</span>
          </div>

          <h2 className="text-2xl sm:text-[32px] font-bold text-[#0F172A] tracking-tight leading-tight">
            This page says who owns each type of truth — it doesn&apos;t duplicate it
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative py-4">
          
          {/* Central Vertical Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 -translate-x-1/2 z-0" />
          <div className="block md:hidden absolute left-5 top-0 bottom-0 w-[2px] bg-gray-300 z-0" />

          {/* Steps List */}
          <div className="space-y-8 md:space-y-12 relative z-10">
            {stepsData.map((step, idx) => {
              const isEven = idx % 2 === 0; // Even indices go Left, Odd go Right

              return (
                <div
                  key={step.stepNumber}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  
                  {/* Left Column Container */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:pr-12">
                    {isEven ? (
                      <CardContent step={step} />
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  {/* Center Timeline Number Node */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-[#0F172A] text-[#0F172A] font-bold text-sm shadow-sm z-20">
                    {step.stepNumber}
                  </div>

                  {/* Right Column Container */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-12 pt-4 md:pt-0">
                    {!isEven ? (
                      <CardContent step={step} />
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

{/* Card Component */}
function CardContent({ step }: { step: GovernanceStep }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow space-y-3">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base font-bold text-[#0F172A] tracking-tight">
          {step.title}
        </h3>
        <Link
          href={step.linkHref}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#E0F2FE] text-[#155A8A] hover:bg-[#D0EBFD] text-xs font-bold transition-colors shrink-0"
        >
          Visit <span className="text-sm leading-none">→</span>
        </Link>
      </div>
      
      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}