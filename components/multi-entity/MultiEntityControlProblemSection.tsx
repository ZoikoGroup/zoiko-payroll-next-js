"use client";

import React from "react";
import Image from "next/image";
import {
  Scale,
  ClipboardList,
  Wallet,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

interface CapabilityCard {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const capabilityCards: CapabilityCard[] = [
  {
    icon: <Scale className="w-5 h-5 text-[#1A83C8]" />,
    title: "Legal responsibility",
    items: [
      "Entity-specific registrations",
      "Local statutory obligations",
      "Named signatories",
    ],
  },
  {
    icon: <ClipboardList className="w-5 h-5 text-[#1A83C8]" />,
    title: "Operations",
    items: [
      "Entity-specific calendars",
      "Different pay groups",
      "Owner & exception handling",
    ],
  },
  {
    icon: <Wallet className="w-5 h-5 text-[#1A83C8]" />,
    title: "Finance",
    items: [
      "Entity funding & currency",
      "Liabilities & GL mapping",
      "Entity-level reconciliation",
    ],
  },
  {
    icon: <UserCheck className="w-5 h-5 text-[#1A83C8]" />,
    title: "Access & governance",
    items: [
      "Scoped approval authority",
      "Entity-level permissions",
      "Audit & escalation paths",
    ],
  },
];

const checklistItems = [
  "Do you operate more than one legal entity?",
  "Different banks, calendars or approvers per entity?",
  "Different accounting/GL mappings per entity?",
  "Need group visibility without losing local ownership?",
];

export default function MultiEntityControlProblemSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Split Layout: Content & Hero Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-6 space-y-4">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#1A83C8] uppercase font-mono">
              <span className="text-[#1A83C8] font-bold">|</span>
              <span>THE CONTROL PROBLEM</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
              More legal entities multiply payroll responsibility — even when
              headcount doesn&apos;t change
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-2xl">
              Each new entity brings its own registrations, calendar, pay
              groups, approvers, exceptions, funding account, currency,
              liabilities and GL mapping. None of that scales linearly with
              people — it scales with entities.
            </p>
          </div>

          {/* Right Column: Graphic Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full h-[280px] sm:h-[320px] rounded-3xl overflow-hidden">
              <Image
                src="/images/multi-entity/1.png"
                alt="Business professionals in an office reviewing multi-entity documents"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilityCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-4 flex flex-col justify-start"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-xl bg-[#E3EEF7] text-[#156091] flex items-center justify-center shrink-0">
                {card.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-sm font-bold text-[#07243B]">{card.title}</h3>

              {/* Bullet List */}
              <ul className="space-y-2 text-xs text-slate-500 font-medium leading-normal">
                {card.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Checklist Banner */}
        <div className="bg-[#EBF3FB] rounded-2xl p-5 sm:p-6 border border-slate-200/60">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {checklistItems.map((text, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#1A83C8] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-[#07243B] leading-snug">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
