import React from "react";
import { SectionHeading } from "./Primitives";

const columns = [
  {
    title: "Open",
    count: 4,
    accent: "text-green-700",
    surface: "bg-green-50",
    items: [
      { label: "Missing tax jurisdiction code", batch: "Batch 07" },
      { label: "Duplicate employee ID", batch: "Batch 03" },
    ],
  },
  {
    title: "Investigating",
    count: 2,
    accent: "text-amber-600",
    surface: "bg-amber-50",
    items: [{ label: "YTD variance on entity NL-02", batch: "Batch 11" }],
  },
  {
    title: "Ready to retest",
    count: 3,
    accent: "text-amber-600",
    surface: "bg-amber-50",
    items: [{ label: "Bank routing format mismatch", batch: "Batch 05" }],
  },
  {
    title: "Resolved",
    count: 21,
    accent: "text-green-700",
    surface: "bg-green-50",
    items: [
      { label: "Leave balance rounding", batch: "Batch 02" },
      { label: "Currency code normalization", batch: "Batch 01" },
    ],
  },
] as const;

export default function ExceptionManagementSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Exception management"
          title="Every exception is tracked to resolution"
          body="Discrepancies are logged, investigated and cleared under the same governance as the rest of the migration."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div
              key={column.title}
              className={`flex flex-col gap-4 rounded-2xl p-4 ${column.surface}`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-sm font-semibold ${column.accent}`}>
                  {column.title}
                </span>
                <span className={`text-sm font-semibold ${column.accent}`}>
                  {column.count}
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {column.items.map((item) => (
                  <li
                    key={item.label}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                  >
                    <span className="block text-sm text-slate-800">
                      {item.label}
                    </span>
                    <span className="text-xs text-slate-400">{item.batch}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
