import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const permissions = ["View", "Coordinate", "Edit", "Approve", "Administer", "Export"];

/** Each role's grants, in the same order as `permissions`. */
const roles = [
  { role: "Global Payroll Leader", grants: [true, true, false, false, false, true] },
  { role: "Regional Payroll Lead", grants: [true, true, false, false, false, true] },
  { role: "Local Payroll Team", grants: [true, false, true, true, false, false] },
  { role: "Local Administrator", grants: [true, false, true, false, true, true] },
  { role: "Auditor / Viewer", grants: [true, false, false, false, false, false] },
];

const notes = [
  {
    title: "Policy floor",
    body: "Global minimums, plus local additions or overrides — each with a stated reason, approver and effective date.",
  },
  {
    title: "Evidence, every time",
    body: "Source, actor, timestamp, configuration version and the changed object are captured for every governed action.",
  },
];

export default function GovernanceSection() {
  return (
    <section className="border-t border-[#DCE6EC] bg-[#EAF1F6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Global governance + local authority</Eyebrow>
          <h2 className="mt-2.5 max-w-4xl text-2xl font-extrabold leading-8 break-words sm:text-3xl sm:leading-9 text-[#082F49]">
            Global standards and local authority — shown coexisting, not competing
          </h2>
          <p className="mt-2.5 max-w-3xl text-base leading-6 text-[#4E6172]">
            Permission language distinguishes exactly what &quot;visibility&quot; does and
            doesn&apos;t grant.
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
                      Role
                    </th>
                    {permissions.map((permission) => (
                      <th
                        key={permission}
                        scope="col"
                        className="border-b border-[#DCE6EC] px-4 py-2.5 text-center font-mono text-[10px] font-medium uppercase leading-4 text-[#4E6172]"
                      >
                        {permission}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {roles.map((row, index) => {
                    const cellBorder = index < roles.length - 1 ? "border-b border-[#DCE6EC]" : "";
                    return (
                      <tr key={row.role}>
                        <td
                          className={`px-4 py-3 text-xs font-bold leading-5 text-[#082F49] ${cellBorder}`}
                        >
                          {row.role}
                        </td>
                        {row.grants.map((granted, grantIndex) => (
                          <td
                            key={permissions[grantIndex]}
                            // Labelled here rather than with a visually-hidden span: an absolutely
                            // positioned child would escape the card's clipping and widen the page.
                            aria-label={`${permissions[grantIndex]}: ${granted ? "granted" : "not granted"}`}
                            className={`px-4 py-3 text-center text-xs leading-5 ${cellBorder} ${
                              granted ? "text-[#2F7A52]" : "text-slate-400"
                            }`}
                          >
                            <span aria-hidden="true">{granted ? "✓" : "—"}</span>
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

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {notes.map((note, index) => (
            <Reveal key={note.title} delay={index * 80}>
              <div className="h-full rounded-2xl border border-[#DCE6EC] bg-white px-5 py-5">
                <h3 className="font-mono text-xs uppercase leading-4 tracking-wider text-[#075E99]">
                  {note.title}
                </h3>
                <p className="mt-2.5 text-sm leading-5 text-[#4E6172]">{note.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-5">
          <p className="max-w-2xl rounded-r-lg border-l-[3px] border-[#B23A34] bg-[#F4E1DF] px-5 py-4 text-sm leading-5 text-[#7A2A25]">
            Global visibility does not automatically grant local edit, correction, approval, close,
            export or support authority.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
