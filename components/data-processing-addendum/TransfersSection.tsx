import React from "react";
import { Band, Callout, Eyebrow } from "./Primitives";

interface TransferRoute {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const routes: TransferRoute[] = [
  {
    title: "EU/EEA transfers",
    description:
      "Approved SCC module, reference and selections only where applicable.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-5">
        <rect
          x="2.75"
          y="2.75"
          width="14.5"
          height="14.5"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8.25 3.67h3.5v6.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "UK transfers",
    description:
      "Approved UK Addendum or IDTA only where adopted and applicable.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-5">
        <rect
          x="2.75"
          y="2.75"
          width="14.5"
          height="14.5"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M2.75 11h14.5M10 2.75v14.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Other transfers",
    description:
      "Approved schedules and mechanisms only — never selected by IP or locale alone.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-5">
        <path
          d="M2.75 3.67h14.5v12.66H2.75z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M2.75 9.17h14.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function TransfersSection() {
  return (
    <Band id="transfers" labelledBy="transfers-heading">
      <div className="mx-auto max-w-[680px] text-center">
        <div className="flex justify-center">
          <Eyebrow centered>Subprocessors &amp; international transfers</Eyebrow>
        </div>

        <h2
          id="transfers-heading"
          className="mt-6 text-2xl font-extrabold leading-tight text-sky-950 sm:text-3xl"
        >
          Authorization framework — never inferred from a logo.
        </h2>

        <p className="mt-5 text-base leading-7 text-gray-600">
          Subprocessor authorization, notice and objection rights follow the
          exact framework in the DPA; current facts come from the canonical
          provider registry. A provider or integration&apos;s presence never
          automatically establishes subprocessor status, and headquarters
          location alone is never sufficient to establish where processing
          occurs.
        </p>
      </div>

      <ul className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
        {routes.map((route) => (
          <li key={route.title} className="flex flex-col items-center text-center">
            <span className="flex size-14 items-center justify-center rounded-3xl bg-sky-100 text-sky-600">
              {route.icon}
            </span>
            <h3 className="mt-5 text-base font-extrabold leading-7 text-sky-950">
              {route.title}
            </h3>
            <p className="mt-2 max-w-[280px] text-sm leading-6 text-gray-600">
              {route.description}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-14">
        <Callout>
          <span className="font-bold">No residency overclaim.</span> Storage
          location, support/administrative access, backups, failover, telemetry,
          provider processing and transfer mechanisms are distinct facts. A
          transfer mechanism is never presented as a universal data-residency or
          border-free-processing guarantee.
        </Callout>
      </div>
    </Band>
  );
}
