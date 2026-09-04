"use client";

import Reveal from "../ui/Reveal";
import Eyebrow from "../payroll-guides/Eyebrow";

const categories = [
  {
    icon: "/d1.png",
    title: "Product & Platform",
    description: (
      <>
        What it is, workflow, approvals, records,<br />
        integrations, Zoiko One.
      </>
    ),
    count: "6 questions",
  },
  {
    icon: "/d2.png",
    title: "Plans & Buying",
    description: "Price, packaging, enterprise, procurement, demo, services.",
    count: "4 questions",
  },
  {
    icon: "/d3.png",
    title: "Implementation & Migration",
    description: "Readiness, data migration, testing, launch, responsibilities.",
    count: "4 questions",
  },
  {
    icon: "/d4.png",
    title: "Global Payroll & Jurisdictions",
    description: "Coverage, local requirements, multi-entity, market variation.",
    count: "3 questions",
  },
  {
    icon: "/d5.png",
    title: "Security, Privacy & Trust",
    description: "Access, data protection, assurance, evidence, procurement.",
    count: "3 questions",
  },
  {
    icon: "/d6.png",
    title: "Integrations & Data",
    description: "HRIS/finance/identity/API/data flows.",
    count: "3 questions",
  },
  {
    icon: "/d7.png",
    title: "Reporting & Reconciliation",
    description: "Reports, exports, reconciliations, audit evidence.",
    count: "3 questions",
  },
  {
    icon: "/d8.png",
    title: "Support, Status & Changes",
    description: "Support, incidents, updates, configuration help, videos.",
    count: "3 questions",
  },
];

export default function BrowseByCategory() {
  return (
    <section className="bg-[#E9F0F8] border-t border-slate-200 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow className="text-[#0A8FD0]">Browse by category</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold font-jakarta text-[#0A2E4B] leading-9">
            Eight categories — never hundreds of equally<br className="hidden sm:inline" /> weighted questions at once.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 60}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#E1EEF9]">
                  <img src={cat.icon} alt="" className="h-[36px] w-[36px]" />
                </div>
                <h3 className="mt-4 text-sm font-bold font-jakarta text-[#0A2E4B] leading-5">
                  {cat.title}
                </h3>
                <div className="mt-2 text-xs font-jakarta text-[#4E6172] leading-4 flex-1">
                  {cat.description}
                </div>
                <div className="mt-4 inline-flex w-fit rounded-[20px] bg-[#E1EEF9] px-3 py-1">
                  <span className="text-xs font-bold font-jakarta text-[#0A8FD0] leading-4">
                    {cat.count}
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