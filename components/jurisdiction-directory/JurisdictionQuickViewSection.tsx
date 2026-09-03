"use client";

import React from "react";
import Image from "next/image";
import { CheckSquare, Clock, Link as LinkIcon, X } from "lucide-react";

interface CapabilityRow {
  capability: string;
  status: "Conditions" | "Available" | "Not offered";
  delivery: string;
}

const capabilitiesData: CapabilityRow[] = [
  {
    capability: "Payroll processing",
    status: "Conditions",
    delivery: "Connected",
  },
  {
    capability: "Statutory filing",
    status: "Conditions",
    delivery: "Partner",
  },
  {
    capability: "Employee payments",
    status: "Not offered",
    delivery: "—",
  },
  {
    capability: "Payslips",
    status: "Available",
    delivery: "Connected",
  },
  {
    capability: "Year-end",
    status: "Conditions",
    delivery: "Partner",
  },
];

export default function JurisdictionQuickViewSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#FFFFFF00] to-white w-full min-h-[600px] py-16 px-6 lg:px-16 flex items-center justify-center overflow-hidden">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/jurisdiction-directory/bg1.png"
          alt="Architectural building background"
          fill
          className="object-cover opacity-50 object-center"
          priority
        />
        {/* Soft light overlay to ensure high readability of text */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Text Content */}
        <div className="lg:col-span-7 space-y-6">
          {/* Eyebrow Header */}
          <div className="flex items-center gap-2">
            <span className="w-1 h-3.5 bg-[#1483CE] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#1483CE] uppercase">
              JURISDICTION QUICK VIEW
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07243B] tracking-tight leading-tight">
            See full detail without leaving the directory.
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#04212B] font-medium leading-relaxed max-w-xl">
            Selecting &quot;View jurisdiction&quot; opens a quick-view drawer
            with the complete capability matrix, delivery model per capability,
            and links to deeper local content — without losing your place in the
            results.
          </p>

          {/* Bullet Point List */}
          <div className="space-y-3.5 pt-2">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-4 h-4 text-[#1483CE] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-semibold text-[#04212B]">
                Capability matrix shown as Available / Conditions / Not offered
                — text first, never color-only.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#1483CE] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-semibold text-[#04212B]">
                Coverage reviewed date shown in visible text, not implied
                real-time advice.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <LinkIcon className="w-4 h-4 text-[#1483CE] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-semibold text-[#04212B]">
                Direct links to the Country Guide and Local Payroll
                Requirements, when published.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Card/Drawer Preview */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 space-y-6">
            {/* Drawer Header */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#07243B]">Germany</h3>
                <p className="text-xs font-medium text-slate-400">
                  DE · Country · Europe
                </p>
              </div>
              <button className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Info Box */}
            <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100">
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Payroll calculation and payslip generation are available through
                connected payroll. Statutory filing and payments require
                additional confirmation of scope.
              </p>
            </div>

            {/* Matrix Table */}
            <div className="space-y-3">
              {/* Table Header */}
              <div className="grid grid-cols-12 text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
                <span className="col-span-5">CAPABILITY</span>
                <span className="col-span-4 text-center">STATUS</span>
                <span className="col-span-3 text-right">DELIVERY</span>
              </div>

              {/* Table Rows */}
              <div className="space-y-2">
                {capabilitiesData.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 items-center text-xs py-1.5 px-1 border-b border-slate-100/60 last:border-none"
                  >
                    <span className="col-span-5 font-semibold text-[#07243B]">
                      {row.capability}
                    </span>

                    {/* Status Badge */}
                    <div className="col-span-4 flex justify-center">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                          row.status === "Conditions"
                            ? "bg-[#FEF6E6] text-[#8F6B00]"
                            : row.status === "Available"
                              ? "bg-[#E6F4EA] text-[#137333]"
                              : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            row.status === "Conditions"
                              ? "bg-[#8F6B00]"
                              : row.status === "Available"
                                ? "bg-[#137333]"
                                : "bg-slate-400"
                          }`}
                        />
                        {row.status}
                      </span>
                    </div>

                    <span className="col-span-3 text-right font-bold text-[#07243B]">
                      {row.delivery}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div className="space-y-1.5 pt-1 text-xs font-semibold">
              <div>
                <a
                  href="#"
                  className="text-[#1483CE] hover:underline inline-flex items-center gap-1"
                >
                  <span className="text-slate-400 font-normal">—</span> Germany
                  country guide
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-[#1483CE] hover:underline inline-flex items-center gap-1"
                >
                  <span className="text-slate-400 font-normal">—</span> How
                  partner-supported payroll works
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button className="w-full bg-slate-50 hover:bg-slate-100 text-[#07243B] border border-slate-200/80 text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors">
                Add to comparison
              </button>
              <button className="w-full bg-gradient-to-r from-[#3D9BD6] to-[#0C4773] hover:bg-[#008CC2] text-white text-xs font-semibold py-2.5 px-3 rounded-lg shadow-sm transition-colors">
                Discuss this jurisdiction
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
