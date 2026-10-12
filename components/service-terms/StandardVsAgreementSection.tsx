import React from "react";
import SectionShell from "./SectionShell";

interface ComparisonCard {
  eyebrow: string;
  body: string;
}

const cards: ComparisonCard[] = [
  {
    eyebrow: "Public standard terms (this page)",
    body: "The general terms published for public review. Useful for evaluation, procurement review and understanding Zoiko Payroll's standard approach before a contract exists.",
  },
  {
    eyebrow: "Your executed agreement",
    body: "The order form, master agreement or signed contract your organization holds. Where it addresses a topic, it controls for your account — even where it differs from this public page.",
  },
];

export default function StandardVsAgreementSection() {
  return (
    <SectionShell
      id="standard-vs-agreement"
      title="Public standard terms vs. your organization's agreement"
      intro="These two documents answer different questions. Neither one is inferred from the other."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.eyebrow}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h3 className="text-xs font-bold uppercase leading-4 tracking-wide text-sky-700">
              {card.eyebrow}
            </h3>
            <p className="mt-3 text-xs leading-5 text-gray-600">{card.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
