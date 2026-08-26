import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const controls = [
  {
    title: "Identity & authenticated access",
    description:
      "Payroll access is tied to authenticated identities and approved authentication methods where supported.",
    href: "/product/security",
  },
  {
    title: "Roles, permissions & privileged access",
    description:
      "Scoped authorization and privileged-role governance as concepts; exact roles come from current product authority.",
    href: "/product/security",
  },
  {
    title: "Decision separation",
    description:
      "Security authorization does not equal payroll approval — preparation, review and approval may be separated by decision rights.",
    href: "/product/payroll-approvals",
  },
  {
    title: "Audit & attributable actions",
    description:
      "Material actions can preserve actor, object, action, time and result where supported. Exact event coverage is evidence-gated.",
    href: "/product/security",
  },
  {
    title: "Data protection & privacy controls",
    description:
      "Purpose-bound access, data minimization and lifecycle controls — without publishing unverified hosting or encryption claims.",
    href: "#privacy-ownership",
  },
  {
    title: "Integration & operational security",
    description:
      "Connection authorization, secrets/data minimization, retries and reconciliation route to current product and trust sources.",
    href: "/product/integrations",
  },
];

export default function ControlsPreviewSection() {
  return (
    <section id="controls-preview" className="scroll-mt-24 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Payroll security controls preview</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            A buyer-readable map, not the full control architecture.
          </h2>
          <p className="mt-4 max-w-[640px] text-base leading-6 text-slate-600">
            Shorter and less detailed than the canonical Product Security and Trust page, by design.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {controls.map((control, index) => (
            <Reveal
              key={control.title}
              delay={index * 60}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5"
            >
              <span className="flex size-9 items-center justify-center rounded-[10px] bg-blue-50 text-base font-bold text-sky-700">
                {index + 1}
              </span>
              <p className="mt-5 text-sm font-bold leading-6 text-brand-dark">{control.title}</p>
              <p className="mt-2 text-xs leading-5 text-slate-600">{control.description}</p>
              <Link
                href={control.href}
                className="group mt-auto inline-flex items-center gap-1 pt-4 text-sm font-bold leading-5 text-sky-700 transition-colors duration-200 hover:text-brand-dark"
              >
                Review controls
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
