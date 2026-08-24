import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CardIcon, GlobeIcon, RecordsIcon } from "../ui/icons";

const groups = [
  {
    label: "Learn",
    icon: RecordsIcon,
    links: [
      {
        title: "Resource Center",
        description: "Master discovery hub — this page.",
        href: "/resources",
        current: true,
      },
      {
        title: "Payroll Guides",
        description: "General payroll operations education.",
        href: "/resources/payroll-guides",
      },
      {
        title: "Jurisdiction Guides",
        description: "Market-specific educational context.",
        href: "/global-payroll/country-guides",
      },
      {
        title: "Payroll Glossary",
        description: "Canonical payroll definitions and synonyms.",
        href: "/resources/glossary",
      },
      {
        title: "Frequently Asked Questions",
        description: "Direct answers with authority links.",
        href: "/resources/faq",
      },
    ],
  },
  {
    label: "Product and support",
    icon: CardIcon,
    links: [
      {
        title: "Product Documentation",
        description: "Current product behavior and configuration.",
        href: "/resources/documentation",
      },
      {
        title: "Help Center",
        description: "Troubleshooting and support.",
        href: "/resources/help-center",
      },
      {
        title: "Release Notes",
        description: "Verified shipped changes.",
        href: "/resources/release-notes",
      },
      {
        title: "System Status",
        description: "Current and historical service health.",
        href: "/resources/system-status",
      },
      {
        title: "Product Videos",
        description: "Task-based product demonstrations.",
        href: "/resources/product-videos",
      },
    ],
  },
  {
    label: "Browse by topic",
    icon: GlobeIcon,
    links: [
      {
        title: "Global Payroll",
        description: "Coverage, operating models and local requirements.",
        href: "/global-payroll",
      },
      {
        title: "Implementation",
        description: "Migration, testing and launch guidance.",
        href: "/implementation",
      },
      {
        title: "Security and Trust",
        description: "Controls, evidence and procurement resources.",
        href: "/security",
      },
      {
        title: "Reporting",
        description: "Payroll insights, exports and reconciliation.",
        href: "/reporting",
      },
    ],
  },
];

export default function ResourceFamiliesSection() {
  return (
    <section className="border-t border-slate-200 bg-[#DFEAF3] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Browse by resource family</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
            Three groups, mirroring the Resources menu — optimized for scanning.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {groups.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.label}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <p className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-sky-100">
                      <Icon className="h-3 w-3 text-sky-600" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-extrabold uppercase leading-4 tracking-wide text-sky-600">
                      {group.label}
                    </span>
                  </p>

                  <ul className="mt-4">
                    {group.links.map((link, index) => (
                      <li
                        key={link.title}
                        className={index < group.links.length - 1 ? "border-b border-slate-200" : ""}
                      >
                        <Link
                          href={link.href}
                          aria-current={link.current ? "page" : undefined}
                          className="group flex items-start justify-between gap-3 py-4"
                        >
                          <span>
                            <span
                              className={`block text-sm font-bold leading-5 ${
                                link.current ? "text-sky-600" : "text-sky-950"
                              }`}
                            >
                              {link.title}
                            </span>
                            <span className="mt-1 block text-xs leading-4 text-gray-400">
                              {link.description}
                            </span>
                          </span>
                          <span
                            className="shrink-0 text-sm font-bold text-sky-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
