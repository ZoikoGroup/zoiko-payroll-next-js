"use client";

import React from "react";
import Reveal from "../ui/Reveal";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-b from-[#082f49] via-[#0b1f3f] via-50% to-[#082f49] relative w-full py-[88px]">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative">
        <Reveal className="flex flex-col gap-[15px] items-center justify-center text-center max-w-[950px]">
          
          <div className="flex flex-col items-center w-full">
            <p className="font-bold text-[#8fa6ff] text-[11px] tracking-[1.54px] m-0 leading-normal uppercase">
              READY TO GOVERN PAYROLL AT ENTERPRISE SCALE?
            </p>
          </div>
          
          <div className="flex flex-col items-center w-full">
            <h2 className="font-bold text-white text-[32px] md:text-[42px] tracking-[-1.05px] m-0 leading-[1.1] md:leading-[46.2px]">
              Govern Complex Payroll Operations with Clear Enterprise Control
            </h2>
          </div>
          
          <div className="flex flex-col items-center w-full max-w-[900px] mt-[1.7px]">
            <p className="font-normal text-[#aeb6c2] text-[16px] leading-[25.6px] m-0">
              See how Zoiko Payroll can give global payroll, finance, HR, IT and authorized stakeholders a governed operating view across entities, payroll groups, approvals, reconciliation, integrations and assurance obligations—while preserving accountable regional and local ownership.
            </p>
          </div>

          <div className="flex flex-wrap gap-[12px] items-center justify-center mt-[12.8px]">
            <button className="bg-white rounded-[9px] px-[22px] min-h-[44px] flex items-center justify-center font-semibold text-[#0b1220] text-[15px] hover:bg-gray-100 transition-colors">
              Book a demo
            </button>
            <button className="border border-[#2e3b52] rounded-[9px] px-[22px] min-h-[44px] flex items-center justify-center font-semibold text-white text-[15px] hover:bg-[#1a3d54] transition-colors">
              Find your solution
            </button>
          </div>

        </Reveal>
      </div>
    </section>
  );
}
