"use client";

import React from "react";
import {
  Shield,
  Lock,
  UserCheck,
  CheckCircle2,
  Activity,
  Zap,
  RefreshCw,
  Users,
  Cpu,
} from "lucide-react";

interface DomainItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const domains: DomainItem[] = [
  {
    icon: <Shield className="w-5 h-5 text-[#0A78C3]" />,
    title: "Security governance",
    description:
      "Policies, risk ownership, control review and workforce security.",
  },
  {
    icon: <Lock className="w-5 h-5 text-[#0A78C3]" />,
    title: "Data protection",
    description:
      "Encryption, key management and payroll-specific data controls.",
  },
  {
    icon: <UserCheck className="w-5 h-5 text-[#0A78C3]" />,
    title: "Identity & access",
    description: "Authentication, SSO, authorization and privileged access.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-[#0A78C3]" />,
    title: "Application security",
    description: "Secure SDLC, code review, testing and change management.",
  },
  {
    icon: <Activity className="w-5 h-5 text-[#0A78C3]" />,
    title: "Vulnerability management",
    description: "Scanning, penetration testing, remediation and disclosure.",
  },
  {
    icon: <Zap className="w-5 h-5 text-[#0A78C3]" />,
    title: "Monitoring & detection",
    description: "Audit logging, security telemetry and alerting.",
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-[#0A78C3]" />,
    title: "Resilience",
    description: "Business continuity, backup and disaster recovery.",
  },
  {
    icon: <Users className="w-5 h-5 text-[#0A78C3]" />,
    title: "Third-party & subprocessors",
    description: "Provider and payroll-partner security due diligence.",
  },
  {
    icon: <Cpu className="w-5 h-5 text-[#0A78C3]" />,
    title: "AI security & governance",
    description: "AI feature boundaries, data controls and human approval.",
  },
];

export default function SecurityControlTaxonomySection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF4F7] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              SECURITY CONTROL TAXONOMY
            </span>
          </div>

          {/* Title (31px) */}
          <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight max-w-xl">
            Nine domains, each independently evidenced.
          </h2>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {domains.map((domain, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-full border border-[#3A9AD6] flex items-center justify-center shrink-0">
                {domain.icon}
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
                  {domain.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {domain.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
