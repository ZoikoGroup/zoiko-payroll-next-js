import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const columns = ["System", "Purpose", "Owner", "Status"];

const connections = [
  {
    system: "HR / HCM",
    purpose: "Employee & org changes",
    owner: "M. Reyes",
    status: "Healthy",
    healthy: true,
  },
  {
    system: "Finance / ERP",
    purpose: "Posting & reconciliation",
    owner: "D. Park",
    status: "Healthy",
    healthy: true,
  },
  {
    system: "Time tracking",
    purpose: "Hours & overtime",
    owner: "S. Kim",
    status: "Degraded",
    healthy: false,
  },
  {
    system: "Identity provider",
    purpose: "Authentication & access",
    owner: "Security Admin",
    status: "Healthy",
    healthy: true,
  },
];

export default function IntegrationsSection() {
  return (
    <section className="bg-stone-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title="Integrations remove duplicate work — never control"
            description="Source authority, error visibility and a manual fallback are preserved on every connection."
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-neutral-300 lg:grid-cols-2">
            <div className="relative min-h-64">
              <img
                src="/images/growing-businesses/integrations.png"
                alt="Payroll data flowing between connected systems on a laptop"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="overflow-x-auto bg-white">
              <table className="w-full min-w-lg border-collapse text-left">
                <thead>
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="px-4 py-3.5 text-xs font-semibold uppercase leading-4 tracking-wide text-slate-500"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {connections.map((connection) => (
                    <tr key={connection.system}>
                      <td className="border-t border-neutral-300 px-4 py-3.5 text-sm leading-5 text-slate-900">
                        {connection.system}
                      </td>
                      <td className="border-t border-neutral-300 px-4 py-3.5 text-sm leading-5 text-slate-900">
                        {connection.purpose}
                      </td>
                      <td className="border-t border-neutral-300 px-4 py-3.5 text-sm leading-5 text-slate-900">
                        {connection.owner}
                      </td>
                      <td className="border-t border-neutral-300 px-4 py-3.5">
                        <span
                          className={`inline-flex items-center gap-2 text-xs font-medium leading-5 ${
                            connection.healthy ? "text-teal-800" : "text-yellow-700"
                          }`}
                        >
                          <span
                            className={`h-2 w-2 shrink-0 rounded-sm ${
                              connection.healthy ? "bg-teal-800" : "bg-yellow-700"
                            }`}
                            aria-hidden="true"
                          />
                          {connection.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
