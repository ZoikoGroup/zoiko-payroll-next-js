"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Workspace {
  id: string;
  name: string;
  type: string;
  status: string;
  isSelected?: boolean;
}

const workspacesData: Workspace[] = [
  {
    id: "eu-holdings",
    name: "EU Holdings BV",
    type: "Current employer",
    status: "Active access",
    isSelected: true,
  },
  {
    id: "uk-ltd",
    name: "UK Ltd",
    type: "Former employer",
    status: "Retained access per policy",
    isSelected: false,
  },
];

const issueBadges = [
  "Retained access",
  "Lost SSO",
  "Unavailable documents",
  "Expired access",
];

export default function MultipleEmployersSection() {
  const [selectedWorkspace, setSelectedWorkspace] =
    useState<string>("eu-holdings");

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Split Layout: Image + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Image Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg aspect-[16/10] sm:aspect-[9/9] rounded-2xl overflow-hidden">
              <Image
                src="/images/employee-access/3.png"
                alt="Two employees working late together in an office workspace"
                fill
                className="object-cover rounded-xl object-center"
              />
            </div>
          </div>

          {/* Right Text Block */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span>/</span>
              <span>MULTIPLE EMPLOYERS & FORMER EMPLOYEE ACCESS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B] leading-tight">
              Your workspaces stay strictly separated — never silently mixed
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
              Documents and cases are scoped to one workspace at a time. There
              is never a silent routing to a previous employer&apos;s data.
            </p>
          </div>
        </div>

        {/* Bottom Workspace Selector & Badges */}
        <div className="space-y-8 pt-4">
          {/* Workspace Switcher Cards Container */}
          <div className="max-w-md mx-auto space-y-3">
            {workspacesData.map((workspace) => {
              const isSelected = selectedWorkspace === workspace.id;

              return (
                <div
                  key={workspace.id}
                  onClick={() => setSelectedWorkspace(workspace.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-[#E1EEF9] border-[#0A8FD0] shadow-2xs"
                      : "bg-white border-slate-200/80 hover:border-slate-300 shadow-2xs"
                  }`}
                >
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-[#07243B]">
                      {workspace.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {workspace.type} · {workspace.status}
                    </p>
                  </div>

                  <div>
                    {isSelected ? (
                      <span className="bg-[#E2F0D9] text-[#2E6B12] text-[11px] font-bold px-3 py-1 rounded-md">
                        Selected
                      </span>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0A8FD0] hover:underline"
                      >
                        <span>Switch</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Filter Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto pt-2">
            {issueBadges.map((badge, idx) => (
              <span
                key={idx}
                className="bg-white hover:bg-slate-50 text-[#07243B] text-xs font-semibold px-4 py-2 rounded-full border border-slate-200/80 shadow-2xs transition-all cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
