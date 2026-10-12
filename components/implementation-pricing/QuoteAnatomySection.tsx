"use client";

import React from "react";
import { Info } from "lucide-react";

type BadgeTone = "green" | "amber" | "blue" | "slate" | "purple";

interface QuoteLine {
  label: string;
  detail: string;
  badge: string;
  tone: BadgeTone;
  recurring?: boolean;
}

const badgeStyles: Record<BadgeTone, string> = {
  green: "bg-emerald-50 text-emerald-700 border-emerald-100",
  amber: "bg-amber-50 text-amber-700 border-amber-100",
  blue: "bg-sky-50 text-sky-700 border-sky-100",
  slate: "bg-slate-100 text-slate-600 border-slate-200",
  purple: "bg-purple-50 text-purple-700 border-purple-100",
};

const dotStyles: Record<BadgeTone, string> = {
  green: "bg-emerald-500",
  amber: "bg-amber-500",
  blue: "bg-sky-500",
  slate: "bg-slate-400",
  purple: "bg-purple-500",
};

const quoteLines: QuoteLine[] = [
  {
    label: "Implementation foundation",
    detail: "1 × program baseline",
    badge: "Catalog / scoped",
    tone: "green",
  },
  {
    label: "Entity activation",
    detail: "2 × additional legal entity",
    badge: "Catalog / scoped",
    tone: "green",
  },
  {
    label: "Jurisdiction activation",
    detail: "United Kingdom / United States",
    badge: "Jurisdiction dependent",
    tone: "amber",
  },
  {
    label: "Data migration",
    detail: "Statutory lookback",
    badge: "Scoped",
    tone: "amber",
  },
  {
    label: "Integration setup",
    detail: "HRIS standard connector × 1",
    badge: "Catalog",
    tone: "green",
  },
  {
    label: "Parallel-run assistance",
    detail: "Guided validation",
    badge: "Optional / scoped",
    tone: "blue",
  },
  {
    label: "Cutover & hypercare",
    detail: "Included baseline",
    badge: "Included",
    tone: "green",
  },
  {
    label: "Third-party charges",
    detail: "Provider / authority / banking",
    badge: "Disclosed separately",
    tone: "slate",
  },
  {
    label: "Taxes",
    detail: "Commercial service tax / VAT / GST",
    badge: "Where applicable",
    tone: "slate",
  },
  {
    label: "Recurring subscription",
    detail: "Starts from Service Commencement Date",
    badge: "Shown separately",
    tone: "purple",
    recurring: true,
  },
];

export default function QuoteAnatomySection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 lg:items-start">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span className="font-bold">/</span>
              <span>Quote anatomy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight text-[#07243B] leading-tight">
              What a buyer should see in a quote.
            </h2>
          </div>
          <p className="text-sm text-slate-500 leading-5 lg:max-w-xs lg:mt-9">
            Inspectable structure — without publishing unapproved amounts.
          </p>
        </div>

        {/* Illustrative quote */}
        <div className="rounded-2xl border border-slate-200 overflow-hidden">
          <div className="bg-[#07243B] px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
            <span className="text-sm font-bold text-white">
              Illustrative implementation quote
            </span>
            <span className="text-xs text-slate-400">
              Non-binding structure example · not an actual price
            </span>
          </div>

          <ul>
            {quoteLines.map((line, idx) => (
              <li
                key={line.label}
                className={`px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 ${
                  idx !== quoteLines.length - 1
                    ? "border-b border-slate-200"
                    : ""
                } ${line.recurring ? "bg-sky-50" : "bg-white"}`}
              >
                <span>
                  <span className="block text-sm font-bold text-[#07243B]">
                    {line.label}
                  </span>
                  <span className="block text-xs text-slate-500 mt-0.5">
                    {line.detail}
                  </span>
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 self-start sm:self-auto shrink-0 text-[11px] font-bold px-3 py-1.5 rounded-full border ${
                    badgeStyles[line.tone]
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      dotStyles[line.tone]
                    }`}
                  />
                  {line.badge}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quote versioning note */}
        <div className="bg-[#E4F1FA] rounded-xl p-5 flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#0A78C3] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="text-sm font-bold text-[#082F49]">
              Quote versioning.
            </div>
            <p className="text-sm text-[#4E6172] leading-5">
              Every estimate or quote carries a price/catalog version, market,
              currency, generated date, assumptions and validity state. A
              revised scope creates a new version — it never silently changes
              the previous estimate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
