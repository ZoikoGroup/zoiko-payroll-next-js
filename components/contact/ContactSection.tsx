"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "Jordan Reyes",
    email: "jordan@company.com",
    organization: "Company name",
    route: "Sales",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative w-full font-sans antialiased text-white overflow-hidden">
      {/* Background Image Container with Dark Blue Overlay */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat py-16"
        style={{
          backgroundImage: `url('/images/contact/bg.png')`,
        }}
      >
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#091D2FED] via-[#091D2FD9] via-[#0B2A428C] to-[#0B2A424D]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Category Tag */}
              <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#7FC1EE] uppercase">
                <span>CONTACT</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-[30px] font-bold tracking-tight text-white leading-tight">
                Reach the right Zoiko Payroll team — pick a route below.
              </h2>

              {/* Paragraph */}
              <p className="text-sm text-[#CBDAE7] leading-relaxed max-w-lg">
                No sensitive payroll data needed here. Choose Sales, Support,
                Privacy, Press or General and we&apos;ll route it to the right team.
              </p>

              {/* Quick Links */}
              <div className="space-y-2 pt-2 text-[12.5px] text-[#DCE9F3]">
                <p>
                  Service issue?{" "}
                  <Link
                    href="/status"
                    className="font-bold text-[#7FC1EE] hover:underline"
                  >
                    Check System Status →
                  </Link>
                </p>
                <p>
                  Security concern?{" "}
                  <Link
                    href="/responsible-disclosure"
                    className="font-bold text-[#7FC1EE] hover:underline"
                  >
                    Use Responsible Disclosure →
                  </Link>
                </p>
                <p>
                  Existing customer?{" "}
                  <Link
                    href="/support"
                    className="font-bold text-[#7FC1EE] hover:underline"
                  >
                    Get Support →
                  </Link>
                </p>
              </div>

              {/* Disclaimer */}
              <p className="text-[11.5px] text-[#F0DCB2] pt-4">
                Do not submit payroll files, employee records, bank/tax data or
                credentials through this form.
              </p>
            </div>

            {/* Right Form Card Column */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-[#0F172A] shadow-2xl">
                {/* Form Header */}
                <div className="mb-6">
                  <span className="text-xs font-semibold tracking-wider text-[#64748B] uppercase">
                    SEND A QUICK MESSAGE
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Grid Row 1: Name & Business Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#0F172A]">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F3F7FB] border border-gray-200 text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:border-[#0284C7] transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#0F172A]">
                        Business email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F3F7FB] border border-gray-200 text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:border-[#0284C7] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Grid Row 2: Organization & Route */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#0F172A]">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F3F7FB] border border-gray-200 text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:border-[#0284C7] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#0F172A]">
                        Route
                      </label>
                      <select
                        name="route"
                        value={formData.route}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F3F7FB] border border-gray-200 text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:border-[#0284C7] transition-colors"
                      >
                        <option value="Sales">Sales</option>
                        <option value="Support">Support</option>
                        <option value="Privacy">Privacy</option>
                        <option value="Press">Press</option>
                        <option value="General">General</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5 p-5 rounded-[14px] bg-[#FFFFFF01] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
                    <label className="text-xs font-semibold text-[#0F172A]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      placeholder="Briefly, what do you need? No payroll or employee data."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F3F7FB] border border-gray-200 text-xs sm:text-sm text-[#0F172A] placeholder-[#757575] focus:outline-none focus:border-[#0284C7] transition-colors resize-none"
                    />
                  </div>

                  {/* Privacy Notice Note */}
                  <p className="text-[11px] text-[#828C97] leading-tight pt-1">
                    By submitting you agree to the Privacy Notice. We&apos;ll route
                    this to the right team automatically.
                  </p>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] hover:bg-[#09486E] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
