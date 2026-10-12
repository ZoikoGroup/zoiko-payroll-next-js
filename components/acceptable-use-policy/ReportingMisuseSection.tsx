"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface RoutingRow {
  need: string;
  routeLabel: string;
  href: string;
}

const routingRows: RoutingRow[] = [
  {
    need: "Suspected policy misuse",
    routeLabel: "Use the form below",
    href: "#report-form",
  },
  {
    need: "Account or product problem",
    routeLabel: "Help Center / Contact Support",
    href: "/resources/help-center",
  },
  {
    need: "Security vulnerability",
    routeLabel: "Responsible Disclosure",
    href: "/resources/security-trust",
  },
  {
    need: "Active security incident",
    routeLabel: "Security incident route / System Status",
    href: "/resources/system-status",
  },
  {
    need: "Privacy rights or question",
    routeLabel: "Contact Privacy",
    href: "/legal/privacy-notice",
  },
  {
    need: "Billing or payment support",
    routeLabel: "Billing Support (not an abuse report)",
    href: "/contact",
  },
  {
    need: "Law-enforcement / legal process",
    routeLabel: "Approved formal Legal route",
    href: "/legal/legal-notices#formal-notice",
  },
];

const reportCategories: string[] = [
  "Unauthorized access",
  "Fraud, deception or impersonation",
  "Security circumvention",
  "Unauthorized payroll or payment action",
  "Data or confidentiality misuse",
  "Service disruption or interference",
  "Other suspected misuse",
];

const fieldClass =
  "w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-sky-950 placeholder:text-neutral-500 focus:border-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-700/30";

const labelClass = "block text-xs font-bold leading-5 text-sky-950";

export default function ReportingMisuseSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="reporting"
      aria-labelledby="reporting-heading"
      className="w-full scroll-mt-24 border-b border-slate-200 bg-white"
    >
      <div className="mx-auto w-full max-w-[964px] px-4 py-11 sm:px-6">
        <div className="relative h-40 w-full overflow-hidden rounded-xl border border-slate-200 sm:h-56">
          <Image
            src="/images/acceptable-use-policy/aup-reporting.png"
            alt=""
            fill
            sizes="(max-width: 964px) 100vw, 916px"
            className="object-cover"
          />
        </div>

        <h2
          id="reporting-heading"
          className="mt-10 text-xl font-bold leading-7 text-sky-950"
        >
          Reporting suspected misuse
        </h2>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Use the route that matches what you&apos;re reporting — misuse
          reporting is separate from sales, support, privacy and
          security-vulnerability routes.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="bg-slate-100">
                <th
                  scope="col"
                  className="w-[45%] border-b border-slate-200 px-3.5 py-3 text-xs font-bold uppercase leading-4 text-slate-500"
                >
                  Your need
                </th>
                <th
                  scope="col"
                  className="border-b border-slate-200 px-3.5 py-3 text-xs font-bold uppercase leading-4 text-slate-500"
                >
                  Route
                </th>
              </tr>
            </thead>
            <tbody>
              {routingRows.map((row) => (
                <tr key={row.need}>
                  <th
                    scope="row"
                    className="border-b border-slate-200 px-3.5 py-3.5 align-top text-sm font-normal leading-5 text-gray-600"
                  >
                    {row.need}
                  </th>
                  <td className="border-b border-slate-200 px-3.5 py-3.5 align-top text-sm leading-5">
                    <Link
                      href={row.href}
                      className="font-bold text-sky-700 hover:text-sky-900"
                    >
                      {row.routeLabel}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <form
          id="report-form"
          onSubmit={handleSubmit}
          className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-slate-100 p-6 sm:p-7"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="aup-report-category" className={labelClass}>
                Report category
              </label>
              <select
                id="aup-report-category"
                name="category"
                defaultValue={reportCategories[0]}
                className={`${fieldClass} mt-1.5`}
              >
                {reportCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="aup-report-context" className={labelClass}>
                Affected service / context
              </label>
              <input
                id="aup-report-context"
                name="context"
                type="text"
                placeholder="e.g. customer console"
                className={`${fieldClass} mt-1.5`}
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="aup-report-description" className={labelClass}>
              Description
            </label>
            <textarea
              id="aup-report-description"
              name="description"
              rows={4}
              required
              placeholder="Briefly describe what happened"
              className={`${fieldClass} mt-1.5 resize-y`}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="aup-report-evidence" className={labelClass}>
              Evidence / link / reference (optional)
            </label>
            <input
              id="aup-report-evidence"
              name="evidence"
              type="text"
              placeholder="A safe URL or reference — no file upload"
              className={`${fieldClass} mt-1.5`}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="aup-report-contact" className={labelClass}>
              Your contact (optional)
            </label>
            <input
              id="aup-report-contact"
              name="contact"
              type="text"
              placeholder="Only if you would like follow-up"
              className={`${fieldClass} mt-1.5`}
            />
          </div>

          <p className="mt-5 rounded-lg border border-rose-300 bg-rose-100 px-4 py-3 text-xs leading-5 text-red-900">
            <span className="font-bold">Do not include:</span> passwords,
            payroll exports, bank/tax IDs, employee records or unnecessary
            confidential information in this report.
          </p>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:from-[#2680bd] hover:to-[#093d61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
          >
            Submit report
          </button>

          <p aria-live="polite" className="sr-only">
            {submitted ? "Your misuse report has been recorded." : ""}
          </p>

          {submitted ? (
            <p className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm leading-5 text-green-800">
              Thanks — your report has been recorded. Submitting a report does
              not promise a particular enforcement outcome.
            </p>
          ) : null}

          <p className="mt-5 text-xs leading-5 text-slate-500">
            Submitting a report is neutral — it does not promise a particular
            enforcement outcome. No marketing consent is requested here.
          </p>
        </form>
      </div>
    </section>
  );
}
