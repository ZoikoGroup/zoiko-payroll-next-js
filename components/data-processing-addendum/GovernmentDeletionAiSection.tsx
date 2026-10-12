import React from "react";
import { Band, Eyebrow } from "./Primitives";

interface NumberedItem {
  title: string;
  description: string;
}

const items: NumberedItem[] = [
  {
    title: "Government & legal requests",
    description:
      "Only approved commitments are shown — no blanket notification or challenge promise.",
  },
  {
    title: "Return & deletion",
    description:
      "Exact obligations apply at termination. Product Documentation owns current export mechanics; backup deletion-lag language follows approved terms only.",
  },
  {
    title: "AI / model processing",
    description:
      "Conditional, source-backed treatment. The provider registry controls provider classification; Privacy, Product and AI Governance sources control the exact statement on model training and data use.",
  },
  {
    title: "Integrations",
    description:
      "A customer-enabled third party is not automatically a Zoiko subprocessor.",
  },
];

export default function GovernmentDeletionAiSection() {
  return (
    <Band id="requests-deletion-ai" labelledBy="requests-deletion-ai-heading">
      <div className="mx-auto max-w-[660px] text-center">
        <div className="flex justify-center">
          <Eyebrow centered>Government requests, deletion &amp; AI</Eyebrow>
        </div>

        <h2
          id="requests-deletion-ai-heading"
          className="mt-6 text-2xl font-extrabold leading-tight text-sky-950 sm:text-3xl"
        >
          Approved commitments only — never a blanket promise.
        </h2>
      </div>

      <ol className="mx-auto mt-12 max-w-[760px] divide-y divide-slate-200">
        {items.map((item, index) => (
          <li key={item.title} className="flex gap-5 py-6">
            <span
              aria-hidden="true"
              className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-sky-950 text-sm font-extrabold text-white"
            >
              {index + 1}
            </span>

            <div>
              <h3 className="text-base font-bold leading-6 text-sky-950">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-5 text-gray-600">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Band>
  );
}
