import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const columns = ["Role", "Prepare", "Review", "Approve", "Administer", "View audit"];

/** Rights per role — a dash means the right is not held, never "unknown". */
const roles: { role: string; rights: boolean[] }[] = [
  { role: "Processor / Admin", rights: [true, false, false, false, false] },
  { role: "Reviewer", rights: [false, true, false, false, false] },
  { role: "Approver", rights: [false, false, true, false, false] },
  { role: "Payroll Lead / Manager", rights: [true, true, true, true, true] },
  { role: "Viewer / Auditor", rights: [false, false, false, false, true] },
];

export default function RoleArchitectureSection() {
  return (
    <section className="border-t border-slate-200 bg-[#F6F8FC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/payroll-teams/role-architecture.png"
              alt="A payroll processor working within their own scope"
              className="aspect-[477/326] w-full rounded-2xl object-cover shadow-[0_18px_44px_-18px_rgba(8,19,43,0.22)]"
            />
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading
              wrap
              eyebrow="Security & trust · role architecture"
              title="Segregation of duties, by design."
              description="Clear role boundaries separate preparation, review, approval, administration, and audit — keeping every payroll decision controlled and accountable."
            />
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-3xl border-collapse text-left">
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <th
                      key={column}
                      scope="col"
                      className={`border-b border-slate-200 bg-gray-50 px-4 py-3.5 text-xs font-bold leading-4 text-slate-500 ${
                        index === 0 ? "" : "text-center"
                      }`}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {roles.map((row, index) => {
                  const cellBorder = index < roles.length - 1 ? "border-b border-slate-200" : "";
                  return (
                    <tr key={row.role}>
                      <th
                        scope="row"
                        className={`px-4 py-4 text-left text-sm font-normal leading-5 text-slate-900 ${cellBorder}`}
                      >
                        {row.role}
                      </th>
                      {row.rights.map((granted, rightIndex) => (
                        <td
                          key={columns[rightIndex + 1]}
                          className={`px-4 py-4 text-center ${cellBorder}`}
                        >
                          {granted ? (
                            <span className="text-sm font-bold text-green-600" aria-label="granted">
                              ✓
                            </span>
                          ) : (
                            <span className="text-sm text-slate-400" aria-label="not granted">
                              —
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
