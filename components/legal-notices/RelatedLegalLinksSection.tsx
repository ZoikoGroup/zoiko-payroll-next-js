import React from "react";
import Link from "next/link";

interface RelatedLink {
  title: string;
  description: string;
  href: string;
}

const relatedLinks: RelatedLink[] = [
  {
    title: "Legal Center",
    description: "Current legal document index",
    href: "/legal/legal-center",
  },
  {
    title: "Privacy Notice",
    description: "Public privacy disclosure & rights",
    href: "/legal/privacy-notice",
  },
  {
    title: "Zoiko Payroll Service Terms",
    description: "Contract incorporation, rights & remedies",
    href: "/legal/service-terms",
  },
  {
    title: "Data Processing Addendum",
    description: "Contractual data-processing obligations",
    href: "/legal/dpa",
  },
  {
    title: "Acceptable Use Policy",
    description: "Approved use rules",
    href: "/legal/acceptable-use-policy",
  },
  {
    title: "Accessibility Statement",
    description: "Standard, status & known limitations",
    href: "/legal/accessibility-statement",
  },
];

export default function RelatedLegalLinksSection() {
  return (
    <section aria-labelledby="related-legal-heading" className="w-full bg-white">
      <div className="mx-auto w-full max-w-[964px] px-4 py-11 sm:px-6">
        <h2
          id="related-legal-heading"
          className="text-xl font-bold leading-7 text-sky-950"
        >
          Related legal &amp; governance links
        </h2>

        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className="flex h-full flex-col justify-center rounded-lg border border-slate-200 bg-slate-100 px-4 py-3.5 transition-colors hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                <span className="text-xs font-bold leading-5 text-sky-950">
                  {link.title}
                </span>
                <span className="mt-1 text-xs leading-4 text-slate-500">
                  {link.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
