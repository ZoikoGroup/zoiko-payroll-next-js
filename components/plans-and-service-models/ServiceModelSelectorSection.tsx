"use client";

import React, { useState } from "react";
import Link from "next/link";

interface SelectorQuestion {
  id: string;
  label: string;
  options: string[];
}

const questions: SelectorQuestion[] = [
  {
    id: "operateDirectly",
    label: "Do you want your team to operate payroll directly?",
    options: ["Yes", "No", "Depends by country"],
  },
  {
    id: "retainProvider",
    label: "Do you need to retain an existing payroll provider or system?",
    options: ["Yes", "No", "Some countries"],
  },
  {
    id: "localSupport",
    label:
      "Do you need approved local payroll support where Zoiko does not directly deliver a service?",
    options: ["Yes", "No", "Unsure"],
  },
];

const defaultAnswers: Record<string, string> = {
  operateDirectly: "No",
  retainProvider: "Some countries",
  localSupport: "Yes",
};

/** Each answer contributes a delivery model; the set is what gets suggested. */
function suggestModels(answers: Record<string, string>): string {
  const models: string[] = [];

  if (answers.operateDirectly === "Yes") models.push("Customer-operated");
  if (answers.operateDirectly === "No") models.push("Zoiko Payroll");
  if (answers.operateDirectly === "Depends by country") {
    models.push("Zoiko Payroll", "Customer-operated");
  }

  if (
    answers.retainProvider === "Yes" ||
    answers.retainProvider === "Some countries"
  ) {
    models.push("Connected Payroll");
  }

  if (answers.localSupport === "Yes") models.push("Partner-Supported Payroll");
  if (answers.localSupport === "Unsure") models.push("commercial review");

  const unique = Array.from(new Set(models));
  if (unique.length === 0) return "Zoiko Payroll";
  return unique.join(" + ");
}

export default function ServiceModelSelectorSection() {
  const [answers, setAnswers] = useState<Record<string, string>>(defaultAnswers);

  return (
    <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-[#0A78C3] uppercase">
            <span className="w-[3px] h-3.5 rounded-[1px] bg-[#3B82F6]" />
            <span>Service Model Selector</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#082F49] leading-tight">
            How do you want each payroll to operate?
          </h2>
        </div>

        {/* Selector card */}
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
                  const selected = answers[question.id] === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={selected}
                      onClick={() =>
                        setAnswers((prev) => ({
                          ...prev,
                          [question.id]: option,
                        }))
                      }
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
              Suggested model(s): {suggestModels(answers)}
            </div>
            <p className="text-xs text-[#082F49] leading-5">
              Final delivery model is capability- and jurisdiction-specific and
              must be confirmed against current coverage and contracted scope.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200">
            <Link
              href="/global-payroll/jurisdiction-coverage"
              className="text-sm font-bold text-[#0A78C3] hover:text-[#082F49] transition-colors"
            >
              Check jurisdiction availability →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
