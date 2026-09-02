"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface TopicCard {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  linkText: string;
}

const topicsData: TopicCard[] = [
  {
    title: "Payroll cycle",
    description:
      "How inputs, cutoffs and pay dates flow from calculation to payday across jurisdictions.",
    tags: ["Cutoffs", "Cadence"],
    imageSrc: "/images/country-guides/3.png",
    linkText: "Browse cycle guidance",
  },
  {
    title: "Taxes & contributions",
    description:
      "Withholding structures and social-insurance splits between employer and employee.",
    tags: ["Withholding", "Social insurance"],
    imageSrc: "/images/country-guides/4.png",
    linkText: "Browse tax guidance",
  },
  {
    title: "Payslips & filings",
    description:
      "Required payslip content and the statutory reports each authority expects.",
    tags: ["Payslips", "Filings"],
    imageSrc: "/images/country-guides/5.png",
    linkText: "Browse filing guidance",
  },
  {
    title: "Payments",
    description:
      "Local payment currencies, banking conventions and cutoff/settlement context.",
    tags: ["Banking", "FX context"],
    imageSrc: "/images/country-guides/6.png",
    linkText: "Browse Payment guidance",
  },
  {
    title: "Year-end",
    description:
      "Tax-year boundaries, annual reconciliation and employee year-end statements.",
    tags: ["Reconciliation", "Annual forms"],
    imageSrc: "/images/country-guides/7.png",
    linkText: "Browse year end guidance",
  },
  {
    title: "Employer Set-up",
    description:
      "Whether local registration and authority relationships typically drive payroll.",
    tags: ["Registration", "Authorities"],
    imageSrc: "/images/country-guides/8.png",
    linkText: "Browse set-up guidance",
  },
];

export default function PopularPayrollTopicsSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>POPULAR PAYROLL TOPICS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            Browse guidance by payroll subject.
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Topic landing pages exist only where meaningful, maintained content
            is available across guides.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topicsData.map((topic, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                {/* Image Thumbnail */}
                <div className="relative w-20 sm:w-24 aspect-[4/5] rounded-xl overflow-hidden shrink-0 bg-slate-100">
                  <Image
                    src={topic.imageSrc}
                    alt={topic.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Card Info */}
                <div className="space-y-2 flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
                    {topic.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed line-clamp-3">
                    {topic.description}
                  </p>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {topic.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="bg-slate-500/80 text-white text-[10px] font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Link Footer */}
              <div className="pt-4 border-t border-slate-100 mt-4 text-right">
                <button className="text-[11px] font-bold text-[#0A8FD0] hover:text-[#076BA0] transition-colors inline-flex items-center gap-1 group">
                  <span>{topic.linkText}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
