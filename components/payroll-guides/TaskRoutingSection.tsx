import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const tasks = [
  {
    title: "Prepare payroll inputs",
    description:
      "What information, ownership and cutoffs should be ready before calculation begins?",
    link: "General input-readiness guides → current fields/settings: Product Documentation",
    image: "/Background (39).png",
  },
  {
    title: "Run and validate payroll",
    description:
      "How should teams structure calculation checks, exceptions and validation?",
    link: "Payroll operations guides → current workflow: Product Documentation",
    image: "/Background (40).png",
  },
  {
    title: "Review and approve",
    description:
      "How should separation of duties, material changes and approvals be organized?",
    link: "Approval/control guides → product authority: Payroll Approvals",
    image: "/Background (41).png",
  },
  {
    title: "Handle deductions and adjustments",
    description:
      "How should teams review recurring/one-time changes, corrections and evidence?",
    link: "General operations guide → local legal treatment: authoritative local sources",
    image: "/Background (42).png",
  },
  {
    title: "Maintain payroll records",
    description:
      "What records, ownership, retention questions and evidence should teams consider?",
    link: "Records/evidence guide → current controls: Product/Trust",
    image: "/Background (43).png",
  },
  {
    title: "Reconcile and report",
    description:
      "How should teams structure post-run reconciliation, variance review and reporting?",
    link: "Reporting guides → product reports/exports: Reporting/Docs",
    image: "/Background (44).png",
  },
  {
    title: "Implement or migrate",
    description:
      "What questions should teams answer before configuration, testing, parallel run and cutover?",
    link: "General readiness guides → customer-specific depth: Implementation",
    image: "/Background (45).png",
  },
  {
    title: "Scale across entities or jurisdictions",
    description:
      "What changes when payroll spans entities, providers or markets?",
    link: "Intro guide → cross-border depth: Global Payroll Resources",
    image: "/Background (46).png",
  },
];

export default function TaskRoutingSection() {
  return (
    <section className="bg-indigo-50 border-t border-slate-200 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <Reveal>
            <Eyebrow className="text-[#0A8FD0]">Start from the payroll task</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold font-jakarta text-[#0A2E4B] leading-9">
              Route straight to your job — no<br />taxonomy knowledge required.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl">
              <img src="/hello.png" alt="Payroll task routing" className="h-56 w-full rounded-2xl object-cover" />
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tasks.map((task, i) => (
            <Reveal key={task.title} delay={i * 60}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#E1EEF9] overflow-hidden">
                  <img src={task.image} alt={task.title} className="h-[36px] w-[36px] object-contain" />
                </div>
                <h3 className="mt-4 text-sm font-bold font-jakarta text-[#0A2E4B] leading-5">
                  {task.title}
                </h3>
                <p className="mt-2 text-xs font-jakarta text-[#4E6172] leading-4 flex-1">
                  {task.description}
                </p>
                <p className="mt-4 text-xs font-jakarta text-[#959595] leading-4">
                  {task.link}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}