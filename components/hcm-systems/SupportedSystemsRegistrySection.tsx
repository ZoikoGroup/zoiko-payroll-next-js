"use client";

import React, { useState } from "react";
import { AlertTriangle, ArrowRight } from "lucide-react";

interface RegistrySystem {
  name: string;
  details: string;
  italicText: string;
  status: "Likely — validation needed" | "Partial" | "Confirmed" | "Unknown";
  badgeBg: string;
  badgeText: string;
  dotColor: string;
}

const systemsData: RegistrySystem[] = [
  {
    name: "BambooHR",
    details: "File exchange · Verified Jun 2026",
    italicText: "Direction varies by data domain",
    status: "Likely — validation needed",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    dotColor: "bg-blue-500",
  },
  {
    name: "SAP SuccessFactors",
    details: "API-supported · Partial domains",
    italicText: "Direction varies by data domain",
    status: "Partial",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-800",
    dotColor: "bg-amber-500",
  },
  {
    name: "UKG Pro",
    details: "Managed exchange · Verified Jul 2026",
    italicText: "Direction varies by data domain",
    status: "Confirmed",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    dotColor: "bg-emerald-500",
  },
  {
    name: "Workday HCM",
    details: "API-supported · Verified Aug 2026",
    italicText: "Direction varies by data domain",
    status: "Confirmed",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    dotColor: "bg-emerald-500",
  },
  {
    name: "Rippling",
    details: "Not yet verified",
    italicText: "Direction varies by data domain",
    status: "Unknown",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-600",
    dotColor: "bg-slate-400",
  },
];

export default function SupportedSystemsRegistrySection() {
  const [formData, setFormData] = useState({
    systemVendor: "",
    editionVersion: "",
    desiredDomains: "",
    workEmail: "",
    company: "",
    isCustomer: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Action handler
  };

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Tag Line */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
            <span className="w-3 h-0.5 bg-[#2F6FED]" />
            <span>SUPPORTED SYSTEMS REGISTRY + CUSTOM FIT</span>
          </div>

          {/* Main Title */}
          <h2 className="text-[26px] font-bold text-[#0F172A] tracking-tight">
            No paid ranking. Alphabetical, evidence-backed only
          </h2>
        </div>

        {/* Systems Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {systemsData.map((system, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
            >
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#0F172A]">
                  {system.name}
                </h3>
                <p className="text-xs text-slate-500">{system.details}</p>
                <p className="text-xs text-slate-400 italic pt-1">
                  {system.italicText}
                </p>
              </div>

              <div>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${system.badgeBg} ${system.badgeText}`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${system.dotColor}`}
                  />
                  {system.status}
                </span>
              </div>
            </div>
          ))}

          {/* Card 6: Your system not listed? */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#0F172A]">
                Your system not listed?
              </h3>
              <p className="text-xs text-slate-500">
                Submit a custom-fit request below
              </p>
              <p className="text-xs text-slate-400">—</p>
            </div>

            <div>
              <a
                href="#request-form"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2F6FED] hover:underline"
              >
                <span>Request validation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Request Custom Fit Form Container */}
        <div
          id="request-form"
          className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs"
        >
          <h3 className="text-sm font-bold text-[#0F172A]">
            Request a custom fit check
          </h3>

          {/* Alert Warning Box */}
          <div className="bg-rose-50 border border-rose-200/60 rounded-xl p-3.5 flex items-center gap-2.5 text-xs text-rose-700">
            <AlertTriangle className="w-4 h-4 shrink-0 stroke-[2.5]" />
            <span>
              Never submit API keys, credentials, employee data, payroll files
              or security secrets in this form.
            </span>
          </div>

          {/* Form Grid */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* System / vendor name */}
              <input
                type="text"
                name="systemVendor"
                placeholder="System / vendor name"
                value={formData.systemVendor}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F6FED]/20 focus:border-[#2F6FED] transition-all"
              />

              {/* Edition / version (optional) */}
              <input
                type="text"
                name="editionVersion"
                placeholder="Edition / version (optional)"
                value={formData.editionVersion}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F6FED]/20 focus:border-[#2F6FED] transition-all"
              />

              {/* Desired data domains */}
              <input
                type="text"
                name="desiredDomains"
                placeholder="Desired data domains"
                value={formData.desiredDomains}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F6FED]/20 focus:border-[#2F6FED] transition-all"
              />

              {/* Work email */}
              <input
                type="email"
                name="workEmail"
                placeholder="Work email"
                value={formData.workEmail}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F6FED]/20 focus:border-[#2F6FED] transition-all"
              />

              {/* Company */}
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F6FED]/20 focus:border-[#2F6FED] transition-all"
              />

              {/* Existing Zoiko Payroll customer? */}
              <select
                name="isCustomer"
                value={formData.isCustomer}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#F1F5F9]/70 border border-slate-200/80 text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2F6FED]/20 focus:border-[#2F6FED] transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled hidden>
                  Existing Zoiko Payroll customer?
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#2F6FED] text-white text-xs sm:text-sm font-semibold hover:bg-[#255BC0] transition-colors shadow-sm cursor-pointer"
              >
                Submit request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
