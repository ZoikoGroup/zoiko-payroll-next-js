"use client";

import React from "react";
import Image from "next/image";
import { Lock, ArrowRight } from "lucide-react";

interface RequestCard {
  imageSrc: string;
  imageAlt: string;
  badge: {
    label: string;
    dotColor: string;
    badgeStyle: string;
  };
  title: string;
  description: string;
  actionText: string;
}

const requestCards: RequestCard[] = [
  {
    imageSrc: "/images/pricing/3.png",
    imageAlt:
      "Person writing on paperwork representing certifications and audit reports",
    badge: {
      label: "Public / controlled",
      dotColor: "bg-[#20502F]",
      badgeStyle: "bg-[#E3F0E7] text-[#20502F] border border-[#20502F]/20",
    },
    title: "Certifications & audit reports",
    description:
      "Current status, scope and audit period from the verified registry.",
    actionText: "Visit the pricing Center",
  },
  {
    imageSrc: "/images/pricing/4.png",
    imageAlt: "Colleagues high-fiving over questionnaire workflow",
    badge: {
      label: "Self-service / assisted",
      dotColor: "bg-[#20502F]",
      badgeStyle: "bg-[#E3F0E7] text-[#20502F] border border-[#20502F]/20",
    },
    title: "Questionnaire workflow",
    description:
      "SIG, CAIQ or custom questionnaire intake through a secure upload or portal.",
    actionText: "Start a questionnaire",
  },
  {
    imageSrc: "/images/pricing/5.png",
    imageAlt: "Team in a meeting representing restricted evidence request",
    badge: {
      label: "NDA / verified access",
      dotColor: "bg-[#6B5A20]",
      badgeStyle: "bg-[#F1EAD8] text-[#6B5A20] border border-[#6B5A20]/20",
    },
    title: "Restricted evidence request",
    description:
      "Detailed pentest, audit or architecture evidence via secure data-room access.",
    actionText: "Request restricted access",
  },
];

export default function RequestEvidenceSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F8FA] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label with slanted dark slashes and #0A78C3 text */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              ASSURANCE LIBRARY / pricing CENTER
            </span>
          </div>

          {/* Title (31px) */}
          <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight max-w-xl">
            Request evidence through one controlled channel.
          </h2>
        </div>

        {/* 3-Column Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {requestCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors group"
            >
              {/* Card Image Header */}
              <div className="relative w-full h-44 bg-slate-100 overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
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
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A78C3] group-hover:underline cursor-pointer">
                      {card.actionText}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="bg-[#082F49] border border-[#07243B] rounded-2xl p-6 sm:p-7 flex items-start gap-4 shadow-lg text-white">
          <div className="w-8 h-8 text-[#F0C878] flex items-center justify-center shrink-0 shadow-inner mt-0.5">
            <Lock className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-bold text-white">
              Safe disclosure.
            </h4>
            <p className="text-xs text-slate-300 font-medium leading-relaxed">
              Sensitive evidence uses the approved controlled delivery channel —
              not ordinary email attachments — and only business-level context
              (company, role, product scope, requested evidence) is collected to
              start a review. No payroll data, credentials or secrets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
