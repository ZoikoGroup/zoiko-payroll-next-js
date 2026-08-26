"use client";

import React from "react";
import Link from "next/link";

interface OfficeCard {
  region: string;
  companyName: string;
  addressLines: string[];
  disclaimer: string;
}

const officesData: OfficeCard[] = [
  {
    region: "GLOBAL HEADQUARTERS",
    companyName: "Zoiko Tech Inc.",
    addressLines: [
      "1401 21st Street, Suite R",
      "Sacramento, CA 95811",
      "United States",
    ],
    disclaimer:
      "Corporate office — not proof of local payroll availability or data residency.",
  },
  {
    region: "EUROPEAN HEADQUARTERS",
    companyName: "Zoiko Payroll Europe",
    addressLines: [
      "167–169 Great Portland Street, 5th Floor",
      "London W1W 5PF",
      "United Kingdom",
    ],
    disclaimer:
      "Corporate office — not proof of local payroll availability or data residency.",
  },
];

interface EmailContact {
  label: string;
  email: string;
}

const emailContacts: EmailContact[] = [
  { label: "SALES", email: "sales@zoikopayroll.com" },
  { label: "PRESS", email: "press@zoikopayroll.com" },
  { label: "PRIVACY", email: "privacy@zoikopayroll.com" },
  { label: "GENERAL", email: "hello@zoikopayroll.com" },
];

export default function OfficesContactSection() {
  return (
    <section className="w-full bg-white py-12 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Heading */}
        <div>
          <h2 className="text-2xl sm:text-[28px] font-bold text-[#0F172A] tracking-tight">
            Offices & contact information
          </h2>
        </div>

        {/* 2-Column Headquarters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {officesData.map((office, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="text-[11px] font-semibold tracking-wider text-[#0284C7] uppercase">
                  {office.region}
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] tracking-tight">
                  {office.companyName}
                </h3>

                <div className="text-xs sm:text-sm text-[#64748B] space-y-0.5 leading-relaxed">
                  {office.addressLines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-[#94A3B8] leading-tight pt-2">
                {office.disclaimer}
              </p>
            </div>
          ))}
        </div>

        {/* 4-Column Email Contacts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {emailContacts.map((contact, idx) => (
            <div
              key={idx}
              className="bg-[#F3F7FB] rounded-2xl p-5 border border-gray-100/80 space-y-2 flex flex-col justify-center"
            >
              <span className="text-[11px] font-semibold tracking-wider text-[#94A3B8] uppercase">
                {contact.label}
              </span>
              <Link
                href={`mailto:${contact.email}`}
                className="text-xs sm:text-sm font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors break-all"
              >
                {contact.email}
              </Link>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <p className="text-xs text-[#94A3B8]">
          Role-based addresses only — routed to the accountable team, not an
          individual. For account or product issues, use Support rather than
          email.
        </p>

        {/* Team Banner Image */}
        <div className="w-full overflow-hidden">
          <img
            src="/images/contact/team.png"
            alt="Zoiko Team Collaboration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
