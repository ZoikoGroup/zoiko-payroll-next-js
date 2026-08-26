import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { ArrowRightIcon } from "../ui/icons";

const resources = [
  {
    title: "Data Migration Checklist",
    description:
      "Source inventory, mapping, reconciliation and evidence steps for migration prep.",
    freshness: "Current",
    fresh: true,
    tags: ["Checklist", "Prepare / migrate", "Reviewed Jul 2026"],
    image: "/images/resources-implementation/guide-data-migration.png",
    href: "/resources/documentation",
  },
  {
    title: "Parallel Testing Playbook",
    description: "How to scope population, period, metrics and tolerance for a controlled comparison.",
    freshness: "Current",
    fresh: true,
    tags: ["Playbook", "Parallel test", "Reviewed Aug 2026"],
    image: "/images/resources-implementation/guide-parallel-testing.png",
    href: "/resources/documentation",
  },
  {
    title: "Plan a Controlled Launch",
    description:
      "Watch how blockers, evidence and decision rights come together before go-live.",
    freshness: "Review due",
    fresh: false,
    tags: ["Video", "Launch / cutover"],
    image: "/images/resources-implementation/guide-launch-video.png",
    href: "/resources/documentation",
  },
];

export default function ResourcesSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Guides, checklists &amp; product videos</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            Governed resources with visible freshness
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Reveal key={resource.title} delay={index * 80}>
              <Link
                href={resource.href}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors duration-200 hover:border-brand/40"
              >
                <img
                  src={resource.image}
                  alt=""
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />

                <div className="flex flex-1 flex-col px-4 pb-4 pt-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-bold leading-5 text-[#0A2E4B]">{resource.title}</p>
                    <span
                      className={`shrink-0 rounded-[20px] px-2 py-[3px] text-xs font-bold leading-4 ${
                        resource.fresh
                          ? "bg-[#E3EFE6] text-[#3F6B54]"
                          : "bg-[#F3E9CC] text-[#8C6D2F]"
                      }`}
                    >
                      {resource.freshness}
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs leading-5 text-gray-600">{resource.description}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {resource.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[20px] border border-slate-200 px-2.5 py-1 text-xs leading-4 text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={260} className="mt-6">
          <Link
            href="/resources"
            className="group inline-flex items-center gap-1.5 text-sm font-bold text-sky-700 transition-colors duration-200 hover:text-[#0A2E4B]"
          >
            Browse all implementation resources
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
