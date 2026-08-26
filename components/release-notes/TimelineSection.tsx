import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

type Entry = {
  id: string;
  date: string;
  title: string;
  area: string;
  impact: string;
  impactTone: "muted" | "warning" | "critical";
  state: string;
  stateTone: "current" | "superseded";
};

const months: { label: string; entries: Entry[] }[] = [
  {
    label: "August 2026",
    entries: [
      {
        id: "REL-2026-114",
        date: "Aug 12, 2026",
        title: "Payroll Approval Delegation — Expanded Scope",
        area: "Approvals",
        impact: "Action required",
        impactTone: "warning",
        state: "Current",
        stateTone: "current",
      },
      {
        id: "REL-2026-109",
        date: "Aug 05, 2026",
        title: "Reporting Export — New Reconciliation Fields",
        area: "Reporting",
        impact: "No action expected",
        impactTone: "muted",
        state: "Current",
        stateTone: "current",
      },
    ],
  },
  {
    label: "July 2026",
    entries: [
      {
        id: "REL-2026-101",
        date: "Jul 30, 2026",
        title: "MFA Enforcement — Session Timeout Adjustment",
        area: "Security",
        impact: "Recommended review",
        impactTone: "warning",
        state: "Current",
        stateTone: "current",
      },
      {
        id: "REL-2026-095",
        date: "Jul 18, 2026",
        title: "Webhook Retry Policy — Backoff Interval Increased",
        area: "Integrations",
        impact: "No action expected",
        impactTone: "muted",
        state: "Current",
        stateTone: "current",
      },
      {
        id: "REL-2026-088",
        date: "Jul 02, 2026",
        title: "Legacy Payslip Template — Deprecation Announced",
        area: "Employee Records",
        impact: "Migration open",
        impactTone: "critical",
        state: "Superseded",
        stateTone: "superseded",
      },
    ],
  },
  {
    label: "June 2026",
    entries: [
      {
        id: "REL-2026-079",
        date: "Jun 21, 2026",
        title: "Global Payroll — Additional Reporting Currency Support",
        area: "Global Payroll",
        impact: "No action expected",
        impactTone: "muted",
        state: "Current",
        stateTone: "current",
      },
    ],
  },
];

const impactTones = {
  muted: "font-normal text-[#8592A0]",
  warning: "font-bold text-[#8C6D2F]",
  critical: "font-bold text-[#A14842]",
};

const stateTones = {
  current: "bg-[#E3EFE6] text-[#3F6B54]",
  superseded: "bg-[#F3E9CC] text-[#8C6D2F]",
};

export default function TimelineSection() {
  return (
    <section className="border-t border-[#E1E8F0] bg-[#F9FAFB] py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Release timeline + archive</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-tight sm:text-3xl sm:leading-9 tracking-tight text-[#0A2E4B]">
              Grouped by year and month — every date carries semantic meaning
            </h2>
            <p className="mt-2.5 max-w-[620px] text-base leading-6 text-gray-600">
              A vertical chronological rail, not decorative storytelling. Older records remain
              available while policy permits, and superseded entries still link forward to current
              authority.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/release-notes/timeline-archive.png"
              alt="Colleagues reviewing the release archive"
              loading="lazy"
              className="h-80 w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={140} className="relative pl-9 pt-2 sm:pl-11">
          <span aria-hidden="true" className="absolute bottom-3 left-[9px] top-14 w-0.5 sm:left-[11px] bg-[#E1E8F0]" />

          {months.map((month) => (
            <div key={month.label}>
              <h3 className="pb-2.5 pt-3.5 text-xs font-extrabold uppercase leading-5 tracking-wide text-[#0A2E4B] first:pt-0">
                {month.label}
              </h3>

              {month.entries.map((entry) => (
                <Link
                  key={entry.id}
                  href={`/resources/release-notes/${entry.id.toLowerCase()}`}
                  className="relative mb-2.5 block rounded-[10px] border border-[#E1E8F0] bg-white px-4 py-3.5 transition-colors duration-200 hover:border-[#0A8FD0]/40"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[33px] top-[18px] size-3.5 sm:-left-[39px] rounded-full bg-[#0A8FD0] outline-2 -outline-offset-2 outline-white shadow-[0_0_0_2px_#0A8FD0]"
                  />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-bold leading-5 text-[#0A2E4B]">{entry.title}</span>
                    <span
                      className={`shrink-0 rounded-[20px] px-2 py-[3px] text-xs font-bold leading-4 ${stateTones[entry.stateTone]}`}
                    >
                      {entry.state}
                    </span>
                  </div>

                  <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs font-normal leading-4 text-[#8592A0]">
                    <span>{entry.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{entry.id}</span>
                    <span aria-hidden="true">·</span>
                    <span>{entry.area}</span>
                    <span aria-hidden="true">·</span>
                    <span className={impactTones[entry.impactTone]}>{entry.impact}</span>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </Reveal>

        <div className="flex justify-center">
          <Link
            href="/resources/release-notes/archive"
            className="rounded-lg border border-[#E1E8F0] bg-white px-5 py-2.5 text-center text-sm font-bold leading-5 text-[#0A2E4B] transition-colors duration-200 hover:border-[#0A8FD0]/40"
          >
            View archive (2024 – 2025)
          </Link>
        </div>
      </div>
    </section>
  );
}
