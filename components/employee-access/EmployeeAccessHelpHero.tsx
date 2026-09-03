"use client";

import React, { useState } from "react";
import Image from "next/image";

const quickTags = [
  "Password",
  "MFA",
  "Invitation",
  "SSO",
  "Payslip",
  "Tax document",
  "Security",
];

export default function EmployeeAccessHelpHero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
  };

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
  };

  return (
    <section className="relative w-full min-h-[520px] py-16 px-4 sm:px-6 lg:px-8 text-white flex items-center overflow-hidden">
      {/* Dark Background Overlay / Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/employee-access/bg.png"
          alt="Employee access help background"
          fill
          className="object-cover object-center mix-blend-overlay"
          priority
        />
        {/* Dark Blue Overlay Gradient */}
        <div className="absolute inset-0 bg-[#0B2540]/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Text & Search Form */}
        <div className="lg:col-span-7 space-y-6">
          {/* Header Block */}
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#38BDF8] uppercase font-mono">
              <span>/</span>
              <span>EMPLOYEE ACCESS HELP</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight">
              Get back into your payroll account safely
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              Secure help for signing in, recovering access, and finding your
              payslips and tax documents.
            </p>
          </div>

          {/* Search Bar Input */}
          <form
            onSubmit={handleSearch}
            className="bg-white rounded-[14px] p-1.5 pl-5 flex items-center shadow-xl max-w-xl border border-white/20"
          >
            <input
              type="text"
              placeholder="Search help — e.g., forgot password, payslip, MFA"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm text-[#07243B] placeholder-[#757575] font-medium focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:bg-[#0877AE] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-[14px] transition-colors shrink-0"
            >
              Search
            </button>
          </form>

          {/* Quick Filter Pill Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {quickTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagClick(tag)}
                className="bg-white hover:bg-white/20 border border-white/15 text-black rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all backdrop-blur-xs"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Featured Image Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[16/10] sm:aspect-[16/11] rounded-2xl overflow-hidden">
            <Image
              src="/images/employee-access/1.png"
              alt="Employees collaborating at computer"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
