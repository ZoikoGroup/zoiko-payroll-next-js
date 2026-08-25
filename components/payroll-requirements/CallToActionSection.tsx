"use client";

import React from "react";

// Bottom link items matching the screenshot footer navigation
const FOOTER_LINKS = [
  { label: "Compliance Workflows", href: "#compliance-workflows" },
  { label: "Multi-Entity Payroll", href: "#multi-entity-payroll" },
  { label: "Global Reporting", href: "#global-reporting" },
  { label: "Implementation and Migration", href: "#implementation-migration" },
  { label: "Jurisdiction Guides", href: "#jurisdiction-guides" },
];

export default function CallToActionSection() {
  return (
    <section className="w-full bg-[#082B49] py-20 px-6 lg:px-16 text-white font-sans antialiased">
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        {/* Header Block */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#38BDF8]">
            <span>/</span>
            <span>Ready to map your local payroll requirements?</span>
          </div>

          <h2 className="text-3xl md:text-[32px] font-bold text-white leading-tight">
            Keep local payroll precision inside one global control model.
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Primary Filled Button */}
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] text-white hover:bg-[#0281D3]/90 text-sm font-semibold transition-all shadow-md active:scale-95">
            Review a jurisdiction
          </button>

          {/* Secondary Outline Button */}
          <button className="px-6 py-3 rounded-xl bg-transparent border border-white/30 hover:bg-white/10 text-white text-sm font-semibold transition-all active:scale-95">
            Book a demo
          </button>
        </div>

        {/* Horizontal Divider */}
        <div className="pt-6">
          <hr className="border-t border-white/15 w-full" />
        </div>

        {/* Bottom Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-[#9FC7E3]">
          {FOOTER_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
