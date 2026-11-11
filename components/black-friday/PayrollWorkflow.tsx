import { Container, Eyebrow, Heading } from "./Primitives";

const steps = [
  { title: "Prepare", body: "Set up pay periods and gather payroll inputs." },
  { title: "Calculate", body: "Apply earnings, deductions and adjustments." },
  { title: "Validate", body: "Check inputs and results before they move on." },
  { title: "Review", body: "Named reviewers examine payroll outcomes." },
  { title: "Approve", body: "Required authorisation before payroll progresses." },
  { title: "Complete", body: "Approved, reportable outcomes with audit records." },
];

export default function PayrollWorkflow() {
  return (
    <section className="border-t border-slate-100 bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-[700px] text-center">
          <Eyebrow centered>Payroll Workflow</Eyebrow>
          <Heading className="mt-5">One controlled workflow. Every payroll stage.</Heading>
          <p className="mt-6 text-lg leading-7 text-slate-600">
            Manage payroll from validated inputs to approved, reportable outcomes through structured workflows.
          </p>
        </div>

        <ol className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {/* connector line, desktop only */}
          <span
            aria-hidden
            className="absolute left-[8.33%] right-[8.33%] top-7 hidden h-0.5 bg-gradient-to-r from-[#0c3556] via-teal-600 to-cyan-400 lg:block"
          />
          {steps.map((s, i) => {
            const last = i === steps.length - 1;
            return (
              <li key={s.title} className="relative flex flex-col items-center text-center">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold ring-[6px] ${
                    last
                      ? "bg-cyan-400 text-[#0c3556] ring-cyan-400/25"
                      : "bg-[#0c3556] text-white ring-slate-200"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-bold text-[#0c3556]">{s.title}</h3>
                <p className="mt-2 max-w-[170px] text-sm leading-[21px] text-slate-600">{s.body}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
