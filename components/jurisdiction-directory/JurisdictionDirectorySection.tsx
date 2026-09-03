"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Globe, ChevronDown } from "lucide-react";

interface Capability {
  label: string;
  status?: "available" | "conditions" | "not-offered";
}

interface Jurisdiction {
  code: string;
  name: string;
  type: string;
  subLink?: string;
  deliveryModels: string[];
  capabilities: Capability[];
  hasGuide?: boolean;
  hasRequirements?: boolean;
  reviewedDate: string;
}

const jurisdictionsData: Jurisdiction[] = [
  {
    code: "US",
    name: "United States",
    type: "Country · Americas",
    subLink: "50 states apply · View sub-jurisdictions →",
    deliveryModels: ["Zoiko Payroll", "Partner-supported (filing)"],
    capabilities: [
      { label: "Payroll processing", status: "available" },
      { label: "Payslips", status: "available" },
      { label: "Filing & reporting", status: "conditions" },
      { label: "Payments", status: "available" },
      { label: "Year-end", status: "available" },
    ],
    hasGuide: true,
    hasRequirements: true,
    reviewedDate: "Jul 2026",
  },
  {
    code: "GB",
    name: "United Kingdom",
    type: "Country · Europe",
    deliveryModels: ["Zoiko Payroll"],
    capabilities: [
      { label: "Payroll processing", status: "available" },
      { label: "Payslips", status: "available" },
      { label: "Filing & reporting", status: "available" },
      { label: "Payments", status: "available" },
      { label: "Year-end", status: "available" },
    ],
    hasGuide: true,
    hasRequirements: true,
    reviewedDate: "Aug 2026",
  },
  {
    code: "DE",
    name: "Germany",
    type: "Country · Europe",
    deliveryModels: ["Connected payroll"],
    capabilities: [
      { label: "Payroll processing", status: "conditions" },
      { label: "Payslips", status: "available" },
      { label: "Filing & reporting", status: "conditions" },
      { label: "Payments", status: "available" },
      { label: "Year-end", status: "available" },
    ],
    hasGuide: true,
    hasRequirements: false,
    reviewedDate: "Jun 2026",
  },
  {
    code: "SG",
    name: "Singapore",
    type: "Country · Asia-Pacific",
    deliveryModels: ["Zoiko Payroll"],
    capabilities: [
      { label: "Payroll processing", status: "available" },
      { label: "Payslips", status: "available" },
      { label: "Filing & reporting", status: "available" },
      { label: "Payments", status: "available" },
      { label: "Year-end", status: "available" },
    ],
    hasGuide: true,
    hasRequirements: true,
    reviewedDate: "Aug 2026",
  },
  {
    code: "BR",
    name: "Brazil",
    type: "Country · Americas",
    deliveryModels: ["Partner-supported"],
    capabilities: [
      { label: "Payroll processing", status: "conditions" },
      { label: "Payslips", status: "available" },
      { label: "Filing & reporting", status: "conditions" },
      { label: "Payments", status: "available" },
      { label: "Year-end", status: "available" },
    ],
    hasGuide: true,
    hasRequirements: false,
    reviewedDate: "May 2026",
  },
  {
    code: "IN",
    name: "India",
    type: "Country · Asia-Pacific",
    subLink: "State professional tax applies · View sub-jurisdictions →",
    deliveryModels: ["Zoiko Payroll", "Partner-supported (filing)"],
    capabilities: [
      { label: "Payroll processing", status: "available" },
      { label: "Payslips", status: "available" },
      { label: "Filing & reporting", status: "conditions" },
      { label: "Payments", status: "available" },
      { label: "Year-end", status: "available" },
    ],
    hasGuide: true,
    hasRequirements: true,
    reviewedDate: "Jul 2026",
  },
];

