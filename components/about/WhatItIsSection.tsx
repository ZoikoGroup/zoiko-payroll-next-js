import Reveal from "../ui/Reveal";
import ArrowLink from "../ui/ArrowLink";
import Eyebrow from "../home/Eyebrow";

const operatingAreas = [
  {
    area: "Payroll operations",
    scope: "Periods, inputs, earnings, deductions, adjustments, calculations, validation, review, approval and completion.",
    href: "/product/payroll-processing",
  },
  {
    area: "Employee experience",
    scope: "Applicable payslips, payroll history, documents, notifications and controlled self-service.",
    href: "/product/employee-self-service",
  },
  {
    area: "Reporting and governance",
    scope: "Summaries, jurisdiction/entity views, approval status, history, exports, reconciliation and audit activity.",
    href: "/product/reporting",
  },
  {
    area: "Connectivity",
    scope: "Zoiko One, approved business systems, APIs, webhooks and shared platform services.",
    href: "/product/integrations",
  },
];

export default function WhatItIsSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>What Zoiko Payroll is</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
              A global payroll-management platform built for controlled execution.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Zoiko Payroll is a secure payroll-management platform that helps organizations prepare,
              calculate, validate, review, approve, process, record, and report employee payroll
              across supported jurisdictions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Authorized payroll, finance, HR, operations, and leadership teams use one environment to
              coordinate payroll activity, understand pay-cycle status, resolve exceptions, record
              decisions, and maintain payroll history.
            </p>
          </Reveal>

          <Reveal delay={100} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="ml-2 font-mono text-[11px] text-slate-400">product-scope · overview</span>
            </div>
            <div className="p-5">
              <div className="flex gap-1.5">
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                  Prepare
                </span>
                <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-medium text-brand">
                  Approve
                </span>
                <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-700">
                  Report
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-2 w-full rounded-full bg-slate-100" />
                <div className="h-2 w-2/3 rounded-full bg-slate-100" />
              </div>
              <div className="mt-4 flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-brand-dark text-[10px] font-semibold text-white"
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="hidden grid-cols-[1fr_2fr_auto] gap-4 border-b border-slate-100 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400 sm:grid">
            <span>Operating area</span>
            <span>Scope</span>
            <span>Deep page</span>
          </div>
          {operatingAreas.map((row) => (
            <div
              key={row.area}
              className="grid grid-cols-1 gap-2 border-b border-slate-100 px-6 py-4 last:border-b-0 sm:grid-cols-[1fr_2fr_auto] sm:items-center sm:gap-4"
            >
              <span className="text-sm font-semibold text-brand-dark">{row.area}</span>
              <span className="text-sm text-slate-600">{row.scope}</span>
              <a href={row.href} className="text-sm text-brand hover:underline">
                {row.href}
              </a>
            </div>
          ))}
        </Reveal>

        <Reveal delay={180} className="mt-6 grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-2">
          <div className="bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">Zoiko Payroll is</p>
            <p className="mt-2 text-sm font-semibold text-brand-dark">A commercially independent SaaS platform</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              A multi-jurisdictional payroll operating environment; a governed system for payroll
              administration and oversight; also available through Zoiko One.
            </p>
          </div>
          <div className="border-t border-slate-200 bg-[#EAF1F6] p-6 sm:border-l sm:border-t-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Not presented as</p>
            <p className="mt-2 text-sm font-semibold text-brand-dark">A universal provider for every country</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              A bank; a substitute for legal or tax advice; a generic HR suite; an inferior extract of
              Zoiko One; or a managed service unless that service is explicitly contracted.
            </p>
          </div>
        </Reveal>

        <Reveal delay={220} className="mt-8">
          <ArrowLink href="/product">Explore all product capabilities</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
