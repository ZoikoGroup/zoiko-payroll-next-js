"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface SpecCardProps {
  title: string;
  description: string;
}

const specCards: SpecCardProps[] = [
  {
    title: "Stable subject ID",
    description: "Email/login alone isn't durable identity.",
  },
  {
    title: "Explicit tenant/domain",
    description: "Unknown domain rejects safely.",
  },
  {
    title: "Duplicate identity blocked",
    description: "Requires manual review — no auto-link.",
  },
  {
    title: "Account merge",
    description: "High-risk; requires explicit governance.",
  },
];

export default function AuthVsAuthzSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Header Block */}
            <div className="space-y-3">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
                <span className="w-4 h-[2px] bg-[#0A8FD0] inline-block" />
                <span>AUTH VS AUTHZ</span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
                Successful SSO can&apos;t bypass product permissions
              </h2>
            </div>

            {/* Subtitle / Paragraph */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              Authentication proves identity. Authorization is governed
              separately by Zoiko Payroll.
            </p>

            {/* Top 2 Status Comparison Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Authentication Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#E8F0FE] text-[#1A73E8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8]" />
                  Authentication
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  Approved IdP or Zoiko sign-in path. Proves who signed in.
                </p>
              </div>

              {/* Authorization Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#E6F4EA] text-[#137333]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#137333]" />
                  Authorization
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  Zoiko role and entitlement governance. Proves what&apos;s
                  permitted.
                </p>
              </div>
            </div>

            {/* Bottom 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {specCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0A8FD0] shrink-0 stroke-[2.5]" />
                    <h3 className="text-xs font-bold text-[#07243B]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-500 pl-5 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl border border-slate-200/80">
              <Image
                src="/images/footer-integrations/38.png"
                alt="Security analysts collaborating over system permissions and identity graphs"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
