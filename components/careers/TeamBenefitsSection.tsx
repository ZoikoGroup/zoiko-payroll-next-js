"use client";

import React from "react";
import { Clock, Heart, Calendar } from "lucide-react";

// Benefits item data matching the provided image
const BENEFITS = [
  {
    icon: Clock,
    title: "Flexible hours",
    description: "Build your schedule around how you work best.",
  },
  {
    icon: Heart,
    title: "Health coverage",
    description: "Local coverage support, wherever your role is based.",
  },
  {
    icon: Calendar,
    title: "Paid time off",
    description:
      "Time away that's actually respected, not just offered on paper.",
  },
];

export default function TeamBenefitsSection() {
  return (
    <section className="w-full bg-[#f4f8fb] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-[#E1E8ED] shadow-sm grid grid-cols-1 lg:grid-cols-12 bg-white">
        {/* Left Side: Office Team Photo (5 Cols on desktop) */}
        <div className="relative min-h-[300px] sm:min-h-[380px] lg:col-span-5">
          <img
            src="/images/careers/guys.png"
            alt="Colleagues collaborating around a office table"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Benefits Panel (7 Cols on desktop) */}
        <div className="lg:col-span-7 bg-[#082F49] p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-8 text-white">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            We take care of our team
          </h2>

          {/* Benefits List */}
          <div className="space-y-6">
            {BENEFITS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  {/* Icon Box */}
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/10">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Benefit Text Content */}
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
