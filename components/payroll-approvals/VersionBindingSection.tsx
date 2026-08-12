import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const timeline = [
  { date: "Apr 08", title: "v4 Approved", description: "Finance Approver signs off on v4 totals." },
  { date: "Apr 09", title: "Material Change", description: "A retroactive correction triggers recalculation." },
  { date: "Apr 09", title: "v5 Created", description: "New version generated from the recalculation." },
  {
    date: "Apr 09",
    title: "v4 Approval Invalidated",
    description: "Prior sign-off marked historical — it no longer authorizes v5.",
  },
  { date: "Now", title: "Reapproval Required", description: "v5 routed back into the approval queue." },
];

export default function VersionBindingSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl">
          <Eyebrow>Version binding &amp; material changes</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-9 text-sky-950">
            An approval is never silently preserved after a material change
          </h2>
          <p className="mt-4 text-base leading-6 text-slate-600">
            Every approval is tied to a specific payroll version and scope. If a recalculation creates a
            new version, the affected approval becomes historical — and a new approval is required.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="/images/payroll-approvals/version-binding.png"
              alt="Version history reviewed on screen"
              loading="lazy"
              className="h-48 w-full object-cover sm:h-56"
            />
            <p className="absolute bottom-5 left-5 rounded bg-sky-950/85 px-3 py-1.5 font-mono text-xs text-white">
              The exact version that was reviewed — never assumed
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {timeline.map((entry, index) => (
            <Reveal key={entry.title} delay={index * 60}>
              <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-wide text-slate-500">
                {entry.date}
                <span className="h-px flex-1 bg-slate-300" aria-hidden="true" />
              </p>
              <h3 className="mt-3 text-sm font-bold text-sky-950">{entry.title}</h3>
              <p className="mt-1.5 text-xs leading-5 text-slate-600">{entry.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-8">
          <p className="text-xs leading-5 text-slate-500">
            Stale-state protection: if an approver is viewing v4 while v5 is created, the server rejects
            the stale commit, refreshes the workspace, and requires re-review.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
