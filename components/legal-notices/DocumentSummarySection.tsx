import React from "react";

export default function DocumentSummarySection() {
  return (
    <section className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-[964px] px-4 py-11 sm:px-6">
        <p className="max-w-[740px] text-base leading-6 text-gray-600">
          This page identifies the legal entity behind Zoiko Payroll, ownership
          of our content and brand, third-party and open-source attribution, and
          how to reach us with a formal legal, trademark or intellectual-property
          question. Service Terms, the Privacy Notice, the Data Processing
          Addendum, the Acceptable Use Policy and other canonical documents
          remain controlling for their respective subjects — this page
          summarizes and links to them rather than restating their terms.
        </p>

        <dl className="mt-8 grid grid-cols-1 gap-5 rounded-xl border border-slate-200 bg-slate-100 p-5 sm:grid-cols-3">
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
          <div>
            <dt className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
              Last reviewed
            </dt>
            <dd className="mt-2 text-sm font-bold leading-5 text-sky-950">
              Aug 4, 2026
            </dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
              Publishing entity
            </dt>
            <dd className="mt-2 text-sm font-bold leading-5 text-sky-950">
              Zoiko Tech Inc.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
