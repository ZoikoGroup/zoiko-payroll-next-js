"use client";

import React from "react";

interface ServiceLayer {
  title: string;
  description: string;
}

const serviceLayers: ServiceLayer[] = [
  {
    title: "Managed Payroll",
    description: "Operational payroll service performed for agreed activities.",
  },
  {
    title: "Filing & Reporting",
    description: "Defined statutory preparation and/or submission.",
  },
  {
    title: "Payments",
    description:
      "Employee and/or authority payment services where approved.",
  },
  {
    title: "Premium Support",
    description: "Enhanced support and contracted SLA.",
  },
  {
    title: "Implementation",
    description: "Migration, configuration, testing and go-live.",
  },
  {
    title: "Custom Integration",
    description: "Bespoke technical scope.",
  },
];

const availabilityStates: ServiceLayer[] = [
  {
    title: "Included",
    description: "In active plan/service scope for the jurisdiction.",
  },
  {
    title: "Limited",
    description: "Included with documented limits.",
  },
  {
    title: "Optional",
    description: "Separately selected where approved.",
  },
  {
    title: "Add-on",
    description: "Separately priced standard component.",
  },
  {
    title: "Contracted",
    description: "Defined only via order form / enterprise agreement.",
  },
  {
    title: "Not available",
    description: "Not currently offered for that scope.",
  },
  {
    title: "Confirm availability",
    description: "Source registry or commercial review required.",
  },
];

export default function OptionalServiceLayersSection() {
  return (
    <section className="w-full bg-[#EFF4F7] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-[#0A78C3] uppercase">
            <span className="w-[3px] h-3.5 rounded-[1px] bg-[#3B82F6]" />
            <span>Optional service layers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#082F49] leading-tight">
            Add operational services where you need them.
          </h2>
        </div>

        {/* Service layers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
          {serviceLayers.map((layer) => (
            <div
              key={layer.title}
              className="bg-white rounded-xl border border-slate-200 p-5 space-y-2"
            >
              <h3 className="text-sm font-bold text-[#082F49]">
                {layer.title}
              </h3>
              <p className="text-xs text-[#4E6172] leading-5">
                {layer.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-500 leading-5">
          Availability, operator, fee and responsibility are independent for
          each service.
        </p>

        {/* Availability states */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {availabilityStates.map((state) => (
            <div
              key={state.title}
              className="bg-white rounded-xl border border-slate-200 p-5 space-y-2"
            >
              <h3 className="text-sm font-bold text-[#082F49]">
                {state.title}
              </h3>
              <p className="text-xs text-[#4E6172] leading-5">
                {state.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
