import React from "react";
import { SectionHeading } from "./Primitives";

const answers = ["Confirmed", "Reported", "Unknown", "Not applicable"] as const;

const QUESTION_NUMBER = 6;
const QUESTION_TOTAL = 16;

export default function InteractiveAssessmentSection() {
  return (
    <section id="readiness-assessment" className="scroll-mt-24 bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Interactive readiness assessment"
          title="Answer a few structured questions per dimension."
          body="Each question maps to a readiness dimension and gate. Responses build your readiness dashboard in real time."
        />

        {/*
          Static preview of the assessment: the radio group is real and
          selectable, but nothing is submitted and no progress is stored.
          Wire the buttons to the assessment engine once one exists.
        */}
        <div className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-[0px_30px_60px_-20px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <div
            className="h-2 overflow-hidden rounded-lg bg-slate-200"
            role="progressbar"
            aria-valuenow={QUESTION_NUMBER}
            aria-valuemin={1}
            aria-valuemax={QUESTION_TOTAL}
            aria-label="Assessment progress"
          >
            <div
              className="h-2 rounded-lg bg-linear-to-r from-blue-600 to-blue-400"
              style={{
                width: `${(QUESTION_NUMBER / QUESTION_TOTAL) * 100}%`,
              }}
            />
          </div>

          <div className="flex justify-between gap-4 pt-2">
            <span className="text-xs text-slate-500">
              Question {QUESTION_NUMBER} of {QUESTION_TOTAL}
            </span>
            <span className="text-xs text-slate-500">Data Readiness</span>
          </div>

          <p className="pt-6 text-xs font-semibold text-blue-600">
            Data readiness
          </p>
          <h3 className="pt-1.5 text-lg font-semibold leading-8 text-slate-900 sm:text-xl">
            Has legacy payroll data been validated and reconciled for accuracy?
          </h3>

          <fieldset className="pt-5">
            <legend className="sr-only">
              Has legacy payroll data been validated and reconciled for accuracy?
            </legend>
            <div className="flex flex-wrap gap-3">
              {answers.map((answer, index) => (
                <label key={answer} className="cursor-pointer">
                  <input
                    type="radio"
                    name="data-readiness-answer"
                    value={answer}
                    defaultChecked={index === 0}
                    className="peer sr-only"
                  />
                  <span className="block rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-900 transition-colors hover:border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600 peer-focus-visible:ring-offset-2">
                    {answer}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="flex flex-col gap-2 pb-1 pt-4">
            <label
              htmlFor="assessment-context"
              className="text-xs font-semibold text-slate-500"
            >
              Add supporting context (optional)
            </label>
            <textarea
              id="assessment-context"
              rows={2}
              placeholder="e.g. Reconciliation completed for US and UK entities, pending for Germany."
              className="min-h-16 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-5">
            {/* type="button" while static, so neither control submits or reloads */}
            <button
              type="button"
              className="cursor-pointer rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:border-blue-600"
            >
              Back
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-[0px_8px_20px_0px_rgba(37,99,235,0.16)] transition-colors hover:bg-blue-700"
            >
              Continue assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
