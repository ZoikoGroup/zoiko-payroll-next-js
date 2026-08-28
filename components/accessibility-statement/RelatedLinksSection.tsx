import React from "react";
import Link from "next/link";

interface RelatedLink {
  label: string;
  href: string;
}

const relatedLinks: RelatedLink[] = [
  { label: "Legal Center", href: "/legal/legal-center" },
  { label: "Privacy Notice", href: "/legal/privacy-notice" },
  { label: "Trust and Security", href: "/resources/security-trust" },
  { label: "Help Center", href: "/resources/help-center" },
  { label: "System Status", href: "/resources/system-status" },
  { label: "Website Terms of Use", href: "/legal/website-terms" },
];

export default function RelatedLinksSection() {
  return (
    <section
      aria-labelledby="related-links-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto w-full max-w-[904px] px-4 py-12 sm:px-6">
        <h2
          id="related-links-heading"
          className="text-xl font-bold leading-7 text-sky-950"
        >
          Related legal, trust &amp; support links
        </h2>

        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="flex h-12 items-center rounded-lg border border-slate-200 bg-slate-100 px-4 text-xs font-bold leading-5 text-sky-950 transition-colors hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                {link.label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
