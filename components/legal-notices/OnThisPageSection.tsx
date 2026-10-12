import React from "react";
import Link from "next/link";

interface PageAnchor {
  label: string;
  href: string;
}

const anchors: PageAnchor[] = [
  { label: "Legal entity", href: "#legal-entity" },
  { label: "Copyright", href: "#copyright" },
  { label: "Trademarks", href: "#trademarks" },
  { label: "Third-party attribution", href: "#third-party-attribution" },
  { label: "Open source", href: "#open-source" },
  { label: "Product naming", href: "#product-naming" },
  { label: "Professional advice boundary", href: "#advice-boundary" },
  { label: "Jurisdiction notices", href: "#jurisdiction-notices" },
  { label: "External links", href: "#external-links" },
  { label: "Formal notice delivery", href: "#formal-notice" },
  { label: "Report an issue", href: "#report-issue" },
];

export default function OnThisPageSection() {
  return (
    <nav
      aria-labelledby="on-this-page-heading"
      className="w-full border-b border-slate-200 bg-white"
    >
      <div className="mx-auto w-full max-w-[964px] px-4 py-11 sm:px-6">
        <h2
          id="on-this-page-heading"
          className="text-xl font-bold leading-7 text-sky-950"
        >
          On this page
        </h2>

        <ul className="mt-5 flex flex-wrap gap-2.5">
          {anchors.map((anchor) => (
            <li key={anchor.href}>
              <Link
                href={anchor.href}
                className="inline-flex h-9 items-center rounded-full border border-slate-200 bg-white px-4 text-xs font-bold leading-5 text-sky-950 transition-colors hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                {anchor.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
