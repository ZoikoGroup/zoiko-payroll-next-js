"use client";

import React, { useState } from "react";

export default function NewsletterSubscribeSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription action here
  };

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#F9FAFB] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
          {/* Left Text Block */}
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-[#0A1928]">
              Get payroll governance insights in your inbox
            </h3>
            <p className="text-xs sm:text-sm text-[#8A9BA8]">
              One email a month. No recruiting spam.
            </p>
          </div>

          {/* Form / Input & Subscribe Button */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-3 w-full md:w-auto shrink-0"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              required
              className="w-full sm:w-64 px-4 py-2.5 bg-white border border-[#E1E8ED] rounded-xl text-xs sm:text-sm text-[#0A1928] placeholder-[#A0AEC0] focus:outline-none focus:border-[#0281D3] transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#1A83C8] to-[#093C73] hover:bg-[#026cb3] text-white font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-95 shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
