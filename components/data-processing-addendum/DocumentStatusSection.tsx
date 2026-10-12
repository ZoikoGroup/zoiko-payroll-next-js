import React from "react";
import { Callout, Eyebrow } from "./Primitives";

interface StatusFact {
  label: string;
  value: string;
  /** The draft status is called out in amber, as in the design. */
  pending?: boolean;
}

const facts: StatusFact[] = [
  { label: "Current status", value: "Prepared for approval", pending: true },
  { label: "Version", value: "Draft v1.0" },
  { label: "Effective date", value: "Not yet in effect" },
  { label: "Last reviewed", value: "Aug 22, 2026" },
];

export default function DocumentStatusSection() {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto w-full max-w-[1140px] px-4 pb-16 sm:px-8">
        <dl className="mx-auto grid max-w-[900px] grid-cols-1 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="border-b border-slate-200 px-5 py-4 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <dt className="text-[10px] font-bold uppercase leading-4 tracking-wide text-gray-400">
                {fact.label}
              </dt>
              <dd
                className={`mt-1.5 text-sm font-bold leading-5 ${
                  fact.pending ? "text-yellow-700" : "text-sky-950"
                }`}
              >
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mx-auto mt-16 max-w-[640px] text-center">
          <div className="flex justify-center">
            <Eyebrow centered>Direct answer</Eyebrow>
          </div>

          <h2 className="mt-6 text-2xl font-extrabold leading-tight text-sky-950 sm:text-3xl">
            What is this document?
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600">
            The Data Processing Addendum is the approved contractual framework
            governing Zoiko Payroll&apos;s processing of customer personal data
            within its stated scope. Public review is not execution — an
            addendum takes effect for your organization only through the
            approved executed package.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[680px]">
          <Callout centered>
            This is a design template prepared for Legal Center approval. Clause
            language, annex content and examples below are illustrative
            structure only — production content is sourced from the approved
            DPA, provider registry and transfer-schedule records.
          </Callout>
        </div>
      </div>
    </section>
  );
}
