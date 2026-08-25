import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const families = [
  {
    code: "PR",
    title: "Payroll run / processing",
    description: "A run is stuck, missing, or shows the wrong stage.",
  },
  {
    code: "CA",
    title: "Calculation / deductions",
    description: "A calculation, deduction or adjustment looks wrong.",
  },
  {
    code: "AP",
    title: "Approvals / permissions",
    description: "Can't approve, review, or a role seems wrong.",
  },
  {
    code: "ER",
    title: "Employee payroll records",
    description: "A payslip or record is missing or incorrect.",
  },
  {
    code: "IN",
    title: "Integrations / imports",
    description: "A connection, import or export isn't working.",
  },
  {
    code: "RE",
    title: "Reporting / reconciliation",
    description: "A report or reconciliation looks incomplete.",
  },
  {
    code: "AC",
    title: "Account / sign-in / security",
    description: "Can't sign in, or a security concern.",
  },
  {
    code: "GP",
    title: "Global payroll / implementation",
    description: "Questions about markets or rollout.",
  },
];

export default function IssueFamiliesSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#DCE6EC] py-20 sm:py-24">
      <img
        src="/images/help-center/issue-families-bg.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="light">Start with your issue</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Six to eight clear families — never a dense taxonomy wall
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {families.map((family, index) => (
            <Reveal key={family.code} delay={index * 50}>
              <div className="h-full rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/15">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-light/20 text-xs font-semibold text-brand-light">
                  {family.code}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-white">{family.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{family.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
