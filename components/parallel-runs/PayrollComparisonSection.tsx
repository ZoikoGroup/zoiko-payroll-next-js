"use client";

import React from "react";
import Image from "next/image";

export default function PayrollComparisonSection() {
  const metrics = [
    {
      label: "Population",
      value: "1,248 → 1,248",
      badge: "Match",
      status: "match",
    },
    {
      label: "Gross pay",
      value: "€4.82M → €4.82M",
      badge: "Match",
      status: "match",
    },
    {
      label: "Deductions",
      value: "€1.14M → €1.15M",
      badge: "Variance",
      status: "variance",
    },
    {
      label: "Tax",
      value: "€1.61M → €1.61M",
      badge: "Match",
      status: "match",
    },
    {
      label: "Net pay",
      value: "€2.07M → €2.06M",
      badge: "Variance",
      status: "variance",
    },
    {
      label: "Payment files",
      value: "Generated → Generated",
      badge: "Match",
      status: "match",
    },
    {
      label: "GL / finance",
      value: "Balanced → Balanced",
      badge: "Match",
      status: "match",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Main Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] text-center tracking-tight leading-tight mb-12 max-w-xl">
          Legacy and Zoiko payroll, compared line by line.
        </h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-stretch">
          {/* Left Side: 2-Column Metrics Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metrics.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between min-h-[110px]"
              >
                <p className="text-xs font-medium text-[#64748B]">
                  {item.label}
                </p>
                <p className="text-base sm:text-lg font-bold text-[#0B192C] my-1">
                  {item.value}
                </p>
                <div>
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      item.status === "match"
                        ? "bg-[#DCFCE7] text-[#16A34A]"
                        : "bg-[#FEF3C7] text-[#D97706]"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}

            {/* Final Highlight Box (Under Investigation) */}
            <div className="bg-[#F0F7FF] rounded-2xl border border-[#D0E2FF] p-5 shadow-xs flex flex-col items-center justify-center text-center min-h-[110px]">
              <p className="text-xs font-medium text-[#475569]">2 categories</p>
              <p className="text-base sm:text-lg font-extrabold text-[#0B192C] tracking-tight">
                under investigation
              </p>
            </div>
          </div>

          {/* Right Side: Two Stacked Images Container */}
          <div className="lg:col-span-5 flex flex-col rounded-3xl overflow-hidden shadow-lg border border-[#E2E8F0]">
            {/* Top Image (Legacy Payroll / Frustrated User) */}
            <div className="relative w-full h-[220px] sm:h-[260px]">
              <Image
                src="/images/parallel/2.png"
                alt="Stressed professional analyzing complex legacy payroll metrics"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="relative w-full h-[220px] sm:h-[260px]">
              <Image
                src="/images/parallel/3.png"
                alt="Confident specialist reviewing clean dashboard on laptop with Zoiko Payroll"
                fill
                className="object-cover object-center"
                priority
              />

              {/* Badge Tag on Top Right of Bottom Image */}
              <div className="absolute top-4 right-4 bg-[#0B253C]/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-md">
                Zoiko Payroll
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
