"use client";

import React from "react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-8 space-y-4">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
        Contact
      </h2>

      {/* Description */}
      <p className="text-[14.5px] text-[#5B646B] leading-relaxed">
        For cookie preference changes, use Cookie Settings. For broader privacy
        questions, use the Privacy Notice or Contact Privacy.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="button"
          className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] hover:opacity-95 shadow-sm transition-all"
        >
          Open Cookie Settings
        </button>
        <Link
          href="/privacy-notice"
          className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#0F172A] bg-white border border-slate-200/80 hover:bg-slate-50 shadow-sm transition-colors"
        >
          Review Privacy Notice
        </Link>
      </div>
    </section>
  );
}
