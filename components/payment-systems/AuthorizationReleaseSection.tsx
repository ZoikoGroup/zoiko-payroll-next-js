"use client";

import React from "react";
import Image from "next/image";
import { Check, Clock, TrendingUp, Activity } from "lucide-react";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: <Clock className="w-5 h-5 text-[#0A8FD0]" />,
    title: "Cutoff & value date",
    description:
      "Cutoff is provider, bank and rail specific. Requested execution date, provider-accepted date and value date can all differ — and holidays or weekends are country and rail specific.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-[#0A8FD0]" />,
    title: "Late release",
    description:
      "A late release may move the value date or trigger a review step, rather than silently proceeding on the originally requested schedule.",
  },
  {
    icon: <Activity className="w-5 h-5 text-[#0A8FD0]" />,
    title: "Funding shortfall",
    description:
      "A funding shortfall is treated as blocking or review-required where the configuration supports that control — never processed silently.",
  },
];

const bulletPoints: string[] = [
  "Auto-release only fires where an explicit, approved policy supports it.",
  "Separation of duties is supported — no single-person shortcut is assumed.",
  "Funding state is tracked separately from payment state, and is configuration-specific.",
];

export default function AuthorizationReleaseSection() {
  return (
    <section className="w-full bg-[#f5f8fa] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text & Checklist */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>AUTHORIZATION & RELEASE</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#0F172A] leading-tight">
              Approval and release stay separate, on purpose
            </h2>

            {/* Body Paragraph */}
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
              Payroll approval belongs to payroll policy. Payment release is a
              distinct, separately configured step — and external acceptance by
              a provider never substitutes for internal approval.
            </p>

            {/* Checklist */}
            <ul className="space-y-3.5 pt-2">
              {bulletPoints.map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#0A8FD0] stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-600 leading-snug">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column Image Container */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/footer-integrations/27.png"
                alt="Executive reviewing financial paper charts at office desk"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom 3-Column Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/70 shadow-xs flex flex-col space-y-4"
            >
              {/* Circular Icon Container */}
              <div className="w-10 h-10 rounded-full border border-[#3A9AD6] text-[#0A78C3] flex items-center justify-center shrink-0">
                {card.icon}
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-[19px] font-extrabold text-[#082F49]">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
