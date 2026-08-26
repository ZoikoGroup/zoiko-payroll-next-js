import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const canExplain = [
  "General guides and explainers",
  "Checklists and playbooks",
  "Evaluation frameworks",
  "Operating choices & workflow patterns",
  "Implementation considerations",
];

const doNotEstablish = [
  "A second jurisdiction directory",
  "Live requirement truth",
  "Customer-specific payroll results",
  "Legal or tax advice",
  "Unsupported statutory filing instructions",
];

const sourcesOfTruth = [
  { label: "Coverage / Directory", href: "/global-payroll/country-territory-directory" },
  { label: "Local Payroll Requirements", href: "/local-payroll-requirements" },
  { label: "Compliance Workflows", href: "/global-payroll/compliance-workflows" },
  { label: "Multi-Entity Payroll", href: "/global-payroll/multi-entity" },
  { label: "Global Reporting", href: "/global-payroll/reporting" },
  { label: "Implementation & Migration", href: "/solutions/payroll-migration" },
];

export default function AuthorityBoundarySection() {
  return (
    <section className="relative overflow-hidden bg-[#0E2233] py-20">
      <img
        src="/images/global-payroll-resources/authority-boundary-section-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0E2233]/90" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow tone="light">What Global Payroll Resources means</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-2xl font-extrabold leading-8 text-white sm:text-3xl sm:leading-9">
            A governed learning destination — not a second source of truth.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-6 py-6">
              <h3 className="text-base font-bold text-emerald-300">Resources can explain</h3>
              <ul className="mt-4 space-y-2.5">
                {canExplain.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-6 text-white/80">
                    <span className="shrink-0 text-emerald-400" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-xl border border-red-400/30 bg-red-500/10 px-6 py-6">
              <h3 className="text-base font-bold text-red-300">Resources do not establish</h3>
              <ul className="mt-4 space-y-2.5">
                {doNotEstablish.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-6 text-white/80">
                    <span className="shrink-0 text-red-400" aria-hidden="true">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-8">
          <p className="text-sm leading-5 text-white/60">Current sources of operational truth:</p>
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sourcesOfTruth.map((source) => (
              <li key={source.label}>
                <a
                  href={source.href}
                  className="flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-3.5 text-center text-sm font-medium text-white transition-colors duration-200 hover:bg-white/10"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
