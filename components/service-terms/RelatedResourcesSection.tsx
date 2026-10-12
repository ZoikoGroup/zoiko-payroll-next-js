import React from "react";
import Link from "next/link";

interface RelatedResource {
  title: string;
  description: string;
  href?: string;
}

const resources: RelatedResource[] = [
  {
    title: "Legal Center",
    description: "Current legal document index",
    href: "/legal/legal-center",
  },
  {
    title: "Data Processing Addendum",
    description: "Contractual data-processing obligations",
    href: "/legal/dpa",
  },
  {
    title: "Acceptable Use Policy",
    description: "Approved service use rules",
    href: "/legal/acceptable-use-policy",
  },
  {
    title: "Trust and Security",
    description: "Security controls and evidence",
    href: "/resources/security-trust",
  },
  {
    title: "Pricing",
    description: "Current published pricing",
  },
  {
    title: "Help Center",
    description: "Product and account support",
    href: "/resources/help-center",
  },
  {
    title: "System Status",
    description: "Current service status",
    href: "/resources/system-status",
  },
  {
    title: "Contact",
    description: "Sales, billing and legal routes",
    href: "/contact",
  },
];

export default function RelatedResourcesSection() {
  return (
    <section
      aria-labelledby="service-terms-related-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto w-full max-w-[964px] px-4 py-11 sm:px-6">
        <h2
          id="service-terms-related-heading"
          className="text-xl font-bold leading-7 text-sky-950"
        >
          Related legal, trust, product &amp; support resources
        </h2>

        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <li key={resource.title}>
              {resource.href ? (
                <Link
                  href={resource.href}
                  className="flex h-full flex-col justify-center rounded-lg border border-slate-200 bg-slate-100 px-4 py-3.5 transition-colors hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                >
                  <span className="text-xs font-bold leading-5 text-sky-950">
                    {resource.title}
                  </span>
                  <span className="mt-1 text-xs leading-4 text-slate-500">
                    {resource.description}
                  </span>
                </Link>
              ) : (
                <div
                  title="Page not yet published"
                  className="flex h-full flex-col justify-center rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5"
                >
                  <span className="text-xs font-bold leading-5 text-slate-400">
                    {resource.title}
                  </span>
                  <span className="mt-1 text-xs leading-4 text-slate-400">
                    {resource.description}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
