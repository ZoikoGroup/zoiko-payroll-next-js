"use client";

import React from "react";

interface TaskCardProps {
  title: string;
  description: string;
}

const taskCards: TaskCardProps[] = [
  {
    title: "Payroll lifecycle change",
    description: "React when a run or approval changes state.",
  },
  {
    title: "External-system update",
    description: "Notify a connected system after payroll events.",
  },
  {
    title: "Payment / processing status",
    description: "Track completion of payment-related processing.",
  },
  {
    title: "Integration-state change",
    description: "React to connection health or sync events.",
  },
  {
    title: "Testing",
    description: "Validate your endpoint before going live.",
  },
  {
    title: "Recovery",
    description: "Recover missed or failed deliveries where supported.",
  },
];

export default function ChooseYourEventTaskSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="w-4 h-[2px] bg-[#0A8FD0] inline-block" />
            <span>CHOOSE YOUR EVENT TASK</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
            Source-governed task cards — never an invented event
          </h2>
        </div>

        {/* 6-Card Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {taskCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all space-y-2"
            >
              <h3 className="text-sm font-bold text-[#07243B]">{card.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
