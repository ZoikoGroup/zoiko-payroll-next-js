"use client";

import React from "react";
import Image from "next/image";
import {
  Menu,
  CheckCircle,
  TrendingUp,
  Eye,
  BarChart2,
  Shield,
} from "lucide-react";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureCard[] = [
  {
    id: "data",
    title: "Data",
    description:
      "Standardized employee, pay and change inputs collected and validated through one workflow.",
    icon: <Menu className="w-4 h-4 text-slate-700" />,
  },
  {
    id: "controls",
    title: "Controls",
    description:
      "Role-based approvals and maker-checker controls stay visible in the Zoiko operating layer.",
    icon: <CheckCircle className="w-4 h-4 text-slate-700" />,
  },
  {
    id: "approvals",
    title: "Approvals",
    description:
      "Run calendars, readiness checks and approval chains are governed through a common workflow.",
    icon: <TrendingUp className="w-4 h-4 text-slate-700" />,
  },
  {
    id: "status",
    title: "Status",
    description:
      "Every stage of the run — from preparation to reconciliation — is visible in real time.",
    icon: <Eye className="w-4 h-4 text-slate-700" />,
  },
  {
    id: "reporting",
    title: "Reporting",
    description:
      "Partner output is normalized into common payroll result and reporting structures.",
    icon: <BarChart2 className="w-4 h-4 text-slate-700" />,
  },
  {
    id: "audit-trail",
    title: "Audit trail",
    description:
      "Run artifacts, approvals, reports and service events are retained in the governed record set.",
    icon: <Shield className="w-4 h-4 text-slate-700" />,
  },
];

export default function ConnectedPayrollSection() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      {/* Background Image with Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/partner-supported/bg.png"
          alt="Team meeting background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#092236]/85" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#38BDF8] uppercase font-mono">
            <span>/</span>
            <span>WHAT STAYS CONNECTED</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
            The parts of payroll that never go dark.
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#FFFFFF26] border border-white/20 rounded-2xl p-6 backdrop-blur-md transition-all hover:border-white/40 flex flex-col justify-start space-y-4"
            >
              {/* Icon Container */}
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-xs">
                {feature.icon}
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-200/90 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
