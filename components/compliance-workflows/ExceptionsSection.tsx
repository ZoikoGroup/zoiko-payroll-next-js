import Reveal from "../ui/Reveal";
import StageHeader from "./StageHeader";

type Card = {
  state: string;
  dotClass: string;
  stateClass: string;
  rows: { label: string; value: string }[];
};

const cards: Card[] = [
  {
    state: "Needs Evidence",
    dotClass: "bg-yellow-600",
    stateClass: "text-yellow-700",
    rows: [
      { label: "What's unresolved", value: "Payroll register export missing for Mar 2026." },
      { label: "Owner / due", value: "R. Alves · due in 3 days" },
    ],
  },
  {
    state: "Needs Clarification",
    dotClass: "bg-yellow-600",
    stateClass: "text-yellow-700",
    rows: [
      { label: "What's unresolved", value: "Filing basis differs from prior version." },
      { label: "Owner / due", value: "Local SME · due in 5 days" },
    ],
  },
  {
    state: "Blocked",
    dotClass: "bg-red-600",
    stateClass: "text-red-600",
    rows: [
      { label: "What's unresolved", value: "State withholding cert not issued by authority." },
      { label: "Owner / due", value: "J. Whitfield · overdue" },
    ],
  },
  {
    state: "Approved Exception",
    dotClass: "bg-violet-600",
    stateClass: "text-violet-700",
    rows: [
      {
        label: "Compensating control",
        value: "Manual quarterly reconciliation until automated feed is live.",
      },
      { label: "Review / expiry", value: "Next review 2026-07-01" },
    ],
  },
  {
    state: "Remediation In Progress",
    dotClass: "bg-yellow-600",
    stateClass: "text-yellow-700",
    rows: [
      { label: "What's unresolved", value: "Configuration fix pending validation." },
      { label: "Owner / due", value: "Payroll Ops · due in 10 days" },
    ],
  },
  {
    state: "Expired Exception",
    dotClass: "bg-gray-400",
    stateClass: "text-gray-500",
    rows: [
      {
        label: "What's unresolved",
        value: "Compensating control period ended without re-review.",
      },
      { label: "Owner / due", value: "Escalated to approver" },
    ],
  },
];

export default function ExceptionsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <StageHeader
            stage="06"
            label="Exceptions & remediation"
            heading="A neutral state board, not red-error dashboard"
            center
          >
            Every open state answers what&apos;s unresolved, why it matters, who owns the next
            action, and what evidence closes it. No silent extension, no premature closure.
          </StageHeader>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <li
                key={card.state}
                className="rounded-[10px] border border-slate-200 bg-white px-5 py-5"
              >
                <p
                  className={`flex items-center gap-2 text-xs font-semibold ${card.stateClass}`}
                >
                  <span
                    className={`size-1.5 shrink-0 rounded-full ${card.dotClass}`}
                    aria-hidden="true"
                  />
                  {card.state}
                </p>
                <dl className="mt-4">
                  {card.rows.map((row) => (
                    <div key={row.label} className="mt-3 first:mt-0">
                      <dt className="text-xs text-gray-400">{row.label}</dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-700">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
