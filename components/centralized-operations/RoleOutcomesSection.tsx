import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const outcomes = [
  {
    role: "Payroll teams",
    outcome: "One current queue, scoped to what they own.",
    accent: "border-l-[#2563C9]",
  },
  {
    role: "Finance",
    outcome: "Entity-aware totals and reconciliation, currency-explicit.",
    accent: "border-l-[#2F7A52]",
  },
  {
    role: "HR",
    outcome: "Authorized payroll-impacting context, nothing more.",
    accent: "border-l-[#6B4FA0]",
  },
  {
    role: "Business leaders",
    outcome: "Material status without employee-level monitoring.",
    accent: "border-l-[#9C7A1F]",
  },
  {
    role: "IT",
    outcome: "Connector ownership, failure detail and reconciliation.",
    accent: "border-l-[#0E8A82]",
  },
  {
    role: "Security / audit",
    outcome: "Permission and evidence visibility across the portfolio.",
    accent: "border-l-[#B23A34]",
  },
];

const coreRoles = [
  "Organization Payroll Owner",
  "Central Payroll Lead",
  "Entity Payroll Owner",
  "Payroll Operator",
  "Payroll Approver",
  "Finance Reviewer",
  "HR / People Admin",
  "Integration Admin",
  "Security Admin",
  "Auditor / Viewer",
];

const questions = [
  { question: "How many jurisdictions?", purpose: "Shapes coordination scope." },
  { question: "How many legal entities / payroll groups?", purpose: "Sets the object-model scope." },
  { question: "What's your workforce range?", purpose: "Informs rollout wave sizing." },
  {
    question: "What's your primary objective?",
    purpose: "Consolidation, standardization or governance.",
  },
];

export default function RoleOutcomesSection() {
  return (
    <section id="find-your-path" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Outcomes by role</Eyebrow>
          <h2 className="mt-3 max-w-4xl text-2xl font-extrabold leading-8 break-words text-[#082F49] sm:text-3xl sm:leading-9">
            One queue for every function — not one dashboard trying to be everything
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-6">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="/images/centralized-operations/role-outcomes.png"
              alt="Cross-functional payroll, finance and IT teams at work"
              className="h-52 w-full object-cover sm:h-64"
            />
            <span className="absolute bottom-4 left-4 rounded-md bg-[#082F49]/85 px-3 py-1.5 font-mono text-xs leading-4 text-white">
              Every function, one shared operating language
            </span>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, index) => (
            <Reveal key={item.role} delay={(index % 3) * 70}>
              <div
                className={`h-full rounded-lg border border-[#DCE6EC] border-l-4 bg-white px-5 py-4 ${item.accent}`}
              >
                <p className="font-mono text-[10px] uppercase leading-4 text-[#4E6172]">
                  {item.role}
                </p>
                <p className="mt-1.5 text-sm leading-5 text-[#082F49]">{item.outcome}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8">
          <Eyebrow>Core roles</Eyebrow>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {coreRoles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-[#DCE6EC] bg-white px-3.5 py-1.5 font-mono text-xs leading-5 text-[#082F49]"
              >
                {role}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-8">
          <div className="rounded-2xl border border-[#DCE6EC] bg-white px-6 py-6 sm:px-8 sm:py-8">
            <Eyebrow>Find the right payroll path</Eyebrow>

            <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {questions.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-[#DCE6EC] bg-white px-4 py-3.5"
                >
                  <p className="text-sm font-bold leading-5 text-[#082F49]">{item.question}</p>
                  <p className="mt-1 text-xs leading-5 text-[#4E6172]">{item.purpose}</p>
                </div>
              ))}
            </div>

            <Link
              href="/solutions/finder"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-[#DCE6EC] px-5 py-3 text-sm font-semibold text-[#082F49] transition-all duration-200 hover:-translate-y-0.5"
            >
              Find your solution <span aria-hidden="true">&nbsp;→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
