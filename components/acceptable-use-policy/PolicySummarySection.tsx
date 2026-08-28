import React from "react";
import Link from "next/link";

interface SummaryFact {
  label: string;
  value: string;
}

const facts: SummaryFact[] = [
  { label: "Effective date", value: "Jul 1, 2026" },
  { label: "Public version", value: "v1.3" },
  { label: "Last reviewed", value: "Aug 4, 2026" },
];

export default function PolicySummarySection() {
  return (
    <section className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-[964px] px-4 py-11 sm:px-6">
        <p className="max-w-[740px] text-base leading-6 text-gray-600">
          Review the current approved rules for acceptable, prohibited,
          restricted or conditional use of Zoiko Payroll services within this
          policy&apos;s stated scope.
        </p>

        <dl className="mt-7 grid grid-cols-1 gap-5 rounded-xl border border-slate-200 bg-slate-100 p-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
              Status
            </dt>
            <dd className="mt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-100 px-3 py-1 text-xs font-bold leading-5 text-green-700">
                <span aria-hidden="true" className="text-[9px]">
                  ●
                </span>
                Current
              </span>
            </dd>
          </div>

          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                {fact.label}
              </dt>
              <dd className="mt-2 text-sm font-bold leading-5 text-sky-950">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:from-[#2680bd] hover:to-[#093d61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
          >
            Contact Support
          </Link>
          <Link
            href="#reporting"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-sky-950 transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
          >
            Report suspected misuse
          </Link>
        </div>

        <div className="mt-7 rounded-[10px] border border-sky-100 bg-blue-50 px-5 py-4">
          <p className="text-xs font-bold uppercase leading-4 tracking-wide text-sky-700">
            No implied surveillance
          </p>
          <p className="mt-2.5 text-sm leading-5 text-sky-950">
            The ability to enforce this Acceptable Use Policy does not mean
            Zoiko Payroll continuously monitors payroll records, employee
            communications, payment instructions, content, customer activity or
            integrations. Any claim about detection, logging, review or
            investigation practices requires separate approved public authority
            — see Trust and Security.
          </p>
        </div>
      </div>
    </section>
  );
}
