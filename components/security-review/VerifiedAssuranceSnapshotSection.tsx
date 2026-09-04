"use client";

import React from "react";
import { Info } from "lucide-react";

interface AssuranceCard {
  badge: {
    label: string;
    dotColor: string;
    badgeStyle: string;
  };
  title: string;
  description: string;
  footerAccess: string;
}

const assuranceCards: AssuranceCard[] = [
  {
    badge: {
      label: "Public summary",
      dotColor: "bg-[#0A78C3]",
      badgeStyle: "bg-[#E4F1FA] text-[#0A78C3]",
    },
    title: "SOC-type attestation",
    description:
      "Status and audit period resolve from the current assurance registry for the scoped product and region.",
    footerAccess: "Access: view summary / request full report",
  },
  {
    badge: {
      label: "Controlled access",
      dotColor: "bg-[#6B5A20]",
      badgeStyle: "bg-[#F1EAD8] text-[#6B5A20]",
    },
    title: "ISO-type certification",
    description:
      "Certificate and scope statement shared through verified-prospect or customer access where approved.",
    footerAccess: "Access: request via Trust Center",
  },
  {
    badge: {
      label: "Controlled access",
      dotColor: "bg-[#6B5A20]",
      badgeStyle: "bg-[#F1EAD8] text-[#6B5A20]",
    },
    title: "Penetration test attestation",
    description:
      "Executive summary available on request; detailed findings require NDA-restricted access.",
    footerAccess: "Access: NDA required",
  },
  {
    badge: {
      label: "Not currently verified",
      dotColor: "bg-[#D57A1F]",
      badgeStyle: "bg-[#E9D9C9] text-[#D57A1F]",
    },
    title: "Additional framework",
    description:
      "Shown only when applicable — the page never implies a certification that isn't currently held.",
    footerAccess: "Ask about roadmap during review",
  },
];

export default function VerifiedAssuranceSnapshotSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F8FA] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block with Right-aligned Subtext */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
                <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                  /
                </span>
                VERIFIED ASSURANCE SNAPSHOT
              </span>
            </div>

            {/* Title (31px) */}
            <h2 className="text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight max-w-2xl">
              A badge is a claim — it requires evidence.
            </h2>
          </div>

          {/* Right Subtext */}
          <p className="text-xs text-slate-400 font-medium pb-1 max-w-xs md:text-right">
            No certification is shown without current, verified, in-scope
            evidence.
          </p>
        </div>

        {/* 4-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {assuranceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-6 hover:border-slate-300 transition-colors"
            >
              {/* Card Top Section */}
              <div className="space-y-4">
                {/* Badge */}
                <div>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${card.badge.badgeStyle}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${card.badge.dotColor}`}
                    />
                    {card.badge.label}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Card Bottom / Access Footer */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-[10.5px] font-bold text-[#7C8CA0]">
                  {card.footerAccess}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="bg-[#E6F3FC]/70 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-xs">
          <div className="w-8 h-8 text-white flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-4 h-4 text-[#0A78C3]" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-bold text-[#082F49]">
              Badge rule.
            </h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Every card shows exact scope, assessor (when publishable),
              audit/validity period and last-verified date. Expired evidence is
              never shown as current.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
