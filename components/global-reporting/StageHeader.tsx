import type { ReactNode } from "react";

type StageHeaderProps = {
  /** e.g. "Stage 01 — Authority boundary" */
  stage: string;
  /** Blue mono label above the heading. */
  label: string;
  heading: ReactNode;
  children?: ReactNode;
};

/** The stage marker + label + heading + intro block that opens every stage on this page. */
export default function StageHeader({ stage, label, heading, children }: StageHeaderProps) {
  return (
    <div>
      <p className="flex items-center gap-2.5">
        <span
          className="size-2 shrink-0 rounded-sm bg-blue-600 ring-4 ring-blue-600/15"
          aria-hidden="true"
        />
        <span className="font-mono text-xs uppercase tracking-wide text-gray-400">{stage}</span>
      </p>

      <p className="mt-5 font-mono text-xs font-medium uppercase tracking-widest text-blue-600">
        {label}
      </p>

      <h2 className="mt-3.5 max-w-3xl font-display text-3xl font-bold leading-tight text-gray-900 sm:text-4xl sm:leading-10">
        {heading}
      </h2>

      {children ? (
        <div className="mt-3.5 max-w-3xl text-base leading-6 text-gray-500">{children}</div>
      ) : null}
    </div>
  );
}
