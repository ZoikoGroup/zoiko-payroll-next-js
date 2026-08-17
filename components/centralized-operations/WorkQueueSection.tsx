import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const columns = ["Issue", "Scope", "Category", "Severity", "Owner", "Age", "Next action"];

const rows = [
  {
    issue: "Failed source import",
    scope: "SG-All Staff",
    category: "Integration",
    severity: "High",
    severityClass: "bg-[#F4E1DF] text-[#B23A34]",
    owner: "R. Tan",
    unassigned: false,
    age: "2 days",
    action: "Retry / escalate",
    rowClass: "",
  },
  {
    issue: "Statutory deduction mismatch",
    scope: "DE-Standard",
    category: "Calculation",
    severity: "Medium",
    severityClass: "bg-[#F1EAD8] text-[#9C7A1F]",
    owner: "L. Faber",
    unassigned: false,
    age: "1 day",
    action: "Correct / review",
    rowClass: "",
  },
  {
    issue: "Missing approval before cutoff",
    scope: "GB-Standard",
    category: "Approval",
    severity: "High",
    severityClass: "bg-transparent text-[#B23A34]",
    owner: "Unassigned",
    unassigned: true,
    age: "3 days",
    action: "Assign owner",
    rowClass: "bg-[#FBE9E7]",
  },
];

export default function WorkQueueSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Central work queue</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-8 break-words text-[#082F49] sm:text-3xl sm:leading-9">
            Central visibility, without an unowned global inbox
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4E6172]">
            &quot;Unassigned&quot; is treated as a visible defect state, not a quiet default.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-6">
          <div className="overflow-hidden rounded-xl border border-[#DCE6EC] bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-3xl border-collapse text-left">
                <thead>
                  <tr className="bg-[#EAF1F6]">
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-b border-[#DCE6EC] px-3.5 py-2.5 font-mono text-[10px] font-medium uppercase leading-4 text-[#4E6172]"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => {
                    const b = index < rows.length - 1 ? "border-b border-[#DCE6EC]" : "";
                    const cell = `px-3.5 py-3 text-xs leading-5 text-[#082F49] ${b}`;
                    return (
                      <tr key={row.issue} className={row.rowClass}>
                        <td className={cell}>{row.issue}</td>
                        <td className={cell}>{row.scope}</td>
                        <td className={cell}>{row.category}</td>
                        <td className={`px-3.5 py-2.5 ${b}`}>
                          <span
                            className={`inline-block rounded-[5px] px-2 py-0.5 font-mono text-xs font-medium leading-4 ${row.severityClass}`}
                          >
                            {row.severity}
                          </span>
                        </td>
                        <td
                          className={`px-3.5 py-3 text-xs leading-5 ${b} ${
                            row.unassigned ? "font-bold text-[#B23A34]" : "text-[#082F49]"
                          }`}
                        >
                          {row.owner}
                        </td>
                        <td className={cell}>{row.age}</td>
                        <td className={cell}>{row.action}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-4">
          <p className="text-sm leading-6 text-[#4E6172]">
            Bulk actions are limited to low-risk administrative changes, always with review,
            confirmation and audit history. Escalation changes who&apos;s paying attention — it
            never creates approval authority on its own.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
