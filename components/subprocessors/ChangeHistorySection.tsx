"use client";

import React from "react";

const eventStyles = {
  addition: {
    label: "Planned addition",
    bg: "bg-[#E7EDFD]",
    text: "text-[#0A78C3]",
  },
  removed: { label: "Removed", bg: "bg-[#F1F5F9]", text: "text-[#475569]" },
  scope: { label: "Scope change", bg: "bg-[#FBEBCB]", text: "text-[#B45309]" },
  replacement: {
    label: "Planned replacement",
    bg: "bg-[#E7EDFD]",
    text: "text-[#0A78C3]",
  },
} as const;

const groups = [
  {
    period: "AUGUST 2025",
    events: [
      {
        type: eventStyles.addition,
        title: "Correo Communications Inc. — Correo Comms",
        description:
          "Transactional email delivery added to scope for the notifications service.",
        notice: "Notice: Jul 14, 2025",
        effective: "Effective: Aug 2025",
      },
    ],
  },
  {
    period: "JANUARY 2026",
    events: [
      {
        type: eventStyles.removed,
        title: "Harbor Print Services LLC — Harbor Print Services",
        description:
          "Physical statement fulfilment discontinued; scope migrated to digital-only delivery.",
        notice: "Notice: Dec 1, 2025",
        effective: "Effective: Jan 2026",
      },
    ],
  },
  {
    period: "JUNE 2026",
    events: [
      {
        type: eventStyles.scope,
        title: "Ledgerline Analytics B.V.",
        description:
          "Reporting scope narrowed to exclude records export; prior scope retained for reference.",
        notice: "Notice: May 20, 2026",
        effective: "Effective: Jun 2026",
      },
      {
        type: eventStyles.replacement,
        title: "Vantage Identity Systems Ltd.",
        description:
          "Identity verification provider scheduled for replacement; successor to be published on approval.",
        notice: "Notice: Jun 3, 2026",
        effective: "Effective: Sep 2026",
      },
    ],
  },
] as const;

const filters = ["Event type", "Affected provider"] as const;

const eventCount = groups.reduce((sum, group) => sum + group.events.length, 0);

export default function ChangeHistorySection() {
  return (
    <section className="bg-[#F8FAFC] py-12 sm:py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#0A78C3]" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A78C3] sm:text-xs">
            IMMUTABLE CHANGE HISTORY
          </span>
        </div>
        <h2 className="mt-3.5 max-w-2xl text-center text-2xl font-extrabold tracking-tight text-[#0B192C] sm:text-3xl md:text-[34px]">
          A durable record, even after a provider leaves Current
        </h2>
        <p className="mt-3 max-w-2xl text-center text-xs leading-relaxed text-[#64748B] sm:text-sm">
          Additions, replacements, removals, legal-entity changes and scope
          changes — corrections add a new event rather than rewriting history.
        </p>

        {/* Filters + count */}
        <div className="mt-8 flex w-full max-w-5xl flex-wrap items-center gap-2.5">
          {filters.map((filter) => (
            <button
              key={filter}
              className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2 text-sm transition-colors hover:border-[#0A78C3]"
            >
              <span className="font-semibold text-[#475569]">{filter}</span>
              <span className="font-black text-[#0F172A]">All</span>
            </button>
          ))}
          <span className="w-full text-xs sm:ml-auto sm:w-auto text-[#94A3B8]">
            {eventCount} events
          </span>
        </div>

        {/* Timeline */}
        <div className="mt-6 w-full max-w-5xl">
          {groups.map((group) => (
            <div key={group.period}>
              <h3 className="pb-3 pt-6 text-[11px] font-bold uppercase tracking-widest text-[#94A3B8]">
                {group.period}
              </h3>
              {group.events.map((event) => (
                <article
                  key={event.title + event.notice}
                  className="flex flex-col gap-3 border-t border-[#E2E8F0] py-5 sm:flex-row sm:gap-6"
                >
                  <div className="sm:w-44 sm:shrink-0">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${event.type.bg} ${event.type.text}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {event.type.label}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-bold text-[#0F172A]">
                      {event.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-[#475569] sm:text-[13px]">
                      {event.description}
                    </p>
                    <p className="text-xs text-[#94A3B8]">
                      {event.notice} · {event.effective}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
