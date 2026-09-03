"use client";

import React from "react";
import Image from "next/image";

interface FormField {
  label: string;
  subtext: string;
}

const formFields: FormField[] = [
  {
    label: "Full name",
    subtext: "Required",
  },
  {
    label: "Work email",
    subtext: "Required",
  },
  {
    label: "Company",
    subtext: "Required",
  },
  {
    label: "Role",
    subtext: "Optional",
  },
  {
    label: "Accessibility needs",
    subtext: "Optional — shown only when needed",
  },
  {
    label: "Marketing updates",
    subtext: "Optional — separate from registration",
  },
];

export default function RegistrationSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image Preview Frame */}
          <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[380px] rounded-2xl overflow-hidden">
            <Image
              src="/images/resources/29.png"
              alt="Speaker presenting product registration flow in meeting"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Right Column: Title and Description */}
          <div className="lg:col-span-6 space-y-4">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                REGISTRATION
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight leading-snug">
              Minimum data — clear purpose — separate consent
            </h2>

            {/* Subtitle / Body */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-lg">
              Operational session communication is always separate from
              marketing consent. No payroll or confidential data is ever
              requested here.
            </p>
          </div>
        </div>

        {/* Bottom Form Fields & Action Section */}
        <div className="space-y-8 pt-4">
          {/* 2-Column Form Field Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {formFields.map((field, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-1"
              >
                <p className="text-xs sm:text-sm font-bold text-[#07243B]">
                  {field.label}
                </p>
                <p className="text-[11px] text-slate-400 font-medium">
                  {field.subtext}
                </p>
              </div>
            ))}
          </div>

          {/* Submit Button & Micro-copy */}
          <div className="flex flex-col items-center space-y-4">
            <button
              type="button"
              className="w-full sm:w-auto min-w-[180px] bg-gradient-to-r from-[#3D9BD6] to-[#0C4773] hover:opacity-95 text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-xl shadow-xs transition-opacity cursor-pointer"
            >
              Register
            </button>

            {/* Lifecycle States Note */}
            <p className="text-[11px] text-slate-400 font-medium text-center">
              States: Validation error · Submitting · Registered · Waitlisted ·
              Closed · Capacity changed — each shown clearly, never silently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
