"use client";

import React from "react";
import Link from "next/link";
import {
  DollarSign,
  HelpCircle,
  ShieldCheck,
  FileText,
  MoreHorizontal,
  AlertTriangle,
} from "lucide-react";

interface RouteCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const routesData: RouteCard[] = [
  {
    title: "Sales",
    description:
      "Product, pricing, demo, procurement or global payroll questions.",
    icon: <DollarSign className="w-4 h-4 text-[#0284C7]" />,
  },
  {
    title: "Support",
    description: "Existing-customer product or account troubleshooting.",
    icon: <HelpCircle className="w-4 h-4 text-[#0284C7]" />,
  },
  {
    title: "Privacy",
    description: "Data-handling questions or a privacy-related request.",
    icon: <ShieldCheck className="w-4 h-4 text-[#0284C7]" />,
  },
  {
    title: "Press",
    description: "Journalist or analyst inquiries, interviews, fact-checks.",
    icon: <FileText className="w-4 h-4 text-[#0284C7]" />,
  },
  {
    title: "General",
    description: "Anything that doesn't fit the routes above.",
    icon: <MoreHorizontal className="w-4 h-4 text-[#0284C7]" />,
  },
];

interface AlertNotice {
  prefix: string;
  linkText: string;
  href: string;
}

const alertNotices: AlertNotice[] = [
  {
    prefix: "Service down or degraded",
    linkText: "System Status",
    href: "/status",
  },
  {
    prefix: "Security vulnerability",
    linkText: "Responsible Disclosure",
    href: "/responsible-disclosure",
  },
  {
    prefix: "Legal notice / subpoena",
    linkText: "Legal route",
    href: "/legal",
  },
];

export default function ChooseYourRouteSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Heading */}
        <div>
          <h2 className="text-2xl sm:text-[28px] font-bold text-[#0F172A] tracking-tight">
            Choose your route
          </h2>
        </div>

        {/* 5-Column Route Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {routesData.map((route, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow space-y-3 flex flex-col justify-start"
            >
              {/* Icon Bubble */}
              <div className="w-8 h-8 rounded-full bg-[#F0F9FF] flex items-center justify-center shrink-0">
                {route.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
                  {route.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {route.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions Warning Text */}
        <p className="text-xs text-[#64748B]">
          Have this ready: name, business email, organization and a short topic.{" "}
          <strong className="font-semibold text-[#DC2626]">
            Never include
          </strong>{" "}
          payroll exports, credentials or bank/tax data.
        </p>

        {/* 3-Column Yellow Alert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {alertNotices.map((notice, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#FEF3C7]/60 border border-[#FDE68A] p-4 flex items-center gap-2 text-xs text-[#78350F]"
            >
              <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0" />
              <span>
                <strong className="font-semibold">{notice.prefix}</strong> →{" "}
                <Link
                  href={notice.href}
                  className="font-bold underline decoration-1 underline-offset-2 hover:text-[#92400E] transition-colors"
                >
                  {notice.linkText}
                </Link>
              </span>
            </div>
          ))}
        </div>

        {/* Light Blue Summary Callout Box */}
        <div className="rounded-2xl bg-[#EEF6FC] border border-[#E4F1FB] p-5 text-xs sm:text-sm text-[#132C44] leading-relaxed">
          <strong className="font-bold text-[#132C44]">Quick answer:</strong>{" "}
          Sales = product/pricing. Support = existing-customer help. Privacy =
          data requests. Press = media. General = everything else. Live service
          issues go to System Status; vulnerabilities go to Responsible
          Disclosure.
        </div>
      </div>
    </section>
  );
}
