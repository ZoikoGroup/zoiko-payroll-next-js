import React from "react";
import Link from "next/link";

interface RelatedResource {
  title: string;
  description: string;
  href: string;
}

const resources: RelatedResource[] = [
  {
    title: "Zoiko Payroll Service Terms",
    description: "Contract rights, remedies and precedence",
    href: "/legal/service-terms",
  },
  {
    title: "Data Processing Addendum",
    description: "Contractual data-processing obligations",
    href: "/legal/dpa",
  },
  {
    title: "Privacy Notice",
    description: "Public privacy disclosure & rights",
    href: "/legal/privacy-notice",
  },
  {
    title: "Trust and Security",
    description: "Security posture and evidence",
    href: "/resources/security-trust",
  },
  {
    title: "Product Documentation",
    description: "API terms, rate limits and quotas",
    href: "/resources/documentation",
  },
  {
    title: "Help Center",
    description: "Account and product support",
    href: "/resources/help-center",
  },
  {
    title: "System Status",
    description: "Current service status",
    href: "/resources/system-status",
  },
  {
    title: "Legal Center",
    description: "Current legal document index",
    href: "/legal/legal-center",
  },
];

export default function RelatedResourcesSection() {
  return (
    <section
      aria-labelledby="aup-related-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto w-full max-w-[964px] px-4 py-11 sm:px-6">
        <h2
          id="aup-related-heading"
          className="text-xl font-bold leading-7 text-sky-950"
        >
          Related resources
        </h2>

        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <li key={resource.title}>
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
