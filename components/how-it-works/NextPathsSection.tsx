import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const paths = [
  { goal: "Operate a run", title: "Payroll Processing" },
  { goal: "Understand authorization", title: "Payroll Approvals" },
  { goal: "Evaluate changes", title: "Deductions & Adjustments" },
  { goal: "Need document access", title: "Employee Payroll Records" },
  { goal: "Need reporting", title: "Reporting & Analytics" },
  { goal: "Need technical fit", title: "Integrations" },
  { goal: "Need security proof", title: "Security & Trust" },
  { goal: "Planning deployment", title: "Implementation" },
];

export default function NextPathsSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#F4F8FB] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Role outcomes / next paths</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Tell us your goal — we&rsquo;ll point you to the right page.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Explicit, goal-based paths. Nothing here is inferred from behavior.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {paths.map((path, index) => (
            <Reveal key={path.title} delay={index * 50}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {path.goal}
                </span>
                <span className="mt-2 text-base font-semibold text-brand-dark">{path.title}</span>
                <span className="mt-6 block h-px w-full bg-[#1483C7]" aria-hidden="true" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
