import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import CheckCard from "./CheckCard";
import StatusChip, { type ChipTone } from "./StatusChip";

const rules = [
  { title: "Future dated", detail: "Scheduled — never applied to an earlier period." },
  { title: "Late", detail: "Marked late — after cutoff, review or approval." },
  { title: "Conflicting", detail: "Needs authorized resolution — no silent precedence." },
  { title: "Unknown / invalid", detail: "Readiness blocked; owner shown for remediation." },
];

const timeline: { title: string; detail: string; status: string; tone: ChipTone; dot: string }[] = [
  {
    title: "Future dated change",
    detail: "Effective Sep 01 — scheduled, not yet applied",
    status: "Scheduled",
    tone: "neutral",
    dot: "bg-slate-400",
  },
  {
    title: "On time change",
    detail: "Effective Aug 18 — within cutoff",
    status: "On time",
    tone: "ok",
    dot: "bg-green-700",
  },
  {
    title: "Late change",
    detail: "Effective Aug 16 — after approval, revalidation required",
    status: "Late after approval",
    tone: "warn",
    dot: "bg-yellow-700",
  },
  {
    title: "Conflicting change",
    detail: "Two versions target Aug 2026 — authorized resolution required",
    status: "Conflict needs resolution",
    tone: "fail",
    dot: "bg-red-600",
  },
];

export default function TimingLawSection() {
  return (
    <section className="bg-[#E8F0F9] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            wrap
            eyebrow="Timing law"
            title={
              <>
                A change isn&apos;t &quot;in payroll&quot; just because
                <br className="hidden lg:block" /> it&apos;s in HR.
              </>
            }
            description="Readiness needs a valid date, mapping and the right period state."
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {rules.map((rule) => (
              <CheckCard key={rule.title} title={rule.title}>
                {rule.detail}
              </CheckCard>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-5">
          <div className="rounded-xl border border-slate-200 bg-white px-5 py-5 sm:px-6">
            <p className="text-sm font-bold leading-5 text-sky-950">Effective date timeline</p>

            <div className="mt-3">
              {timeline.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 py-3 last:border-b-0"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${item.dot}`}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-bold leading-5 text-sky-950">{item.title}</p>
                      <p className="mt-0.5 text-xs leading-5 text-gray-600">{item.detail}</p>
                    </div>
                  </div>
                  <StatusChip tone={item.tone}>{item.status}</StatusChip>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
            Timezone context is shown wherever payroll timing depends on it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
