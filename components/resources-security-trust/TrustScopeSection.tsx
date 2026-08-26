import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const scopes = [
  {
    label: "Product control",
    description:
      "What the product is verified to do: authenticated access, scoped permissions, decision separation, audit-relevant events.",
    authority: "Authority: Product Security and Trust",
  },
  {
    label: "Evidence",
    description:
      "What supports a security, privacy, resilience or assurance statement for a defined scope.",
    authority: "Authority: current Trust / Assurance records",
  },
  {
    label: "Current status",
    description:
      "What is happening to the service now and historically — not a static trust page acting as an uptime monitor.",
    authority: "Authority: System Status",
  },
  {
    label: "Contractual commitment",
    description:
      "What a customer is entitled to under an approved plan, order form, DPA, security addendum or SLA.",
    authority: "Authority: Commercial / Legal contract source",
  },
];

export default function TrustScopeSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Trust scope strip</Eyebrow>
          <h2 className="mt-3.5 max-w-[760px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Four different kinds of truth — never one badge.
          </h2>
          <p className="mt-4 max-w-[640px] text-base leading-6 text-slate-600">
            Each card names its authority and links to the current source, rather than collapsing
            into a single &ldquo;secure / compliant&rdquo; claim.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {scopes.map((scope, index) => (
            <Reveal
              key={scope.label}
              delay={index * 70}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-xs font-bold uppercase leading-4 tracking-wide text-sky-700">
                {scope.label}
              </p>
              <p className="mt-3 text-xs leading-5 text-slate-600">{scope.description}</p>
              <p className="mt-auto border-t border-slate-200 pt-3 text-xs leading-4 text-slate-500">
                {scope.authority}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
