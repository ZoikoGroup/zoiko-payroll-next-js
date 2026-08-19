"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

type RouteKey = "growing" | "mid-market" | "enterprise" | "international";

const routes: Record<RouteKey, { label: string; href: string; why: string }> = {
  growing: {
    label: "Growing Businesses",
    href: "/growing-businesses",
    why: "one market, a single entity and a small payroll team point to adding structure before scale.",
  },
  "mid-market": {
    label: "Mid-Market",
    href: "/mid-market-organizations",
    why: "expanding entities, specialist roles and reconciliation needs point to Mid-Market.",
  },
  enterprise: {
    label: "Enterprise",
    href: "/solutions/enterprise",
    why: "scale, procurement and governance depth point to Enterprise.",
  },
  international: {
    label: "International Groups",
    href: "/multi-jurisdiction",
    why: "statutory responsibility across markets points to multi-jurisdiction payroll.",
  },
};

/** Each answer names the route it argues for — nothing is scored behind the scenes. */
const questions = [
  {
    id: "jurisdictions",
    label: "Jurisdictions",
    options: [
      { value: "1–2", route: "mid-market" as RouteKey },
      { value: "3–5", route: "international" as RouteKey },
      { value: "6+", route: "international" as RouteKey },
    ],
  },
  {
    id: "entities",
    label: "Legal entities",
    options: [
      { value: "1", route: "growing" as RouteKey },
      { value: "1–5", route: "mid-market" as RouteKey },
      { value: "6+", route: "enterprise" as RouteKey },
    ],
  },
  {
    id: "workforce",
    label: "Workforce range",
    options: [
      { value: "Under 200", route: "growing" as RouteKey },
      { value: "Under 1,000", route: "mid-market" as RouteKey },
      { value: "1,000+", route: "enterprise" as RouteKey },
    ],
  },
  {
    id: "objective",
    label: "Primary objective",
    options: [
      { value: "Structure, oversight, reporting", route: "mid-market" as RouteKey },
      { value: "First repeatable payroll", route: "growing" as RouteKey },
      { value: "Governance & procurement", route: "enterprise" as RouteKey },
      { value: "Expand to new markets", route: "international" as RouteKey },
    ],
  },
];

export default function GuidedRouteSection() {
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

  let matched: RouteKey = "mid-market";
  let best = 0;
  for (const [key, count] of tally) {
    if (count > best) {
      matched = key;
      best = count;
    }
  }

  const route = routes[matched];

  return (
    <section id="guided-route" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeading
              wrap
              eyebrow="Guided route"
              title="Four questions. A deterministic, explainable recommendation"
              description="Where do you run payroll, how many legal entities, what workforce range, and what to improve first — never a hidden score."
            />
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/mid-market-organizations/guided-route.png"
              alt="Two colleagues comparing payroll options"
              className="aspect-[548/418] w-full rounded-xl object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {questions.map((question) => (
              <div key={question.id} className="rounded-xl border border-slate-200 px-5 py-5">
                <label
                  htmlFor={question.id}
                  className="text-xs font-semibold uppercase leading-4 tracking-wide text-slate-500"
                >
                  {question.label}
                </label>
                <select
                  id={question.id}
                  value={answers[question.id]}
                  onChange={(event) =>
                    setAnswers((current) => ({ ...current, [question.id]: event.target.value }))
                  }
                  className="mt-3 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm leading-5 text-sky-950 transition-colors duration-200 hover:border-slate-300 focus:border-sky-600 focus:outline-none"
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

        <Reveal delay={180} className="mt-5">
          <div className="flex flex-col items-start justify-between gap-5 rounded-xl bg-sky-100 px-5 py-5 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-bold leading-5 text-sky-950">
                <span aria-hidden="true">→</span> {route.label} fits your inputs
              </p>
              <p className="mt-2 text-xs leading-5 text-sky-900">
                Why: {route.why} Edit any answer to compare another route.
              </p>
            </div>
            <Link
              href={route.href}
              className="flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-sky-950 transition-all duration-200 hover:-translate-y-0.5"
            >
              Compare another route
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
