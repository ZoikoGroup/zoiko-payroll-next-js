"use client";

import React from "react";
import Image from "next/image";

export default function ExercisesValidationSection() {
  const tableRows = [
    {
      exercise: "Payroll recovery rehearsal",
      scope: "Payments",
      completed: "Jun 2026",
      outcome: "Validated",
      statusBg: "bg-[#E3F0E7]",
      statusText: "text-[#20502F]",
      dotColor: "bg-[#20502F]",
    },
    {
      exercise: "Technical disaster recovery",
      scope: "Core platform",
      completed: "Apr 2026",
      outcome: "Validated with actions",
      statusBg: "bg-[#F1EAD8]",
      statusText: "text-[#6B5A20]",
      dotColor: "bg-[#6B5A20]",
    },
    {
      exercise: "Backup restore test",
      scope: "Records",
      completed: "Mar 2026",
      outcome: "Re-test required",
      statusBg: "bg-[#E4F1FA]",
      statusText: "text-[#0A78C3]",
      dotColor: "bg-[#0A78C3]",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4">
        {/* Category Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#0A78C3]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0A78C3] uppercase">
            EXERCISES, TESTING &amp; VALIDATION
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0B192C] text-center tracking-tight mb-3">
          Continuity plans are exercised, reviewed, and improved
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#64748B] text-center max-w-2xl leading-relaxed mb-10">
          Tabletop, technical disaster recovery, backup restore, communications,
          provider/dependency, and payroll recovery rehearsal — each with a
          recorded scope, outcome and next review.
        </p>

        {/* Main Grid: Left Image + Right Synthetic Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full mb-8">
          {/* Left Side: Feature Image Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[320px] sm:h-[360px] md:h-[440px] rounded-2xl overflow-hidden">
              <Image
                src="/images/business/2.png"
                alt="Continuity exercise review session"
                fill
                className="object-cover"
              />

              {/* Floating Badge Top Left */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="text-[11px] sm:text-xs font-bold text-[#0F172A]">
                  Exercise reviewed
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Synthetic Registry Table */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="w-full bg-white rounded-2xl border border-[#E2E8F0] shadow-md overflow-hidden">
              {/* Mock Window Header */}
              <div className="px-6 py-3 border-b border-[#E2E8F0] bg-white flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
                </div>
                <span className="text-xs font-medium text-[#64748B] ml-2">
                  Validation Registry — synthetic
                </span>
              </div>

              {/* Table Content */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-[13px]">
                  <thead>
                    <tr className="bg-white border-b border-[#E2E8F0] text-[#64748B] uppercase tracking-wider font-semibold">
                      <th className="py-4 px-6">EXERCISE</th>
                      <th className="py-4 px-4">SCOPE</th>
                      <th className="py-4 px-4">COMPLETED</th>
                      <th className="py-4 px-6">OUTCOME</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] text-[#1E293B]">
                    {tableRows.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="py-4 px-6 font-medium text-[#0F172A]">
                          {row.exercise}
                        </td>
                        <td className="py-4 px-4 text-[#64748B]">
                          {row.scope}
                        </td>
                        <td className="py-4 px-4 text-[#64748B]">
                          {row.completed}
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${row.statusBg} ${row.statusText}`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${row.dotColor}`}
                            />
                            {row.outcome}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full mt-8 bg-[#E7EDFD] border-l-4 border-l-[#0A78C3] rounded-[6px] p-4 sm:p-5">
              <p className="text-xs sm:text-[13px] text-[#334155] leading-relaxed">
                Expired, failed or overdue evidence never continues to appear as
                current or validated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
