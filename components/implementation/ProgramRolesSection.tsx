import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const roles = [
  {
    avatar: "/images/implementation/avatar-implementation-lead.png",
    name: "Zoiko Implementation Lead",
    responsibility: "Named for the full program",
    stages: ["Discover", "Configure", "Launch"],
  },
  {
    avatar: "/images/implementation/avatar-payroll-lead.png",
    name: "Customer Payroll Lead",
    responsibility: "Owns scope & data accuracy",
    stages: ["Discover", "Prepare data", "Validate"],
  },
  {
    avatar: "/images/implementation/avatar-it-lead.png",
    name: "Customer IT / Integrations",
    responsibility: "Owns systems & data transfer",
    stages: ["Prepare data", "Validate"],
  },
  {
    avatar: "/images/implementation/avatar-finance-sponsor.png",
    name: "Customer Finance Sponsor",
    responsibility: "Signs off parallel test results",
    stages: ["Parallel test", "Launch"],
  },
];

export default function ProgramRolesSection() {
  return (
    <section className="bg-[#F6F8FB] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Program roles</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
            Four seats, clear responsibilities.
          </h2>
          <p className="mt-3 text-base leading-6 text-slate-600">
            Each role carries responsibility across specific stages — no ambiguity about who signs off
            on what.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, index) => (
            <Reveal key={role.name} delay={index * 80}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-5">
                <img
                  src={role.avatar}
                  alt={role.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <h3 className="mt-4 text-sm font-bold text-slate-900">{role.name}</h3>
                <p className="mt-1 text-xs text-slate-600">{role.responsibility}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {role.stages.map((stage) => (
                    <span
                      key={stage}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-600"
                    >
                      {stage}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
