"use client";

import React from "react";
import Image from "next/image";

export default function ServiceBoundariesSection() {
  const successItems = [
    "Governance",
    "Adoption guidance",
    "Payroll health trends",
    "Optimization",
  ] as const;

  const supportItems = [
    "Live incidents",
    "Technical issues",
    "Active payroll problems",
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Category Label */}
        <p className="text-xs font-semibold text-[#3B82F6] tracking-wide mb-3">
          Service boundaries
        </p>

        {/* Main Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] text-center tracking-tight leading-tight mb-12 max-w-3xl">
          What customer success looks like, next to support.
        </h2>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Side Image */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[400px] md:h-[440px] rounded-3xl overflow-hidden">
            <Image
              src="/images/customer/1.png"
              alt="Team members reviewing performance metrics and discussing strategy"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Right Side Stacked Cards */}
          <div className="lg:col-span-6 flex flex-col gap-5 w-full">
            {/* Customer Success Card */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] border-l-4 border-l-[#3B82F6] p-6 shadow-xs">
              <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-4">
                Customer Success Owns
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {successItems.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F1F5F9] text-[#1E293B] text-xs font-semibold"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#3B82F6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Support Handles Card */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] border-l-4 border-l-[#64748B] p-6 shadow-xs">
              <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-4">
                Support Handles Instead
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {supportItems.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F1F5F9] text-[#1E293B] text-xs font-semibold"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#64748B]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                      />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Clarification Text */}
            <p className="text-xs text-[#94A3B8] leading-relaxed font-normal mt-1 px-1">
              Live payroll-impacting issues route directly to Support or
              Incident Management — they never wait for the next success review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
