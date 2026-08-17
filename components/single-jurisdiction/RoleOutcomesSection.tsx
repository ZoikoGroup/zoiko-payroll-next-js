import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const roles = [
  {
    title: "Payroll",
    description: "Run control, exception ownership and completion evidence.",
    tag: "Control Center",
    image: "/images/single-jurisdiction/role-payroll.png",
    alt: "Payroll team reviewing a run together",
  },
  {
    title: "Finance",
    description: "Reconciliation, variance context and downstream status.",
    tag: "Reconciliation",
    image: "/images/single-jurisdiction/role-finance.png",
    alt: "Finance leader reviewing reconciliation",
  },
  {
    title: "HR",
    description: "Employee records, correction routing and publication status.",
    tag: "Employee Records",
    image: "/images/single-jurisdiction/role-hr.png",
    alt: "HR professional reviewing employee records",
  },
  {
    title: "Business Leaders",
    description: "Readiness, blockers and completion status at a glance.",
    tag: "Readiness",
    image: "/images/single-jurisdiction/role-business.png",
    alt: "Business leader reviewing readiness",
  },
  {
    title: "IT / Security",
    description: "Integration health, access controls and audit evidence.",
    tag: "Integration & Security",
    image: "/images/single-jurisdiction/role-it-security.png",
    alt: "IT and security professional reviewing integration health",
  },
  {
    title: "Implementation / Transformation",
    description: "Discovery, configuration and governed launch readiness.",
    tag: "Implementation",
    image: "/images/single-jurisdiction/role-implementation.png",
    alt: "Implementation team planning together",
  },
];

export default function RoleOutcomesSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Role outcomes</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-slate-900">
            Proof mapped to what each role actually needs to see
          </h2>
          <p className="mt-2.5 max-w-2xl text-base leading-6 text-gray-700">
            The same platform, viewed through the lens of what matters to each function.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, index) => (
            <Reveal key={role.title} delay={(index % 3) * 80}>
              <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <img
                  src={role.image}
                  alt={role.alt}
                  className="h-48 w-full border-b border-slate-200 object-cover"
                />
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold leading-5 text-slate-900">{role.title}</h3>
                  <p className="mt-2 text-sm leading-5 text-slate-500">{role.description}</p>
                  <span className="mt-4 inline-block rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold leading-4 text-blue-600">
                    {role.tag}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
