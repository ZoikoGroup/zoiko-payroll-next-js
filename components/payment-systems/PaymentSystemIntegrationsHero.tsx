"use client";

import React, { useState } from "react";
import { ChevronDown, Info } from "lucide-react";

export default function PaymentSystemIntegrationsHero() {
  const [paymentSystem, setPaymentSystem] = useState("");
  const [countryCurrency, setCountryCurrency] = useState("United States · USD");
  const [paymentRail, setPaymentRail] = useState(
    "ACH / domestic bank transfer",
  );

  return (
    <section className="w-full bg-[#EDF4FA] py-16 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 pt-2">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>PAYMENT SYSTEM INTEGRATIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Move approved payroll payments with clear status from release to
              reconciliation.
            </h1>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
              Connect approved payroll payment instructions to supported payment
              systems while keeping authorization, submission, provider
              acknowledgement, settlement, returns and reconciliation explicit
              at every step.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                className="px-5 py-3 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#2C90D0] to-[#2C90D0] hover:opacity-95 transition-opacity shadow-xs"
              >
                Check your payment system
              </button>
              <button
                type="button"
                className="px-5 py-3 rounded-lg text-xs font-semibold text-[#0F172A] bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-2xs inline-flex items-center gap-1.5"
              >
                Get integration support <span className="text-sm">→</span>
              </button>
            </div>

            {/* Info Callout Box */}
            <div className="bg-[#E2F0FB]/60 border border-[#BDE0FE]/50 rounded-xl p-4 flex items-start gap-3 mt-4">
              <Info className="w-4 h-4 text-[#0A8FD0] shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Countries, currencies, rails, methods, cutoffs, funding and
                settlement behavior vary by system and configuration — this page
                reflects registry evidence, not a generic claim of universal
                coverage.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Lookup & Lifecycle Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden">
              {/* Card Form Header & Inputs */}
              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <h2 className="text-base font-bold text-[#0F172A]">
                    Find your payment system
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Registry-backed lookup across banks, providers and rails
                  </p>
                </div>

                <div className="space-y-4 pt-1">
                  {/* Select 1: Payment system */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-700">
                      Payment system, bank or provider
                    </label>
                    <div className="relative">
                      <select
                        value={paymentSystem}
                        onChange={(e) => setPaymentSystem(e.target.value)}
                        className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-600 pr-8 focus:outline-none focus:ring-2 focus:ring-[#0A8FD0]/20 focus:border-[#0A8FD0]"
                      >
                        <option value="">Search or select...</option>
                        <option value="chase">JPMorgan Chase</option>
                        <option value="bankofamerica">Bank of America</option>
                        <option value="wells">Wells Fargo</option>
                        <option value="stripe">Stripe Connect</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Select 2: Country / currency */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-700">
                      Country / currency
                    </label>
                    <div className="relative">
                      <select
                        value={countryCurrency}
                        onChange={(e) => setCountryCurrency(e.target.value)}
                        className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-700 font-medium pr-8 focus:outline-none focus:ring-2 focus:ring-[#0A8FD0]/20 focus:border-[#0A8FD0]"
                      >
                        <option value="United States · USD">
                          United States · USD
                        </option>
                        <option value="Canada · CAD">Canada · CAD</option>
                        <option value="United Kingdom · GBP">
                          United Kingdom · GBP
                        </option>
                        <option value="Eurozone · EUR">Eurozone · EUR</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Select 3: Payment rail */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-700">
                      Payment rail
                    </label>
                    <div className="relative">
                      <select
                        value={paymentRail}
                        onChange={(e) => setPaymentRail(e.target.value)}
                        className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-700 font-medium pr-8 focus:outline-none focus:ring-2 focus:ring-[#0A8FD0]/20 focus:border-[#0A8FD0]"
                      >
                        <option value="ACH / domestic bank transfer">
                          ACH / domestic bank transfer
                        </option>
                        <option value="Wire transfer">Wire transfer</option>
                        <option value="RTP / Real-time payments">
                          RTP / Real-time payments
                        </option>
                        <option value="SEPA Credit Transfer">
                          SEPA Credit Transfer
                        </option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="button"
                  className="w-full py-3 rounded-lg text-xs font-semibold text-white bg-[#0A8FD0] hover:bg-[#087DB7] transition-colors shadow-xs"
                >
                  Check fit and availability
                </button>

                {/* Form Sub-note Callout */}
                <div className="bg-[#EBF5FC] rounded-lg p-3 flex items-start gap-2 text-[11px] text-slate-600">
                  <Info className="w-3.5 h-3.5 text-[#0A8FD0] shrink-0 mt-0.5" />
                  <span>
                    Not listed? Submit a fit request — we never collect bank
                    details or credentials in this form.
                  </span>
                </div>
              </div>

              {/* Dark Bottom Section: Synthetic Lifecycle Proof */}
              <div className="bg-[#0A1E30] p-6 text-white text-xs space-y-3 font-mono">
                <div className="text-[10px] uppercase font-sans font-bold tracking-wider text-slate-400 pb-1 border-b border-slate-700/50">
                  SYNTHETIC LIFECYCLE PROOF
                </div>

                <div className="flex justify-between items-center pt-1">
                  <span className="text-slate-400 font-sans">Batch</span>
                  <span className="font-semibold text-slate-200">
                    PB-2026-08-114
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-sans">
                    Provider - Method
                  </span>
                  <span className="font-semibold text-slate-200">
                    Sandbox Rail - ACH
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-sans">Currency</span>
                  <span className="font-semibold text-slate-200">USD</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-sans">
                    Release state
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-400 text-[10px] font-bold uppercase tracking-wide">
                    RELEASED
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-sans">
                    Provider state
                  </span>
                  <span className="px-2 py-0.5 rounded bg-sky-900/60 text-sky-400 text-[10px] font-bold uppercase tracking-wide">
                    ACCEPTED
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-sans">Settlement</span>
                  <span className="px-2 py-0.5 rounded bg-amber-900/50 text-amber-400 text-[10px] font-bold uppercase tracking-wide">
                    PENDING EVIDENCE
                  </span>
                </div>

                <div className="flex justify-between items-center pt-1 text-[11px]">
                  <span className="text-slate-400 font-sans">
                    Last verified
                  </span>
                  <span className="text-slate-300 font-sans">
                    Today, 06:12 ET
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
