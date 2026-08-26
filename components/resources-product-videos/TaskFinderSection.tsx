import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const tasks = [
  { title: "Prepare payroll", description: "Find preparation demonstrations.", href: "#video-library" },
  { title: "Calculate payroll", description: "Find calculation-related product tasks.", href: "#video-library" },
  { title: "Validate issues", description: "Find validation and review demonstrations.", href: "#video-library" },
  { title: "Review payroll", description: "Find review demonstrations.", href: "#video-library" },
  { title: "Approve payroll", description: "Find approval demonstrations.", href: "#video-library" },
  { title: "Adjust payroll", description: "Find deduction and adjustment demonstrations.", href: "#video-library" },
  { title: "Review employee records", description: "Find record-viewing demonstrations.", href: "#video-library" },
  { title: "Reporting & exports", description: "Find reporting demonstrations.", href: "#video-library" },
  { title: "Integrations", description: "Find connection and configuration demonstrations.", href: "#video-library" },
];

export default function TaskFinderSection() {
  return (
    <section id="task-finder" className="scroll-mt-24 bg-slate-100 py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Start with the task</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Recognition beats recall.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task, index) => (
            <Reveal key={task.title} delay={index * 50}>
              <Link
                href={task.href}
                className="flex h-full items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-blue-50 text-base font-bold text-sky-700">
                  {index + 1}
                </span>
                <span>
                  <span className="block text-sm font-bold leading-5 text-brand-dark">
                    {task.title}
                  </span>
                  <span className="mt-1.5 block text-xs leading-5 text-slate-600">
                    {task.description}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
