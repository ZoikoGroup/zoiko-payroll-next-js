"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Question {
  id: string;
  label: string;
  options: string[];
  /** Controls allow several answers at once; the rest are single-choice. */
  multi?: boolean;
}

const questions: Question[] = [
  {
    id: "workers",
    label: "1. Active payroll relationships in a typical month?",
    options: ["1–50", "51–250", "251–1,000", "1,001+"],
  },
  {
    id: "entities",
    label: "2. How many legal employer entities?",
    options: ["1", "2–3", "4–10", "11+"],
  },
  {
    id: "jurisdictions",
    label: "3. How many production jurisdictions?",
    options: ["1", "2–3", "4–10", "11+"],
  },
  {
    id: "controls",
    label: "4. Which controls are required?",
    options: [
      "Multi-step approval",
      "API",
      "Webhooks",
      "SSO",
      "SCIM",
      "Advanced reporting",
    ],
    multi: true,
  },
  {
    id: "operation",
    label: "5. How do you want payroll operated?",
    options: [
      "Customer-operated",
      "Zoiko Payroll",
      "Connected provider",
      "Partner-supported",
      "Not sure",
    ],
  },
];

const defaultAnswers: Record<string, string[]> = {
  workers: ["51–250"],
  entities: ["2–3"],
  jurisdictions: ["2–3"],
  controls: ["Multi-step approval", "Webhooks", "Advanced reporting"],
  operation: ["Connected provider"],
};

/** Highest plan implied by any single answer wins. */
function recommendPlan(answers: Record<string, string[]>): string {
  const rank = { Core: 0, Professional: 1, Business: 2, Enterprise: 3 };
  let plan: keyof typeof rank = "Core";

  const raise = (candidate: keyof typeof rank) => {
    if (rank[candidate] > rank[plan]) plan = candidate;
  };

  const [workers] = answers.workers ?? [];
  if (workers === "51–250") raise("Professional");
  if (workers === "251–1,000") raise("Business");
  if (workers === "1,001+") raise("Enterprise");

  const scaleAnswers = [answers.entities?.[0], answers.jurisdictions?.[0]];
  scaleAnswers.forEach((value) => {
    if (value === "2–3") raise("Professional");
    if (value === "4–10") raise("Business");
    if (value === "11+") raise("Enterprise");
  });

  const controls = answers.controls ?? [];
  if (controls.includes("Multi-step approval") || controls.includes("Advanced reporting")) {
    raise("Professional");
  }
  if (
    controls.includes("API") ||
    controls.includes("Webhooks") ||
    controls.includes("SSO")
  ) {
    raise("Business");
  }
  if (controls.includes("SCIM")) raise("Enterprise");

  return plan;
}

function operatingReview(answers: Record<string, string[]>): string {
  const [operation] = answers.operation ?? [];
  switch (operation) {
    case "Customer-operated":
      return "Suggested operating review: customer-operated. Why: your team retains operational ownership, so the plan needs to license controls and records rather than a delivery service.";
    case "Zoiko Payroll":
      return "Suggested operating review: Zoiko Payroll native. Why: your scope runs on entitled Zoiko capabilities, subject to current jurisdiction coverage.";
    case "Connected provider":
      return "Suggested operating review: mixed delivery model. Why: your scope requires multiple entities and jurisdictions plus scheduled reporting, while you indicated that some local payrolls may remain with existing providers.";
    case "Partner-supported":
      return "Suggested operating review: partner-supported delivery. Why: approved local providers perform defined services, so a responsibility matrix and partner terms are required alongside the plan.";
    default:
      return "Suggested operating review: commercial review. Why: the delivery model is still open, so availability must be confirmed against current coverage before a model is assumed.";
  }
}

export default function PlanFitNavigatorSection() {
  const [answers, setAnswers] =
    useState<Record<string, string[]>>(defaultAnswers);

  const toggle = (question: Question, option: string) => {
    setAnswers((prev) => {
      const current = prev[question.id] ?? [];
      if (question.multi) {
        return {
          ...prev,
          [question.id]: current.includes(option)
            ? current.filter((value) => value !== option)
            : [...current, option],
        };
      }
      return { ...prev, [question.id]: [option] };
    });
  };

  const plan = recommendPlan(answers);

  return (
    <section className="w-full bg-[#EFF4F7] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-[#0A78C3] uppercase">
              <span className="w-[3px] h-3.5 rounded-[1px] bg-[#3B82F6]" />
              <span>Plan Fit Navigator</span>
            </div>
            <h2 className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#082F49] leading-tight">
              Answer five questions, get a directional fit.
            </h2>
            <p className="text-sm sm:text-base text-[#4E6172] leading-6">
              This is guidance, not a binding quote or coverage commitment. We
              never ask for employee names, salaries, bank data or payroll
              files.
            </p>
          </div>

          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-[0px_20px_44px_-22px_rgba(15,45,70,0.25)]">
            <Image
              src="/images/plans-and-service-models/plan-fit-navigator.png"
              alt="A finance professional reviewing payroll plan options"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6">
          {questions.map((question) => (
            <fieldset
              key={question.id}
              className="py-5 border-b border-slate-200 first:pt-0"
            >
              <legend className="text-xs font-bold text-[#082F49] leading-5">
                {question.label}
              </legend>
              <div className="flex flex-wrap gap-2.5 pt-3">
                {question.options.map((option) => {
                  const selected = (answers[question.id] ?? []).includes(
                    option
                  );
                  return (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggle(question, option)}
                      className={`text-xs font-bold px-3.5 py-2 rounded-[20px] border transition-colors cursor-pointer ${
                        selected
                          ? "bg-[#082F49] border-transparent text-white"
                          : "bg-slate-100 border-slate-200 text-[#082F49] hover:bg-slate-200"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}

          {/* Result */}
          <div className="mt-6 bg-blue-50 border border-sky-100 rounded-[10px] p-5 space-y-1.5">
            <div className="text-xs font-bold text-[#082F49] leading-5">
              Recommended product plan: {plan}
            </div>
            <p className="text-xs text-[#082F49] leading-5">
              {operatingReview(answers)}
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-5">
          Anonymous selections may persist locally on this device; nothing
          transfers to our CRM until you explicitly submit a lead. A
          delivery-model selection here is never treated as contractual
          acceptance.
        </p>
      </div>
    </section>
  );
}
