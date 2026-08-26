"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

type RouteKey = "payroll-teams" | "growing" | "mid-market" | "international";

const routes: Record<RouteKey, { label: string; href: string; why: string }> = {
  "payroll-teams": {
    label: "Payroll Teams",
    href: "/solutions/payroll-teams",
    why: "practitioner-focused, day-to-day operating objective.",
  },
  growing: {
    label: "Growing Businesses",
    href: "/solutions/growing-businesses",
    why: "one market and a single entity — structure before scale.",
  },
  "mid-market": {
    label: "Mid-Market Organizations",
    href: "/solutions/mid-market-organizations",
    why: "expanding entities and specialist roles inside one market.",
  },
  international: {
    label: "International Groups",
    href: "/solutions/international-groups",
    why: "multiple jurisdictions and legal entities to coordinate.",
  },
};

/** Each answer names the route it argues for — nothing is scored behind the scenes. */
const questions = [
  {
    id: "jurisdictions",
    label: "Jurisdictions",
    options: [
      { value: "One", route: "payroll-teams" as RouteKey },
      { value: "2–4", route: "international" as RouteKey },
      { value: "5+", route: "international" as RouteKey },
    ],
  },
  {
    id: "entities",
    label: "Legal entities",
    options: [
      { value: "One", route: "payroll-teams" as RouteKey },
      { value: "2–5", route: "mid-market" as RouteKey },
      { value: "6+", route: "international" as RouteKey },
    ],
  },
  {
    id: "workforce",
    label: "Workforce range",
    options: [
      { value: "Under 1,000", route: "payroll-teams" as RouteKey },
      { value: "Under 200", route: "growing" as RouteKey },
      { value: "1,000+", route: "mid-market" as RouteKey },
    ],
  },
  {
    id: "objective",
    label: "Primary objective",
    options: [
      { value: "Run payroll operations day-to-day", route: "payroll-teams" as RouteKey },
      { value: "Add structure as we grow", route: "growing" as RouteKey },
      { value: "Coordinate teams and entities", route: "mid-market" as RouteKey },
      { value: "Coordinate multiple markets", route: "international" as RouteKey },
    ],
  },
];

export default function FindSolutionSection() {
  const [answers, setAnswers] = useState<Record<string, string>>(() =>
    Object.fromEntries(questions.map((question) => [question.id, question.options[0].value])),
  );

  // The route named by the most answers wins; ties fall to the earliest question's answer.
  const tally = new Map<RouteKey, number>();
  for (const question of questions) {
    const option = question.options.find((item) => item.value === answers[question.id]);
    if (!option) continue;
    tally.set(option.route, (tally.get(option.route) ?? 0) + 1);
  }

  let matched: RouteKey = "payroll-teams";
  let best = 0;
  for (const [key, count] of tally) {
    if (count > best) {
      matched = key;
      best = count;
    }
  }

  const route = routes[matched];

  return (
    <section id="find-your-solution" className="scroll-mt-24 border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Find your solution"
            title="Four questions — no hidden scoring, no sensitive inference"
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {questions.map((question) => (
              <div key={question.id} className="rounded-2xl border border-slate-200 px-5 py-5">
                <label
                  htmlFor={question.id}
                  className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500"
                >
                  {question.label}
                </label>
                <select
                  id={question.id}
                  value={answers[question.id]}
                  onChange={(event) =>
                    setAnswers((current) => ({ ...current, [question.id]: event.target.value }))
                  }
                  className="mt-3 w-full rounded-lg border border-slate-200 bg-gray-100 px-3 py-2.5 text-sm leading-5 text-slate-900 transition-colors duration-200 hover:border-slate-300 focus:border-blue-600 focus:outline-none"
                >
                  {question.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-5">
          <div className="flex flex-col items-start justify-between gap-5 rounded-xl border border-blue-600 bg-indigo-50 px-5 py-5 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-bold leading-5 text-slate-900">
                <span aria-hidden="true">→</span> {route.label} fits your inputs
              </p>
              <p className="mt-1.5 text-xs leading-5 text-gray-700">Why: {route.why}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#find-your-solution"
                className="flex min-h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5"
              >
                Edit answers
              </Link>
              <Link
                href={route.href}
                className="flex min-h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5"
              >
                Compare another route
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
