import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

type Impact = "action" | "review" | "none";

const impactStyles: Record<Impact, string> = {
  action: "bg-red-300/30 text-orange-200",
  review: "bg-white/20 text-white",
  none: "bg-emerald-300/25 text-emerald-200",
};

const releases = [
  {
    id: "REL-2026-114",
    date: "Aug 12, 2026",
    title: "Payroll Approval Delegation — Expanded Scope",
    summary: "Delegated approvers can now act on multi-entity cycles when explicitly granted.",
    impact: "action" as Impact,
    impactLabel: "Action required",
    tags: ["Approvals", "Config change"],
    image: "/images/release-notes/release-approvals.png",
    href: "/resources/release-notes/rel-2026-114",
  },
  {
    id: "REL-2026-109",
    date: "Aug 05, 2026",
    title: "Reporting Export — New Reconciliation Fields",
    summary: "Two additional fields added to the standard reconciliation export template.",
    impact: "none" as Impact,
    impactLabel: "No action expected",
    tags: ["Reporting", "Enhancement"],
    image: "/images/release-notes/release-reporting.png",
    href: "/resources/release-notes/rel-2026-109",
  },
  {
    id: "REL-2026-095",
    date: "Jul 18, 2026",
    title: "Webhook Retry Policy — Backoff Interval Increased",
    summary: "Failed webhook deliveries now retry with a longer exponential backoff window.",
    impact: "none" as Impact,
    impactLabel: "No action expected",
    tags: ["Integrations", "Reliability"],
    image: "/images/release-notes/release-integrations.png",
    href: "/resources/release-notes/rel-2026-095",
  },
  {
    id: "REL-2026-101",
    date: "Jul 30, 2026",
    title: "MFA Enforcement — Session Timeout Adjustment",
    summary: "Default session timeout reduced for accounts with MFA enforced org-wide.",
    impact: "review" as Impact,
    impactLabel: "Recommended review",
    tags: ["Security", "Config change"],
    image: "/images/release-notes/release-security.png",
    href: "/resources/release-notes/rel-2026-101",
  },
];

export default function LatestReleasesSection() {
  return (
    <section className="border-t border-[#DCE6EC] bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <Eyebrow center>Latest verified changes</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight sm:text-3xl tracking-tight text-brand-dark">
            The most recent releases confirmed by approved authority
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {releases.map((release, index) => (
            <Reveal key={release.id} delay={index * 80}>
              <Link
                href={release.href}
                className="group relative flex min-h-[190px] flex-col justify-end overflow-hidden rounded-2xl p-5"
              >
                <img
                  src={release.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 to-slate-900/90" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-tight text-blue-300">
                      {release.date} · {release.id}
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-[3px] text-xs font-bold ${impactStyles[release.impact]}`}
                    >
                      {release.impactLabel}
                    </span>
                  </div>

                  <h3 className="mt-2 text-base font-bold text-white">{release.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-200">{release.summary}</p>

                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {release.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/20 px-2 py-[3px] text-xs font-bold text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
