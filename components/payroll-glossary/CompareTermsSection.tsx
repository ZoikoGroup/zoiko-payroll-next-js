import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const columns = ["Pay period", "Pay date"];

const rows = [
  {
    label: "Direct meaning",
    values: [
      "Time span used to attribute payroll inputs and earnings.",
      "Date associated with paying the payroll for a cycle.",
    ],
  },
  {
    label: "Answers",
    values: ["“What period is this payroll for?”", "“When is this payroll due to be paid?”"],
  },
  {
    label: "Does not establish",
    values: [
      "The actual payment date or statutory reporting period.",
      "Settlement success, bank receipt or universal statutory timing.",
    ],
  },
  {
    label: "Current authority",
    values: [
      "Configured payroll calendar / Docs.",
      "Configured payment calendar; payment status authority.",
    ],
  },
  {
    label: "Related",
    values: [
      "Payroll frequency, cutoff, processing window.",
      "Net pay, payment, settlement status.",
    ],
  },
];

export default function CompareTermsSection() {
  return (
    <section id="compare" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Compare terms</Eyebrow>
          <h2 className="mt-6 max-w-xl text-2xl font-bold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
            Resolve semantic ambiguity, side by side.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr>
                  <th scope="col" className="w-44 bg-slate-50 px-5 py-4">
                    <span className="sr-only">Attribute</span>
                  </th>
                  {columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="bg-sky-950 px-5 py-4 text-sm font-bold leading-5 text-white"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.label}
                    className={index < rows.length - 1 ? "border-b border-slate-200" : ""}
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 align-top text-sm font-bold leading-5 text-sky-950"
                    >
                      {row.label}
                    </th>
                    {row.values.map((value, valueIndex) => (
                      <td
                        key={columns[valueIndex]}
                        className="px-5 py-4 align-top text-sm leading-5 text-gray-600"
                      >
                        {value}
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
