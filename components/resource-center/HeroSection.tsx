"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StateBadge from "./StateBadge";
import { SearchIcon } from "../ui/icons";

const families = ["All families", "Docs", "Guides", "Status"] as const;

const records = [
  {
    title: "MFA setup and enforcement",
    meta: "Product Documentation · Reviewed Jul 2026",
    state: "Current" as const,
    family: "Docs",
  },
  {
    title: "Payroll approvals workflow",
    meta: "Payroll Guide · Reviewed Jun 2026",
    state: "Current" as const,
    family: "Guides",
  },
  {
    title: "France — jurisdiction overview",
    meta: "Jurisdiction Guide · Reviewed Aug 2026",
    state: "Review due" as const,
    family: "Guides",
  },
  {
    title: "v4.2 reporting export changes",
    meta: "Release Notes · Released Aug 2026",
    state: "Current" as const,
    family: "Docs",
  },
  {
    title: "Incident history — August 2026",
    meta: "System Status · Updated Aug 2026",
    state: "Current" as const,
    family: "Status",
  },
];

const stats = [
  { value: "11", label: "Resource families indexed" },
  { value: "100%", label: "Results carry a reviewed date" },
  { value: "0", label: "Generated or invented answers" },
];

const owners = [
  "/images/resource-center/owner-1.png",
  "/images/resource-center/owner-2.png",
  "/images/resource-center/owner-3.png",
];

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState<(typeof families)[number]>("All families");

  const normalized = query.trim().toLowerCase();
  const results = records
    .filter((record) => {
      const matchesFamily = family === "All families" || record.family === family;
      const matchesQuery =
        normalized === "" ||
        record.title.toLowerCase().includes(normalized) ||
        record.meta.toLowerCase().includes(normalized);
      return matchesFamily && matchesQuery;
    })
    .slice(0, 4);

  return (
    <section
      className="relative overflow-hidden py-16 lg:py-20"
      style={{
        backgroundImage:
          "radial-gradient(at 15% 0%, #164e63 0%, #0f172a 45%, #020617 100%)",
      }}
    >
      {/* Ambient glows behind the content, matching the design canvas. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-1/2 h-[629px] w-[1008px] blur-[5px]"
        style={{
          backgroundImage:
            "radial-gradient(closest-side, rgba(2,132,199,0.30), rgba(2,132,199,0) 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-7 left-[55%] h-[550px] w-[864px] blur-[5px]"
        style={{
          backgroundImage:
            "radial-gradient(closest-side, rgba(56,189,248,0.20), rgba(56,189,248,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <Eyebrow tone="light">Resource center</Eyebrow>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[51.52px]">
              Find the payroll knowledge your task requires.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-6 text-slate-300">
              Search and browse guides, product documentation, support, release information,
              jurisdiction guidance, videos and topic resources — organized so you can see what
              source you&apos;re opening and when it was reviewed.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/resources/help-center"
                className="flex min-h-11 items-center justify-center rounded-[30px] bg-blue-300 px-8 py-3 text-sm font-extrabold leading-5 text-sky-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-200"
              >
                Contact Support
              </Link>
              <Link
                href="/book-a-demo"
                className="flex min-h-11 items-center justify-center rounded-[30px] border border-white/30 px-8 py-3 text-sm font-bold leading-5 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Book a Demo
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-2xl font-extrabold leading-10 text-blue-300">
                      {stat.value}
                    </span>
                    <span className="block text-xs leading-5 text-slate-400">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-xs leading-5 text-blue-300">
              Need product help right now?{" "}
              <Link href="/resources/help-center" className="font-bold text-blue-300 hover:text-white">
                Visit Help Center →
              </Link>
            </p>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex gap-0.5" aria-hidden="true">
                {owners.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-7 w-7 rounded-2xl border-2 border-white/50 object-cover"
                  />
                ))}
              </div>
              <p className="text-xs leading-4 text-blue-300">
                Every source has a{" "}
                <span className="font-bold text-white">named content owner</span> and review cadence
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl bg-sky-950 p-5 shadow-[0px_8px_24px_0px_rgba(10,46,75,0.08)]">
              <div className="flex items-center justify-between gap-3">
                <p className="flex items-center gap-2 text-sm font-bold leading-5 text-white">
                  <span className="inline-block h-2 w-2 rounded-xs bg-sky-600" aria-hidden="true" />
                  Resource Finder
                </p>
                <span className="rounded-[20px] bg-white/10 px-2.5 py-1 text-xs font-bold leading-4 text-blue-200">
                  Live preview
                </span>
              </div>

              <div className="relative mt-3.5">
                <SearchIcon
                  className="pointer-events-none absolute left-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-300"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  aria-label="Search payroll knowledge"
                  placeholder="Search payroll knowledge — e.g., MFA setup, France, migration"
                  className="h-11 w-full rounded-[10px] border border-white/10 bg-white/10 pl-10 pr-4 text-xs leading-5 text-white placeholder:text-slate-300 focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div className="mt-3.5 flex flex-wrap gap-2">
                {families.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFamily(item)}
                    aria-pressed={family === item}
                    className={`rounded-[20px] px-2.5 py-1 text-xs font-bold leading-4 transition-colors duration-200 ${
                      family === item
                        ? "bg-blue-300 text-sky-950"
                        : "bg-white/10 text-slate-300 hover:bg-white/20"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <ul className="mt-3 space-y-2.5">
                {results.map((record) => (
                  <li
                    key={record.title}
                    className="flex items-center justify-between gap-3 rounded-[10px] border border-white/10 bg-white/5 px-3.5 py-3"
                  >
                    <span>
                      <span className="block text-xs font-bold leading-4 text-blue-100">
                        {record.title}
                      </span>
                      <span className="mt-1 block text-xs leading-4 text-slate-400">
                        {record.meta}
                      </span>
                    </span>
                    <StateBadge state={record.state} tone="dark" />
                  </li>
                ))}
                {results.length === 0 && (
                  <li className="rounded-[10px] border border-white/10 bg-white/5 px-3.5 py-3 text-xs leading-4 text-slate-400">
                    No match in this preview. Resource Center never invents an answer — it routes you
                    to search, Help Center or Sales instead.
                  </li>
                )}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
