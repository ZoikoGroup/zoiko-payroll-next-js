"use client";

import React from "react";
import {
  Lock,
  Check,
  CheckCircle2,
  Clock,
  ShieldQuestion,
  CreditCard,
} from "lucide-react";

interface TrustFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const trustFeatures: TrustFeature[] = [
  {
    id: "role-based-access",
    title: "Role-based access",
    description:
      "Least-privilege permissions enforced across every payroll action.",
    icon: Lock,
  },
  {
    id: "approval-decision-history",
    title: "Approval & decision history",
    description: "Every approval and decision tied to a user and a timestamp.",
    icon: Check,
  },
  {
    id: "change-history",
    title: "Change history",
    description:
      "Full change history for payroll-impacting data and configuration.",
    icon: CheckCircle2,
  },
  {
    id: "close-controls",
    title: "Close controls",
    description:
      "Payroll close controls with controlled reopening where authorized.",
    icon: Clock,
  },
  {
    id: "data-protection",
    title: "Data protection",
    description:
      "Encryption, retention and access logging per approved security architecture.",
    icon: ShieldQuestion,
  },
  {
    id: "exportable-records",
    title: "Exportable records",
    description:
      "Audit evidence exportable for finance, compliance and internal review.",
    icon: CreditCard,
  },
];

export default function TrustSecurityAuditabilitySection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
            <span className="text-[#0A78C3] font-bold">/</span>
            <span>TRUST, SECURITY & AUDITABILITY</span>
          </div>
        </div>

        {/* 3x2 Grid of Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {trustFeatures.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs hover:shadow-xs transition-shadow flex flex-col space-y-3"
              >
                {/* Icon Container */}
                <div className="w-9 h-9 rounded-xl bg-[#E0F2FE]/60 flex items-center justify-center text-[#0A78C3]">
                  <IconComponent className="w-4 h-4 stroke-[2.25]" />
                </div>

                {/* Content */}
                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-[#07243B]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-2">
          <button className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#07243B] text-xs sm:text-sm font-semibold transition-colors shadow-2xs cursor-pointer">
            Explore Trust and Security
          </button>
        </div>
      </div>
    </section>
  );
}
