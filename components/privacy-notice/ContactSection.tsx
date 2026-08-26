"use client";

import React from "react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-8 space-y-6">
      {/* Divider */}
      <div className="border-t border-slate-100 pt-8">
        {/* Title & Introduction */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
            Contact
          </h2>
          <p className="text-[14.5px] text-[#5B646B] leading-relaxed max-w-3xl">
            Use the dedicated privacy request route for access, correction,
            deletion or other applicable rights. For security evidence, use
            Trust and Security. For cookie preferences, use Cookie Settings.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="pt-2">
        <Link
          href="#contact-privacy"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#389ed9] to-[#1d5987] hover:opacity-95 shadow-sm transition-all"
        >
          Contact Privacy
        </Link>
      </div>
    </section>
  );
}
