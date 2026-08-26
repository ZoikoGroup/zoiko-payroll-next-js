"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface TaskRouterCard {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const taskRouterCards: TaskRouterCard[] = [
  {
    title: "Privacy & Cookies",
    description: "How your data is handled, and cookie controls.",
    linkText: "Go to Privacy & Cookies",
    href: "/privacy",
  },
  {
    title: "Website Use",
    description: "Terms for browsing and using this website.",
    linkText: "Go to Website Terms",
    href: "/terms",
  },
  {
    title: "Customer / Service Terms",
    description: "Standard terms for using Zoiko Payroll.",
    linkText: "Go to Service Terms",
    href: "/service-terms",
  },
  {
    title: "Data Processing / DPA",
    description: "Terms covering customer data processing.",
    linkText: "Go to DPA",
    href: "/dpa",
  },
  {
    title: "Acceptable Use",
    description: "Approved rules for using the service.",
    linkText: "Go to Acceptable Use",
    href: "/aup",
  },
  {
    title: "Accessibility",
    description: "Our accessibility statement and feedback route.",
    linkText: "Go to Accessibility",
    href: "/accessibility",
  },
  {
    title: "Legal Notices",
    description: "Entity, copyright and trademark notices.",
    linkText: "Go to Legal Notices",
    href: "/legal-notices",
  },
  {
    title: "Sitemap",
    description: "A full map of this site's pages.",
    linkText: "Go to Sitemap",
    href: "/sitemap",
  },
];

export default function QuickTaskRouterSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Section */}
        <div className="space-y-3 max-w-3xl">
          {/* Tag Line */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
            <span className="w-3 h-0.5 bg-[#2F6FED]" />
            <span>QUICK TASK ROUTER</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Routed by task — not by legal jargon
          </h2>
        </div>

        {/* 4-Column Grid for Task Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {taskRouterCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100/90 shadow-sm flex flex-col justify-between space-y-5 hover:shadow-md transition-shadow"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2F6FED] hover:text-[#0369A1] transition-colors"
                >
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
