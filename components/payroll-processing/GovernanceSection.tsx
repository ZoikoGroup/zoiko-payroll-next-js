import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const roles = [
  "Payroll Admin",
  "Processor",
  "Reviewer",
  "Approver",
  "Finance",
  "HR",
  "Integration Admin",
  "Auditor",
];

export default function GovernanceSection() {
  return (
    <section className="border-t border-b border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-[#0B1424] px-8 py-10 lg:grid-cols-2 lg:px-12 lg:py-14">
            <div>
              <Eyebrow tone="light">Global context · Roles · Audit</Eyebrow>
              <h2 className="mt-4 text-2xl font-extrabold leading-10 text-white sm:text-3xl">
                Enterprise governance across every entity and jurisdiction.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-slate-400">
                Entity, jurisdiction, currency and payroll calendar context travel with every run.
                Every material action is tied to a named role.
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {roles.map((role) => (
                  <li
                    key={role}
                    className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-2 text-sm leading-5 text-slate-200"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/payroll-processing/governance.png"
                alt="Payroll and finance team reviewing governance and audit records together"
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
