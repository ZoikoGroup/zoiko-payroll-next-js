import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const questions = [
  {
    question: "Is Zoiko Payroll currently available here?",
    action: "Check current availability",
    href: "/global-payroll/jurisdiction-coverage",
  },
  {
    question: "What requirement is currently approved?",
    action: "Review local payroll requirements",
    href: "/global-payroll/payroll-requirements",
  },
  {
    question: "What evidence/review state is current?",
    action: "Open compliance workflow",
    href: "/global-payroll/compliance-workflows",
  },
  {
    question: "Which entity/payroll group can act?",
    action: "Open Multi-Entity Payroll",
    href: "/global-payroll/multi-entity-payroll",
  },
  {
    question: "How do we launch or migrate?",
    action: "Open Implementation and Migration",
    href: "/global-payroll/implementation-migration",
  },
  {
    question: "What current outcome/report is available?",
    action: "Open Reporting",
    href: "/product/reporting",
  },
  {
    question: "How do I configure or use the product?",
    action: "Open Product Documentation",
    href: "/resources/documentation",
  },
  { question: "I need help with an issue.", action: "Open Help Center", href: "/resources/help-center" },
];

const states = [
  {
    label: "Available",
    tone: "bg-emerald-100 text-emerald-700",
    rule: "Exact approved label + effective date/scope shown — never generalized beyond the record.",
  },
  {
    label: "Limited / Partner-supported",
    tone: "bg-sky-100 text-sky-800",
    rule: "Limitation or partner model stated before any sales CTA.",
  },
  {
    label: "Planned",
    tone: "bg-violet-100 text-violet-700",
    rule: "Shown only if the authoritative public record permits — no implied launch date unless sourced.",
  },
  {
    label: "Unavailable",
    tone: "bg-rose-100 text-rose-700",
    rule: "Current status and alternatives shown — never a “contact sales to unlock” implication.",
  },
  {
    label: "Unknown / stale / conflicting",
    tone: "bg-amber-100 text-amber-800",
    rule: "No positive state shown. “Current status needs review,” routed to the Directory.",
  },
];

export default function AuthorityRailSection() {
  return (
    <section className="border-t border-slate-200 bg-[#EEF2FF] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Current authority rail</Eyebrow>
          <h2 className="mt-3.5 max-w-[700px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            The panel that keeps education and current truth visually separate.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {questions.map((item, index) => (
            <Reveal
              key={item.question}
              delay={index * 50}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-sm font-bold leading-5 text-brand-dark">{item.question}</p>
              <Link
                href={item.href}
                className="group mt-auto inline-flex items-center gap-1 pt-4 text-xs font-bold leading-5 text-brand transition-colors duration-200 hover:text-brand-dark"
              >
                {item.action}
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

        <Reveal delay={200} className="mt-10">
          <p className="text-lg font-extrabold text-brand-dark">Availability-state safety</p>

          <div className="mt-5 flex flex-col gap-3">
            {states.map((state) => (
              <div
                key={state.label}
                className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:gap-4"
              >
                <span
                  className={`w-fit shrink-0 rounded-[20px] px-3 py-1 text-xs font-bold leading-4 ${state.tone}`}
                >
                  {state.label}
                </span>
                <span className="text-sm leading-5 text-slate-600">{state.rule}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
