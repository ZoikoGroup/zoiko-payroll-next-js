import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const checklist = [
  {
    title: "Service and scope",
    description: "Product, deployment/region, jurisdictions, entities and intended use the review concerns.",
  },
  {
    title: "Identity and access",
    description: "Current control overview for authentication, roles, privileged access and session controls.",
  },
  {
    title: "Decision rights and audit",
    description: "How approval separation and audit evidence are modeled, from current authority.",
  },
  {
    title: "Privacy and data handling",
    description: "Current notice, data-lifecycle, residency/processing and subprocessor resources.",
  },
  {
    title: "Assurance evidence",
    description: "Only artifact types and scopes actually registered — no implied certification.",
  },
  {
    title: "Operational resilience",
    description: "Current continuity resources plus System Status for live and historical health.",
  },
  {
    title: "Implementation/integrations",
    description: "Security responsibilities, data-flow questions and customer responsibilities.",
  },
  {
    title: "Open questions",
    description: "Identify gaps and route to a governed security-review workflow.",
  },
];

export default function ProcurementSection() {
  return (
    <section id="procurement-readiness" className="scroll-mt-24 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Procurement &amp; security review readiness</Eyebrow>
          <h2 className="mt-3.5 max-w-[660px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Organize due diligence before you request a review.
          </h2>
          <p className="mt-4 max-w-[600px] text-base leading-6 text-slate-600">
            A preparation guide — not a promise that every listed artifact exists or is publicly
            distributable.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {checklist.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 50}
              className="h-full rounded-xl border border-slate-200 bg-white p-5"
            >
              <p className="flex items-start gap-2 text-sm font-bold leading-5 text-brand-dark">
                <span aria-hidden="true" className="text-sky-700">
                  ✓
                </span>
                {item.title}
              </p>
              <p className="mt-2 pl-5 text-xs leading-5 text-slate-600">{item.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-lg bg-brand-gradient px-6 py-3.5 text-center text-sm font-bold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40"
          >
            Start a security review
          </Link>
          <Link
            href="/book-a-demo"
            className="rounded-lg border border-slate-200 px-6 py-3.5 text-center text-sm font-bold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30"
          >
            Talk to sales instead
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
