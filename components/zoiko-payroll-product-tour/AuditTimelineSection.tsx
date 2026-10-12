import Reveal from "@/components/ui/Reveal";

interface AuditEvent {
  id: number;
  title: string;
  metadata: string;
  isFirst?: boolean;
}

const auditEvents: AuditEvent[] = [
  {
    id: 1,
    title: "Input imported — HR System Connector",
    metadata: "System · Aug 03, 2026, 04:00 · Execution: Success",
    isFirst: true,
  },
  {
    id: 2,
    title: "Exception reviewed — EX-1042",
    metadata: "Payroll Specialist (synthetic) · Aug 03, 2026, 11:45 · OK/Enter / Noted override",
  },
  {
    id: 3,
    title: "Approval recorded — Payroll Europe",
    metadata: "Payroll Manager (synthetic) · Aug 04, 2026, 14:00 · Status set: Ready to close",
  },
  {
    id: 4,
    title: "Report generated — Payroll Summary",
    metadata: "System · Aug 05, 2026, 08:15 · Retention: 7y active",
  },
];

export default function AuditTimelineSection() {
  return (
    <section className="w-full bg-[#E9F0F8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[800px]">
        {/* Header */}
        <Reveal>
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0A78C2]">
              / CONTROL & AUDIT FIRST
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl md:text-[34px]">
              Auditability is a pattern across every chapter — not a separate promise.
            </h2>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-12 pl-6 sm:pl-8">
          {/* Vertical connecting line */}
          <div
            className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-[#0A78C2]/30 sm:left-3.5"
            aria-hidden="true"
          />

          <div className="space-y-7">
            {auditEvents.map((evt, idx) => (
              <Reveal key={evt.id} delay={idx * 70}>
                <div className="relative flex items-start gap-3.5 sm:gap-4">
                  {/* Node icon / indicator */}
                  <div className="absolute -left-6 top-1 flex h-4 w-4 -translate-x-1/2 items-center justify-center sm:-left-8">
                    {evt.isFirst ? (
                      <span className="relative flex h-3.5 w-3.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0A78C2] opacity-50" />
                        <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-[#0A78C2] shadow-xs" />
                      </span>
                    ) : (
                      <span className="h-2.5 w-2.5 rounded-xs bg-[#0A78C2] shadow-xs" />
                    )}
                  </div>

                  {/* Event details */}
                  <div className="pl-1">
                    <h3 className="text-sm font-bold text-[#082F49] sm:text-base">
                      {evt.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-slate-500 sm:text-[13px]">
                      {evt.metadata}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <Reveal delay={280}>
          <div className="mt-10 text-center">
            <p className="text-xs text-slate-400">
              Audit trails record actor, action, object, timestamp, and outcome; key details logged for statutory scrutiny.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
