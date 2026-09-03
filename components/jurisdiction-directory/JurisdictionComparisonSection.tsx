"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

interface ComparisonRow {
  dimension: string;
  germany: {
    text: string;
    type: "text" | "badge";
    status?: "conditions" | "available" | "not-offered";
  };
  singapore: {
    text: string;
    type: "text" | "badge";
    status?: "conditions" | "available" | "not-offered";
  };
}

const comparisonData: ComparisonRow[] = [
  {
    dimension: "Delivery model",
    germany: { text: "Connected payroll", type: "text" },
    singapore: { text: "Zoiko Payroll", type: "text" },
  },
  {
    dimension: "Payroll processing",
    germany: { text: "Conditions", type: "badge", status: "conditions" },
    singapore: { text: "Available", type: "badge", status: "available" },
  },
  {
    dimension: "Filing / reporting",
    germany: { text: "Conditions", type: "badge", status: "conditions" },
    singapore: { text: "Available", type: "badge", status: "available" },
  },
  {
    dimension: "Employee payments",
    germany: { text: "Not offered", type: "badge", status: "not-offered" },
    singapore: { text: "Available", type: "badge", status: "available" },
  },
  {
    dimension: "Year-end",
    germany: { text: "Conditions", type: "badge", status: "conditions" },
    singapore: { text: "Not offered", type: "badge", status: "not-offered" },
  },
  {
    dimension: "Guide availability",
    germany: { text: "Available", type: "badge", status: "available" },
    singapore: { text: "Available", type: "badge", status: "available" },
  },
  {
    dimension: "Coverage reviewed",
    germany: { text: "Jun 2026", type: "text" },
    singapore: { text: "Aug 2026", type: "text" },
  },
];

export default function JurisdictionComparisonSection() {
  const [selectedJurisdictions, setSelectedJurisdictions] = useState([
    { code: "DE", name: "Germany", flag: "🇩🇪" },
    { code: "SG", name: "Singapore", flag: "🇸🇬" },
  ]);

  const removeJurisdiction = (code: string) => {
    setSelectedJurisdictions(
      selectedJurisdictions.filter((j) => j.code !== code),
    );
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Comparison Section */}
        <div className="space-y-6">
          {/* Section Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#00A3E0] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#00A3E0] uppercase">
                COMPARE JURISDICTIONS
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07243B] tracking-tight">
              Compare service scope, not legal outcomes.
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-2xl leading-relaxed">
              Add up to four jurisdictions to compare delivery model,
              capabilities, and guide availability side by side. This compares
              Zoiko Payroll service availability — not tax burden or legal risk.
            </p>
          </div>

          {/* Comparison Table Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
            {/* Table Control Bar */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {selectedJurisdictions.map((item) => (
                  <div
                    key={item.code}
                    className="bg-slate-50 border border-slate-200 text-xs font-bold text-[#07243B] px-3 py-1.5 rounded-lg flex items-center gap-2"
                  >
                    <span>{item.flag}</span>
                    <span>{item.name}</span>
                    <button
                      onClick={() => removeJurisdiction(item.code)}
                      className="text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}

                {selectedJurisdictions.length < 4 && (
                  <button className="border border-dashed border-slate-300 hover:border-slate-400 text-slate-500 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add jurisdiction</span>
                  </button>
                )}
              </div>

              <button className="bg-gradient-to-r from-[#3D9BD6] to-[#0C4773] hover:bg-[#087BB5] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
                Talk to a specialist about these
              </button>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/70 text-[11px] font-bold text-slate-400 uppercase border-b border-slate-100">
                    <th className="py-3 px-6 w-1/3">Dimension</th>
                    <th className="py-3 px-6 w-1/3">Germany</th>
                    <th className="py-3 px-6 w-1/3">Singapore</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium">
                  {comparisonData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/40 transition-colors"
                    >
                      <td className="py-3.5 px-6 font-semibold text-slate-500">
                        {row.dimension}
                      </td>

                      {/* Germany Column */}
                      <td className="py-3.5 px-6">
                        {row.germany.type === "text" ? (
                          <span className="font-bold text-[#07243B]">
                            {row.germany.text}
                          </span>
                        ) : (
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              row.germany.status === "conditions"
                                ? "bg-[#FEF6E6] text-[#8F6B00]"
                                : row.germany.status === "available"
                                  ? "bg-[#E6F4EA] text-[#137333]"
                                  : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                row.germany.status === "conditions"
                                  ? "bg-[#8F6B00]"
                                  : row.germany.status === "available"
                                    ? "bg-[#137333]"
                                    : "bg-slate-400"
                              }`}
                            />
                            {row.germany.text}
                          </span>
                        )}
                      </td>

                      {/* Singapore Column */}
                      <td className="py-3.5 px-6">
                        {row.singapore.type === "text" ? (
                          <span className="font-bold text-[#07243B]">
                            {row.singapore.text}
                          </span>
                        ) : (
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              row.singapore.status === "conditions"
                                ? "bg-[#FEF6E6] text-[#8F6B00]"
                                : row.singapore.status === "available"
                                  ? "bg-[#E6F4EA] text-[#137333]"
                                  : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                row.singapore.status === "conditions"
                                  ? "bg-[#8F6B00]"
                                  : row.singapore.status === "available"
                                    ? "bg-[#137333]"
                                    : "bg-slate-400"
                              }`}
                            />
                            {row.singapore.text}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Jurisdictions Banner */}
        <div className="bg-[#0B2545] rounded-2xl p-6 sm:p-10 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-lg">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#00A3E0] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#00A3E0] uppercase">
                SUB-JURISDICTIONS
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
              Payroll jurisdiction is often layered.
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              The United States has federal, state and local obligations. Canada
              has federal and provincial distinctions. Coverage never inherits
              automatically — each layer is modeled and effective-dated on its
              own.
            </p>

            <p className="text-[11px] text-slate-400 leading-normal">
              Parent jurisdiction support never implies every child jurisdiction
              is supported. Child records inherit only explicitly permitted
              metadata.
            </p>
          </div>

          {/* Right Visual Stack Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-xl p-5 space-y-3 text-[#07243B] shadow-md">
              {/* Country Box */}
              <div className="bg-[#EDF4F9] rounded-lg p-3 text-xs sm:text-sm font-bold flex items-center gap-2 border border-slate-200/50">
                <span>🇺🇸</span>
                <span>United States — Country</span>
              </div>

              {/* State Box */}
              <div className="bg-white rounded-lg p-3 text-xs sm:text-sm font-bold border border-slate-200">
                California — State payroll rules apply
              </div>

              {/* Local Box */}
              <div className="bg-white rounded-lg p-3 text-xs text-slate-500 font-medium border border-dashed border-slate-300">
                San Francisco — Local payroll tax layer
              </div>

              {/* Sub-pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["Texas", "New York", "Illinois"].map((state) => (
                  <span
                    key={state}
                    className="bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-semibold px-3 py-1 rounded-md"
                  >
                    {state}
                  </span>
                ))}
                <span className="bg-slate-50 border border-slate-200 text-slate-500 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  +47 more
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
