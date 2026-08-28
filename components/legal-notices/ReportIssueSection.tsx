"use client";

import React, { useState } from "react";

const fieldClass =
  "w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-sky-950 placeholder:text-neutral-500 focus:border-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-700/30";

const labelClass = "block text-xs font-bold leading-5 text-sky-950";

const issueTypes: string[] = [
  "Trademark / brand concern",
  "Copyright concern",
  "Third-party attribution issue",
  "Open-source notice request",
  "Other legal-notice issue",
];

export default function ReportIssueSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="report-issue"
      aria-labelledby="report-issue-heading"
      className="w-full scroll-mt-24 border-b border-slate-200 bg-white"
    >
      <div className="mx-auto w-full max-w-[964px] px-4 py-11 sm:px-6">
        <h2
          id="report-issue-heading"
          className="text-xl font-bold leading-7 text-sky-950"
        >
          Report an IP, brand or legal issue
        </h2>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Use this form to report a suspected trademark, copyright, attribution
          or other legal-notice issue related to Zoiko Payroll web surfaces.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 rounded-2xl border border-slate-200 bg-slate-100 p-6 sm:p-7"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="legal-issue-type" className={labelClass}>
                Issue type
              </label>
              <select
                id="legal-issue-type"
                name="issueType"
                defaultValue={issueTypes[0]}
                className={`${fieldClass} mt-1.5`}
              >
                {issueTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="legal-issue-url" className={labelClass}>
                Reference URL (optional)
              </label>
              <input
                id="legal-issue-url"
                name="referenceUrl"
                type="url"
                placeholder="Page where the issue appears"
                className={`${fieldClass} mt-1.5`}
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="legal-issue-description" className={labelClass}>
              Description
            </label>
            <textarea
              id="legal-issue-description"
              name="description"
              rows={4}
              required
              placeholder="Briefly describe the issue"
              className={`${fieldClass} mt-1.5 resize-y`}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="legal-issue-contact" className={labelClass}>
              Your contact
            </label>
            <input
              id="legal-issue-contact"
              name="contact"
              type="text"
              required
              placeholder="For follow-up on this report"
              className={`${fieldClass} mt-1.5`}
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:from-[#2680bd] hover:to-[#093d61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
          >
            Submit report
          </button>

          <p aria-live="polite" className="sr-only">
            {submitted ? "Your legal-notice report has been recorded." : ""}
          </p>

          {submitted ? (
            <p className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm leading-5 text-green-800">
              Thanks — your report has been recorded and routed to Legal.
              We&apos;ll follow up using the contact details you provided.
            </p>
          ) : null}

          <p className="mt-5 text-xs leading-5 text-slate-500">
            This route is for legal-notice issues only — not sales, support,
            privacy or security reports. No marketing consent is requested here.
          </p>
        </form>
      </div>
    </section>
  );
}
