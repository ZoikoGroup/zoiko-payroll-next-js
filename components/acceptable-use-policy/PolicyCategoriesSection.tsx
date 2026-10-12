import React from "react";
import Link from "next/link";
import SectionShell from "./SectionShell";

interface Category {
  label: string;
  href: string;
}

const categories: Category[] = [
  { label: "Prohibited use", href: "#prohibited-use" },
  { label: "Restricted / permissioned use", href: "#restricted-use" },
  { label: "Security & access integrity", href: "#security-integrity" },
  { label: "Payroll-sensitive misuse", href: "#payroll-misuse" },
  { label: "Data & privacy conduct", href: "#data-privacy" },
  { label: "Automation & integrations", href: "#automation" },
  { label: "Service integrity", href: "#service-integrity" },
  { label: "Content & legal use", href: "#content-legal" },
];

export default function PolicyCategoriesSection() {
  return (
    <SectionShell
      id="policy-categories"
      title="Policy categories"
      intro="Jump to a category below. Only categories with an approved rule are shown."
    >
      <ul className="flex flex-wrap gap-2.5">
        {categories.map((category) => (
          <li key={category.href}>
            <Link
              href={category.href}
              className="inline-flex h-9 items-center rounded-full border border-slate-200 bg-white px-4 text-xs font-bold leading-5 text-sky-950 transition-colors hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
            >
              {category.label}
            </Link>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
