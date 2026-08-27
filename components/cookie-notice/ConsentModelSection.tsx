"use client";

import React from "react";
import { XSquare } from "lucide-react";

export default function ConsentModelSection() {
  return (
    <section id="consent-model" className="scroll-mt-8 space-y-6">
      {/* Title & Subtitle */}
      <div className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
          Consent model & embeds
        </h2>
        <p className="text-[14.5px] text-[#5B646B] leading-relaxed">
          Where prior consent is required, non-essential technology fails closed
          if the consent management platform (CMP) fails — nothing optional
          loads by default while consent is unresolved. Third-party video, chat,
          map or social embeds obey category/consent gating and show an approved
          placeholder until permitted.
        </p>
      </div>

      {/* Embed Blocked Placeholder Box */}
      <div className="bg-[#EBF3F9]/80 border border-slate-200/60 rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-4 shadow-sm">
        {/* Icon Circle */}
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0284C7] shadow-sm">
          <XSquare className="w-5 h-5" />
        </div>

        {/* Placeholder Heading */}
        <h3 className="text-sm font-bold text-[#0F172A]">
          Third-party content blocked
        </h3>

        {/* Placeholder Description */}
        <p className="text-xs text-[#5B646B] leading-relaxed">
          This embed requires the "Marketing" category. It will load only after
          you allow it in Cookie Settings.
        </p>

        {/* Action Button */}
        <div className="pt-2">
          <button
            type="button"
            className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#0F172A] bg-white border border-slate-200/80 hover:bg-slate-50 transition-colors shadow-sm"
          >
            Open Cookie Settings
          </button>
        </div>
      </div>

      {/* Footnote Paragraph */}
      <p className="text-[12px] text-[#94A3B8] leading-normal pt-1">
        We do not promise instantaneous removal after withdrawal — disable,
        delete and reload behavior varies per technology capability. Rejecting
        or withdrawing non-essential consent never blocks legal pages, support,
        sign-in or core access unless a function genuinely requires that storage
        to operate.
      </p>
    </section>
  );
}
