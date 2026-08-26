import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

type Resource = {
  title: string;
  status: string;
  statusTone: string;
  description: string;
  meta: string[];
  linkLabel: string;
  href: string;
};

const resources: Resource[] = [
  {
    title: "Trust Center & security practices",
    status: "Current",
    statusTone: "bg-green-100 text-emerald-600",
    description:
      "Plain-language purpose, scope and authority for how payroll security practices are documented.",
    meta: ["Reviewed Jul 2026", "Public"],
    linkLabel: "Open Trust Center",
    href: "/company/trust-center",
  },
  {
    title: "Assurance / compliance evidence",
    status: "Access-gated",
    statusTone: "border border-slate-200 bg-slate-100 text-slate-500",
    description:
      "Artifact type, scope, issuer and current version — shown only where a live record and access class exist.",
    meta: ["Security-review required"],
    linkLabel: "View access class",
    href: "#procurement-readiness",
  },
  {
    title: "Privacy & data protection notice",
    status: "Current",
    statusTone: "bg-green-100 text-emerald-600",
    description: "Current notice title, scope and effective date, approved by Privacy and Legal.",
    meta: ["Effective Jun 2026", "Public"],
    linkLabel: "Open notice",
    href: "#privacy-ownership",
  },
  {
    title: "Data residency / processing",
    status: "Review due",
    statusTone: "bg-orange-100 text-yellow-700",
    description:
      "Region/service scope and statement type — never derived from payroll jurisdiction availability.",
    meta: ["Lower ranking while under review"],
    linkLabel: "Open statement",
    href: "#privacy-ownership",
  },
  {
    title: "Business continuity / resilience",
    status: "Current",
    statusTone: "bg-green-100 text-emerald-600",
    description:
      "Documented preparedness and recovery evidence — distinct from live service health.",
    meta: ["Reviewed Aug 2026", "Public"],
    linkLabel: "Open resource",
    href: "#operational-resilience",
  },
  {
    title: "Subprocessors registry",
    status: "Current",
    statusTone: "bg-green-100 text-emerald-600",
    description: "Current provider/role/location fields sourced from the live registry only.",
    meta: ["Effective Aug 2026", "Public"],
    linkLabel: "Open registry",
    href: "#privacy-ownership",
  },
];

export default function EvidenceResourcesSection() {
  return (
    <section id="evidence-resources" className="scroll-mt-24 bg-slate-100 py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Evidence &amp; assurance resources</Eyebrow>
          <h2 className="mt-3.5 max-w-[560px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Current, scoped, and dated — or not shown at all.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {resources.map((resource, index) => (
            <Reveal
              key={resource.title}
              delay={index * 60}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <p className="text-sm font-bold leading-6 text-brand-dark">{resource.title}</p>
                <span
                  className={`shrink-0 rounded-[20px] px-2.5 py-1 text-[10px] font-bold leading-4 ${resource.statusTone}`}
                >
                  {resource.status}
                </span>
              </div>

              <p className="mt-2.5 text-xs leading-5 text-slate-600">{resource.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {resource.meta.map((item) => (
                  <span
                    key={item}
                    className="rounded-[20px] border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs leading-4 text-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href={resource.href}
                className="group mt-auto inline-flex items-center gap-1 pt-5 text-sm font-bold leading-5 text-sky-700 transition-colors duration-200 hover:text-brand-dark"
              >
                {resource.linkLabel}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
