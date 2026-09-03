"use client";

import React from "react";
import Image from "next/image";

export default function ReadyToGoFurtherSection() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-[#0A2E4B] min-h-[300px] sm:min-h-[360px] p-8 sm:p-12 text-white shadow-xl flex flex-col items-center justify-center text-center">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/resources/19.png"
              alt="Team collaborating in modern office space"
              fill
              className="object-cover object-center opacity-15 mix-blend-luminosity"
              priority
            />
            {/* Dark Tint Overlay */}
          </div>

          {/* Call to Action Content */}
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto flex flex-col items-center">
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                READY TO GO FURTHER?
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white">
              See the proof, then decide what&apos;s next
            </h2>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#"
                className="bg-gradient-to-r from-[#3D9BD6] to-[#0C4773] hover:opacity-95 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-xs transition-opacity cursor-pointer"
              >
                Book a demo
              </a>
              <a
                href="#"
                className="hover:bg-[#0B253C]/90 text-white border border-slate-400/40 text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-xs transition-colors cursor-pointer backdrop-blur-xs"
              >
                Explore Global Payroll
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
