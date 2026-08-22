import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const rows = [
  { state: "Available", does: "Links to current status on Coverage / Directory." },
  { state: "Limited", does: "Explains that education does not expand supported scope." },
  { state: "Partner-supported", does: "Routes to the current service model." },
  { state: "Planned", does: "Never implies launch availability." },
  { state: "Unavailable", does: "May remain educational — never implies support." },
  { state: "Needs review", does: "Pauses positive market claims." },
  { state: "Not applicable", does: "Explains the scope mismatch plainly." },
];

const owners = [
  { name: "Local Payroll Requirements", owns: "Owns requirement truth" },
  { name: "Compliance Workflows", owns: "Owns review/evidence state" },
  { name: "Multi-Entity Payroll", owns: "Owns entity scope" },
  { name: "Global Reporting", owns: "Owns reporting scope" },
  { name: "Implementation & Migration", owns: "Owns rollout depth" },
];

export default function AuthorityHandoffsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Authority handoffs</Eyebrow>
          <h2 className="mt-3 text-2xl font-extrabold leading-8 text-slate-900 sm:text-3xl sm:leading-9">
            Educational guidance <span aria-hidden="true">→</span> current authority. Every time
          </h2>
          <p className="mt-3 text-base leading-6 text-gray-700">
            Never infer availability from a resource mentioning a country.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-5">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th
                    scope="col"
                    className="w-1/3 border-b border-slate-200 px-4 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500"
                  >
                    Availability state
                  </th>
                  <th
                    scope="col"
                    className="border-b border-slate-200 px-4 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500"
                  >
                    What education does
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.state}
                    className={index < rows.length - 1 ? "border-b border-slate-200" : ""}
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 text-xs font-normal leading-5 text-gray-700"
                    >
                      {row.state}
                    </th>
                    <td className="px-4 py-3 text-xs leading-5 text-gray-700">{row.does}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-4">
          <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
            {owners.map((owner) => (
              <li
                key={owner.name}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3.5"
              >
                <p className="text-xs font-bold leading-5 text-slate-900">{owner.name}</p>
                <p className="mt-0.5 text-xs leading-4 text-slate-500">{owner.owns}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
