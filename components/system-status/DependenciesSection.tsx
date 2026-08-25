import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const dependencies = [
  { dependency: "Payment network partner", ownership: "Third-party", component: "Bank/treasury payments", impact: "Operational" },
  { dependency: "Identity / SCIM provider", ownership: "Shared", component: "Sign-in", impact: "Operational" },
  { dependency: "Cloud infrastructure", ownership: "Zoiko-managed", component: "All components", impact: "Operational" },
];

export default function DependenciesSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src="/images/system-status/dependencies-context.png"
              alt="Team reviewing integration dependencies"
              loading="lazy"
              className="h-auto w-full rounded-2xl"
            />
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>Dependencies + integration context</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
              A vendor&rsquo;s status page is not Zoiko&rsquo;s status
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Attribution clarity — what is Zoiko&rsquo;s verified public impact — not a live
              vendor-status mirror.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="hidden grid-cols-4 gap-4 border-b border-slate-100 bg-slate-50 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400 sm:grid">
            <span>Dependency</span>
            <span>Ownership</span>
            <span>Affected component</span>
            <span>Public impact</span>
          </div>
          {dependencies.map((row) => (
            <div
              key={row.dependency}
              className="grid grid-cols-1 gap-2 border-b border-slate-100 px-6 py-4 last:border-b-0 sm:grid-cols-4 sm:items-center sm:gap-4"
            >
              <span className="text-sm font-semibold text-brand-dark">{row.dependency}</span>
              <span className="inline-flex w-fit rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
                {row.ownership}
              </span>
              <span className="text-sm text-slate-600">{row.component}</span>
              <span className="inline-flex w-fit rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                {row.impact}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
