import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

type CellTone = "brand" | "ok" | "warn" | "muted";

type Cell = { label: string; tone: CellTone };

const cellDots: Record<CellTone, string> = {
  brand: "bg-brand",
  ok: "bg-green-700",
  warn: "bg-yellow-700",
  muted: "bg-slate-400",
};

const cellText: Record<CellTone, string> = {
  brand: "text-brand-dark",
  ok: "text-green-700",
  warn: "text-yellow-700",
  muted: "text-slate-600",
};

const none: Cell = { label: "—", tone: "muted" };
const view: Cell = { label: "View", tone: "muted" };

const columns = ["Edit / resolve", "Review", "Approve", "Administer"];

const roleRows: { role: string; cells: Cell[] }[] = [
  {
    role: "Payroll Operator",
    cells: [{ label: "Full", tone: "brand" }, none, none, none],
  },
  {
    role: "Reviewer",
    cells: [{ label: "Scoped", tone: "muted" }, { label: "Full", tone: "brand" }, none, none],
  },
  {
    role: "Approver",
    cells: [none, view, { label: "Full", tone: "ok" }, none],
  },
  {
    role: "Payroll Administrator",
    cells: [{ label: "Full", tone: "brand" }, view, none, { label: "Scoped", tone: "warn" }],
  },
  {
    role: "Finance / Controller",
    cells: [none, view, { label: "Scoped", tone: "ok" }, none],
  },
  {
    role: "HR / People Admin",
    cells: [{ label: "Scoped", tone: "brand" }, none, none, none],
  },
  {
    role: "Employee",
    cells: [none, none, none, { label: "Own records", tone: "muted" }],
  },
  {
    role: "Auditor / Viewer",
    cells: [none, view, none, none],
  },
];

function RightCell({ cell }: { cell: Cell }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${cellDots[cell.tone]}`} aria-hidden="true" />
      <span className={`text-xs font-medium ${cellText[cell.tone]}`}>{cell.label}</span>
    </span>
  );
}

export default function RolesSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#F4F8FB] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Roles &amp; decision rights</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Who can edit, review, approve or administer.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Least-privilege by default. Final production permissions are reconciled with your actual
            authorization model during implementation.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-12">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/images/how-it-works/roles.png"
              alt="Payroll, finance and HR colleagues reviewing a run together"
              loading="lazy"
              className="h-56 w-full object-cover sm:h-64"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-brand-dark/85 via-brand-dark/25 to-transparent"
              aria-hidden="true"
            />
            <p className="absolute bottom-5 left-5 right-5 text-sm font-semibold text-white sm:text-base">
              Every decision is attributed to a role, never to &ldquo;the system.&rdquo;
            </p>
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="bg-[#EAF1F6]">
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Role
                  </th>
                  {columns.map((column) => (
                    <th
                      key={column}
                      className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {roleRows.map((row) => (
                  <tr key={row.role}>
                    <td className="px-5 py-3.5 text-sm font-semibold text-brand-dark">{row.role}</td>
                    {row.cells.map((cell, index) => (
                      <td key={columns[index]} className="px-5 py-3.5">
                        <RightCell cell={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
