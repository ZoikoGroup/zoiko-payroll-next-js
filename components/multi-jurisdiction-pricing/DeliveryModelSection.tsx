"use client";

import React from "react";
import Image from "next/image";

interface DeliveryModelCard {
  image: string;
  title: string;
  description: string;
}

const deliveryModels: DeliveryModelCard[] = [
  {
    image: "/images/multi-jurisdiction-pricing/b1.png",
    title: "Zoiko Payroll native",
    description:
      "Plan + BWM under the approved catalog, with Zoiko-native local service SKUs where available.",
  },
  {
    image: "/images/multi-jurisdiction-pricing/b2.png",
    title: "Connected Payroll",
    description:
      "Plan/platform plus applicable connected-service model. Provider fees disclosed, never blended in.",
  },
  {
    image: "/images/multi-jurisdiction-pricing/b3.png",
    title: "Partner-Supported",
    description:
      "Approved local partner service, contracted by scope. Partner and Zoiko charges stay separate.",
  },
];

export default function DeliveryModelSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF4F7] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block with Right-aligned Subtext */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                NATIVE, CONNECTED & PARTNER-SUPPORTED
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-2xl font-extrabold text-[#07243B] tracking-tight">
              Delivery model changes who charges what.
            </h2>
          </div>

          {/* Right Subtext */}
          <p className="text-xs text-slate-400 font-medium pb-1 max-w-xs md:text-right">
            The responsibility matrix — who calculates, files, pays and supports
            — is always preserved.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliveryModels.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/70 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 transition-colors flex flex-col"
            >
              {/* Card Thumbnail Image */}
              <div className="relative w-full h-32">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
