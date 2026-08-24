"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const popular = ["Gross pay", "Net pay", "Pay period", "Payroll cutoff", "Reconciliation"];

const quickLinks = [
  { label: "Browse A-Z →", href: "#a-z-index" },
  { label: "Browse by topic →", href: "#topics" },
  { label: "Compare common terms →", href: "#compare" },
];

export default function HeroSection() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function search(term: string) {
    const trimmed = term.trim();
    router.push(trimmed ? `/payroll-glossary?q=${encodeURIComponent(trimmed)}#a-z-index` : "#a-z-index");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    search(query);
  }

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Payroll Glossary</Eyebrow>
            <h1 className="mt-6 text-3xl font-bold leading-tight text-sky-950 sm:text-4xl lg:text-5xl lg:leading-[49.28px]">
              Payroll terms, explained clearly.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-6 text-gray-600">
              Find direct definitions of payroll terms, abbreviations and related concepts — then
              follow the authoritative source when product behavior, market rules or current
              operational status matters.
            </p>

            <p className="mt-7 max-w-xl rounded-[10px] border border-sky-100 bg-blue-50 px-4 py-3.5 text-xs leading-5 text-blue-950">
              <span className="font-bold text-sky-950">Boundary:</span> Definitions are educational
              terminology, not legal, tax, accounting, payroll or employment advice — and not proof
              of product availability, configuration or compliance.
            </p>

            <form
              onSubmit={handleSubmit}
              role="search"
              className="mt-6 flex max-w-xl gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-[0px_14px_30px_-16px_rgba(15,45,70,0.25)]"
            >
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="Search a payroll term"
                placeholder="Search a payroll term — e.g. gross pay, cutoff, reconciliation"
                className="h-12 min-w-0 flex-1 rounded-lg px-3 text-sm text-sky-950 placeholder:text-slate-500 focus:outline-none"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-lg bg-gradient-to-r from-blue-500 to-sky-900 px-6 text-sm font-bold leading-5 text-white shadow-[0px_8px_18px_-6px_rgba(11,76,120,0.45)] transition-all duration-200 hover:-translate-y-0.5"
              >
                Search
              </button>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs leading-5 text-slate-500">Popular:</span>
              {popular.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => search(term)}
                  className="rounded-[20px] border border-slate-200 bg-slate-100 px-3.5 py-2 text-xs font-bold leading-5 text-sky-950 transition-colors duration-200 hover:bg-slate-200"
                >
                  {term}
                </button>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-x-10 gap-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-bold leading-5 text-sky-700 hover:text-sky-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-[0px_30px_60px_-24px_rgba(15,45,70,0.28)]">
                <img
                  src="/images/payroll-glossary/hero.png"
                  alt="A payroll professional checking terminology while working"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -left-4 -top-6 hidden w-56 rounded-xl border border-slate-200 bg-white p-4 shadow-[0px_20px_40px_-16px_rgba(15,45,70,0.30)] xl:block">
                <p className="text-[10px] font-bold uppercase leading-4 tracking-wide text-slate-500">
                  Canonical match
                </p>
                <p className="mt-2 text-sm font-bold leading-5 text-sky-950">Pay period</p>
                <p className="mt-1.5 text-xs leading-4 text-gray-600">
                  The span of time for which earnings and payroll inputs are attributed.
                </p>
                <span className="mt-3 inline-flex items-center rounded-[20px] bg-blue-50 px-2.5 py-1 text-[10px] font-bold leading-4 text-sky-700">
                  General payroll
                </span>
              </div>

              <div className="absolute -bottom-8 -right-4 hidden w-52 rounded-xl border border-slate-200 bg-white p-4 shadow-[0px_20px_40px_-16px_rgba(15,45,70,0.30)] xl:block">
                <dl className="space-y-2.5 text-xs leading-4">
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-gray-600">Not the same as</dt>
                    <dd className="font-bold text-sky-950">Pay date</dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-gray-600">Reviewed state</dt>
                    <dd className="font-bold text-sky-950">Current</dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-gray-600">Aliases</dt>
                    <dd className="font-bold text-sky-950">2 shown</dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
