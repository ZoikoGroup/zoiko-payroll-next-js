"use client";

import React from "react";
import Image from "next/image";

export default function ZoikoPayrollApiHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0F3556] py-20 px-4 sm:px-6 lg:px-8 text-white min-h-[540px] flex items-center">
      {/* Background Image Layer with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-integrations/bg3.png"
          alt="Background pattern"
          fill
          className="object-cover object-center opacity-30 mix-blend-overlay"
          priority
        />
        {/* Subtle Gradient Overlays for depth matching design */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071C2EF2] via-[#0A3254E5] to-[#0A8FD0A6]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase">
              <span className="text-base leading-none">/</span>
              <span>ZOIKO PAYROLL API</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
              Build payroll integrations from documented contracts
            </h1>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
              Use source-governed API documentation to find approved resources,
              authenticate safely, understand request and response behavior,
              handle errors and track version changes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:bg-[#087bb5] text-white text-xs font-semibold px-6 py-3.5 rounded-xl shadow-md transition-colors cursor-pointer">
                Explore API documentation
              </button>
              <button className="border border-slate-500/80 hover:border-slate-300 text-white text-xs font-semibold px-6 py-3.5 rounded-xl transition-colors cursor-pointer backdrop-blur-xs">
                View integration use cases
              </button>
            </div>

            {/* Footer Text Links */}
            <div className="pt-2 text-[11px] text-slate-400">
              Existing developer?{" "}
              <a
                href="#api-changes"
                className="text-[#8FD0F2] hover:text-white transition-colors"
              >
                View API changes
              </a>{" "}
              ·{" "}
              <a
                href="#support"
                className="text-[#8FD0F2] hover:text-white transition-colors"
              >
                Get integration support
              </a>
            </div>
          </div>

          {/* Right Column Featured Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/footer-integrations/33.png" // Replace with your main section image path
                alt="Developer interacting with Zoiko Payroll API documentation on laptop with desk context"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
