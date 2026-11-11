"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";

const jurisdictions = ["United States", "United Kingdom", "Germany", "Singapore", "Brazil", "India", "Other"];
const ranges = ["1–49 employees", "50–249 employees", "250–999 employees", "1,000–4,999 employees", "5,000+ employees"];
const objectives = [
  "Centralise payroll control",
  "Expand to more jurisdictions",
  "Strengthen approvals and audit",
  "Improve reporting and visibility",
  "Replace an existing payroll system",
  "Something else",
];

const label = "text-sm font-semibold text-[#0c3556]";
const field =
  "mt-2 w-full rounded-md border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20";

function Req() {
  return (
    <span aria-hidden className="text-red-600">
      {" "}
      *
    </span>
  );
}

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  // No backend endpoint exists yet (the /book-a-demo form is also static).
  // Native validation runs, then we show a confirmation. Wire this to the
  // CRM / API route once one is available.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-12 text-center" role="status">
        <CircleCheck className="h-12 w-12 text-teal-600" />
        <h3 className="mt-5 text-2xl font-extrabold text-[#0c3556]">Thank you — request received.</h3>
        <p className="mt-3 max-w-sm text-[15px] leading-6 text-slate-600">
          A member of the Zoiko Payroll team will be in touch to arrange your tailored demonstration.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-7 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={label}>
            First Name
            <Req />
          </span>
          <input name="firstName" required autoComplete="given-name" className={field} />
        </label>
        <label className="block">
          <span className={label}>
            Last Name
            <Req />
          </span>
          <input name="lastName" required autoComplete="family-name" className={field} />
        </label>
      </div>

      <label className="block">
        <span className={label}>
          Business Email
          <Req />
        </span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="name@company.com"
          className={field}
        />
      </label>

      <label className="block">
        <span className={label}>
          Organisation
          <Req />
        </span>
        <input name="organisation" required autoComplete="organization" className={field} />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={label}>
            Primary Operating Jurisdiction
            <Req />
          </span>
          <select name="jurisdiction" required defaultValue="" className={field}>
            <option value="" disabled>
              Select jurisdiction
            </option>
            {jurisdictions.map((j) => (
              <option key={j}>{j}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={label}>
            Workforce Range
            <Req />
          </span>
          <select name="workforce" required defaultValue="" className={field}>
            <option value="" disabled>
              Select range
            </option>
            {ranges.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className={label}>
          Primary Payroll Objective
          <Req />
        </span>
        <select name="objective" required defaultValue="" className={field}>
          <option value="" disabled>
            Select objective
          </option>
          {objectives.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
        <input name="consent" type="checkbox" required className="mt-1 h-5 w-5 shrink-0 accent-sky-700" />
        <span>
          I agree to be contacted about Zoiko Payroll and have read the{" "}
          <Link href="/legal/privacy-notice" className="text-sky-700 underline underline-offset-2">
            Privacy Notice
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-gradient-to-b from-[#1d6fa8] to-[#0c4a7a] px-6 py-4 text-base font-bold text-white shadow-[0_8px_20px_-6px_rgba(12,74,122,0.55)] transition hover:brightness-110"
      >
        Request my demonstration <ArrowRight className="h-4 w-4" />
      </button>
      <p className="text-center text-[13px] text-slate-500">We will use your details only to respond to this enquiry.</p>
    </form>
  );
}
