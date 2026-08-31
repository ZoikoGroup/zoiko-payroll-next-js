"use client";

import React, { useState } from "react";

export default function IdentityAccessIntegrationsSection() {
  const [isRegistryBacked, setIsRegistryBacked] = useState(true);

  return (
    <section className="w-full bg-gradient-to-b from-[#F8FAFD] to-[#F8FAFD] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Header Block */}
            <div className="space-y-3">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
                <span className="w-4 h-[2px] bg-[#0A8FD0] inline-block" />
                <span>IDENTITY & ACCESS INTEGRATIONS</span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-[38px] font-bold tracking-tight text-[#07243B] leading-[1.15]">
                Connect Enterprise Identity Without Blurring Access Control
              </h2>
            </div>

            {/* Subtitle / Paragraph */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              Integrate approved identity providers while keeping sign-in,
              provisioning and authorization explicit and separately owned.
            </p>

            {/* Note Callout Box */}
            <div className="bg-[#E6F0FA] p-4 sm:p-5 border-l-4 border-[#0A8FD0] shadow-xs">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong className="font-bold text-[#07243B]">Note:</strong>{" "}
                Federation, provisioning and role mapping vary by system and
                configuration.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#"
                className="px-6 py-3.5 bg-gradient-to-r from-[#1D77B4] to-[#0A5F9E] hover:from-[#176296] hover:to-[#084D82] text-white text-xs font-bold rounded-xl shadow-md transition-all text-center"
              >
                Check your identity system
              </a>
              <a
                href="#"
                className="px-6 py-3.5 bg-[#E2EAF2] hover:bg-[#D5E1ED] text-[#07243B] text-xs font-bold rounded-xl transition-all text-center"
              >
                Talk to a specialist
              </a>
            </div>
          </div>

          {/* Right Column - Identity Card Preview */}
          <div className="lg:col-span-6 relative">
            {/* Floating Toggle Header */}
            <div className="absolute -top-1 -left-5 z-10 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-200/80 shadow-sm flex items-center gap-2 text-[11px] font-semibold text-slate-700">
              <span>Registry-backed</span>
              <button
                type="button"
                onClick={() => setIsRegistryBacked(!isRegistryBacked)}
                className={`w-7 h-4 rounded-full transition-colors relative focus:outline-none cursor-pointer ${
                  isRegistryBacked ? "bg-[#0A8FD0]" : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform ${
                    isRegistryBacked ? "translate-x-3" : "translate-x-0"
                  }`}
                />
              </button>
              <span className="text-slate-400 font-normal">Synthetic</span>
            </div>

            {/* Main Interactive Status Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xl space-y-6 pt-10">
              {/* Card Title & Status Badge */}
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
                  Provider — Okta (example)
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#E6F4EA] text-[#137333]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#137333]" />
                  Available
                </span>
              </div>

              {/* Status Matrix Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Item 1 */}
                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600">
                    Federation
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#E6F4EA] text-[#137333]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#137333]" />
                    Supported
                  </span>
                </div>

                {/* Item 2 */}
                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600">
                    Provisioning
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#E6F4EA] text-[#137333]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#137333]" />
                    Supported
                  </span>
                </div>

                {/* Item 3 */}
                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600">
                    Lifecycle sync
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#FEF7E0] text-[#B06000]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B06000]" />
                    Validation req.
                  </span>
                </div>

                {/* Item 4 */}
                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600">
                    Role mapping
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#E8F0FE] text-[#1A73E8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8]" />
                    Ready
                  </span>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-400">
                <span>Last verified 3d ago</span>
                <span>0 exceptions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
