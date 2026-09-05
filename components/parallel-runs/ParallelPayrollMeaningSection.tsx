"use client";

import React from "react";
import Image from "next/image";

export default function ParallelPayrollMeaningSection() {
  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full h-[320px] sm:h-[350px] lg:h-[350px] rounded-2xl overflow-hidden">
              <Image
                src="/images/parallel/1.png"
                alt="Team collaborating around a conference table in a modern office"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Category Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#0A78C3]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0A78C3] uppercase">
                Methodology
              </span>
            </div>

            {/* Main Section Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] tracking-tight leading-tight mb-8">
              What parallel payroll means.
            </h2>

            {/* Content Blocks */}
            <div className="flex flex-col gap-6">
              {/* Parallel payroll is */}
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#16A34A] mb-1">
                  Parallel payroll is
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  A controlled comparison. A validation methodology.
                  Evidence-based testing.
                </p>
              </div>

              {/* Parallel payroll is not */}
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#DC2626] mb-1">
                  Parallel payroll is not
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  A guarantee of zero future issues. Only a gross-to-net
                  comparison. A checkbox before launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
