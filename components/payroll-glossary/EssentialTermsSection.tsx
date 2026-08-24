"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import ScopeChip from "./ScopeChip";
import type { TermScope } from "./terms";

type Card = {
  name: string;
  scope: TermScope;
  definition: string;
  notTheSameAs: string;
};

const groups: { label: string; cards: Card[] }[] = [
  {
    label: "Essential payroll terms",
    cards: [
      {
        name: "Pay period",
        scope: "General",
        definition:
          "The span of time for which earnings and other payroll inputs are attributed for a payroll calculation.",
        notTheSameAs: "pay date or processing window.",
      },
      {
        name: "Gross pay",
        scope: "Jurisdiction-sensitive",
        definition:
          "Payroll earnings amount before applicable deductions and other reductions represented in the calculation.",
        notTheSameAs: "net pay or taxable amount.",
      },
      {
        name: "Payroll cutoff",
        scope: "Product",
        definition:
          "An operational deadline after which new inputs, changes or approvals may require an exception.",
        notTheSameAs: "a statutory deadline, unless separately scoped.",
      },
    ],
  },
  {
    label: "New to payroll",
    cards: [
      {
        name: "Net pay",
        scope: "Jurisdiction-sensitive",
        definition:
          "The payroll amount remaining once applicable deductions and other reductions have been applied.",
        notTheSameAs: "gross pay or the amount an employer spends in total.",
      },
      {
        name: "Earnings",
        scope: "General",
        definition:
          "Amounts attributed to an employee for a pay period before reductions are applied.",
        notTheSameAs: "payment — earnings are attributed, payment is issued.",
      },
      {
        name: "Deduction",
        scope: "Jurisdiction-sensitive",
        definition:
          "An amount or configured rule that reduces a payroll amount under the applicable setup.",
        notTheSameAs: "a correction or a reimbursement.",
      },
    ],
  },
  {
    label: "Payroll cycle terms",
    cards: [
      {
        name: "Pay date",
        scope: "General",
        definition:
          "The date on which payment is issued, which may fall outside the period it relates to.",
        notTheSameAs: "the pay period the payment is attributed to.",
      },
      {
        name: "Processing window",
        scope: "Product",
        definition:
          "The operational span during which a payroll run is prepared, reviewed and approved.",
        notTheSameAs: "the pay period or the cutoff moment itself.",
      },
      {
        name: "Payroll frequency",
        scope: "General",
        definition: "How often a payroll cycle repeats for a defined population.",
        notTheSameAs: "a guarantee of when payment lands in an account.",
      },
    ],
  },
  {
    label: "Commonly confused",
    cards: [
      {
        name: "Adjustment",
        scope: "General",
        definition:
          "A controlled payroll change that alters a value, input or outcome for an effective context.",
        notTheSameAs: "a correction of an error already recorded.",
      },
      {
        name: "Reconciliation",
        scope: "General",
        definition:
          "Comparing payroll outputs against expected values or source records to explain differences.",
        notTheSameAs: "approval — reconciliation explains, approval authorizes.",
      },
      {
        name: "Variance",
        scope: "General",
        definition: "An explained difference between two payroll results, periods or expected values.",
        notTheSameAs: "an error — a variance may be entirely expected.",
      },
    ],
  },
];

export default function EssentialTermsSection() {
  const [active, setActive] = useState(groups[0].label);
  const cards = groups.find((group) => group.label === active)?.cards ?? [];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Essential &amp; commonly confused terms</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-2xl font-bold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
            Accelerate the terms people ask about most.
          </h2>
        </Reveal>

        <Reveal delay={60} className="mt-8">
          <div className="flex flex-wrap gap-3">
            {groups.map((group) => {
              const isActive = group.label === active;
              return (
                <button
                  key={group.label}
                  type="button"
                  onClick={() => setActive(group.label)}
                  aria-pressed={isActive}
                  className={`rounded-[20px] px-5 py-2.5 text-xs font-bold leading-5 transition-colors duration-200 ${
                    isActive
                      ? "bg-sky-950 text-white"
                      : "border border-slate-200 bg-white text-gray-600 hover:bg-slate-50"
                  }`}
                >
                  {group.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-6">
          <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {cards.map((card) => (
              <li
                key={card.name}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0px_10px_24px_-18px_rgba(15,45,70,0.20)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-base font-bold leading-6 text-sky-950">{card.name}</p>
                  <ScopeChip scope={card.scope} />
                </div>

                <p className="mt-3 text-xs leading-5 text-gray-600">{card.definition}</p>

                <p className="mt-4 rounded-lg bg-blue-50 px-2.5 py-2.5 text-xs leading-4 text-blue-950">
                  <span className="font-bold text-sky-900">Not the same as:</span>{" "}
                  {card.notTheSameAs}
                </p>

                <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                  <span className="inline-flex items-center rounded-[20px] bg-green-100 px-2.5 py-1 text-xs font-bold leading-4 text-emerald-600">
                    Current
                  </span>
                  <Link
                    href="#term-anatomy"
                    className="text-sm font-bold leading-5 text-sky-700 hover:text-sky-800"
                  >
                    Read →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
