import Reveal from "@/components/ui/Reveal";

interface Chapter {
  number: string;
  title: string;
  description: string;
}

const chapters: Chapter[] = [
  {
    number: "01",
    title: "Preparation & Inputs",
    description: "See how a payroll run gathers imported data and surfaces readiness.",
  },
  {
    number: "02",
    title: "Calculation Review & Validation",
    description: "Review totals, variances, and exceptions before approval.",
  },
  {
    number: "03",
    title: "Payroll Approvals",
    description: "Use custom review, division-by-role, comments, and approval states.",
  },
  {
    number: "04",
    title: "Deductions & Adjustments",
    description: "Review recurring, one-time, and retroactive changes with tracking prepared for audit.",
  },
  {
    number: "05",
    title: "Employee Payroll Records",
    description: "Inspect simulated employee record histories, and pay slips.",
  },
  {
    number: "06",
    title: "Reporting & Analytics",
    description: "Explore totals, payroll summaries, export options, and audit status.",
  },
];

export default function SixChaptersSection() {
  return (
    <section className="w-full bg-[#E9F0F8] px-4 py-10 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <Reveal>
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0A78C2]">
              <span className="sm:hidden">/ SIX CHAPTERS</span>
              <span className="hidden sm:inline">| SIX CHAPTERS</span>
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl md:text-[34px]">
              Know the journey before you start.
            </h2>
          </div>
        </Reveal>

        {/* Chapters 2x3 Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter, idx) => (
            <Reveal key={chapter.number} delay={idx * 60}>
              <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <span className="font-mono text-xs font-bold text-[#0A78C2]">
                  {chapter.number}
                </span>
                <h3 className="mt-2 text-base font-bold text-[#082F49]">
                  {chapter.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
                  {chapter.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
