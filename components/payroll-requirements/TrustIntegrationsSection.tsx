"use client";

import React from "react";
import { Check } from "lucide-react";

// Pill badges data array
const INTEGRATION_PILLS = [
  "HRIS / HCM",
  "Finance / ERP",
  "Time / attendance",
  "Payment / bank / provider",
  "Identity",
  "Tax / filing provider",
  "Developer API / webhooks",
];

// Content for the two bottom control boxes
const REQUIRED_CONTROLS = [
  "Source ownership & identifiers",
  "Versioned mapping & freshness",
  "Partial-failure handling & reconciliation",
  "Authentication / least privilege",
  "Retry / idempotency & audit",
];

const SECURITY_PRIVACY = [
  "Role- and scope-based access; approved MFA/SSO only",
  "Public UI shows source class/freshness \u2014 sensitive evidence stays restricted",
  "Employee data minimized; no hosting/residency inferred from jurisdiction names",
  "Retention follows approved policy; material actions logged",
];

export default function TrustIntegrationsSection() {
  return (
    <section className="relative w-full min-h-[700px] py-20 px-6 lg:px-16 text-white font-sans antialiased overflow-hidden flex items-center justify-center">
      {/* Background Image Layer with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/payroll-requirements/anobg.jpg"
          alt="Global Network Background"
          className="w-full h-full object-cover"
        />
        {/* Dark blue translucent overlays matching the target theme */}
        <div className="absolute inset-0 bg-[#0A2640]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#061829]/70" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-8 w-full">
        {/* Top Split Section: Title Left + Featured Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Headline */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#38BDF8]">
              <span>/</span>
              <span>Trust, Integrations &amp; Implementation Readiness</span>
            </div>
            <h2 className="text-3xl md:text-[32px] font-bold text-white leading-tight">
              Trusted Integrations, Secure Connections, Ready for Implementation
            </h2>
          </div>

          {/* Right Floating Media Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden backdrop-blur-md h-56 sm:h-64 w-full">
              <img
                src="/images/payroll-requirements/typing.png"
                alt="Secure Connections and Integrations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Integration Category Pill Badges */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          {INTEGRATION_PILLS.map((pill, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm text-xs sm:text-sm text-white font-medium hover:bg-white/20 transition-all cursor-default"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Bottom Two Large Glassmorphism Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          {/* Required Integration Controls Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl flex flex-col justify-between">
            <h3 className="text-base sm:text-lg font-bold text-[#38BDF8]">
              Required integration controls
            </h3>
            <ul className="space-y-3">
              {REQUIRED_CONTROLS.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-xs sm:text-sm text-white/90"
                >
                  <Check className="w-4 h-4 mt-0.5 text-[#38BDF8] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Security & Privacy Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl flex flex-col justify-between">
            <h3 className="text-base sm:text-lg font-bold text-[#38BDF8]">
              Security &amp; privacy
            </h3>
            <ul className="space-y-3">
              {SECURITY_PRIVACY.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-xs sm:text-sm text-white/90"
                >
                  <Check className="w-4 h-4 mt-0.5 text-[#38BDF8] shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
