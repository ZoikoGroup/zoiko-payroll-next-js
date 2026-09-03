"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface DestinationNode {
  title: string;
  href?: string;
}

const topDestinations: DestinationNode[] = [
  { title: "Jurisdiction Coverage", href: "#" },
  { title: "Product Documentation", href: "#" },
  { title: "Integrations & APIs", href: "#" },
  { title: "Security and Trust", href: "#" },
];

const bottomDestinations: DestinationNode[] = [
  { title: "Implementation", href: "#" },
  { title: "Pricing & Procurement", href: "#" },
];

export default function VerifyWhatsCurrentSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3 text-center mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              VERIFY WHAT&apos;S CURRENT
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#07243B] tracking-tight">
            A story&apos;s geography is not proof of current availability
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Product use in a story is historical context, not current product
            authority. For anything that changes over time, these destinations
            stay authoritative.
          </p>
        </div>

        {/* Node Routing Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 py-4">
          {/* Left Dark Card Node */}
          <div className="bg-[#0B253C] text-white rounded-2xl p-6 w-full md:w-56 text-center shrink-0 shadow-md flex flex-col justify-center items-center h-28">
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-1">
              THIS STORY
            </span>
            <span className="text-xs sm:text-sm font-bold">
              Example Organization
            </span>
          </div>

          {/* Arrow Divider */}
          <div className="text-[#3D9BD6] shrink-0 rotate-90 md:rotate-0 my-1 md:my-0">
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </div>

          {/* Right Destination Cards Flow */}
          <div className="space-y-3 w-full md:w-auto">
            {/* Top Row Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {topDestinations.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href || "#"}
                  className="bg-white border border-slate-200/80 hover:border-[#3D9BD6] rounded-2xl p-4 text-center shadow-2xs hover:shadow-xs transition-all flex items-center justify-center h-20 min-w-[130px]"
                >
                  <span className="text-xs font-bold text-[#07243B] leading-snug">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>

            {/* Bottom Row Grid */}
            <div className="grid grid-cols-2 gap-3 max-w-sm">
              {bottomDestinations.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href || "#"}
                  className="bg-white border border-slate-200/80 hover:border-[#3D9BD6] rounded-2xl p-4 text-center shadow-2xs hover:shadow-xs transition-all flex items-center justify-center h-20"
                >
                  <span className="text-xs font-bold text-[#07243B] leading-snug">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Related Stories Footer Block */}
        <div className="text-center space-y-2 pt-6">
          <h3 className="text-sm font-bold text-[#07243B]">Related stories</h3>
          <p className="text-xs text-slate-400 font-medium mx-auto leading-relaxed">
            Matched by challenge, scope and team — deterministic, never
            behavioral profiling. Up to three shown.
          </p>
          <p className="text-xs text-slate-400 font-medium mx-auto leading-relaxed">
            Low related-story inventory is expected and shown honestly — never
            padded with unrelated stories.
          </p>
        </div>
      </div>
    </section>
  );
}
