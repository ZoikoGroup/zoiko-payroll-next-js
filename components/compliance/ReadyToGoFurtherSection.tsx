"use client";

import React from "react";
import Image from "next/image";

export default function ReadyToGoFurtherSection() {
  return (
    <div className="relative w-full bg-[#0A2E4B] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/compliance/6.png"
          alt="Ready to go further background"
          fill
          priority
          className="object-cover opacity-10 object-center"
        />
      </div>

      {/* Content Container */}
      <section className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Eyebrow Label */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs font-extrabold tracking-wider text-[#8FD0F2] uppercase flex items-center">
            <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#8FD0F2]">
              /
            </span>
            READY TO GO FURTHER?
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Request the evidence your procurement team needs
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button className="px-6 py-3 bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:bg-[#165f95] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer">
            Find a Solution
          </button>

          <button className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white/60 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer">
            Request audit reports
          </button>
        </div>
      </section>
    </div>
  );
}
