"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface DeliveryModel {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const deliveryModels: DeliveryModel[] = [
  {
    image: "/images/implementation-pricing/delivery-zoiko-native.png",
    alt: "Team collaborating on native payroll configuration",
    title: "Zoiko Payroll native",
    description:
      "Zoiko-native configuration, data, integrations, validation and go-live using approved implementation SKUs.",
  },
  {
    image: "/images/implementation-pricing/delivery-connected-payroll.png",
    alt: "Developer setting up a connected payroll integration",
    title: "Connected Payroll",
    description:
      "Provider/connector setup, mapping, normalization and reconciliation. Provider charges may be separate — merchant is disclosed.",
  },
  {
    image: "/images/implementation-pricing/delivery-partner-supported.png",
    alt: "Two people shaking hands over a partner agreement",
    title: "Partner-Supported",
    description:
      "Partner onboarding, responsibility matrix and secure exchange. Partner terms and Zoiko scope stay distinct.",
  },
  {
    image: "/images/implementation-pricing/delivery-customer-operated.png",
    alt: "Customer operations team reviewing payroll controls",
    title: "Customer-operated",
    description:
      "Configuration and controls handed off to customer payroll operations where approved.",
  },
  {
    image: "/images/implementation-pricing/delivery-mixed-global-estate.png",
    alt: "Aerial view of a city skyline representing a global program",
    title: "Mixed global estate",
    description:
      "Different models by entity/jurisdiction with centralized governance — usually a complex enterprise program.",
  },
  {
    image: "/images/implementation-pricing/delivery-enterprise-programs.png",
    alt: "Enterprise program team in a strategic planning session",
    title: "Enterprise programs",
    description:
      "Large populations, many entities, global complexity — contracted as a wave-based statement of work.",
  },
];

const disclosurePoints: string[] = [
  "Every third-party/provider/authority fee is marked as included, passed through, paid directly, or unknown until local setup.",
  "No hidden markup, and no implying a third-party amount is a Zoiko Payroll fee.",
  "Bank, payment-rail, registration, certificate or government fees stay separate from implementation price unless explicitly bundled.",
];

export default function DeliveryModelsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 lg:items-start">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span className="font-bold">/</span>
              <span>Global &amp; partner-supported implementations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight text-[#07243B] leading-tight max-w-2xl">
              Delivery model changes the shape of the work.
            </h2>
          </div>
          <p className="text-sm text-slate-500 leading-5 lg:max-w-xs lg:mt-9">
            Provider charges and Zoiko implementation scope are always disclosed
            separately.
          </p>
        </div>

        {/* Model cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deliveryModels.map((model) => (
            <div
              key={model.title}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-32">
                <Image
                  src={model.image}
                  alt={model.alt}
                  fill

                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2.5">
                <h3 className="text-sm font-extrabold text-[#07243B]">
                  {model.title}
                </h3>
                <p className="text-xs text-slate-600 leading-5">
                  {model.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Third-party cost disclosure */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] p-6 space-y-4">
          <h3 className="text-base font-extrabold text-[#07243B]">
            Third-party cost disclosure
          </h3>
          <ul className="space-y-3">
            {disclosurePoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="w-5 h-5 shrink-0 rounded-full bg-sky-100 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-[#0A8FD0] stroke-[3]" />
                </span>
                <span className="text-sm text-slate-600 leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
