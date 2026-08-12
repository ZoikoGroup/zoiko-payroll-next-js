import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { BuildingsIcon, CardIcon, UserIcon, TrendIcon, LockIcon } from "../ui/icons";

const benefits = [
  {
    icon: BuildingsIcon,
    title: "Employees",
    description: "Find the current record fast, and know what to do if something's wrong.",
  },
  {
    icon: CardIcon,
    title: "Payroll teams",
    description: "See publication status and resolve failures without leaving the workspace.",
  },
  {
    icon: UserIcon,
    title: "HR / People",
    description: "Coordinate authorized employee record questions without disconnected handoffs.",
  },
  {
    icon: TrendIcon,
    title: "Finance",
    description: "Trust that published records tie back to an approved, versioned payroll outcome.",
  },
  {
    icon: LockIcon,
    title: "IT / Security",
    description: "Rely on role-based, server-enforced access to every record and history event.",
  },
];

export default function RoleBenefitsSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-lg">
          <Eyebrow>Role-based benefits</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-9 text-sky-950">
            Clearer payroll records for everyone who touches them.
          </h2>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.title} delay={index * 60}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-4">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-slate-100 text-sky-700">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="mt-2.5 text-sm font-bold leading-5 text-sky-950">{benefit.title}</h3>
                  <p className="mt-1 text-xs leading-4 text-slate-600">{benefit.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
