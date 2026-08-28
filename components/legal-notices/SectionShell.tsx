import React from "react";

interface SectionShellProps {
  id?: string;
  title: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  /** Removes the bottom hairline — used for the last section on the page. */
  last?: boolean;
}

/**
 * Shared frame for every Legal Notices section: centred 916px content column,
 * section heading, optional intro copy and a hairline divider.
 */
export default function SectionShell({
  id,
  title,
  intro,
  children,
  last = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={`w-full scroll-mt-24 bg-white ${last ? "" : "border-b border-slate-200"}`}
    >
      <div className="mx-auto w-full max-w-[964px] px-4 py-11 sm:px-6">
        <h2
          id={id ? `${id}-heading` : undefined}
          className="text-xl font-bold leading-7 text-sky-950"
        >
          {title}
        </h2>

        {intro ? (
          <p className="mt-3 text-sm leading-6 text-gray-600">{intro}</p>
        ) : null}

        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </section>
  );
}
