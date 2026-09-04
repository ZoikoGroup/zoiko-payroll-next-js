import React from "react";
// If importing locally from assets: import iiImg from "../assets/ii.png";

export default function FinalConversionSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0b283d] py-24">
        {/* Background Image with Deep Blue Corporate Tint */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/ii.png" // or {iiImg}
            alt="Office background"
            className="h-full w-full object-cover opacity-30 mix-blend-luminosity"
          />
          {/* Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a263d]/95 via-[#123e63]/85 to-[#0a263d]/95" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            {/* Eyebrow */}
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
                / FINAL CONVERSION
              </span>
            </div>

            {/* Heading - Strictly 1 line */}
            <h2 className="whitespace-nowrap text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-white">
              Connect only what your operating model actually needs
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-sm sm:text-base font-normal leading-6 text-[#c5dbe9]/90">
              Use Zoiko Payroll independently, or discuss how approved Zoiko One<br className="hidden sm:inline" />
              connections could support a broader operating model — with explicit<br className="hidden sm:inline" />
              authority, access, data, workflow, monitoring and support boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* 10px White Gap */}
      <div className="h-[10px] w-full bg-white" />
    </>
  );
}