import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const areas = [
  { title: "Payroll Processing", description: "Cycles, calculations, calendars.", count: "42 articles" },
  { title: "Approvals", description: "Workflow, delegation, sign-off.", count: "18 articles" },
  { title: "Employee Records", description: "Payslips, history, self-service.", count: "23 articles" },
  { title: "Reporting", description: "Exports, reconciliation, insights.", count: "27 articles" },
  { title: "Integrations", description: "HRIS, finance, identity, API.", count: "37 articles" },
  { title: "Security", description: "Access, MFA, audit, permissions.", count: "15 articles" },
  { title: "Implementation", description: "Migration, testing, launch.", count: "19 articles" },
  { title: "Administration", description: "Roles, delegation, org settings.", count: "12 articles" },
];

const roles = [
  { title: "Payroll Administrator", description: "Prepares and runs payroll cycles." },
  { title: "Approver / Controller", description: "Reviews, approves, reconciles." },
  { title: "HR Administrator", description: "Manages worker/change inputs." },
  { title: "Employee", description: "Views payslips and records." },
  { title: "IT / Integration Admin", description: "Configures connections, API." },
  { title: "Security / Audit Reviewer", description: "Reviews access and controls." },
  { title: "Implementation Lead", description: "Owns rollout and migration." },
  { title: "Evaluator / Procurement", description: "Assesses fit and requirements." },
];

function CardGrid({ items, showCount }: { items: { title: string; description: string; count?: string }[]; showCount: boolean }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 40}>
          <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10">
            <h3 className="text-sm font-semibold text-brand-dark">{item.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.description}</p>
            {showCount && item.count && <p className="mt-3 text-[11px] italic text-slate-400">{item.count}</p>}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function BrowseSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Browse by product area</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Approved Zoiko Payroll taxonomy — nothing invented
          </h2>
        </Reveal>
        <CardGrid items={areas} showCount />

        <Reveal className="mt-16 max-w-2xl">
          <Eyebrow>Browse by role</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Reduce permission and context mismatch
          </h2>
        </Reveal>
        <CardGrid items={roles} showCount={false} />
      </div>
    </section>
  );
}
