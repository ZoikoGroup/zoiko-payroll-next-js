import React from "react";
import { Band, Eyebrow } from "./Primitives";

const contents: string[] = [
  "Parties, roles & definitions",
  "Annex I — processing details",
  "Instructions & confidentiality",
  "Annex II — technical & organizational measures",
  "Subprocessors & authorization",
  "International transfers",
  "Assistance, DPIA & incidents",
  "Audits",
  "Government requests",
  "Return & deletion",
  "AI / model processing",
  "Custom terms & execution",
];

export default function WhatsInsideSection() {
  return (
    <Band id="whats-inside" tinted labelledBy="whats-inside-heading">
      <div className="mx-auto max-w-[660px] text-center">
        <div className="flex justify-center">
          <Eyebrow centered>What&apos;s inside</Eyebrow>
        </div>

        <h2
          id="whats-inside-heading"
          className="mt-6 text-2xl font-extrabold leading-tight text-sky-950 sm:text-3xl"
        >
          Generated from the approved clause and annex order.
        </h2>
      </div>

      <ul className="mx-auto mt-10 grid max-w-[680px] grid-cols-1 gap-4 sm:grid-cols-2">
        {contents.map((item) => (
          <li
            key={item}
            className="flex items-center rounded-[10px] border border-slate-200 bg-white px-4 py-3.5 text-xs font-semibold leading-5 text-sky-950"
          >
            {item}
          </li>
        ))}
      </ul>
    </Band>
  );
}
