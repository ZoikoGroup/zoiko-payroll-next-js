import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const gates = [
  {
    stage: "01 Discover",
    criteria: "Scoping document signed; jurisdictions & integrations confirmed",
    owner: "Implementation Lead",
    duration: "1–2 weeks",
  },
  {
    stage: "02 Configure",
    criteria: "Configuration reviewed against scope; access roles provisioned",
    owner: "Configuration Team",
    duration: "2–4 weeks",
  },
  {
    stage: "03 Prepare data",
    criteria: "100% required fields mapped; reconciliation within threshold",
    owner: "Customer Data Owner",
    duration: "1–3 weeks",
  },
  {
    stage: "04 Validate",
    criteria: "Test cases pass; zero unresolved critical exceptions",
    owner: "Zoiko QA",
    duration: "1–2 weeks",
  },
  {
    stage: "05 Parallel test",
    criteria: "Outputs match within tolerance across all parallel cycles",
    owner: "Finance Sponsor",
    duration: "1–2 cycles",
  },
  {
    stage: "06 Launch",
    criteria: "Go/no-go approved; first production cycle signed off",
    owner: "Implementation Lead",
    duration: "1 cycle",
  },
  {
    stage: "07 Optimize",
    criteria: "Handed to ongoing support; improvement backlog documented",
    owner: "Customer Success",
    duration: "Ongoing",
  },
];

const columns = ["Stage", "Exit criteria", "Owner", "Duration"];

export default function ExitGatesSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>At a glance</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
            Exit gates across the full program.
          </h2>
          <p className="mt-3 text-base leading-6 text-slate-600">
            Every stage carries a specific, checkable exit condition and a named owner — the same
            structure the platform itself uses for payroll approvals.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-50">
                  {columns.map((column) => (
                    <th
                      key={column}
                      className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide text-slate-400"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {gates.map((gate) => (
                  <tr key={gate.stage} className="border-t border-slate-200">
                    <td className="px-5 py-3.5 text-sm font-bold text-slate-900">{gate.stage}</td>
                    <td className="px-5 py-3.5 text-sm text-slate-600">{gate.criteria}</td>
                    <td className="px-5 py-3.5 text-sm text-slate-600">{gate.owner}</td>
                    <td className="px-5 py-3.5 text-sm text-slate-600">{gate.duration}</td>
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
