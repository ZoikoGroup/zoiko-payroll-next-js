"use client";

import React, { useState } from "react";

const inputClass =
  "w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-sky-950 placeholder:text-neutral-500 focus:border-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-700/30";

const labelClass = "block text-xs font-bold leading-5 text-sky-950";

export default function FeedbackSupportSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="feedback"
      aria-labelledby="feedback-heading"
      className="w-full border-b border-slate-200 bg-white scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-[904px] px-4 py-12 sm:px-6">
        <h2
          id="feedback-heading"
          className="text-xl font-bold leading-7 text-sky-950"
        >
          Feedback &amp; accessibility support
        </h2>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Tell us what you encountered — we don&apos;t require you to disclose a
          disability or diagnosis to get help.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 rounded-2xl border border-slate-200 bg-slate-100 p-6 sm:p-7"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="accessibility-name" className={labelClass}>
                Name
              </label>
              <input
                id="accessibility-name"
                name="name"
                type="text"
                autoComplete="name"
                className={`${inputClass} mt-1.5`}
              />
            </div>
            <div>
              <label htmlFor="accessibility-email" className={labelClass}>
                Email
              </label>
              <input
                id="accessibility-email"
                name="email"
                type="email"
                autoComplete="email"
                className={`${inputClass} mt-1.5`}
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="accessibility-task" className={labelClass}>
              What page or task were you trying to complete?
            </label>
            <input
              id="accessibility-task"
              name="task"
              type="text"
              placeholder="e.g. Approving a payroll run"
              className={`${inputClass} mt-1.5`}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="accessibility-barrier" className={labelClass}>
              Describe the barrier
            </label>
            <textarea
              id="accessibility-barrier"
              name="barrier"
              rows={4}
              required
              placeholder="What happened, and what assistive technology or browser were you using, if relevant?"
              className={`${inputClass} mt-1.5 resize-y`}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="accessibility-contact" className={labelClass}>
              Preferred contact / alternative format (optional)
            </label>
            <input
              id="accessibility-contact"
              name="preferredContact"
              type="text"
              placeholder="e.g. accessible PDF, phone follow-up"
              className={`${inputClass} mt-1.5`}
            />
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-lg border border-orange-200 bg-orange-100 px-4 py-3.5">
            <input
              id="accessibility-priority"
              name="priority"
              type="checkbox"
              className="mt-0.5 size-4 rounded-sm border border-neutral-500 bg-white accent-sky-700"
            />
            <label
              htmlFor="accessibility-priority"
              className="text-xs leading-5 text-yellow-900"
            >
              This is blocking a time-sensitive payroll task — route with
              priority.
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:from-[#2680bd] hover:to-[#093d61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
          >
            Submit report
          </button>

          <p aria-live="polite" className="sr-only">
            {submitted ? "Your accessibility report has been recorded." : ""}
          </p>

          {submitted ? (
            <p className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm leading-5 text-green-800">
              Thanks — your report has been recorded. We&apos;ll confirm receipt
              and next steps at the contact details you provided.
            </p>
          ) : null}

          <p className="mt-5 text-xs leading-5 text-slate-500">
            We categorize reports by affected surface and severity only — never
            by disability type. Free-text report content is never sent to
            general analytics.
          </p>
        </form>

        <p className="mt-6 rounded-[10px] border border-sky-100 bg-blue-50 px-5 py-4 text-sm leading-5 text-sky-950">
          Prefer not to use a form? Email{" "}
          <a
            href="mailto:accessibility@zoikopayroll.com"
            className="font-bold underline hover:text-sky-700"
          >
            accessibility@zoikopayroll.com
          </a>
          . This route is never gated behind a chatbot as the only option.
        </p>
      </div>
    </section>
  );
}
