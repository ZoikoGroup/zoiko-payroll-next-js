import React from "react";
import Link from "next/link";
import { termsSections } from "./termsData";

export default function TableOfContentsSection() {
  return (
    <nav
      aria-labelledby="toc-heading"
      className="w-full border-b border-slate-200 bg-white"
    >
      <div className="mx-auto w-full max-w-[964px] px-4 py-11 sm:px-6">
        <h2 id="toc-heading" className="text-xl font-bold leading-7 text-sky-950">
          Table of contents
        </h2>

        <ul className="mt-6 flex flex-wrap gap-2.5">
          {termsSections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className="inline-flex h-9 items-center rounded-full border border-slate-200 bg-white px-4 text-xs font-bold leading-5 text-sky-950 transition-colors hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                {section.tocLabel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
