import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StateBadge from "./StateBadge";

const records = [
  {
    family: "Release Notes",
    state: "Current" as const,
    title: "v4.2 — Reporting export changes",
    description: "New reconciliation export fields and updated file format.",
    date: "Released Aug 2026",
    topic: "Reporting",
    image: "/images/resource-center/release-notes-v42.png",
    alt: "A printed report with a trend chart on a desk",
    href: "/resources/release-notes",
  },
  {
    family: "Product Documentation",
    state: "Current" as const,
    title: "MFA setup and enforcement",
    description: "Updated steps for enabling multi-factor authentication org-wide.",
    date: "Reviewed Jul 2026",
    topic: "Security",
    image: "/images/resource-center/mfa-setup.png",
    alt: "A person signing in to a laptop with multi-factor authentication",
    href: "/resources/documentation",
  },
  {
    family: "Jurisdiction Guide",
    state: "Review due" as const,
    title: "France — jurisdiction overview",
    description: "Educational context under scheduled review following a source update.",
    date: "Reviewed Feb 2026",
    topic: "Global Payroll",
    image: "/images/resource-center/france-jurisdiction.png",
    alt: "Two colleagues discussing local payroll requirements",
    href: "/global-payroll/country-guides",
  },
  {
    family: "Payroll Guide",
    state: "Current" as const,
    title: "Designing Payroll Review and Approval Controls",
    description: "Separation of duties and sign-off evidence, explained.",
    date: "Reviewed Jun 2026",
    topic: "Approvals",
    image: "/images/resource-center/approval-controls-guide.png",
    alt: "A payroll folder and measuring rule on a desk",
    href: "/product/payroll-approvals",
  },
  {
    family: "System Status",
    state: "Current" as const,
    title: "Incident history — August 2026",
    description: "Resolved incidents and maintenance windows for the past 30 days.",
    date: "Updated Aug 2026",
    topic: "Status",
    image: "/images/resource-center/incident-history.png",
    alt: "An operations view of monitored service dashboards",
    href: "/resources/system-status",
  },
  {
    family: "Product Videos",
    state: "Current" as const,
    title: "Walkthrough: Approvals workflow",
    description: "A short task-based demonstration of the approval chain in-product.",
    date: "Published Jul 2026",
    topic: "4 min",
    image: "/images/resource-center/approvals-walkthrough.png",
    alt: "A presenter demonstrating the approvals workflow to a team",
    href: "/resources/product-videos",
  },
];

export default function FreshnessSection() {
  return (
    <section className="border-t border-slate-200 bg-[#DFEAF3] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Recently reviewed / changed</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
            Freshness awareness — not a chronological content feed.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {records.map((record) => (
              <li key={record.title} className="h-full">
                <Link
                  href={record.href}
                  className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-200"
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="inline-flex items-center rounded-md bg-sky-100 px-2 py-1 text-xs font-extrabold uppercase leading-4 tracking-wide text-sky-800">
                      {record.family}
                    </span>
                    <StateBadge state={record.state} />
                  </span>

                  <img
                    src={record.image}
                    alt={record.alt}
                    className="mt-4 h-24 w-full rounded-lg object-cover"
                  />

                  <span className="mt-5 block text-sm font-bold leading-5 text-sky-950">
                    {record.title}
                  </span>
                  <span className="mt-2 block text-xs leading-4 text-gray-600">
                    {record.description}
                  </span>

                  <span className="mt-auto flex items-center justify-between gap-3 pt-5 text-xs leading-4 text-gray-400">
                    <span>{record.date}</span>
                    <span>{record.topic}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
