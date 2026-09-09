"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";

const topicFilters = [
  "All topics",
  "Implementation",
  "Reporting",
  "Global payroll",
  "Live",
  "On demand",
  "This month",
];

export default function FindSessionSection() {
  const [activeFilter, setActiveFilter] = useState("All topics");
  const [query, setQuery] = useState("");

  return (
    <section className="w-full bg-white py-20">
      <Reveal className="mx-auto flex max-w-[1320px] flex-col items-center gap-7 px-6 md:px-24">
        {/* Header */}
        <div className="flex max-w-[680px] flex-col items-start gap-3.5">
          <div className="flex w-full items-center justify-center gap-1.5">
            <span className="h-3.5 w-1.5 rounded-xs bg-sky-600" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
              Find a session
            </span>
          </div>
          <h2 className="w-full text-center text-3xl font-extrabold leading-10 text-sky-950">
            Search and filter approved sessions
          </h2>
        </div>

        {/* Search card */}
        <div className="flex w-full max-w-[900px] flex-col items-start gap-3.5 rounded-2xl bg-white p-5 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200">
          <div className="flex w-full flex-col items-stretch gap-2 sm:flex-row">
            <label className="flex-1 overflow-hidden rounded-lg bg-white px-3.5 py-3.5 outline outline-1 outline-offset-[-1px] outline-slate-200">
              <span className="sr-only">Search by title, topic or speaker</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title, topic or speaker"
                className="w-full bg-transparent text-sm font-normal text-neutral-700 placeholder-neutral-500 focus:outline-none"
              />
            </label>
            <button
              type="button"
              className="flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-400 to-sky-700 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-transform duration-200 hover:scale-[1.02]"
            >
              <span className="text-sm font-bold leading-6 text-white">Search</span>
            </button>
          </div>

          {/* Topic filter chips */}
          <div className="flex flex-wrap items-start gap-2">
            {topicFilters.map((filter) => {
              const isActive = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold leading-5 transition-colors duration-200 ${
                    isActive
                      ? "bg-sky-950 text-white"
                      : "bg-indigo-50 text-sky-950 hover:bg-sky-100"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
