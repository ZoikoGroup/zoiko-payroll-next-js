import React from "react";
import Link from "next/link";

interface StatusFact {
  label: string;
  value: string;
}

const statusFacts: StatusFact[] = [
  { label: "Target standard", value: "WCAG 2.2 Level AA" },
  { label: "Scope of this status", value: "Zoiko Payroll web application" },
  { label: "Last assessment date", value: "Jun 12, 2026" },
];

export default function AccessibilityHero() {
  return (
    <section className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-[904px] px-4 py-12 sm:px-6 lg:py-14">
        <p className="text-xs font-bold uppercase leading-5 tracking-wide text-sky-700">
          Accessibility Statement
        </p>

        <h1 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-sky-950 sm:text-3xl">
          Accessibility Statement
        </h1>

        <p className="mt-4 max-w-[700px] text-base leading-6 text-gray-600">
          Zoiko Payroll is committed to providing a digital experience that is
          accessible to the widest possible audience, including people who use
          assistive technology. This statement explains what we target, our
          current verified status, known limitations, and how to reach us if you
          encounter a barrier.
        </p>

        {/* Status summary card */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-100 p-6 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-xs font-bold leading-5 text-yellow-800">
              <span aria-hidden="true">◐</span>
              Partially conformant with WCAG 2.2 Level AA
            </span>
            <span className="text-xs leading-5 text-slate-500">
              Statement last reviewed: Aug 4, 2026
            </span>
          </div>

          <dl className="mt-6 grid grid-cols-1 gap-5 border-t border-slate-200 pt-5 sm:grid-cols-3">
            {statusFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm font-bold leading-5 text-sky-950">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Link
          href="#feedback"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:from-[#2680bd] hover:to-[#093d61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
        >
          Report an accessibility barrier
        </Link>
      </div>
    </section>
  );
}
