import React from "react";
import { SectionHeading } from "./Primitives";

const tiles = [
  { value: "On track", label: "Project status" },
  { value: "4/6", label: "Milestones" },
  { value: "18", label: "Deliverables" },
  { value: "3", label: "RAID items" },
  { value: "5", label: "Decisions logged" },
  { value: "1", label: "Change requests" },
  { value: "67%", label: "Timeline progress" },
  { value: null, badge: "Approved", label: "Latest gate" },
] as const;

export default function DeliveryGovernanceSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Delivery governance"
          title="Complete visibility into every engagement."
        />

        <div className="w-full rounded-[20px] border-4 border-slate-900 bg-white sm:border-8">
          <div className="flex items-center gap-3 px-5 py-4">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-slate-200" />
              <span className="h-2 w-2 rounded-full bg-slate-200" />
              <span className="h-2 w-2 rounded-full bg-slate-200" />
            </div>
            <span className="hidden flex-1 truncate text-center text-sm text-slate-500 sm:block">
              Delivery governance dashboard
            </span>
            <span className="ml-auto shrink-0 rounded-[20px] bg-green-600/10 px-3 py-1 text-xs font-semibold text-green-600 sm:ml-0">
              Healthy
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 p-5 pt-1 sm:grid-cols-3 lg:grid-cols-4">
            {tiles.map((tile) => (
              <div
                key={tile.label}
                className="rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-4"
              >
                {tile.value ? (
                  <span className="block text-xl font-bold text-slate-900">
                    {tile.value}
                  </span>
                ) : (
                  <span className="inline-block rounded-[20px] bg-green-600/10 px-3 py-1 text-xs font-semibold text-green-600">
                    {tile.badge}
                  </span>
                )}
                <span className="mt-2 block text-xs text-slate-500">
                  {tile.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
