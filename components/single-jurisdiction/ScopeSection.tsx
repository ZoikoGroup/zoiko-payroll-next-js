import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

type Row = { label: string; value: string; mono?: boolean; badgeClass?: string };

const cards: { title: string; badge?: string; rows: Row[] }[] = [
  {
    title: "Zoiko US Inc.",
    badge: "Active",
    rows: [
      { label: "Currency", value: "USD" },
      { label: "Payroll groups", value: "Salaried, Hourly" },
      { label: "Owner", value: "payroll-ops", mono: true },
    ],
  },
  {
    title: "Salaried — Semi-monthly",
    rows: [
      { label: "Population", value: "842" },
      { label: "Cutoff", value: "2 days prior" },
      { label: "Approval policy", value: "Reviewer + Approver" },
    ],
  },
  {
    title: "Configuration",
    rows: [
      { label: "Version", value: "cfg-2026.07-r2", mono: true },
      { label: "Changed by", value: "j.alvarez", mono: true },
      { label: "Status", value: "Approved", badgeClass: "bg-emerald-50 text-green-600" },
    ],
  },
];

export default function ScopeSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Scope, entities, payroll groups &amp; calendar</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-slate-900">
            Structure that mirrors how your market actually operates.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, cardIndex) => (
            <Reveal key={card.title} delay={cardIndex * 80}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white px-5 pt-5 pb-6">
                <div className="flex items-center justify-between gap-3 pb-3">
                  <h3 className="text-sm font-bold leading-5 text-slate-900">{card.title}</h3>
                  {card.badge && (
                    <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold leading-4 text-green-600">
                      {card.badge}
                    </span>
                  )}
                </div>

                {card.rows.map((row, rowIndex) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between gap-3 py-1.5 ${
                      rowIndex < card.rows.length - 1 ? "border-b border-slate-200" : ""
                    }`}
                  >
                    <span className="text-xs leading-5 text-slate-500">{row.label}</span>
                    {row.badgeClass ? (
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold leading-4 ${row.badgeClass}`}
                      >
                        {row.value}
                      </span>
                    ) : (
                      <span
                        className={`text-right text-xs leading-5 ${
                          row.mono ? "font-mono text-slate-500" : "text-gray-700"
                        }`}
                      >
                        {row.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
