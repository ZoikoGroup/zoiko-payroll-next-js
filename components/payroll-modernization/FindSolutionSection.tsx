"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

type RouteKey =
  | "implementation"
  | "migration"
  | "centralized"
  | "multi"
  | "integrations"
  | "security";

/** Every destination stays visible — answers only reorder them, they never remove a path. */
const routes: { key: RouteKey; label: string; href: string }[] = [
  { key: "implementation", label: "Implementation", href: "/product/implementation" },
  { key: "migration", label: "Payroll Migration", href: "/solutions/payroll-migration" },
  {
    key: "centralized",
    label: "Centralized Payroll Operations",
    href: "/solutions/centralized-operations",
  },
  { key: "multi", label: "Multi-Jurisdiction Payroll", href: "/solutions/multi-jurisdiction" },
  { key: "integrations", label: "Integrations", href: "/product/integrations" },
  { key: "security", label: "Security & Trust", href: "/product/security" },
];

/** Each option states the pages it matches — nothing is scored or inferred behind the scenes. */
const questions = [
  {
    id: "jurisdictions",
    label: "Jurisdictions",
    options: [
      { value: "1–2", matches: [] as RouteKey[] },
      { value: "3–5", matches: ["multi"] as RouteKey[] },
      { value: "6+", matches: ["multi", "centralized"] as RouteKey[] },
    ],
  },
  {
    id: "entities",
    label: "Legal entities",
    options: [
      { value: "1", matches: [] as RouteKey[] },
      { value: "2–4", matches: ["centralized"] as RouteKey[] },
      { value: "5+", matches: ["centralized", "security"] as RouteKey[] },
    ],
  },
  {
    id: "workforce",
    label: "Workforce range",
    options: [
      { value: "Under 500", matches: [] as RouteKey[] },
      { value: "500–2,000", matches: ["integrations"] as RouteKey[] },
      { value: "2,000+", matches: ["integrations", "security"] as RouteKey[] },
    ],
  },
  {
    id: "objective",
    label: "Primary objective",
    options: [
      { value: "Migrate legacy payroll", matches: ["migration"] as RouteKey[] },
      { value: "Centralize operations", matches: ["centralized"] as RouteKey[] },
      { value: "Expand to new markets", matches: ["multi"] as RouteKey[] },
      { value: "Strengthen controls & evidence", matches: ["security"] as RouteKey[] },
    ],
  },
];

export default function FindSolutionSection() {
  const [answers, setAnswers] = useState<Record<string, string>>(() =>
    Object.fromEntries(questions.map((question) => [question.id, question.options[0].value])),
  );

  // Implementation always applies — every modernization program runs one.
  const matched = new Set<RouteKey>(["implementation"]);
  for (const question of questions) {
    const option = question.options.find((item) => item.value === answers[question.id]);
    for (const key of option?.matches ?? []) matched.add(key);
  }

  const ordered = [
    ...routes.filter((route) => matched.has(route.key)),
    ...routes.filter((route) => !matched.has(route.key)),
  ];

  return (
    <section id="find-your-solution" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Find your solution</Eyebrow>
          <h2 className="mt-2.5 text-3xl font-extrabold leading-9 text-slate-900">
            Four questions to route you to the right page
          </h2>
          <p className="mt-2.5 text-base leading-6 text-gray-700">
            No hidden scoring, no sensitive inference, no forced routing.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {questions.map((question) => (
              <div
                key={question.id}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-5"
              >
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

        <Reveal delay={120} className="mt-6">
          <div className="flex flex-wrap gap-2.5">
            {ordered.map((route) => (
              <Link
                key={route.key}
                href={route.href}
                className="rounded-lg bg-blue-50 px-3.5 py-2 text-sm font-semibold leading-5 text-blue-600 transition-colors duration-200 hover:bg-blue-100"
              >
                {route.label} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
