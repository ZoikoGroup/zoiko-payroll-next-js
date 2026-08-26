"use client";

import { useMemo, useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { SearchIcon, ChevronDownIcon } from "../ui/icons";

type Evidence = {
  id: string;
  title: string;
  type: string;
  scope: string;
  reviewed: string;
  status: "Current" | "Review Due" | "Under Review" | "Superseded";
  access: string;
  action: string;
};

const evidence: Evidence[] = [
  {
    id: "ZP EV-0114",
    title: "Security overview summary",
    type: "Summary",
    scope: "Zoiko Payroll — global",
    reviewed: "Apr 2026",
    status: "Current",
    access: "Public",
    action: "Open",
  },
  {
    id: "ZP EV-0098",
    title: "Accessibility conformance statement",
    type: "Statement",
    scope: "Web application",
    reviewed: "Jan 2026",
    status: "Current",
    access: "Public",
    action: "Open",
  },
  {
    id: "ZP EV-0231",
    title: "Penetration test executive summary",
    type: "Test result",
    scope: "Core payroll application",
    reviewed: "Nov 2025",
    status: "Review Due",
    access: "NDA / Contract",
    action: "Request access",
  },
  {
    id: "ZP EV-0187",
    title: "SOC type audit report",
    type: "Report",
    scope: "US processing environment",
    reviewed: "Feb 2026",
    status: "Current",
    access: "Restricted",
    action: "Evidence room",
  },
  {
    id: "ZP EV-0142",
    title: "Vulnerability management summary",
    type: "Summary",
    scope: "Zoiko Payroll — global",
    reviewed: "Dec 2025",
    status: "Under Review",
    access: "Restricted",
    action: "Evidence room",
  },
  {
    id: "ZP EV-0055",
    title: "Subprocessor list",
    type: "Record",
    scope: "Zoiko Payroll — global",
    reviewed: "Mar 2026",
    status: "Current",
    access: "Public",
    action: "Open",
  },
  {
    id: "ZP EV-0019",
    title: "Architecture & internal controls narrative",
    type: "Report",
    scope: "Core payroll application",
    reviewed: "Aug 2024",
    status: "Superseded",
    access: "Not Public",
    action: "Summary only",
  },
];

const types = ["All types", "Summary", "Statement", "Test result", "Report", "Record"];

const statusTone: Record<Evidence["status"], string> = {
  Current: "bg-emerald-50 text-emerald-600",
  "Review Due": "bg-orange-100 text-yellow-700",
  "Under Review": "bg-orange-100 text-yellow-700",
  Superseded: "bg-slate-100 text-slate-600",
};

export default function EvidenceDirectorySection() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All types");

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return evidence.filter((item) => {
      const matchesType = type === "All types" || item.type === type;
      const matchesQuery =
        needle === "" ||
        [item.title, item.type, item.scope, item.id].join(" ").toLowerCase().includes(needle);
      return matchesType && matchesQuery;
    });
  }, [query, type]);

  return (
    <section id="evidence-directory" className="scroll-mt-24 bg-[#F8FAFC] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <Eyebrow>Evidence directory</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
              A real, searchable directory — not a logo wall
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-base leading-6 text-slate-600">
              Scope, status, reviewed date and access class always sit above the download action.
              States fail closed: nothing stale is dressed up as current.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-8 flex flex-col gap-2.5 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search evidence by title, type or scope..."
              aria-label="Search evidence"
              className="w-full rounded-[10px] border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-light"
            />
          </div>
          <div className="relative shrink-0">
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              aria-label="Filter by evidence type"
              className="w-full appearance-none rounded-[10px] border border-slate-200 bg-white py-3 pl-4 pr-10 text-sm font-bold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-light sm:w-52"
            >
              {types.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-5 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white lg:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[880px] border-collapse text-left">
              <thead className="bg-[#F8FAFC]">
                <tr className="border-b border-slate-200">
                  <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Artifact
                  </th>
                  <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Scope
                  </th>
                  <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Reviewed
                  </th>
                  <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Status
                  </th>
                  <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Access
                  </th>
                  <th className="px-6 py-3.5">
                    <span className="sr-only">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.map((item) => (
                  <tr key={item.id} className="border-b border-slate-200 last:border-b-0">
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-brand-dark">{item.title}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{item.id}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{item.scope}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{item.reviewed}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${statusTone[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-700">
                        {item.access}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {item.action === "Summary only" ? (
                        <span className="text-sm font-semibold text-slate-400">{item.action}</span>
                      ) : (
                        <button
                          type="button"
                          className="group inline-flex items-center gap-1 text-sm font-bold text-brand transition-colors duration-200 hover:text-brand-dark"
                        >
                          {item.action}
                          <span
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                          >
                            →
                          </span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}

                {results.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-10 text-center text-sm text-slate-500">
                      No evidence matches this search. Nothing is inferred here — clear the search
                      or request access through a trust review.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="mt-5 flex flex-col gap-4 lg:hidden">
          {results.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 40}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-sm font-bold text-brand-dark">{item.title}</p>
              <p className="mt-0.5 text-xs text-slate-500">{item.id}</p>

              <div className="mt-3.5 flex flex-wrap gap-2">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${statusTone[item.status]}`}
                >
                  {item.status}
                </span>
                <span className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-700">
                  {item.access}
                </span>
              </div>

              <dl className="mt-4 space-y-1.5 border-t border-slate-100 pt-3.5 text-xs">
                <div className="flex justify-between gap-4">
                  <dt className="font-semibold text-slate-500">Scope</dt>
                  <dd className="text-right text-slate-700">{item.scope}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-semibold text-slate-500">Reviewed</dt>
                  <dd className="text-right text-slate-700">{item.reviewed}</dd>
                </div>
              </dl>

              <div className="mt-3.5">
                {item.action === "Summary only" ? (
                  <span className="text-sm font-semibold text-slate-400">{item.action}</span>
                ) : (
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-sm font-bold text-brand transition-colors duration-200 hover:text-brand-dark"
                  >
                    {item.action}
                    <span aria-hidden="true">→</span>
                  </button>
                )}
              </div>
            </Reveal>
          ))}

          {results.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-10 text-center text-sm text-slate-500">
              No evidence matches this search. Nothing is inferred here — clear the search or
              request access through a trust review.
            </div>
          )}
        </div>

        <Reveal delay={200}>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            Public opens or downloads directly · Public on Request uses a minimal contact step ·
            Restricted requires an authenticated evidence room · NDA / Contract depends on an
            executed legal condition · Customer Only requires sign in · Not Public offers a safe
            summary at most.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
