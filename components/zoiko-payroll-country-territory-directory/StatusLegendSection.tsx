"use client";

import Reveal from "@/components/ui/Reveal";

interface LegendItem {
  id: string;
  badgeLabel: string;
  badgeBg: string;
  badgeText: string;
  dotBg: string;
  description: string;
}

const legendItems: LegendItem[] = [
  {
    id: "available",
    badgeLabel: "Available",
    badgeBg: "bg-emerald-100/80 border-emerald-200/60",
    badgeText: "text-emerald-800",
    dotBg: "bg-emerald-600",
    description: "Published scope is currently supported.",
  },
  {
    id: "available-conditions",
    badgeLabel: "Available w/ conditions",
    badgeBg: "bg-amber-100/80 border-amber-200/60",
    badgeText: "text-amber-800",
    dotBg: "bg-amber-600",
    description: "Support exists with material conditions or limits.",
  },
  {
    id: "not-available",
    badgeLabel: "Not currently available",
    badgeBg: "bg-slate-200/80 border-slate-300/60",
    badgeText: "text-slate-800",
    dotBg: "bg-slate-600",
    description: "No current production availability is published.",
  },
  {
    id: "under-review",
    badgeLabel: "Under review",
    badgeBg: "bg-purple-100/80 border-purple-200/60",
    badgeText: "text-purple-800",
    dotBg: "bg-purple-600",
    description: "Being evaluated; no launch timing is promised.",
  },
  {
    id: "verification-required",
    badgeLabel: "Verification required",
    badgeBg: "bg-rose-100/80 border-rose-200/60",
    badgeText: "text-rose-800",
    dotBg: "bg-rose-600",
    description: "Current validation needed before relying on this record.",
  },
];

export default function StatusLegendSection() {
  return (
    <section className="w-full max-w-full min-w-0 overflow-hidden bg-[#EFF4F8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px] min-w-0">
        {/* Header with Title and Subtext */}
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A78C2]">
                / STATUS LEGEND
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl lg:text-[34px]">
                What each availability status means.
              </h2>
            </div>
            <p className="text-xs text-slate-500 sm:text-right sm:text-sm">
              Text + icon always — color is never used alone.
            </p>
          </div>
        </Reveal>

        {/* 5-Column Grid of Status Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {legendItems.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 60}>
              <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:shadow-xs">
                {/* Badge Pill */}
                <div className="inline-flex items-center">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${item.badgeBg} ${item.badgeText}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${item.dotBg}`} />
                    {item.badgeLabel}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