export default function JurisdictionDirectorySection() {
  const [selectedItems, setSelectedItems] = useState<string[]>(["DE"]);

  const toggleSelect = (code: string) => {
    if (selectedItems.includes(code)) {
      setSelectedItems(selectedItems.filter((item) => item !== code));
    } else {
      if (selectedItems.length < 4) {
        setSelectedItems([...selectedItems, code]);
      }
    }
  };

  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 text-[#0F172A] overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src="/images/jurisdiction-directory/bg.png"
          alt="World map dot pattern background"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Filters Toolbar */}
        <div className="bg-white/90 backdrop-blur-xs rounded-xl border border-slate-200/80 p-3 shadow-2xs flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {/* Region Dropdown Filter */}
            <button className="bg-[#EBF5FB] text-[#0A8FD0] border border-[#BEE3F8] text-xs font-semibold px-3 py-1.5 rounded-md flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>Region: All</span>
              <ChevronDown className="w-3 h-3 opacity-70" />
            </button>

            {/* Other Filter Buttons */}
            {[
              "Delivery model",
              "Capabilities",
              "Guide available",
              "Jurisdiction type",
            ].map((filter, idx) => (
              <button
                key={idx}
                className="bg-white hover:bg-slate-50 text-[#07243B] border border-slate-200/80 text-xs font-semibold px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors"
              >
                <span>{filter}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
            ))}
          </div>

          <button className="text-xs font-semibold text-[#0A8FD0] hover:underline px-2">
            Clear all
          </button>
        </div>

        {/* Directory Bar Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#07243B]">
              48 jurisdictions
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Coverage may vary by capability and service scope.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              disabled={selectedItems.length === 0}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-md border border-slate-200 shadow-2xs transition-all ${
                selectedItems.length > 0
                  ? "bg-white text-[#07243B] hover:bg-slate-50 cursor-pointer"
                  : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
            >
              Compare selected ({selectedItems.length}/4)
            </button>

            <button className="bg-white text-[#07243B] border border-slate-200/80 text-xs font-semibold px-3 py-1.5 rounded-md flex items-center gap-1.5">
              <span>Sort: A–Z</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Jurisdiction List Cards */}
        <div className="space-y-3">
          {jurisdictionsData.map((item) => {
            const isSelected = selectedItems.includes(item.code);

            return (
              <div
                key={item.code}
                className="bg-white/95 backdrop-blur-xs rounded-xl border border-slate-200/80 p-5 shadow-2xs hover:border-slate-300 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                {/* Left Side Container: Grid layout ensures exact horizontal alignment */}
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-6 flex-1">
                  {/* Column 1: Country Flag + Info */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-slate-100 border border-slate-200/60 flex items-center justify-center text-[11px] font-bold text-slate-600 shrink-0 mt-0.5">
                      {item.code}
                    </div>

                    <div className="space-y-0.5">
                      <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
                        {item.name}
                      </h3>

                      <p className="text-xs text-slate-400 font-medium">
                        {item.type}
                      </p>

                      {item.subLink && (
                        <a
                          href="#"
                          className="inline-block text-xs font-semibold text-[#0A8FD0] hover:underline pt-0.5"
                        >
                          {item.subLink}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Column 2: Horizontal Row with Delivery Models & Capability Badges */}
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Delivery Model Badges */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {item.deliveryModels.map((model, idx) => {
                        const isPartner = model.includes("Partner");
                        return (
                          <span
                            key={idx}
                            className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${
                              isPartner
                                ? "bg-white text-black border-slate-200"
                                : "bg-white text-black border-slate-200"
                            }`}
                          >
                            {model}
                          </span>
                        );
                      })}
                    </div>

                    {/* Capability Badges side-by-side with delivery models */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {item.capabilities.map((cap, idx) => (
                        <span
                          key={idx}
                          className="bg-[#EEF3F9] text-[#07243B] text-[11px] font-medium px-2 py-0.5 rounded-md border border-slate-200/80 flex items-center gap-1.5"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              cap.status === "conditions"
                                ? "bg-[#8F6B00]"
                                : cap.status === "not-offered"
                                  ? "bg-slate-400"
                                  : "bg-[#137333]"
                            }`}
                          />
                          {cap.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Links, Date, Checkbox & Button */}
                <div className="flex flex-col items-start lg:items-end gap-1.5 shrink-0">
                  <div className="flex items-center gap-3 text-xs font-semibold">
                    {item.hasGuide && (
                      <a href="#" className="text-[#0A8FD0] hover:underline">
                        Guide
                      </a>
                    )}
                    {item.hasRequirements && (
                      <a href="#" className="text-[#0A8FD0] hover:underline">
                        Requirements
                      </a>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-400 font-medium">
                    Coverage reviewed {item.reviewedDate}
                  </p>

                  <div className="flex items-center gap-3 pt-1">
                    <label className="flex items-center gap-1.5 text-xs font-medium text-slate-600 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelect(item.code)}
                        className="w-3.5 h-3.5 text-[#0A8FD0] rounded border-slate-300 focus:ring-0"
                      />
                      <span>Compare</span>
                    </label>

                    <button className="bg-slate-50 hover:bg-slate-100 text-[#07243B] border border-slate-200 text-xs font-semibold px-3 py-1.5 rounded-md transition-colors">
                      View jurisdiction
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
