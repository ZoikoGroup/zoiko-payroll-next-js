"use client";

import React from "react";

export default function TestimonialQuoteSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Image Card */}
        <div className="md:col-span-5 relative rounded-3xl overflow-hidden border border-[#E1E8ED] shadow-sm h-64 sm:h-80 md:h-full min-h-[280px]">
          <img
            src="/images/careers/laptop.png"
            alt="Person using calculator and laptop for financial data"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Quote Content */}
        <div className="md:col-span-7 space-y-6">
          <blockquote className="text-2xl md:text-[26px] font-bold text-[#0A1928] leading-tight tracking-tight">
            <span className="text-[#0281D3]">&ldquo;</span>
            Build the controls first. Speed without evidence just moves the risk
            downstream.
          </blockquote>

          <div className="space-y-0.5">
            <div className="text-sm font-bold text-[#0A1928]">
              Alex Meridian
            </div>
            <div className="text-xs text-[#5C6E7E]">
              Co-Founder &amp; CEO, Zoiko Payroll
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
