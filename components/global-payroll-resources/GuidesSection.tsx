import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const cards = [
  {
    kind: "Guide",
    title: "What's a good multi-entity operating model?",
    detail: "Explains centralization, federation and hybrid patterns for growing organizations.",
    audience: "Payroll leaders",
    date: "Jul 2026",
  },
  {
    kind: "Checklist",
    title: "What evidence should we gather before review?",
    detail: "A structured checklist for audit and compliance-review readiness.",
    audience: "Payroll Ops",
    date: "Jun 2026",
  },
  {
    kind: "Playbook",
    title: "How do we govern cross-border payroll change?",
    detail: "A playbook for decision rights, escalation and change governance.",
    audience: "Transformation leads",
    date: "May 2026",
  },
];

const listed = [
  { title: "Provider / Service-Model Evaluation Checklist", kind: "Checklist" },
  { title: "Payroll Evidence & Audit Readiness Guide", kind: "Guide" },
  { title: "Global Payroll Change Governance Guide", kind: "Guide" },
];

export default function GuidesSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Guides, checklists &amp; playbooks</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-9 text-slate-900 sm:leading-10">
              Content that helps teams operate — without impersonating operational systems.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-gray-700">
              Customer-specific workplans, cutover authority and committed scope stay with
              Implementation and Migration.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <img
              src="/images/global-payroll-resources/guides-checklists-playbooks.png"
              alt="Distributed payroll team on a video call reviewing guidance"
              className="w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-8">
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {cards.map((card) => (
              <li
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white px-6 py-6"
              >
                <p className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                  {card.kind}
                </p>
                <h3 className="mt-2 text-sm font-extrabold leading-6 text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{card.detail}</p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-3">
                  <span className="text-xs leading-4 text-slate-500">{card.audience}</span>
                  <span className="text-xs leading-4 text-slate-500">{card.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="mt-6">
          <ul className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {listed.map((item, index) => (
              <li
                key={item.title}
                className={`flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 ${
                  index < listed.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                <span className="text-xs font-semibold leading-5 text-slate-900">{item.title}</span>
                <span className="text-xs font-semibold leading-4 text-blue-600">
                  {item.kind} <span aria-hidden="true">→</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
