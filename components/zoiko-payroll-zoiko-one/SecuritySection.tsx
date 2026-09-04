import React from "react";
import Link from "next/link"; // Use <a> if not using Next.js Link

const zoikoResponsibilities = [
  "Payroll data handling within the product",
  "Role-based access to payroll functions",
  "Payroll-specific audit records",
];

const sharedResponsibilities = [
  "Scope of any approved connection",
  "Identity provider's own controls",
  "Verified jointly per active relationship",
];

const unexposedItems = [
  "Live customer connection names",
  "Tenant IDs",
  "Product entitlements",
  "Employee records",
  "Payroll values",
  "Bank/tax data",
  "Credentials, tokens or secrets",
];

export default function SecurityTrustSection() {
  return (
    <section className="border-t border-slate-100 bg-[#FFFFFF] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1220px] flex-col items-start gap-3.5">
          {/* Eyebrow */}
          <div>
            <span className="text-xs font-bold uppercase leading-4 tracking-wider text-sky-600">
              / Security, privacy + trust boundaries
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-9 text-sky-950">
            Shared responsibility, not a new claim.
          </h2>

          {/* Subheading Description */}
          <p className="max-w-2xl text-base font-normal leading-6 text-gray-600">
            Verified controls and evidence live in the Trust Center — this page
            states the boundary, not a fresh assurance claim.
          </p>

          {/* Responsibility Split Card */}
          <div className="mt-3 grid w-full grid-cols-1 overflow-hidden rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 shadow-[0px_12px_32px_-14px_rgba(10,48,80,0.16),0px_1px_2px_0px_rgba(10,48,80,0.05)] md:grid-cols-2">
            {/* Left: Zoiko Payroll Responsibility */}
            <div className="flex flex-col gap-3.5 bg-white p-6">
              <p className="text-xs font-bold uppercase leading-4 tracking-wide text-gray-400">
                Zoiko Payroll responsibility
              </p>
              <ul className="flex flex-col gap-2.5 pl-4 list-disc text-xs font-normal leading-5 text-gray-700 marker:text-gray-400">
                {zoikoResponsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Right: Shared / Connection Responsibility */}
            <div className="flex flex-col gap-3.5 bg-sky-950 p-6">
              <p className="text-xs font-bold uppercase leading-4 tracking-wide text-white/50">
                Shared / connection responsibility
              </p>
              <ul className="flex flex-col gap-2.5 pl-4 list-disc text-xs font-normal leading-5 text-white/80 marker:text-sky-400">
                {sharedResponsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Never Exposes Tag Cloud */}
          <div className="mt-3 w-full rounded-xl bg-slate-50 p-5">
            <p className="mb-3 text-xs font-bold uppercase leading-4 tracking-wide text-gray-400">
              This page never exposes
            </p>
            <div className="flex flex-wrap gap-2">
              {unexposedItems.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-md bg-white px-2.5 py-1 text-xs font-normal leading-4 text-gray-600 outline outline-1 outline-offset-[-1px] outline-slate-200 shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Trust Center Banner matching screenshot */}
          <div className="relative mt-3 w-full overflow-hidden rounded-[20px] bg-[#072439] px-8 py-10 sm:px-12 sm:py-10 shadow-[0px_12px_32px_-14px_rgba(10,48,80,0.16)]">
            {/* Background Image with Deep Blue Corporate Tint */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src="/trust-bg.png" // Point to your uploaded meeting picture
                alt="Planning meeting background"
                className="h-full w-full object-cover opacity-25 mix-blend-luminosity"
              />
              {/* Gradient Color Wash */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#072338]/95 via-[#0d3350]/88 to-[#0a283e]/90" />
            </div>

            {/* Banner Content */}
            <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold leading-7 text-white">
                  Verified controls live in one place.
                </h3>
                <p className="text-sm sm:text-base font-normal leading-6 text-[#b6cddc]">
                  Documented security and privacy practices, hosting<br />
                  arrangements and contractual commitments — reviewed<br />
                  independently of this relationship page.
                </p>
              </div>

              {/* Right CTA Button */}
              <Link
                href="/trust-center"
                className="shrink-0 rounded-lg bg-white px-6 py-3 text-center text-sm font-bold leading-5 text-[#0a3050] transition hover:bg-slate-50 active:scale-98 shadow-sm"
              >
                Visit the Trust Center →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}