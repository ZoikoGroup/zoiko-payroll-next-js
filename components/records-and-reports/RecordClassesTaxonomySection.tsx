"use client";

import React from "react";
import Image from "next/image";

interface RecordClassCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

const recordClasses: RecordClassCard[] = [
  {
    id: "payroll-results",
    title: "Payroll results",
    description:
      "Payroll register, payroll summary, gross-to-net and earnings/deductions detail.",
    imageSrc: "/images/payroll-operation/12.png",
  },
  {
    id: "worker-statements",
    title: "Worker statements",
    description:
      "Payslips, earnings statements and YTD statements where supported.",
    imageSrc: "/images/payroll-operation/13.png",
  },
  {
    id: "employer-liabilities",
    title: "Employer liabilities",
    description:
      "Taxes, social contributions, benefits, garnishments and other employer obligations.",
    imageSrc: "/images/payroll-operation/14.png",
  },
  {
    id: "payment",
    title: "Payment",
    description:
      "Payment instruction summaries, funding requirements, status/return reports and settlement confirmation where available.",
    imageSrc: "/images/payroll-operation/15.png",
  },
  {
    id: "statutory",
    title: "Statutory",
    description:
      "Jurisdiction-specific filing outputs, contribution reports, certificates or acknowledgments where supported.",
    imageSrc: "/images/payroll-operation/16.png",
  },
  {
    id: "accounting",
    title: "Accounting",
    description:
      "Payroll journals, cost allocation, GL mapping exceptions and posting/reconciliation status.",
    imageSrc: "/images/payroll-operation/17.png",
  },
];

export default function RecordClassesTaxonomySection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#3EA3E0] uppercase font-mono">
            <span className="text-[#3EA3E0] font-bold">/</span>
            <span>RECORD CLASSES</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#07243B] leading-tight">
            A controlled taxonomy — never an unbounded list
          </h2>
        </div>

        {/* 3x2 Grid of Record Class Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recordClasses.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-xs transition-shadow flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full h-44 bg-slate-100 overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-start">
                <h3 className="text-base font-bold text-[#07243B]">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight Notice Container with Left Accent Border */}
        <div className="bg-white rounded-xl border border-slate-200 border-l-4 border-l-[#3EA3E0] p-5 shadow-2xs">
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            <strong className="font-bold text-[#07243B]">
              Never regenerate history in place.
            </strong>{" "}
            A historical final report is never silently regenerated using
            today's rules or data — it is reproduced deterministically, or a new
            version is created with explicit lineage and reason.
          </p>
        </div>
      </div>
    </section>
  );
}
