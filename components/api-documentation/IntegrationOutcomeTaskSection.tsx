"use client";

import React from "react";
import {
  CreditCard,
  Edit3,
  Lock,
  BarChart3,
  Feather,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

interface TaskCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const taskCards: TaskCard[] = [
  {
    icon: <CreditCard className="w-5 h-5 text-[#0A8FD0]" />,
    title: "Read payroll or worker data",
    description: "Look up workers, payroll runs and payslip records.",
    linkText: "Open resource docs",
    href: "#",
  },
  {
    icon: <Edit3 className="w-5 h-5 text-[#0A8FD0]" />,
    title: "Create or update supported records",
    description: "Submit approved mutations for supported resources.",
    linkText: "Open operation docs",
    href: "#",
  },
  {
    icon: <Lock className="w-5 h-5 text-[#0A8FD0]" />,
    title: "Exchange integration configuration",
    description: "Read and update approved integration/mapping settings.",
    linkText: "Open configuration docs",
    href: "#",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-[#0A8FD0]" />,
    title: "Retrieve reporting or payroll results",
    description: "Fetch approved reporting and reconciliation data.",
    linkText: "Open reporting docs",
    href: "#",
  },
  {
    icon: <Feather className="w-5 h-5 text-[#0A8FD0]" />,
    title: "Receive asynchronous changes",
    description: "Subscribe to approved event notifications.",
    linkText: "Open Webhooks",
    href: "#",
  },
  {
    icon: <AlertCircle className="w-5 h-5 text-[#0A8FD0]" />,
    title: "Troubleshoot an API error",
    description: "Identify the error class and the correct developer action.",
    linkText: "Open error reference",
    href: "#",
  },
];

export default function IntegrationOutcomeTaskSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Centered Header Block */}
        <div className="text-center space-y-3 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>CHOOSE YOUR TASK</span>
          </div>

          {/* Main Section Title */}
          <h2 className="text-3xl sm:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
            Route by integration outcome — never by endpoint memorization
          </h2>
        </div>

        {/* 6-Card Grid Layout (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {taskCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Rounded Icon Box */}
                <div className="w-8 h-8 rounded-[8px] p-2 bg-[#E6F3FA] flex items-center justify-center shrink-0">
                  {card.icon}
                </div>

                {/* Card Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Action Link Button */}
              <div>
                <a
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A8FD0] hover:text-[#0877AE] transition-colors"
                >
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Subtitle / Registry Footer Note */}
        <p className="text-center text-[11px] text-slate-400 font-normal">
          Task cards are registry-driven — if no approved public operation
          exists, the task is omitted rather than shown as disabled.
        </p>
      </div>
    </section>
  );
}
