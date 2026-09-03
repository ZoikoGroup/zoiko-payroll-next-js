"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ConfirmPayrollFootprintSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    primaryJurisdiction: "",
    workforceRange: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden min-h-[480px] bg-[#07243B] flex items-center">
        {/* Dark Blue Overlay and Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jurisdiction-directory/bg2.png"
            alt="Business professionals collaborating"
            fill
            className="object-cover object-center opacity-20 mix-blend-overlay"
            priority
          />
        </div>

        {/* Inner Content Grid */}
        <div className="relative z-10 w-full p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading and Text */}
          <div className="lg:col-span-6 space-y-5 text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Need to confirm your exact payroll footprint?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-lg">
              Tell us the jurisdictions, entities, worker population, current
              payroll model and required services. Please don&apos;t send
              employee-level payroll data in your first inquiry.
            </p>

            <div className="pt-2">
              <a
                href="#"
                className="text-xs sm:text-sm font-semibold text-white underline decoration-white/60 underline-offset-4 hover:decoration-white transition-all inline-flex items-center gap-1"
              >
                Explore country and territory guides →
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-6 lg:justify-self-end w-full max-w-md">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-2xl text-[#07243B]">
              <h3 className="text-sm font-bold text-[#07243B] mb-5">
                Check jurisdiction availability
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First & Last Name */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label
                      htmlFor="firstName"
                      className="block text-[11px] font-semibold text-slate-600"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Jordan"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#3D9BD6] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="lastName"
                      className="block text-[11px] font-semibold text-slate-600"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Reyes"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#3D9BD6] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Business Email */}
                <div className="space-y-1">
                  <label
                    htmlFor="businessEmail"
                    className="block text-[11px] font-semibold text-slate-600"
                  >
                    Business email
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    name="businessEmail"
                    placeholder="jordan@company.com"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#3D9BD6] focus:bg-white transition-all"
                  />
                </div>

                {/* Primary Jurisdiction & Workforce Range */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label
                      htmlFor="primaryJurisdiction"
                      className="block text-[11px] font-semibold text-slate-600"
                    >
                      Primary operating jurisdiction
                    </label>
                    <input
                      type="text"
                      id="primaryJurisdiction"
                      name="primaryJurisdiction"
                      placeholder="United States"
                      value={formData.primaryJurisdiction}
                      onChange={handleChange}
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#3D9BD6] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="workforceRange"
                      className="block text-[11px] font-semibold text-slate-600"
                    >
                      Workforce range
                    </label>
                    <input
                      type="text"
                      id="workforceRange"
                      name="workforceRange"
                      placeholder="1–200"
                      value={formData.workforceRange}
                      onChange={handleChange}
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#3D9BD6] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#3D9BD6] to-[#0C4773] hover:from-[#358ac0] hover:to-[#0a3a5e] text-white text-xs font-bold py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    Book a tailored demonstration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
