import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const roles = [
  {
    scope: "Full program",
    title: "Payroll Owner",
    description: "Accountable for the payroll program across entities.",
  },
  {
    scope: "Prepare",
    title: "Processor / Admin",
    description: "Prepares and configures payroll runs for review.",
  },
  {
    scope: "Approve",
    title: "Payroll / Finance Approver",
    description: "Holds decision rights within a defined scope.",
  },
  {
    scope: "Review only",
    title: "Auditor",
    description: "Read access to decision history — no approval rights.",
  },
];

export default function DecisionRightsSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Decision rights &amp; separation of duties</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-9 text-sky-950">
            Authority is visible — it&rsquo;s never just a job title
          </h2>
          <p className="mt-4 text-base leading-6 text-slate-600">
            Permissions are scoped by organization, entity, jurisdiction, payroll group and approval
            policy. Prohibited role conflicts are blocked server-side, not just hidden in the interface
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, index) => (
            <Reveal key={role.title} delay={index * 60}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-5">
                <p className="font-mono text-[10px] uppercase leading-4 tracking-wide text-slate-500">
                  {role.scope}
                </p>
                <h3 className="mt-4 text-base font-bold text-sky-950">{role.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">{role.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-6">
          <div className="flex gap-4 rounded-xl border border-red-300 bg-red-50 px-5 py-4">
            <img
              src="/images/payroll-approvals/icon-warning.svg"
              alt=""
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0"
            />
            <div>
              <p className="text-sm font-bold text-[#B23A34]">Self-approval blocked</p>
              <p className="mt-1 text-sm leading-5 text-slate-700">
                M. Ortiz prepared this run and cannot also approve it — enforced server-side at commit,
                based on scope, role and request state.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
