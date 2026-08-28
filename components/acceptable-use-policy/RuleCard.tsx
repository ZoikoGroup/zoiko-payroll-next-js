import React from "react";

export type RuleStatus = "Prohibited" | "Restricted" | "Conditional";

export interface Rule {
  /** Small uppercase rule label, e.g. "Unauthorized access & credential misuse". */
  label: string;
  status: RuleStatus;
  /** The rule itself, in one sentence. */
  statement: string;
  /** Illustrative examples; omitted where the rule stands alone. */
  examples?: string[];
  /** Routing or boundary line rendered in link blue below the rule. */
  note?: string;
  /** Grey disclaimer line closing the card. */
  footnote?: string;
}

const statusStyles: Record<RuleStatus, string> = {
  Prohibited: "bg-rose-100 text-red-800",
  Restricted: "bg-orange-100 text-yellow-800",
  Conditional: "bg-blue-50 text-sky-700",
};

export default function RuleCard({ rule }: { rule: Rule }) {
  return (
    <article className="rounded-xl border border-slate-200 p-6">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-xs font-bold uppercase leading-4 tracking-wide text-sky-700">
          {rule.label}
        </h3>
        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase leading-4 tracking-wide ${statusStyles[rule.status]}`}
        >
          {rule.status}
        </span>
      </div>

      <p className="mt-3.5 text-sm leading-5 text-gray-600">{rule.statement}</p>

      {rule.examples?.length ? (
        <ul className="mt-3.5 list-disc space-y-1.5 pl-5">
          {rule.examples.map((example) => (
            <li key={example} className="text-xs leading-5 text-gray-600">
              {example}
            </li>
          ))}
        </ul>
      ) : null}

      {rule.note ? (
        <p className="mt-3.5 text-xs font-bold leading-5 text-sky-700">
          {rule.note}
        </p>
      ) : null}

      {rule.footnote ? (
        <p className="mt-3.5 text-xs leading-5 text-slate-500">
          {rule.footnote}
        </p>
      ) : null}
    </article>
  );
}
