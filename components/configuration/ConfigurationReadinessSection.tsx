"use client";

import React from "react";

export default function ConfigurationReadinessSection() {
  const wavesData = [
    {
      title: "WAVE 1 · UK + US",
      countries: [
        {
          name: "United Kingdom",
          flag: "🇬🇧",
          items: [
            { label: "Structures", status: "Ready", type: "green" },
            { label: "Components", status: "Ready", type: "green" },
            { label: "Rules", status: "Validated", type: "blue" },
            { label: "GL", status: "In review", type: "yellow" },
          ],
        },
        {
          name: "United States",
          flag: "🇺🇸",
          items: [
            { label: "Structures", status: "Ready", type: "green" },
            { label: "Components", status: "Preparation", type: "yellow" },
            { label: "Rules", status: "Ready", type: "green" },
            { label: "Integrations", status: "Ready", type: "green" },
          ],
        },
      ],
    },
    {
      title: "WAVE 2 · Germany + India",
      countries: [
        {
          name: "Germany",
          flag: "🇩🇪",
          items: [
            { label: "Entity inputs", status: "Gap", type: "red" },
            { label: "Rules", status: "Awaiting value", type: "yellow" },
            { label: "GL", status: "Not assessed", type: "gray" },
          ],
        },
        {
          name: "India",
          flag: "🇮🇳",
          items: [
            { label: "Pay groups", status: "Ready", type: "green" },
            { label: "Components", status: "In review", type: "yellow" },
            { label: "Integration", status: "Preparation", type: "yellow" },
          ],
        },
      ],
    },
  ] as const;

  const getStatusStyles = (type: string) => {
    switch (type) {
      case "green":
        return {
          bg: "bg-[#E3F0E7]",
          text: "text-[#20502F]",
          dot: "bg-[#20502F]",
        };
      case "yellow":
        return {
          bg: "bg-[#F1EAD8]",
          text: "text-[#6B5A20]",
          dot: "bg-[#6B5A20]",
        };
      case "red":
        return {
          bg: "bg-[#F4E0DF]",
          text: "text-[#7A2530]",
          dot: "bg-[#7A2530]",
        };
      case "blue":
        return {
          bg: "bg-[#E4F1FA]",
          text: "text-[#0A78C3]",
          dot: "bg-[#0A78C3]",
        };
      case "gray":
      default:
        return {
          bg: "bg-[#F1F5F9]",
          text: "text-[#64748B]",
          dot: "bg-[#64748B]",
        };
    }
  };

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-start px-4 sm:px-6">
        {/* Category Header */}
        <div className="flex items-start gap-2 mb-3">
          <span className="text-[#0A78C3] font-bold text-sm">/</span>
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0A78C3] uppercase">
            COUNTRY / WAVE CONFIGURATION READINESS
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0B192C] text-start tracking-tight mb-10 max-w-2xl leading-tight">
          Readiness is local and workstream-specific — never one global
          percentage.
        </h2>

        {/* Waves Container */}
        <div className="w-full flex flex-col">
          {wavesData.map((wave, waveIdx) => (
            <div
              key={waveIdx}
              className="bg-white border border-[#E2E8F0] shadow-sm overflow-hidden"
            >
              {/* Header Bar */}
              <div className="bg-[#0D3350] px-6 py-3.5 text-white text-xs sm:text-[13px] font-bold tracking-wide uppercase">
                {wave.title}
              </div>

              {/* Cards Inner Grid */}
              <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 bg-[#F8FAFC]/50">
                {wave.countries.map((country, countryIdx) => (
                  <div
                    key={countryIdx}
                    className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-2xs flex flex-col justify-between"
                  >
                    {/* Country Header */}
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#E2E8F0]/60">
                      <span className="text-base">{country.flag}</span>
                      <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                        {country.name}
                      </h3>
                    </div>

                    {/* Status List */}
                    <div className="flex flex-col gap-3">
                      {country.items.map((item, itemIdx) => {
                        const style = getStatusStyles(item.type);
                        return (
                          <div
                            key={itemIdx}
                            className="flex items-center justify-between text-xs"
                          >
                            <span className="text-[#64748B] font-medium">
                              {item.label}
                            </span>
                            <div
                              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${style.bg} ${style.text} text-[11px] font-semibold`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${style.dot}`}
                              />
                              <span>{item.status}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
