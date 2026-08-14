import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const columns = ["Source role", "Destination role", "Permission difference", "Approval owner"];

const rows = [
  {
    source: "Zoiko HR: HR Admin",
    destination: "Zoiko Payroll: Workforce Viewer",
    difference: "No payroll edit rights granted",
    owner: "Security Admin",
  },
  {
    source: "Zoiko Finance: Analyst",
    destination: "Zoiko Payroll: No access",
    difference: "Finance role does not map to payroll",
    owner: "Finance Admin",
  },
];

export default function IdentityBoundariesSection() {
  return (
    <section className="border-t border-slate-200 bg-[#F5F8FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Identity, access &amp; administrative boundaries</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-sky-950">
            Authentication and authorization stay separate
          </h2>
          <p className="mt-3 text-base leading-6 text-slate-600">
            Managed service identities, not shared personal credentials. Requested and granted scopes are
            both visible, and role mapping — where it exists — is never silent.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-3xl border-collapse text-left">
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <th
                      key={column}
                      scope="col"
                      className={`border-b border-slate-200 px-5 py-3.5 font-mono text-[10px] font-medium uppercase leading-4 tracking-tight text-slate-600 ${
                        index === columns.length - 1 ? "text-right" : ""
                      }`}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.source} className="border-b border-slate-200 last:border-b-0">
                    <th scope="row" className="px-5 py-4 text-left text-sm font-normal text-sky-950">
                      {row.source}
                    </th>
                    <td className="px-5 py-4 text-sm text-sky-950">{row.destination}</td>
                    <td className="px-5 py-4 text-sm text-sky-950">{row.difference}</td>
                    <td className="px-5 py-4 text-right text-sm text-sky-950">{row.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-5 max-w-2xl rounded-r-lg border-l-2 border-yellow-700 bg-[#F5F8FA] px-3.5 py-2.5 text-xs leading-5 text-yellow-900">
            No silent privilege elevation or automatic role inheritance. Revoke and disable actions show
            an impact preview and are captured in audit history where implemented.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
