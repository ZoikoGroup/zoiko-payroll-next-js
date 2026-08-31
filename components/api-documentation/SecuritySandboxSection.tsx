"use client";

import React from "react";
import Image from "next/image";

export default function SecuritySandboxSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl border border-slate-200/80">
              <Image
                src="/images/footer-integrations/36.png"
                alt="Developer interacting with a laptop and smartphone in a modern workspace"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Header Block */}
            <div className="space-y-3">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
                <span className="text-base leading-none">/</span>
                <span>SECURITY & SANDBOX</span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
                Never fabricate a sandbox
              </h2>
            </div>

            {/* Body Description */}
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-lg">
              Secrets are never placed in URL examples, logs, screenshots,
              public forms or analytics. Payroll and PII examples throughout
              this documentation are synthetic only. Transport, storage and
              credential-rotation claims come only from approved Security and
              Trust evidence.
            </p>

            {/* Callout Box with Cyan Left Accent Line */}
            <div className="bg-white rounded-xl p-6 sm:p-7 border-l-4 border-l-[#0A8FD0] border border-slate-200/80 shadow-xs relative overflow-hidden flex items-start">
              {/* Left Accent Bar */}
              {/* <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A8FD0]" /> */}

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-2 sm:pl-3">
                Interactive Try/Sandbox is shown only where approved, using a
                secure developer flow with requests visibly targeting the
                selected environment. Read-only demo mode may use synthetic
                canned responses; dangerous mutations require explicit
                confirmation.
              </p>
            </div>

            {/* Action Button */}
            <div>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-bold text-[#07243B] shadow-xs transition-colors"
              >
                Explore Trust and Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
