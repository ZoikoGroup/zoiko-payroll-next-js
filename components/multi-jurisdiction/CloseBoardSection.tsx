import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stages = ["Prepare", "Calculate", "Validate", "Review", "Approve", "Complete"];

/** "done" = passed, "pending" = milestone date, "blocked" = stops the aggregate close, null = not reached. */
type Cell = { state: "done" } | { state: "pending"; date: string } | { state: "blocked" } | null;

const rows: { group: string; cells: Cell[] }[] = [
  {
    group: "US · US-Salaried",
    cells: [
      { state: "done" },
      { state: "done" },
      { state: "done" },
      { state: "done" },
      { state: "pending", date: "Apr 12" },
      null,
    ],
  },
  {
    group: "DE · DE-Standard",
    cells: [
      { state: "done" },
      { state: "done" },
      { state: "pending", date: "Apr 14" },
      null,
      null,
      null,
    ],
  },
  {
    group: "SG · SG-All Staff",
    cells: [{ state: "done" }, { state: "blocked" }, null, null, null, null],
  },
  {
    group: "BR · BR-CLT",
    cells: [
      { state: "done" },
      { state: "done" },
      { state: "done" },
      { state: "done" },
      { state: "pending", date: "Apr 15" },
      null,
    ],
  },
  {
    group: "GB · GB-Standard",
    cells: [
      { state: "done" },
      { state: "done" },
      { state: "done" },
      { state: "pending", date: "Apr 13" },
      null,
      null,
    ],
  },
];

function StageCell({ cell }: { cell: Cell }) {
  if (cell === null) {
    return (
      <span className="text-xs leading-5 text-slate-400" aria-label="not reached">
        <span aria-hidden="true">—</span>
      </span>
    );
  }

  if (cell.state === "done") {
    return (
      <span className="text-xs leading-5 text-[#2F7A52]" aria-label="complete">
        <span aria-hidden="true">✓</span>
      </span>
    );
  }

  if (cell.state === "blocked") {
    return <span className="text-xs font-bold leading-5 text-red-700">Blocked</span>;
  }

  return <span className="text-xs font-bold leading-5 text-[#075E99]">{cell.date}</span>;
}

export default function CloseBoardSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Cross-jurisdiction close board</Eyebrow>
          <h2 className="mt-2.5 max-w-4xl text-2xl font-extrabold leading-8 break-words sm:text-3xl sm:leading-9 text-[#082F49]">
            Aggregate close can&apos;t say &quot;ready&quot; while one required market is blocked
          </h2>
          <p className="mt-2.5 max-w-4xl text-base leading-6 text-[#4E6172]">
            Local lifecycle stays Prepare → Calculate → Validate → Review → Approve → Complete for
            every payroll group, coordinated through one dependency-aware board.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-[#DCE6EC] bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-3xl border-collapse text-left">
                <thead>
                  <tr className="bg-[#EAF1F6]">
                    <th
                      scope="col"
                      className="border-b border-[#DCE6EC] px-4 py-2.5 font-mono text-[10px] font-medium uppercase leading-4 text-[#4E6172]"
                    >
                      Jurisdiction · Group
                    </th>
                    {stages.map((stage) => (
                      <th
                        key={stage}
                        scope="col"
                        className="border-b border-[#DCE6EC] px-4 py-2.5 text-center font-mono text-[10px] font-medium uppercase leading-4 text-[#4E6172]"
                      >
                        {stage}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => {
                    const cellBorder = index < rows.length - 1 ? "border-b border-[#DCE6EC]" : "";
                    return (
                      <tr key={row.group}>
                        <td
                          className={`px-4 py-3 text-xs font-bold leading-5 text-[#082F49] ${cellBorder}`}
                        >
                          {row.group}
                        </td>
                        {row.cells.map((cell, cellIndex) => (
                          <td
                            key={stages[cellIndex]}
                            className={`px-4 py-3 text-center ${cellBorder} ${
                              cell?.state === "pending" ? "bg-sky-100" : ""
                            }`}
                          >
                            <StageCell cell={cell} />
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-4">
          <p className="text-xs leading-5 text-[#4E6172]">
            Milestone dates shown in local timezone; the viewer&apos;s timezone is a display aid
            only. A late change after approval or completion triggers a visible material-change
            impact and required reapproval or reconciliation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
