import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const features = [
  "Task-first guidance",
  "Reviewed dates",
  "Clear scope",
  "Authority handoffs",
  "Versioned corrections",
];

const tabs = ["All guides", "Prepare inputs", "Reconcile & report", "Implement / change"];

const guideCards = [
  {
    type: "CHECKLIST",
    title: "Payroll Operations Checklist: From Inputs to Close",
    scope: "General operations",
    reviewed: "Jul 2026",
  },
  {
    type: "GUIDE",
    title: "Designing Payroll Review and Approval Controls",
    scope: "Payroll leader",
    reviewed: "Jun 2026",
  },
  {
    type: "PLAYBOOK",
    title: "Managing Payroll Adjustments and Corrections",
    scope: "Payroll operations",
    reviewed: "Aug 2026",
  },
];

const typeColors: Record<string, string> = {
  CHECKLIST: "bg-[#E1EEF9] text-[#0A2E4B]",
  GUIDE: "bg-[#E1EEF9] text-[#0A2E4B]",
  PLAYBOOK: "bg-[#E1EEF9] text-[#0A2E4B]",
};

export default function HeroSection() {
  return (
    <section className="bg-[#F5F8FA] pt-14 pb-16 lg:pt-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          
          {/* Left content (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow className="text-[#0A8FD0]">Payroll guides</Eyebrow>

              <h1 className="mt-3 text-3xl font-extrabold font-jakarta text-[#0A2E4B] leading-[1.18] tracking-tight sm:text-4xl lg:text-[38px] xl:text-[40px]">
                Practical payroll guides for<br className="hidden sm:inline" /> stronger payroll operations.
              </h1>

              <p className="mt-4 text-base font-normal font-['Plus_Jakarta_Sans'] text-[#5B646B] leading-6">
                Explore practical guides, checklists and playbooks for payroll processes,<br />
                controls, reviews, records, reporting and implementation — with scope<br />
                and reviewed-date context kept visible.
              </p>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="#"
                  className="flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] px-6 text-sm font-bold font-jakarta text-white shadow-[0px_1px_2px_rgba(10,46,75,0.06)] transition-all duration-200 hover:-translate-y-0.5"
                >
                  Explore payroll guides
                </Link>
                <Link
                  href="#"
                  className="flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 text-sm font-bold font-jakarta text-[#0A2E4B] shadow-[0px_1px_2px_rgba(10,46,75,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  Contact Support
                </Link>
              </div>

              {/* Bullet Features with Border */}
              <div className="mt-8 max-w-[520px] border-t border-slate-200 pt-6">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A8FD0]" />
                      <span className="text-xs font-semibold font-jakarta text-[#0A2E4B] leading-5">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialist Avatars */}
              <div className="mt-7 flex items-center gap-3">
                <img
                  src="/abb.png"
                  alt="Specialist avatar"
                  className="h-6 w-6 rounded-full object-cover"
                />
                <p className="text-xs font-jakarta leading-4">
                  <span className="text-[#959595]">Reviewed by </span>
                  <span className="font-bold text-[#0A2E4B]">payroll operations specialists</span>
                  <span className="text-[#959595]"> before publish</span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: Search panel (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal delay={120}>
              <div className="w-full max-w-[480px] rounded-2xl border border-slate-200 bg-white p-5 shadow-[0px_8px_24px_rgba(10,46,75,0.08)]">
                {/* Search bar */}
                <div className="flex h-11 items-center gap-2.5 rounded-[10px] border border-slate-200 bg-[#F4F7FB] px-4">
                  <img src="/search.png" alt="Search icon" className="h-4 w-4 shrink-0" />
                  <span className="truncate text-xs font-jakarta text-[#959595] leading-5">
                    Search payroll guides — e.g., approvals, deductions, reconciliation
                  </span>
                </div>

                {/* Tabs */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {tabs.map((tab, i) => (
                    <span
                      key={tab}
                      className={`cursor-pointer rounded-[20px] px-3.5 py-1.5 text-xs font-bold font-jakarta leading-4 transition-colors ${
                        i === 0
                          ? "bg-[#0A2E4B] text-white"
                          : "bg-[#E1EEF9] text-[#0A2E4B] hover:bg-[#d0e4f5]"
                      }`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>

                {/* Guide cards */}
                <div className="mt-4 space-y-3">
                  {guideCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-[10px] border border-slate-200 p-4 transition-all duration-200 hover:border-[#0A8FD0]/50"
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`rounded-[5px] px-2 py-0.5 text-[9.5px] font-extrabold font-jakarta uppercase tracking-wide ${typeColors[card.type]}`}
                        >
                          {card.type}
                        </span>
                        <span className="rounded-[5px] bg-[#E1E8F0] px-2 py-0.5 text-[9.5px] font-bold font-jakarta text-[#4E6172]">
                          Current
                        </span>
                      </div>
                      <h3 className="mt-2.5 text-xs sm:text-[13px] font-bold font-jakarta text-[#0A2E4B] leading-5">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-xs font-jakarta text-[#959595] leading-4">
                        {card.scope} · Reviewed {card.reviewed}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}