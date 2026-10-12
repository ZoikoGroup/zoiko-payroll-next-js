"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ManagedPayrollFacet {
  question: string;
  answer: string;
}

const facets: ManagedPayrollFacet[] = [
  {
    question: "What changes?",
    answer:
      "A defined payroll operations team performs agreed processing activities rather than the customer performing all operational steps.",
  },
  {
    question: "What stays controlled?",
    answer:
      "Customer approvals, contractual scope, employer accountability, access controls, payroll records and audit evidence remain explicit.",
  },
  {
    question: "What can vary?",
    answer:
      "Data intake, validation, calculations, exception handling, filing, payment support, employee inquiry handling and year-end scope.",
  },
  {
    question: "What is not implied?",
    answer:
      "Universal legal responsibility, universal filings, funds custody, legal/tax advice, or availability in every jurisdiction.",
  },
];

export default function ManagedPayrollSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Copy + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-4">
            <div className="text-xs font-bold tracking-wider text-[#0A78C3] uppercase">
              Optional / contracted
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#082F49] leading-tight">
              Managed Payroll
            </h2>
            <p className="text-sm sm:text-base text-[#4E6172] leading-6">
              Add operational payroll support for defined activities while
              retaining transparent approvals, responsibilities and records.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-[#3B82F6] to-[#0C4A6E] hover:from-[#2B7BB5] hover:to-[#0A3A57] text-white font-bold text-sm px-6 py-3.5 rounded-lg shadow-[0px_8px_18px_-6px_rgba(11,76,120,0.45)] transition-all active:scale-[0.99]"
              >
                Discuss managed payroll
              </Link>
            </div>
          </div>

          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-[0px_20px_44px_-22px_rgba(15,45,70,0.25)]">
            <Image
              src="/images/plans-and-service-models/managed-payroll.png"
              alt="Payroll reports and a calculator representing managed payroll operations"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Facets */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {facets.map((facet) => (
              <div key={facet.question} className="space-y-2">
                <dt className="text-sm font-bold text-[#082F49]">
                  {facet.question}
                </dt>
                <dd className="text-sm text-[#4E6172] leading-5">
                  {facet.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
