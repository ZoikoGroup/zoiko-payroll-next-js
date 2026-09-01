"use client";

import React from "react";
import { Check } from "lucide-react";

interface TrustFeature {
  id: string;
  title: string;
  description: string;
}

const trustFeatures: TrustFeature[] = [
  {
    id: "least-privilege",
    title: "Least-privilege access",
    description: "Scoped to role and purpose.",
  },
  {
    id: "tenant-isolation",
    title: "Tenant isolation",
    description: "Data stays within its tenant.",
  },
  {
    id: "encryption",
    title: "Encryption & retention",
    description: "Approved controls throughout.",
  },
  {
    id: "sensitive-value",
    title: "Sensitive-value minimization",
    description: "Masked by default.",
  },
  {
    id: "audit-evidence",
    title: "Audit evidence",
    description: "Every change, actor and time.",
  },
  {
    id: "authorized-exports",
    title: "Authorized exports",
    description: "Permission and purpose retained.",
  },
];

export default function TrustSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
            <span className="text-[#0A78C3] font-bold">—</span>
            <span>TRUST</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B] leading-tight">
            Built for control, not just convenience
          </h2>
        </div>

        {/* 3-Column Grid of Uniform Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustFeatures.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl border border-slate-200/80 bg-white flex items-start gap-3.5"
            >
              <div className="mt-0.5 shrink-0 text-[#0A78C3]">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-[#07243B]">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
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
