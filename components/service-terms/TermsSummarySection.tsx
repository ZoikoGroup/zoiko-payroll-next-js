import React from "react";

interface SummaryFact {
  label: string;
  value: string;
}

const facts: SummaryFact[] = [
  { label: "Version", value: "v4.2" },
  { label: "Effective date", value: "Jul 1, 2026" },
  { label: "Last reviewed", value: "Aug 4, 2026" },
];

export default function TermsSummarySection() {
  return (
    <section className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-[964px] px-4 py-11 sm:px-6">
        <p className="max-w-[720px] text-base leading-6 text-gray-600">
          These are the public standard terms for use of Zoiko Payroll services.
          They support review of current standard contractual conditions and
          controlled navigation to your organization&apos;s executed agreement,
          orders, amendments and related legal documents.
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

        <div className="mt-6 rounded-[10px] border border-orange-200 bg-orange-100 px-5 py-4">
          <p className="text-xs font-bold uppercase leading-4 tracking-wide text-yellow-900">
            Public standard terms — not proof of execution
          </p>
          <p className="mt-2.5 text-sm leading-5 text-yellow-900">
            Public availability of this page does not prove that any particular
            customer accepted these terms, that an account is bound by this
            exact version, or that these standard terms take precedence over a
            negotiated agreement. Where your organization has an executed
            agreement or order that addresses a topic differently, that executed
            agreement governs for your account.
          </p>
        </div>
      </div>
    </section>
  );
}
