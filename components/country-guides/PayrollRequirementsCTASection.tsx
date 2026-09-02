"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function PayrollRequirementsCTASection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    jurisdiction: "United States",
    workforceRange: "1-200",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        {/* Outer Banner Card Container */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl min-h-[520px] flex items-center p-6 sm:p-10 lg:p-16">
          {/* Background Office Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/country-guides/cta.png"
              alt="Meeting room background"
              fill
              className="object-cover object-center"
            />
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-[#072138]/85 backdrop-blur-[1px]" />
          </div>

          {/* Foreground Grid Content */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading & Subtitle */}
            <div className="lg:col-span-6 space-y-4 text-white">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight leading-tight">
                Ready to confirm your payroll requirements?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-lg">
                Review current Zoiko Payroll coverage and implementation
                requirements for your entities, worker population and payroll
                scope.
              </p>
            </div>

            {/* Right Column: Lead Form Card */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-7 shadow-2xl space-y-4 text-[#0F172A]">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-[#07243B] block">
                        First name
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-[#07243B] focus:outline-none focus:ring-1 focus:ring-[#0A8FD0] focus:border-[#0A8FD0] transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-[#07243B] block">
                        Last name
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-[#07243B] focus:outline-none focus:ring-1 focus:ring-[#0A8FD0] focus:border-[#0A8FD0] transition-all"
                      />
                    </div>
                  </div>

                  {/* Business Email */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#07243B] block">
                      Business email
                    </label>
                    <input
                      type="email"
                      placeholder=""
                      value={formData.businessEmail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          businessEmail: e.target.value,
                        })
                      }
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-[#07243B] focus:outline-none focus:ring-1 focus:ring-[#0A8FD0] focus:border-[#0A8FD0] transition-all"
                    />
                  </div>

                  {/* Jurisdiction & Workforce Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-[#07243B] block">
                        Jurisdiction of interest
                      </label>
                      <div className="relative">
                        <select
                          value={formData.jurisdiction}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              jurisdiction: e.target.value,
                            })
                          }
                          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-[#07243B] font-semibold appearance-none pr-8 focus:outline-none focus:ring-1 focus:ring-[#0A8FD0] cursor-pointer"
                        >
                          <option value="United States">United States</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Germany">Germany</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Canada">Canada</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-[#07243B] block">
                        Workforce range
                      </label>
                      <div className="relative">
                        <select
                          value={formData.workforceRange}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              workforceRange: e.target.value,
                            })
                          }
                          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-[#07243B] font-semibold appearance-none pr-8 focus:outline-none focus:ring-1 focus:ring-[#0A8FD0] cursor-pointer"
                        >
                          <option value="1-200">1-200</option>
                          <option value="201-500">201-500</option>
                          <option value="501-1000">501-1000</option>
                          <option value="1000+">1000+</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Disclaimer Subtext */}
                  <p className="text-[10px] text-slate-400 font-medium pt-0.5">
                    Do not submit employee-level payroll data in this inquiry.
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#208BD2] to-[#085A9B] hover:from-[#1A7BC0] hover:to-[#064A82] text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md transition-all active:scale-[0.99]"
                  >
                    Check jurisdiction coverage
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
