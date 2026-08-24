import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const collections = [
  {
    title: "Payroll Operations",
    description: "Cycle governance, calendars, roles.",
    count: "14 resources",
    image: "/images/resource-center/payroll-operations.png",
    alt: "Payroll colleagues working through an operating calendar",
    href: "/payroll-processing",
  },
  {
    title: "Approvals & Controls",
    description: "Decision rights, sign-off evidence.",
    count: "9 resources",
    image: "/images/resource-center/approvals-controls.png",
    alt: "Two people confirming a signed approval document",
    href: "/payroll-approvals",
  },
  {
    title: "Implementation & Migration",
    description: "Readiness, testing, cutover.",
    count: "11 resources",
    image: "/images/resource-center/implementation-migration.png",
    alt: "An implementation lead walking a team through a rollout plan",
    href: "/implementation",
  },
  {
    title: "Global Payroll",
    description: "Coverage, local requirements.",
    count: "17 resources",
    image: "/images/resource-center/global-payroll.png",
    alt: "A cross-border payroll team reviewing coverage together",
    href: "/global-payroll",
  },
  {
    title: "Security & Trust",
    description: "Controls, evidence, procurement.",
    count: "8 resources",
    image: "/images/resource-center/security-trust.png",
    alt: "An operations floor working with access-controlled systems",
    href: "/security",
  },
  {
    title: "Reporting & Reconciliation",
    description: "Exports, variance, audit evidence.",
    count: "10 resources",
    image: "/images/resource-center/reporting-reconciliation.png",
    alt: "A team mapping reporting steps on a planning board",
    href: "/reporting",
  },
  {
    title: "Records & Evidence",
    description: "Ownership, retention, retrieval.",
    count: "6 resources",
    image: "/images/resource-center/records-evidence.png",
    alt: "Colleagues reviewing payroll records in a meeting room",
    href: "/employee-payroll-records",
  },
  {
    title: "Growing & Scaling",
    description: "Multi-entity, multi-market questions.",
    count: "7 resources",
    image: "/images/resource-center/growing-scaling.png",
    alt: "An international team discussing multi-market expansion",
    href: "/growing-businesses",
  },
];

export default function TopicCollectionsSection() {
  return (
    <section className="border-t border-slate-200 bg-[#E9F0F8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Popular topic collections</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-2xl font-extrabold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
            Stable groupings across every resource family — never an empty archive.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection) => (
              <li key={collection.title} className="h-full">
                <Link
                  href={collection.href}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-200"
                >
                  <img
                    src={collection.image}
                    alt={collection.alt}
                    className="h-24 w-full object-cover"
                  />
                  <span className="flex flex-1 flex-col p-4">
                    <span className="text-sm font-bold leading-5 text-sky-950">
                      {collection.title}
                    </span>
                    <span className="mt-2 block text-xs leading-4 text-gray-600">
                      {collection.description}
                    </span>
                    <span className="mt-auto pt-4">
                      <span className="inline-flex items-center rounded-full bg-sky-100 px-2.5 py-1 text-xs font-bold leading-4 text-sky-800">
                        {collection.count}
                      </span>
                    </span>
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
