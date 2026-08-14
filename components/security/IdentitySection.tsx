import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const columns = ["View", "Prepare", "Review", "Approve", "Export", "Administer", "View audit"];

/** "yes" renders a check, "none" an em dash, anything else prints as a scope note. */
const roles: { role: string; privileged?: boolean; access: string[] }[] = [
  { role: "Payroll Processor", access: ["yes", "yes", "none", "none", "none", "none", "none"] },
  { role: "Reviewer", access: ["yes", "none", "yes", "none", "none", "none", "none"] },
  { role: "Approver", access: ["yes", "none", "none", "yes", "none", "none", "none"] },
  { role: "Finance / Controller", access: ["yes", "none", "none", "none", "yes", "none", "Scoped"] },
  {
    role: "Payroll Admin",
    privileged: true,
    access: ["yes", "yes", "yes", "yes", "yes", "yes", "Scoped"],
  },
  {
    role: "Integration Admin",
    privileged: true,
    access: ["yes", "none", "none", "none", "none", "yes", "Scoped"],
  },
  {
    role: "Security / Auditor",
    privileged: true,
    access: ["Scoped", "none", "none", "none", "none", "none", "yes"],
  },
];

function AccessCell({ value }: { value: string }) {
  if (value === "yes") {
    return (
      <>
        <span aria-hidden="true" className="text-xs font-bold text-green-600">
          &#10003;
        </span>
        <span className="sr-only">Permitted</span>
      </>
    );
  }

  if (value === "none") {
    return (
      <>
        <span aria-hidden="true" className="text-slate-500">
          &mdash;
        </span>
        <span className="sr-only">Not permitted</span>
      </>
    );
  }

  return <span className="text-xs font-bold text-red-600">{value}</span>;
}

export default function IdentitySection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Identity, authentication &amp; privileged access</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-9 text-slate-900">
            Authentication is the session gate — not blanket payroll permission
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-700">
            Signing in proves who you are. What you can do is a separate, explicit grant per role.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-11">
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-4xl border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th
                    scope="col"
                    className="border-b border-slate-200 px-3 py-3 text-left text-xs font-bold leading-4 text-gray-700"
                  >
                    Role
                  </th>
                  {columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="border-b border-slate-200 px-3 py-3 text-center text-xs font-bold leading-4 text-gray-700"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {roles.map((row) => (
                  <tr key={row.role}>
                    <th
                      scope="row"
                      className="border-r border-b border-slate-200 px-3 py-2.5 text-left text-xs font-semibold leading-5 text-slate-900"
                    >
                      {row.role}
                      {row.privileged ? (
                        <span className="text-[9.5px] font-semibold text-red-600"> · privileged</span>
                      ) : null}
                    </th>
                    {row.access.map((value, index) => (
                      <td
                        key={columns[index]}
                        className={`border-b border-slate-200 px-3 py-2.5 text-center text-xs leading-5 ${
                          index < columns.length - 1 ? "border-r" : ""
                        }`}
                      >
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
