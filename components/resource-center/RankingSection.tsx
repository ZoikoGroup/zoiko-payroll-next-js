import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const rows = [
  {
    query: "“MFA setup”",
    authority: "Product Documentation / Security and Trust",
    explanation: "Docs first for configuration; Trust second for evidence.",
  },
  {
    query: "“Payroll is unavailable”",
    authority: "System Status / Help Center",
    explanation: "Status first for service health; Help for local troubleshooting.",
  },
  {
    query: "“New reporting export”",
    authority: "Release Notes / Product Documentation",
    explanation: "Release evidence first, then current usage instructions.",
  },
  {
    query: "“Payroll in France”",
    authority: "Jurisdiction Guides / Global Payroll",
    explanation: "Market guide for education; availability stays separately governed.",
  },
  {
    query: "“Move from legacy payroll”",
    authority: "Implementation",
    explanation: "Implementation owns controlled migration depth.",
  },
  {
    query: "“What is retro pay?”",
    authority: "Payroll Glossary / Payroll Guides",
    explanation: "Direct definition first; longer learning second.",
  },
];

export default function RankingSection() {
  return (
    <section className="border-t border-slate-200 bg-[#E9F0F8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Authority-aware ranking</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-2xl font-extrabold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
            Recency and marketing relevance never outrank the true authority.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-1/3 bg-sky-50 px-5 py-4 text-sm font-bold leading-5 text-sky-950"
                  >
                    Query example
                  </th>
                  <th
                    scope="col"
                    colSpan={2}
                    className="bg-sky-950 px-5 py-4 text-sm font-bold leading-5 text-white"
                  >
                    Expected top authority
                  </th>
                </tr>
                <tr className="border-b border-slate-200">
                  <th
                    scope="col"
                    className="px-5 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-gray-400"
                  >
                    Query
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-gray-400"
                  >
                    Top authority
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-gray-400"
                  >
                    Ranking explanation
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.query}
                    className={index < rows.length - 1 ? "border-b border-slate-200" : ""}
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 text-sm font-normal leading-5 text-gray-700"
                    >
                      {row.query}
                    </th>
                    <td className="px-5 py-4 text-sm leading-5 text-sky-950">{row.authority}</td>
                    <td className="px-5 py-4 text-sm leading-5 text-gray-600">{row.explanation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-4 text-xs leading-5 text-gray-400">
            Behavioral personalization and paid/sponsored ranking are forbidden by default — every
            result must be explainable.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
