"use client";

import React from "react";
import Image from "next/image";

interface TaskRow {
  taskDomain: string;
  possibleResponsibility: string;
  requiredDisclosure: string;
}

const tasks: TaskRow[] = [
  {
    taskDomain: "Calendar & run coordination",
    possibleResponsibility: "Zoiko / provider where contracted",
    requiredDisclosure: "Who owns cutoffs and final approval",
  },
  {
    taskDomain: "Pre-payroll validation",
    possibleResponsibility: "Zoiko / provider",
    requiredDisclosure: "Doesn't replace customer approval of material changes",
  },
  {
    taskDomain: "Final approval",
    possibleResponsibility: "Customer, unless expressly delegated",
    requiredDisclosure: "Never implied automatic without contract",
  },
  {
    taskDomain: "Close & service reporting",
    possibleResponsibility: "Zoiko / provider",
    requiredDisclosure: "Evidence package and reporting cadence",
  },
];

export default function ManagedPayrollOperationsSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50 text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Header & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-4">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                RESPONSIBILITY, NOT "WE HANDLE EVERYTHING"
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[32px] font-extrabold text-[#07243B] tracking-tight leading-tight">
              Managed Payroll Operations, task by task.
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
              Every operational service names who owns each task — never a
              blanket promise.
            </p>
          </div>

          {/* Right Column: Image Container */}
          <div className="lg:col-span-6 relative w-full h-[260px] sm:h-[320px] lg:h-[430px] rounded-3xl overflow-hidden">
            <Image
              src="/images/services/3.png"
              alt="Team collaborating on payroll tasks"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Bottom Table Section */}
        <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xs overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 px-6 py-4 bg-slate-50/80 border-b border-slate-200/60 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            <div>Task Domain</div>
            <div>Possible Responsibility</div>
            <div>Required Disclosure</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-100">
            {tasks.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-3 px-6 py-4 items-center gap-2 md:gap-4 hover:bg-slate-50/50 transition-colors"
              >
                <div className="text-xs sm:text-sm font-bold text-[#07243B]">
                  {row.taskDomain}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">
                  {row.possibleResponsibility}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  {row.requiredDisclosure}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
