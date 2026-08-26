import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const intents = [
  {
    intent: "Review product security controls",
    destination: "Product Security and Trust",
    href: "/product/security",
  },
  {
    intent: "Configure a security setting",
    destination: "Product Documentation",
    href: "/resources/documentation",
  },
  {
    intent: "Find assurance / security evidence",
    destination: "Trust Center",
    href: "/company/trust-center",
  },
  {
    intent: "Understand privacy or data lifecycle",
    destination: "Privacy / Data Protection",
    href: "#privacy-ownership",
  },
  {
    intent: "Check residency / processing location",
    destination: "Data Residency",
    href: "#evidence-resources",
  },
  {
    intent: "Review subprocessors",
    destination: "Subprocessors",
    href: "#evidence-resources",
  },
  {
    intent: "Check continuity / resilience",
    destination: "Business Continuity",
    href: "#operational-resilience",
  },
  {
    intent: "Check a current incident",
    destination: "System Status",
    href: "/resources/system-status",
  },
  {
    intent: "Prepare a procurement review",
    destination: "Security review workflow",
    href: "#procurement-readiness",
  },
  {
    intent: "Report a vulnerability",
    destination: "Responsible Disclosure",
    href: "/product/security",
  },
];

export default function ReviewIntentRouterSection() {
  return (
    <section id="review-intent-router" className="scroll-mt-24 bg-slate-100 py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Review intent router</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Choose what you need to review.
          </h2>
          <p className="mt-4 max-w-[640px] text-base leading-6 text-slate-600">
            Exact explicit intent wins — nothing here is routed by inferred industry, company size
            or purchasing likelihood.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 lg:grid-cols-2"
        >
          {intents.map((item) => (
            <Link
              key={item.intent}
              href={item.href}
              className="group flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 bg-white px-5 py-4 transition-colors duration-200 hover:bg-slate-50"
            >
              <span className="text-sm font-bold leading-5 text-brand-dark">{item.intent}</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold leading-4 text-sky-700">
                {item.destination}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
