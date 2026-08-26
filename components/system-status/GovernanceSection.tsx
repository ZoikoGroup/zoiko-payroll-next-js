import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const owns = ["Current public service health", "Historical service health", "Active incidents", "Maintenance", "Status history"];

const doesNotOwn = [
  { label: "Current product procedures", link: "Product Documentation", href: "/resources/documentation" },
  { label: "Support resolution", link: "Help Center", href: "/resources/help-center" },
  { label: "Shipped product changes", link: "Release Notes", href: "/resources/release-notes" },
  { label: "Security/privacy assurance", link: "Security & Trust", href: "/product/security" },
  { label: "Customer-specific case status", link: "Support", href: "/company/contact" },
];

const deliveryTraits = [
  "Independent delivery path",
  "Static-first / edge-cached",
  "Minimal dependencies",
  "Emergency publication path",
  "No-JS fallback",
];

const pipeline = [
  "Source verify",
  "Classify",
  "Technical verify",
  "Specialist review",
  "Docs/support ready",
  "Accessibility QA",
  "Publish",
  "Audit",
];

export default function GovernanceSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-2xl bg-brand-dark p-6 sm:p-10">
          <Eyebrow tone="light">Resilience, governance + final authority</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            A premium operational control surface — credible even under outage conditions.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-light">
                System status owns
              </h3>
              <ul className="mt-3 divide-y divide-white/10">
                {owns.map((item) => (
                  <li key={item} className="py-2.5 text-sm text-slate-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-light">
                It does not own
              </h3>
              <ul className="mt-3 divide-y divide-white/10">
                {doesNotOwn.map((item) => (
                  <li key={item.label} className="py-2.5 text-sm text-slate-200">
                    {item.label} →{" "}
                    <Link href={item.href} className="font-medium text-brand-light hover:underline">
                      {item.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {deliveryTraits.map((trait) => (
              <span key={trait} className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-slate-200">
                {trait}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {pipeline.map((step, index) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-slate-200">
                  {step}
                </span>
                {index < pipeline.length - 1 && <span className="text-slate-500">→</span>}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-white/10 bg-white/5 px-5 py-4 text-sm leading-relaxed text-slate-200">
            <span className="font-semibold text-white">Final law:</span> Current truth first. Every
            component scoped. Every incident timestamped. Maintenance separate. History durable.
            Unknown shown honestly. Support always reachable.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
