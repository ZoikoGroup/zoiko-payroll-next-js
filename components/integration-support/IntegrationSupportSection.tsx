"use client";

import React from "react";

interface SupportDetailRow {
  label: string;
  value: React.ReactNode;
}

const supportDetails: SupportDetailRow[] = [
  { label: "Area", value: "Finance / ERP" },
  { label: "Issue", value: "Delivery — partial failure" },
  { label: "Impact", value: "4 records unmatched" },
  { label: "Safe ID", value: "corr-88213-04" },
  { label: "Owner", value: "Finance Integration Team" },
  {
    label: "Case state",
    value: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#FEF7E0] text-[#B06000]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B06000]" />
        Waiting Zoiko
      </span>
    ),
  },
];

export default function IntegrationSupportSection() {
  return (
    <section className="relative w-full min-h-[580px] flex items-center py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/footer-integrations/bg5.png"
          alt="Office background"
          className="w-full h-full object-cover"
        />
        {/* Dark Blue Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-[#0B2540]/80 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase">
              <span className="text-[#8FD0F2] font-bold">/</span>
              <span>INTEGRATION SUPPORT</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight text-white leading-tight">
              Get the right integration issue to the right team
            </h1>

            {/* Subtitle / Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
              Identify the affected integration, keep sensitive data out of
              public intake, reuse safe technical context, and route the issue
              to the right support owner with clear next steps
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#"
                className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] hover:bg-[#087BB5] text-white text-xs sm:text-sm font-semibold transition-colors shadow-lg"
              >
                Get integration support
              </a>
            </div>
          </div>

          {/* Right Column: Support Card (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 text-[#0F172A]">
              {/* Card Header Image / Banner */}
              <div className="relative overflow-hidden">
                <img
                  src="/images/footer-integrations/44.png"
                  alt="World map graphic header"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Body Details */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="divide-y divide-slate-100 font-mono text-xs sm:text-sm">
                  {supportDetails.map((detail, idx) => (
                    <div
                      key={idx}
                      className="py-3 flex items-center justify-between gap-4"
                    >
                      <span className="text-slate-400 font-sans text-xs">
                        {detail.label}
                      </span>
                      <span className="font-semibold text-[#07243B] text-right">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
