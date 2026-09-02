"use client";

import React from "react";
import Image from "next/image";

export default function EntityArchitectureSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Top Split Layout: Hero Image & Text Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Image Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full h-[300px] sm:h-[350px] rounded-3xl overflow-hidden">
              <Image
                src="/images/multi-entity/2.png"
                alt="Team in a conference room presenting payroll dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column: Heading & Description */}
          <div className="lg:col-span-6 space-y-4">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span className="text-[#0A8FD0] font-bold">|</span>
              <span>ENTITY ARCHITECTURE</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight text-[#07243B] leading-tight">
              Legal Entity, Pay Group, Business Unit and Cost Center are never
              the same thing
            </h2>

            {/* Subtitle / Description */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
              Each legal entity has its own employer identity, jurisdictions,
              registrations and functional currency where applicable. Entity
              relationships and jurisdiction coverage are effective-dated and
              auditable.
            </p>
          </div>
        </div>

        {/* Bottom Section: Architectural Flowchart & Legend */}
        <div className="space-y-10 pt-4">
          {/* Hierarchy Flowchart */}
          <div className="flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto">
            {/* Parent Level */}
            <div className="bg-[#0A2337] text-white rounded-2xl px-8 py-3.5 text-center shadow-md min-w-[260px]">
              <div className="text-xs font-bold">Parent / Group</div>
              <div className="text-[11px] text-slate-300 font-normal">
                Zoiko Group — oversight layer
              </div>
            </div>

            {/* Vertical Connecting Line */}
            <div className="w-px h-6 bg-slate-300" />

            {/* Legal Entity Level (3 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl">
              <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs text-center space-y-1">
                <div className="text-xs font-bold text-[#07243B]">
                  Legal Entity
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  UK Ltd
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs text-center space-y-1">
                <div className="text-xs font-bold text-[#07243B]">
                  Legal Entity
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  US Inc
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs text-center space-y-1">
                <div className="text-xs font-bold text-[#07243B]">
                  Legal Entity
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  GmbH (DE)
                </div>
              </div>
            </div>

            {/* Vertical Connecting Lines */}
            <div className="w-px h-6 bg-slate-300" />

            {/* Pay Group Level (3 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl">
              <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs text-center space-y-1">
                <div className="text-xs font-bold text-[#07243B]">
                  Pay Group
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  UK Monthly
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs text-center space-y-1">
                <div className="text-xs font-bold text-[#07243B]">
                  Pay Group
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  US Semi-monthly
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs text-center space-y-1">
                <div className="text-xs font-bold text-[#07243B]">
                  Pay Group
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  DE Monthly
                </div>
              </div>
            </div>

            {/* Vertical Connecting Line */}
            <div className="w-px h-6 bg-slate-300" />

            {/* Base Level: Worker / Payroll Context */}
            <div className="bg-white rounded-xl px-8 py-3.5 border border-slate-200/80 shadow-2xs text-center min-w-[240px]">
              <span className="text-xs font-bold text-[#07243B]">
                Worker / Payroll Context
              </span>
            </div>
          </div>

          {/* Legend Row */}
          <div className="flex items-center justify-center gap-6 text-[11px] sm:text-xs text-slate-500 font-medium pt-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#07243B] shrink-0" />
              <span>Legal Entity — own employer identity & registrations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0A8FD0] shrink-0" />
              <span>Pay Group — calendar & processing grouping</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400 shrink-0" />
              <span>
                Business Unit / Dept / Cost Center — reporting dimensions, not
                employer identity
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
