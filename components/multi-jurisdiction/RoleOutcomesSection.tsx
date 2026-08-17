import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const roles = [
  {
    role: "Global Payroll Leader",
    outcome: "Portfolio readiness, blockers, owners and close progress.",
  },
  {
    role: "Regional Payroll Lead",
    outcome: "Multi-market coordination, escalation and calendar context.",
  },
  { role: "Local Payroll Team", outcome: "Local context, authority and configuration history." },
  { role: "Finance", outcome: "Currency-aware totals, reconciliation, entity scope and exports." },
  { role: "HR", outcome: "Authorized employee-data flow and effective-dated changes." },
  { role: "IT / Security", outcome: "Identity, data flows, connector health, access and audit." },
  {
    role: "Business Leaders",
    outcome: "Operational status without hidden scoring or employee detail.",
  },
  {
    role: "Procurement / Legal",
    outcome: "Market scope, vendors, residency, transfers and evidence.",
  },
];

export default function RoleOutcomesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Outcomes by role</Eyebrow>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, index) => (
            <Reveal key={role.role} delay={(index % 4) * 70}>
              <div className="h-full rounded-[10px] border border-[#DCE6EC] bg-white p-3.5">
                <p className="font-mono text-xs uppercase leading-4 text-[#4E6172]">{role.role}</p>
                <p className="mt-1.5 text-xs leading-4 text-[#082F49]">{role.outcome}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
