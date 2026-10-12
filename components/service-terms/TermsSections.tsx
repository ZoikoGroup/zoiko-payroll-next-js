import React from "react";
import Link from "next/link";
import SectionShell from "./SectionShell";
import { termsSections, type ClauseRoute } from "./termsData";

/**
 * A clause's routing line. Documents that are not yet published render as
 * plain text rather than a dead link.
 */
function RouteLine({ route }: { route: ClauseRoute }) {
  if (!route.href) {
    return (
      <p
        title="Document not yet published"
        className="mt-2.5 text-xs font-bold leading-5 text-slate-400"
      >
        {route.label}
      </p>
    );
  }

  return (
    <p className="mt-2.5">
      <Link
        href={route.href}
        className="rounded-sm text-xs font-bold leading-5 text-sky-700 transition-colors hover:text-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
      >
        {route.label}
      </Link>
    </p>
  );
}

export default function TermsSections() {
  return (
    <>
      {termsSections.map((section) => (
        <SectionShell key={section.id} id={section.id} title={section.title}>
          <div className="rounded-xl border border-slate-200 p-6">
            <p className="text-xs font-bold uppercase leading-4 tracking-wide text-sky-700">
              {section.eyebrow}
            </p>

            <dl className="mt-4 divide-y divide-slate-200">
              {section.clauses.map((clause, index) => (
                <div
                  key={clause.title}
                  className={index === 0 ? "pb-5" : "py-5 last:pb-0"}
                >
                  <dt className="text-sm font-bold leading-5 text-sky-950">
                    {clause.title}
                  </dt>
                  <dd className="mt-2 text-xs leading-5 text-gray-600">
                    {clause.description}
                    {clause.route ? <RouteLine route={clause.route} /> : null}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </SectionShell>
      ))}
    </>
  );
}
