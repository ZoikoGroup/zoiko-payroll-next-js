"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";

export default function PackBuilderSection() {
  const initialOptions = [
    { id: "commercial", label: "Commercial", selected: true },
    { id: "legal", label: "Legal", selected: true },
    { id: "privacy", label: "Privacy", selected: false },
    { id: "security", label: "Security", selected: true },
    { id: "accessibility", label: "Accessibility", selected: false },
    { id: "implementation", label: "Implementation", selected: false },
    { id: "supplier-onboarding", label: "Supplier onboarding", selected: false },
    { id: "full-pack", label: "Full procurement pack", selected: false },
  ];

  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(() =>
    initialOptions.reduce((acc, item) => ({ ...acc, [item.id]: item.selected }), {})
  );

  const toggleOption = (id: string) => {
    setSelectedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="bg-[#EFF4F7] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-8">
            {/* Section Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col gap-3.5">
                {/* Category Tag */}
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-[#0A78C2]">/</span>
                  <span className="text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide text-[#0A78C2]">
                    Build a procurement pack
                  </span>
                </div>

                {/* Title */}
                <h2 className="max-w-[640px] text-3xl font-extrabold font-['Inter'] leading-9 text-[#051B2B]">
                  Assemble a relevant evidence set in
                  <br />
                  minutes.
                </h2>
              </div>

              {/* Description - Reduced thickness */}
              <p className="max-w-[360px] text-sm font-[300] font-['Inter'] leading-5 text-[#64748B]">
                Advisory routing only — restricted evidence<br />
                stays gated until access policy is satisfied.
              </p>
            </div>

            {/* Interactive Pack Builder Card */}
            <div className="overflow-hidden rounded-[20px] border border-[#DCE6EC] bg-white shadow-[0px_10px_28px_0px_rgba(8,47,73,0.08)]">
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 bg-[#051B2B] px-8 py-5">
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-extrabold font-['Inter'] leading-6 text-white">
                    What are you reviewing?
                  </h3>
                  <p className="text-xs font-normal font-['Inter'] leading-5 text-[#959595]">
                    Question 1 of 5 — select all that apply
                  </p>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-7 rounded-full bg-[#0A78C2]" />
                  <div className="h-1.5 w-7 rounded-full bg-white/15" />
                  <div className="h-1.5 w-7 rounded-full bg-white/15" />
                  <div className="h-1.5 w-7 rounded-full bg-white/15" />
                  <div className="h-1.5 w-7 rounded-full bg-white/15" />
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col gap-[23px] p-8">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold font-['Inter'] uppercase tracking-wider text-[#4E6172]">
                    Review scope
                  </span>
                  <h4 className="text-lg font-extrabold font-['Inter'] leading-7 text-[#051B2B]">
                    Select the resource families you need
                  </h4>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
                  {initialOptions.map((option) => {
                    const isSelected = selectedItems[option.id];
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => toggleOption(option.id)}
                        className={`flex h-[46px] items-center justify-center rounded-[10px] px-4 text-xs font-bold font-['Inter'] leading-5 transition-all border ${
                          isSelected
                            ? "border-[#0A78C2] bg-[#E8F4FA] text-[#0A78C2]"
                            : "border-[#DCE6EC] bg-white text-[#051B2B] hover:border-[#0A78C2]/50 hover:bg-slate-50/50"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>

                {/* Actions Footer */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    className="rounded-[10px] border border-[#DCE6EC] bg-white px-6 py-2.5 text-xs font-bold font-['Inter'] leading-5 text-[#051B2B] transition-colors hover:bg-slate-50"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="rounded-[10px] bg-[#0A78C2] px-6 py-2.5 text-xs font-bold font-['Inter'] leading-5 text-white shadow-[0px_4px_14px_0px_rgba(10,120,194,0.30)] transition-colors hover:bg-[#0867A6]"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}