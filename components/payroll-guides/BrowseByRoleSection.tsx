import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const roles = [
  {
    title: "Payroll leader",
    description:
      "Operating model, decision rights, controls, scale, change\ngovernance.",
    handoff: "Leadership guides + global/implementation handoffs",
    image: "/Background (47).png",
  },
  {
    title: "Payroll operations / administrator",
    description:
      "Cycle execution, inputs, exceptions, adjustments,\nrecords.",
    handoff: "Task-level operational guides + Product Docs handoffs",
    image: "/Background (48).png",
  },
  {
    title: "Finance / controller",
    description:
      "Approvals, reconciliation, reporting, evidence, close\ncoordination.",
    handoff: "Control/reconciliation guides + Reporting",
    image: "/Background (49).png",
  },
  {
    title: "HR / People operations",
    description:
      "Worker/change inputs, ownership, handoffs,\nprivacy-aware collaboration.",
    handoff: "Input and records guides — no HR policy/legal inference",
    image: "/Background (50).png",
  },
  {
    title: "Implementation / transformation",
    description:
      "Discovery, migration, testing, parallel run, cutover\nquestions.",
    handoff: "Readiness guides + Implementation authority",
    image: "/Background (51).png",
  },
  {
    title: "Evaluator / buyer",
    description:
      "Operating model, control expectations, vendor/product\nevaluation.",
    handoff: "Buyer guides + Product/Pricing/Trust/demo",
    image: "/Background (52).png",
  },
];

export default function BrowseByRoleSection() {
  return (
    <section className="bg-[#F4F8FB] border-t border-slate-200 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow className="text-[#0A8FD0]">Browse by role</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold font-jakarta text-[#0A2E4B] leading-9">
              Guidance routed to the job you<br />actually do.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0px_1px_2px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200">
              <div className="h-[170px] bg-[#E1EEF9] overflow-hidden">
                <img src="/op.png" alt="Built around real jobs" className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-extrabold font-jakarta text-[#0A2E4B] leading-5">
                  Built around real jobs
                </h3>
                <p className="mt-1 text-xs font-jakarta text-[#4E6172] leading-5">
                  Every role sees emphasis suited to the decisions they actually make.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-[18px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, i) => (
            <Reveal key={role.title} delay={i * 60}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-indigo-50 overflow-hidden">
                  <img src={role.image} alt={role.title} className="h-[26px] w-[26px] object-contain" />
                </div>
                <h3 className="mt-4 text-base font-bold font-jakarta text-[#0A2E4B] leading-6">
                  {role.title}
                </h3>
                <p className="mt-2 text-xs font-jakarta text-[#5B646B] leading-4 flex-1" style={{ whiteSpace: "pre-line" }}>
                  {role.description}
                </p>
                <div className="mt-4 rounded-md bg-[#E1EEF9] px-3 py-2">
                  <p className="text-xs font-jakarta text-[#0A2E4B] leading-4">
                    {role.handoff}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}