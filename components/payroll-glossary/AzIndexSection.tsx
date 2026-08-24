"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import ScopeChip from "./ScopeChip";
import { alphabet, terms } from "./terms";

const availableLetters = new Set(terms.map((term) => term.name[0].toUpperCase()));

function AzIndex() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();
  const [letter, setLetter] = useState<string | null>(null);

  const matches = terms.filter((term) => {
    const matchesLetter = letter === null || term.name[0].toUpperCase() === letter;
    const matchesQuery =
      query === "" ||
      term.name.toLowerCase().includes(query) ||
      term.definition.toLowerCase().includes(query);
    return matchesLetter && matchesQuery;
  });

  return (
    <>
      <Reveal delay={60} className="mt-10">
        <div className="flex flex-wrap gap-2">
          {alphabet.map((item) => {
            const enabled = availableLetters.has(item);
            const active = letter === item;
            return (
              <button
                key={item}
                type="button"
                disabled={!enabled}
                onClick={() => setLetter(active ? null : item)}
                aria-pressed={active}
                className={`h-8 w-8 rounded-lg text-xs font-bold leading-5 transition-colors duration-200 ${
                  active
                    ? "bg-gradient-to-br from-blue-500 to-sky-900 text-white"
                    : enabled
                      ? "border border-slate-200 bg-white text-sky-950 hover:bg-slate-50"
                      : "cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-300"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {(letter || query) && (
          <p className="mt-4 flex flex-wrap items-center gap-3 text-xs leading-5 text-slate-500">
            <span>
              {matches.length} {matches.length === 1 ? "term" : "terms"}
              {query ? ` matching “${searchParams.get("q")}”` : ""}
              {letter ? ` starting with ${letter}` : ""}
            </span>
            {letter && (
              <button
                type="button"
                onClick={() => setLetter(null)}
                className="font-bold text-sky-700 hover:text-sky-800"
              >
                Clear letter
              </button>
            )}
          </p>
        )}
      </Reveal>

      <Reveal delay={80} className="mt-6">
        {matches.length > 0 ? (
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 lg:grid-cols-2">
            {matches.map((term) => (
              <li key={term.name} className="bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-bold leading-5 text-sky-950">{term.name}</p>
                  <ScopeChip scope={term.scope} />
                </div>
                <p className="mt-2 text-xs leading-5 text-gray-600">{term.definition}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="rounded-xl border border-slate-200 bg-white px-5 py-6 text-sm leading-6 text-gray-600">
            No canonical term matches that wording yet. Try a related term, browse by topic, or ask
            the Help Center — the glossary never invents a definition to fill a gap.
          </p>
        )}
      </Reveal>
    </>
  );
}

export default function AzIndexSection() {
  return (
    <section id="a-z-index" className="scroll-mt-24 bg-white pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>A-Z index</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-2xl font-bold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
            Browse without knowing the exact wording.
          </h2>
        </Reveal>

        <Suspense fallback={<div className="mt-10 h-64" />}>
          <AzIndex />
        </Suspense>
      </div>
    </section>
  );
}
