import Link from "next/link";
import Reveal from "../ui/Reveal";
import ArrowLink from "../ui/ArrowLink";
import Eyebrow from "../home/Eyebrow";

const results = [
  {
    question: "Why is my payroll run stuck in “Validate”?",
    badge: { label: "Help article", tone: "bg-brand/10 text-brand" },
    meta: "Applies to: Payroll Processing · Reviewed Jul 2026",
    description: "A run stays in Validate until every blocking issue is resolved and owned.",
    linkLabel: "Open answer",
    href: "/resources/help-center/validate",
  },
  {
    question: "Is there a current incident affecting payroll runs?",
    badge: { label: "System Status", tone: "bg-amber-50 text-amber-700" },
    meta: "Live/historical health · Authoritative source",
    description: "Routes directly to System Status — never inferred from search behavior alone.",
    linkLabel: "Check System Status",
    href: "/resources/system-status",
  },
];

const relatedTopics = [
  "Access authentication",
  "User provisioning",
  "Managing applications",
  "Integration setup guide",
  "Administration portal",
  "Directory integration",
];

export default function SearchGovernanceSection() {
  return (
    <section className="bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Search results + content governance</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Authority badge, applicability and reviewed date — every time.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-4">
          {results.map((result, index) => (
            <Reveal key={result.question} delay={index * 60} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold text-brand-dark">{result.question}</h3>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${result.badge.tone}`}>
                  {result.badge.label}
                </span>
              </div>
              <p className="mt-1.5 text-xs text-slate-400">{result.meta}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{result.description}</p>
              <ArrowLink href={result.href} className="mt-3">
                {result.linkLabel}
              </ArrowLink>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-6 rounded-xl bg-slate-100 px-5 py-4 text-center text-sm text-slate-500">
          No verified answer for &ldquo;payroll blockchain sync.&rdquo; Try: browse by product area,
          Product Documentation, or verified support.
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <Reveal delay={180} className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {relatedTopics.map((topic) => (
              <Link
                key={topic}
                href="/resources/documentation"
                className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 transition-colors duration-200 hover:border-brand/30 hover:text-brand-dark"
              >
                {topic}
              </Link>
            ))}
          </Reveal>

          <Reveal delay={220} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-semibold text-brand-dark">Product Documentation</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              For product behavior and procedure questions, Documentation is the authoritative source;
              Help Center routes there rather than duplicating it.
            </p>
            <ArrowLink href="/resources/documentation" className="mt-3">
              Open Documentation
            </ArrowLink>
          </Reveal>
        </div>

        <Reveal
          delay={260}
          className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-brand-dark p-8 sm:flex-row sm:items-center"
        >
          <div>
            <Eyebrow tone="light">Evaluating Zoiko Payroll for your organization?</Eyebrow>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
              See how Zoiko Payroll supports controlled payroll operations, implementation and
              governance. Public help and documentation remain available without a sales conversation.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Link
              href="/book-a-demo"
              className="bg-brand-gradient rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40"
            >
              Book a demo
            </Link>
            <Link
              href="/product"
              className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40"
            >
              Explore Product
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
