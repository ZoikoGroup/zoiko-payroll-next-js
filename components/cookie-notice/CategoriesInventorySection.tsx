"use client";

import React from "react";
import { Lock, BarChart3, HelpCircle, Leaf } from "lucide-react";

interface CategoryCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  badgeText: string;
  iconBg: string;
  iconColor: string;
}

const categories: CategoryCard[] = [
  {
    icon: <Lock className="w-4 h-4" />,
    title: "Essential",
    description:
      "Required for core site and product functions to operate — cannot be disabled from this notice.",
    badgeText: "4 technologies",
    iconBg: "bg-sky-100/70",
    iconColor: "text-[#0284C7]",
  },
  {
    icon: <BarChart3 className="w-4 h-4" />,
    title: "Analytics",
    description:
      "Helps understand aggregate usage patterns, where approved and currently deployed.",
    badgeText: "2 technologies",
    iconBg: "bg-sky-100/70",
    iconColor: "text-[#0284C7]",
  },
  {
    icon: <HelpCircle className="w-4 h-4" />,
    title: "Preferences",
    description:
      "Remembers approved display/language/session choices where currently deployed.",
    badgeText: "1 technology",
    iconBg: "bg-sky-100/70",
    iconColor: "text-[#0284C7]",
  },
  {
    icon: <Leaf className="w-4 h-4" />,
    title: "Marketing",
    description:
      "Not currently deployed on this scope — shown only if the registry adds an approved record.",
    badgeText: "0 technologies",
    iconBg: "bg-sky-100/70",
    iconColor: "text-[#0284C7]",
  },
];

interface InventoryRow {
  technology: string;
  type: string;
  provider: string;
  category: string;
  duration: string;
  party: string;
}

const inventoryData: InventoryRow[] = [
  {
    technology: "session_id",
    type: "Cookie",
    provider: "Zoiko Payroll",
    category: "Essential",
    duration: "Session",
    party: "First-party",
  },
  {
    technology: "auth_token",
    type: "Cookie",
    provider: "Zoiko Payroll",
    category: "Essential",
    duration: "30 days",
    party: "First-party",
  },
  {
    technology: "_analytics_id",
    type: "Cookie",
    provider: "Approved analytics provider",
    category: "Analytics",
    duration: "13 months",
    party: "Third-party",
  },
  {
    technology: "ui_lang_pref",
    type: "Local storage",
    provider: "Zoiko Payroll",
    category: "Preferences",
    duration: "Until cleared",
    party: "First-party",
  },
];

export default function CategoriesInventorySection() {
  return (
    <section id="categories-inventory" className="scroll-mt-8 space-y-8">
      {/* Title & Description Header */}
      <div className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
          Categories & current technology inventory
        </h2>
        <p className="text-[14.5px] text-[#5B646B] leading-relaxed">
          Category labels follow the approved Consent Policy Registry for this
          scope — they are not a hard-coded standard model. Counts reflect
          current public records after scope/locale filters, not draft
          tag-manager configuration.
        </p>
      </div>

      {/* 2x2 Category Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="space-y-3">
              {/* Icon & Title Header */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${cat.iconBg} ${cat.iconColor}`}
                >
                  {cat.icon}
                </div>
                <h3 className="text-sm font-bold text-[#0F172A]">
                  {cat.title}
                </h3>
              </div>

              {/* Category Description */}
              <p className="text-[13px] text-[#5B646B] leading-relaxed">
                {cat.description}
              </p>
            </div>

            {/* Badge Pill */}
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[#0F172A] bg-slate-100">
                {cat.badgeText}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="space-y-4 pt-2">
        {/* Table Subtitle */}
        <h3 className="text-sm font-semibold text-[#0F172A]">
          Current inventory{" "}
          <span className="font-normal text-[#5B646B]">
            — illustrative structure; exact rows come from the registry.
          </span>
        </h3>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#F1F5F9]/60 text-[#0F172A] font-bold uppercase tracking-wider text-[10px]">
                <th className="py-3.5 px-4">TECHNOLOGY</th>
                <th className="py-3.5 px-4">TYPE</th>
                <th className="py-3.5 px-4">PROVIDER</th>
                <th className="py-3.5 px-4">CATEGORY</th>
                <th className="py-3.5 px-4">DURATION</th>
                <th className="py-3.5 px-4">PARTY</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[#0F172A] font-normal">
              {inventoryData.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="py-3.5 px-4 font-medium text-[#0F172A]">
                    {row.technology}
                  </td>
                  <td className="py-3.5 px-4 text-[#5B646B]">{row.type}</td>
                  <td className="py-3.5 px-4 text-[#5B646B]">{row.provider}</td>
                  <td className="py-3.5 px-4 text-[#5B646B]">{row.category}</td>
                  <td className="py-3.5 px-4 text-[#5B646B]">{row.duration}</td>
                  <td className="py-3.5 px-4 text-[#5B646B]">{row.party}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote */}
        <p className="text-[12px] text-[#94A3B8] leading-normal pt-1">
          An unknown or unclassified technology is treated as an exception — it
          is never published as current or hidden under "Other."
        </p>
      </div>
    </section>
  );
}
