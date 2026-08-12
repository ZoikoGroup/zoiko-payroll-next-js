import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import StatusChip, { type Tone } from "./StatusChip";

type BoundarySystem = {
  name: string;
  direction: string;
  status: string;
  tone: Tone;
};

const upstream: BoundarySystem[] = [
  {
    name: "Workforce / HCM systems",
    direction: "Upstream · inbound",
    status: "Connected",
    tone: "ok",
  },
  {
    name: "Time & absence systems",
    direction: "Upstream · inbound",
    status: "Requires setup",
    tone: "warn",
  },
];

const downstream: BoundarySystem[] = [
  { name: "Finance / ERP", direction: "Downstream · outbound", status: "Connected", tone: "ok" },
  {
    name: "Payment interfaces",
    direction: "Downstream · outbound",
    status: "Partial failure",
    tone: "error",
  },
  { name: "APIs & webhooks", direction: "Bi-directional", status: "Pending", tone: "muted" },
];

const boundaryNotes = [
  "Reconciliation needed",
  "Unavailable / gated",
  "Failed",
  "Support ownership shown per integration",
];

function SystemCard({ system }: { system: BoundarySystem }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3.5">
      <div>
        <p className="text-sm font-semibold text-brand-dark">{system.name}</p>
        <p className="mt-0.5 text-xs text-slate-400">{system.direction}</p>
      </div>
      <StatusChip tone={system.tone}>{system.status}</StatusChip>
    </div>
  );
}

export default function SystemBoundarySection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#F4F8FB] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>System boundary &amp; integrations</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Where Zoiko Payroll&rsquo;s responsibility starts and ends.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Upstream and downstream responsibility, shown directly — never a decorative connector-logo
            wall or an unverified &ldquo;seamless sync&rdquo; claim.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-12">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
            <div className="space-y-3">
              {upstream.map((system) => (
                <SystemCard key={system.name} system={system} />
              ))}
            </div>

            <div className="mx-auto flex h-24 w-56 items-center justify-center rounded-2xl bg-brand-dark px-6">
              <img
                src="/images/how-it-works/payroll-mark.png"
                alt="Zoiko Payroll"
                loading="lazy"
                className="h-auto w-full max-w-[150px]"
              />
            </div>

            <div className="space-y-3">
              {downstream.map((system) => (
                <SystemCard key={system.name} system={system} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-10 flex flex-wrap gap-2.5">
          {boundaryNotes.map((note) => (
            <span
              key={note}
              className="rounded-full bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand"
            >
              {note}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
