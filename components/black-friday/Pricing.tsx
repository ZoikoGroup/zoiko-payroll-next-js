import Link from "next/link";
import { Check, Clock, Tag } from "lucide-react";
import { Container } from "./Primitives";

type Plan = {
  name: string;
  blurb: string;
  was?: string;
  price?: string;
  featured?: boolean;
  cta: { label: string; href: string };
  includesLabel: string;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Core",
    blurb: "For single-entity payroll teams getting structured control in place.",
    was: "$6",
    price: "$4.50",
    cta: { label: "Book a payroll demo", href: "#book-demo" },
    includesLabel: "Includes",
    features: [
      "Payroll calculation & processing",
      "Reviews & approval controls",
      "Employee records & self-service",
      "Standard reporting & exports",
      "One supported jurisdiction",
    ],
  },
  {
    name: "Growth",
    blurb: "For multi-entity, multi-jurisdiction operations that need one operating model.",
    was: "$10",
    price: "$7.50",
    featured: true,
    cta: { label: "Book a payroll demo", href: "#book-demo" },
    includesLabel: "Everything in Core, plus",
    features: [
      "Multi-jurisdiction operating model",
      "Deductions, adjustments & corrections",
      "Cross-entity reporting & reconciliation",
      "Compliance workflow configuration",
      "Audit history & traceable decisions",
    ],
  },
  {
    name: "Enterprise",
    blurb: "For large, complex payroll operations and bureaus with bespoke needs.",
    cta: { label: "Talk to sales", href: "/contact" },
    includesLabel: "Everything in Growth, plus",
    features: [
      "SSO & advanced access controls",
      "Bureau & partner-supported workflows",
      "Dedicated support & onboarding",
      "Data controls & retention options",
      "Custom reporting & integrations",
    ],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const { featured } = plan;
  return (
    <article
      className={`relative flex flex-col rounded-2xl bg-white p-7 ${
        featured
          ? "border border-teal-600 shadow-[0_24px_48px_-24px_rgba(13,148,136,0.35)] lg:-my-2"
          : "border border-slate-200"
      }`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
          Most popular
        </span>
      )}
      <h3 className="text-xl font-extrabold text-slate-900">{plan.name}</h3>
      <p className="mt-2 min-h-[42px] text-sm leading-[21px] text-slate-500">{plan.blurb}</p>

      {plan.price ? (
        <>
          <span className="mt-5 flex items-center gap-1.5 rounded-sm bg-amber-300 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-slate-900">
            <Clock className="h-3 w-3" /> Proposed
          </span>
          <p className="mt-3 flex items-baseline gap-2">
            <s className="text-lg text-slate-400">{plan.was}</s>
            <span className="text-4xl font-black tracking-[-0.02em] text-slate-900">{plan.price}</span>
            <span className="text-sm text-slate-500">/ employee / mo</span>
          </p>
          <p className="mt-2 text-xs text-slate-500">First 12 months · standard pricing applies thereafter</p>
          <span className="mt-3 rounded-full bg-cyan-50 px-3 py-2 text-xs font-bold text-teal-700 ring-1 ring-cyan-100">
            Save 25% · first 12 months*
          </span>
        </>
      ) : (
        <>
          <p className="mt-9 text-4xl font-black tracking-[-0.02em] text-slate-900">Custom</p>
          <p className="mt-2 text-xs text-slate-500">Tailored to your workforce, entities and markets</p>
          <span className="mt-3 rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-[#0c3556]">
            Volume &amp; bureau pricing
          </span>
        </>
      )}

      <Link
        href={plan.cta.href}
        className={`mt-5 rounded-lg px-4 py-3 text-center text-[15px] font-semibold transition-colors ${
          featured
            ? "bg-blue-600 text-white hover:bg-blue-500"
            : "border border-slate-300 text-slate-900 hover:bg-slate-50"
        }`}
      >
        {plan.cta.label}
      </Link>

      <p className="mt-7 text-xs font-bold uppercase tracking-[0.1em] text-slate-500">{plan.includesLabel}</p>
      <ul className="mt-3 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" strokeWidth={2.25} />
            {f}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-[620px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-bold text-slate-900">
            <Tag className="h-3.5 w-3.5 text-teal-600" />
            Black Friday — 25% off eligible annual platform licensing*
          </span>
          <h2 className="mt-6 text-3xl font-extrabold leading-[1.2] tracking-[-0.03em] text-slate-900 sm:text-[40px] sm:leading-[48px]">
            Plans that scale with your payroll operations.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
            Annual platform licensing, priced per employee. Black Friday savings apply to the first 12 months for new
            accounts.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3 lg:gap-5">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[820px] text-center text-xs leading-5 text-slate-500">
          Prices are illustrative placeholders, shown per employee per month and billed annually. *The 25% Black Friday
          discount is <strong className="text-slate-700">proposed and pending Finance &amp; Product approval</strong>. It
          applies to eligible annual platform licensing for the first 12 months on new accounts; statutory charges,
          payroll processing pass-through and bureau services are excluded. Standard pricing applies after the first 12
          months. Jurisdiction availability varies — see{" "}
          <Link href="#jurisdictions" className="underline underline-offset-2 hover:text-slate-700">
            supported markets
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
