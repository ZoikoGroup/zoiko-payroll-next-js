"use client";

import React from "react";
import {
  Clock,
  CreditCard,
  FileText,
  ShieldCheck,
  Lock,
  Shield,
  HelpCircle,
  Users,
  Globe,
} from "lucide-react";

interface QuickLinkItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const quickLinks: QuickLinkItem[] = [
  {
    title: "Pricing & plans",
    description: "Understand subscription scope and commercial model.",
    icon: <Clock className="w-5 h-5 text-[#0A78C3]" />,
  },
  {
    title: "Implementation pricing",
    description: "Understand one-time / project commercial scope.",
    icon: <CreditCard className="w-5 h-5 text-[#0A78C3]" />,
  },
  {
    title: "Standard legal terms",
    description: "Review baseline contract framework.",
    icon: <FileText className="w-5 h-5 text-[#0A78C3]" />,
  },
  {
    title: "Data Processing Agreement",
    description: "Review processor and privacy terms.",
    icon: <ShieldCheck className="w-5 h-5 text-[#0A78C3]" />,
  },
  {
    title: "Security review",
    description: "Assess security controls and evidence.",
    icon: <Lock className="w-5 h-5 text-[#0A78C3]" />,
  },
  {
    title: "Business continuity",
    description: "Assess resilience approach.",
    icon: <Shield className="w-5 h-5 text-[#0A78C3]" />,
  },
  {
    title: "Accessibility",
    description: "Review accessibility commitment and evidence.",
    icon: <HelpCircle className="w-5 h-5 text-[#0A78C3]" />,
  },
  {
    title: "Supplier onboarding",
    description: "Collect vendor-master, tax and invoice information.",
    icon: <Users className="w-5 h-5 text-[#0A78C3]" />,
  },
  {
    title: "Multi-jurisdiction pricing",
    description: "Understand local and global commercial layers.",
    icon: <Globe className="w-5 h-5 text-[#0A78C3]" />,
  },
];

export default function ProcurementQuickLinksSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF4F7] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              PROCUREMENT QUICK LINKS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07243B] tracking-tight">
            Jump straight to what your team needs.
          </h2>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex items-start gap-4 hover:border-slate-300 transition-colors"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-[9px] bg-[#E4F1FA] flex items-center justify-center shrink-0 border border-sky-100">
                {item.icon}
              </div>

              {/* Content Container */}
              <div className="space-y-1">
                <h3 className="text-[13px] font-bold text-[#07243B]">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
