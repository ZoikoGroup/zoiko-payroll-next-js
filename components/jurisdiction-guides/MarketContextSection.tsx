import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const modules = [
  {
    title: "Calendars / pay frequency",
    description: "Educational context about pay periods, cutoffs, dates and exceptions.",
  },
  {
    title: "Worker / payroll inputs",
    description: "Categories of identity, employment, compensation and change inputs.",
  },
  {
    title: "Calculations / earnings / deductions",
    description: "Concept categories and review questions, not exact figures.",
  },
  {
    title: "Adjustments / retroactivity",
    description: "Operational questions and control considerations.",
  },
  {
    title: "Documents / reporting / filings",
    description: "Educational context and evidence questions.",
  },
  {
    title: "Payments / currency",
    description: "Operational considerations and roles.",
  },
  {
    title: "Records / evidence / retention",
    description: "Documentation categories and traceability considerations.",
  },
  {
    title: "Approvals / roles",
    description: "Operating-model questions and separation of duties.",
  },
];

export default function MarketContextSection() {
  return (
    <section className="bg-[#F9FAFB] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Market context &amp; payroll topic modules</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            What a guide explains — and what it hands off
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {modules.map((module, index) => (
            <Reveal key={module.title} delay={(index % 2) * 70}>
              <div className="h-full rounded-xl border border-slate-200 bg-white px-4 pb-4 pt-3.5">
                <p className="text-sm font-bold leading-5 text-[#0A2E4B]">{module.title}</p>
                <p className="mt-1 text-xs leading-5 text-gray-600">{module.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-5 text-xs leading-5 text-slate-400">
            Guides do not publish exact rates, thresholds, deadlines or legal conclusions unless
            sourced, scoped and dated by the governed content process — otherwise they summarize
            context and link to the approved local requirement record.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
