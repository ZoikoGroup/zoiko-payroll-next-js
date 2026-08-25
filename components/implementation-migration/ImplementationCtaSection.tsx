"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const CTA_BUTTONS = [
  {
    label: "Contact Support",
    href: "#",
    variant: "primary",
  },
  {
    label: "Explore Global Payroll Resources",
    href: "#",
    variant: "secondary",
    icon: ArrowRight,
  },
];

export default function ImplementationCtaSection() {
  return (
    <section className="w-full bg-[#0A2E4B] py-20 px-6 lg:px-16 text-white font-sans antialiased">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Header Section */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#8FD0F2]">
            <span>/</span>
            <span>Ready to plan a controlled global payroll launch?</span>
          </div>

          <h2 className="text-3xl md:text-[32px] font-bold text-white leading-tight">
            Turn scope, migration, validation and launch decisions into one
            accountable implementation program
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {CTA_BUTTONS.map((button, index) => {
            const Icon = button.icon;
            const isPrimary = button.variant === "primary";

            return (
              <a
                key={index}
                href={button.href}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-sm ${
                  isPrimary
                    ? "bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] text-white hover:bg-[#0281D3]/90"
                    : "bg-transparent text-white border border-white/20 hover:bg-white/10"
                }`}
              >
                <span>{button.label}</span>
                {Icon && <Icon className="w-4 h-4" />}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
