"use client";

import { useMemo, useState } from "react";
import Reveal from "../ui/Reveal";
import CountryMarquee from "../ui/CountryMarquee";
import ArrowLink from "../ui/ArrowLink";
import Eyebrow from "./Eyebrow";
import { SearchIcon } from "../ui/icons";

type JurisdictionStatus = "Available" | "Limited availability" | "Partner-supported" | "Planned";

const statusStyles: Record<JurisdictionStatus, string> = {
  Available: "bg-emerald-50 text-emerald-700",
  "Limited availability": "bg-amber-50 text-amber-700",
  "Partner-supported": "bg-rose-50 text-rose-700",
  Planned: "bg-slate-100 text-slate-500",
};

const jurisdictionDirectory: { code: string; name: string; status: JurisdictionStatus }[] = [
  { code: "US", name: "United States", status: "Available" },
  { code: "GB", name: "United Kingdom", status: "Available" },
  { code: "DE", name: "Germany", status: "Limited availability" },
  { code: "SG", name: "Singapore", status: "Available" },
  { code: "BR", name: "Brazil", status: "Partner-supported" },
  { code: "IN", name: "India", status: "Planned" },
];

const jurisdictionDetail = {
  name: "United States",
  status: "Available" as JurisdictionStatus,
  fields: [
    { label: "Effective date", value: "March 2025" },
    { label: "Currencies", value: "USD" },
    { label: "Frequencies", value: "Weekly, semi-monthly, monthly" },
    { label: "Service model", value: "Direct, self-managed" },
    { label: "Filing support", value: "Federal and state filing workflows" },
    { label: "Languages", value: "English" },
  ],
};

const jurisdictionFaq = {
  question: "Can Zoiko Payroll support payroll in multiple countries?",
  answer:
    "Zoiko Payroll is built for multi-jurisdiction payroll operations. Available capabilities depend on the markets, worker populations, payroll requirements, service model and integrations involved. Review the current jurisdiction directory or speak with Zoiko Payroll before relying on support for a particular market.",
};

export default function JurisdictionSection() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return jurisdictionDirectory;
    return jurisdictionDirectory.filter(
      (row) => row.name.toLowerCase().includes(q) || row.code.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Multi-jurisdiction operating model</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Designed for payroll operations across multiple jurisdictions.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Manage payroll through a consistent global operating model while preserving the local
            configurations, responsibilities, records and controls required in each supported market.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search the jurisdiction directory"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-brand-dark placeholder:text-slate-400 transition-colors duration-200 focus:border-brand focus:bg-white focus:outline-none"
              />
            </div>

            <ul className="mt-4 divide-y divide-slate-100">
              {filtered.map((row) => (
                <li key={row.code} className="flex items-center justify-between gap-3 py-3">
                  <span className="flex items-center gap-2.5 text-sm text-brand-dark">
                    <span className="flex h-6 w-8 items-center justify-center rounded bg-slate-100 text-[11px] font-semibold text-slate-500">
                      {row.code}
                    </span>
                    {row.name}
                  </span>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[row.status]}`}>
                    {row.status}
                  </span>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="py-6 text-center text-sm text-slate-400">No jurisdictions match &ldquo;{query}&rdquo;.</li>
              )}
            </ul>
          </Reveal>

          <Reveal delay={80} className="rounded-2xl border border-slate-200 bg-white p-6">
            <Eyebrow>
              {jurisdictionDetail.name} — {jurisdictionDetail.status}
            </Eyebrow>
            <dl className="mt-5 space-y-3">
              {jurisdictionDetail.fields.map((field) => (
                <div key={field.label} className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 text-sm">
                  <dt className="text-slate-500">{field.label}</dt>
                  <dd className="text-right font-medium text-brand-dark">{field.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <ArrowLink href="/global-payroll/jurisdiction-directory">View jurisdiction coverage</ArrowLink>
              <ArrowLink href="/book-a-demo">Discuss your operating markets</ArrowLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold text-brand-dark">{jurisdictionFaq.question}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{jurisdictionFaq.answer}</p>
        </Reveal>
      </div>

      <div className="mt-14 border-t border-slate-200 py-6">
        <CountryMarquee />
      </div>
    </section>
  );
}
