"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

type RouteKey = "migration" | "multi" | "centralized" | "modernization" | "single";

type Route = { key: RouteKey; label: string; href: string; reason: string };

const routes: Record<RouteKey, Route> = {
  migration: {
    key: "migration",
    label: "Payroll Migration",
    href: "/payroll-migration",
    reason: "Migrate-payroll objective, multiple entities and retained history in scope.",
  },
  multi: {
    key: "multi",
    label: "Multi-Jurisdiction Payroll",
    href: "/multi-jurisdiction",
    reason: "Several jurisdictions in scope — local requirements drive the operating model.",
  },
  centralized: {
    key: "centralized",
    label: "Centralized Payroll Operations",
    href: "/centralized-operations",
    reason: "Many entities coordinated by one team — oversight matters more than movement.",
  },
  modernization: {
    key: "modernization",
    label: "Payroll Modernization",
    href: "/payroll-modernization",
    reason: "Replacing fragmented workflows is a program, with migration as one workstream.",
  },
  single: {
    key: "single",
    label: "Single-Jurisdiction Payroll",
    href: "/single-jurisdiction",
    reason: "One operating market, one entity — structured control without cross-border scope.",
  },
};

const questions = [
  { id: "jurisdictions", label: "Jurisdictions", options: ["1", "2–3", "4+"] },
  { id: "entities", label: "Entities / groups", options: ["1", "2–3", "4–6", "7+"] },
  {
    id: "workforce",
    label: "Workforce range",
    options: ["Under 250", "250–1,000", "1,000–5,000", "5,000+"],
  },
  {
    id: "objective",
    label: "Primary objective",
    options: [
      "Migrate payroll",
      "Replace legacy workflows",
      "Centralize operations",
      "Expand to new markets",
    ],
  },
] as const;

const defaults: Record<string, string> = {
  jurisdictions: "2–3",
  entities: "4–6",
  workforce: "1,000–5,000",
  objective: "Migrate payroll",
};

/** Deterministic: the objective decides, and scope only breaks the "expand" tie. */
function resolveRoute(answers: Record<string, string>): Route {
  switch (answers.objective) {
    case "Migrate payroll":
      return routes.migration;
    case "Replace legacy workflows":
      return routes.modernization;
    case "Centralize operations":
      return routes.centralized;
    default:
      return answers.jurisdictions === "1" ? routes.single : routes.multi;
  }
}

export default function GuidedRouteSection() {
  const [answers, setAnswers] = useState<Record<string, string>>(defaults);
  const [editing, setEditing] = useState(false);

  const result = resolveRoute(answers);

  return (
    <section id="find-your-solution" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Guided route</Eyebrow>
          <h2 className="mt-2.5 text-3xl font-extrabold leading-9 text-slate-900">
            Four questions — a deterministic result
          </h2>
          <p className="mt-2.5 text-base leading-6 text-gray-700">
            No hidden lead score, inferred classification or sensitive profiling.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {questions.map((question) => (
              <div
                key={question.id}
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4"
              >
                <label
                  htmlFor={question.id}
                  className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500"
                >
                  {question.label}
                </label>
                {editing ? (
                  <select
                    id={question.id}
                    value={answers[question.id]}
                    onChange={(event) =>
                      setAnswers((current) => ({
                        ...current,
                        [question.id]: event.target.value,
                      }))
                    }
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm leading-5 text-slate-900 transition-colors duration-200 hover:border-slate-300 focus:border-blue-600 focus:outline-none"
                  >
                    {question.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p className="mt-2 text-sm font-semibold leading-5 text-slate-900">
                    {answers[question.id]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-4">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg bg-blue-50 px-5 py-5">
            <div>
              <p className="text-sm font-bold leading-5 text-slate-900">
                <span aria-hidden="true">&rarr;</span>{" "}
                <Link
                  href={result.href}
                  className="underline-offset-2 transition-colors duration-200 hover:text-blue-600 hover:underline"
                >
                  {result.label}
                </Link>{" "}
                fits your inputs
              </p>
              <p className="mt-1 text-sm leading-5 text-slate-600">{result.reason}</p>
            </div>
            <button
              type="button"
              onClick={() => setEditing((current) => !current)}
              className="min-h-11 shrink-0 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold leading-5 text-slate-900 transition-all duration-200 hover:-translate-y-0.5"
            >
              {editing ? "Show my route" : "Compare another route"}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
