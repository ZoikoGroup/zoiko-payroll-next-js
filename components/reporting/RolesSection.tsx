import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const columns = [
  "Aggregate reports",
  "Employee-level detail",
  "Reconciliation",
  "Audit reports",
  "Exports",
];

/** "yes" renders a check, "none" an em dash, anything else prints as a scope note. */
const roles: { role: string; access: string[] }[] = [
  { role: "Payroll Lead", access: ["yes", "yes", "yes", "Scoped", "yes"] },
  { role: "Payroll Admin", access: ["yes", "yes", "yes", "Scoped", "yes"] },
  { role: "Finance / Controller", access: ["yes", "Limited", "yes", "Scoped", "yes"] },
  { role: "HR / People Admin", access: ["yes", "Limited", "none", "none", "Limited"] },
  { role: "Executive", access: ["yes", "none", "none", "none", "Limited"] },
  { role: "Security / Auditor", access: ["Scoped", "none", "Scoped", "yes", "none"] },
  { role: "Employee", access: ["none", "Own record", "none", "none", "none"] },
];

function AccessCell({ value }: { value: string }) {
  if (value === "yes") {
    return (
      <>
        <span aria-hidden="true" className="text-green-600">
          &#10003;
        </span>
        <span className="sr-only">Full access</span>
      </>
    );
  }

  if (value === "none") {
    return (
      <>
        <span aria-hidden="true" className="text-slate-400">
          &mdash;
        </span>
        <span className="sr-only">No access</span>
      </>
    );
  }

  return <span className="text-xs font-semibold text-blue-600">{value}</span>;
}

export default function RolesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Roles, permissions &amp; visibility</Eyebrow>
          <h2 className="mt-2.5 text-3xl font-extrabold leading-9 text-slate-900">
            Aggregate by default. Detail requires explicit authorization
          </h2>
          <p className="mt-2.5 text-base leading-6 text-gray-700">
            Every query, filter, drill-down and export is server-authorized. UI hiding is never a
            security boundary.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-3xl border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th
                    scope="col"
                    className="px-5 py-3.5 text-left text-xs font-semibold leading-4 text-slate-900"
                  >
                    Role
                  </th>
                  {columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-5 py-3.5 text-center text-xs font-semibold leading-4 text-slate-900"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {roles.map((row) => (
                  <tr key={row.role} className="border-t border-slate-200">
                    <th
                      scope="row"
                      className="px-5 py-4 text-left text-sm font-semibold text-slate-900"
                    >
                      {row.role}
                    </th>
                    {row.access.map((value, index) => (
                      <td key={columns[index]} className="px-5 py-4 text-center text-sm">
                        <AccessCell value={value} />
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
