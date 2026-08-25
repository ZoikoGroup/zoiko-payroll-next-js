"use client";

import React from "react";

// Entity local deadline row data matching the image layout
const ENTITY_DEADLINES = [
  {
    name: "Zoiko US, Inc.",
    cutoff: "Aug 24, 5:00 PM EST",
    paymentDate: "Aug 29",
    currency: "USD",
    serviceModel: "Direct, self-managed",
  },
  {
    name: "Zoiko GmbH",
    cutoff: "Aug 23, 2:00 PM CET",
    paymentDate: "Aug 28",
    currency: "EUR",
    serviceModel: "Direct, self-managed",
  },
  {
    name: "Zoiko Ltda.",
    cutoff: "Aug 25, 12:00 PM BRT",
    paymentDate: "Aug 30",
    currency: "BRL",
    serviceModel: "Partner-supported",
  },
];

export default function CalendarsCutoffsSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>
              CALENDARS, CUTOFFS, TIME ZONES + CURRENCY / SERVICE MODEL
            </span>
          </div>

          <h2 className="text-3xl md:text-[32px] font-bold text-[#0A1928] leading-tight">
            A global reminder never replaces a local deadline
          </h2>

          <p className="text-sm sm:text-base text-[#5C6E7E] max-w-3xl">
            Each payroll group keeps its own authoritative period, cutoff and
            timezone &mdash; normalized views show the original local date too.
          </p>
        </div>

        {/* Featured Image Banner */}
        <div className="rounded-3xl overflow-hidden h-64 sm:h-80 md:h-96 w-full">
          <img
            src="/images/multi-entity-payroll/write.png"
            alt="Local payroll deadline management"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Stacked Entity Deadline Rows */}
        <div className="space-y-4">
          {ENTITY_DEADLINES.map((row, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E1E8ED] rounded-2xl overflow-hidden shadow-xs flex flex-col md:flex-row items-stretch"
            >
              {/* Left Column: Entity Name */}
              <div className="bg-[#F8FAFC] px-6 py-4 md:w-56 flex items-center border-b md:border-b-0 md:border-r border-[#E1E8ED]">
                <h3 className="text-sm font-bold text-[#0A1928]">{row.name}</h3>
              </div>

              {/* Right Column: Grid Data Points */}
              <div className="p-4 sm:p-5 flex-1 grid grid-cols-2 max-w-2xl sm:grid-cols-4 gap-4 items-center">
                {/* Cutoff */}
                <div className="space-y-1">
                  <span className="text-[11px] text-[#94A3B8] font-medium block">
                    Cutoff
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0A1928]">
                    {row.cutoff}
                  </span>
                </div>

                {/* Payment Date */}
                <div className="space-y-1">
                  <span className="text-[11px] text-[#94A3B8] font-medium block">
                    Payment date
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0A1928]">
                    {row.paymentDate}
                  </span>
                </div>

                {/* Currency */}
                <div className="space-y-1">
                  <span className="text-[11px] text-[#94A3B8] font-medium block">
                    Currency
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0A1928]">
                    {row.currency}
                  </span>
                </div>

                {/* Service Model */}
                <div className="space-y-1">
                  <span className="text-[11px] text-[#94A3B8] font-medium block">
                    Service model
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0A1928]">
                    {row.serviceModel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-xs text-[#5C6E7E]">
          Cross-entity actions evaluate each entity&apos;s current period and
          cutoff state independently. DST/timezone transitions always remain
          explicit.
        </p>
      </div>
    </section>
  );
}
