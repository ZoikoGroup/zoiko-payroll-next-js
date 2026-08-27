"use client";

import React from "react";

export default function CookiesMarketingSection() {
  return (
    <section id="cookies-marketing" className="scroll-mt-8 space-y-6">
      {/* Divider */}
      <div className="border-t border-slate-100 pt-8">
        {/* Title & Introduction */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
            Cookies, marketing & security — kept separate
          </h2>
          <p className="text-[14.5px] text-[#5B646B] leading-relaxed max-w-3xl">
            This notice provides only a high-level cookie handoff. Three
            distinct functions stay separate on purpose:
          </p>
        </div>
      </div>

      {/* 2x2 Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: Cookie Notice */}
        <div className="bg-[#E9F0F8] rounded-2xl p-6 space-y-2">
          <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
            Cookie Notice
          </h3>
          <p className="text-[12.5px] text-[#5B646B] leading-relaxed">
            Owns the detailed cookie and storage-technology disclosure.
          </p>
        </div>

        {/* Card 2: Cookie Settings */}
        <div className="bg-[#E9F0F8] rounded-2xl p-6 space-y-2">
          <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
            Cookie Settings
          </h3>
          <p className="text-[12.5px] text-[#5B646B] leading-relaxed">
            Owns your operational preference controls — separate from this
            notice.
          </p>
        </div>

        {/* Card 3: Trust and Security */}
        <div className="bg-[#E9F0F8] rounded-2xl p-6 space-y-2">
          <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
            Trust and Security
          </h3>
          <p className="text-[12.5px] text-[#5B646B] leading-relaxed">
            Owns security controls and evidence; this notice owns disclosure
            only.
          </p>
        </div>

        {/* Card 4: Marketing communications */}
        <div className="bg-[#E9F0F8] rounded-2xl p-6 space-y-2">
          <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
            Marketing communications
          </h3>
          <p className="text-[12.5px] text-[#5B646B] leading-relaxed">
            Service communications are distinguished from promotional choices.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-xs text-[#94A3B8] leading-relaxed">
        Privacy access and requests work without marketing consent or sign-in.
      </p>
    </section>
  );
}
