import React from "react";
import { Band, Callout, Eyebrow } from "./Primitives";

type StateTone = "neutral" | "info" | "pending" | "muted";

interface StateChip {
  label: string;
  tone: StateTone;
}

const toneStyles: Record<StateTone, string> = {
  neutral: "bg-gray-200 text-gray-600",
  info: "bg-indigo-50 text-sky-950",
  pending: "bg-orange-100 text-yellow-700",
  muted: "bg-gray-200 text-neutral-500",
};

const contractStates: StateChip[] = [
  { label: "Public current standard", tone: "neutral" },
  { label: "Executed standard", tone: "info" },
  { label: "Custom / amended", tone: "info" },
  { label: "Execution requested", tone: "pending" },
  { label: "Unauthorized", tone: "muted" },
];

const executionStates: StateChip[] = [
  { label: "Not available", tone: "muted" },
  { label: "Ready for request", tone: "info" },
  { label: "Ready to sign", tone: "pending" },
  { label: "Pending", tone: "pending" },
  { label: "Executed", tone: "neutral" },
  { label: "Failed", tone: "muted" },
];

function StateGroup({ title, chips }: { title: string; chips: StateChip[] }) {
  return (
    <div className="text-center">
      <h3 className="text-base font-extrabold leading-6 text-sky-950">
        {title}
      </h3>
      <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
        {chips.map((chip) => (
          <li
            key={chip.label}
            className={`inline-flex h-8 items-center rounded-full px-3.5 text-xs font-bold leading-5 ${toneStyles[chip.tone]}`}
          >
            {chip.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExecutionStatesSection() {
  return (
    <Band id="execution-states" tinted labelledBy="execution-states-heading">
      <div className="mx-auto max-w-[720px] text-center">
        <div className="flex justify-center">
          <Eyebrow centered>Execution &amp; contract states</Eyebrow>
        </div>

        <h2
          id="execution-states-heading"
          className="mt-6 text-2xl font-extrabold leading-tight text-sky-950 sm:text-3xl"
        >
          Custom terms route through legal review — not this page.
        </h2>

        <p className="mt-5 text-base leading-7 text-gray-600">
          A controlled legal/procurement request follows public review, using
          only business contact, organization, account/deal context and issue
          category. This page never promises that clauses are negotiable or
          gives a turnaround time without an approved operational SLA.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        <StateGroup title="Contract state" chips={contractStates} />
        <StateGroup title="Execution state" chips={executionStates} />
      </div>

      <div className="mx-auto mt-12 max-w-[760px]">
        <Callout>
          <span className="font-bold">Package integrity.</span> Before
          execution, the exact DPA version, annexes, transfer modules and
          amendments are displayed together. Signer authority requires explicit
          confirmation. An unknown outcome is recovered by execution ID — never
          by blindly re-signing.
        </Callout>
      </div>
    </Band>
  );
}
