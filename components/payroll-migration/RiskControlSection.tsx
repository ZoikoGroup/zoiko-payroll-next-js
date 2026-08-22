import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const rows = [
  {
    failure: "Unknown source scope",
    control: "Explicit scope, documented before mapping begins",
  },
  {
    failure: "Untraceable transformations",
    control: "Versioned rules with full change history",
  },
  {
    failure: "Silent partial failure",
    control: "Partial failures surfaced, never masked as success",
  },
  {
    failure: "“It completed” ≠ “it worked”",
    control: "Reconciliation — not completion — defines success",
  },
  {
    failure: "Premature cutover",
    control: "Human-authorized cutover with recorded evidence",
  },
];

export default function RiskControlSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Migration risk &amp; control</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-9 text-slate-900">
              Every common migration failure has a named control
            </h2>
            <p className="mt-3 max-w-lg text-base leading-6 text-gray-700">
              Unknown scope, untraceable transformations, silent partial failures and premature
              cutover are the failure modes that derail most legacy migrations. Zoiko Payroll
              addresses each one before it can reach production.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <img
              src="/images/payroll-migration/risk-control.png"
              alt="Migration team reviewing control principles together"
              className="h-72 w-full rounded-2xl object-cover sm:h-80"
            />
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-10">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-50">
                  <th
                    scope="col"
                    className="w-1/3 px-4 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500"
                  >
                    Common failure mode
                  </th>
                  <th scope="col" className="w-16 px-4 py-3">
                    <span className="sr-only">Leads to</span>
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500"
                  >
                    How Zoiko Payroll controls it
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.failure}
                    className={index < rows.length - 1 ? "border-b border-slate-200" : ""}
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 text-sm font-medium leading-5 text-red-600"
                    >
                      {row.failure}
                    </th>
                    <td
                      aria-hidden="true"
                      className="px-4 py-3 text-sm leading-5 text-slate-900"
                    >
                      &rarr;
                    </td>
                    <td className="px-4 py-3 text-sm font-medium leading-5 text-green-600">
                      {row.control}
                    </td>
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
