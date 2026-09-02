"use client";

import React from "react";

interface ActionItem {
  title: string;
  date: string;
}

interface ActionCardProps {
  title: string;
  items: ActionItem[];
}

const myActions: ActionItem[] = [
  { title: "Approve integration test plan", date: "Due Sep 3" },
  { title: "Review opening balance variance", date: "Due Sep 4" },
];

const zoikoActions: ActionItem[] = [
  { title: "Deliver integration retry evidence", date: "Due Sep 3" },
  { title: "Confirm parallel-run schedule", date: "Due Sep 6" },
];

const partnerActions: ActionItem[] = [
  { title: "Confirm funding account setup", date: "Due Sep 5" },
  { title: "Provide banking test confirmation", date: "Due Sep 7" },
];

const upcomingMilestones: ActionItem[] = [
  { title: "Testing complete", date: "Sep 5" },
  { title: "Parallel Run starts", date: "Sep 8" },
  { title: "Cutover window", date: "Sep 22" },
];

const recentDecisions: ActionItem[] = [
  { title: "Approved: revised go-live date for DE GmbH", date: "Aug 26" },
  { title: "Approved: fallback integration retry window", date: "Aug 24" },
];

const SnapshotCard: React.FC<ActionCardProps> = ({ title, items }) => (
  <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-4 flex flex-col justify-between">
    <h3 className="text-sm font-bold text-[#07243B]">{title}</h3>
    <div className="divide-y divide-slate-100">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4 text-xs font-semibold"
        >
          <span className="text-[#07243B]">{item.title}</span>
          <span className="text-slate-400 font-medium shrink-0">
            {item.date}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function ProjectSnapshotSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>PROJECT SNAPSHOT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight text-[#07243B] leading-tight">
            Everything scannable — the moment you sign in
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Dates shown are project targets, not guarantees.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="space-y-6">
          {/* Top 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SnapshotCard title="My Actions" items={myActions} />
            <SnapshotCard title="Zoiko Actions" items={zoikoActions} />
            <SnapshotCard
              title="Provider / Partner Actions"
              items={partnerActions}
            />
            <SnapshotCard
              title="Upcoming Milestones"
              items={upcomingMilestones}
            />
          </div>

          {/* Bottom Full-Width Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-4">
            <h3 className="text-sm font-bold text-[#07243B]">
              Recent Decisions
            </h3>
            <div className="divide-y divide-slate-100">
              {recentDecisions.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4 text-xs font-semibold"
                >
                  <span className="text-[#07243B]">{item.title}</span>
                  <span className="text-slate-400 font-medium shrink-0">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
