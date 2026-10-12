"use client";

import React from "react";

interface FlowStep {
  stepNumber: number;
  title: string;
  description: string;
  side: "left" | "right";
  isHighlight?: boolean;
}

const steps: FlowStep[] = [
  {
    stepNumber: 1,
    title: "Finalized",
    description: "Payroll approved and closed for the period.",
    side: "left",
  },
  {
    stepNumber: 2,
    title: "Journal generated",
    description: "Debit/credit lines built from mapping rules.",
    side: "right",
  },
  {
    stepNumber: 3,
    title: "Validated",
    description: "Balance and control checks pass before export.",
    side: "left",
  },
  {
    stepNumber: 4,
    title: "Exported / delivered",
    description: "Sent to the target system via approved method.",
    side: "right",
  },
  {
    stepNumber: 5,
    title: "Accepted",
    description: "Target system confirms receipt of the journal.",
    side: "left",
  },
  {
    stepNumber: 6,
    title: "Posted",
    description: "Only shown where target-system evidence supports it.",
    side: "right",
  },
  {
    stepNumber: 7,
    title: "Reconciled",
    description: "Expected vs. actual confirmed — the true completion state.",
    side: "left",
    isHighlight: true,
  },
];

interface DataModelRow {
  journalId: string;
  entity: string;
  periodPayDate: string;
  currency: string;
  debitCredit: string;
  account: string;
  dimensions: string;
}

const tableData: DataModelRow[] = [
  {
    journalId: "JE-2026-0812",
    entity: "EU Holdings BV",
    periodPayDate: "Aug 2026 / Aug 25",
    currency: "EUR",
    debitCredit: "€184,220.00",
    account: "6100 · Payroll Expense",
    dimensions: "Dept: Finance",
  },
  {
    journalId: "JE-2026-0810",
    entity: "UK Ltd",
    periodPayDate: "Aug 2026 / Aug 25",
    currency: "GBP",
    debitCredit: "£96,410.00",
    account: "6100 · Payroll Expense",
    dimensions: "Cost Center: 220",
  },
];

export default function HowPayrollAccountingFlowsSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-12 px-4 sm:px-6 sm:py-20 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>HOW PAYROLL ACCOUNTING FLOWS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold tracking-tight leading-tight max-w-3xl mx-auto">
            Seven distinct states — never collapsed into "Synced."
          </h2>
        </div>

        {/* Vertical Timeline Flow */}
        <div className="relative py-4">
          {/* Vertical Line (Left aligned on mobile, centered on desktop) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

          <div className="space-y-6 relative">
            {steps.map((step) => {
              const isLeft = step.side === "left";
              return (
                <div
                  key={step.stepNumber}
                  className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-12 items-start md:items-center relative pl-12 md:pl-0"
                >
                  {/* Left Column Content / Desktop side logic */}
                  <div
                    className={`w-full flex ${
                      isLeft
                        ? "md:justify-end"
                        : "md:justify-start md:col-start-2 order-2 md:order-none"
                    }`}
                  >
                    <div
                      className={`w-full max-w-sm rounded-2xl p-4 sm:p-5 shadow-xs transition-all border ${
                        step.isHighlight
                          ? "bg-gradient-to-r from-[#0B4573] to-[#0A8FD0] text-white border-[#0A8FD0]"
                          : "bg-white text-[#0F172A] border-slate-200/80"
                      }`}
                    >
                      <h3 className="text-sm font-bold">{step.title}</h3>
                      <p
                        className={`text-xs mt-1 leading-relaxed ${
                          step.isHighlight ? "text-white/90" : "text-slate-500"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Badge (Pinned to left line on mobile, centered on desktop) */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 md:top-auto flex items-center justify-center z-10">
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                        step.isHighlight
                          ? "bg-[#091D2C] border-[#091D2C] text-white"
                          : "bg-white border-slate-700 text-[#0F172A]"
                      }`}
                    >
                      {step.stepNumber}
                    </div>
                  </div>

                  {/* Empty Spacer Column for layout symmetry on Desktop */}
                  <div
                    className={
                      isLeft
                        ? "hidden md:block"
                        : "hidden md:block order-1"
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section: Journal Data Model */}
        <div className="space-y-6 pt-6">
          <h3 className="text-lg sm:text-xl font-bold text-center text-[#0F172A]">
            Journal data model
          </h3>

          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-[#EBF2F7]/70 text-[#5B646B] font-bold text-[10px] uppercase tracking-wider border-b border-slate-200/60">
                    <th className="py-3.5 px-6">JOURNAL ID</th>
                    <th className="py-3.5 px-6">ENTITY</th>
                    <th className="py-3.5 px-6">PERIOD / PAY DATE</th>
                    <th className="py-3.5 px-6">CURRENCY</th>
                    <th className="py-3.5 px-6">DEBIT / CREDIT</th>
                    <th className="py-3.5 px-6">ACCOUNT</th>
                    <th className="py-3.5 px-6">DIMENSIONS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[#0F172A]">
                  {tableData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-4 px-6 font-medium text-slate-600">
                        {row.journalId}
                      </td>
                      <td className="py-4 px-6 font-medium">{row.entity}</td>
                      <td className="py-4 px-6 text-slate-600">
                        {row.periodPayDate}
                      </td>
                      <td className="py-4 px-6 text-slate-600 font-mono">
                        {row.currency}
                      </td>
                      <td className="py-4 px-6 font-medium text-slate-700 font-mono">
                        {row.debitCredit}
                      </td>
                      <td className="py-4 px-6 text-slate-700 font-medium">
                        {row.account}
                      </td>
                      <td className="py-4 px-6 text-slate-600">
                        {row.dimensions}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card List View */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {tableData.map((row, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <span className="text-xs font-bold text-slate-500">
                    {row.journalId}
                  </span>
                  <span className="text-xs font-semibold text-[#0A8FD0] bg-[#EBF2F7] px-2.5 py-1 rounded-full">
                    {row.entity}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase">
                      Period / Pay Date
                    </p>
                    <p className="text-slate-700 font-medium mt-0.5">
                      {row.periodPayDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase">
                      Debit / Credit
                    </p>
                    <p className="text-slate-700 font-mono font-medium mt-0.5">
                      {row.debitCredit} ({row.currency})
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase">
                      Account
                    </p>
                    <p className="text-slate-700 font-medium mt-0.5">
                      {row.account}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase">
                      Dimensions
                    </p>
                    <p className="text-slate-700 font-medium mt-0.5">
                      {row.dimensions}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}