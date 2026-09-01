"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkText: string;
  linkHref: string;
}

const pillTags: string[] = [
  "Unified payroll cycle",
  "Role-based control",
  "Exception visibility",
  "Audit-ready records",
];

const featureCards: FeatureCard[] = [
  {
    id: "payroll-processing",
    title: "Payroll processing",
    description: "Run and manage payroll cycles from prepare through close.",
    imageSrc: "/images/workspace/1.png",
    imageAlt: "Team collaborating on payroll processing",
    linkText: "Explore Payroll Processing",
    linkHref: "#explore-payroll-processing",
  },
  {
    id: "inputs-validation",
    title: "Inputs and validation",
    description:
      "Confirm payroll inputs are complete and accurate before calculation.",
    imageSrc: "/images/workspace/2.png",
    imageAlt: "Reviewing data inputs and validation documents",
    linkText: "Explore Inputs and Validation",
    linkHref: "#explore-inputs-validation",
  },
  {
    id: "calculations",
    title: "Calculations",
    description:
      "Run configured calculations with visible exceptions and variances.",
    imageSrc: "/images/workspace/3.png",
    imageAlt: "Payroll folders and overtime calculation worksheets",
    linkText: "Explore Calculations",
    linkHref: "#explore-calculations",
  },
  {
    id: "approvals",
    title: "Approvals",
    description:
      "Route payroll for review and authorization with a clear audit trail.",
    imageSrc: "/images/workspace/4.png",
    imageAlt: "Executives discussing payroll approvals in a meeting",
    linkText: "Explore Approvals",
    linkHref: "#explore-approvals",
  },
  {
    id: "deductions-adjustments",
    title: "Deductions and adjustments",
    description:
      "Manage recurring and one-time deductions with full traceability.",
    imageSrc: "/images/workspace/5.png",
    imageAlt: "Finance specialist using calculator for deductions",
    linkText: "Explore Deductions",
    linkHref: "#explore-deductions",
  },
  {
    id: "payments-orchestration",
    title: "Payments orchestration",
    description: "Coordinate configured funding and disbursement workflows.",
    imageSrc: "/images/workspace/6.png",
    imageAlt: "Digital payments network and security overlay",
    linkText: "Explore Payments",
    linkHref: "#explore-payments",
  },
  {
    id: "payroll-close-audit",
    title: "Payroll close and audit",
    description:
      "Close periods with controlled reopening and full change history.",
    imageSrc: "/images/workspace/7.png",
    imageAlt: "Auditors reviewing financial charts and close reports",
    linkText: "Explore Close and Audit",
    linkHref: "#explore-close-audit",
  },
  {
    id: "records-reports",
    title: "Records and reports",
    description:
      "Access payroll records and reporting for finance and compliance.",
    imageSrc: "/images/workspace/8.png",
    imageAlt: "Organizing payroll compliance reports and documents",
    linkText: "Explore Records and Reports",
    linkHref: "#explore-records-reports",
  },
];

export default function DirectAnswerWorkspaceSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Top Direct Answer Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          {/* Eyebrow Tag */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
            <span className="text-[#0A78C3] font-bold">/</span>
            <span>DIRECT ANSWER</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B]">
            What is a payroll workspace?
          </h2>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
            Zoiko Payroll Workspace is the operating center for preparing,
            reviewing, approving, paying, closing and auditing payroll. It
            brings payroll status, employee pay data, exceptions, approvals,
            payment workflows, records and reporting into one governed
            experience.
          </p>

          {/* Pill Tags Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {pillTags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#07243B]">
            Everything your payroll team needs to move a pay cycle forward.
          </h3>
        </div>

        {/* Feature Cards Grid (3 Columns Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
            >
              {/* Card Image Header */}
              <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-100">
                <img
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-[#07243B]">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                    {card.description}
                  </p>
                  <a
                    href={card.linkHref}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A78C3] hover:text-[#0863A1] transition-colors"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
