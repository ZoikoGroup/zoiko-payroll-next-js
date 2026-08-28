import React from "react";
import { Band, Eyebrow } from "./Primitives";

const versionStates: { label: string; className: string }[] = [
  { label: "Current", className: "bg-gray-200 text-gray-600" },
  { label: "Scheduled", className: "bg-indigo-50 text-sky-950" },
  { label: "Superseded", className: "bg-orange-100 text-yellow-700" },
  { label: "Withdrawn", className: "bg-gray-200 text-neutral-500" },
  { label: "Archived", className: "bg-gray-200 text-neutral-500" },
  { label: "Corrected", className: "bg-orange-100 text-yellow-700" },
];

export default function VersionStatesSection() {
  return (
    <Band id="version-states" labelledBy="version-states-heading">
      <div className="mx-auto max-w-[700px] text-center">
        <div className="flex justify-center">
          <Eyebrow centered>Version &amp; archive states</Eyebrow>
        </div>

        <h2
          id="version-states-heading"
          className="mt-6 text-2xl font-extrabold leading-tight text-sky-950 sm:text-3xl"
        >
          An archived version can never look current.
        </h2>

        <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
          {versionStates.map((state) => (
            <li
              key={state.label}
              className={`inline-flex h-8 items-center rounded-full px-3.5 text-xs font-bold leading-5 ${state.className}`}
            >
              {state.label}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm leading-5 text-gray-400">
          New public DPA versions do not automatically bind every existing
          customer. Executed records preserve their exact package and version
          even after the public version updates. Archive pages always show their
          effective period and route back to the current version.
        </p>
      </div>
    </Band>
  );
}
