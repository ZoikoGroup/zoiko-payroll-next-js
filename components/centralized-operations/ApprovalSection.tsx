import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StatusChip, { type ChipTone } from "./StatusChip";
import { AlertTriangleIcon } from "./icons";

const columns = ["Stage", "Responsible role", "Status"];

const rows: {
  stage: string;
  role: string;
  initials: string;
  avatarClass: string;
  status: string;
  tone: ChipTone;
}[] = [
  {
    stage: "Prepared",
    role: "Payroll Operator",
    initials: "MO",
    avatarClass: "bg-[#2563C9]",
    status: "Complete",
    tone: "ok",
  },
  {
    stage: "Reviewed",
    role: "Central Payroll Lead",
    initials: "CL",
    avatarClass: "bg-[#2F7A52]",
    status: "Complete",
    tone: "ok",
  },
  {
    stage: "Approved",
    role: "Entity Payroll Owner",
    initials: "EO",
    avatarClass: "bg-[#9C7A1F]",
    status: "Stale — reapproval required",
    tone: "warn",
  },
];

export default function ApprovalSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Review, approval &amp; separation of duties</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-8 break-words text-[#082F49] sm:text-3xl sm:leading-9">
            Review and approval never collapse into one state
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-6">
          <div className="overflow-hidden rounded-xl border border-[#DCE6EC] bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-2xl border-collapse text-left">
                <thead>
                  <tr className="bg-[#EAF1F6]">
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-b border-[#DCE6EC] px-4 py-3 font-mono text-[10px] font-medium uppercase leading-4 text-[#4E6172]"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => {
                    const b = index < rows.length - 1 ? "border-b border-[#DCE6EC]" : "";
                    return (
                      <tr key={row.stage}>
                        <td className={`px-4 py-3 text-sm leading-5 text-[#082F49] ${b}`}>
                          {row.stage}
                        </td>
                        <td className={`px-4 py-3 ${b}`}>
                          <span className="flex items-center gap-2.5 text-sm leading-5 text-[#082F49]">
                            <span
                              aria-hidden="true"
                              className={`flex size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${row.avatarClass}`}
                            >
                              {row.initials}
                            </span>
                            {row.role}
                          </span>
                        </td>
                        <td className={`px-4 py-3 ${b}`}>
                          <StatusChip label={row.status} tone={row.tone} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-5">
          <div className="flex gap-3.5 rounded-xl border border-[#9C7A1F] bg-[#F1EAD8] px-5 py-4">
            <AlertTriangleIcon
              className="mt-0.5 h-5 w-5 shrink-0 text-[#9C7A1F]"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-bold leading-5 text-[#6E5720]">
                Approval bound to version v4 — a v5 recalculation just invalidated it.
              </p>
              <p className="mt-1.5 text-sm leading-6 text-[#6E5720]">
                Central leaders can see this approval status without holding approval authority
                themselves; the Entity Payroll Owner must re-approve against v5.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
