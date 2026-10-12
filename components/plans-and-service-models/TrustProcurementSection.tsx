"use client";

import React from "react";
import Link from "next/link";

interface TrustLink {
  title: string;
  description: string;
  href: string;
}

const trustLinks: TrustLink[] = [
  {
    title: "Security & Trust",
    description: "Controls and evidence — not inferred from a plan badge.",
    href: "/resources/security-trust",
  },
  {
    title: "Data Processing Addendum",
    description: "Contractual data-processing obligations.",
    href: "/legal/dpa",
  },
  {
    title: "Subprocessors",
    description: "Provider disclosure where partner/connected models apply.",
    href: "/legal/legal-center",
  },
  {
    title: "Service terms & SLA",
    description: "Approved contractual response commitments only.",
    href: "/legal/service-terms",
  },
];

export default function TrustProcurementSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-[#0A78C3] uppercase">
            <span className="w-[3px] h-3.5 rounded-[1px] bg-[#3B82F6]" />
            <span>Trust &amp; procurement handoff</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#082F49] leading-tight">
            Security, privacy and provider transparency.
          </h2>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
          {trustLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-white rounded-xl border border-slate-200 p-5 space-y-2 hover:border-[#0A78C3] transition-colors"
            >
              <h3 className="text-sm font-bold text-[#082F49]">{item.title}</h3>
              <p className="text-xs text-[#4E6172] leading-5">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        <p className="text-xs text-[#4E6172] leading-5">
          Plan tier never implies weaker baseline tenant isolation, auditability
          or data protection for lower-tier customers. Enterprise-specific
          controls such as SCIM are entitlements, not evidence of
          certification.
        </p>
      </div>
    </section>
  );
}
