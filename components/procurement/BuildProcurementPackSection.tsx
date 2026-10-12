"use client";

import React, { useState } from "react";

interface ResourceOption {
  id: string;
  label: string;
  selected: boolean;
}

export default function BuildProcurementPackSection() {
  const [resources, setResources] = useState<ResourceOption[]>([
    { id: "commercial", label: "Commercial", selected: true },
    { id: "legal", label: "Legal", selected: true },
    { id: "privacy", label: "Privacy", selected: false },
    { id: "security", label: "Security", selected: true },
    { id: "accessibility", label: "Accessibility", selected: false },
    { id: "implementation", label: "Implementation", selected: false },
    {
      id: "supplier-onboarding",
      label: "Supplier onboarding",
      selected: false,
    },
    { id: "full-pack", label: "Full procurement pack", selected: false },
  ]);

  const toggleResource = (id: string) => {
    setResources(
      resources.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      ),
    );
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF4F7] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block with Right-aligned Subtext */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            {/* Eyebrow Label with #0A78C3 text color */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-wider text-[#0A78C3] uppercase flex items-center">
                <span className="text-sm font-light mr-1.5 inline-block">
                  /
                </span>
                BUILD A PROCUREMENT PACK
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight max-w-xl">
              Assemble a relevant evidence set in minutes.
            </h2>
          </div>

          {/* Right Subtext */}
          <p className="text-xs text-slate-400 font-medium pb-1 max-w-xs md:text-right">
            Advisory routing only — restricted evidence stays gated until access
            policy is satisfied.
          </p>
        </div>

        {/* Wizard Card Container */}
        <div className="bg-white border border-slate-200/80 rounded-3xl shadow-lg overflow-hidden">
          {/* Top Dark Header Band */}
          <div className="bg-[#051C2C] px-6 sm:px-8 py-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-sm font-bold tracking-tight text-white">
                What are you reviewing?
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                Question 1 of 5 — select all that apply
              </p>
            </div>

            {/* Progress Bars / Steps */}
            <div className="flex items-center gap-1.5">
              <span className="w-6 h-1.5 bg-[#2A87C8] rounded-full" />
              <span className="w-6 h-1.5 bg-slate-700 rounded-full" />
              <span className="w-6 h-1.5 bg-slate-700 rounded-full" />
              <span className="w-6 h-1.5 bg-slate-700 rounded-full" />
              <span className="w-6 h-1.5 bg-slate-700 rounded-full" />
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                REVIEW SCOPE
              </span>
              <h4 className="text-base sm:text-lg font-extrabold text-[#07243B]">
                Select the resource families you need
              </h4>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {resources.map((item) => {
                const isSelected = item.selected;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleResource(item.id)}
                    className={`px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-center flex items-center justify-center ${
                      isSelected
                        ? "bg-[#E6F3FC] text-[#0A78C3] border border-[#0A78C3]/40 shadow-xs"
                        : "bg-white text-[#07243B] border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <button
                type="button"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#07243B] text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                Back
              </button>

              <button
                type="button"
                className="px-6 py-3 rounded-xl bg-[#2A87C8] hover:bg-[#2374ac] text-white text-xs font-bold shadow-md shadow-[#2A87C8]/25 transition-all cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
