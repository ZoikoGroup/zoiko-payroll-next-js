"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImplementationStep {
  number: number;
  label: string;
  isActive?: boolean;
}

const steps: ImplementationStep[] = [
  { number: 1, label: "Discovery" },
  { number: 2, label: "Trust config" },
  { number: 3, label: "Mapping" },
  { number: 4, label: "Lifecycle" },
  { number: 5, label: "Test" },
  { number: 6, label: "Security accept." },
  { number: 7, label: "Activation", isActive: true },
  { number: 8, label: "Stabilization" },
];

export default function ImplementationSection() {
  const [formData, setFormData] = useState({
    provider: "",
    tenants: "",
    population: "",
    workEmail: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="w-4 h-[2px] bg-[#0A8FD0] inline-block" />
            <span>IMPLEMENTATION</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[38px] font-bold tracking-tight text-[#07243B] leading-tight">
            Eight governed steps to activation
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Discovery through stabilization — every step evidence-backed.
          </p>
        </div>

        {/* 8-Step Stepper Progress Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-start max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center space-y-2 group"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  step.isActive
                    ? "border-2 border-[#0A8FD0] text-[#0A8FD0] bg-white shadow-xs"
                    : "bg-[#F6F8FB] text-slate-600 border-2 border-[#E3E7EE]"
                }`}
              >
                {step.number}
              </div>
              <span className="text-[11px] font-medium text-slate-500 leading-snug">
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Section: Form + Laptop Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
          {/* Left Column: Form */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#07243B]">
                Custom fit request
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                No passwords, keys, certificates or secrets — ever.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Provider / directory"
                  value={formData.provider}
                  onChange={(e) =>
                    setFormData({ ...formData, provider: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0A8FD0] transition-colors bg-white"
                />
                <input
                  type="text"
                  placeholder="Tenants / domains"
                  value={formData.tenants}
                  onChange={(e) =>
                    setFormData({ ...formData, tenants: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0A8FD0] transition-colors bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Population range"
                  value={formData.population}
                  onChange={(e) =>
                    setFormData({ ...formData, population: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0A8FD0] transition-colors bg-white"
                />
                <input
                  type="email"
                  placeholder="Work email"
                  value={formData.workEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, workEmail: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0A8FD0] transition-colors bg-white"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3.5 bg-[#0A8FD0] hover:bg-[#087BB5] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Submit fit request
              </button>
            </form>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[5/3] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/footer-integrations/41.png"
                alt="Person using dashboard on laptop showing system analytics"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
