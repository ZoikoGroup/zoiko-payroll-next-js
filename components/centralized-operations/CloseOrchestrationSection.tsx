import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stages = ["Prepare", "Calculate", "Validate", "Review", "Approve", "Complete"];

/** "done" = passed, "due" = milestone date, "blocked" = stops the close, null = not reached. */
type Cell = { state: "done" } | { state: "due"; date: string } | { state: "blocked" } | null;

const rows: { group: string; cells: Cell[]; risk: string; riskClass: string }[] = [
  {
    group: "US-Salaried (EST)",
    cells: [
      { state: "done" },
      { state: "done" },
      { state: "done" },
      { state: "done" },
      { state: "due", date: "Apr 12" },
      null,
    ],
    risk: "Low",
    riskClass: "bg-[#E3F0E7] text-[#2F7A52]",
  },
  {
    group: "DE-Standard (CET)",
    cells: [
      { state: "done" },
      { state: "done" },
      { state: "due", date: "Apr 14" },
      null,
      null,
      null,
    ],
    risk: "Medium",
    riskClass: "bg-[#F1EAD8] text-[#9C7A1F]",
  },
  {
    group: "SG-All Staff (SGT)",
    cells: [{ state: "done" }, { state: "blocked" }, null, null, null, null],
    risk: "High",
    riskClass: "bg-[#F4E1DF] text-[#B23A34]",
  },
  {
    group: "BR-CLT (BRT)",
    cells: [
      { state: "done" },
      { state: "done" },
      { state: "done" },
      { state: "done" },
      { state: "due", date: "Apr 15" },
      null,
    ],
    risk: "Low",
    riskClass: "bg-[#E3F0E7] text-[#2F7A52]",
  },
];

function StageCell({ cell }: { cell: Cell }) {
  if (cell === null) {
    return <span className="text-xs leading-5 text-slate-300">—</span>;
  }
  if (cell.state === "done") {
    return <span className="text-xs font-extrabold leading-5 text-[#2F7A52]">✓</span>;
  }
  if (cell.state === "blocked") {
    return <span className="text-xs font-extrabold leading-5 text-[#B23A34]">Blocked</span>;
  }
  return <span className="text-xs font-extrabold leading-5 text-[#075E99]">{cell.date}</span>;
}

export default function CloseOrchestrationSection() {
  return (
    <section
      id="close-board"
      className="scroll-mt-24 border-t border-[#DCE6EC] bg-[#EAF1F6] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Payroll close orchestration</Eyebrow>
          <h2 className="mt-3.5 max-w-3xl text-2xl font-extrabold leading-8 break-words text-[#082F49] sm:text-3xl sm:leading-9">
            Local cutoffs, explicit timezones — never one universal countdown
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-3.5">
          <div className="overflow-hidden rounded-xl border border-[#DCE6EC] bg-white pt-4">
            <div className="overflow-x-auto">
              <table className="w-full min-w-3xl border-collapse text-left">
                <thead>
                  <tr className="bg-[#EAF1F6]">
                    <th
                      scope="col"
                      className="border-b border-[#DCE6EC] px-2 py-2 font-mono text-[10px] font-medium uppercase leading-4 text-[#4E6172]"
                    >
                      Payroll group
                    </th>
                    {[...stages, "Risk"].map((stage) => (
                      <th
                        key={stage}
                        scope="col"
                        className="border-b border-[#DCE6EC] px-2 py-2 text-center font-mono text-[10px] font-medium uppercase leading-4 text-[#4E6172]"
                      >
                        {stage}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => {
                    const b = index < rows.length - 1 ? "border-b border-[#DCE6EC]" : "";
                    return (
                      <tr key={row.group}>
                        <td
                          className={`px-2 py-2 text-xs font-semibold leading-5 text-[#082F49] ${b}`}
                        >
                          {row.group}
                        </td>
                        {row.cells.map((cell, cellIndex) => (
                          <td
                            key={stages[cellIndex]}
                            className={`px-2 py-2 text-center ${b} ${
                              cell?.state === "due" ? "rounded-md bg-sky-100" : ""
                            }`}
                          >
                            <StageCell cell={cell} />
                          </td>
                        ))}
                        <td className={`px-2 py-2.5 text-center ${b}`}>
                          <span
                            className={`inline-block rounded-xl px-1.5 text-[10px] font-bold leading-4 ${row.riskClass}`}
                          >
                            {row.risk}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-3.5">
          <p className="text-sm leading-6 text-[#4E6172]">
            Risk state derives from unresolved blockers, overdue actions, pending approval or failed
            required integrations. Portfolio completion appears only once every in-scope group
            satisfies its own local completion gate.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
