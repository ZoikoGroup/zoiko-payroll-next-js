"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface MinimizationItem {
  text: string;
}

const minimizationList: MinimizationItem[] = [
  { text: "Only approved fields/domains configured" },
  { text: "No credentials or secrets in public forms" },
  { text: "Encryption claims evidence-backed only" },
];

const connectionHealthStatus: string[] = [
  "Connected",
  "Setup incomplete",
  "Attention needed",
  "Paused",
  "Disconnected",
  "Stale evidence",
];

export default function SecurityPrivacySection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column: Text Block */}
          <div className="space-y-4">
            {/* Eyebrow Label: Color #2F6FED, Size text-xs */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
              <span className="w-3 h-0.5 bg-[#2F6FED]" />
              <span>SECURITY, PRIVACY + CONNECTION HEALTH</span>
            </div>

            {/* Main Title: Size 26px */}
            <h2 className="text-[26px] font-bold text-[#0F172A] tracking-tight leading-snug">
              Only approved fields. Never secrets, in any form
            </h2>

            {/* Subtitle: Size text-sm */}
            <p className="text-sm text-[#5B646B] leading-relaxed">
              Only approved and necessary fields are shared across the system.
              Passwords, tokens, credentials, and other sensitive secrets are
              never exposed.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm border border-slate-100">
            <Image
              src="/images/footer-integrations/5.png"
              alt="Team reviewing enterprise security dashboard and connection data in conference room"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Data Minimization Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="p-5 bg-[#E6F4FE]/60 border-b border-slate-200/60">
              <h3 className="text-sm font-bold text-[#0F172A]">
                Data minimization
              </h3>
            </div>
            <div className="p-6 divide-y divide-slate-100">
              {minimizationList.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-0 last:pb-0 flex items-center gap-3 text-xs sm:text-sm text-[#0F172A] font-medium"
                >
                  <div className="w-5 h-5 rounded-md bg-[#DCFCE7] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#16A34A] stroke-[3]" />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connection Health Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-start">
            <div className="p-5 bg-[#E6F4FE]/60 border-b border-slate-200/60">
              <h3 className="text-sm font-bold text-[#0F172A]">
                Connection health
              </h3>
            </div>
            <div className="p-6 flex flex-wrap gap-2.5 items-start">
              {connectionHealthStatus.map((status, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium text-slate-600 bg-white border border-slate-200/80 shadow-2xs"
                >
                  {status}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
